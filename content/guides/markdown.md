---
title: Writing in Markdown
description: How to format your documentation content using Markdown
layout: libdoc_page.liquid
permalink: content/guides/markdown/index.html
eleventyNavigation:
    key: Writing in Markdown
    parent: Guides
    order: 10
tags:
    - guides
    - markdown
    - tutorial
date: 1111-11-11
---

LibDoc supports [CommonMark Markdown](https://commonmark.org/) with a few extras. Here is a quick reference.

## Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

Headings `h2` and `h3` are automatically added to the table of contents.

## Text Formatting

```markdown
**Bold text**
*Italic text*
`Inline code`
~~Strikethrough~~
```

## Lists

```markdown
* Unordered item
* Another item
    * Nested item

1. Ordered item
2. Second item
```

## Links

```markdown
[Link text](https://example.com)
[Internal link](/content/guides/navigation/)
```

## Code Blocks

Use triple backticks with a language identifier for syntax highlighting:

````markdown
```javascript
const greet = (name) => `Hello, ${name}!`;
```
````

## Tables

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

## Images

```markdown
![Alt text](https://example.com/image.png)
```

## Blockquotes

```markdown
> This is a blockquote.
```
