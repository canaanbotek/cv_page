# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run astro check  # Type-check .astro files
```

## Architecture

Single-page Astro CV/portfolio site, deployed to GitHub Pages at `https://canaanbotek.github.io/cv_page`.

- **Framework**: Astro (static output) + Tailwind CSS v4 via `@tailwindcss/vite` plugin. No `tailwind.config.*` — all theme overrides go in `src/styles/global.css` under `@theme {}`.
- **Fonts**: Geist Mono → `font-mono`, Inter → `font-sans`. Both loaded via Google Fonts in `Layout.astro`.
- **Base color**: `#0e0f11` (set on `<body>` and `<html>`).
- **Base URL**: site is served under `/cv_page`. Use `import.meta.env.BASE_URL` for any static asset path (PDFs, images). Hardcoded `/cv_page/` prefixes in `Layout.astro` (favicon) are intentional.
- **Routing**: single route — `src/pages/index.astro` composes all section components in order.

## Component conventions

Every section component follows this pattern:
```astro
<section id="anchor-name" class="relative px-6 md:px-12 py-24 md:py-32 border-t border-white/10 overflow-hidden">
  <BlackholeBackground />   <!-- animated canvas, absolute-positioned behind content -->
  <div class="relative z-10 max-w-[1200px] mx-auto">
    <div class="mb-16">
      <span class="font-mono text-xs uppercase tracking-[1.4px] text-white/30">— Category label</span>
      <h2 class="font-mono font-light text-3xl md:text-4xl text-white mt-3">Section title</h2>
    </div>
    <!-- section content -->
  </div>
</section>
```

**All content/data is declared inline** as TypeScript `const` arrays at the top of each `.astro` file — there is no CMS or external data source.

**Interactivity** uses vanilla JS `<script>` blocks inside each component. No framework reactivity. Expand/collapse UI (e.g. `ReasoningFlow`) uses `max-height` CSS transitions toggled with `.is-open` class via `mouseenter`/`mouseleave` (desktop) and `click` (mobile).

## Key component notes

- **`BlackholeBackground`**: shared canvas animation used by most sections. Renders 250 particles that drift randomly across the section and respawn at a random edge when off-screen. No orbital mechanics.
- **`Navbar`**: fixed header with anchor links. Contains a canvas-animated rocket logo (`#rocket-canvas`) that responds to scroll velocity and landing at page bottom. Components that trigger scroll-to-top should use `data-go-home` attribute to hook into the rocket animation.
- **`ReasoningFlow`**: 5-phase methodology section. Expand-on-hover reveals bullets + keywords. Does **not** use `BlackholeBackground`. The `note` field on a phase renders a small feedback-loop annotation.
- **`Projects`**: component exists but is commented out in `index.astro`.
- **`Contact`**: LinkedIn and GitHub URLs have TODO placeholders in the component data object.

## Deployment

GitHub Pages via the `base: '/cv_page'` setting in `astro.config.mjs`. Static build only — no server-side rendering.
