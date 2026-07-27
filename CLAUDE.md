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
- The accent is warm (burnt orange `#c2410c` light, flame `#fb923c` dark). Everything reads `--accent` at runtime, including the three.js graph and both pixel canvases — don't reintroduce a hardcoded accent hex. The generated assets in `public/` bake it in, so changing the token means regenerating them.
- Favicons are the **footer hiker sprite**, not the headshot: 16x16 grid, nearest-neighbour upscaled, shipped as `favicon.svg` plus a real multi-size `.ico` (16/32/48) and the PNG icons. If the sprite in `PixelTrail.jsx` changes, the icons need regenerating to match. The OG card keeps the photo — that's a social preview at a size where a face reads.
- Animations respect `prefers-reduced-motion`. The three.js hero background does not run at all when reduced motion is requested.

## Motion

Four pieces, all reduced-motion safe:

1. **Hero background** (`HeroBackground.jsx`) — a three.js node graph, dynamically imported. Paints one frame immediately, then animates via rAF; pauses off-screen and in hidden tabs. Hidden below 44rem.
2. **Scroll reveal** (`useReveal`) — sections fade and rise once, then the observer disconnects.
3. **Contour dividers** (`Divider.jsx`) — topographic ridge lines that draw themselves in via `stroke-dashoffset`; a nod to the hiking/maps side of things and the section separator.
4. **Pixel canvases** (`PixelOrbit.jsx` around the headshot, `PixelTrail.jsx` above the footer) — tiny backing stores upscaled by CSS `image-rendering: pixelated`, colours read from the theme custom properties.
5. **Hover lifts** on buttons and project cards, plus a wiggle on the carbonara emoji.

**PixelOrbit motion — do not undo this.** The orbit quantises motion in *space and time*: it precomputes the ring as an ordered list of adjacent pixels (`buildRing` — 210 pixels, every consecutive pair adjacent) and steps along it on a 90ms tick, rather than rounding a rotating angle every rAF frame. The original version did the latter and visibly shook: rounding a continuously-moving value onto a 64px grid at 60fps makes each dot snap erratically between whole pixels, and at 4x upscale every snap is a 4px jump. Never drive the orbit from a float angle rounded per frame.

**PixelTrail is deliberately different** — it scrolls on a float at full frame rate. It was changed to match the orbit's stepped timing and Abhinandan asked for it back as it was (2026-07-27). Leave it alone.

**Testing gotcha:** Chrome suspends `IntersectionObserver` delivery entirely in background tabs, so nothing reveals and the hero canvas stays blank when the tab is not focused. This looks exactly like a broken observer but is not — verify with the tab in the foreground, or temporarily add `isRevealed` by hand.

## Positioning — read before editing copy

The site presents Abhinandan as a **Data Engineer**, not a Software Engineer or Full Stack Developer. It previously claimed all three in different places. The CV at `src/assets/Abhinandanthour.pdf` is the source of truth; keep the site consistent with it.

Current (confirmed by Abhinandan 2026-07-27, and **more current than the CV PDF** — the CV still describes the previous team): Data Engineer, Lloyds Banking Group, on the **Economic Crime Prevention Platform's Agentic AI team**, building AI agents for customer fraud journeys in Python + Google ADK on GCP, with a React/TypeScript front end on the Interstellar framework. Previously within Lloyds: Balance Sheet Management & Regulatory Reporting Lab (Source Extract Database team) — C#, SQL Server, SSIS/SSAS/SSRS, securitisation, FTP, LCR, asset encumbrance.

Before Lloyds: Data Engineer at Accenture (Mar–Sep 2025), NPI Manufacturing Engineer at Cummins (Aug 2022–Aug 2023), MEng Mech/Aero 2:1 Southampton (2019–2024), dissertation "Solid Lubrication in Space with Nitrogen-doped MoS₂".

**The CV PDF is out of date on the current role.** Where they disagree, `src/data/experience.js` wins. LinkedIn is the most current source of all but cannot be fetched programmatically (it returns HTTP 999 to any automated request), so career updates have to be pasted in by hand.

### Two hard content rules

1. **The Accenture client is under NDA.** It must never be named on the site. Describe the work and the stack; the approved public phrasing is "a large-scale fintech programme". An earlier version of the bio named the client outright — that was the error being corrected, do not reintroduce it.

2. **No personal financial information anywhere.** This includes alt text, commit messages and screenshots. The Personal Finance Dashboard project is described as *software only*: statement parsing, a categorisation rules engine, idempotent ingestion, hand-rolled SVG charts, local-first architecture. Never a figure, balance, income, savings rate, category total, rent, transaction, or the name of any bank he personally uses. **No screenshots of the running app** — a chart of real spending is exactly the leak this rule prevents. Use an architecture diagram or synthetic data if a visual is ever wanted. That repo is private; the card says so and links no code.
