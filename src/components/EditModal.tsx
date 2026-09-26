import { useState } from "react";
import { SPELL_LIST } from "../data/spells";
import { parseHd } from "../rolls";
import type { Ability, Monster, SaveKey } from "../types";
import Modal from "./Modal";

export const BLANK_MONSTER: Monster = {
  name: "", hd: "1", hpDice: { n: 1, mod: 0 }, avgHp: 4, ac: 9, acAsc: 10, att: "1 x weapon (1d6)", dmg: "1d6",
  thac0: 19, thac0Bonus: "0", mv: "120' (40')", sv: { D: 14, W: 15, P: 16, B: 17, S: 18 }, ml: 7, al: "Neutral",
  xp: 5, naDungeon: "1", naWild: "1", tt: "None", flavor: "", abilities: [], spells: [],
};

const SAVE_KEYS: SaveKey[] = ["D", "W", "P", "B", "S"];

interface Props {
  base: Monster | null; // null = blank New Monster
  existingNames: string[];
  onCancel: () => void;
  onSave: (m: Monster) => void;
}

type Form = Record<
  "name" | "ac" | "acAsc" | "hd" | "att" | "dmg" | "thac0" | "ml" | "mv" | "al" | "tt" | "xp" | "naDungeon" | "naWild" | "flavor",
  string
> & { sv: Record<SaveKey, string> };

function toForm(m: Monster, name: string): Form {
  return {
    name, ac: String(m.ac), acAsc: String(m.acAsc), hd: m.hd, att: m.att, dmg: m.dmg, thac0: String(m.thac0),
    ml: String(m.ml), mv: m.mv, al: m.al, tt: m.tt, xp: String(m.xp), naDungeon: m.naDungeon, naWild: m.naWild,
    flavor: m.flavor,
    sv: { D: String(m.sv.D), W: String(m.sv.W), P: String(m.sv.P), B: String(m.sv.B), S: String(m.sv.S) },
  };
}

/** Integer field, falling back to the base value when blank or not a number (0 is allowed). */
function int(v: string, fallback: number): number {
  const n = parseInt(v, 10);
  return Number.isNaN(n) ? fallback : n;
}

