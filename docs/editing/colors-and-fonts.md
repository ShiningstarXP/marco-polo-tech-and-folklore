---
layout: default
title: Colors & Fonts
---

<style>
.color-lab {
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--spacing-lg) 0;
}

.color-lab-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-medium);
}

.color-control label {
  display: block;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 4px;
  font-weight: 500;
}

.color-control input[type="color"] {
  display: block;
  width: 100%;
  height: 32px;
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-sm);
  cursor: pointer;
  padding: 2px 4px;
  background: none;
}

.color-lab-preview {
  padding: var(--spacing-lg) var(--spacing-xl);
}

.color-lab-preview h3 {
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
}

.color-lab-preview p {
  margin: 0 0 0.75rem;
  line-height: 1.6;
}

.color-lab-preview a {
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: none;
  border-bottom: 1px solid;
}

.lab-card {
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  line-height: 1.5;
}

.color-lab-output {
  background: var(--bg-code);
  padding: var(--spacing-md);
  border-top: 1px solid var(--border-medium);
}

.color-lab-output .lab-output-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.color-lab-output pre {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  white-space: pre;
  line-height: 1.6;
}
</style>

{% include nav/scrollspy-toc.html %}

# Colors & Fonts

Your site's visual identity shapes how readers experience the work itself. A cool palette with spare layout carries different weight than something warm and textured. A scholarly serif heading reads differently than a clean sans-serif. These are rhetorical choices, not just aesthetic ones, and they're entirely yours to make.

Xanthan keeps all visual decisions — colors, fonts, spacing — in a single file: `assets/css/base.css`. Understanding a little about how that file works will let you make changes with confidence.

---

## How the variable system works

Rather than styling each element individually, `base.css` uses named variables. Think of it like a publisher's house style: you define a small palette of colors with human-readable names, then assign those names to roles — background, body text, accent, card surface. Change a color in the palette and it updates everywhere that color appears. Swap which color plays which role, and you shift the whole composition without touching the underlying palette.

Here's what that looks like in the file:

```css
/* Named colors — your raw palette */
--sage: #6b8e7f;
--warm-white: #f5f3f0;
--golden-clay: #b8956a;

/* Semantic roles — what each color does */
--bg-page: var(--warm-white);
--text-body: var(--sage-dark);
--accent-primary: var(--sage);
```

The first group is material — just colors with names. The second group is decision — which color plays which part. Most of the time, you'll only need to change one of these groups.

The four variables that make the biggest visual difference:

| Variable | Controls |
|---|---|
| `--bg-page` | Page background |
| `--text-body` | Body text |
| `--accent-primary` | Links, buttons, highlights |
| `--bg-card` | Card and panel backgrounds |

---

## Try it

Use the color pickers below to explore how these four variables interact. The preview updates live. When you find something you like, the CSS snippet at the bottom shows exactly what to paste into `base.css`.

<div class="color-lab">
  <div class="color-lab-controls">
    <div class="color-control">
      <label for="lab-bg-page">Page background</label>
      <input type="color" id="lab-bg-page" value="#f5f3f0">
    </div>
    <div class="color-control">
      <label for="lab-text-body">Body text</label>
      <input type="color" id="lab-text-body" value="#2d3e35">
    </div>
    <div class="color-control">
      <label for="lab-accent">Accent / links</label>
      <input type="color" id="lab-accent" value="#6b8e7f">
    </div>
    <div class="color-control">
      <label for="lab-bg-card">Card background</label>
      <input type="color" id="lab-bg-card" value="#e8e4df">
    </div>
  </div>

  <div id="lab-preview" class="color-lab-preview">
    <h3 id="lab-heading">Research Overview</h3>
    <p id="lab-body">This is what your body text looks like at reading length. Good typography — the right color contrast, size, and spacing — lets readers follow an argument without effort.</p>
    <a id="lab-link" href="#">View the full project →</a>
    <div id="lab-card" class="lab-card">
      <strong>A card component</strong> — used across the site for collections, navigation, and featured content.
    </div>
  </div>

  <div class="color-lab-output">
    <div class="lab-output-label">Paste into base.css ↓</div>
    <pre id="lab-code"></pre>
  </div>
</div>

