# OSE Monster Stat Card — Owlbear Rodeo extension

DM-facing monster library, random encounter roller, and session encounter tracker for
Old-School Essentials. Same stack and visual language as OSE Character Sheets.

## Run / deploy

```
npm install
npm run dev     # local: add http://localhost:5173/manifest.json in Owlbear
npm run build   # Render static site: build "npm install && npm run build", publish "dist"
```

## Notes

- **Dice:** Dice+ broadcast API (`dice-plus/isReady`, `dice-plus/roll-request`,
  `{source}/roll-result`, `{source}/roll-error`), local fallback when Dice+ isn't in the
  room. Roll visibility (GM Only / Everyone) is set in Settings.
- **Storage:** browser localStorage, not room metadata (16kB cap shared with the
  character sheet roster). Library + custom monsters follow the DM across rooms; the
  encounter list is saved per room.
- **Data:** 12 verified starter monsters, 3 wilderness terrains + shared sub-tables,
  dungeon level 1, 97 spells. Never add stats without checking the book.
- **Not wired yet:** Initiative Tracker / Clash! push (Settings checkboxes save but do
  nothing), Help tour.
