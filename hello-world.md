---
title: Learn Masautt
description: A sample documentation site built with Eleventy LibDoc
layout: libdoc_page.liquid
permalink: index.html
tags:
    - getting-started
---
{% alert 'Welcome to the Learn Masautt documentation site!', 'success', 'Welcome!' %}

## Getting Started

This is a sample site built with [Eleventy LibDoc](https://eleventy-libdoc.netlify.app). It includes:

* 📝 **Blog Posts** — A feed of dated articles available in the navigation sidebar
* 🏷️ **Tags List** — Browse all content organized by tags
* ⚙️ **Configuration** — Documentation pages organized into sections

## How to Run

1. Install dependencies: `npm install`
2. Start the dev server: `npx @11ty/eleventy --serve`
3. Build for production: `npx @11ty/eleventy`

## Site Structure

| Directory | Purpose |
|-----------|---------|
| `content/` | Your documentation pages |
| `content/blog/` | Blog post files |
| `content/configuration/` | Configuration section pages |
| `assets/` | Static files (CSS, images, etc.) |
| `settings.json` | Site-wide settings |

## Quick Links

* [Configuration](/content/configuration/) — Site settings overview
* [Blog Posts](/blog/) — All blog entries
* [Tags List](/tags/) — Browse pages by tag
