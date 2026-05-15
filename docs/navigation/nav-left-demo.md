---
layout: nav-left
title: Left Nav Demo
---

# Left Navigation Sidebar Demo

This page demonstrates the `nav-left` layout, which creates and displays a fixed sidebar on the left side of your page that:
- **Stays visible** as you scroll down the page
- **Takes up 25% of the screen width** on desktop
- **Stacks vertically** on mobile devices
- **Automatically organizes pages** into sections based on your pages' metadata


## How to use it

### 1. Set the layout in your page's front matter:
```yaml
---
layout: nav-left
title: Your Page Title
---
```

### 2. Configure navigation sections in `_data/nav-sections.yml`:
```yaml
sections:
  - name: section-id
    display: "Section Title"
```

### 3. Organize pages with `toc-section` in their YAML:
```yaml
---
layout: default
title: My Page
toc-section: section-id
order: 1
---
```

Pages are automatically grouped and sorted by their `toc-section` and `order` fields.

## Common use cases

- **Course documentation** - Organize lessons or topics in a left sidebar
- **Project portfolios** - Display student essays with organized navigation
- **Collections of essays** - Create a hierarchical structure for related content
- **Documentation sites** - Easy navigation through complex information

## Customization

Edit `assets/css/nav-left.css` to change:
- Sidebar width (currently `25vw`)
- Colors and styling
- Font sizes and spacing
- Animation and transitions

## File structure

```
_layouts/
  nav-left.html          # Layout template
_data/
  nav-sections.yml       # Navigation configuration
assets/css/
  nav-left.css           # Styling
_includes/nav/
  nav-left.html          # Navigation component
```
