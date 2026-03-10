---
title: Site Title & Description
description: How to configure your site's title and description
layout: libdoc_page.liquid
permalink: content/configuration/site-title/index.html
eleventyNavigation:
    key: Site Title & Description
    parent: Configuration
    order: 10
tags:
    - configuration
    - SEO
date: 1111-11-11
---

The `siteTitle` and `siteDescription` fields in `settings.json` control the site's primary identity and are used in the `<title>` tag and meta description of every page.

## Example

```json
{
    "siteTitle": "Learn Masautt",
    "siteDescription": "A sample documentation site built with Eleventy LibDoc"
}
```

## Where They Appear

| Field | Used In |
|-------|---------|
| `siteTitle` | Browser tab, `<title>` tag, navigation header |
| `siteDescription` | Meta description, Open Graph description |

## Tips

* Keep `siteTitle` short and memorable (under 60 characters)
* Write `siteDescription` as a single sentence (under 160 characters for SEO)
