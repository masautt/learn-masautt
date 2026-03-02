---
title: Author Configuration
description: How to set a default author for your pages
layout: libdoc_page.liquid
permalink: content/configuration/author/index.html
eleventyNavigation:
    key: Author
    parent: Configuration
    order: 20
tags:
    - configuration
    - author
date: 1111-11-11
---

The `author` field sets a default author name displayed in the header of every page. It can be overridden on a per-page basis in each page's front matter.

## Global Setting (settings.json)

```json
{
    "author": "masautt"
}
```

## Per-Page Override (front matter)

```yaml
---
layout: libdoc_page.liquid
title: My Page
author: Jane Smith
---
```

## Disable Author Display

Set to `false` to hide the author on all pages by default:

```json
{
    "author": false
}
```
