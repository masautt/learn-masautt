---
title: Deploying to GitHub Pages
description: How to publish your LibDoc site to GitHub Pages
layout: libdoc_page.liquid
permalink: content/guides/deployment/index.html
eleventyNavigation:
    key: Deploying to GitHub Pages
    parent: Guides
    order: 30
tags:
    - guides
    - deployment
    - tutorial
date: 1111-11-11
---

Deploying your LibDoc site to GitHub Pages is straightforward using GitHub Actions.

## Step 1: Set productionUrl

Update `settings.json` with your GitHub Pages URL:

```json
{
    "productionUrl": "https://your-username.github.io/your-repo"
}
```

## Step 2: Create a GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
    push:
        branches: [main]

jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: '20'
            - run: npm install
            - run: npx @11ty/eleventy
            - uses: peaceiris/actions-gh-pages@v4
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./_site
```

## Step 3: Enable GitHub Pages

1. Go to your repository **Settings → Pages**
2. Set Source to **GitHub Actions**
3. Push to `main` and the workflow will deploy automatically

## Step 4: Verify

Visit `https://your-username.github.io/your-repo` after the first successful workflow run.

{% alert 'If your site is deployed to a subdirectory, configure htmlBasePathPrefix in settings.json.', 'info', 'Subdirectory Deployment' %}
