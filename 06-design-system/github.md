repo: borilya/omu-design-system
branch: main

## Last sync

date: 2026-09-11T10:35:00Z

### Updated in this project

- Replaced the logo set with the new supplied SVGs (wordmark, circle symbol, bare mark — light + dark), C2PA metadata stripped.
- Swapped the trial fonts for the licensed TypeType kit: TT Bluescreens Pro Extended **Bold**, TT Firs Text Normal — served woff2 → woff → ttf.
- Heading weight moved 500 → 700 in `tokens/base.css`, `Statement`, `FeatureTile` and both style guides.
- Fonts and logos were supplied directly by the owner, not pulled from `main` (the repo still carries the trial kit).

## Sync history

- 2026-10-02 — bundle committed to the repo as `06-design-system/`. Logos moved to `04-assets/logo/`, renders referenced from `03-product/renders/` via symlinks, licensed fonts kept out of git (Desktop licence).

- 2026-08-12 — initial import: palette, type scale, spacing, radii, four logo SVGs, trial fonts, 12 renders, 12 primitives, two UI kits, 19 specimen cards.

## Screen map

| Screen / file | Built from |
|---|---|
| `tokens/colors.css` | `02-identity/color.md`, `02-identity/tokens.json`, `03-product/cmf.md` |
| `tokens/typography.css`, `tokens/fonts.css` | `02-identity/typography.md`, `04-assets/fonts/` |
| `tokens/spacing.css`, `tokens/base.css` | `_ai/tokens.css` |
| `guidelines/*.card.html` | `_ai/CONTEXT.md`, `02-identity/*`, `01-brand/README.md` |
| `components/` | `_ai/CONTEXT.md`, `05-applications/web.md` (no upstream component code exists) |
| `ui_kits/web/` | `05-applications/web.md`, `03-product/concept.md`, `03-product/cmf.md`, `03-product/claims.md` |
| `ui_kits/social/` | `05-applications/social.md` |
| `assets/` | `04-assets/logo/`, `04-assets/fonts/`, `03-product/renders/` |
| `readme.md` | `01-brand/`, `02-identity/`, `03-product/`, `05-applications/`, `_ai/CONTEXT.md` |
