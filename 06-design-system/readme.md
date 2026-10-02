# OMU Design System

OMU makes extension cords, power strips, cables and accessories for the UAE market, positioned as **interior objects rather than electronics** — things you leave out on the counter next to the lamp and the vase. The audience is affluent Dubai expats, mostly men 28–45, $10k+ income, who keep tuning their homes and won't tolerate cheap plastic on display. The field is otherwise cheap no-name (30–60 AED) and one mid player, Ugreen (70–150 AED); both are utilitarian and get hidden.

**Purpose:** Even what we hide deserves to be beautiful. Especially what we touch every day.
**Essence:** The quiet glow of a good find.
**Tagline:** Hide nothing.
**One-liner:** The only power strip you won't want to hide.

First product: **OMU Extension cord, 3× Universal, Rev. 03** — 160 × 50 × 36 mm, three universal Type G outlets, two USB-C, a 1800 mm braided nylon cord, five magnets plus a mounting plate. Five production colorways: Warm grey · Black · Terracotta/brown · Olive · Navy.

## Sources

Built entirely from **https://github.com/borilya/omu-design-system** (branch `main`) — a written brand system, not a code library. Read further there for anything this project abbreviates:

- `01-brand/brand-platform.md` — the owner's verbatim brand platform (purpose → tone of voice)
- `02-identity/` — color, typography, logo, imagery rules; `tokens.json`
- `03-product/` — concept, CMF Rev. 03, claims register, renders
- `04-assets/` — logo SVGs; licensed TypeType fonts are kept locally, not in git
- `05-applications/` — web, social, packaging
- `_ai/CONTEXT.md` — the self-contained AI brief; `_ai/tokens.css` — the upstream token file this project's `tokens/` extends
- `_meta/open-questions.md` — everything still unresolved

The upstream repository is written in Russian; this design system is written in English, because **the brand's own language is English, always** — Cyrillic is banned in brand communication.

## Index

