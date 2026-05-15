---
title: Sapling
author: Fred Gibbs
layout: scrollstory
date: 2025-07-21
header-image: images/forest-trail-fog.jpg
thumbnail: images/sapling-card.jpg
summary: Our intermediate essay adds scrollyboxes, carousels, jumbotrons, and more — building on Seedling basics to create immersive visual narratives.
header-title: The Sapling
header-subtitle: the goldilocks sample
header-position: center
header-tier: section
toc-section: second
geo: [41.240000, -81.550000]
placename: Cuyahoga Valley National Park
tags:
    - history
    - nature
    - campus
---

This essay demonstrates **intermediate ScrollStory features**—building on what you learned in the [Seedling Essay](../seedling/).

**What makes this a "Sapling" essay?** It includes everything from Seedling (headings, images, footnotes, pull quotes, alerts) plus a few other Xanthan components: text overlaying background images, full-width image breaks, image carousels, and more dynamic pacing. This is where ScrollStories start feeling a bit more cinematic.


## The Page Header
Notice that this page has a **shorter header** than Seedling — it doesn't fill the entire viewport. That's controlled by one front matter field:

```yaml
header-tier: section
```

The three tiers are:

- **hero** (default, no `header-tier` needed) — fills the entire viewport for dramatic effect
- **section** — roughly 60vh, nav sits above the header normally as you see above
- **banner** — a shallow 22vh strip, more of an accent than a feature for informational pages

For essays where you want the nav always visible, or where the image isn't strong enough to carry a full-screen treatment, `section` is the right choice. For maximum visual impact at the start of a narrative, use hero.


## Building on Seedling Basics
{% capture firstimage %}
Everything from Seedling still works here: images with captions, footnotes, section headings, alert boxes. The Sapling template doesn't replace what you learned—it **adds** to it.

This layered approach is intentional. Master the basics, then add complexity incrementally. You're not learning a whole new system; you're expanding your toolkit with a few powerful new components.
{% endcapture %}
{% include images/figure-wrap.html
  image-position="right"
  image-width="48%"
  caption="Photo by Oskari Manninen on Unsplash."
  image-path="images/oskari-manninen-RnDXZXcfgGI-unsplash.jpg"
  text=firstimage
%}


## Your First Scrollybox
Here's what makes Sapling different: keep scrolling and watch what happens next. You're about to see text appear **over** a background image, creating an immersive reading experience.

{% include scrollybox/bg.html
  image-path="images/mountain-landscape.jpg"
  above-box-space = "100vh"
  below-box-space = "80vh"
  box-align="left"
  box-content="
**This is a scrollybox.** The background image stays fixed while you scroll. This text box floats over it.

The box content supports full Markdown: **bold**, *italic*, [links](#), and lists:

- `image-path` — background image
- `above-box-space` — scroll distance before box appears
- `below-box-space` — scroll distance after box before image releases
- `box-align` — left, right, or center (this box is left-aligned)
"
%}


## What Just Happened?
That was a **scrollybox**—text that appears in a semi-transparent box over a full-screen background image. As you scrolled, the background image stayed fixed while the text box scrolled into view, stayed visible, then scrolled away.

**Why use scrollyboxes?** They create moments of focus and drama. The full-screen image immerses readers in a visual context, while the overlay text provides commentary, quotations, or key points. It's like a visual pause in your narrative.

**Technical note:** The `above-box-space` and `below-box-space` parameters control how much blank scroll space appears before and after the text box. Adjust these to control pacing—more space = slower, more contemplative; less space = faster pacing.



## Jumbotron: A Full-Width Visual Break

The **jumbotron** is a full-browser-width image that breaks out of the content margins. It creates a dramatic visual pause. The same image can read very differently depending on parameters — here's the same photo used two ways.

### Version 1: Pure visual break
No text, no gradient — just the image at full width. Use `background-position` to control which part of the image is visible, and `height` to set how tall it runs.

{% include images/jumbotron.html
  image-path="images/francesco-gallarotti-ruQHpukrN7c-unsplash.jpg"
  height="40vh"
  background-position="center 30%"
%}

### Version 2: With text and gradient
Add `text` and `box-align` and a gradient fades in automatically so words read cleanly against the image. The gradient direction follows the text position — `left` means left-to-right fade, `right` means right-to-left.

{% include images/jumbotron.html
  image-path="images/francesco-gallarotti-ruQHpukrN7c-unsplash.jpg"
  height="55vh"
  background-position="70% 70%"
  box-align="left"
  text="A full-width image break with text overlaid on a gradient. The gradient covers the left side, fading to transparent on the right — keeping the image visible while making text legible."
  caption="Photo by Francesco Gallarotti on Unsplash."
%}

**When to use a jumbotron vs. a scrollybox:** Jumbotrons are quick visual pauses — the reader sees the image and moves on. Scrollyboxes give you the chance to say something about or relevant to the image as it stays on screen. Jumbotrons break up text; scrollyboxes provide a new visual background for the text.


## Image Carousels for Comparisons
Below you'll see an **image carousel**—multiple images you can click through with captions underneath.

{% assign sapling_images =
"images/autumn-forest.jpg,
images/forest-tall-trees.jpg,
images/forest-trail-fog.jpg" | split: ','
%}

{% assign sapling_headers =
"Mountain Stream,Tall Trees,Autumn Colors" | split: ','
%}


{% include images/carousel.html
  id="sapling-carousel"
  width="80%"
  class="center"
  images=sapling_images
  headers=sapling_headers
  captions=sapling_captions
%}

**Why use carousels?** When you have 3-5 related images (historical documents, different views of a building, a sequence of photos), a carousel lets readers compare them without scrolling past each one. Click the arrows or dots to navigate.

Notice this carousel has **titles and captions** — features we didn't use in Seedling. Captions use the pipe `|` separator (instead of commas) so you can include commas in caption text.


## A Scrollybox With Title Overlay

Scrollyboxes aren't just for text boxes. You can also use them as simple image reveals with a title and subtitle overlaid directly — no box needed:

{% include scrollybox/bg.html
  image-path="/assets/images/backgrounds/hike-2.jpg"
  height="80vh"
  title="The Summit"
  text="A moment of stillness at the top"
%}


## What You've Learned in Sapling
If you can create a Sapling essay, you can:

- **Choose header tiers** for different visual weight at the top of your essay
- **Use scrollyboxes** to overlay text on full-screen background images
- **Control pacing** with scroll space parameters
- **Add jumbotrons** for full-width visual breaks with optional text
- **Add image carousels** with titles and captions for comparing multiple images
- **Use title overlays** on background images without text boxes
- **Mix components** - scrollyboxes, pull quotes, carousels, jumbotrons, and standard images in one essay


## Ready to Create Your Own?

**New to Xanthan?** Start with the [Getting Started guide](../../../docs/getting-started/) to create your own site first. Once you have a working site, come back here to build your ScrollStory.


Ready for even more? Check out the [Forest template](../forest/) for advanced features like background switching and side-scrolling.
