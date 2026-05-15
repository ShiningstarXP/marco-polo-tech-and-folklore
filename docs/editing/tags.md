---
layout: default
title: Using Tags
summary: How to use the tagging system in Xanthan
date: 2026-01-29
---

{% include nav/scrollspy-toc.html %}

# Using Tags in Xanthan

Xanthan includes a built-in tagging system that makes it easy to organize and filter content across your site. The system is designed to be simple, requiring only YAML frontmatter tags on your pages and a single tags page. This page describes how tagging works, and you can see it work on our [sample tag page](/tags).


## How It Works

### Adding Tags to Pages

Add tags to any page's YAML frontmatter:

```yaml
---
title: Forest
layout: scrollstory
tags:
  - music
  - nature
  - campus
---
```

Tags are case-insensitive and can contain spaces. Keep them simple and consistent for best results.


### The Tags Page

The tags page (`/tags/`) is configured in its frontmatter:

```yaml
---
layout: base
title: Tags
summary: Browse by tags
permalink: /tags/
tag-folders: scrollstories
---
```

The `tag-folders` parameter tells the page which folder(s) to collect tags from. You can specify a single folder or multiple comma-separated folders.

The page automatically:

1. **Collects all tags** from pages in the specified folder(s)
2. **Displays them as clickable badges** at the top of the page
3. **Shows cards for all pages**, with tags visible on each card
4. **Filters by URL parameter** like `?tag=music` to show only matching pages
5. **Updates the display** dynamically without page reload

### URL-Based Filtering

Share direct links to filtered views:
- `/tags/` - Shows all pages
- `/tags/?tag=music` - Shows only pages tagged "music"
- `/tags/?tag=history` - Shows only pages tagged "history"

Users can click tag badges on the tags page, or you can link directly to filtered views from anywhere on your site.

## Customization

### Change the Source Folder

By default, the tags page looks for pages in `/scrollstories/`. To change this, edit the `tag-folders` parameter in the frontmatter of [tags.md](/tags):

**Single folder:**
```yaml
---
layout: base
title: Tags
permalink: /tags/
tag-folders: scrollstories
---
```

Change `scrollstories` to your preferred folder, like `essays` or `projects`.

**Multiple folders:**
```yaml
---
layout: base
title: Tags
permalink: /tags/
tag-folders: scrollstories, essays, projects
---
```

Use a comma-separated list to collect tags from multiple folders. The page will show all tagged content from any of the specified folders.

### Multiple Tag Pages

You can create multiple tag pages for different content collections:

**Example: `/project-tags.md`**
```yaml
---
layout: base
title: Project Tags
permalink: /project-tags/
tag-folders: projects
---
```

**Example: `/all-tags.md`** (multiple content types)
```yaml
---
layout: base
title: All Tags
permalink: /all-tags/
tag-folders: scrollstories, essays, projects
---
```

### Styling Tags

Tag styles are defined in [assets/css/cards.css](/assets/css/cards.css):

- `.tag-pill` - Small tags shown on cards
- `.tag-badge` - Large clickable filter tags
- `.tag-badge.active` - Currently selected filter
- `.tag-list` - Container for filter badges

Customize colors, sizes, and hover effects by editing these classes.

## Tag Display Components

### On Cards (Automatic)

The card grid automatically displays tags when present:
```liquid
{%raw%}
{% include nav/card-grid.html cards=site.pages show-tags=true %}
{%endraw%}
```

To hide tags on specific card grids:

```liquid
{%raw%}
{% include nav/card-grid.html cards=site.pages show-tags=false %}
{%endraw%}

```

### Individual Tag Pills

Display tag pills anywhere on your site:

**Static tag (display only):**
```html
<span class="tag-pill">music</span>
```

<span class="tag-pill">music</span>


**Clickable tag (links to filtered view):**
```html
<a href="/tags/?tag=music" class="tag-pill">music</a>
```

<a href="/tags/?tag=music" class="tag-pill">music</a>

Use clickable tags to help readers discover related content. Replace `music` with any tag from your site.


## Best Practices

### Tag Naming
- Use lowercase for consistency (filtering is case-insensitive, but display matches your input)
- Keep tags short (1-2 words)
- Use consistent terminology across your site
- Consider your taxonomy before creating many tags

**Good tags:** `music`, `history`, `nature`, `campus`, `architecture`  
**Avoid:** `This is about music history`, `MUSIC`, `Music123`

### Tag Quantity
- 3-5 tags per page is ideal
- Too many tags dilute their usefulness
- Think about how users will want to filter content

### Shared vs. Unique Tags
- Use shared tags across multiple pages for filtering to be useful
- If only one page has a tag, consider whether it's needed
- Review tag usage periodically and consolidate similar tags



## Integration with Navigation

Add tag filters to your main navigation by editing `_data/top-nav.yml`:

```yaml
- title: "Browse"
  items:
    - title: "All Stories"
      url: "/tags/"
    - title: "Music"
      url: "/tags/?tag=music"
    - title: "History"
      url: "/tags/?tag=history"
    - title: "Nature"
      url: "/tags/?tag=nature"
```

## Troubleshooting

**Tags aren't showing up**
- Check YAML frontmatter syntax (proper indentation, list format)
- Verify the tags page is looking in the right folder
- Ensure pages have `tags:` in frontmatter (not `tag:`)

**Filtering doesn't work**
- JavaScript must be enabled (built into [tags.md](/tags))
- Check browser console for errors
- Verify tag names match exactly (though matching is case-insensitive)

**Cards look wrong**
- Ensure `assets/css/cards.css` is loaded
- Check that pages have `thumbnail` or `header-image` in frontmatter
- Verify card-grid class is present on container

