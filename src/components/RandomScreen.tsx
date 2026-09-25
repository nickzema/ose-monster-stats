import { useState } from "react";
import type { ReactNode } from "react";
import { useActions } from "../context";
import { roll } from "../dice";
import { rollHpFor, rollNa } from "../rolls";
import { DUNGEON_LEVEL_1, DUNGEON_NOT_LOADED, SUBTABLES, WILD_D8, WILD_NOT_LOADED } from "../data/tables";
import type { Monster } from "../types";
import { CompactStats, D20Icon, MonsterLink } from "./MonsterCard";

type TableKey = string; // "wild:<terrain>" | "dungeon:1"

interface RandResult {
  chain: { d8?: number; subKey?: string; category?: string; d12?: number; d20?: number };
  monsterName: string;
  qty: number | null;
  hp: number[] | null;
}

interface Props {
  onBack: () => void;
  onAddEncounter: (m: Monster, hp: number[], hidden: boolean) => void;
}

export default function RandomScreen({ onBack, onAddEncounter }: Props) {
  const [tableKey, setTableKey] = useState<TableKey | null>(null);
  const [result, setResult] = useState<RandResult | null>(null);
  const [busy, setBusy] = useState(false);

  const open = (key: TableKey | null) => {
    setTableKey(key);
    setResult(null);
  };

  return (
    <div>
      <button className="btn text back" onClick={onBack}>&larr; Back</button>
      <div className="mon-card">
        {tableKey === null ? (
          <Picker onOpen={open} busy={busy} setBusy={setBusy} setResult={setResult} />
        ) : (
          <TableDetail tableKey={tableKey} onBack={() => open(null)} busy={busy} setBusy={setBusy} setResult={setResult} />
        )}
        {result && <ResultCard key={JSON.stringify(result)} result={result} onAddEncounter={onAddEncounter} />}
      </div>
    </div>
  );
}

interface RollerProps {
  busy: boolean;
  setBusy: (b: boolean) => void;
  setResult: (r: RandResult | null) => void;
}

/** d8 -> sub-table -> d12 (wilderness) or d20 (dungeon), then Number Appearing, then HP. */
function useRollTable({ busy, setBusy, setResult }: RollerProps) {
  const a = useActions();
  return async (key: TableKey) => {
    if (busy) return;
    setBusy(true);
    setResult(null);
    try {
      const t = a.rollTarget;
      const [source, id] = key.split(":");
      let chain: RandResult["chain"];
      let monsterName: string;
      let naExpr: string | null;

      if (source === "wild") {
        const terrain = WILD_D8[id];
        const out = await roll("1d8 #Terrain, 1d12 #Subtable", t, 2);
        const [d8, d12] = out.rows;
        const [subKey, category] = terrain.rows[d8 - 1].split("-");
        monsterName = SUBTABLES[subKey][category][d12 - 1];
        chain = { d8, subKey, category, d12 };
        naExpr = a.byName(monsterName)?.naWild ?? null;
      } else {
        const out = await roll("1d20 #Dungeon Level 1", t);
        const d20 = out.total;
        const entry = DUNGEON_LEVEL_1[d20 - 1];
        monsterName = entry.name;
        chain = { d20 };
        naExpr = entry.na;
      }

      const qty = naExpr ? (await rollNa(naExpr, `${monsterName} Number Appearing`, t)).value : null;
      const monster = a.byName(monsterName);
      const hp = monster && qty ? (await rollHpFor(monster, qty, t)).hp : null;
      setResult({ chain, monsterName, qty, hp });
    } finally {
      setBusy(false);
    }
  };
}

function Picker({ onOpen, ...roller }: { onOpen: (k: TableKey) => void } & RollerProps) {
  const rollTable = useRollTable(roller);
  const item = (key: TableKey, label: string) => (
    <div className="picker-item" key={key}>
      <span className="name-zone" onClick={() => onOpen(key)}><span className="name">{label}</span></span>
      <span className="d20-zone" onClick={(e) => { e.stopPropagation(); rollTable(key); }}><D20Icon /></span>
    </div>
  );
  const disabled = (label: string) => (
    <div className="picker-item disabled" key={label} title="Not loaded yet">
      <span className="name-zone"><span className="name">{label}</span></span>
      <span className="d20-zone"><D20Icon /></span>
    </div>
  );

  return (
    <>
      <h3>Random Encounter</h3>
      <div className="picker-cols">
        <div className="picker-col">
          <h4>Wilderness</h4>
          {Object.entries(WILD_D8).map(([k, t]) => item(`wild:${k}`, t.label))}
          {WILD_NOT_LOADED.map(disabled)}
        </div>
        <div className="picker-col">
          <h4>Dungeon</h4>
          {item("dungeon:1", "Level 1")}
          {DUNGEON_NOT_LOADED.map(disabled)}
        </div>
      </div>
    </>
  );
}

function TableDetail({ tableKey, onBack, ...roller }: { tableKey: TableKey; onBack: () => void } & RollerProps) {
  const a = useActions();
  const rollTable = useRollTable(roller);
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
    <>
      <button className="btn text back" onClick={onBack}>&larr; Back to Terrains &amp; Levels</button>
      <h3>{title}</h3>
      {tables}
      <button className="btn block rand-launch" disabled={roller.busy} onClick={() => rollTable(tableKey)}>
        {roller.busy ? "Rolling…" : "Roll Randomly"}
      </button>
    </>
  );
}

function ResultCard({ result, onAddEncounter }: { result: RandResult; onAddEncounter: Props["onAddEncounter"] }) {
  const a = useActions();
  const [hidden, setHidden] = useState(false);
  const { chain, monsterName, qty, hp } = result;
  const monster = a.byName(monsterName);

  return (
    <>
      <p className="roll-chain">
        {chain.d8 !== undefined ? (
          <>d8 &rarr; <b>{chain.d8}</b> (Sub-table {chain.subKey}, {chain.category}) &middot; d12 &rarr; <b>{chain.d12}</b></>
        ) : (
          <>d20 &rarr; <b>{chain.d20}</b> (Dungeon Level 1)</>
        )}
        {" "}&rarr; <b>{monsterName}</b>
        {qty !== null && <> &middot; NA &rarr; <b>{qty}</b></>}
      </p>

      {!monster || !hp ? (
        <div className="rand-card">
          <h3>{monsterName}</h3>
          <p className="not-loaded">
            Full stats for this monster are not in the starter roster yet - only the name
            {qty !== null ? " and Number Appearing" : ""} came from the real table.
          </p>
        </div>
      ) : (
        <div className="rand-card">
          <h3>{monster.name}</h3>
          <CompactStats m={monster} />
          <p className="caption" style={{ margin: "0 0 6px" }}>Rolled HP: {hp.join(", ")}</p>
          <div className="rand-add-row">
            <label className="hidden-check">
              <input type="checkbox" checked={hidden} onChange={(e) => setHidden(e.target.checked)} /> Hidden from players
            </label>
            <button className="btn" onClick={() => onAddEncounter(monster, hp, hidden)}>Add to Encounter</button>
            {!a.isInLibrary(monster.name) && (
              <button className="btn text" onClick={() => a.addToLibrary(monster.name)}>Add to Library</button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
