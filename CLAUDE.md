# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **AirTourer.github.io**, a Jekyll-based GitHub Pages site hosted at `https://airtourer.github.io/`. It serves as a technical resource for maintaining and supporting AirTourer aircraft, providing technical documents and 3D scans for viewing and downloading. This is a companion site to the main AirTourer website at `https://www.airtourer.asn.au/`.

## Build & Deployment

- **Jekyll** is the static site generator, run automatically by GitHub Pages on push to `main`
- No local build step is required — push to `main` triggers deployment
- To build locally: `bundle exec jekyll serve` (requires Ruby and Bundler)
- Plugins used: `jekyll-sitemap`, `jekyll-seo-tag` (both whitelisted on GitHub Pages)

## Architecture

### Content Model

There are two types of content, each managed differently:

1. **Markdown documents** (`_docs/` collection) — rendered as full HTML pages. Each `.md` file has YAML front matter with `title`, `description`, `category`, and `date`. These get their own URL at `/docs/:slug/` and appear in the sitemap automatically.

2. **Static files** (PDFs in `docs/`, scans in `scans/`) — listed via data files, not rendered. Metadata for these is maintained in `_data/documents.yml` and `_data/scans.yml` which map filenames to display titles, descriptions, and categories.

### Key Directories

- `_layouts/` — page templates: `default.html` (base shell), `doc.html` (markdown documents), `pdf-viewer.html` (in-browser PDF viewing), `page.html` (generic pages)
- `_includes/` — reusable partials: `nav.html`, `structured-data.html` (JSON-LD SEO markup)
- `_docs/` — Jekyll collection for markdown technical documents
- `_data/` — YAML data files: `documents.yml` (PDF registry), `scans.yml` (3D scan registry)
- `docs/` — static PDF files (not prefixed with underscore, so served directly)
- `scans/` — 3D scan image files
- `assets/css/style.css` — all site styles (no CSS framework)
- `assets/js/main.js` — minimal JS (mobile nav toggle only)

### Adding Content

**Markdown document:** Create a `.md` file in `_docs/` with front matter (`title`, `description`, `category`, `date`). It appears in listings and sitemap automatically.

**PDF:** Place the file in `docs/` and add an entry to `_data/documents.yml` with title, description, category, and path.

**3D scan:** Place files in `scans/` and add an entry to `_data/scans.yml` with title, description, path, and thumbnail path.

### SEO

- `jekyll-sitemap` auto-generates `/sitemap.xml`
- `jekyll-seo-tag` injects meta tags from front matter and `_config.yml`
- `_includes/structured-data.html` adds JSON-LD `WebSite` and `ItemList` schema
- `robots.txt` allows all crawlers and points to the sitemap
