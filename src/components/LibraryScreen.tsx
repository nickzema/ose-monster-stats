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
  onNewMonster: () => void;
  onOpenRandom: () => void;
}

export default function LibraryScreen(p: Props) {
  const [query, setQuery] = useState("");
  const byName = new Map(p.monsters.map((m) => [m.name, m]));

  const showPreview = p.previewName !== null && !p.libraryNames.includes(p.previewName);
  const names = showPreview ? [p.previewName as string, ...p.libraryNames] : p.libraryNames;
  const rows = names.map((n) => byName.get(n)).filter((m): m is Monster => !!m);

  const q = query.trim().toLowerCase();
  const matches = q ? p.monsters.filter((m) => m.name.toLowerCase().includes(q)) : [];

  // Scroll the opened row into view after a search pick, "View Card", or a new monster save.
  useEffect(() => {
    if (!p.scrollNonce || !p.openName) return;
    const el = document.querySelector(`.lib-row[data-name="${CSS.escape(p.openName)}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [p.scrollNonce]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <button className="btn block rand-launch" onClick={p.onOpenRandom}>Random Encounter</button>

      <div className="search-wrap">
        <div className="search-input-row">
          <span className="search-icon">&#9906;</span>
          <input
            type="text"
            placeholder="Type a monster name…"
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
                <span className="sub">AC {m.ac} &middot; XP {m.xp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn outline block" style={{ marginBottom: 10 }} onClick={p.onNewMonster}>+ New Monster</button>

      {rows.length === 0 ? (
        <p className="empty-state">Your library is empty. Search for a monster and add it.</p>
      ) : (
        rows.map((m) => {
          const isOpen = p.openName === m.name;
          const isPreview = showPreview && m.name === p.previewName;
          const isCustom = p.customNames.has(m.name);
          return (
            <div key={m.name} data-name={m.name} className={`lib-row${isOpen ? " open" : ""}${isPreview ? " preview" : ""}`}>
              <div className="lib-row-head" onClick={() => p.onToggleOpen(m.name)}>
                <span className="hd-badge">HD {m.hd}</span>
                <span className="name">{m.name}</span>
                {isPreview ? <span className="custom-badge">Not in Library</span> : isCustom ? <span className="custom-badge">Custom</span> : null}
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
