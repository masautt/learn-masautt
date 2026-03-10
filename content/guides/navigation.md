---
title: Navigation Setup
description: How to configure the sidebar navigation structure
layout: libdoc_page.liquid
permalink: content/guides/navigation/index.html
eleventyNavigation:
    key: Navigation Setup
    parent: Guides
    order: 20
tags:
    - guides
    - navigation
    - tutorial
date: 1111-11-11
---

The primary navigation sidebar is built automatically from the `eleventyNavigation` front matter on each page.

## Basic Page Entry

To add a page to the navigation, include the `eleventyNavigation` block:

```yaml
---
eleventyNavigation:
    key: My Page
    order: 10
---
```

| Property | Required | Description |
|----------|----------|-------------|
| `key` | Yes | Unique label shown in the navigation |
| `order` | No | Sort order (lower = higher position) |
| `parent` | No | Key of the parent page for nesting |
| `title` | No | Override the link label (defaults to `key`) |

## Creating Sections (Nested Navigation)

Use `parent` to nest pages under a section:

```yaml
# Section index page
---
eleventyNavigation:
    key: Configuration
    order: 10
---

# Child page
---
eleventyNavigation:
    key: Author
    parent: Configuration
    order: 20
---
```

This creates:
```
Configuration
└── Author
```

## Top-Level Pages vs. Sections

* Pages without `parent` appear at the top level
* Pages with `parent` are nested under that parent
* The parent page should also have an `eleventyNavigation` entry

## Blog & Tags

The **Blog Posts** section and **Tags** link appear automatically when:
* At least one page has the `post` tag (Blog Posts appears)
* `tagsListLink` is enabled in `settings.json` (Tags link appears)
