# TESA AIoT Cybersecurity — Sales Kit

A 4-page sales deck (1536×1024 per slide) for the TESA AIoT Cybersecurity
2-day training program, implemented as a **Next.js / React** app from the
Claude Design handoff bundle.

All icons and illustrations are inline SVG (crisp at any scale); the only
raster asset is the Page 1 photographic background.

## Slides

1. **Hero** — "AIoT CYBERSECURITY" headline, 4 feature pillars, shield + padlock,
   Governance→Operations pill, "FOR WHO?" persona row, bottom ribbon.
2. **Why It Matters** — The New Reality / The Impact / Visibility Gap cards.
3. **Program Overview** — Day 1 (Policy & Governance) / Day 2 (Hands-on & Visibility)
   around the "From Governance to Real Operations" orbital cycle graphic, plus the
   TESAIoT powered-by strip.
4. **Who Should Attend** — audience, key outcomes, program highlights, and the
   Join Us panel with a scannable registration QR code.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

Navigate with **←/→**, **PgUp/PgDn**, **Space**, **↑/↓**, **Home/End**, number
keys **1–4**, the on-screen arrows, or by clicking the left/right edge of the
stage. The canvas auto-scales to fit any viewport (letterboxed). **Print → Save
as PDF** lays out one slide per page.

```bash
npm run build && npm run start   # production
```

> Note: the production build needs roughly 2 GB of free RAM for compilation/
> minification. `npm run dev` runs comfortably in much less.

## Architecture

```
app/
  layout.tsx            Root layout (fonts, metadata)
  page.tsx              Server component — assembles SvgDefs + Deck + slides
  globals.css           Ported design styles (was styles.css + styles-2.css)
  deck.css              Deck shell chrome — scaling stage, HUD, print rules
components/
  Deck.tsx              'use client' — fit-to-viewport scaling + keyboard/click nav
  SvgDefs.tsx           Global <symbol> library (reused across slides via <use>)
  slides/
    Slide1.tsx … Slide4.tsx   each renders its own <section className="slide …">
public/assets/          p1-bg.jpg (Page 1 background), qr.svg (registration QR)
prototype/              Original static HTML/CSS/JS deck (reference; not built)
```

Each slide is a plain React **server component** returning full JSX. `page.tsx`
(server) renders `<Slide1 />…<Slide4 />` and passes them as `ReactNode`s to the
client `Deck`, which handles only navigation/scaling — so the heavy SVG stays on
the server and out of the client bundle.

### Slide provenance

The slide JSX was generated from the approved design prototype
(`prototype/index.html`) with an HTML→JSX transform (parse5 + a JSX emitter:
`class`→`className`, SVG kebab attrs → camelCase, `style` strings → objects, void
elements self-closed), then verified **pixel-identical** to the prototype by
screenshot diff (slides 1/2/4 = 0 px difference; slide 3 differs only in the
animated pulse dots of the orbital graphic). The files are now ordinary,
hand-editable JSX — edit them directly; the prototype is just the historical
source.

## Fonts

Loaded from Google Fonts: Inter (EN body/headings), IBM Plex Sans Thai (TH),
Saira Condensed (Page 1 hero / security-context display).
