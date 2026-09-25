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
import { AddModal, ConfirmModal, HelpModal, RollBanner, SettingsModal } from "./components/Modals";
import Modal, { BrandFooter } from "./components/Modal";
import { MonsterCard } from "./components/MonsterCard";
import Popover from "./components/Popover";
import RandomScreen from "./components/RandomScreen";

type Screen = "library" | "encounter" | "random";

const STARTER_NAMES = BASE_MONSTERS.map((m) => m.name);
const DEFAULT_SETTINGS: Settings = {
  initiativeTracker: false,
  clash: false,
  checkTarget: "gm_only",
  hpTarget: "gm_only",
  combatTarget: "everyone",
};

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
  const [confirmClear, setConfirmClear] = useState(false);
  const [confirmClearEnc, setConfirmClearEnc] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [cardName, setCardName] = useState<string | null>(null);

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
    targets: { check: settings.checkTarget, hp: settings.hpTarget, combat: settings.combatTarget },
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
    openAdd: (m) => {
      setCardName(null);
      setAddTarget(m);
    },
    openEdit: (m) => {
      setCardName(null);
      setEditBase({ base: m });
    },
    isCustom: (name) => customNames.has(name),
    deleteCustom: (name) => setConfirmDelete(name),
    viewInLibrary,
    openCard: (name) => setCardName(name),
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
        <div className="list-toolbar">
          <h2>Monster Library</h2>
          <div className="list-toolbar-right">
            <button className="help-btn" data-tip="Help" onClick={() => setShowHelp(true)}>?</button>
            <button className="help-btn gear-btn" data-tip="Settings" onClick={() => setShowSettings(true)}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            </button>
            <button className="btn" onClick={() => setEditBase({ base: null })}>+ New</button>
          </div>
        </div>
        <div className="seg-toggle tabs">
          <button className={`seg-btn${screen === "library" ? " active" : ""}`} onClick={() => setScreen("library")}>Library</button>
          <button className={`seg-btn${screen === "encounter" ? " active" : ""}`} onClick={() => setScreen("encounter")}>
            Encounter {total ? `(${total})` : ""}
          </button>
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
            onRemove={(name) => actions.removeFromLibrary(name)}
            onAdd={(name) => actions.addToLibrary(name)}
            onClosePreview={() => {
              if (openName === previewName) setOpenName(null);
              setPreviewName(null);
            }}
            onClearAll={() => setConfirmClear(true)}
            onOpenRandom={() => openRandom("library")}
          />
        )}
        {screen === "encounter" && (
          <EncounterScreen
            encounter={encounter}
            onRemove={(id) => updateEncounter((prev) => prev.filter((e) => e.id !== id))}
            onToggleHidden={(id) => updateEncounter((prev) => prev.map((e) => (e.id === id ? { ...e, hidden: !e.hidden } : e)))}
            onClear={() => setConfirmClearEnc(true)}
            onOpenRandom={() => openRandom("encounter")}
          />
        )}
        {screen === "random" && <RandomScreen onBack={() => setScreen(randomFrom)} onAddEncounter={addEntry} />}

        <BrandFooter />
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
                hp = (await rollHpFor(addTarget, qty, settings.hpTarget)).hp;
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

      {cardName && byNameMap.get(cardName) && (
        <Modal wide title={cardName} onClose={() => setCardName(null)}>
          <div className="mon-card">
            <MonsterCard m={byNameMap.get(cardName) as Monster} inPopup />
          </div>
        </Modal>
      )}

      {confirmClearEnc && (
        <ConfirmModal
          title="Clear the encounter?"
          confirmLabel="Clear Encounter"
          onCancel={() => setConfirmClearEnc(false)}
          onConfirm={() => {
            updateEncounter(() => []);
            setConfirmClearEnc(false);
          }}
        />
      )}

      {confirmDelete && (
        <ConfirmModal
          title={`Delete ${confirmDelete} permanently?`}
          confirmLabel="Delete"
          onCancel={() => setConfirmDelete(null)}
          onConfirm={() => {
            const name = confirmDelete;
            setCustoms((prev) => prev.filter((m) => m.name !== name));
            setLibraryNames((prev) => prev.filter((n) => n !== name));
            if (openName === name) setOpenName(null);
            if (previewName === name) setPreviewName(null);
            if (cardName === name) setCardName(null);
            setConfirmDelete(null);
          }}
        />
      )}

      {confirmClear && (
        <ConfirmModal
          title={`Remove all ${libraryNames.length} monsters from your library?`}
          confirmLabel="Clear All"
          onCancel={() => setConfirmClear(false)}
          onConfirm={() => {
            setLibraryNames([]);
            setOpenName(null);
            setConfirmClear(false);
          }}
        />
      )}

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {showSettings && <SettingsModal settings={settings} onChange={setSettings} onClose={() => setShowSettings(false)} />}
    </ActionsContext.Provider>
  );
}
