import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useActions } from "../context";
import type { PopoverState } from "../context";
import { rollSave } from "../rolls";
import type { EncounterEntry } from "../types";
import { CompactStats } from "./MonsterCard";

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
      setPos({ left: Math.max(8, Math.min(r.left, window.innerWidth - 250)), top: r.bottom + 6 });
    };
    place();
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [state.anchor]);

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
    const m = a.byName(state.name);
    if (!m) return null;
    body = (
      <>
        <h4>{m.name}</h4>
        <CompactStats m={m} />
        {state.pinned && (
          <div className="rand-add-row">
            <button className="btn text" onClick={() => { a.closePopover(); a.viewInLibrary(m.name); }}>View Card</button>
            <button className="btn" onClick={() => { a.closePopover(); a.openAdd(m); }}>Add to Encounter</button>
          </div>
        )}
      </>
    );
  } else if (state.kind === "hp") {
    const entry = encounter.find((e) => e.id === state.entryId);
    const h = entry?.hp[state.index];
    if (!entry || !h) return null;
    body = <HpEditor name={entry.monsterName} cur={h.cur} max={h.max} onSave={(v) => { onSetHp(entry.id, state.index, v); a.closePopover(); }} />;
  } else {
    const m = a.byName(state.monsterName);
    if (!m) return null;
    body = (
      <SaveMod
        label={state.label}
        target={state.target}
        onRoll={(mod) => {
          a.closePopover();
          a.runRoll(() => rollSave(m, state.label, state.target, mod, a.targets.combat));
        }}
      />
    );
  }

  return (
    <div className="mon-popover open" ref={ref} style={{ left: pos.left, top: pos.top }}>
      {body}
    </div>
  );
}

function HpEditor({ name, cur, max, onSave }: { name: string; cur: number; max: number; onSave: (v: number) => void }) {
  const [value, setValue] = useState(String(cur));
  const n = parseInt(value, 10) || 0;
  return (
    <>
      <h4>{name} HP</h4>
      <div className="hp-editor">
        <button className="btn small" onClick={() => setValue(String(Math.max(0, n - 1)))}>-1</button>
        <input type="number" value={value} min={0} max={max} onChange={(e) => setValue(e.target.value)} />
        <button className="btn small" onClick={() => setValue(String(Math.min(max, n + 1)))}>+1</button>
        <span className="caption" style={{ margin: 0 }}>/ {max}</span>
      </div>
      <div className="rand-add-row">
        <button className="btn text" onClick={() => setValue("0")}>Set defeated (0)</button>
        <button className="btn" onClick={() => onSave(Math.max(0, Math.min(max, n)))}>Save</button>
      </div>
    </>
  );
}

function SaveMod({ label, target, onRoll }: { label: string; target: number; onRoll: (mod: number) => void }) {
  const [value, setValue] = useState("0");
  const n = parseInt(value, 10) || 0;
  return (
    <>
      <h4>Save vs. {label}</h4>
      <p className="caption" style={{ margin: "0 0 6px" }}>Target: {target}+. Any modifier for this monster?</p>
      <div className="hp-editor">
        <button className="btn small" onClick={() => setValue(String(n - 1))}>-1</button>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="btn small" onClick={() => setValue(String(n + 1))}>+1</button>
      </div>
      <div className="rand-add-row">
        <button className="btn" onClick={() => onRoll(n)}>Roll</button>
      </div>
    </>
  );
}
