---
title: Customizing Your LibDoc Site
description: Tips and tricks for customizing the look and feel of your LibDoc site
layout: libdoc_page.liquid
permalink: "{{ libdocConfig.blogSlug }}/customizing-your-site/index.html"
tags:
    - post
    - configuration
    - tutorial
date: 2025-03-01
author: masautt
---

Once you have a working LibDoc site, here are the most impactful customizations you can make.

## 1. Update settings.json

The first thing to do is update `settings.json` with your actual project details:

```json
{
    "siteTitle": "My Project",
    "siteDescription": "What my project does",
    "author": "Your Name",
    "productionUrl": "https://your-site.com"
}
```

## 2. Add a Favicon

Place a `favicon.png` at the root of the project. LibDoc will use it automatically. To use a different path, set `faviconUrl` in `settings.json`:

```json
{
    "faviconUrl": "/assets/my-favicon.png"
}
```

## 3. Custom CSS

Put custom CSS in the `assets/` directory and link it in your pages using front matter:

```yaml
---
customCssUrl: /assets/my-custom.css
---
```

## 4. Edit This Page Link

Set `editThisPageRootUrl` to enable an "Edit this page" button on every page that links to your repository:

```json
{
    "editThisPageRootUrl": "https://github.com/your-username/your-repo/blob/main"
}
```

## 5. Navigation Order

Control the order of items in the sidebar by setting `order` in each page's `eleventyNavigation` block:

```yaml
eleventyNavigation:
    key: My Section
    order: 10
```

Lower numbers appear higher in the navigation. The home page (`permalink: index.html`) always appears first.
