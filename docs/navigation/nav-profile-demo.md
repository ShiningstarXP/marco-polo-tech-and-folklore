---
layout: nav-profile
title: Profile Sidebar Demo
---

# Profile Sidebar Demo

This page uses the `nav-profile` layout, which displays a profile sidebar on the left with an image, name, description, and links.

## How it works

The profile sidebar is configured via `_data/nav-profile.yml`. The sidebar displays:

- **Profile image**: A circular profile photo at the top
- **Name and description**: Personal branding and bio information
- **Social links**: Quick links to your website, GitHub, social media, and contact information

## Profile sidebar configuration

Edit `_data/nav-profile.yml` to customize:

```yaml
settings:
  links_font_weight: normal  # or 'bold'

image_url: /assets/images/profile/profile-sample.jpg
alt_text: "Description of your photo"
name: Your Name
description: A brief bio or tagline

links:
  - title: Link Title
    url: https://example.com
    icon: fas fa-icon-name
```

## Icon options

Use Font Awesome icons for links. Common options include:
- `fas fa-globe` - Website
- `fab fa-github` - GitHub
- `fab fa-twitter` - Twitter
- `fab fa-linkedin` - LinkedIn
- `fas fa-envelope` - Email
- `fas fa-university` - University profile
- `fab fa-orcid` - ORCID



## Next steps

1. Add your own profile image in `assets/images/profile`
2. Update the profile data in `_data/nav-profile.yml`
3. Copy this layout to pages where you want the profile sidebar to appear
