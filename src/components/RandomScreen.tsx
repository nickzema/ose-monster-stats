import { useState } from "react";
import type { ReactNode } from "react";
import { useActions } from "../context";
import { roll } from "../dice";
import { rollHpFor, rollNa } from "../rolls";
import { DUNGEON_LEVEL_1, DUNGEON_NOT_LOADED, SUBTABLES, WILD_D8, WILD_NOT_LOADED } from "../data/tables";
import type { Monster } from "../types";
import Modal from "./Modal";
import { CompactStats, D20Icon, MonsterLink } from "./MonsterCard";

type TableKey = string; // "wild:<terrain>" | "dungeon:1"
type Kind = "wild" | "dungeon";

interface RandResult {
  chain: { d8?: number; subKey?: string; category?: string; d12?: number; d20?: number };
  source: string; // table title
  monsterName: string;
  qty: number | null;
  hp: number[] | null;
}

interface Props {
  onBack: () => void;
  onAddEncounter: (m: Monster, hp: number[], hidden: boolean) => void;
}

// Loaded and not-yet-loaded terrains in one alphabetical list.
const WILD_ROWS: { key: TableKey | null; label: string }[] = [
  ...Object.entries(WILD_D8).map(([k, t]) => ({ key: `wild:${k}` as TableKey | null, label: t.label })),
  ...WILD_NOT_LOADED.map((label) => ({ key: null, label })),
].sort((x, y) => x.label.localeCompare(y.label));

const DUNGEON_ROWS: { key: TableKey | null; label: string }[] = [
  { key: "dungeon:1", label: "Level 1" },
  ...DUNGEON_NOT_LOADED.map((label) => ({ key: null, label })),
];

export default function RandomScreen({ onBack, onAddEncounter }: Props) {
  const a = useActions();
  const [kind, setKind] = useState<Kind>("wild");
  const [tableKey, setTableKey] = useState<TableKey | null>(null);
  const [result, setResult] = useState<RandResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [lastKey, setLastKey] = useState<TableKey | null>(null);

  /** d8 -> sub-table -> d12 (wilderness) or d20 (dungeon), then Number Appearing, then HP. */
  const rollTable = async (key: TableKey) => {
    if (busy) return;
    setBusy(true);
    setLastKey(key);
    try {
      const t = a.targets;
      const [source, id] = key.split(":");
      let chain: RandResult["chain"];
      let monsterName: string;
      let naExpr: string | null;
      let title: string;

      if (source === "wild") {
        const terrain = WILD_D8[id];
        title = terrain.label;
        const out = await roll("1d8 #Terrain, 1d12 #Subtable", t.check, 2);
        const [d8, d12] = out.rows;
        const [subKey, category] = terrain.rows[d8 - 1].split("-");
        monsterName = SUBTABLES[subKey][category][d12 - 1];
        chain = { d8, subKey, category, d12 };
        naExpr = a.byName(monsterName)?.naWild ?? null;
      } else {
        title = "Dungeon Level 1";
        const out = await roll("1d20 #Dungeon Level 1", t.check);
        const d20 = out.total;
        const entry = DUNGEON_LEVEL_1[d20 - 1];
        monsterName = entry.name;
        chain = { d20 };
        naExpr = entry.na;
      }

      const qty = naExpr ? (await rollNa(naExpr, `${monsterName} Number Appearing`, t.check)).value : null;
      const monster = a.byName(monsterName);
      const hp = monster && qty ? (await rollHpFor(monster, qty, t.hp)).hp : null;
      setResult({ chain, source: title, monsterName, qty, hp });
    } finally {
      setBusy(false);
    }
  };

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
          {(kind === "wild" ? WILD_ROWS : DUNGEON_ROWS).map((row) =>
            row.key ? (
              <div className="picker-item" key={row.label}>
                <span className="name-zone" onClick={() => setTableKey(row.key)}>
                  <span className="name">{row.label}</span>
                  <span className="picker-sub">Table</span>
                </span>
                <button className="d20-zone" title="Roll" disabled={busy} onClick={() => rollTable(row.key as TableKey)}><D20Icon /></button>
              </div>
            ) : (
              <div className="picker-item disabled" key={row.label}>
                <span className="name-zone">
                  <span className="name">{row.label}</span>
                  <span className="picker-sub">Not loaded yet</span>
                </span>
                <span className="d20-zone"><D20Icon /></span>
              </div>
            )
          )}
        </>
      ) : (
        <TableDetail tableKey={tableKey} busy={busy} onBack={() => setTableKey(null)} onRoll={() => rollTable(tableKey)} />
      )}

      {result && (
        <ResultModal
          key={JSON.stringify(result)}
          result={result}
          busy={busy}
          onClose={() => setResult(null)}
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
  const [source, id] = tableKey.split(":");

  let title: string;
  let tables: ReactNode;

  if (source === "wild") {
    const terrain = WILD_D8[id];
    title = terrain.label;
    const usedKeys = [...new Set(terrain.rows.map((cell) => cell.split("-")[0]))];
    tables = (
      <>
        <div className="table-group">
          <h4>d8</h4>
          <table className="turn-table compact">
            <thead><tr><th>Roll</th><th>Result</th></tr></thead>
            <tbody>
              {terrain.rows.map((cell, i) => {
                const [subKey, category] = cell.split("-");
                return <tr key={i}><td>{i + 1}</td><td>Sub-table {subKey}, {category}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
        {usedKeys.map((subKey) => {
          const categories = Object.keys(SUBTABLES[subKey]);
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
    title = "Dungeon Level 1";
    tables = (
      <div className="table-group">
        <h4>d20</h4>
        <table className="turn-table compact">
          <thead><tr><th>Roll</th><th>Monster</th><th>HD</th><th>NA</th></tr></thead>
          <tbody>
            {DUNGEON_LEVEL_1.map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td><MonsterLink name={e.name} /></td>
                <td>{a.byName(e.name)?.hd ?? "\u2014"}</td>
                <td>{e.na}</td>
              </tr>
            ))}
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
  onReroll,
  onAddEncounter,
}: {
  result: RandResult;
  busy: boolean;
  onClose: () => void;
  onReroll: () => void;
  onAddEncounter: Props["onAddEncounter"];
}) {
  const a = useActions();
  const [hidden, setHidden] = useState(false);
  const { chain, monsterName, qty, hp } = result;
  const monster = a.byName(monsterName);

  return (
    <Modal
      title={monsterName}
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
        {result.source}:{" "}
        {chain.d8 !== undefined ? (
          <>d8 &rarr; <b>{chain.d8}</b> (Sub-table {chain.subKey}, {chain.category}) &middot; d12 &rarr; <b>{chain.d12}</b></>
        ) : (
          <>d20 &rarr; <b>{chain.d20}</b></>
        )}
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
      ) : (
        <p className="not-loaded">
          Full stats for this monster are not in the starter roster yet - only the name
          {qty !== null ? " and Number Appearing" : ""} came from the real table.
        </p>
      )}
    </Modal>
  );
}
