---
title: Building with AI
layout: default
date: 2026-02-16
---

# Building with AI

{% include nav/scrollspy-toc.html %}

These are real prompts you can use with AI assistants in VS Code. They're organized by what you're trying to accomplish, not by which technology they involve. Each one takes advantage of Xanthan's design system---the AI knows how the framework is structured and will make changes that fit.

For all of these, you should be working locally with VS Code and an AI assistant. If you haven't set that up, start with the [setup instructions](./).

---

## Reshaping the feel of your site

These prompts change how your site looks and feels without altering its content or structure. They work because Xanthan's visual design is controlled by CSS variables---the AI changes a few values and the effect ripples across every page.

> *"Give my site a warmer feel---cream or off-white background, dark brown body text, and a muted terracotta accent color. Update all the related variables (hover states, borders, card backgrounds) to stay consistent."*

> *"I want something that feels like a university press monograph---serif body text, generous margins, muted color palette, subtle headings. Think scholarly but not fussy."*

> *"Make the overall design lighter and more airy---more white space between sections, lighter borders, remove any heavy shadows or dark backgrounds."*

> *"Switch from the current palette to a cool blue-grey scheme. Something that feels calm and professional, like an architecture firm's website."*

> *"My site feels too corporate. Make it warmer and slightly more informal---maybe rounder corners, softer colors, a friendlier font."*

### Why these work

These prompts describe a *feeling*, not a specific CSS property. The AI translates that feeling into concrete changes across `base.css` and sometimes `typography.css`---adjusting colors, fonts, spacing, borders, and shadows as a coordinated set. You judge the result by whether it *feels* right, not by whether the hex codes are correct.

---

## Adding pages and content

AI can create entire new pages for your site, complete with front matter, content structure, and components. These are some of the most powerful prompts because they save the most time.

> *"Create a new page called 'Field Sites' at essays/field-sites.md. It should have a card grid showing six locations. Each card needs a title, a one-sentence description, and a placeholder for an image. Use the card-grid navigation include."*

> *"I have a plain-text CV. Convert it into a well-formatted Xanthan page at about/cv.md with proper headings, a clean layout, and the right front matter. Here's the content: [paste your CV]"*

> *"Create a page that showcases five audio interviews. For each one, include an audio player using the audio-player include, the interviewee's name as a heading, a date, and a brief description paragraph."*

> *"Set up a new essay page at essays/water-rights.md with a header image, a right-aligned figure after the introduction, and a before/after image slider halfway through. Use placeholder images for now---I'll swap them later."*

> *"Build a resources page with three sections: Books, Articles, and Websites. Each section should have items as a simple list with titles linked to external URLs and one-line descriptions."*

### Why these work

Xanthan pages are Markdown files with YAML front matter and Liquid includes. The AI knows this structure, so when you ask for "a page with a card grid," it generates the right front matter fields, uses the correct include syntax, and follows the parameter format documented in the [Component Library](../reference/component-library).

---

## Working with components

Xanthan's components are reusable pieces you drop into any page. Each has specific parameters. AI is particularly good at assembling these because the syntax is precise and documentable.

> *"Add a before/after image slider to my essay comparing the 1920 photograph at /images/main-hall-1920.jpg with the 2024 photo at /images/main-hall-2024.jpg. Caption it 'Main Hall: a century apart.'"*

> *"Create an image carousel with these four images: [list your image paths]. Give the first one the title 'Construction begins' and a caption describing the groundbreaking. The others just need captions."*

> *"Add a warning alert box after the second paragraph that says 'This essay discusses topics that some readers may find difficult.' Use the alert include."*

> *"Place a pull quote in the middle of this essay. The quote is 'The archive remembers what the institution prefers to forget.' Attribute it to 'Maria Torres, Interview, 2023.'"*

> *"I want two images side by side after the introduction---left one is /images/before.jpg, right one is /images/after.jpg, each at 48% width with captions. Make sure text starts below both images."*

### Why these work

