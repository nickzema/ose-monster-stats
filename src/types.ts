export type SaveKey = "D" | "W" | "P" | "B" | "S";

export interface Ability {
  name: string;
  text: string;
}

// Normal monsters roll n d8 + mod; fractional-HD monsters (e.g. 1/2 HD) roll a special expression.
export type HpDice = { n: number; mod: number } | { special: string };

export interface Monster {
  name: string;
  hd: string;
  hpDice: HpDice;
  avgHp: number;
  ac: number;
  acAsc: number;
  att: string;
  dmg: string; // primary attack's damage dice, used by the Attack roll
  thac0: number;
  thac0Bonus: string;
  mv: string;
  sv: Record<SaveKey, number>;
  ml: number;
  al: string;
  xp: number;
  naDungeon: string;
  naWild: string;
  tt: string;
  flavor: string;
  abilities: Ability[];
  spells: string[];
  acText?: string; // full AC wording when it isn't a single value (e.g. "7 [12] or 5 [14]")
  mlText?: string; // morale with conditions (e.g. "6 (8 with leader)")
  xpText?: string; // XP with leader values etc.
  svNote?: string; // saves-as class/level from the book, e.g. "F1" or "4"
}

export interface HpState {
  cur: number;
  max: number;
}

export interface EncounterEntry {
  id: string;
  monsterName: string;
  qty: number;
  hp: HpState[];
  hidden: boolean;
}

export type RollTarget = "everyone" | "gm_only";

export interface Settings {
  initiativeTracker: boolean;
  clash: boolean;
  checkTarget: RollTarget; // random encounter checks + Number Appearing
  hpTarget: RollTarget; // HP rolls
  combatTarget: RollTarget; // attacks, saves, morale
}

export interface Targets {
  check: RollTarget;
  hp: RollTarget;
  combat: RollTarget;
}

export interface BannerData {
  label: string;
  num: string | number;
  detail: string;
  success: boolean | null;
  local?: boolean; // true when Dice+ wasn't available and the roll happened locally
}
