---
title: Documentation
layout: default
date: 2026-01-01
summary: Documentation for your Xanthan site, matched to the code in this repository.
---

<style>
.docs-index h2 { font-size: 1.15rem; margin: 1.2rem 0 0.1rem; text-transform: uppercase; letter-spacing: 0.06em; }
.docs-index p  { margin: 0 0 0.25rem; color: var(--text-muted); font-size: 0.9rem; }
.docs-index ul { margin: 0 0 0.25rem; padding-left: 1rem; }
.docs-index ul li { margin: 0; padding: 0.02rem 0; }
.docs-index hr { margin: 0.75rem 0; }
.docs-index a { border-bottom: none; }
.docs-index a:hover { color: var(--interactive-hover); }
</style>

{::nomarkdown}<div class="docs-index">{:/nomarkdown}

# Documentation

This documentation is bundled with your site and matches the version of Xanthan code you're running. For the latest updates, visit [xanthan-web.github.io/xanthan](https://xanthan-web.github.io/xanthan/).

---

## Getting Started

From zero to a live site in 15 minutes. Choose a template, create your repository, make your first edit.

{% assign gs = site.pages | where_exp: "pg", "pg.path contains 'docs/getting-started/'" | sort: "title" %}
{% for pg in gs %}{% unless pg.path contains 'index' %}
- [{{ pg.title }}]({{ pg.url | prepend: site.baseurl }})
{% endunless %}{% endfor %}

---

## Editing

Make it yours. Pages, typography, images, colors, navigation — everything you need to customize your site.

{% assign ed = site.pages | where_exp: "pg", "pg.path contains 'docs/editing/'" | sort: "title" %}
{% for pg in ed %}{% unless pg.path contains 'index' %}
- [{{ pg.title }}]({{ pg.url | prepend: site.baseurl }})
{% endunless %}{% endfor %}

---

## Reference

Look things up. Site structure, component library, front matter, and troubleshooting.

{% assign ref = site.pages | where_exp: "pg", "pg.path contains 'docs/reference/'" | sort: "title" %}
{% for pg in ref %}{% unless pg.path contains 'index' %}
- [{{ pg.title }}]({{ pg.url | prepend: site.baseurl }})
{% endunless %}{% endfor %}

---

## Using AI

Work with Claude, ChatGPT, or other AI assistants to customize your site faster.

{% assign ai = site.pages | where_exp: "pg", "pg.path contains 'docs/using-ai/'" | sort: "title" %}
{% for pg in ai %}{% unless pg.path contains 'index' %}
- [{{ pg.title }}]({{ pg.url | prepend: site.baseurl }})
{% endunless %}{% endfor %}

---

## ScrollStories

Build immersive, scroll-driven visual narratives.

{% assign ss = site.pages | where_exp: "pg", "pg.path contains 'docs/scrollstories/'" | sort: "title" %}
{% for pg in ss %}{% unless pg.path contains 'index' %}
- [{{ pg.title }}]({{ pg.url | prepend: site.baseurl }})
{% endunless %}{% endfor %}

---

{::nomarkdown}</div>{:/nomarkdown}

{: .text-muted}
You can remove the `/docs` link from your navigation whenever you like — the documentation will still be there if you need it.
