import { useState } from "react";
import { useActions } from "../context";
import { rollNa } from "../rolls";
import type { BannerData, Monster, RollTarget, Settings } from "../types";
import Modal from "./Modal";

export function AddModal({
  monster,
  busy,
  onCancel,
  onConfirm,
}: {
  monster: Monster;
  busy: boolean;
  onCancel: () => void;
  onConfirm: (qty: number, mode: "roll" | "average", hidden: boolean) => void;
}) {
  const a = useActions();
  const [qty, setQty] = useState("");
  const [rolledFrom, setRolledFrom] = useState<string | null>(null);
  const [rolling, setRolling] = useState(false);
  const [mode, setMode] = useState<"roll" | "average">("roll");
  const [hidden, setHidden] = useState(false);

  const rollFor = async (where: "Dungeon" | "Wilderness", expr: string) => {
    setRolling(true);
    try {
      const { value } = await rollNa(expr, `${monster.name} Number Appearing ${where}`, a.targets.check);
      setQty(String(Math.max(1, value)));
      setRolledFrom(`${where}, ${expr}`);
    } finally {
      setRolling(false);
    }
  };

  const n = parseInt(qty, 10);
  const valid = !Number.isNaN(n) && n >= 1;

  return (
    <Modal
      title={`Add ${monster.name}`}
      onClose={onCancel}
      footer={
        <>
          <button className="btn text" onClick={onCancel} disabled={busy}>Cancel</button>
          <button className="btn" disabled={busy || rolling || !valid} onClick={() => onConfirm(n, mode, hidden)}>
            {busy ? "Rolling…" : "Add"}
          </button>
        </>
      }
    >
      <div className="field">
        <p className="field-label">Number Appearing</p>
        <div className="na-roll-row">
          <button className="btn outline small" disabled={rolling} onClick={() => rollFor("Dungeon", monster.naDungeon)}>Dungeon {monster.naDungeon}</button>
          <button className="btn outline small" disabled={rolling} onClick={() => rollFor("Wilderness", monster.naWild)}>Wilderness {monster.naWild}</button>
          <div className="box qty-input"><input type="number" min={1} value={qty} placeholder="—" onChange={(e) => { setQty(e.target.value); setRolledFrom(null); }} /></div>
        </div>
        {rolledFrom && <p className="caption" style={{ margin: "4px 0 0" }}>Rolled {rolledFrom}</p>}
      </div>
      <div className="field">
        <p className="field-label">HP</p>
        <div className="seg-toggle" style={{ flex: "none", display: "inline-flex" }}>
          <button type="button" className={`seg-btn${mode === "roll" ? " active" : ""}`} onClick={() => setMode("roll")}>Roll each</button>
          <button type="button" className={`seg-btn${mode === "average" ? " active" : ""}`} onClick={() => setMode("average")}>Average ({monster.avgHp})</button>
        </div>
      </div>
      <label className="hidden-check">
        <input type="checkbox" checked={hidden} onChange={(e) => setHidden(e.target.checked)} />
        Hidden from players
      </label>
    </Modal>
  );
}

function TargetRow({ label, value, onChange }: { label: string; value: RollTarget; onChange: (v: RollTarget) => void }) {
  return (
    <div className="target-row">
      <span className="target-label">{label}</span>
      <div className="seg-toggle">
        <button type="button" className={`seg-btn${value === "gm_only" ? " active" : ""}`} onClick={() => onChange("gm_only")}>GM Only</button>
        <button type="button" className={`seg-btn${value === "everyone" ? " active" : ""}`} onClick={() => onChange("everyone")}>Everyone</button>
      </div>
    </div>
  );
}

export function SettingsModal({ settings, onChange, onClose }: { settings: Settings; onChange: (s: Settings) => void; onClose: () => void }) {
  return (
    <Modal title="Settings" onClose={onClose} footer={<button className="btn" onClick={onClose}>Done</button>}>
      <p className="field-label">Rolls visible to</p>
      <TargetRow label="Encounter checks & NA" value={settings.checkTarget} onChange={(v) => onChange({ ...settings, checkTarget: v })} />
      <TargetRow label="Hit points" value={settings.hpTarget} onChange={(v) => onChange({ ...settings, hpTarget: v })} />
      <TargetRow label="Attacks, saves, morale" value={settings.combatTarget} onChange={(v) => onChange({ ...settings, combatTarget: v })} />

      <p className="field-label" style={{ marginTop: 14 }}>Initiative trackers</p>
      <label className="integration-row">
        <input type="checkbox" checked={settings.initiativeTracker} onChange={(e) => onChange({ ...settings, initiativeTracker: e.target.checked })} />
        <div className="integration-body"><span className="name">Owlbear Initiative Tracker</span><span className="sub">Owlbear's own official extension</span></div>
      </label>
      <label className="integration-row">
        <input type="checkbox" checked={settings.clash} onChange={(e) => onChange({ ...settings, clash: e.target.checked })} />
        <div className="integration-body"><span className="name">Clash!</span><span className="sub">Popular third-party initiative tracker</span></div>
      </label>
    </Modal>
  );
}

export function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal title="Monster Library" onClose={onClose} footer={<button className="btn" onClick={onClose}>Got it</button>}>
      <p className="modal-message">Keeps your reference monsters, a Random Encounter roller, and your session's active Encounter list.</p>
      <p className="modal-message">Search or roll a monster, tap its name to open the card, and use Add to Encounter from there. In Encounter, tap the magnifying glass to check stats, Attack/Morale to roll, and tap an HP chip to adjust it.</p>
    </Modal>
  );
}

export function ConfirmModal({
  title,
  confirmLabel,
  onCancel,
  onConfirm,
}: {
  title: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Modal
      title={title}
      onClose={onCancel}
      footer={
        <>
          <button className="btn text" onClick={onCancel}>Cancel</button>
          <button className="btn danger" onClick={onConfirm}>{confirmLabel}</button>
        </>
      }
    />
  );
}

export function RollBanner({ data, show, onDismiss }: { data: BannerData | null; show: boolean; onDismiss: () => void }) {
  const cls = data?.success === true ? " success" : data?.success === false ? " fail" : "";
  return (
    <div className={`roll-banner${show ? " show" : ""}${cls}`}>
      <button className="roll-dismiss" onClick={onDismiss}>&times;</button>
      {data && (
        <>
          <div className="roll-label">{data.label}</div>
          <div className="roll-numbers">{data.num}</div>
          <div className="roll-detail-text">{data.detail}</div>
          {data.local && <div className="roll-local">Local roll - Dice+ not detected</div>}
        </>
      )}
    </div>
  );
}
