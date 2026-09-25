import { useEffect, useState } from "react";
import type { Monster } from "../types";
import { MonsterCard } from "./MonsterCard";

interface Props {
  monsters: Monster[]; // every searchable monster (base + custom)
  libraryNames: string[];
  customNames: Set<string>;
  previewName: string | null;
  openName: string | null;
  scrollNonce: number;
  onToggleOpen: (name: string) => void;
  onPickSearch: (name: string) => void;
  onRemove: (name: string) => void;
  onAdd: (name: string) => void;
  onClosePreview: () => void;
  onClearAll: () => void;
  onOpenRandom: () => void;
}

export default function LibraryScreen(p: Props) {
  const [query, setQuery] = useState("");
  const byName = new Map(p.monsters.map((m) => [m.name, m]));

  const showPreview = p.previewName !== null && !p.libraryNames.includes(p.previewName);
  const libraryRows = p.libraryNames
    .map((n) => byName.get(n))
    .filter((m): m is Monster => !!m)
    .sort((x, y) => x.name.localeCompare(y.name));
  const preview = showPreview ? byName.get(p.previewName as string) : undefined;
  const rows = preview ? [preview, ...libraryRows] : libraryRows;

  const q = query.trim().toLowerCase();
  const matches = q ? p.monsters.filter((m) => m.name.toLowerCase().includes(q)) : [];

  // When a card opens, scroll just enough to show the whole card (or its top, if it's taller than the window).
  useEffect(() => {
    if (!p.openName) return;
    const frame = requestAnimationFrame(() => {
      const el = document.querySelector(`.lib-row[data-name="${CSS.escape(p.openName as string)}"]`);
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top >= 0 && r.bottom <= window.innerHeight) return;
      el.scrollIntoView({ behavior: "smooth", block: r.height > window.innerHeight ? "start" : "nearest" });
    });
    return () => cancelAnimationFrame(frame);
  }, [p.openName, p.scrollNonce]);

  return (
    <div>
      <button className="btn block rand-launch" onClick={p.onOpenRandom}>Random Encounter</button>

      <div className="search-wrap">
        <div className="search-input-row">
          <span className="search-icon">&#9906;</span>
          <input
            type="text"
            placeholder="Search monsters…"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setQuery("")}
          />
        </div>
        <div className={`search-dropdown${q ? " open" : ""}`}>
          {q && matches.length === 0 && <p className="empty-state">No monster matches "{query}".</p>}
          {matches.map((m) => (
            <div
              key={m.name}
              className="char-row mon-row"
              onMouseDown={(e) => {
                e.preventDefault();
                setQuery("");
                p.onPickSearch(m.name);
              }}
            >
              <span className="hd-badge">HD {m.hd}</span>
              <div className="char-row-body char-id">
                <span className="name">{m.name}</span>
                <span className="sub">AC {m.ac} [{m.acAsc}] &middot; XP {m.xp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-head">
        <h3>Library <span className="section-count">{libraryRows.length}</span></h3>
        <div className="section-tools">
          <button className="btn outline small" disabled={libraryRows.length === 0} onClick={p.onClearAll}>Clear All</button>
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="empty-state">Your library is empty. Search for a monster and add it.</p>
      ) : (
        rows.map((m) => {
          const isOpen = p.openName === m.name;
          const isPreview = !!preview && m.name === preview.name;
          const isCustom = p.customNames.has(m.name);
          return (
            <div key={m.name} data-name={m.name} className={`lib-row${isOpen ? " open" : ""}${isPreview ? " preview" : ""}`}>
              <div className="lib-row-head" onClick={() => p.onToggleOpen(m.name)}>
                <span className="hd-badge">HD {m.hd}</span>
                <span className="lib-row-id">
                  <span className="name">{m.name}</span>
                  <span className="sub">AC {m.ac} [{m.acAsc}] &middot; XP {m.xp}</span>
                </span>
                {isPreview ? (
                  <button className="btn small bar-add" onClick={(e) => { e.stopPropagation(); p.onAdd(m.name); }}>+ Add to Library</button>
                ) : isCustom ? (
                  <span className="custom-badge">Custom</span>
                ) : null}
                <button
                  className="row-x"
                  title={isPreview ? "Close" : "Remove from Library"}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isPreview) p.onClosePreview();
                    else p.onRemove(m.name);
                  }}
                >
                  &times;
                </button>
                <span className="chevron">&#9656;</span>
              </div>
              <div className="lib-row-body mon-card">{isOpen && <MonsterCard m={m} />}</div>
            </div>
          );
        })
      )}
    </div>
  );
}
