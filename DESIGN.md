# Design System: xAI-Inspired Dark Brutalist

## Stack & Tools
- Tailwind CSS (utility-first, arbitrary values allowed)
- Heroicons SVG set
- Fonts: GeistMono (display/buttons), universalSans (body/headings)

## Core Visual Identity (NO EXCEPTIONS)
- Background: `#1f2228` (never pure `#000000`)
- Text primary: `#ffffff`
- No gradients, no shadows, no box-shadows, no decorative illustrations
- Border radius: `0px` default (sharp), `4px` only for secondary containers
- All buttons: GeistMono uppercase + `1.4px` letter-spacing

## Color Palette (White Opacity Scale)

| Role | Value |
|------|-------|
| Text primary | `#ffffff` |
| Text secondary | `rgba(255, 255, 255, 0.7)` |
| Text muted | `rgba(255, 255, 255, 0.5)` |
| Text disabled | `rgba(255, 255, 255, 0.3)` |
| Border default | `rgba(255, 255, 255, 0.1)` |
| Border strong | `rgba(255, 255, 255, 0.2)` |
| Surface subtle | `rgba(255, 255, 255, 0.03)` |
| Surface hover | `rgba(255, 255, 255, 0.08)` |
| Button primary bg | `#ffffff` (text then becomes `#1f2228`) |
| Focus ring | `rgb(59, 130, 246) / 0.5` (Tailwind default) |

## Typography Rules

| Element | Font | Size | Weight | Line Ht | Transform | Spacing |
|---------|------|------|--------|---------|-----------|---------|
| Hero headline | GeistMono | 320px (20rem) | 300 | 1.5 | none | normal |
| Section heading | universalSans | 30px (1.88rem) | 400 | 1.2 | none | normal |
| Body text | universalSans | 16px (1rem) | 400 | 1.5 | none | normal |
| Button label | GeistMono | 14px (0.88rem) | 400 | 1.43 | uppercase | 1.4px |
| Label/caption | universalSans | 14px | 400 | 1.5 | none | normal |
| Meta/timestamp | universalSans | 12px | 400 | 1.5 | none | normal |

**Font fallbacks:**
- GeistMono → `ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco`
- universalSans → `universalSans Fallback`

## Component Templates

### Button Primary

```html
<button class="bg-white text-[#1f2228] px-6 py-3 rounded-none font-['GeistMono'] text-sm uppercase tracking-[1.4px] hover:bg-white/90">
  Button
</button>
```

### Button Ghost

```html
<button class="bg-transparent text-white px-6 py-3 rounded-none border border-white/20 font-['GeistMono'] text-sm uppercase tracking-[1.4px] hover:bg-white/5">
  Button
</button>
```

### Text Link

```html
<a href="#" class="text-white font-['universalSans'] text-base hover:text-white/50 no-underline">
  Link
</a>
```

### Card Container

```html
<div class="bg-white/5 border border-white/10 rounded-none p-6 hover:border-white/20">
  <!-- NO SHADOW -->
</div>
```

### Monospace Tag/Badge

```html
<span class="bg-transparent border border-white/20 px-2 py-1 rounded-none font-['GeistMono'] text-xs uppercase tracking-[1px] text-white">
  Badge
</span>
```

### Form Input

```html
<input 
  type="text"
  class="bg-transparent border border-white/20 rounded-none px-3 py-2 text-white font-['universalSans'] text-base placeholder:text-white/30 focus:ring-blue-500/50 focus:border-white/30"
  placeholder="Placeholder"
/>
```

## Layout & Spacing
- Base grid: 8px multiples
- Spacing scale: `4px, 8px, 24px, 48px` (sparse — use large jumps)
- Section padding: `48px-96px` (generous)
- Max content width: `1200px`
- Container: centered on large screens

## Interaction Rules (CRITICAL)
1. **Hover dims, never brightens** → Use `hover:text-white/50` or `hover:bg-white/5`, not brighter white
2. **No box-shadows** for elevation. Depth signals:
   - Border opacity changes (`0.1` → `0.2`)
   - Background opacity shifts (`0.03` → `0.08`)
   - Typographic scale contrast (320px vs 16px)
3. **Focus rings**: Use Tailwind's `focus:ring-blue-500/50` for accessibility

## Breakpoints
- Mobile: `<640px` (single column, scale hero headline aggressively down to ~48-64px)
- Tablet: `768-1024px` (two-column layouts begin)
- Desktop: `1024-1280px` (full layout)
- Large: `1280-1536px` (wider containers)

## Do's & Don'ts (Quick)

| Do | Don't |
|----|-------|
| `#1f2228` background | Pure `#000000` |
| GeistMono for display/buttons | Proportional fonts on buttons |
| Uppercase + 1.4px tracking on buttons | Bold weights (600-700) |
| Sharp corners (0px) | Large border-radius (8px+, pills) |
| Dim on hover (`/50` opacity) | Brighten on hover |
| White monochrome palette | Color accents, gradients, illustrations |

## Agent Instructions
When generating UI components:
1. Start with `#1f2228` background
2. No shadows, no gradients, no color accents
3. Buttons = GeistMono uppercase + 1.4px letter-spacing
4. Hover = dim to 50% opacity (not brighten)
5. Sharp corners (0px) unless explicitly told otherwise
