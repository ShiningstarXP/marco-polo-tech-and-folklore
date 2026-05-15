---
title: Search
layout: default
date: 2026-03-04
---

{% include nav/scrollspy-toc.html %}

# Search

Every site needs a way to find things. Even a well-organized navigation menu won't help someone who remembers a *word* but not which page it's on. Search solves that.

Xanthan includes a built-in search system that works entirely in the browser---no server, no database, no third-party service. When Jekyll builds your site, it creates a small file listing every page's title, summary, tags, and content. When someone searches, a JavaScript library called [Lunr](https://lunrjs.com/) scans that file and ranks the results by relevance. Everything happens on the visitor's computer.

This matters for two reasons: your search works even on a simple GitHub Pages site (which has no server-side processing), and your visitors' search queries never leave their browser.

---

## Turning search on

Search is controlled by a single line in your site's configuration file. Open `_config.yml` and make sure it includes:

```yaml
search: true
```

That's it. When Jekyll rebuilds, a magnifying glass icon appears in the navbar and the search system is active. Visitors can click the icon or press <kbd>/</kbd> on any page to open search.

To turn search off, change the value to `false` or remove the line entirely. The icon disappears, the extra CSS and JavaScript stop loading, and no search index is generated.

---

## What gets indexed

Every page on your site that has a `title` in its front matter is included in the search index. The index contains:

- **Title** --- weighted most heavily, so searching for a page by name works well
- **Tags** --- weighted second, so topical searches surface tagged pages
- **Summary** --- the `summary` field from front matter, if present
- **Content** --- the first ~200 words of the page body

Pages without a `title` are excluded. You can also exclude a specific page by adding `searchable: false` to its front matter:

```yaml
---
title: Draft Notes
layout: default
searchable: false
---
```

### Making pages easier to find

The most effective thing you can do for search quality is write good front matter. A clear title and a one-sentence summary will surface your pages reliably:

```yaml
---
title: Adding Images to Your Site
layout: default
summary: How to place, size, and caption images using Xanthan's figure includes.
tags: [images, figures, media]
---
```

Search ranks title matches highest, then tags, then summary, then body content. If a page has a good title and relevant tags, people will find it. If it only has body text, it still works---just not as precisely.

---

## How it works (the concepts)

Understanding the pieces helps if you ever need to troubleshoot or customize.

### The search index

When Jekyll builds your site, it processes a special file (`assets/search-index.json`) that loops through every page and outputs their metadata as JSON---a structured text format that JavaScript can read. This file is what makes client-side search possible: instead of querying a database, the browser downloads a small file containing everything it needs.

You can see your search index by visiting `your-site-url/assets/search-index.json` in a browser. It's just a list of your pages with their titles, summaries, and content snippets.

### The Lunr library

[Lunr.js](https://lunrjs.com/) is a small, well-established JavaScript library for full-text search. When the search page loads, Lunr reads the index file and builds an *inverted index*---essentially a lookup table from every word to the pages that contain it. This is the same technique large search engines use, just at a smaller scale.

Lunr also handles stemming (so "running" matches "run"), stop word removal (ignoring "the", "and", etc.), and relevance scoring (pages where the search term appears in the title rank higher than pages where it appears once in the body).

### The search overlay

When a visitor clicks the magnifying glass or presses <kbd>/</kbd>, a full-screen overlay appears with a text input. As they type, the JavaScript module queries the Lunr index and renders matching pages as a list of links. Pressing <kbd>Esc</kbd> or clicking outside the results closes the overlay.

The overlay works the same way on every page because it's part of the site's layout templates, not something individual pages need to set up.

---

## Customizing search

### Styling

Search styles live in `assets/css/search.css`. The overlay uses the same CSS custom properties as the rest of your site (`--bg-nav`, `--text-on-dark`, `--interactive-hover`, etc.), so it automatically matches your theme. If you've customized your site's colors, search will already look right.

To change the overlay's visual treatment, edit `search.css`. The class names are straightforward:

| Class | What it styles |
|-------|---------------|
| `.search-overlay` | The full-screen backdrop |
| `.search-input` | The text input field |
| `.search-result-link` | Each result's title link |
| `.search-result-summary` | The summary line below each result |
| `.search-no-results` | The "no matches" message |

### Keyboard shortcut

The <kbd>/</kbd> shortcut is a convention borrowed from sites like GitHub and YouTube. It only activates when the visitor isn't already typing in a text field. If you'd prefer a different shortcut (or none), the behavior is in `_includes/nav/search.html` in a clearly labeled section.

---

## Troubleshooting

**Search icon doesn't appear**
Check that `search: true` is in `_config.yml` (not indented under another key). Restart Jekyll if you changed the config while it was running---config changes require a restart.

**No results for anything**
Visit `your-site-url/assets/search-index.json` directly. If it's empty or shows an error, the index template isn't generating correctly. Make sure `assets/search-index.json` exists in your repository.

**A page doesn't appear in results**
The page needs a `title` in its front matter and must not have `searchable: false`. Pages under `/assets/` paths are automatically excluded.

**Results feel irrelevant**
Add `summary` and `tags` to your pages' front matter. Lunr weights these fields more heavily than body content, so even a short summary dramatically improves result quality.

---

## Using AI to set this up

If you're using an AI assistant to help manage your site, here are useful prompts:

> "Turn on search for my Xanthan site."

> "Add summary and tags to all my pages to improve search results."

> "Change the search overlay background color to match my theme."

> "I want to exclude my draft pages from search. Add searchable: false to pages in the drafts folder."

The AI can read your `_config.yml`, your front matter, and the search CSS to make targeted changes. These are the kinds of small, well-defined tasks where AI assistance works best.
