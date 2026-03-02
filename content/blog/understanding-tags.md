---
title: Understanding Tags in LibDoc
description: How to use tags to organize and cross-link your documentation
layout: libdoc_page.liquid
permalink: "{{ libdocConfig.blogSlug }}/understanding-tags/index.html"
tags:
    - post
    - tags
    - tutorial
date: 2025-02-01
author: masautt
---

Tags are one of the most powerful features in Eleventy LibDoc. They let you categorize content and build cross-linked topic pages automatically.

## How Tags Work

Any page can have one or more tags defined in its front matter:

```yaml
tags:
    - javascript
    - tutorial
    - beginner
```

LibDoc automatically:

1. Creates a **tag page** at `/tags/<tag-name>/` listing all pages with that tag
2. Lists all tags at the **Tags List** page (`/tags/`)
3. Shows the page's tags in its header

## The Tags List Page

The `/tags/` URL shows every tag used across your site with a count of how many pages use it. This is a great way for visitors to browse your content by topic.

## The `post` Tag (Special)

The `post` tag is special — any page with this tag appears in the **Blog Posts** sidebar section and in the Atom feed. You can combine `post` with other tags:

```yaml
tags:
    - post
    - javascript
    - tutorial
```

## Tips for Tagging

* Use lowercase, hyphenated tags (e.g. `open-graph-image`, `getting-started`)
* Be consistent — decide whether to use singular or plural forms
* A page can have as many tags as needed
* Tags are case-sensitive, so `JavaScript` and `javascript` are different tags
