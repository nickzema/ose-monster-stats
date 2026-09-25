import { useActions } from "../context";
import { rollAttack, rollMorale } from "../rolls";
import type { EncounterEntry } from "../types";

interface Props {
  encounter: EncounterEntry[];
  onRemove: (id: string) => void;
  onToggleHidden: (id: string) => void;
  onClear: () => void;
  onOpenRandom: () => void;
}

export default function EncounterScreen({ encounter, onRemove, onToggleHidden, onClear, onOpenRandom }: Props) {
  const a = useActions();
  const total = encounter.reduce((s, e) => s + e.qty, 0);
  let defeated = 0;
  let xp = 0;
  for (const e of encounter) {
    const down = e.hp.filter((h) => h.cur === 0).length;
    defeated += down;
    xp += down * (a.byName(e.monsterName)?.xp ?? 0);
  }

  return (
    <div>
      <button className="btn block rand-launch" onClick={onOpenRandom}>Random Encounter</button>
      <div className="enc-status">
        <div className="status-box">
          <span className="status-label">In this session</span>
          <span className="status-value">{total} {total === 1 ? "creature" : "creatures"}</span>
        </div>
        <div className="status-box">
          <span className="status-label">Defeated</span>
          <span className="status-value">{defeated} &middot; {xp.toLocaleString()} XP</span>
        </div>
      </div>
      {encounter.length > 0 && (
        <div className="section-tools" style={{ justifyContent: "flex-end", marginBottom: 8 }}>
          <button className="btn outline small" onClick={onClear}>Clear Encounter</button>
        </div>
      )}

      {encounter.map((e) => {
        const m = a.byName(e.monsterName);
        return (
          <div className="enc-row" key={e.id}>
            <div className="enc-row-top">
              <button
                className="mag"
                title="View card"
                disabled={!m}
                onClick={() => { if (m) a.openCard(m.name); }}
              >
                &#9906;
              </button>
              <span className="enc-id">
                <span className="name">{e.monsterName}</span>
                {m && <span className="sub">AC {m.ac} [{m.acAsc}] &middot; THAC0 {m.thac0} &middot; MV {m.mv} &middot; ML {m.ml}</span>}
              </span>
              <button
                className={`hide-toggle${e.hidden ? " on" : ""}`}
                title={e.hidden ? "Hidden from players (tap to show)" : "Visible to players (tap to hide)"}
                onClick={() => onToggleHidden(e.id)}
              >
                {e.hidden ? "Hidden" : "Visible"}
              </button>
              <span className="qty-badge">x{e.qty}</span>
              <button className="remove" onClick={() => onRemove(e.id)}>&times;</button>
            </div>
            {m && (
              <div className="enc-actions">
                <button className="btn small outline" onClick={() => a.runRoll(() => rollAttack(m, a.targets.combat))}>Attack</button>
                <button
                  className="btn small outline"
                  onClick={(evt) => {
                    evt.stopPropagation();
                    a.openPopover({ kind: "saves", anchor: evt.currentTarget, monsterName: m.name });
                  }}
                >
                  Save
                </button>
                <button className="btn small outline" onClick={() => a.runRoll(() => rollMorale(m, a.targets.combat))}>Morale</button>
              </div>
            )}
            <div className="enc-hp-list">
              {e.hp.map((h, i) => (
                <button
                  key={i}
                  className={`enc-hp-chip${h.cur === 0 ? " dead" : ""}`}
                  onClick={(evt) => {
                    evt.stopPropagation();
                    a.openPopover({ kind: "hp", anchor: evt.currentTarget, entryId: e.id, index: i });
                  }}
                >
                  {h.cur}<span className="max">/{h.max}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })}

      {encounter.length === 0 && (
        <p className="empty-state">Nothing added yet. Search or roll a monster, then add it here.</p>
      )}
    </div>
  );
}
