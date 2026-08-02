# Taste

- Prefers a clean, editorial, minimalist homepage design: a big statement headline (serif with italic accent words), a short intro paragraph, a numbered "selected work / things I'm up to" list, and blog excerpts — citing https://muratkirazkaya.com/ as a homepage style he likes. Confidence: 0.8
- Likes the site's accent color (lavender) to be used liberally across UI elements — labels, numbers, dates, tags, hover states, focus rings — rather than reserved for just one or two spots. Confidence: 0.7
- Wants solid/primary buttons to use the accent (lavender) color in both light and dark modes rather than mode-adaptive black/white ink, with a distinct lavender shade on hover that reads as darker/deeper than the base. Confidence: 0.8
- Uses arrow glyphs with directional semantics in UI copy: a link/button that navigates should show a right arrow (→), not a down arrow (↓, which reads as scroll/dropdown). Confidence: 0.7
- Prefers consolidating small standalone pages into a section on an existing page (moved the Links page's content into a Links section on About) rather than maintaining separate single-purpose pages. Confidence: 0.5
- Prefers content amalgamated into single unified "activity stream" views rather than separate silos: e.g., a Blog tab merging first-party repo posts with external posts (date-sorted, labeled by source site), and a Podcasts tab merging all episodes labeled by platform (Spotify/YouTube/etc.). Confidence: 0.8

- Prefers a single source-of-truth data file driving site content pages (e.g., the scraped Advocu/GDE activity feed) with filters deriving per-page lists from it — and removing obsolete hand-maintained data files once the new source replaces them. Explicitly wants scraped/derived content merged straight into the canonical file with no reported/unreported status distinction (asked for "the unreported stuff in with all the other episodes... they should not be distinguished", separate status file removed). Confidence: 0.85

- Wants the canonical activities data file sorted by publish date (newest first) rather than by Advocu's submitted-date order — ordering key is when content was published, not when it was added (asked to "sort them all by published date"). Confidence: 0.7
- Communicates design direction by pointing at concrete example sites/URLs ("Example of a homepage I like: ...") rather than describing the aesthetic abstractly. Confidence: 0.6

- Reports visual/styling issues by attaching a screenshot with a terse note (e.g., "the styling is off on the blog page", "these icons need some padding on the right hand side", "there is a weird border around it", "don't force the logos to be circles") rather than describing the layout problem in words — expect to inspect the image to diagnose. Confidence: 0.9

- Scopes technical tasks by pasting the relevant official documentation link and asking a focused yes/no question (e.g., a GitHub Pages custom-domain verification doc + "do i need to set something?") — expects the agent to consult the linked docs and answer with a clear necessary-vs-optional breakdown rather than following the docs blindly. Confidence: 0.5

- Attends to fine-grained UI spacing/padding polish — e.g., interactive elements (icons/arrows in list rows) need breathing room so they don't hug edges, especially where a hover highlight makes the cramping obvious. Confidence: 0.6

- Wants no em dashes (—) anywhere in hand-written site copy — HTML template copy (index/about/blog/podcast templates) and blog markdown posts; em dashes should be replaced with plain hyphens. Confidence: 0.9

- Scopes copy/punctuation cleanups to hand-written templates and blog posts only, explicitly excluding data-driven content (e.g., episode titles/descriptions in the advocu activities JSON) — data files stay untouched even if they contain the same characters. Confidence: 0.8

- Wants a real face/identity on his personal site: a photo of himself in the hero and on the About page, not an anonymous avatar-less design. Confidence: 0.6

- Prefers "futuristic"-tagged Google Fonts for the site's display and mono type (Audiowide for headings, Chakra Petch for mono labels) over the reference site's borrowed stack (Geist / Instrument Serif / DM Mono) — deliberately killing the biggest "clone tell" flagged in the design review. Confidence: 0.6

- Wants the design-inspiration source explicitly credited (footer: "Design inspired by Murat Kirazkaya") rather than presenting a borrowed design as original. Confidence: 0.6

- Wants a complete, properly-engineered dark mode: class-based tokens, localStorage persistence, and a no-flash inline bootstrap so the wrong theme never flashes before first paint. Confidence: 0.7

- Wants the site to be distinctly his own rather than a recolor of the reference site it was modeled on — accepts and prioritizes differentiation work (own photo, own fonts, credit) after a review flags clone tells. Confidence: 0.6

- Values accessibility and honest interaction on the site: WCAG AA text contrast, custom `:focus-visible` rings in the accent color, `prefers-reduced-motion` guards, and truthful link affordances (no fake row hovers, adequate hit areas). Confidence: 0.5

- Prefers a cohesive motion vocabulary that animates only `transform`/`opacity` (no layout-affecting properties, no scroll-jacking) with one consistent easing (expo-out) and choreographed staggers — hero entrance at 0/70/140/210ms, row cascades at 40ms — plus quick micro-interactions (active scale, hover arrow nudge). Confidence: 0.6

- Prefers meaning-preserving `prefers-reduced-motion` variants — fade in place instead of spatial movement, keep the meaning, drop the motion — over a blanket global kill-all guard; reduced-motion handling should be per-element, not `* { animation-duration: 0.01ms !important }`. Confidence: 0.6

- Prefers progressive-enhancement gating for JS-dependent behavior: scroll-reveal hiding rules only apply under a `.js` class the bootstrap adds, so no-JS users see everything; IntersectionObserver reveals elements as they enter the viewport. Confidence: 0.6

- Keeps motion sized to the site's calm editorial register and deliberately refuses to add motion for surfaces that don't exist (menus/dialogs/loaders) — calling such invented animation "theater". Confidence: 0.6

- Delegates personal-branding/bio copy end-to-end: asks the agent to research him online (articles, bios, references about him) and write the bio grounded in what it finds, then update the site page directly rather than drafting for review first. When the agent's research comes up thin, he supplements it himself by pasting specific source URLs and attachments, expecting them fetched and folded in. Confidence: 0.7

- Edits files directly in the working tree while the agent is mid-task (e.g., tweaked the About bio wording himself between agent turns) — expects the agent to notice the file changed, re-read it before editing, and merge new content around his manual edits rather than overwrite them. Confidence: 0.65

- References existing on-site components/patterns as the spec for new work ("add the icon leaf like we do with the angular plus show icon") — expects new elements to reuse the same styling/structure as the cited analog rather than a fresh treatment. Confidence: 0.6

- Supplies binary assets (SVGs, images) by dropping them directly into the repo's assets directory for the agent to discover and wire in, rather than pasting file contents in chat — may do this silently mid-task instead of answering a clarifying question in text. Confidence: 0.7
- Wants theme-critical SVGs inlined in the template (via a Nunjucks macro, `fill="currentColor"`) rather than loaded through `<img>` tags — `<img>` content is opaque to CSS, so it can't be themed for dark mode; inlining lets the icon inherit its label's `text-ink2` color and adapt to both themes. Once inlined, the now-unused `assets/images/icons/*.svg` files were removed from the repo. Confidence: 0.75
- Wants brand/tool icons (TypeScript, Angular, Nest, Express, Nx, GraphQL, NgRx, WebStorm, etc.) shown inline next to the tool names in the About page stack section — prefers official icon sources (vendor press kits, official repos) over third-party icon sets, and expects the paragraph markup restructured to accommodate them. Confidence: 0.75
- Prefers self-hosting third-party assets (tool icon SVGs downloaded into `assets/images/icons/`) over hotlinking CDN URLs — hotlinked resources break offline and go stale; follows the site's existing local-assets pattern. Confidence: 0.55
- Prefers tool/brand icons as monochrome `currentColor`-compatible SVGs rather than brand-colored logos, so they automatically adapt to the site's light/dark theming — this outweighs brand accuracy, e.g. an official JetBrains WebStorm wordmark was dropped in favor of the monochrome Simple Icons mark so the icon set stays visually consistent. Icons must stay legible in dark mode: icons whose paths have no `fill` render black-on-dark and were explicitly flagged as broken ("those black svg icons don't work well in dark mode"), and the accepted fix was inlining them with `fill="currentColor"` so they inherit the label color. Confidence: 0.7

- Wants interactive/motion patterns applied consistently site-wide: once a hover animation exists for one listing type (e.g., home-page blog cards), the same treatment (background/border transition + arrow nudge) should be reused on the analogous rows on every other page (blog, podcast, home sections) — "Add the same animation to the Podcast and Blog page rows as in #3" — rather than inventing per-page variations. Confidence: 0.7

- Treats arrow glyphs (→/↦) as a clickability signal: non-clickable pills/elements must not carry arrows — asked to "remove any arrows from pills that are not clickable across the site", keeping arrows only on actual links. Confidence: 0.75

- Expects responsive spacing tuned per breakpoint rather than one size for all: over-generous desktop paddings (e.g., `py-[72px]`) should be reduced on mobile (e.g., `py-10 md:py-[72px]`) so sections don't leave awkward gaps on small screens. Confidence: 0.6
- Pitfalls with Tailwind shorthand-vs-responsive utilities: `py-10 md:py-[72px]` overrides a bottom padding set elsewhere at the `md` breakpoint — when top and bottom need different responsive treatment, split into explicit `pt-*`/`pb-*` utilities rather than combining `py-*` with a second responsive `py-*`. Confidence: 0.6
  s with Tailwind shorthand-vs-responsive utilities: `py-10 md:py-[72px]` overrides a bottom padding set elsewhere at the `md` breakpoint — when top and bottom need different responsive treatment, split into explicit `pt-*`/`pb-*` utilities rather than combining `py-*` with a second responsive `py-*`. Confidence: 0.6
