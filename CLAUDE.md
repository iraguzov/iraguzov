# iraguzov.com — QA Automation Engineer Portfolio

## Project Overview
Modern, visually impressive portfolio website for Ilya Raguzov — Senior QA Automation Engineer.
Domain: **iraguzov.com**

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI Library:** HeroUI (formerly NextUI)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Theme:** Dark-only, indigo/purple accent palette

## Project Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with providers
│   ├── page.tsx      # Home page assembling all sections
│   └── providers.tsx # HeroUI provider
├── components/
│   ├── hero/         # Hero section + terminal animation
│   ├── about/        # About me section
│   ├── skills/       # Skills & tools with progress bars
│   ├── experience/   # Work experience timeline
│   ├── projects/     # Featured projects grid
│   ├── contact/      # Contact form + info
│   ├── layout/       # Header + Footer
│   └── ui/           # Reusable UI (ParticleField, SectionHeading)
├── data/
│   └── siteData.ts   # ALL site content in one file — edit here
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── styles/
    └── globals.css   # Global styles, CSS variables, utility classes
```

## Content Management
All text content is centralized in `src/data/siteData.ts`. When updating content (experience, skills, projects), edit ONLY this file.

## Commands
- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint

## Design Principles
- Dark theme only, no light mode
- Glass morphism (`glass` class) for cards
- Particle field background animation
- Gradient text (`gradient-text` class) for headings
- Smooth scroll-triggered animations via Framer Motion
- Grid pattern backgrounds (`grid-pattern` class)
- Mobile-first responsive design

## MCP Servers
- **Playwright MCP** — For automated visual verification after code changes
- **21st.dev MCP** — For fetching modern UI component styles

## Development Workflow
1. Make code changes
2. Run `npm run dev` to start the dev server
3. Use Playwright MCP to open the site and verify changes visually
4. Fix any issues found during verification
