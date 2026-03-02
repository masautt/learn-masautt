---
title: Blog Settings
description: How to configure the blog section title and description
layout: libdoc_page.liquid
permalink: content/configuration/blog/index.html
eleventyNavigation:
    key: Blog Settings
    parent: Configuration
    order: 30
tags:
    - configuration
    - blog
date: 1111-11-11
---

The blog section appears automatically in the primary navigation sidebar when at least one page has the `post` tag. Configure its appearance using these fields in `settings.json`.

## Settings

```json
{
    "blogTitle": "Blog Posts",
    "blogDescription": "Latest articles and updates"
}
```

| Field | Description |
|-------|-------------|
| `blogTitle` | Heading displayed in the blog list page |
| `blogDescription` | Short description shown below the blog title |

## Blog Slug

The `blogSlug` setting (advanced) controls the URL prefix for blog posts. By default it is `blog`.

```json
{
    "blogSlug": "blog"
}
```

Use `blogSlug` in your post permalinks:

```yaml
permalink: "{{ libdocConfig.blogSlug }}/my-post/index.html"
```

## Creating a Blog Post

Any page with the `post` tag becomes a blog post:

```yaml
---
layout: libdoc_page.liquid
permalink: "{{ libdocConfig.blogSlug }}/my-post/index.html"
title: My First Post
tags:
    - post
date: 2025-01-01
---
```
