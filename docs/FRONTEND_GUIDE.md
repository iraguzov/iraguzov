# Frontend Development Guide — iraguzov.com

## Architecture
- **Next.js 16** with App Router (`src/app/`)
- **HeroUI** as the primary component library
- **Tailwind CSS v4** for utility-first styling
- **Framer Motion** for all animations

## Design System

### Colors (CSS Variables in `globals.css`)
| Variable           | Value      | Usage                     |
|--------------------|------------|---------------------------|
| `--background`     | `#0a0a0a`  | Page background           |
| `--foreground`     | `#ededed`  | Primary text              |
| `--accent`         | `#6366f1`  | Indigo accent (buttons)   |
| `--surface`        | `#141414`  | Card backgrounds          |
| `--surface-light`  | `#1e1e1e`  | Elevated surfaces         |
| `--border`         | `#262626`  | Borders                   |
| `--text-secondary` | `#a1a1aa`  | Secondary text            |

### Utility Classes
- `.glass` — Frosted glass card effect (backdrop-blur + subtle border)
- `.gradient-text` — Indigo → Purple → Pink gradient text
- `.glow` — Indigo box-shadow glow
- `.glow-text` — Indigo text-shadow
- `.grid-pattern` — Subtle grid background
- `.noise` — Noise texture overlay (add to parent with `relative`)

### Typography
- Font: **Inter** (loaded via `next/font/google`, includes Cyrillic subset)
- Headings: `gradient-text` class, `font-bold`
- Body: `text-[var(--text-secondary)]`

## Component Guidelines

### New Component Checklist
1. Create in the appropriate `src/components/<section>/` directory
2. Mark as `"use client"` if it uses hooks, event handlers, or Framer Motion
3. Use Framer Motion `motion` for scroll-triggered animations:
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6 }}
   >
   ```
4. Use HeroUI components where possible (Button, Chip, Input, etc.)
5. Apply glass morphism to cards: `className="glass rounded-xl p-6"`

### Animation Patterns
- **Staggered children:** Increment `delay` by `0.1` per item
- **Section entrance:** `y: 30` → `y: 0` with `whileInView`
- **Hover effects:** Use CSS `group` + `group-hover:` for coordinated hovers
- **Page load:** Use `initial` + `animate` (not `whileInView`) for above-fold

### Responsive Breakpoints
- Mobile first: default styles
- `md:` — Tablet (768px+)
- `lg:` — Desktop (1024px+)
- Max content width: `max-w-6xl mx-auto px-6`

## Content Updates
All text content lives in `src/data/siteData.ts`. Never hardcode text in components.

## After Changes
Always run `/verify-site` skill to visually check changes via Playwright.

## Key Visual Goals
- Site must look **technically impressive** — particle effects, glass morphism, smooth animations
- Every section should have a "wow factor" — animated skill bars, terminal animation, timeline
- Employer should immediately see: "this person understands modern frontend"
