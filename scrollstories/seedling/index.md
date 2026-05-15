---
title: Seedling
author: Fred Gibbs
layout: scrollstory
date: 2025-07-21
thumbnail: images/seedling-card.jpg
summary: Perfect for beginners getting comfortable with Markdown and digital essays. Section headings, a few images, pull quotes, and footnotes. Nothing fancy, but enough to make a visually compelling essay.
header-image: images/gurau-felicia-AVu1uHyoCBg-unsplash.jpg
header-title: The Seedling
header-subtitle: a beginner scrollstory
header-caption: Photo by <a href="https://unsplash.com/@feliluci">Gurău Felicia</a> on <a href="https://unsplash.com">Unsplash</a>
header-position: 0px
geo: [37.88, -81.08]
placename: New River Gorge National Park
toc-section: first
tags:
    - history
    - campus
---

This essay demonstrates the **simplest ScrollStory approach**—perfect if you're just learning Markdown or want students to focus on writing rather than complex formatting. As you scroll through, notice the clean, uncluttered design that lets content breathe.

**What makes this a "Seedling" essay?** It uses only basic components: section headings, images with captions, pull quotes, alert boxes, and footnotes. No background switching, no side-scrolling—just straightforward digital storytelling that's more visually engaging than a standard web page.

The text below is mostly filler to show how an essay flows, but we'll call out key features as you encounter them.


## The Hero Header

When you loaded this page, the image above filled the entire browser window — that's a **hero header**. The site navigation bar disappeared into the image rather than sitting above it, keeping the full visual impact intact. Scroll down a little and notice the essay content begins below the image.

Hero headers are controlled by three front matter fields at the top of this file:

```yaml
header-image: images/your-photo.jpg
header-title: Your Title Here
header-subtitle: a short description
```

