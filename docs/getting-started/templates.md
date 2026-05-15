---
layout: default
title: Choose a Template
date: 2026-02-14
---

<style>
.template-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-md);
}

.template-btn-row {
  display: flex;
  gap: var(--spacing-xs);
}

.template-btn {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.9rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--sage-pale);
  background: rgba(178, 205, 188, 0.3);
  color: var(--sage-deep);
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  flex: 1;
}

.template-btn:hover {
  background: rgba(245, 158, 11, 0.25);
  border-color: var(--interactive-hover);
  color: var(--sage-deep);
}

.template-btn.primary {
  background: var(--accent-primary);
  color: var(--white);
  border-color: var(--accent-primary);
  width: 100%;
  flex: none;
  font-weight: 600;
}

.template-btn.primary:hover {
  background: var(--interactive-hover);
  border-color: var(--interactive-hover);
}

.template-btn.placeholder {
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
}
</style>

{% include nav/scrollspy-toc.html %}

# Choose a Template

Xanthan offers four starting points, each designed for a different kind of project. Pick the one closest to what you're building---you can always add features later.

Browse the options below. See a live example, explore the clean starting template, then click "Use this template" on GitHub to make it your own.

---

## Portfolio

{% capture portfolio_text %}
A personal or professional site for presenting your work, interests, and credentials. Comes with an about page, a CV, and sample project pages---the kind of structure that helps you own your professional identity rather than renting it from LinkedIn. This is the most common starting point for individual projects: a handful of pages with a clear top navigation bar connecting them.

<div class="template-buttons">
  <div class="template-btn-row">
    <a class="template-btn" href="https://xanthan-web.github.io/alexandra-ruiz/" target="_blank">Live example</a>
    <a class="template-btn" href="https://xanthan-web.github.io/portfolio-template" target="_blank">View template</a>
  </div>
  <a class="template-btn primary" href="./?template=portfolio">Use this template →</a>
</div>
{% endcapture %}

{% include images/figure-wrap.html
  image-path="/assets/images/gallery/portfolio-screenshot.png"
  image-position="right"
  image-width="45%"
  alt-text="Portfolio template screenshot"
  text=portfolio_text
%}

---

## Class Project

{% capture class_project_text %}
This template shows how you might organize many individual scrollstories or pages of any kind that belong together as a collection. Card-based directory pages organize contributions automatically, so the site grows as people add to it. The instructor sets up the structure; students follow clear directions to fill it in.

<div class="template-buttons">
  <div class="template-btn-row">
    <a class="template-btn" href="https://amaranth.unm.edu/campus-history/" target="_blank">Live example</a>
    <a class="template-btn" href="https://xanthan-web.github.io/class-project-template" target="_blank">View template</a>
  </div>
  <a class="template-btn primary" href="./?template=class-project">Use this template →</a>
</div>
{% endcapture %}

{% include images/figure-wrap.html
  image-path="/assets/images/gallery/class-project-screenshot.png"
  image-position="right"
  image-width="45%"
  alt-text="Class Project template screenshot"
  text=class_project_text
%}

---

## ScrollStory

{% capture scrollstory_text %}
Sometimes a whole website is overkill, and what you really want to make is a single immersive narrative. The scrollstory template gives you a main scrollstory page (of course you can always add more), where background images shift as you scroll, text panels slide in from the side, and the reading experience becomes part of the argument. If you've used ESRI StoryMaps this will seem very familiar, but it's driven with simple text files that are super quick to edit.

<div class="template-buttons">
  <div class="template-btn-row">
    <a class="template-btn" href="https://amaranth.unm.edu" target="_blank">Live example</a>
    <a class="template-btn" href="https://xanthan-web.github.io/scrollstory-template" target="_blank">View template</a>
  </div>
  <a class="template-btn primary" href="./?template=scrollstory">Use this template →</a>
</div>
{% endcapture %}

{% include images/figure-wrap.html
  image-path="/assets/images/gallery/forest-scroll.gif"
  image-position="right"
  image-width="45%"
  alt-text="ScrollStory template example"
  text=scrollstory_text
%}

---


## Not sure?

**Don't worry!** The difference between the templates is usually a few files. All the component functionality comes with each template. You can easily add or delete files from whatever template you start with. That flexibility is the whole point of Xanthan!