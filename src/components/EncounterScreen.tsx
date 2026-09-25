import { useActions } from "../context";
import { rollAttack, rollMorale } from "../rolls";
import type { EncounterEntry } from "../types";

interface Props {
  encounter: EncounterEntry[];
  onRemove: (id: string) => void;
  onOpenRandom: () => void;
}

export default function EncounterScreen({ encounter, onRemove, onOpenRandom }: Props) {
  const a = useActions();
  const total = encounter.reduce((s, e) => s + e.qty, 0);

  return (
    <div>
      <button className="btn block rand-launch" onClick={onOpenRandom}>Random Encounter</button>
      <div className="status-box" style={{ marginBottom: 10 }}>
        <span className="status-label">In this session</span>
        <span className="status-value">{total} {total === 1 ? "creature" : "creatures"}</span>
      </div>

      {encounter.map((e) => {
        const m = a.byName(e.monsterName);
        return (
          <div className="enc-row" key={e.id}>
            <div className="enc-row-top">
              <button
                className="mag"
                title="View card"
                disabled={!m}
                onClick={(evt) => {
                  evt.stopPropagation();
                  if (m) a.openPopover({ kind: "monster", anchor: evt.currentTarget, name: m.name, pinned: true });
                }}
              >
                &#9906;
              </button>
              <span className="name">{e.monsterName}</span>
              {e.hidden && <span className="qty-badge" style={{ background: "var(--caption)" }}>Hidden</span>}
              <span className="qty-badge">x{e.qty}</span>
              <button className="remove" onClick={() => onRemove(e.id)}>&times;</button>
            </div>
            {m && (
              <div className="enc-actions">
                <button className="btn small outline" onClick={() => a.runRoll(() => rollAttack(m, a.rollTarget))}>Attack</button>
                <button className="btn small outline" onClick={() => a.runRoll(() => rollMorale(m, a.rollTarget))}>Morale</button>
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