No `header-tier` means hero by default — the image fills 100% of the viewport height. You can also set `header-position` to adjust which part of the image is visible (useful when the focal point isn't centered).


## Images
{% capture firstimage %}
This paragraph sits next to a **right-aligned image**. The ScrollStory layout gives images breathing room—you'll never see cramped text squished against a photo. The spacing and typography are designed to feel more like a magazine than a typical web page.

Notice the caption below the image includes a clickable source link. This is how you maintain scholarly rigor while keeping the visual design clean.

Sed efficitur leo in magna pretium, euismod malesuada risus interdum. Proin sed libero et enim pulvinar convallis non eget est. Sed ultrices dui vitae enim semper accumsan. Duis quis aliquam nulla.

{% endcapture %}

{% include images/figure-wrap.html
  image-position="right"
  image-width="48%"
  caption='A garden path winding through lush greenery. Photo by Pao Dayag on Unsplash.'
  image-path="images/pao-dayag-08-AAUx-WtM-unsplash.jpg"
  text=firstimage
%}

Footnotes work normally in ScrollStories — you can place them anywhere in the page flow.[^1]

[^1]: Click a footnote number to see it pop up. Click anywhere else to dismiss. This keeps your main text flowing while providing space for citations and elaboration.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium, nibh vel posuere pretium, neque ipsum maximus libero, ac maximus quam ante sit amet dolor. Integer pharetra semper sem sed sagittis. Curabitur mauris tortor, elementum non felis id, hendrerit efficitur metus.


## Another image
{% capture leftimage %}
Images don't have to be on the right. Here's a **left-aligned** image — the text wraps on the other side. Left-aligned images work well when you want to create a different visual rhythm within your essay.

Mixing left and right placement keeps readers' eyes moving, which prevents the page from feeling monotonous. Try alternating sides as you write.
{% endcapture %}
{% include images/figure-wrap.html
  image-position="left"
  image-width="50%"
  caption="Another seeding! Photo by qinghill on Unsplash"
  image-path="images/qinghill-x8MZ2MoEKLE-unsplash.jpg"
  text=leftimage
%}



## Standalone Images

Not every image needs text beside it. The **standalone figure** sits within the text flow with its own caption. Here's one centered in the page:

{% include images/figure.html class="center" width="80%" caption="Close up of a seeding in beautiful soil, centered, at 80% width." image-path="images/daniel-dan--FMxvHTCRmw-unsplash.jpg" %}



## Section Headings Create Visual Breaks
Each section heading (marked with `##` in Markdown) creates a clear visual break in your essay. This helps readers navigate long-form content and gives you natural places to shift topics or introduce new ideas.

**Why this matters:** Breaking essays into clear sections makes both writing and reading much easier. You can also use **bold** text to start paragraphs or inside, just put `**` at the beginning and end of the bold part, like `**Why this matters:**`

Praesent sed vehicula velit, vel hendrerit neque. Vivamus scelerisque sed nunc nec congue. Curabitur sapien risus, finibus id tincidunt iaculis, porta et ipsum. Cras eu mollis sapien. Sed a mauris finibus orci molestie mollis.


## Pull Quotes Add Emphasis
Pellentesque viverra hendrerit sapien eu consequat. Curabitur leo ante, vestibulum a tincidunt eget, placerat eu nunc. Donec ut sem mi. Vivamus commodo nec sem eget pretium. Nulla ullamcorper volutpat venenatis.

{% include typography/pullquote.html text="
This is a pull quote—a design element that highlights important text or quotations. Place it between paragraphs for visual emphasis. Use these sparingly for maximum impact." %}

The pull quote you just saw is created with a simple `include` component, one of many reusable components in Xanthan. You can put important quotes, key statistics, or memorable phrases in these boxes to create visual interest and emphasize crucial points.

Duis eros odio, fringilla et pulvinar vitae, eleifend quis elit. Sed eleifend lectus in bibendum elementum. Vivamus ut velit dignissim, cursus libero nec, commodo orci. Morbi lacus metus, posuere ut pretium ac, malesuada id ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, lacus id blandit ornare, mi nisi rutrum ante, vitae dignissim mauris nisl mattis nisl.




### Subsection Headings (Optional)
If you need more structure within a section, use subsection headings (marked with `###`). These are slightly smaller than main section headings and help organize complex topics without breaking up the flow too much.

Duis ut dui dolor. Integer eu lectus at tellus accumsan euismod eget a ligula. Morbi venenatis, elit eu varius fermentum, ligula est dictum massa, sit amet ullamcorper augue nisl ut nunc. Integer placerat vitae metus vitae faucibus.



## Alert Boxes for Key Information
Sometimes you need to draw attention to something important — a tip, a warning, or a key piece of context. Alert boxes do this:

{% include typography/alert.html
  class="info"
  title="Tip"
  text="Alert boxes come in several colors: **info** (blue), **warning** (yellow), **danger** (red), and **success** (green). Use them sparingly — if everything is highlighted, nothing stands out."
%}

Alert boxes support full Markdown inside, including bold, links, and lists. They're especially useful in instructional essays where you need to flag things readers should pay attention to.


## Block Quotes for Extended Quotations
Block quotes work well when you want to quote an entire paragraph or passage, while pull quotes are better for short, punchy excerpts you want to highlight visually.


> This is a block quote, created by putting a `>` symbol before your text. Use these for extended quotations from primary sources, scholarly works, or historical documents. They're visually distinct from pull quotes—block quotes span the full text width, while pull quotes float to the side.

Sed efficitur leo in magna pretium, euismod malesuada risus interdum. Proin sed libero et enim pulvinar convallis non eget est. Sed ultrices dui vitae enim semper accumsan. Duis quis aliquam nulla. Aenean scelerisque lacus vel pretium viverra.



## The Rhythm of a ScrollStory
By now you've scrolled through several sections and noticed the **rhythm** of a ScrollStory: heading, text, image, text, pull quote, text. This creates a visual cadence that keeps readers engaged without overwhelming them.

**Think about pacing.** Where do readers need a visual break? Where should an image reinforce your argument? When does a pull quote emphasize a key point? These decisions make the difference between a wall of text and an engaging narrative.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium, nibh vel posuere pretium, neque ipsum maximus libero, ac maximus quam ante sit amet dolor. Integer pharetra semper sem sed sagittis. Aliquam in sapien mauris. Aliquam erat volutpat.


## What You've Learned So Far
If you can create this Seedling essay, you can:
- Structure content with section headings
- Add images with captions and source links (both standalone and wrapped with text)
- Place images on either side of the page (left or right)
- Include footnotes for citations
- Use pull quotes for emphasis
- Format block quotes for extended quotations
- Add alert boxes for tips and warnings

**That's enough to create compelling digital scholarship.** The Sapling and Forest essays use addtional Xanthan components, but this foundation works for many projects, especially when just getting used to designing an essay.

Duis eros odio, fringilla et pulvinar vitae, eleifend quis elit. Sed eleifend lectus in bibendum elementum. Vivamus ut velit dignissim, cursus libero nec, commodo orci. Morbi lacus metus, posuere ut pretium ac, malesuada id ligula.


## Ready to Create Your Own?

**New to Xanthan?** Start with the [Getting Started guide](../../../docs/getting-started/) to create your own site first. Once you have a working site, you'll have your own scrollstory you can edit.

Start simple. Get comfortable with the basics. You can always add complexity later by copying and pasting elements from the other essays.

To see more components in action, head over to the [Sapling Essay](../sapling).