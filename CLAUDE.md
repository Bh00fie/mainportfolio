# CLAUDE.md

Personal portfolio for Abhinandan Thour — <https://abhinandanthour.com>. Single-page React site, deployed on Netlify.

## Commands

```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build -> dist/
npm run preview  # serve the built output
```

Netlify: build command `npm run build`, publish directory `dist`. `public/_redirects` keeps the SPA fallback.

**Node:** the repo is developed on Node 18.18.2, which is past end-of-life. Vite is pinned to v5 because v6+ needs newer Node. Upgrading to Node 20 LTS is worth doing; several tools (including current `sharp`) already refuse to install on 18.

## Layout

```
index.html            Vite entry, at the repo root (not public/)
src/
  main.jsx            React root
  App.jsx             Section order + theme state
  styles.css          The entire stylesheet
  components/         Nav, Hero, About, Experience, Projects, Contact, Footer
  data/
    experience.js     Roles, education, skills
    projects.js       Project cards
  assets/             headshot.webp/.jpg, CV PDF
public/               favicon, icons, og-image, manifest, robots, sitemap, _redirects
```

Sections are anchors on one page (`#about`, `#experience`, `#projects`, `#contact`). There is no router — five sections do not justify one. If a writing section is ever added, revisit that.

## Conventions

- **Content lives in `src/data/`.** Adding a project or a role is a data edit, never a component edit.
- **No CSS framework.** Bootstrap and Font Awesome were removed; the two icons the site needs are inline SVG. Keep it that way — they cost ~300 KB on the critical path for very little.
- Theme is `data-theme` on `<html>`, set by an inline script in `index.html` *before first paint* to avoid a flash. React reads the applied value rather than setting it in an effect. Don't move this into a `useEffect`.
- All colours come from CSS custom properties defined in `styles.css`. Both light and dark must work; check both after any visual change.
- Animations respect `prefers-reduced-motion`. The three.js hero background does not run at all when reduced motion is requested.

## Motion

Four pieces, all reduced-motion safe:

1. **Hero background** (`HeroBackground.jsx`) — a three.js node graph, dynamically imported. Paints one frame immediately, then animates via rAF; pauses off-screen and in hidden tabs. Hidden below 44rem.
2. **Scroll reveal** (`useReveal`) — sections fade and rise once, then the observer disconnects.
3. **Contour dividers** (`Divider.jsx`) — topographic ridge lines that draw themselves in via `stroke-dashoffset`; a nod to the hiking/maps side of things and the section separator.
4. **Hover lifts** on buttons and project cards, plus a wiggle on the carbonara emoji.

**Testing gotcha:** Chrome suspends `IntersectionObserver` delivery entirely in background tabs, so nothing reveals and the hero canvas stays blank when the tab is not focused. This looks exactly like a broken observer but is not — verify with the tab in the foreground, or temporarily add `isRevealed` by hand.

## Positioning — read before editing copy

The site presents Abhinandan as a **Data Engineer**, not a Software Engineer or Full Stack Developer. It previously claimed all three in different places. The CV at `src/assets/Abhinandanthour.pdf` is the source of truth; keep the site consistent with it.

Current (confirmed by Abhinandan 2026-07-27, and **more current than the CV PDF** — the CV still describes the previous team): Data Engineer, Lloyds Banking Group, on the **Economic Crime Prevention Platform's Agentic AI team**, building AI agents for customer fraud journeys in Python + Google ADK on GCP, with a React/TypeScript front end on the Interstellar framework. Previously within Lloyds: Balance Sheet Management & Regulatory Reporting Lab (Source Extract Database team) — C#, SQL Server, SSIS/SSAS/SSRS, securitisation, FTP, LCR, asset encumbrance.

Before Lloyds: Data Engineer at Accenture (Mar–Sep 2025), NPI Manufacturing Engineer at Cummins (Aug 2022–Aug 2023), MEng Mech/Aero 2:1 Southampton (2019–2024), dissertation "Solid Lubrication in Space with Nitrogen-doped MoS₂".

**The CV PDF is out of date on the current role.** Where they disagree, `src/data/experience.js` wins. LinkedIn is the most current source of all but cannot be fetched programmatically (it returns HTTP 999 to any automated request), so career updates have to be pasted in by hand.

### Two hard content rules

1. **The Accenture client is under NDA.** It must never be named on the site. Describe the work and the stack; the approved public phrasing is "a large-scale fintech programme". An earlier version of the bio named the client outright — that was the error being corrected, do not reintroduce it.

2. **No personal financial information anywhere.** This includes alt text, commit messages and screenshots. The Personal Finance Dashboard project is described as *software only*: statement parsing, a categorisation rules engine, idempotent ingestion, hand-rolled SVG charts, local-first architecture. Never a figure, balance, income, savings rate, category total, rent, transaction, or the name of any bank he personally uses. **No screenshots of the running app** — a chart of real spending is exactly the leak this rule prevents. Use an architecture diagram or synthetic data if a visual is ever wanted. That repo is private; the card says so and links no code.
