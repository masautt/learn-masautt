---
title: Production URL
description: How to set the production URL for SEO and Atom feed
layout: libdoc_page.liquid
permalink: content/configuration/production-url/index.html
eleventyNavigation:
    key: Production URL
    parent: Configuration
    order: 50
tags:
    - configuration
    - SEO
date: 1111-11-11
---

The `productionUrl` is required for the Atom feed (`/feed.xml`) and for absolute Open Graph image URLs. Set it to the full root URL of your deployed site.

## Example

```json
{
    "productionUrl": "https://masautt.github.io/learn-masautt"
}
```

{% alert 'Always include the protocol (https://) and omit the trailing slash.', 'warning', 'Important' %}

## Where It Is Used

* **Atom feed** — Each feed item uses this as the base URL
* **Open Graph** — Social share images need an absolute URL
* **Canonical links** — Helps search engines identify the primary URL
