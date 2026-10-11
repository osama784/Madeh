# Madeh — قَصائِدُ المَدِيحِ

A small Arabic-language poetry web app for browsing and searching a collection of praise poems (madīḥ).

**Live demo:** [madeh.vercel.app](https://madeh.vercel.app)

> **Note:** This is a practice project built while learning React (Vite). It is an early-stage app with a small sample dataset — not a finished product.

## Features

- **Search** — filters poems by the poem's opening line (stored as `title`) or author name as you type.
- **Poem grid** — responsive card layout (1 to 5 columns depending on screen width) showing each poem's title and author; displays a message when no poems match.
- **Slide-in navigation drawer** — lists poem categories (all poems, supplications, prayers on the Prophet ﷺ, prophetic mawlids) and a tools entry (electronic tasbih). These entries are UI only for now; search is the working filter.
- **PWA setup** — web app manifest and service worker registration.
- Styled with Tailwind CSS; icons from Font Awesome.

## Tech stack

- React 18 + Vite 5 (`@vitejs/plugin-react`)
- Tailwind CSS 3 (+ `tailwind-scrollbar`)
- Font Awesome 6 (free solid icons)
- ESLint 8

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000` (configured in `vite.config.js`).

Other scripts:

- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Project structure

```
src/
  App.jsx               — app state: search filtering + drawer visibility
  components/
    Header.jsx          — top bar with app title and menu button
    Navbar.jsx          — slide-in drawer with categories
    Section.jsx         — search input
    PoemContainer.jsx   — grid of poem cards + empty state
    Poem.jsx            — single poem card
  assets/poems.json     — poem dataset (title + author)
public/                 — icons, web app manifest, images
```

## Data

Poems are stored in `src/assets/poems.json` as `{ "title": ..., "author": ... }`. The repo currently ships 4 sample entries.