Every Xanthan component has a documented include path and parameter list. When you name the component (or describe what you want and the AI identifies it), the AI generates syntactically correct Liquid include tags. If you're unsure which component to use, just describe the visual effect: "I want a draggable slider comparing two images" is enough for the AI to find the juxtapose include.

---

## Building ScrollStory sections

ScrollStories---narratives where images and text interact as you scroll---are among the most impressive things you can build with Xanthan. They're also the most technically involved, which makes AI assistance especially valuable.

> *"Add a scrolling section to my essay where a background image of the desert stays fixed while three text blocks scroll over it. Each text block should have a semi-transparent background. Use the bg-sticky scrollybox include."*

> *"Create a section where the background switches between three images as the reader scrolls. The first image is the building exterior, the second is the lobby, the third is the reading room. Each should have a text overlay describing what the reader is seeing."*

> *"Build a side-scrolling narrative section. I have four panels of text that should scroll horizontally while a tall landscape image stays visible in the background. Use the auto-scroll include."*

> *"I want to start my essay with a peekaboo header---the page content should slide up over a fixed background image of the canyon. Set the height to 50vh and use /images/backgrounds/canyon.jpg."*

### Why these work

ScrollStory components have complex syntax---multiple nested includes, specific parameter combinations, careful ordering. This is exactly the kind of work where AI earns its keep. Describe the *experience* you want the reader to have, and the AI assembles the correct include tags and parameters. The [ScrollStories documentation](../scrollstories/) has examples at three complexity levels if you want to see what's possible before asking.

---

## Changing your site's structure

Navigation, page organization, and site-wide settings are controlled by YAML configuration files. AI can edit these directly.

> *"Add a new dropdown called 'Research' to my top navigation, between 'About' and 'Teaching.' It should have three items: 'Current Projects', 'Publications', and 'Collaborators,' pointing to pages at /research/projects, /research/publications, and /research/collaborators."*

> *"Reorganize my navigation so that 'Essays' comes before 'About,' and add a divider between 'Resources' and 'Contact' in the About dropdown."*

> *"Change my site title in _config.yml to 'Water in the West: A Digital Archive' and update the description to 'An interdisciplinary collection of essays, maps, and oral histories exploring water rights in the American Southwest.'"*

### Why these work

Xanthan's navigation lives in `_data/nav-top.yml`---a simple list of titles and URLs that the AI can read and modify directly. Site-wide settings are in `_config.yml`. No templates to hunt through, no complex logic to untangle.

---

## Understanding what you have

Sometimes the most useful thing AI can do is explain what's already there.

> *"Walk me through the file structure of this project. What are the main folders and what do they contain?"*

> *"What CSS files control the visual design of my site? Which one should I edit if I want to change colors?"*

> *"Explain what the front matter at the top of this page does. What happens if I change or remove each field?"*

> *"I see {% raw %}{% include images/figure.html ... %}{% endraw %} in my page. What does this do, and what parameters can I change?"*

> *"Why does my page look different from other pages on the site? What in the front matter or content is causing the difference?"*

### Why these work

AI assistants can read your entire project and explain it in context. This is different from searching documentation---the AI sees *your specific files* and can point to exact lines, explain relationships between files, and connect what you see in the browser to what's in the code.

---

## Fixing problems

When something doesn't look right, AI can diagnose and fix it.

> *"My image isn't showing up on the page. The path is /images/field-site.jpg. Can you check if the include syntax is correct and whether the file path matches?"*

> *"There's too much space between my heading and the first paragraph. What's causing it and how do I reduce it?"*

> *"My site won't build---GitHub Actions shows an error. Here's the error message: [paste it]. What's wrong and how do I fix it?"*

> *"The navigation dropdown isn't showing my new page. I added it to nav-top.yml but it's not appearing. Can you check the YAML syntax?"*

> *"On mobile, my side-by-side images are overlapping instead of stacking. How do I fix this?"*

### Why these work

Debugging is where AI assistants are most immediately useful. They can cross-reference your include syntax against the component's parameters, check YAML indentation, validate file paths, and interpret error messages---all tasks that are tedious for humans and trivial for AI.
