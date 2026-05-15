# Changelog

All notable changes to Xanthan will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-03-04

### Added
- New gallery component and docs updates to support richer visual examples
- Expanded AI-focused documentation and onboarding guidance
- Optional Google Analytics support with safer config patterns for local/private setup
- New docs styling support and layout refinements for `/docs/` pages

### Changed
- Migrated core layout patterns away from Bootstrap toward CSS Grid-based structure
- Renamed `header-image` usage to `page-header` in layout styling patterns
- Improved getting-started workflow, docs index readability, and navigation organization
- Updated template sync/workflow behavior and supporting automation metadata

### Fixed
- Improved link handling with better `baseurl` behavior
- Multiple navigation and docs-link consistency fixes
- Additional styling/spacing cleanup across typography and page sections

## [1.1.0] - 2026-01-04

### Added
- **Documentation auto-sync to templates**: All Xanthan documentation now automatically syncs to template repositories, ensuring docs always match code version
- **Centralized `/docs/` folder**: All documentation organized in clean `/docs/` structure (getting-started, content-design, navigation, scrollstories)
- **Documentation landing page**: New `/docs/index.md` provides organized access to all documentation sections
- **Template sync workflow**: Automated GitHub Actions workflow syncs code, docs, and examples from main Xanthan repo to all template repositories
- **Profile sidebar CSS**: New `sidebar.css` for portfolio-template with proper image sizing and responsive design

### Changed
- **ScrollStory examples location**: Moved from `/scrollstories/examples/` to `/scrollstories/` for cleaner structure
- **Documentation paths**: All internal links updated to use `/docs/` prefix for consistency
- **About and FAQs location**: Kept at root level (not synced to templates) as they're specific to main Xanthan site
- **Navigation structure**: Updated `top-nav.yml` to reflect new `/docs/` paths

### Fixed
- Profile sidebar image sizing issue in portfolio-template
- All internal documentation links updated to new structure

## [1.0.0] - 2026-01-01

- **Added**: First major release of Xanthan! Beginner-friendly web templates and extensive documentation for academics, educators, and students to build professional websites and collaborative projects with GitHub Pages.

- Start here: https://xanthan-web.github.io/


## Future Releases

Starting with 1.1.0, this changelog will document:
- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability patches

[1.2.0]: https://github.com/xanthan-web/xanthan-web.github.io/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/xanthan-web/xanthan-web.github.io/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/xanthan-web/xanthan-web.github.io/releases/tag/v1.0.0
