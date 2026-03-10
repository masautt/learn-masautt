# learn-masautt

A sample documentation site built with [Eleventy LibDoc](https://eleventy-libdoc.netlify.app/).

![Site Preview](https://github.com/user-attachments/assets/ee392132-2156-4888-8d51-204f3fab9517)

## Features

This site includes three key sections inspired by the eleventy-libdoc-website:

- **Blog Posts** — Dated articles with the `post` tag, accessible from the sidebar
- **Tags List** — Auto-generated tag pages to browse content by topic
- **Configuration** — Documentation for all `settings.json` options

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server (with live reload)
npx @11ty/eleventy --serve

# Build for production
npx @11ty/eleventy
```

## Hostinger Node.js Deploy

If your plan only supports a Node.js app, this project includes a small Express
server that serves the built static site from `_site/`.

```bash
# Install deps (Hostinger does this automatically)
npm install

# Build the static site
npm run build

# Start the server (Hostinger should run this)
npm start
```

## Project Structure

```
├── settings.json            # Site-wide settings (title, author, links, etc.)
├── hello-world.md           # Home page (permalink: index.html)
├── content/
│   ├── blog/                # Blog posts (use tag: post)
│   │   ├── getting-started.md
│   │   ├── understanding-tags.md
│   │   └── customizing-your-site.md
│   ├── configuration/       # Configuration docs section
│   │   ├── index.md
│   │   ├── site-title.md
│   │   ├── author.md
│   │   ├── blog.md
│   │   ├── custom-links.md
│   │   └── production-url.md
│   └── guides/              # How-to guides section
│       ├── index.md
│       ├── markdown.md
│       ├── navigation.md
│       └── deployment.md
├── assets/                  # Static files (CSS, images)
├── _data/                   # LibDoc system data files
├── _includes/               # LibDoc template includes
├── core/                    # LibDoc core layouts and assets
└── sandboxes/               # HTML sandbox files
```

## Configuration

Edit `settings.json` to customize the site:

```json
{
    "siteTitle": "Learn Masautt",
    "siteDescription": "A sample documentation site built with Eleventy LibDoc",
    "author": "masautt",
    "blogTitle": "Blog Posts",
    "blogDescription": "Latest articles and updates",
    "productionUrl": "https://masautt.github.io/learn-masautt"
}
```

See the [Configuration section](content/configuration/index.md) for full details.

## Adding Content

### New Documentation Page

```yaml
---
title: My Page
description: Short description for SEO
layout: libdoc_page.liquid
eleventyNavigation:
    key: My Page
    parent: Guides   # optional: nest under a section
    order: 10
tags:
    - my-tag
---
Your content here...
```

### New Blog Post

```yaml
---
title: My Post
description: Short description
layout: libdoc_page.liquid
permalink: "{{ libdocConfig.blogSlug }}/my-post/index.html"
tags:
    - post
    - my-tag
date: 2025-01-01
author: masautt
---
Post content here...
```

## Built With

- [Eleventy (11ty)](https://www.11ty.dev/) — Static site generator
- [Eleventy LibDoc](https://github.com/ita-design-system/eleventy-libdoc) — Documentation starter theme
