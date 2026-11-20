# Contributing to Sakura

Thanks for wanting to help Sakura bloom. 🌸

## Ways to help

- **Design themes** — new wallpapers, palettes and full profile themes (`src/profile/themes.ts`).
- **Code** — components, performance, tooling.
- **Accessibility** — contrast, keyboard navigation, screen-reader copy.
- **Writing & translation** — clearer copy, more languages.

## Getting started

```bash
npm install
npm run dev
```

Before opening a pull request:

```bash
npm run build   # type-checks and builds; must pass
```

## Guidelines

- Keep it honest: the landing page must never claim a feature works before it ships.
  Use the `mvp` / `planned` status in `src/components/sections/Features.tsx`.
- Keep dependencies minimal. Prefer CSS/SVG over images and libraries.
- Respect `prefers-reduced-motion` for any new animation.
- One topic per pull request, with a short description and a screenshot for visual changes.
