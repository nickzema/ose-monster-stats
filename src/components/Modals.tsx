import { useState } from "react";
import type { BannerData, Monster, Settings } from "../types";

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
  const [qty, setQty] = useState("1");
  const [mode, setMode] = useState<"roll" | "average">("roll");
  const [hidden, setHidden] = useState(false);

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <p className="modal-message">Add {monster.name}</p>
        <div className="field">
          <p className="field-label">Number Appearing</p>
          <div className="box qty-input"><input type="number" min={1} value={qty} onChange={(e) => setQty(e.target.value)} /></div>
        </div>
        <div className="field">
          <p className="field-label">HP</p>
          <div className="seg-toggle" style={{ flex: "none", display: "inline-flex" }}>
            <button type="button" className={`seg-btn${mode === "roll" ? " active" : ""}`} onClick={() => setMode("roll")}>Roll each</button>
            <button type="button" className={`seg-btn${mode === "average" ? " active" : ""}`} onClick={() => setMode("average")}>Average</button>
          </div>
        </div>
        <div className="field" style={{ marginBottom: 4 }}>
          <label className="hidden-check">
            <input type="checkbox" checked={hidden} onChange={(e) => setHidden(e.target.checked)} />
            Hidden from players
          </label>
        </div>
        <div className="modal-actions">
          <button className="btn text" onClick={onCancel} disabled={busy}>Cancel</button>
          <button className="btn" disabled={busy} onClick={() => onConfirm(Math.max(1, parseInt(qty, 10) || 1), mode, hidden)}>
            {busy ? "Rolling…" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function SettingsModal({ settings, onChange, onClose }: { settings: Settings; onChange: (s: Settings) => void; onClose: () => void }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <p className="modal-message"><strong>Settings</strong></p>
        <p className="field-label">Rolls visible to</p>
        <div className="seg-toggle" style={{ marginBottom: 12 }}>
          <button type="button" className={`seg-btn${settings.rollTarget === "gm_only" ? " active" : ""}`} onClick={() => onChange({ ...settings, rollTarget: "gm_only" })}>GM Only</button>
          <button type="button" className={`seg-btn${settings.rollTarget === "everyone" ? " active" : ""}`} onClick={() => onChange({ ...settings, rollTarget: "everyone" })}>Everyone</button>
        </div>
        <p className="field-label">Initiative trackers</p>
        <label className="integration-row">
          <input type="checkbox" checked={settings.initiativeTracker} onChange={(e) => onChange({ ...settings, initiativeTracker: e.target.checked })} />
          <div className="integration-body"><span className="name">Owlbear Initiative Tracker</span><span className="sub">Owlbear's own official extension</span></div>
        </label>
        <label className="integration-row">
          <input type="checkbox" checked={settings.clash} onChange={(e) => onChange({ ...settings, clash: e.target.checked })} />
          <div className="integration-body"><span className="name">Clash!</span><span className="sub">Popular third-party initiative tracker</span></div>
        </label>
        <div className="modal-actions"><button className="btn" onClick={onClose}>Done</button></div>
      </div>
    </div>
  );
}

export function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <p className="modal-message"><strong>Monster Library</strong> keeps your reference monsters, a Random Encounter roller, and your session's active Encounter list.</p>
        <p className="modal-message">Search or roll a monster, tap its name to open the card, and use Add to Library or Add to Encounter from there. In Encounter, tap the magnifying glass to check stats, Attack/Morale to roll, and tap an HP chip to adjust it.</p>
        <div className="modal-actions"><button className="btn" onClick={onClose}>Got it</button></div>
      </div>
    </div>
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
