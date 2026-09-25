import { useCallback, useEffect, useState } from "react";
import OBR from "@owlbear-rodeo/sdk";
import { EXT_ID } from "./dice";
import type { EncounterEntry } from "./types";

// Everything is kept in this browser's localStorage rather than OBR room metadata:
// room metadata is capped at 16kB and shared with every extension in the room (the
// character sheet roster already lives there). Library and custom monsters follow the
// DM across rooms; the encounter list is stored per room.

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(`${EXT_ID}/${key}`);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(`${EXT_ID}/${key}`, JSON.stringify(value));
  } catch {
    // Storage full or blocked - state still works for this session.
  }
}

type Updater<T> = T | ((prev: T) => T);

export function useLocal<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => read(key, fallback));
  const set = useCallback(
    (next: Updater<T>) => {
      setValue((prev) => {
        const v = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        write(key, v);
        return v;
      });
    },
    [key]
  );
  return [value, set] as const;
}

export function useEncounter() {
  const [roomKey, setRoomKey] = useState<string | null>(null);
  const [encounter, setEncounter] = useState<EncounterEntry[]>([]);

  useEffect(() => {
    const load = (id: string) => {
      const key = `encounter/${id}`;
      setRoomKey(key);
      setEncounter(read<EncounterEntry[]>(key, []));
    };
    if (OBR.isAvailable) OBR.onReady(() => load(OBR.room.id));
    else load("local");
  }, []);

  const update = useCallback(
    (fn: (prev: EncounterEntry[]) => EncounterEntry[]) => {
      setEncounter((prev) => {
        const next = fn(prev);
        if (roomKey) write(roomKey, next);
        return next;
      });
    },
    [roomKey]
  );

  return [encounter, update] as const;
}
