import { useState } from "react";
import type { ReactNode } from "react";
import { useActions } from "../context";
import { roll } from "../dice";
import { rollHpFor, rollNa } from "../rolls";
import { DUNGEON_LEVELS, SUBTABLES, WILD_TERRAINS } from "../data/tables";
import { resolveTableName } from "../resolve";
import type { Monster } from "../types";
import Modal from "./Modal";
import { CompactStats, D20Icon, MonsterLink } from "./MonsterCard";

type TableKey = string; // "wild:<terrain label>" | "dungeon:<level>"
type Kind = "wild" | "dungeon";

interface RandResult {
  chainText: ReactNode;
  cell: string; // the table's own wording
  monsterName: string | null; // resolved entry, once known
  options: string[]; // entries the DM chooses between (e.g. kinds of shark)
  pickedBy: string | null; // e.g. "Heads 1d8+4 → 9"
  npc: boolean;
  naExpr: string | null;
  qty: number | null;
  hp: number[] | null;
}

interface Props {
  onBack: () => void;
  onAddEncounter: (m: Monster, hp: number[], hidden: boolean) => void;
}

const WILD_ROWS = Object.keys(WILD_TERRAINS).sort((x, y) => x.localeCompare(y));
const DUNGEON_ROWS = Object.keys(DUNGEON_LEVELS);
const levelLabel = (k: string) => k.replace("-", "\u2013");
const splitKey = (key: TableKey) => {
  const i = key.indexOf(":");
  return [key.slice(0, i), key.slice(i + 1)] as const;
};

