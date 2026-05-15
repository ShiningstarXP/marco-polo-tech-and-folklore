---
title: Peekaboo Images
layout: default
date: 2026-02-27
---

{% include nav/scrollspy-toc.html %}

# Peekaboo Images

## How it works

A peekaboo image stays fixed in place while the page scrolls down to reveal it—the opposite of a jumbotron, which moves with the page. As the reader scrolls, the content above slides away and the image comes into view; once fully visible, the page continues scrolling normally with content passing over it.

This is a ScrollStory technique at heart. It works in any page layout, but it's most effective in longer narrative pages where you want a cinematic visual pause between sections.

## Basic usage

The simplest peekaboo uses just `height` and `image-path`. The image stays fixed until fully revealed, then the page scrolls over it.

```
{% raw %}{% include scrollybox/bg.html
  height="60vh"
  image-path="/assets/images/backgrounds/pano-1.jpg"
%}{% endraw %}
```

{% include scrollybox/bg.html
  height="60vh"
  image-path="/assets/images/backgrounds/pano-1.jpg"
%}

## With a text overlay

You can add a text box that scrolls up over the image after it's revealed. Use `above-box-space` to push the box below the initial viewport, and `below-box-space` to add breathing room after it.

```
{% raw %}{% include scrollybox/bg.html
  height="80vh"
  image-path="/assets/images/backgrounds/pano-1.jpg"
  above-box-space="40vh"
  below-box-space="20vh"
  box-content="
  ### Something Worth Pausing For

  The text box scrolls up over the image, then the page continues normally.
  "
%}{% endraw %}
```

{% include scrollybox/bg.html
  height="80vh"
  image-path="/assets/images/backgrounds/pano-1.jpg"
  above-box-space="40vh"
  below-box-space="20vh"
  box-content="
  ### Something Worth Pausing For

  The text box scrolls up over the image, then the page continues normally.
  "
%}

## Parameters

| Parameter | Default | What it does |
|-----------|---------|--------------|
| `image-path` | (required) | Path to the background image |
| `height` | `100vh` | How tall the reveal area is; controls how long the pause lasts |
| `above-box-space` | (none) | Space above the text box; delays when it appears |
| `below-box-space` | (none) | Space below the text box; extends the pause after text has scrolled away |
| `box-content` | (none) | Markdown content for the text overlay |
| `background-position` | `center` | CSS `background-position`; aim the subject |

## Peekaboo vs. jumbotron

| | Jumbotron | Peekaboo |
|--|-----------|----------|
| Scrolls with page | Yes | No — stays fixed |
| Good for | Visual breaks, section dividers | Cinematic reveals, narrative pauses |
| Text overlay | Gradient fade | Scrolling box |
| Include | `images/jumbotron.html` | `scrollybox/bg.html` |

For more scrolling narrative techniques, see the [ScrollStories overview](.).
