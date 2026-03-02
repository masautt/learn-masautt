---
title: Getting Started with Eleventy LibDoc
description: An introduction to building documentation sites with Eleventy LibDoc
layout: libdoc_page.liquid
permalink: "{{ libdocConfig.blogSlug }}/getting-started/index.html"
tags:
    - post
    - getting-started
    - tutorial
date: 2025-01-15
author: masautt
---

Welcome to the first blog post on this site! This post covers the basics of getting started with Eleventy LibDoc.

## What is Eleventy LibDoc?

[Eleventy LibDoc](https://eleventy-libdoc.netlify.app) is a starter project built on top of [Eleventy (11ty)](https://www.11ty.dev/), a simple and powerful static site generator. LibDoc adds documentation-specific features like:

* **Sidebar navigation** with collapsible sections
* **Tags** to categorize and cross-link content
* **Blog feed** with Atom/RSS support
* **Search** (fuzzy and exact match)
* **Table of contents** generated automatically
* **Syntax highlighting** for code blocks
* **Dark mode** support

## Installation

```bash
# Clone the starter template
npx degit ita-design-system/eleventy-libdoc my-site
cd my-site

# Install dependencies
npm install

# Start the dev server
npx @11ty/eleventy --serve
```

## Your First Page

Create any `.md` file with this front matter:

```yaml
---
title: My First Page
description: A short description for SEO
layout: libdoc_page.liquid
eleventyNavigation:
    key: My First Page
    order: 10
tags:
    - my-tag
---
```

The `eleventyNavigation` block adds the page to the sidebar. The `key` must be unique.

## Next Steps

* Edit `settings.json` to set your site title, author, and production URL
* Create blog posts by adding the `post` tag to any page
* Organize pages into sections using the `parent` key in `eleventyNavigation`
