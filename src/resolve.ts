import { NPC_LABELS, TABLE_ALIASES } from "./data/tables";
import type { Monster } from "./types";

export type Resolved =
  | { kind: "one"; name: string }
  | { kind: "dice"; names: string[]; dice: string; min: number } // e.g. hydra heads 1d8+4
  | { kind: "pick"; names: string[] } // the DM chooses (e.g. which kind of shark)
  | { kind: "npc" } // NPC adventuring party: built from the Adventuring Parties rules
  | { kind: "none" };

/** Turn a table entry ("Bear, Cave", "Hydra, 1d4+4HD", "Shark") into monster entries. */
export function resolveTableName(cell: string, byName: (n: string) => Monster | undefined): Resolved {
  if (NPC_LABELS.includes(cell)) return { kind: "npc" };
  const alias = TABLE_ALIASES[cell];
  if (alias) {
    if (alias.dice) return { kind: "dice", names: alias.names, dice: alias.dice, min: alias.min ?? 1 };
    if (alias.names.length === 1) return { kind: "one", name: alias.names[0] };
    return { kind: "pick", names: alias.names };
  }
  if (byName(cell)) return { kind: "one", name: cell };
  return { kind: "none" };
}

/** Every monster entry a table cell can lead to (for previews and links). */
export function namesOf(r: Resolved): string[] {
  if (r.kind === "one") return [r.name];
  if (r.kind === "dice" || r.kind === "pick") return r.names;
  return [];
}
