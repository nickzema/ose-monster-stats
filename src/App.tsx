import { useMemo, useRef, useState } from "react";
import { ActionsContext } from "./context";
import type { Actions, PopoverState } from "./context";
import { BASE_MONSTERS } from "./data/monsters";
import { rollHpFor } from "./rolls";
import { useEncounter, useLocal } from "./store";
import type { BannerData, Monster, Settings } from "./types";
import EditModal from "./components/EditModal";
import EncounterScreen from "./components/EncounterScreen";
import LibraryScreen from "./components/LibraryScreen";
import { AddModal, HelpModal, RollBanner, SettingsModal } from "./components/Modals";
import Popover from "./components/Popover";
import RandomScreen from "./components/RandomScreen";

type Screen = "library" | "encounter" | "random";

const STARTER_NAMES = BASE_MONSTERS.map((m) => m.name);
const DEFAULT_SETTINGS: Settings = { initiativeTracker: false, clash: false, rollTarget: "gm_only" };

export default function App() {
  const [customs, setCustoms] = useLocal<Monster[]>("custom-monsters", []);
  const [libraryNames, setLibraryNames] = useLocal<string[]>("library", STARTER_NAMES);
  const [settingsStored, setSettings] = useLocal<Settings>("settings", DEFAULT_SETTINGS);
  const settings = { ...DEFAULT_SETTINGS, ...settingsStored };
  const [encounter, updateEncounter] = useEncounter();

  const [screen, setScreen] = useState<Screen>("library");
  const [randomFrom, setRandomFrom] = useState<"library" | "encounter">("library");
  const [openName, setOpenName] = useState<string | null>(null);
  const [previewName, setPreviewName] = useState<string | null>(null);
  const [scrollNonce, setScrollNonce] = useState(0);

  const [popover, setPopover] = useState<PopoverState | null>(null);
  const [addTarget, setAddTarget] = useState<Monster | null>(null);
  const [addBusy, setAddBusy] = useState(false);
  const [editBase, setEditBase] = useState<{ base: Monster | null } | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [banner, setBanner] = useState<BannerData | null>(null);
  const [bannerShown, setBannerShown] = useState(false);
  const bannerTimer = useRef<number | undefined>(undefined);

  const monsters = useMemo(() => [...BASE_MONSTERS, ...customs], [customs]);
  const byNameMap = useMemo(() => new Map(monsters.map((m) => [m.name, m])), [monsters]);
  const customNames = useMemo(() => new Set(customs.map((m) => m.name)), [customs]);

  const showBanner = (b: BannerData) => {
    setBanner(b);
    setBannerShown(true);
    window.clearTimeout(bannerTimer.current);
    bannerTimer.current = window.setTimeout(() => setBannerShown(false), 3400);
  };

  const pinnedRef = useRef(false);
  pinnedRef.current = !!popover && (popover.kind !== "monster" || popover.pinned);

  const viewInLibrary = (name: string) => {
    setPreviewName(name);
    setOpenName(name);
    setScreen("library");
    setScrollNonce((n) => n + 1);
  };

  const openRandom = (from: "library" | "encounter") => {
    setRandomFrom(from);
    setScreen("random");
  };

  const addEntry = (m: Monster, hp: number[], hidden: boolean) => {
    updateEncounter((prev) => [
      ...prev,
      { id: crypto.randomUUID(), monsterName: m.name, qty: hp.length, hp: hp.map((v) => ({ cur: v, max: v })), hidden },
    ]);
    setScreen("encounter");
  };

  const actions: Actions = {
    rollTarget: settings.rollTarget,
    byName: (name) => byNameMap.get(name),
    isInLibrary: (name) => libraryNames.includes(name),
    addToLibrary: (name) => {
      setLibraryNames((prev) => (prev.includes(name) ? prev : [...prev, name]));
      if (previewName === name) setPreviewName(null);
      showBanner({ label: "Library", num: "+1", detail: `${name} added to your library.`, success: true });
    },
    removeFromLibrary: (name) => {
      setLibraryNames((prev) => prev.filter((n) => n !== name));
      if (openName === name) setOpenName(null);
      showBanner({ label: "Library", num: "-1", detail: `${name} removed from your library (still searchable).`, success: null });
    },
    openAdd: (m) => setAddTarget(m),
    openEdit: (m) => setEditBase({ base: m }),
    viewInLibrary,
    openPopover: (p) => setPopover(p),
    closePopover: () => setPopover(null),
    isPopoverPinned: () => pinnedRef.current,
    runRoll: (fn) => {
      fn().then(showBanner);
    },
  };

  const total = encounter.reduce((s, e) => s + e.qty, 0);

  return (
    <ActionsContext.Provider value={actions}>
      <div className="page">
        <div className="topbar">
          <h1 className="topbar-title">Monster Library</h1>
          <div className="topbar-controls">
            <div className="seg-toggle">
              <button className={`seg-btn${screen === "library" ? " active" : ""}`} onClick={() => setScreen("library")}>Library</button>
              <button className={`seg-btn${screen === "encounter" ? " active" : ""}`} onClick={() => setScreen("encounter")}>
                Encounter {total ? `(${total})` : ""}
              </button>
            </div>
            <button className="icon-circle" title="Help" onClick={() => setShowHelp(true)}>
              <svg viewBox="0 0 24 24"><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4" /><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" /></svg>
            </button>
            <button className="icon-circle" title="Settings" onClick={() => setShowSettings(true)}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.6 1.6M7.5 16.5l-1.6 1.6M18.1 18.1l-1.6-1.6M7.5 7.5 5.9 5.9" /></svg>
            </button>
          </div>
        </div>

        {screen === "library" && (
          <LibraryScreen
            monsters={monsters}
            libraryNames={libraryNames}
            customNames={customNames}
            previewName={previewName}
            openName={openName}
            scrollNonce={scrollNonce}
            onToggleOpen={(name) => setOpenName((cur) => (cur === name ? null : name))}
            onPickSearch={(name) => viewInLibrary(name)}
            onNewMonster={() => setEditBase({ base: null })}
            onOpenRandom={() => openRandom("library")}
          />
        )}
        {screen === "encounter" && (
          <EncounterScreen
            encounter={encounter}
            onRemove={(id) => updateEncounter((prev) => prev.filter((e) => e.id !== id))}
            onOpenRandom={() => openRandom("encounter")}
          />
        )}
        {screen === "random" && <RandomScreen onBack={() => setScreen(randomFrom)} onAddEncounter={addEntry} />}
      </div>

      {popover && (
        <Popover
          state={popover}
          encounter={encounter}
          onSetHp={(entryId, index, value) =>
            updateEncounter((prev) =>
              prev.map((e) => (e.id === entryId ? { ...e, hp: e.hp.map((h, i) => (i === index ? { ...h, cur: value } : h)) } : e))
            )
          }
        />
      )}

      <RollBanner data={banner} show={bannerShown} onDismiss={() => setBannerShown(false)} />

      {addTarget && (
        <AddModal
          monster={addTarget}
          busy={addBusy}
          onCancel={() => setAddTarget(null)}
          onConfirm={async (qty, mode, hidden) => {
            let hp: number[];
            if (mode === "average") {
              hp = Array.from({ length: qty }, () => addTarget.avgHp);
            } else {
              setAddBusy(true);
              try {
                hp = (await rollHpFor(addTarget, qty, settings.rollTarget)).hp;
              } finally {
                setAddBusy(false);
              }
            }
            setAddTarget(null);
            addEntry(addTarget, hp, hidden);
          }}
        />
      )}

      {editBase && (
        <EditModal
          base={editBase.base}
          existingNames={monsters.map((m) => m.name)}
          onCancel={() => setEditBase(null)}
          onSave={(m) => {
            setCustoms((prev) => [...prev, m]);
            setLibraryNames((prev) => [...prev, m.name]);
            setEditBase(null);
            setOpenName(m.name);
            setScreen("library");
            setScrollNonce((n) => n + 1);
          }}
        />
      )}

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {showSettings && <SettingsModal settings={settings} onChange={setSettings} onClose={() => setShowSettings(false)} />}
    </ActionsContext.Provider>
  );
}
