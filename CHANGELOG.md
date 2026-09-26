# Changelog

## 0.4.0 — Full Bestiary & Encounter Tables
- Every monster in OSE Classic Monsters (233 entries; variable-HD monsters split per HD / power level).
- Every encounter table: dungeon levels 1 to 8+, all 10 wilderness terrains, all sub-tables.
- Table entries link to their monsters; hydras roll heads by the book's dice, and entries like
  Shark or Water Termite let the DM choose which kind.
- TT links to the Necrotic Gnome treasure-by-type generator.
- Cards show the book's full AC, morale, XP, and saves-as notes; abilities in book style.
- Fixes from checking against the book: Killer Bee dungeon NA is 1d6; several wilderness Animal
  columns and "Pterodactyl" corrected.
- Shared styles now come from zemaria-ui.

## 0.3.2 — Party Sheet Congruency
- Header matches OSE Character Sheets: title row with ?, gear, and + New; tabs below; same sizes, spacing, and tooltips.

## 0.3.1 — Topbar Icons
- Settings is a gear; bold "?" and heavier gear to match OSE Character Sheets.

## 0.3.0 — Card & Encounter Upgrades
- Card stats as uniform black chips; SV opens a save picker with modifier, NA picks Dungeon/Wilderness.
- Encounter: card popup from the magnifier, Save button, AC/THAC0/MV/ML line, defeated XP tally,
  Visible/Hidden toggle, Clear Encounter.
- Table links: View Card opens the card popup instead of the Library.
- "Add to Library" moved onto the search-preview bar; custom monsters can be deleted.
- HP chips save as you edit; popups flip above when there's no room below.

## 0.2.0
- All windows: × close, Esc / click-outside to close, Cancel/Save always visible.
- Library: header with count, + Custom Monster, Clear All (with confirm); alphabetical;
  aligned HD column; AC/XP on each bar; × on each bar removes from library.
- Opening a card scrolls so the whole card is visible.
- NA roll results say Dungeon or Wilderness.
- Add to Encounter: Number Appearing rolled from Dungeon or Wilderness buttons.
- Random Encounter: Wilderness/Dungeon toggle, uniform alphabetical list, Roll at top of
  tables, results in a window with Add to Encounter / Add to Library / Reroll.
- Settings: roll visibility per category (encounter checks & NA, HP, attacks/saves/morale).
- "Another Zemaria product" footer.
- Fixes: hidden-player checkbox layout, roll banner peeking when hidden.

## 0.1.0
- Initial React/TS port of the Monster Stat Card mockup.
