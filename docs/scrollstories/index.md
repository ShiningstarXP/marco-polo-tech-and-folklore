---
title: ScrollStories
layout: default
date: 2019-10-05
---

{% include nav/scrollspy-toc.html %}

# ScrollStories

{% capture scrollstories_intro %}
ScrollStories transform academic writing into immersive visual narratives. By combining scholarly depth with dynamic scrolling, they invite readers to experience research as a journey—guided by full-screen images, creative typography, and layered design.
{% endcapture %}

{% include images/figure-wrap.html
	image-path="/assets/images/forest-scroll.gif"
	image-position="right"
	image-width="44%"
	alt-text="Animated example of a ScrollStory with background transitions and overlaid text panels"
	text=scrollstories_intro
%}

Perfect for public humanities projects, digital history, or visual essays, ScrollStories make complex ideas accessible and engaging. Whether showcasing research findings, historical narratives, or cultural analysis, this format offers a powerful way to share scholarly work that feels both elegant and alive.

---

## How ScrollStories work

ScrollStories use components that respond to scrolling, creating a cinematic reading experience. The core techniques are [background images with scrolling text overlays](bg-scrollbox), [backgrounds that switch as you scroll](bg-switch), and [side-scrolling text panels](side-scroll) that move horizontally while an image stays fixed. You can mix these freely with standard page elements—images, pull quotes, footnotes—to build a narrative rhythm that suits your content.

Each technique is documented with examples you can copy and modify. But the fastest way to learn is to look at the sample essays below, find effects you like, and adapt them.

---

## Sample essays

We've created three template essays at increasing levels of complexity. Each uses the same content but demonstrates progressively more features. Open one, read through it, then duplicate the file and start replacing our content with yours.

### [Seedling](scrollstories/seedling)

The simplest ScrollStory. Section headings, body text, images with captions, pull quotes, and footnotes—a clean, straightforward layout that works well for a first attempt or for narratives that don't need heavy visual effects.

### [Sapling](scrollstories/sapling)

Everything Seedling does, plus background images with text overlays and more varied layout patterns. This is where a ScrollStory starts to feel cinematic without requiring much extra effort.

### [Forest](scrollstories/forest)

The full range of what's possible: background switching on scroll, side-scrolling text panels, and complex multi-section layouts. If you want to see every feature working together, start here and strip out what you don't need.

---

## Make it feel like a ScrollStory (without being annoying)

You don't need constant motion to get a cinematic effect. A few restrained techniques usually work better:

- **Use one dominant visual rhythm** per section (for example: one large background image + one text panel), instead of stacking multiple effects at once.
- **Alternate intensity**: follow a high-motion section with a quieter text-only or static-image section so readers can recover.
- **Keep transitions meaningful**: change backgrounds at argumentative pivots, not just for decoration.
- **Use white space deliberately**: a little vertical breathing room before major headers often feels more "scrollstory" than extra animation.
- **Limit novelty effects**: pick one or two signature interactions for the whole piece so the style feels intentional and coherent.

---

## Getting started

Every Xanthan template includes a folder with all three sample essays, so you already have working examples to build from. If you don't have a site yet, [follow the getting started guide](../getting-started/). Otherwise, duplicate a sample essay file, start editing, and consult the [editing guides](../editing/) as questions come up.

If something isn't working, see [Troubleshooting](../reference/troubleshooting).