| Path | What |
|---|---|
| `styles.css` | Entry point — imports every token file. Consumers link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css` |
| `assets/logo/` | Supplied logo SVGs: wordmark, circle symbol and bare mark, light + dark |
| `assets/fonts/` | TT Bluescreens Pro Extended Bold, TT Firs Text Normal — licensed kit (woff2 / woff / ttf) |
| `assets/renders/` | Studio renders: 5 hero (transparent), 6 front (white), 1 top |
| `components/` | React primitives, grouped `core` / `forms` / `content` |
| `ui_kits/web/` | omu.com — landing, product page, colours |
| `ui_kits/social/` | instagram / omu — profile and grid |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand) |
| `SKILL.md` | Agent-skill entry point |

### Components

`core` — **Button**, **Logo**, **Tag**, **Divider**
`forms` — **Input**, **Select**, **Checkbox**
`content` — **FeatureTile**, **ProductCard**, **ColorwaySwatch**, **Statement**, **SpecRow**

**Intentional additions.** The source defines no UI component inventory — it is a brand system with no code. This set is therefore authored, sized to what the documented surfaces (web feature block, product page, Instagram profile) actually need. `ColorwaySwatch`, `FeatureTile`, `SpecRow` and `Statement` come straight from documented artefacts; `Button`, `Input`, `Select`, `Checkbox`, `Tag`, `Divider`, `Logo`, `ProductCard` are conventional primitives styled to the brand.

---

## Content fundamentals

**Language.** English, always. Never Cyrillic. The brand name is **OMU** in caps in running text; lowercase `omu` belongs only to the logo and the social handle.

**Voice, one line:** warm and personal, quietly witty, exacting about words, confident without bragging.

Warm conversational English — contractions (*you'll, it's, don't*), plain words, addressed to one smart friend. Dry humour in the corner of the eye, never a joke for its own sake.

| Principle | Bad → Good |
|---|---|
| Warm, like talking at home | "This product is crafted from premium-grade materials" → "Pick it up, and you'll get why you won't want to tuck it behind the couch." |
| A smile in the corner of the eye | "Say goodbye to ugly cords!" → "Most power strips are made to disappear. This one didn't get the memo." |
| Exacting about detail and texture | "Stylish design and premium quality" → "A matte shell with no glare. Seams you can't feel. A fabric-wrapped cord that lies flat." |
| Quietly confident | "The best designer power strip — a revolution for your home!!!" → "A power strip you'll leave out in the open. That's the whole idea." |

**Rules.** One warm *you*, never "the consumer". A full stop instead of an exclamation mark, nearly always. A concrete noun instead of an epithet. Sentence case everywhere except labels and the name OMU. Short sentences — if a word can go, it goes. **Emoji: effectively none**; at most one, and only if it earns its place. No emoji scattered through copy.

**Stop words:** premium, innovative, stylish, high-quality, revolutionary, sleek, cutting-edge.
**Never call it:** a socket, an outlet device, wiring. Those are built-in electrics, which OMU does not make. It is a power strip, an extension cord, cables, cable accessories.

**Mandated strings — quote verbatim, never paraphrase:**
- Tagline / hero: **Hide nothing.**
- One-liner: **The only power strip you won't want to hide.**
- Positioning: **OMU isn't a power strip. It's an interior object, made to be seen — the only one in a category of cheap plastic.**
- Post-purchase (unboxing, insert, reviews): **What a find.**
- Message pillars: *It's made to be seen.* · *No detail left rough.* · *A quiet pleasure, every day.* · *Safe, without making a thing of it.*

**Claims.** Six formulations are closed for any external material because no technical evidence exists in the system: PD 3.0 + PPS, "fast-charging USB-C", "certified safe", UAE/CB compliance, "engineered to handle real loads", thermal stability and build quality. Dimensions, the two USB-C ports, three universal outlets as geometry, magnetic mounting as construction, five colorways, and the entire design argument are safe to state.

---

## Visual foundations

**Colour.** Two colours, Warm Gray family: White `#D7D2CB` (a warm light stone — *not* white) and Black `#262423` (warm very dark neutral — *not* black). All typography lives on the White/Black pair (10.28). Product colorways are a separate **Cool Gray** system and must never be used as page surfaces — the product in shot sits slightly cooler than the background on purpose.

**Colour nature.** The palette is backed by photographs of limestone and slate: mineral, matte, textured. Never plastic.

**Type.** Headings in **TT Bluescreens Pro Extended Bold** — a wide geometric grotesque; body in **TT Firs Text Normal**. Draft scale (modular 1.25, base 16): 64 / 48 / 32 / 24 / 20 / 16 / 14, with negative tracking on the large sizes because the heading face is wide. Uppercase appears only in small labels (14px, 0.08em tracking) and in the name OMU.

**Spacing & layout.** 4 px step: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Container 1200 px. Generous vertical rhythm — sections breathe at 96–128 px. Grid and container width are not fixed upstream; these are this project's proposal.

**Corners.** Soft rectangle, taken from the form language of the object and the wordmark: 6 px fields, 12 px inner images, 20 px tiles and cards, pill for buttons and tags.

**Cards & surfaces.** A card is a flat plane — light grey tile `#E2DED8`, 20 px radius, no border, no shadow, contents padded 32 px. Where separation is needed, a 1 px hairline of Black at 16%. Shadows exist but are diffuse and shallow (`0 2px 8px` / `0 12px 32px` at 6–10% Black) — matte is a brand property, so nothing glossy, no glass, no neon, no gradients as decoration.

**Backgrounds.** Full-bleed flat colour, never a gradient. One accepted move: the Black plane for statements and the footer. No patterns or textures in the digital system today; texture is carried by product imagery, not by the layout.

**Imagery — two registers, never mixed.**
*Studio:* the object on white or transparent, soft diffuse shadow beneath, neutral top light, 3/4-from-above angle. **The main device: the cord laid out in concentric coils around the body, plug set apart.** That is the literal *Hide nothing.* and the recognisable brand silhouette — the body without its cord loop reads as an ordinary power strip. No captions, callouts, icons or badges over a studio frame, ever.
*Interior:* the object small and off-centre in a real home — books, a lamp, a rumpled throw, a phone beside it. Warm soft light, long blurred shadows. Natural, expensive materials: oak, marble, travertine, leather, velvet, wool. Colorway chosen to sit *with* the room, not against it. No people. All existing interior frames are vertical; horizontal ones for wide web blocks don't exist yet.

