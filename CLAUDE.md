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

Each document is a single entity with multiple format representations, managed through the `_docs/` Jekyll collection.

A document entry in `_docs/` is a `.md` file with YAML front matter containing:
- `title`, `description`, `category`, `date` — standard metadata
- `original_pdf` — path to the original scanned PDF (e.g. `/documents/{slug}/original.pdf`)
- `clean_pdf` — path to a clean regenerated PDF (when available)
- `conversion_status` — `complete` or `pending` (whether markdown conversion is done)
- Optional: `aircraft`, `document_id`, `source`

The markdown body is the web-readable version of the document. For documents pending conversion, the body contains a placeholder.

### Key Directories

- `_docs/` — Jekyll collection: one `.md` file per document (single source of truth for the catalogue)
- `documents/` — static assets: one subdirectory per document containing `original.pdf`, `clean.pdf`, and `images/`
- `_layouts/` — page templates: `default.html` (base shell), `doc.html` (documents with format bar), `pdf-viewer.html` (in-browser PDF viewing), `page.html` (generic pages)
- `_includes/` — reusable partials: `nav.html`, `structured-data.html` (JSON-LD SEO markup)
- `_data/` — YAML data files: `scans.yml` (3D scan registry)
- `originals/` — raw archive of source PDFs (excluded from Jekyll build)
- `pictures/` — photo archive (excluded from Jekyll build)
- `assets/css/style.css` — all site styles (no CSS framework)
- `assets/js/main.js` — JS for mobile nav toggle and catalogue category filter

### Adding Content

**New document (with PDF):**
1. Create a subdirectory in `documents/` using a slug name (e.g. `documents/my-document/`)
2. Place the original PDF as `documents/my-document/original.pdf`
3. Create `_docs/my-document.md` with front matter including `original_pdf: /documents/my-document/original.pdf` and `conversion_status: pending`
4. Once converted to markdown, replace the placeholder body and set `conversion_status: complete`
5. If a clean PDF is generated, place it as `documents/my-document/clean.pdf` and add `clean_pdf` to front matter

**Document categories:** `maintenance`, `flight-manual`, `airworthiness`, `parts`, `service-bulletin`, `certification`, `reference`

**3D scan:** Place files in `scans/` and add an entry to `_data/scans.yml` with title, description, path, and thumbnail path.

### URL Structure

- `/docs/{slug}/` — web-readable document page (rendered markdown)
- `/documents/{slug}/original.pdf` — original scanned PDF (direct download)
- `/documents/{slug}/clean.pdf` — clean regenerated PDF (direct download)

### SEO

- `jekyll-sitemap` auto-generates `/sitemap.xml`
- `jekyll-seo-tag` injects meta tags from front matter and `_config.yml`
- `_includes/structured-data.html` adds JSON-LD `WebSite` and `ItemList` schema
- `robots.txt` allows all crawlers and points to the sitemap
