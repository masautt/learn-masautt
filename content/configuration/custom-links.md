---
title: Custom Links
description: How to add custom links to the navigation header
layout: libdoc_page.liquid
permalink: content/configuration/custom-links/index.html
eleventyNavigation:
    key: Custom Links
    parent: Configuration
    order: 40
tags:
    - configuration
    - navigation
date: 1111-11-11
---

Custom links appear at the top of the primary navigation sidebar and are visible on every page. Use them for important external resources or feeds.

## Configuration

```json
{
    "customLinks": [
        {
            "url": "/feed.xml",
            "text": "Atom feed"
        },
        {
            "url": "https://github.com/masautt/learn-masautt",
            "text": "GitHub"
        }
    ]
}
```

## Properties

| Property | Description |
|----------|-------------|
| `url` | Absolute or relative URL |
| `text` | Link label displayed in the navigation |

## Tips

* Use `/feed.xml` to link your Atom feed so visitors can subscribe
* External links automatically open without any extra configuration
