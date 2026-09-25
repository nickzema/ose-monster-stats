import { createContext, useContext } from "react";
import type { BannerData, Monster, Targets } from "./types";

export type PopoverState =
  | { kind: "monster"; anchor: HTMLElement; name: string; pinned: boolean }
  | { kind: "hp"; anchor: HTMLElement; entryId: string; index: number }
  | { kind: "save"; anchor: HTMLElement; monsterName: string; label: string; target: number };

export interface Actions {
  targets: Targets;
  byName: (name: string) => Monster | undefined;
  isInLibrary: (name: string) => boolean;
  addToLibrary: (name: string) => void;
  removeFromLibrary: (name: string) => void;
  openAdd: (m: Monster) => void;
  openEdit: (m: Monster) => void;
  viewInLibrary: (name: string) => void;
  openPopover: (p: PopoverState) => void;
  closePopover: () => void;
  isPopoverPinned: () => boolean;
  runRoll: (fn: () => Promise<BannerData>) => void;
}

export const ActionsContext = createContext<Actions | null>(null);

export function useActions(): Actions {
  const a = useContext(ActionsContext);
  if (!a) throw new Error("ActionsContext missing");
  return a;
}
