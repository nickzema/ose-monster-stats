import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useActions } from "../context";
import type { PopoverState } from "../context";
import { rollNa, rollSave } from "../rolls";
import type { EncounterEntry, Monster } from "../types";
import { CompactStats, SAVES } from "./MonsterCard";
import { namesOf, resolveTableName } from "../resolve";

interface Props {
  state: PopoverState;
  encounter: EncounterEntry[];
  onSetHp: (entryId: string, index: number, value: number) => void;
}

export default function Popover({ state, encounter, onSetHp }: Props) {
  const a = useActions();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ left: 8, top: 8 });

  useLayoutEffect(() => {
    const place = () => {
      const r = state.anchor.getBoundingClientRect();
      const h = ref.current?.offsetHeight ?? 0;
      const below = r.bottom + 6;
      // Flip above the anchor when there isn't room below; never off the top.
      const top = below + h > window.innerHeight - 8 ? Math.max(8, r.top - h - 6) : below;
      setPos({ left: Math.max(8, Math.min(r.left, window.innerWidth - 250)), top });
    };
    place();
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [state]);

  // Pinned popovers close on any click outside them.
  useEffect(() => {
    const pinned = state.kind !== "monster" || state.pinned;
    if (!pinned) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node;
      if (ref.current?.contains(target) || state.anchor.contains(target)) return;
      a.closePopover();
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [state, a]);

  let body: ReactNode = null;

  if (state.kind === "monster") {
    const r = resolveTableName(state.name, a.byName);
    const m = r.kind === "one" ? a.byName(r.name) : undefined;
    const group = namesOf(r);
    if (m) {
      body = (
        <>
          <h4>{m.name}</h4>
          <CompactStats m={m} />
          {state.pinned && (
            <div className="rand-add-row">
              <button className="btn text" onClick={() => { a.closePopover(); a.openCard(m.name); }}>View Card</button>
              <button className="btn" onClick={() => { a.closePopover(); a.openAdd(m); }}>Add to Encounter</button>
            </div>
          )}
        </>
      );
    } else if (group.length) {
      body = (
        <>
          <h4>{state.name}</h4>
          {r.kind === "dice" && <p className="caption" style={{ margin: "0 0 6px" }}>Rolled {r.dice} when this comes up.</p>}
          <div className="pick-list">
            {group.map((n) => {
              const gm = a.byName(n);
              return (
                <button className="pick-opt" key={n} onClick={() => { a.closePopover(); a.openCard(n); }}>
                  <span>{n}</span><b>{gm ? `HD ${gm.hd}` : ""}</b>
                </button>
              );
            })}
          </div>
        </>
      );
    } else return null;
  } else if (state.kind === "hp") {
    const entry = encounter.find((e) => e.id === state.entryId);
    const h = entry?.hp[state.index];
    if (!entry || !h) return null;
    body = (
      <HpEditor
        name={entry.monsterName}
        cur={h.cur}
        max={h.max}
        onChange={(v) => onSetHp(entry.id, state.index, v)}
        onDone={() => a.closePopover()}
      />
    );
  } else if (state.kind === "saves") {
    const m = a.byName(state.monsterName);
    if (!m) return null;
    body = (
      <SavePicker
        m={m}
        onRoll={(label, target, mod) => {
          a.closePopover();
          a.runRoll(() => rollSave(m, label, target, mod, a.targets.combat));
        }}
      />
    );
  } else {
    const m = a.byName(state.monsterName);
    if (!m) return null;
    const roll = (where: "Dungeon" | "Wilderness", expr: string) => {
      a.closePopover();
      a.runRoll(async () => {
        const { value, local } = await rollNa(expr, `${m.name} Number Appearing ${where}`, a.targets.check);
        return { label: `Number Appearing (${where})`, num: value, detail: `Rolled ${expr}`, success: null, local };
      });
    };
    body = (
      <>
        <h4>Number Appearing</h4>
        <div className="pick-list">
          <button className="pick-opt" onClick={() => roll("Dungeon", m.naDungeon)}><span>Dungeon</span><b>{m.naDungeon}</b></button>
          <button className="pick-opt" onClick={() => roll("Wilderness", m.naWild)}><span>Wilderness</span><b>{m.naWild}</b></button>
        </div>
      </>
    );
  }

  return (
    <div className="mon-popover open" ref={ref} style={{ left: pos.left, top: pos.top }}>
      {body}
    </div>
  );
}

function HpEditor({ name, cur, max, onChange, onDone }: { name: string; cur: number; max: number; onChange: (v: number) => void; onDone: () => void }) {
  const [value, setValue] = useState(String(cur));
  const commit = (raw: string) => {
    setValue(raw);
    const n = parseInt(raw, 10);
    if (!Number.isNaN(n)) onChange(Math.max(0, Math.min(max, n)));
  };
  const n = parseInt(value, 10) || 0;
  return (
    <>
      <h4>{name} HP</h4>
      <div className="hp-editor">
        <button className="btn small" onClick={() => commit(String(Math.max(0, n - 1)))}>-1</button>
        <input
          type="number"
          autoFocus
          value={value}
          min={0}
          max={max}
          onChange={(e) => commit(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") onDone(); }}
        />
        <button className="btn small" onClick={() => commit(String(Math.min(max, n + 1)))}>+1</button>
        <span className="caption" style={{ margin: 0 }}>/ {max}</span>
      </div>
      <div className="rand-add-row">
        <button className="btn text" onClick={() => commit("0")}>Set defeated (0)</button>
      </div>
    </>
  );
}

function SavePicker({ m, onRoll }: { m: Monster; onRoll: (label: string, target: number, mod: number) => void }) {
  const [value, setValue] = useState("0");
  const mod = parseInt(value, 10) || 0;
  return (
    <>
      <h4>Saving Throw</h4>
      <div className="hp-editor">
        <span className="field-label" style={{ margin: 0 }}>Mod</span>
        <button className="btn small" onClick={() => setValue(String(mod - 1))}>-1</button>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="btn small" onClick={() => setValue(String(mod + 1))}>+1</button>
      </div>
      <div className="pick-list">
        {SAVES.map(([k, label]) => (
          <button className="pick-opt" key={k} onClick={() => onRoll(label, m.sv[k], mod)}>
            <span>{label}</span><b>{m.sv[k]}</b>
          </button>
        ))}
      </div>
    </>
  );
}
