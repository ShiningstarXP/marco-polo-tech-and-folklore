---
title: Using AI Assistance
layout: default
date: 2026-02-16
---

{% include nav/scrollspy-toc.html %}

# Using AI Assistance

Most website frameworks assume you'll learn their technical stack before you can shape your site. Xanthan takes a different approach: its architecture is designed to be legible---not just to you, but to AI assistants. This means you can describe what you want in plain language and get results that actually work, because the AI can read the same structure you're working with.

This isn't a gimmick. It changes what's practical. Tasks that would normally require hours of learning CSS, HTML, or template syntax---redesigning your color palette, adding a new page with image carousels, building a ScrollStory section---become conversations. You describe what you want. The AI proposes changes. You look at the result and decide: yes, no, or try again. You stay in the editorial role; the AI handles the implementation.

## Why Xanthan works well with AI

Most websites are a tangle of files where changing one thing can break something else in unpredictable ways. Xanthan is structured differently. Colors, fonts, and spacing are controlled by named variables, so the AI can change your entire palette in one place and have it cascade consistently. Components like image figures, alert boxes, and carousels have documented parameters, so the AI knows exactly what's available and how to use it. Files are organized by purpose, so the AI knows where to make changes without guessing. And your navigation menu is just a simple structured list, so reorganizing your site is a conversation, not a puzzle.

In practice, this means prompts like *"give my site a warmer, more earthy feel"* or *"add a before/after image slider comparing these two photos"* produce working results---because the AI can read the design system and work within it.

## The range of what's possible

If you've never used AI for anything technical, start with something small: [Your First AI Edit](first-edit) walks through changing a color, swapping a font, and asking the AI to explain what it's doing. These are genuinely useful tasks, and they'll show you how the conversation works.

Once you've seen how it feels, the range opens up considerably. You can reshape the entire look of your site---colors, fonts, spacing---with a single conversation. You can ask the AI to create new pages, build a project gallery, or set up a card-based directory. You can add components like image carousels, before/after sliders, and audio players. You can build ScrollStory sections with background images and side-scrolling text panels. And when something isn't working, you can ask the AI to explain what's happening and walk you through the fix.

See [Building with AI](prompts) for specific examples across all of these.

## Getting started: three ways in

There's no single right way to work with AI. Start wherever you're comfortable.

### 1. Browser-based chat (no setup required)

The simplest approach: open [ChatGPT](https://chatgpt.com), [Claude](https://claude.ai), or any AI chat interface in your browser. Describe what you want, then paste in the relevant piece of your code. No software to install, no accounts beyond what you likely already have.

Start by giving the AI a quick orientation:

> *"I'm working on a website built with the Xanthan framework, which uses Jekyll, Markdown, and named CSS custom properties. I want to [describe your goal]. Here's the relevant file:"*

Then paste the file contents. The AI will suggest changes you can copy back into your file.

This works well for focused questions: tweaking a color, fixing a page that won't display, adding an image, changing a heading.

### 2. GitHub Copilot in your browser (repo-aware, free for students)

GitHub has a built-in AI assistant that can read your entire repository---no copy-pasting required. If you have a GitHub account, you can open it by clicking the Copilot icon at the top of any repository page.

Because it can see all your files, it can answer questions like *"why isn't my nav menu showing up?"* or *"what pages have this template set in their front matter?"* without you having to explain your file structure first.

GitHub Copilot is free for students and educators through [GitHub Education](https://education.github.com/).

### 3. Local setup with an AI-enabled editor (most capable)

For more substantial work---building ScrollStory sections, restructuring your site, making changes across many files---a local editing environment with an integrated AI assistant is the most capable option. The AI can read and edit your files directly, and you can preview changes instantly.

See [Editing Workflows](../editing/) for how to set up local editing, then add one of these AI tools:

- **GitHub Copilot** in VS Code --- free for students and educators ([apply](https://education.github.com/))
- **Continue** --- free and open source ([VS Code extension](https://marketplace.visualstudio.com/items?itemName=Continue.continue))
- **Cursor** --- an AI-first editor that replaces VS Code ([download](https://cursor.sh))

## Giving AI context about your project

However you're working, the AI does better when it knows what it's looking at. A quick orientation at the start of a conversation goes a long way:

> *"I'm working on a website built with the Xanthan framework. Design variables are in assets/css/base.css. Reusable components are in _includes/. Navigation is configured in _data/nav-top.yml."*

You only need to say this once per conversation. After that, the AI will make suggestions that fit Xanthan's patterns rather than generic web development advice.

For even better results, paste a section of the [Component Library](../reference/component-library) or [Pages & Front Matter](../reference/pages-and-front-matter) reference when asking about a specific topic.

## You're the editor

This is worth saying plainly: using AI to build your site doesn't mean the AI is making decisions for you. You describe what you want. The AI translates that into code. You look at the result and judge whether it's right. If it's not, you say what's wrong and the AI tries again.

This is the same relationship an author has with a typesetter, or a director has with a camera operator. The technical skill is real, but the vision is yours. The AI can write CSS; it can't tell you whether your site should feel warm or clinical, whether your images should be large and dramatic or small and documentary. Those are your calls.

## Privacy note

When using AI assistants, your code is sent to the AI service for processing. Don't include sensitive information (passwords, API keys) in files where you're using AI assistance. Most educational licenses and free tiers are appropriate for academic and personal sites.

## Next steps

- **New to AI-assisted editing?** Start with [Your First AI Edit](first-edit)
- **Ready for more?** Browse [Building with AI](prompts) for ideas organized by what you're trying to accomplish
