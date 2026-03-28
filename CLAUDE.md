# iraguzov.com — QA Automation Engineer Portfolio

## Project Overview
Modern, visually impressive portfolio website for Ilya Raguzov — Senior QA Automation Engineer.
Domain: **iraguzov.com**

## Tech Stack
- **Framework:** Next.js 16 (App Router, static export)
- **UI Library:** HeroUI (formerly NextUI)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Theme:** Light theme (redesigned with 21st.dev components)
- **Analytics:** Yandex Metrika (counter ID: 108282700)

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
- `npm run build` — Production build (static export to `out/`)
- `npm run lint` — ESLint

## Hosting & Deployment
- **Hosting:** Yandex Object Storage (S3-compatible), bucket `iraguzov.com`
- **Domain:** iraguzov.com + www.iraguzov.com
- **SSL:** Yandex Certificate Manager (managed certificate, auto-renew)
- **Why not Vercel:** Site needs to be accessible from Russia without restrictions
- **Deploy command:**
  ```bash
  npm run build
  aws --endpoint-url=https://storage.yandexcloud.net s3 sync out/ s3://iraguzov.com/ --delete
  ```
- **AWS CLI config:** `~/.aws/credentials` with Yandex service account `sa-creator` static access key
- **Yandex Cloud:** organization `cloud-ilya-raguzov`, default folder

## Design Principles
- Light theme (redesigned from dark)
- Smooth scroll-triggered animations via Framer Motion
- Mobile-first responsive design
- 21st.dev components for modern UI patterns

## MCP Servers
- **Playwright MCP** — For automated visual verification after code changes
- **21st.dev MCP** — For fetching modern UI component styles

## Development Workflow
1. Make code changes
2. Run `npm run dev` to start the dev server
3. Use Playwright MCP to open the site and verify changes visually
4. Fix any issues found during verification
5. Deploy: `npm run build && aws --endpoint-url=https://storage.yandexcloud.net s3 sync out/ s3://iraguzov.com/ --delete`
