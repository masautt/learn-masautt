---
title: Configuration
description: Overview of site configuration options in settings.json
layout: libdoc_page.liquid
permalink: content/configuration/index.html
eleventyNavigation:
    key: Configuration
    order: 10
tags:
    - configuration
    - getting-started
date: 1111-11-11
---

All site-wide settings are defined in `settings.json` at the root of the project.

```json
{
    "siteTitle": "Learn Masautt",
    "siteDescription": "A sample documentation site",
    "author": "masautt",
    "blogTitle": "Blog Posts",
    "blogDescription": "Latest articles and updates",
    "productionUrl": "https://masautt.github.io/learn-masautt",
    "customLinks": [...],
    "editThisPageRootUrl": "https://github.com/masautt/learn-masautt/blob/main"
}
```

## Configuration Sections

* [Site Title & Description](/content/configuration/site-title/) — The main SEO settings
* [Author](/content/configuration/author/) — Default author displayed on each page
* [Blog Settings](/content/configuration/blog/) — Configure the blog section
* [Custom Links](/content/configuration/custom-links/) — Navigation header links
* [Production URL](/content/configuration/production-url/) — Required for Atom feed and SEO
