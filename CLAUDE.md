# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
npm run astro check  # Type-check .astro files
```

## Architecture

This is an Astro CV/portfolio page using Tailwind CSS v4 (via `@tailwindcss/vite` plugin, not the legacy PostCSS integration).

- `src/pages/` — file-based routing; each `.astro` file becomes a route. Currently a single page at `index.astro`.
- `public/` — static assets served at the root (favicons, images).
- Tailwind is configured as a Vite plugin in `astro.config.mjs`; there is no `tailwind.config.*` file — use CSS-based configuration instead.
- TypeScript is set to strict mode via `astro/tsconfigs/strict`.
