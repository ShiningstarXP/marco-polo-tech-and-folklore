---
layout: default
title: Site Structure
author: Fred Gibbs
date: 2019-10-03
---

{% include nav/scrollspy-toc.html %}

# Site Structure

Your Xanthan site is organized into folders, each serving a specific purpose. When you look at your repository on GitHub, you'll see these folders and files listed in alphabetical order. Understanding what each folder does will help you know where to find things and where to put your own content.

**Note:** Depending on which template you started with (full Xanthan, Portfolio, Class Project, or ScrollStory), you may see some different files. But all templates share the same core structure explained below.

<!-- PLACEHOLDER FOR SCREENSHOT: GitHub repository folder view showing the main folders -->

---

## Core Folders (In GitHub Display Order)

These folders appear in all Xanthan templates and provide the foundation for your site:

### `_data/`
**Site configuration files**

This folder contains YAML files that control site-wide settings. The most important file here is `top-nav.yml`, which defines your navigation menu—the links that appear at the top of every page. When you want to add a new page to your navigation menu, you'll edit the file in this folder. Think of `_data` as your site's control panel, where you configure how things work without touching the actual page content.

### `_includes/`
**Reusable page components**

This folder holds small, reusable pieces of code that can appear on multiple pages. For example, the navigation bar, footer, image galleries, and pull quotes are all stored here as separate files. When you want to add an image gallery to a page, you reference the file from this folder. **Why bother?** If you want to change how your footer looks across your entire site, you only need to edit one file here. You won't need to edit these files often unless you want to customize how a specific component behaves.

### `_layouts/`
**Page templates**

Every page on your site uses a layout---a structural template that determines how the page is organized. This folder contains different layout options like `base` (standard page), `scrollstory` (cinematic scrolling), and `left-nav` (sidebar navigation). When you create a new page, you'll specify which layout to use in the page's header. Most of the time you'll just choose an existing layout rather than editing the layout files themselves, which contain the underlying HTML structure.

### `_site/`
**Generated website (don't edit)**

This folder contains the final HTML version of your website that visitors actually see. Jekyll automatically generates this folder when you make changes—you should never edit files in here directly. Any changes you make would be overwritten the next time the site builds. Think of this as the "published" version that's created from all your other files.

### `assets/`
**Styling, images, and resources**

This is where your site's visual elements live. Inside you'll find:
- `assets/css/` - Style files that control colors, fonts, spacing, and layout. You'll edit files here when you want to customize your site's appearance.
- `assets/images/` - Where you upload photos and graphics. Any images you want to use on your site should be stored here.
- `assets/js/` - JavaScript files for interactive features (you rarely need to touch these).

The assets folder is one you'll interact with frequently—adding images and occasionally tweaking CSS to customize colors or fonts.

### `docs/`
**Documentation and guides**

All the documentation for Xanthan, organized into sections: `getting-started/` (setup tutorials), `editing/` (content and customization guides), `reference/` (this page and other lookup resources), `using-ai/` (AI assistance guides), and `scrollstories/` (scrolling narrative documentation). You can safely delete this entire folder when you no longer need the guides—it won't affect your site.

### `scrollstories/`
**ScrollStory essay templates**

If you're creating cinematic scrolling narratives, this folder contains three template essays at different complexity levels (Seedling, Sapling, Forest). Each shows progressively more features and can be duplicated as a starting point for your own ScrollStories. If you're not using this feature, you can delete this folder.

---

## Content Folders (Varies by Template)

Depending on which template you chose, you might also see folders like:

- `essays/` - Sample essay pages (Class Project template)
- `projects/` - Project portfolio pages (Portfolio template)
- `bibliography/` - Bibliography or references page
- `cv/` - Curriculum vitae page

These folders are examples to show you how to organize your own content. You can rename them, delete them, or create new folders with names that make sense for your project. For example, if you're documenting historic sites, you might create a folder called `historic-sites/`. The key is that folder names (without underscores) are flexible—they're just for organizing your content.

---

## Root Directory Files

In addition to folders, you'll see several `.md` files in your main repository folder:

- `index.md` - Your homepage (this is what visitors see first)
- `about.md` - An example about page
- `faqs.md` - Frequently asked questions page
- `documentation.md` - Links to all documentation

Any `.md` file you create in the root directory becomes a page accessible at `yoursite.com/filename`. 

---

## Understanding the Underscore Convention

Notice that some folders start with an underscore (`_data`, `_includes`, `_layouts`, `_site`) while others don't (`assets`, `guides`, `components`)?

**Folders WITH underscores (`_`)** are special Jekyll system folders that control how your site works. You'll occasionally edit files in `_data` and rarely touch `_includes` or `_layouts`.

**Folders WITHOUT underscores** are for your content and can be renamed, moved, or deleted as needed. These are where you organize your actual pages, images, and projects.

---

## What You Need to Know Right Now
Don't feel overwhelmed by all these folders! Here's what matters for getting started:

1. **Main pages** are `.md` files in the root directory
2. **Images** go in `assets/images/`
3. **Navigation menu** is controlled by `_data/top-nav.yml`
4. **Style customization** happens in `assets/css/`

Everything else? You'll learn it as you need it. The components, guides, and navigation folders are there to help you when you're ready to explore.

---

## Next Steps

- **[Pages & Front Matter](pages-and-front-matter)** - Learn how individual page files are structured
- **[Editing Workflows](../editing/)** - Make your first changes to your site
