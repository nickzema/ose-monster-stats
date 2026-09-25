import OBR from "@owlbear-rodeo/sdk";
import type { RollTarget } from "./types";

export const EXT_ID = "com.p4p.ose-monster-stat-card";

export interface RollOutcome {
  rows: number[]; // one total per comma-separated / repeated row, in order
  total: number; // first row's total (convenience for single rolls)
  local: boolean; // true if rolled locally because Dice+ wasn't available
}

interface RollResultMessage {
  rollId: string;
  result: { totalValue: number; rollSummary: string };
}

let readyCache: boolean | null = null;

/** Check whether Dice+ is installed and responding. Cached for the session. */
async function isDicePlusReady(): Promise<boolean> {
  if (!OBR.isAvailable) return false;
  if (readyCache !== null) return readyCache;
  const requestId = crypto.randomUUID();

  readyCache = await new Promise<boolean>((resolve) => {
    const unsubscribe = OBR.broadcast.onMessage("dice-plus/isReady", (event) => {
      const data = event.data as { requestId?: string; ready?: boolean };
      if (data.ready && data.requestId === requestId) {
        unsubscribe();
        resolve(true);
      }
    });
    OBR.broadcast.sendMessage("dice-plus/isReady", { requestId, timestamp: Date.now() }, { destination: "ALL" });
    setTimeout(() => {
      unsubscribe();
      resolve(false);
    }, 1000);
  });

  return readyCache;
}

/** Strip characters Dice+ treats as label terminators (math operators, commas, parens). */
export function cleanLabel(s: string): string {
  return s.replace(/[+\-*/,(){}#]/g, " ").replace(/\s+/g, " ").trim();
}

/** Normalize book-style dice text to Dice+ notation: "d6" -> "1d6", "1d6x10" -> "1d6*10". */
export function toNotation(expr: string): string {
  return expr
    .trim()
    .replace(/\s+/g, "")
    .replace(/(\d)\s*[x×]\s*(\d)/gi, "$1*$2")
    .replace(/(^|[^\d])d(\d)/gi, "$11d$2");
}

/** True if the expression contains dice at all (a flat "1" needs no roll). */
export function hasDice(expr: string): boolean {
  return /\d*d\d/i.test(expr);
}

/**
 * Roll a notation through Dice+, resolving with a total per row. `expectedRows` is how
 * many independent results the notation produces (comma entries / N# repeats). Falls
 * back to a local roll when Dice+ isn't in the room, errors, or doesn't answer.
 */
export async function roll(notation: string, target: RollTarget, expectedRows = 1): Promise<RollOutcome> {
  const ready = await isDicePlusReady();
  if (!ready) return localRoll(notation);

  const rollId = `roll_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  const [playerId, playerName] = await Promise.all([OBR.player.getId(), OBR.player.getName()]);

  return new Promise((resolve) => {
    let settled = false;
    const finish = (outcome: RollOutcome) => {
      if (settled) return;
      settled = true;
      unsubResult();
      unsubError();
      clearTimeout(timer);
      resolve(outcome);
    };

    const unsubResult = OBR.broadcast.onMessage(`${EXT_ID}/roll-result`, (event) => {
      const data = event.data as RollResultMessage;
      if (data.rollId !== rollId) return;
      const rows = expectedRows === 1 ? [data.result.totalValue] : parseSummaryRows(data.result.rollSummary);
      if (rows.length !== expectedRows) {
        finish(localRoll(notation));
        return;
      }
      finish({ rows, total: rows[0], local: false });
    });
    const unsubError = OBR.broadcast.onMessage(`${EXT_ID}/roll-error`, (event) => {
      const data = event.data as { rollId: string };
      if (data.rollId !== rollId) return;
      finish(localRoll(notation));
    });

    OBR.broadcast.sendMessage(
      "dice-plus/roll-request",
      {
        rollId,
        playerId,
        playerName,
        rollTarget: target,
        diceNotation: notation,
        showResults: true,
        timestamp: Date.now(),
        source: EXT_ID,
      },
      { destination: "ALL" }
    );

    // Big multi-creature HP rolls take a while to settle; don't hang forever.
    const timer = setTimeout(() => finish(localRoll(notation)), 10000);
  });
}

/** Dice+ lists each row of a multi-roll as "... = total", separated by "|". */
function parseSummaryRows(summary: string): number[] {
  return summary
    .split("|")
    .map((seg) => seg.match(/=\s*(-?\d+)\s*$/))
    .filter((m): m is RegExpMatchArray => m !== null)
    .map((m) => parseInt(m[1], 10));
}

// ---------- Local fallback ----------
// Handles only the shapes this app sends: "NdM", "NdM+K", "NdM-K", "NdM*K", flat "K",
// comma lists, "R#expr" repeats, and "#Label" suffixes.

function rollDice(n: number, sides: number): number {
  let t = 0;
  for (let i = 0; i < n; i++) t += 1 + Math.floor(Math.random() * sides);
  return t;
}

export function localExpr(expr: string): number {
  const e = toNotation(expr.split("#")[0]);
  let m = e.match(/^(\d+)d(\d+)\*(\d+)$/i);
  if (m) return rollDice(+m[1], +m[2]) * +m[3];
  m = e.match(/^(\d+)d(\d+)([+-]\d+)?$/i);
  if (m) return rollDice(+m[1], +m[2]) + (m[3] ? parseInt(m[3], 10) : 0);
  m = e.match(/^-?\d+$/);
  if (m) return parseInt(e, 10);
  return 0;
}

function localRoll(notation: string): RollOutcome {
  const rows: number[] = [];
  for (const part of notation.split(",")) {
    const rep = part.trim().match(/^(\d+)#(.+)$/);
    if (rep) {
      for (let i = 0; i < +rep[1]; i++) rows.push(localExpr(rep[2]));
    } else {
      rows.push(localExpr(part));
    }
  }
  return { rows, total: rows[0] ?? 0, local: true };
}