export default function RandomScreen({ onBack, onAddEncounter }: Props) {
  const a = useActions();
  const [kind, setKind] = useState<Kind>("wild");
  const [tableKey, setTableKey] = useState<TableKey | null>(null);
  const [result, setResult] = useState<RandResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [lastKey, setLastKey] = useState<TableKey | null>(null);

  /** Table dice -> entry -> (variant roll) -> Number Appearing -> HP. */
  const rollTable = async (key: TableKey) => {
    if (busy) return;
    setBusy(true);
    setLastKey(key);
    try {
      const t = a.targets;
      const [source, id] = splitKey(key);
      let cell: string;
      let tableNa: string | null = null;
      let chainText: ReactNode;

      if (source === "wild") {
        const out = await roll("1d8 #Terrain, 1d12 #Subtable", t.check, 2);
        const [d8, d12] = out.rows;
        const [subKey, category] = WILD_TERRAINS[id][d8 - 1].split("-");
        cell = SUBTABLES[subKey][category][d12 - 1];
        chainText = (
          <>{id}: d8 &rarr; <b>{d8}</b> (Sub-table {subKey}, {category}) &middot; d12 &rarr; <b>{d12}</b></>
        );
      } else {
        const out = await roll(`1d20 #Dungeon ${id}`, t.check);
        const entry = DUNGEON_LEVELS[id][out.total - 1];
        cell = entry.name;
        tableNa = entry.na;
        chainText = <>Dungeon {levelLabel(id)}: d20 &rarr; <b>{out.total}</b></>;
      }

      const r = resolveTableName(cell, a.byName);
      let monsterName: string | null = null;
      let options: string[] = [];
      let pickedBy: string | null = null;
      if (r.kind === "one") monsterName = r.name;
      if (r.kind === "pick") options = r.names;
      if (r.kind === "dice") {
        const v = (await roll(`${r.dice} #${cell.replace(/[+\-*/,()#]/g, " ")}`, t.check)).total;
        monsterName = r.names[Math.max(0, Math.min(r.names.length - 1, v - r.min))];
        pickedBy = `${r.dice} \u2192 ${v}`;
      }

      // Number Appearing: the dungeon table's own value, or the monster's wilderness value.
      // (When the DM still has to pick which kind, wilderness NA waits for that choice.)
      const naExpr = tableNa ?? (monsterName ? a.byName(monsterName)?.naWild ?? null : null);
      const qty = naExpr ? Math.max(1, (await rollNa(naExpr, `${cell} Number Appearing`, t.check)).value) : null;
      const m = monsterName ? a.byName(monsterName) : undefined;
      const hp = m && qty ? (await rollHpFor(m, qty, t.hp)).hp : null;
      setResult({ chainText, cell, monsterName, options, pickedBy, npc: r.kind === "npc", naExpr, qty, hp });
    } finally {
      setBusy(false);
    }
  };

  /** The DM picked which entry a multi-option result means; roll its HP now. */
  const choose = async (name: string) => {
    if (!result) return;
    const m = a.byName(name);
    if (!m) return;
    setBusy(true);
    try {
      const naExpr = result.naExpr ?? m.naWild;
      const qty = result.qty ?? Math.max(1, (await rollNa(naExpr, `${name} Number Appearing`, a.targets.check)).value);
      const hp = (await rollHpFor(m, qty, a.targets.hp)).hp;
      setResult({ ...result, monsterName: name, naExpr, qty, hp });
    } finally {
      setBusy(false);
    }
  };

  const rows = kind === "wild" ? WILD_ROWS.map((k) => ({ key: `wild:${k}`, label: k })) : DUNGEON_ROWS.map((k) => ({ key: `dungeon:${k}`, label: levelLabel(k) }));

  return (
    <div>
      {tableKey === null ? (
        <>
          <button className="btn text back" onClick={onBack}>&larr; Back</button>
          <h3>Random Encounter</h3>
          <div className="seg-toggle" style={{ flex: "none", marginBottom: 10 }}>
            <button className={`seg-btn${kind === "wild" ? " active" : ""}`} onClick={() => setKind("wild")}>Wilderness</button>
            <button className={`seg-btn${kind === "dungeon" ? " active" : ""}`} onClick={() => setKind("dungeon")}>Dungeon</button>
          </div>
          {rows.map((row) => (
            <div className="picker-item" key={row.key}>
              <span className="name-zone" onClick={() => setTableKey(row.key)}>
                <span className="name">{row.label}</span>
                <span className="picker-sub">Table</span>
              </span>
              <button className="d20-zone" title="Roll" disabled={busy} onClick={() => rollTable(row.key)}><D20Icon /></button>
            </div>
          ))}
        </>
      ) : (
        <TableDetail tableKey={tableKey} busy={busy} onBack={() => setTableKey(null)} onRoll={() => rollTable(tableKey)} />
      )}

      {result && (
        <ResultModal
          result={result}
          busy={busy}
          onClose={() => setResult(null)}
          onChoose={choose}
          onReroll={() => {
            setResult(null);
            if (lastKey) rollTable(lastKey);
          }}
          onAddEncounter={(m, hp, hidden) => {
            setResult(null);
            onAddEncounter(m, hp, hidden);
          }}
        />
      )}
    </div>
  );
}

