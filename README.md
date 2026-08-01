# jaybell.me

Jay Bell's personal site and blog, built with [Eleventy](https://www.11ty.dev/), [Nx](https://nx.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Quick Start

```bash
pnpm install
pnpm dev
```

The site is available at `http://localhost:8080` with hot reloading.

## Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `pnpm dev`      | Start the dev server with hot reloading |
| `pnpm build`    | Build the production site into `_site/` |
| `pnpm css`      | Compile Tailwind CSS to `gen/`          |
| `pnpm nx build` | Build via Nx (runs `css` then eleventy) |
| `pnpm format`   | Format code with Prettier               |
| `pnpm deploy`   | Build and deploy with gh-pages          |

## How the CSS pipeline works

- Tailwind source lives in `styles/main.css` (CSS-first config, dark mode via `.dark` on `<html>`).
- `pnpm css` compiles it to `gen/main.css` — a gitignored intermediate output.
- Eleventy passthrough-copies `gen/` into `_site/css/`.
- `nx build` runs `css` before `build` via `dependsOn` in `nx.json`.

## Structure

```
├── index.njk           # Homepage
├── about/              # About page
├── blog/               # Blog index + posts (blog/*.md)
├── links/              # Links page
├── podcast/            # The Angular Plus Show page
├── _layouts/           # Nunjucks layouts (base, post)
├── _data/              # Global data (site.json, authors.json)
├── assets/             # Static assets (images, prism.css)
├── styles/             # Tailwind CSS source
└── eleventy.config.js  # Eleventy configuration
```

## Adding a blog post

Create `blog/YYYY-MM-DD-title.md` with frontmatter:

```yaml
---
layout: post.njk
title: My Post
description: A brief description
date: 2026-01-01
tags:
    - angular
---
```

Posts marked `draft: true` are excluded from listings, RSS, and sitemap.

## Deployment

Deployed to GitHub Pages via `.github/workflows/deploy.yml` — builds with Eleventy and publishes `_site/` on pushes to `master`.
