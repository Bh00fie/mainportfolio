# abhinandanthour.com

Personal site for Abhinandan Thour — data engineer, Leeds. Single-page React app built with Vite, deployed on Netlify.

## Running it

```bash
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
npm run preview  # serve the built output
```

Requires Node 24 (see `.nvmrc`).

## Structure

| Path                | What it holds                                              |
| ------------------- | ---------------------------------------------------------- |
| `index.html`        | Vite entry point, metadata, and the pre-paint theme script  |
| `src/components/`   | Nav, Hero, About, Experience, Projects, Contact, Footer     |
| `src/data/`         | Roles, education, skills and project cards                  |
| `src/styles.css`    | The whole stylesheet                                        |
| `src/hooks/`        | Scroll-reveal hook                                          |
| `public/`           | Icons, OG image, manifest, robots, sitemap, Netlify redirects |

Content lives in `src/data/` — adding a project or a job means editing data, not components.

## Notes

- No CSS framework. The two icons the site needs are inline SVG.
- The hero background is a three.js node graph, dynamically imported into its own chunk. It does not run under `prefers-reduced-motion`, and pauses when off-screen or when the tab is hidden.
- Theme is set on `<html>` by an inline script before first paint to avoid a flash of the wrong colours.
- There is no router: it's one page with anchors.

See `CLAUDE.md` for content rules that apply when editing copy.
