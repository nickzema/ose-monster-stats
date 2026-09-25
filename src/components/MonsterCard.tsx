import { Fragment } from "react";
import type { MouseEvent, ReactNode } from "react";
import { useActions } from "../context";
import { hpFormula, rollAttack, rollHpBanner, rollMorale, rollNa } from "../rolls";
import type { Monster, SaveKey } from "../types";

const SAVES: [SaveKey, string][] = [
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

function RollTag({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button className="roll-tag" onClick={(e) => { e.stopPropagation(); onClick(); }}>
      {children}
    </button>
  );
}

export function MonsterCard({ m }: { m: Monster }) {
  const a = useActions();
  const t = a.rollTarget;
  const inLib = a.isInLibrary(m.name);

  const na = (expr: string) =>
    a.runRoll(async () => {
      const { value, local } = await rollNa(expr, `${m.name} Number Appearing`, t);
      return { label: "Number Appearing", num: value, detail: `Rolled ${expr}`, success: null, local };
    });

  const openSave = (e: MouseEvent<HTMLButtonElement>, key: SaveKey, label: string) => {
    e.stopPropagation();
    a.openPopover({ kind: "save", anchor: e.currentTarget, monsterName: m.name, label, target: m.sv[key] });
  };

  return (
    <>
      {m.flavor && <p className="flavor">{m.flavor}</p>}
      <CompactStats m={m} showBonus />
      <div className="statline">
        <b>Att</b> {m.att} <RollTag onClick={() => a.runRoll(() => rollAttack(m, t))}>Roll</RollTag><br />
        <b>MV</b> {m.mv}<br />
        <b>SV</b>{" "}
        {SAVES.map(([k, label]) => (
          <Fragment key={k}>
            <button className="save-tag" onClick={(e) => openSave(e, k, label)}>{k}{m.sv[k]}</button>{" "}
          </Fragment>
        ))}
        <br />
        <b>ML</b> {m.ml} <RollTag onClick={() => a.runRoll(() => rollMorale(m, t))}>Check</RollTag><br />
        <b>AL</b> {m.al} &nbsp; <b>TT</b> {m.tt}<br />
        <b>NA</b> {m.naDungeon} <RollTag onClick={() => na(m.naDungeon)}>Roll</RollTag>
        {" "}&nbsp; ({m.naWild} <RollTag onClick={() => na(m.naWild)}>Roll</RollTag>)<br />
        <b>HP</b> <RollTag onClick={() => a.runRoll(() => rollHpBanner(m, t))}>Roll ({hpFormula(m)})</RollTag>
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

      <div className="card-actions">
        {inLib ? (
          <button className="btn text" onClick={(e) => { e.stopPropagation(); a.removeFromLibrary(m.name); }}>Remove from Library</button>
        ) : (
          <button className="btn text" onClick={(e) => { e.stopPropagation(); a.addToLibrary(m.name); }}>Add to Library</button>
        )}
        <button className="btn" onClick={(e) => { e.stopPropagation(); a.openAdd(m); }}>Add to Encounter</button>
        <button className="btn outline" onClick={(e) => { e.stopPropagation(); a.openEdit(m); }}>Edit</button>
      </div>
    </>
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
