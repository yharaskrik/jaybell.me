# Taste

## Browser automation

- Prefers browser scraping/automation to be done via the Playwright MCP server (explicitly directs the agent to "use the playwright mcp") rather than curl/HTML parsing. Confidence: 0.8

- For scraping tasks, wants exhaustive collection rather than samples: scroll the entire list until a specified endpoint item is reached and capture every item with its full field set (title, name, date, description, link, platform, tags). Confidence: 0.6

- Wants scraped data checked into the repo under `_data/` and treated as the canonical source of truth for site content — not left in a gitignored scratch area (e.g. `gen/`). Confidence: 0.9

## Build pipeline

- Prefers generated/compiled assets (e.g., Tailwind CSS output) to be written to a gitignored intermediate directory, then copied into the final output by the static site generator (11ty passthrough copy) — compiled artifacts should not be committed to git. Confidence: 0.8

- Prefers orchestrating multi-step builds (e.g., CSS compile → 11ty build) via Nx target `dependsOn` wiring rather than chaining commands inside npm scripts. Confidence: 0.7

- Reuses existing site infrastructure/snippets rather than introducing new ones: when adding Google Analytics, reuses the GA4 measurement ID from the old Angular app already present in the repo (G-506R66WVXZ) and places the standard gtag snippet in the shared base layout `<head>`, then verifies it in rendered output and checks browser console for errors. Confidence: 0.6