export default function EditModal({ base, existingNames, onCancel, onSave }: Props) {
  const start = base ?? BLANK_MONSTER;
  const [f, setF] = useState<Form>(() => toForm(start, base ? `${base.name} (Variant)` : ""));
  const [abilities, setAbilities] = useState<Ability[]>(() => start.abilities.map((a) => ({ ...a })));
  const [spells, setSpells] = useState<string[]>(() => [...start.spells]);
  const [spellQuery, setSpellQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof Omit<Form, "sv">) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  const setSv = (k: SaveKey) => (e: { target: { value: string } }) => setF({ ...f, sv: { ...f.sv, [k]: e.target.value } });

  const q = spellQuery.trim().toLowerCase();
  const spellMatches = q ? SPELL_LIST.filter((s) => s.toLowerCase().includes(q) && !spells.includes(s)).slice(0, 30) : [];

  const save = () => {
    const name = f.name.trim();
    if (!name) {
      setError("Give this monster a name.");
      return;
    }
    if (existingNames.some((n) => n.toLowerCase() === name.toLowerCase())) {
      setError(`"${name}" is already in the database - pick a different name.`);
      return;
    }
    const hd = f.hd.trim() || start.hd;
    const thac0 = int(f.thac0, start.thac0);
    const bonus = 19 - thac0;
    // Book notes only stay while the stat they describe is unchanged.
    const { acText, mlText, xpText, svNote, ...rest } = start;
    const same = (v: string, n: number) => int(v, n) === n;
    const savesSame = (["D", "W", "P", "B", "S"] as SaveKey[]).every((k) => same(f.sv[k], start.sv[k]));
    onSave({
      ...rest,
      ...(acText && same(f.ac, start.ac) && same(f.acAsc, start.acAsc) ? { acText } : {}),
      ...(mlText && same(f.ml, start.ml) ? { mlText } : {}),
      ...(xpText && same(f.xp, start.xp) ? { xpText } : {}),
      ...(svNote && savesSame ? { svNote } : {}),
      name,
      hd,
      ...parseHd(hd),
      ac: int(f.ac, start.ac),
      acAsc: int(f.acAsc, start.acAsc),
      att: f.att.trim() || start.att,
      dmg: f.dmg.trim() || start.dmg,
      thac0,
      thac0Bonus: bonus > 0 ? `+${bonus}` : String(bonus),
      ml: int(f.ml, start.ml),
      mv: f.mv.trim() || start.mv,
      sv: {
        D: int(f.sv.D, start.sv.D), W: int(f.sv.W, start.sv.W), P: int(f.sv.P, start.sv.P),
        B: int(f.sv.B, start.sv.B), S: int(f.sv.S, start.sv.S),
      },
      al: f.al.trim() || start.al,
      tt: f.tt.trim() || start.tt,
      xp: int(f.xp, start.xp),
      naDungeon: f.naDungeon.trim() || start.naDungeon,
      naWild: f.naWild.trim() || start.naWild,
      flavor: f.flavor.trim() || start.flavor,
      abilities: abilities.filter((a) => a.name.trim() || a.text.trim()).map((a) => ({ name: a.name.trim(), text: a.text.trim() })),
      spells: [...spells],
    });
  };

  return (
    <Modal
      wide
      title={base ? `New monster, based on ${base.name}` : "New Monster"}
      onClose={onCancel}
      footer={
        <>
          <button className="btn text" onClick={onCancel}>Cancel</button>
          <button className="btn" onClick={save}>Save Monster</button>
        </>
      }
    >
        {error && <p className="caption" style={{ color: "var(--danger)", margin: "-4px 0 10px" }}>{error}</p>}

        <div className="field"><p className="field-label">Name</p><input value={f.name} onChange={set("name")} /></div>
        <div className="field-row">
          <div className="field"><p className="field-label">AC</p><input value={f.ac} onChange={set("ac")} /></div>
          <div className="field"><p className="field-label">AC (asc.)</p><input value={f.acAsc} onChange={set("acAsc")} /></div>
          <div className="field"><p className="field-label">HD</p><input value={f.hd} onChange={set("hd")} /></div>
        </div>
        <div className="field"><p className="field-label">Attack</p><input value={f.att} onChange={set("att")} /></div>
        <div className="field-row">
          <div className="field"><p className="field-label">Damage</p><input value={f.dmg} onChange={set("dmg")} /></div>
          <div className="field"><p className="field-label">THAC0</p><input value={f.thac0} onChange={set("thac0")} /></div>
          <div className="field"><p className="field-label">Morale</p><input value={f.ml} onChange={set("ml")} /></div>
        </div>
        <div className="field"><p className="field-label">Movement</p><input value={f.mv} onChange={set("mv")} /></div>

        <div className="field">
          <p className="field-label">Saving Throws (D / W / P / B / S)</p>
          <div className="field-row">
            {SAVE_KEYS.map((k) => <input key={k} value={f.sv[k]} onChange={setSv(k)} />)}
          </div>
        </div>
        <div className="field-row">
          <div className="field"><p className="field-label">Alignment</p><input value={f.al} onChange={set("al")} /></div>
          <div className="field"><p className="field-label">Treasure Type</p><input value={f.tt} onChange={set("tt")} /></div>
          <div className="field"><p className="field-label">XP</p><input value={f.xp} onChange={set("xp")} /></div>
        </div>
        <div className="field-row">
          <div className="field"><p className="field-label">NA (dungeon)</p><input value={f.naDungeon} onChange={set("naDungeon")} /></div>
          <div className="field"><p className="field-label">NA (wild)</p><input value={f.naWild} onChange={set("naWild")} /></div>
        </div>
        <div className="field"><p className="field-label">Flavor text</p><textarea value={f.flavor} onChange={set("flavor")} /></div>

        <div className="field">
          <p className="field-label">Abilities</p>
          {abilities.length === 0 && <p className="caption" style={{ margin: "0 0 6px" }}>No abilities yet.</p>}
          {abilities.map((ab, i) => (
            <div className="ability-edit-row" key={i}>
              <input
                placeholder="Ability name (e.g. Hate the sun)"
                value={ab.name}
                onChange={(e) => setAbilities(abilities.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)))}
              />
              <textarea
                placeholder="What it does (e.g. -1 to-hit in full daylight)"
                value={ab.text}
                onChange={(e) => setAbilities(abilities.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)))}
              />
              <button className="btn text remove-row" type="button" onClick={() => setAbilities(abilities.filter((_, j) => j !== i))}>Remove</button>
            </div>
          ))}
          <button className="btn outline small" type="button" onClick={() => setAbilities([...abilities, { name: "", text: "" }])}>+ Add Ability</button>
        </div>

        <div className="field">
          <p className="field-label">Spells</p>
          <div className="search-wrap" style={{ marginBottom: 6 }}>
            <div className="search-input-row">
              <span className="search-icon">&#9906;</span>
              <input
                placeholder="Search Cleric & Magic-User spells…"
                autoComplete="off"
                value={spellQuery}
                onChange={(e) => setSpellQuery(e.target.value)}
                onBlur={() => setSpellQuery("")}
              />
            </div>
            <div className={`search-dropdown${q ? " open" : ""}`}>
              {q && spellMatches.length === 0 && <p className="empty-state">No spell matches "{spellQuery}".</p>}
              {spellMatches.map((s) => (
                <div
                  key={s}
                  className="char-row mon-row"
                  style={{ padding: "6px 9px" }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setSpells([...spells, s]);
                    setSpellQuery("");
                  }}
                >
                  <span className="name" style={{ fontSize: 13 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="spell-chips">
            {spells.map((s) => (
              <span className="spell-chip removable" key={s}>
                {s} <button type="button" onClick={() => setSpells(spells.filter((x) => x !== s))}>&times;</button>
              </span>
            ))}
          </div>
        </div>

    </Modal>
  );
}