<script>
(function() {
  var inputs = {
    bg:     document.getElementById('lab-bg-page'),
    text:   document.getElementById('lab-text-body'),
    accent: document.getElementById('lab-accent'),
    card:   document.getElementById('lab-bg-card')
  };
  var preview = document.getElementById('lab-preview');
  var heading = document.getElementById('lab-heading');
  var body    = document.getElementById('lab-body');
  var link    = document.getElementById('lab-link');
  var card    = document.getElementById('lab-card');
  var code    = document.getElementById('lab-code');

  function update() {
    var bg     = inputs.bg.value;
    var text   = inputs.text.value;
    var accent = inputs.accent.value;
    var cardBg = inputs.card.value;

    preview.style.backgroundColor = bg;
    heading.style.color = text;
    body.style.color    = text;
    link.style.color    = accent;
    link.style.borderBottomColor = accent;
    card.style.backgroundColor = cardBg;
    card.style.color = text;

    code.style.color = text;
    code.textContent =
      '--bg-page: '       + bg     + ';\n' +
      '--text-body: '     + text   + ';\n' +
      '--accent-primary: '+ accent + ';\n' +
      '--bg-card: '       + cardBg + ';';
  }

  Object.keys(inputs).forEach(function(k) {
    inputs[k].addEventListener('input', update);
  });

  update();
})();
</script>

---

## Applying your changes

Open `assets/css/base.css` in your editor. Use Cmd-F / Ctrl-F to search for the variable name you want to change — for example, `--accent-primary`. You'll find it in the `:root { }` block near the top of the file.

You can paste a hex color directly:

```css
--accent-primary: #5b7fa6;
```

Or define a named color first and reference it — useful if you plan to use the same color in multiple places:

```css
--slate-blue: #5b7fa6;
--accent-primary: var(--slate-blue);
```

Both work the same way. Save the file. If you're previewing locally with `bundle exec jekyll serve`, the page will refresh automatically. If you're working through GitHub, push your change and wait a minute for the site to rebuild.

---

## Changing fonts

Fonts work the same way — three variables control almost everything you see:

```css
--font-heading: 'Lora', serif;
--font-body: 'Source Sans 3', sans-serif;
--font-mono: 'Fira Mono', monospace;
```

To use a different font, you need two things: an import that fetches it from the web, and the variable that tells the site to use it.

[Google Fonts](https://fonts.google.com/) is the easiest source. Find a font you like, click "Get font," then "Get embed code," and copy the `@import` line. Paste it at the very top of `base.css`, before anything else, then update the corresponding variable in `:root`:

```css
/* At the very top of base.css */
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap');

/* In the :root block */
--font-body: 'EB Garamond', serif;
```

The font name in the `@import` URL and in the variable value must match exactly, including capitalization.

A few that work well for academic and humanities sites:

| Font | Character | Works well for |
|---|---|---|
| **Lora** | Literary, slightly formal | Body text in longer essays |
| **EB Garamond** | Classic, scholarly | Traditional academic feel |
| **Source Serif 4** | Clean, readable | General use, mixed content |
| **Playfair Display** | Elegant, high-contrast | Display headings |
| **Inter** | Modern, neutral | Navigation, UI, captions |

---

## Color tools worth knowing

- **[Coolors](https://coolors.co/)** — Generate palettes and browse curated combinations
- **[Adobe Color](https://color.adobe.com/)** — Build palettes from color theory principles
- **[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)** — Paste two hex codes to check whether text is readable against a background

Contrast is worth checking before you commit to a color scheme. A soft sage on warm white might look elegant and still fail accessibility standards for body text at small sizes.

---

## Troubleshooting

**Colors didn't change after saving:**
Clear your browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows). If you're on GitHub Pages, confirm your change was pushed and that the build completed successfully.

**Only some elements changed:**
Not every element uses the four main semantic variables. Navigation, page headers, and some components have their own rules in `nav.css`, `page-header.css`, and elsewhere. Use your browser's Inspect tool (right-click any element → Inspect) to see exactly which CSS rule is controlling a given color.

**A font isn't loading:**
Check that the `@import` line is the very first thing in `base.css` — before even the comment block. Confirm the font name in the URL matches the variable value exactly, including spaces and capitalization.
