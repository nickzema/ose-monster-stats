import { cleanLabel, hasDice, localExpr, roll, toNotation } from "./dice";
import type { BannerData, HpDice, Monster, RollTarget } from "./types";

export function hpFormula(m: Monster): string {
  if ("special" in m.hpDice) return m.hpDice.special;
  const { n, mod } = m.hpDice;
  return `${n}d8${mod ? (mod > 0 ? "+" : "") + mod : ""}`;
}

/** OSE Hit Dice text -> dice + average. "6+3*" -> 6d8+3, "1-1" -> 1d8-1, "1/2" -> 1d4. */
export function parseHd(hd: string): { hpDice: HpDice; avgHp: number } {
  const clean = hd.replace(/\*/g, "").replace(/\s+/g, "");
  if (/^1\/2$/.test(clean)) return { hpDice: { special: "1d4" }, avgHp: 2 };
  const m = clean.match(/^(\d+)([+-]\d+)?$/);
  if (!m) return { hpDice: { n: 1, mod: 0 }, avgHp: 4 };
  const n = parseInt(m[1], 10);
  const mod = m[2] ? parseInt(m[2], 10) : 0;
  return { hpDice: { n, mod }, avgHp: Math.max(1, Math.floor(n * 4.5) + mod) };
}

/** Roll HP for `qty` individual creatures in one Dice+ roll. Minimum 1 HP each. */
export async function rollHpFor(m: Monster, qty: number, target: RollTarget): Promise<{ hp: number[]; local: boolean }> {
  const f = hpFormula(m);
  const label = cleanLabel(`${m.name} HP`);
  const notation = qty === 1 ? `${f} #${label}` : `${qty}#${f} #${label}`;
  if (qty > 100) {
    return { hp: Array.from({ length: qty }, () => Math.max(1, localExpr(f))), local: true };
  }
  const out = await roll(notation, target, qty);
  return { hp: out.rows.map((v) => Math.max(1, v)), local: out.local };
}

export async function rollHpBanner(m: Monster, target: RollTarget): Promise<BannerData> {
  const { hp, local } = await rollHpFor(m, 1, target);
  return { label: `${m.name} HP`, num: hp[0], detail: `Rolled ${hpFormula(m)}`, success: null, local };
}

export async function rollSave(m: Monster, label: string, needed: number, mod: number, target: RollTarget): Promise<BannerData> {
  const modPart = mod ? (mod > 0 ? `+${mod}` : `${mod}`) : "";
  const out = await roll(`1d20${modPart} #${cleanLabel(`${m.name} Save vs ${label}`)}`, target);
  const total = out.total;
  const d20 = total - mod;
  const success = total >= needed;
  const modText = mod ? ` (${d20}${modPart} = ${total})` : "";
  return {
    label: `Save vs. ${label}`,
    num: total,
    detail: `Needed ${needed}+${modText}. ${success ? "Success." : "Failed."}`,
    success,
    local: out.local,
  };
}

export async function rollAttack(m: Monster, target: RollTarget): Promise<BannerData> {
  const name = cleanLabel(m.name);
  const out = await roll(`1d20 #${name} Attack, ${toNotation(m.dmg)} #Damage`, target, 2);
  const [d20, dmg] = out.rows;
  return {
    label: `${m.name} Attack`,
    num: d20,
    detail: `To-hit d20: ${d20} (THAC0 ${m.thac0}). Damage (${m.dmg}): ${dmg}`,
    success: null,
    local: out.local,
  };
}

export async function rollMorale(m: Monster, target: RollTarget): Promise<BannerData> {
  const out = await roll(`2d6 #${cleanLabel(`${m.name} Morale`)}`, target);
  const holds = out.total <= m.ml;
  return {
    label: `${m.name} Morale`,
    num: out.total,
    detail: `2d6 vs ML ${m.ml}. ${holds ? "Holds." : "Breaks/flees."}`,
    success: holds,
    local: out.local,
  };
}

/** Number Appearing. Flat values ("1") need no dice. */
export async function rollNa(expr: string, label: string, target: RollTarget): Promise<{ value: number; local: boolean }> {
  if (!hasDice(expr)) return { value: localExpr(expr), local: false };
  const out = await roll(`${toNotation(expr)} #${cleanLabel(label)}`, target);
  return { value: out.total, local: out.local };
}
