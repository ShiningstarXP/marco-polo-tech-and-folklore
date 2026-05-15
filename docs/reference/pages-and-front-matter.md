---
layout: default
title: Pages & Front Matter
date: 2026-02-14
---

{% include nav/scrollspy-toc.html %}

# Pages & Front Matter

Every page on your site is a plain text file with an `.md` extension. The file has two parts: a **front matter** block at the top (metadata about the page) and the **content** below it (what people actually read). Understanding this structure gives you control over how every page looks, how it appears in navigation, and how it connects to the rest of your site.

---

## The front matter block

Front matter is the section between two lines of triple dashes at the very top of a file. It uses YAML syntax---simple `key: value` pairs that tell Jekyll how to handle the page.

```yaml
---
title: My Page Title
layout: default
date: 2026-01-15
---
```

Without this block, Jekyll won't recognize the file as a page. The three dashes on their own lines are required.

---

## Front matter fields

### Essential fields

Every page should have these:

| Field | Example | What it does |
|-------|---------|--------------|
| `title` | `title: River Towns` | Page title, used in the browser tab and navigation cards |
| `layout` | `layout: default` | Controls the page template (see [Layouts](#layouts) below) |

### Common fields

| Field | Example | What it does |
|-------|---------|--------------|
| `date` | `date: 2026-01-15` | Publication date, used for sorting |
| `author` | `author: Jane Smith` | Displayed on the page and in navigation cards |
| `summary` | `summary: A brief overview...` | Short description used in cards and map popups |

### Header image fields

Add a full-width header image to any page. The `header-tier` controls visual weight; `header-filter` transforms how the image appears.

| Field | Example | What it does |
|-------|---------|--------------|
| `header-image` | `header-image: /assets/images/canyon.jpg` | Path to header image (required to show a header) |
| `header-tier` | `header-tier: section` | `hero` (full height), `section` (60vh), or `banner` (22vh) |
| `header-filter` | `header-filter: photo` | `photo`, `botanical`, `sketch`, `woodcut`, or `etching` |
| `header-title` | `header-title: River Crossings` | Title overlaid on the image |
| `header-eyebrow` | `header-eyebrow: Part One` | Small caps line above title (hero only) |
| `header-subtitle` | `header-subtitle: A story of...` | Paragraph below title (hero only) |
| `header-divider` | `header-divider: ✦` | Text between decorative lines (hero only) |
| `header-position` | `header-position: center right` | CSS `background-position` — which part of the image to show |
| `header-opacity` | `header-opacity: 0.4` | Override image opacity (0–1) |
| `header-zoom` | `header-zoom: 150%` | Zoom in; shows less of the image but larger |
| `header-height` | `header-height: 60vh` | Override the tier's default height |

### Navigation and organization fields

| Field | Example | What it does |
|-------|---------|--------------|
| `toc-section` | `toc-section: essays` | Groups the page under a section in left-nav layouts |
| `order` | `order: 3` | Controls sort order within a section |
| `thumbnail` | `thumbnail: images/thumb.jpg` | Image used in navigation cards |
| `tags` | `tags: [mapping, history]` | Categorizes pages; see [Tags](../editing/tags) |
| `autoscroll` | `autoscroll: true` | Enables hands-free auto-scroll (press P to start/pause); ScrollStory pages only; off by default |

### Geographic fields

For pages that should appear on an [interactive map](../editing/navigation#interactive-maps):

| Field | Example | What it does |
|-------|---------|--------------|
| `geo` | `geo: [35.08, -106.65]` | Latitude and longitude coordinates |
| `placename` | `placename: Albuquerque` | Location name shown in map popup |

### Full example

```yaml
---
title: Acequia Landscapes
layout: default
date: 2026-01-20
author: Carlos Medina
summary: How community irrigation systems shaped settlement patterns in the Rio Grande Valley.
header-image: /assets/images/acequia.jpg
header-tier: section
header-filter: photo
header-title: Acequia Landscapes
header-position: center right
tags: [landscape, water, community]
geo: [34.52, -105.97]
placename: Manzano
---
```

---

## Layouts

The `layout` field determines how the page renders. Xanthan includes several:

| Layout | Use case |
|--------|----------|
| `xanthan` | Standard page with top navbar---the default for most pages |
| `scrollstory` | Full-screen scrolling narrative with background images |
| `nav-left` | Page with a left sidebar listing pages in the same folder |
| `nav-profile` | Page with a profile sidebar (image, bio, links) |

Most pages use `xanthan`. The other layouts are documented in [Navigation](../editing/navigation) and [ScrollStories](../scrollstories/).

---

## Writing content with Markdown

Below the front matter, you write content in Markdown---a lightweight syntax that's far simpler than HTML but produces the same results. A few essentials:

```markdown
# Heading 1
## Heading 2
### Heading 3

Regular paragraph text. **Bold** and *italic* work as you'd expect.

- Bulleted list item
- Another item

1. Numbered list
2. Second item

[Link text](https://example.com)

> Blockquote for quoted material
```

Markdown was designed to be readable even as raw text, which means you're never fighting with tags or angle brackets. If you're new to it, the [Markdown Tutorial](https://www.markdowntutorial.com/) takes about ten minutes. The [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet) is a useful reference to keep open while writing.

---

## File naming

Page filenames become URLs. A file at `projects/river-survey.md` becomes `yoursite.com/projects/river-survey`. Some guidelines:

- **Use lowercase** and **hyphens** (not spaces or underscores): `my-page.md`
- **Keep names short** but descriptive: `acequia-landscapes.md` not `my-essay-about-acequias-in-new-mexico-final-v2.md`
- **Use `index.md`** for the default page in a folder: `projects/index.md` becomes `yoursite.com/projects/`

---

## Special content: includes

Xanthan extends Markdown with "includes"---reusable components you can drop into any page for images, alerts, audio players, and more. They use a Liquid tag syntax:

```
{% raw %}{% include images/figure.html
  class="right"
  width="40%"
  image-path="/assets/images/photo.jpg"
  caption="A descriptive caption"
%}{% endraw %}
```

See the [Component Library](component-library) for every available include with parameters and examples.

---

## Next steps

- [Images](../editing/images) --- placing and formatting images on your pages
- [Typography](../editing/typography) --- text formatting, lists, and block elements
- [Navigation](../editing/navigation) --- how pages connect through menus, cards, and sidebars
