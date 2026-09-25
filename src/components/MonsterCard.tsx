import type { MouseEvent, ReactNode } from "react";
import { useActions } from "../context";
import { hpFormula, rollAttack, rollHpBanner, rollMorale } from "../rolls";
import type { Monster, SaveKey } from "../types";

export const SAVES: [SaveKey, string][] = [
  ["D", "Death"],
  ["W", "Wands"],
  ["P", "Paralysis"],
  ["B", "Breath"],
  ["S", "Spells"],
];

export function D20Icon() {
  return (
    <svg viewBox="0 0 24 24">
      <polygon points="12,2 21,8 21,16 12,22 3,16 3,8" />
      <path d="M12,2 L12,22 M3,8 L21,16 M21,8 L3,16" />
    </svg>
  );
}

export function CompactStats({ m, showBonus = false }: { m: Monster; showBonus?: boolean }) {
  return (
    <div className="compact-row" style={{ marginBottom: 8 }}>
      <div className="compact-cell"><div className="compact-chip">AC</div><div className="compact-val">{m.ac} [{m.acAsc}]</div></div>
      <div className="compact-cell"><div className="compact-chip">HD</div><div className="compact-val">{m.hd}</div></div>
      <div className="compact-cell">
        <div className="compact-chip">THAC0</div>
        <div className="compact-val">{m.thac0}{showBonus && m.thac0Bonus ? ` [${m.thac0Bonus}]` : ""}</div>
      </div>
      <div className="compact-cell"><div className="compact-chip">Morale</div><div className="compact-val">{m.ml}</div></div>
    </div>
  );
}

export function MonsterCard({ m, showActions = true, inPopup = false }: { m: Monster; showActions?: boolean; inPopup?: boolean }) {
  const a = useActions();
  const t = a.targets;

  const pop = (e: MouseEvent<HTMLButtonElement>, kind: "saves" | "na") => {
    e.stopPropagation();
    a.openPopover({ kind, anchor: e.currentTarget, monsterName: m.name });
  };

  return (
    <>
      {m.flavor && <p className="flavor">{m.flavor}</p>}
      <CompactStats m={m} showBonus />
      <div className="statline">
        <StatRow chip="Att" onClick={() => a.runRoll(() => rollAttack(m, t.combat))}>{m.att}</StatRow>
        <StatRow chip="MV">{m.mv}</StatRow>
        <StatRow chip="SV" onClick={(e) => pop(e, "saves")}>
          {SAVES.map(([k]) => `${k}${m.sv[k]}`).join("  ")}
        </StatRow>
        <StatRow chip="ML" onClick={() => a.runRoll(() => rollMorale(m, t.combat))}>{m.ml}</StatRow>
        <StatRow chip="AL">{m.al}</StatRow>
        <StatRow chip="TT">{m.tt}</StatRow>
        <StatRow chip="NA" onClick={(e) => pop(e, "na")}>{m.naDungeon} ({m.naWild})</StatRow>
        <StatRow chip="HP" onClick={() => a.runRoll(() => rollHpBanner(m, t.hp))}>{hpFormula(m)} (avg {m.avgHp})</StatRow>
      </div>

      {m.abilities.map((ab, i) => (
        <div className="ability-block" key={i}>
          <span className="arrow">&#9656;</span> <b>{ab.name}:</b>
          <p>{ab.text}</p>
        </div>
      ))}

      {m.spells.length > 0 && (
        <div className="spell-block">
          <h4>Spells</h4>
          <div className="spell-chips">
            {m.spells.map((s) => <span className="spell-chip" key={s}>{s}</span>)}
          </div>
        </div>
      )}

      {showActions && (
        <div className="card-actions">
          {inPopup && !a.isInLibrary(m.name) && (
            <button className="btn outline" onClick={(e) => { e.stopPropagation(); a.addToLibrary(m.name); }}>Add to Library</button>
          )}
          <button className="btn" onClick={(e) => { e.stopPropagation(); a.openAdd(m); }}>Add to Encounter</button>
          <button className="btn outline" onClick={(e) => { e.stopPropagation(); a.openEdit(m); }}>Edit</button>
          {a.isCustom(m.name) && (
            <button className="btn text danger-text" onClick={(e) => { e.stopPropagation(); a.deleteCustom(m.name); }}>Delete</button>
          )}
        </div>
      )}
    </>
  );
}

/** One stat line: a black label chip (clickable when the stat rolls) and its value. */
function StatRow({ chip, onClick, children }: { chip: string; onClick?: (e: MouseEvent<HTMLButtonElement>) => void; children: ReactNode }) {
  return (
    <div className="stat-row">
      {onClick ? (
        <button className="stat-chip roll" onClick={(e) => { e.stopPropagation(); onClick(e); }}>{chip}</button>
      ) : (
        <span className="stat-chip">{chip}</span>
      )}
      <span className="stat-val">{children}</span>
    </div>
  );
}

/** A monster name in an encounter table: linked (hover preview, tap to pin) when stats are loaded. */
export function MonsterLink({ name }: { name: string }) {
  const a = useActions();
  if (!a.byName(name)) return <>{name}</>;
  return (
    <span
      className="mon-link"
      onMouseEnter={(e) => { if (!a.isPopoverPinned()) a.openPopover({ kind: "monster", anchor: e.currentTarget, name, pinned: false }); }}
      onMouseLeave={() => { if (!a.isPopoverPinned()) a.closePopover(); }}
      onClick={(e) => { e.stopPropagation(); a.openPopover({ kind: "monster", anchor: e.currentTarget, name, pinned: true }); }}
    >
      {name}
    </span>
  );
}
