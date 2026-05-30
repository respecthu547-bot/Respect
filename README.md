# Amruth & AquaPure — Water Brand Site

Two natural-mineral-water brand pages, now built with **React + Vite** and
animated with **Framer Motion**. Every page section fades and lifts into view on
scroll, with a staggered delay so content reveals sequentially rather than all
at once.

## ✨ What's here

- **`/` — Amruth** ("The Nectar of Purity"): jade/gold editorial design with a
  morphing water blob, bobbing bottle and spinning mandala.
- **`/aqua` — AquaPure**: blue/aqua design with a glass bottle, rising bubbles,
  features, products, process, testimonials and a contact form.
- A floating link in the corner of each page hops between the two demos.

The decorative CSS keyframe animations (blob morph, bottle bob, mandala spin,
floating bottle, rising bubbles) are **left untouched** — Framer Motion only
adds the scroll-reveal choreography on top.

## 🚀 Running locally

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # production build → dist/
npm run preview   # serve the production build
```

## 🎞️ How the scroll animation works

`src/components/Reveal.jsx` exposes two primitives built on Framer Motion:

- **`<RevealSection>`** — wraps a whole page section. It fades + lifts in the
  first time it scrolls into view (`whileInView` + `once`) and orchestrates its
  children via `staggerChildren`. An `index` prop adds a small per-section base
  delay so above-the-fold sections cascade in sequence.
- **`<RevealItem>`** — the child counterpart; drop it around cards, headings and
  paragraphs to inherit the parent section's stagger.

## 📁 Structure

```
.
├── index.html              # Vite entry (mounts the React app)
├── vite.config.js
├── src/
│   ├── main.jsx            # Router: / → Amruth, /aqua → AquaPure
│   ├── index.css          # Shared reset + page-switch link
│   ├── components/
│   │   └── Reveal.jsx      # Framer Motion scroll-reveal primitives
│   └── pages/
│       ├── Amruth.jsx / amruth.css
│       └── Aqua.jsx   / aqua.css
└── legacy/                 # Original static HTML/CSS/JS (pre-React)
    ├── index.html
    ├── styles.css
    └── script.js
```

## 🎨 Customising

- **Colors** live as CSS variables scoped to each page wrapper
  (`.amruth-page` in `src/pages/amruth.css`, `.aqua-page` in `aqua.css`).
- **Animation timing** (durations, easing, stagger, per-section delay) lives in
  `src/components/Reveal.jsx`.
