---
layout: default
title: Themes
---

{% include nav/scrollspy-toc.html %}

# Themes

If you just want to change a few colors or swap a font, [Colors & Fonts](colors-and-fonts) covers that. A theme is the next step: a coherent visual identity that goes beyond individual tweaks.

## What a theme is (and isn't)

In Xanthan, a "theme" is simply a single CSS file that overrides the defaults. There's no theme marketplace, no plugin system, no configuration wizard. You create a `.css` file, put your style overrides in it, and link it in your site's header. That's it.

This is deliberately different from platforms like WordPress or Squarespace, where "theme" means a complex package of templates, scripts, and settings that you install and configure. In Xanthan, the structure of your site---layouts, includes, navigation---stays the same. A theme only changes how things *look*: colors, fonts, spacing, borders, shadows. You're writing CSS, not installing software.

This keeps things transparent and portable:

- All your visual changes live in one file you can read and understand
- Switching looks means commenting out one line and uncommenting another
- The original `base.css` stays intact as a working reference
- Sharing or troubleshooting your design is straightforward---it's just CSS
- You own the design, because you wrote it

## How Themes Work

CSS files load in order, and later files override earlier ones:

1. `base.css` (defaults)
2. `typography.css`, `nav.css`, `cards.css` (component styles)
3. **Your theme file** (overrides everything above)

Your theme file only needs to include what you're changing---everything else is inherited from the defaults.

---

## Option A: Simple Theme (Colors & Fonts Only)

**Best for:** A different palette without changing layout or structure.

Xanthan includes `simple-theme.css` as a starting point. It shows how to define a color palette and map it to semantic variables.

**To create your theme:**

1. Copy `assets/css/themes/simple-theme.css` to `assets/css/themes/my-theme.css`
2. Edit the color values in the `:root` section
3. Activate in `_includes/page-header.html`:
   ```html
   <link href="{{site.baseurl}}/assets/css/themes/my-theme.css" rel="stylesheet">
   ```

**Example from simple-theme.css:**

```css
:root {
  /* Your color palette */
  --ocean-blue: #2c5f7c;
  --cloud-white: #f7f9fb;
  --pearl: #e8eef2;

  /* Map to semantic variables */
  --bg-page: var(--cloud-white);
  --accent-primary: var(--ocean-blue);
  --text-body: var(--charcoal);
}
```

The file includes detailed comments explaining each variable.

---

## Option B: Advanced Theme (Full Customization)

**Best for:** Changing visual styles beyond colors---typography, navigation, component styling.

Study `dark-energy.css` to see what's possible. It demonstrates:
- Color variable overrides
- Typography customization (sizes, transforms, weights)
- Navigation styling (custom underlines)
- Component theming (cards, buttons, pullquotes)

**To use dark-energy.css:**

1. In `_includes/page-header.html`, uncomment:
   ```html
   <link href="{{site.baseurl}}/assets/css/themes/dark-energy.css" rel="stylesheet">
   ```
2. Save and refresh

**To create your own advanced theme:**

Copy `assets/css/themes/dark-energy.css` as a starting point and modify the element overrides to match your design vision.

---

## Included Themes

**Terra Cotta** (`terra-cotta.css`) - The original Xanthan aesthetic with warm, earthy colors. A simple theme (variables only) showing the original design.

Activate any theme by uncommenting its link in `_includes/page-header.html`.

## Best Practices

- **Override only what you need** - smaller files are easier to maintain
- **Use the two-tier color system** - named colors + semantic variables
- **Add comments** - explain your design decisions for your future self
- **Test thoroughly** - check all page types with your theme
- **Keep base.css untouched** - preserve it as a fallback

---

## Switching Themes

To switch between themes, edit `_includes/page-header.html`:

- Comment out your current theme's `<link>` tag with `<!--` and `-->`
- Uncomment a different theme's `<link>` tag
- Save and refresh

---

## Troubleshooting

**Theme not showing:**
- Check the CSS file path in `page-header.html`
- Make sure the `<link>` tag is uncommented
- Confirm the file exists in `assets/css/themes/`

**Some elements unchanged:**
- Your selector might need to be more specific
- Try adding `!important` to the property: `color: var(--teal) !important;`
- Check if another CSS file is overriding your changes

---

## Next Steps

- Compare palettes with the [Color Palettes](../reference/color-palettes) tool
- See [Colors & Fonts](colors-and-fonts) for quick tweaks without a theme file
- Explore [Using AI](../using-ai/) to help build your theme