function TableDetail({ tableKey, busy, onBack, onRoll }: { tableKey: TableKey; busy: boolean; onBack: () => void; onRoll: () => void }) {
  const a = useActions();
  const [source, id] = splitKey(tableKey);

  let title: string;
  let tables: ReactNode;

  if (source === "wild") {
    const col = WILD_TERRAINS[id];
    title = id;
    const usedKeys = [...new Set(col.map((cell) => cell.split("-")[0]))];
    tables = (
      <>
        <div className="table-group">
          <h4>d8</h4>
          <table className="turn-table compact">
            <thead><tr><th>Roll</th><th>Result</th></tr></thead>
            <tbody>
              {col.map((cell, i) => {
                const [subKey, category] = cell.split("-");
                return <tr key={i}><td>{i + 1}</td><td>Sub-table {subKey}, {category}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
        {usedKeys.map((subKey) => {
          // Only the columns this terrain can actually reach.
          const categories = Object.keys(SUBTABLES[subKey]).filter((c) => col.includes(`${subKey}-${c}`));
          return (
            <div className="table-group" key={subKey}>
              <h4>Sub-table {subKey}</h4>
              <table className="turn-table compact">
                <thead><tr><th>d12</th>{categories.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                <tbody>
                  {Array.from({ length: 12 }, (_, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      {categories.map((c) => <td key={c}><MonsterLink name={SUBTABLES[subKey][c][i]} /></td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </>
    );
  } else {
    title = `Dungeon ${levelLabel(id)}`;
    tables = (
      <div className="table-group">
        <h4>d20</h4>
        <table className="turn-table compact">
          <thead><tr><th>Roll</th><th>Monster</th><th>HD</th><th>NA</th></tr></thead>
          <tbody>
            {DUNGEON_LEVELS[id].map((e, i) => {
              const r = resolveTableName(e.name, a.byName);
              const hd = r.kind === "one" ? a.byName(r.name)?.hd : r.kind === "npc" || r.kind === "none" ? undefined : "Varies";
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td><MonsterLink name={e.name} /></td>
                  <td>{hd ?? "\u2014"}</td>
                  <td>{e.na}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="mon-card">
      <button className="btn text back" onClick={onBack}>&larr; Back to Terrains &amp; Levels</button>
      <div className="table-head">
        <h3>{title}</h3>
        <button className="btn roll-btn" disabled={busy} onClick={onRoll}>
          <D20Icon /> {busy ? "Rolling…" : "Roll"}
        </button>
      </div>
      {tables}
    </div>
  );
}

function ResultModal({
  result,
  busy,
  onClose,
  onChoose,
  onReroll,
  onAddEncounter,
}: {
  result: RandResult;
  busy: boolean;
  onClose: () => void;
  onChoose: (name: string) => void;
  onReroll: () => void;
  onAddEncounter: Props["onAddEncounter"];
}) {
  const a = useActions();
  const [hidden, setHidden] = useState(false);
  const { chainText, cell, monsterName, options, pickedBy, npc, qty, hp } = result;
  const monster = monsterName ? a.byName(monsterName) : undefined;
  const choosing = !monster && options.length > 0;

  return (
    <Modal
      title={monster ? monster.name : cell}
      onClose={onClose}
      footer={
        <>
          <button className="btn text" disabled={busy} onClick={onReroll}>Reroll</button>
          {monster && hp && !a.isInLibrary(monster.name) && (
            <button className="btn outline" onClick={() => a.addToLibrary(monster.name)}>Add to Library</button>
          )}
          {monster && hp ? (
            <button className="btn" onClick={() => onAddEncounter(monster, hp, hidden)}>Add to Encounter</button>
          ) : (
            <button className="btn" onClick={onClose}>Close</button>
          )}
        </>
      }
    >
      <p className="roll-chain" style={{ marginTop: 0 }}>
        {chainText} &rarr; <b>{cell}</b>
        {pickedBy && <> &middot; {pickedBy}</>}
      </p>

      <div className="result-stats">
        <div className="compact-cell"><div className="compact-chip">Number Appearing</div><div className="compact-val big">{qty ?? "\u2014"}</div></div>
      </div>

      {monster && hp ? (
        <>
          <CompactStats m={monster} />
          <p className="field-label">HP</p>
          <div className="enc-hp-list" style={{ marginTop: 0, marginBottom: 10 }}>
            {hp.map((v, i) => <span className="enc-hp-chip static" key={i}>{v}</span>)}
          </div>
          <label className="hidden-check">
            <input type="checkbox" checked={hidden} onChange={(e) => setHidden(e.target.checked)} /> Hidden from players
          </label>
        </>
      ) : choosing ? (
        <>
          <p className="field-label">Which one?</p>
          <div className="pick-list">
            {options.map((n) => {
              const m = a.byName(n);
              return (
                <button className="pick-opt" key={n} disabled={busy} onClick={() => onChoose(n)}>
                  <span>{n}</span><b>{m ? `HD ${m.hd}` : ""}</b>
                </button>
              );
            })}
          </div>
        </>
      ) : npc ? (
        <p className="not-loaded">An NPC adventuring party. Build it with the Adventuring Parties rules (OSE Classic Monsters, p. 76).</p>
      ) : (
        <p className="not-loaded">No stat block for this entry.</p>
      )}
    </Modal>
  );
}