**Imagery colour vibe.** Warm, low-contrast, matte; no grain rule is set. Cool sterile showroom lighting and magazine gloss are out of bounds.

**Motion.** Quiet by definition. 220 ms, `cubic-bezier(.2,.6,.2,1)`. Fades and small position shifts only — no bounce, no spring, no attention-seeking loops. Upstream sets no animation rules; this is inference from *Bold, never reckless*.

**Hover.** Opacity fade to ~0.78, or the border darkening on a field. Never a colour pop, never a lift-and-shadow.
**Press.** No shrink, no scale. State is carried by fill: an outline goes solid, a swatch takes a 2 px Black ring.
**Focus.** The border goes to Black. No glow, no coloured outline.

**Transparency and blur.** Used only for a modal scrim (Black at 72%). No frosted glass, no backdrop blur in the UI — it reads as the tech aesthetic the brand rejects.

**Hard prohibitions** (any one of these makes the material not-OMU): bright or blinking LEDs, especially blue; glossy highlights, gradients, glass and neon effects; office/techno aesthetics and aggressive engineering; sterile showroom or magazine gloss in interior frames; the product hidden, cropped by the frame, or shown without its cord; callouts, icons, badges or promo plates over a studio frame; exclamation marks, stop words, scattered emoji; Cyrillic in brand communication; the words *socket / outlet device / wiring*; the brand name written `Omu` or `omu` in running text.

---

## Iconography

**There is no OMU icon system.** The repository contains no icon font, no SVG sprite, no PNG icon set — only four logo SVGs. Nothing has been substituted from a CDN: introducing Lucide or Heroicons here would invent a visual layer the brand has never decided on, and the one place icons were proposed upstream (a "safety icon-hero") is explicitly forbidden by the platform.

What exists instead:

- **The logo SVGs** in `assets/logo/` — wordmark (lowercase `omu`, 6.16 : 1, rectangular forms with rounded corners, letters touching so they read as one tie) and the symbol (the `m` in a circle) for avatars and favicons. Never redraw or approximate the mark; use the supplied files. The light files use palette White `#D7D2CB`; the bare mark (no circle) is in `omu-mark-*.svg`.
- **Typographic marks in place of icons.** Where a UI would normally reach for a glyph, OMU uses a word or a hairline: the Select caret is two 6 px triangles drawn in CSS, the checkbox check-state is a solid fill with no tick glyph.
- **Product-side marking** is engraving, not iconography: certification marks are laser-etched, matte, grey — present but not announcing themselves. Do not turn them into badges in a layout.
- **Emoji are not used.**

If an icon set is ever needed, that is a brand decision to take upstream — flagged in the caveats below, not resolved here.

---

## Status and caveats

- **Fonts are not in the repository.** The licensed TypeType kit is a Desktop licence: it forbids distributing font files and does not cover `@font-face` on a public site (that needs a Web Font licence). Drop your licensed copies into `04-assets/fonts/` (`assets/fonts/` here is a symlink to it): `TT_Bluescreens_Pro_Extended_Bold.{woff2,woff,ttf}`, `TT_Firs_Text_Normal.{woff2,woff}`, `TT-Firs-Text-Normal.ttf`. Without them everything falls back to the system stack.
- **The type scale, spacing scale and radii are drafts** proposed by AI upstream, not approved by the owner. Generate on them; don't cite them as canon.
- **Interior renders exist upstream** — six approved vertical frames in `03-product/renders/interior/` — but this project's kits still use studio renders only.
- **No close-up texture shots** (seam, end face, cable entry, the logo on the underside) exist anywhere. The claim "seams you can't feel" is unsupported by any image.
- **No packaging artwork** — packaging exists only as a described concept.
- Pantone and CMYK values are missing for Black.
