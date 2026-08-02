# Taste

## Browser automation

- Prefers browser scraping/automation to be done via the Playwright MCP server (explicitly directs the agent to "use the playwright mcp" / "use playwrigth") rather than curl/HTML parsing. Confidence: 0.9

- For scraping tasks, wants exhaustive collection rather than samples: scroll the entire list until a specified endpoint item is reached and capture every item with its full field set (title, name, date, description, link, platform, tags). Confidence: 0.6

- Wants scraped data checked into the repo under `_data/` and treated as the canonical source of truth for site content — not left in a gitignored scratch area (e.g. `gen/`). Confidence: 0.9

- Verifies UI/behavior changes end-to-end in a real browser rather than trusting the diff: build → dev server → Playwright checks of rendered state (computed styles, IntersectionObserver state, emulated `prefers-reduced-motion`, theme toggle transitions) → production build → cleanup (temp screenshots deleted, dev server stopped). Confidence: 0.7

## Git workflow

- Wraps up work sessions by asking to "format, commit and push everything" — expects the agent to run the repo's formatter (Prettier via `pnpm format`) before committing, then commit all pending changes and push to the remote. Confidence: 0.8

- Keeps repos clean of generated/scratch artifacts: deletes stray testing screenshots rather than committing them, and adds gitignore rules (e.g., `/*.png`) so the same artifact type can't get committed again. Confidence: 0.6

## Build pipeline

- Prefers generated/compiled assets (e.g., Tailwind CSS output) to be written to a gitignored intermediate directory, then copied into the final output by the static site generator (11ty passthrough copy) — compiled artifacts should not be committed to git. Confidence: 0.8

- Prefers orchestrating multi-step builds (e.g., CSS compile → 11ty build) via Nx target `dependsOn` wiring rather than chaining commands inside npm scripts. Confidence: 0.7

- In this repo, changing a Tailwind class in a template requires regenerating the compiled CSS (`pnpm nx run jaybellme:css`) AND triggering an Eleventy rebuild (e.g., touch a watched template) — the dev server serves a stale passthrough copy of `gen/main.css` until a rebuild happens. Confidence: 0.85

- Diagnoses an "invisible"/missing styled element by first checking whether the compiled CSS is stale before assuming a markup bug — an invisible-but-clickable "About me" button turned out to be Tailwind utilities (`bg-accent`) not regenerated into `gen/main.css`, confirmed via computed styles and served CSS before editing code. Confidence: 0.6

- Reuses existing site infrastructure/snippets rather than introducing new ones: when adding Google Analytics, reuses the GA4 measurement ID from the old Angular app already present in the repo (G-506R66WVXZ) and places the standard gtag snippet in the shared base layout `<head>`, then verifies it in rendered output and checks browser console for errors. Confidence: 0.6
