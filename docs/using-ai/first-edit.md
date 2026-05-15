---
title: Your First AI Edit
layout: default
date: 2026-02-16
---

{% include nav/scrollspy-toc.html %}

# Your First AI Edit

This page is for people who have never used AI to make a technical change. We'll walk through a few real edits---changing a color, swapping a font, asking the AI to explain what's happening---so you can see how the conversation works before trying anything ambitious.

You'll need VS Code open with your Xanthan site and an AI assistant installed. If you haven't set that up yet, see the [setup instructions](./).

---

## How it works

AI assistants in VS Code have a chat panel where you type requests in plain language. You describe what you want; the AI reads your project files and suggests changes. You review the suggestion, accept or reject it, save the file, and refresh your browser to see the result.

That's the whole cycle: **ask, review, save, refresh.** Everything that follows is just variations on this pattern.

---

## Try it: change a color

Open the AI chat panel in VS Code and type:

> *"Change the main highlight color on my site to a deep teal."*

That's it. You don't need to know which file controls colors, what the color is called in the code, or how colors work on websites. The AI figures all of that out.

Here's what will happen: the AI will find the file that controls your site's visual design (`base.css`) and locate a variable called something like `--accent-primary`---that's the name your site uses internally for its highlight color. It will suggest changing that value to a teal, and it should also adjust related colors (what links look like when you hover over them, border colors, button backgrounds) so everything stays harmonious. You'll see a preview of the changes. Accept them, save the file, and refresh your browser.

**What you just learned (without having to study anything):** Your site's colors are controlled by named variables in a single file. Change one variable, and the new color ripples across every page. You didn't need to know that going in---but now you do, and your next request to the AI can be more precise because of it.

**If it's not quite right:** Tell the AI. "That's too green---more blue-teal, like the ocean." AI conversations are iterative. Refining is normal, not a sign that something went wrong.

---

## Try it: swap a font

> *"Change my heading font to something that feels academic but not stuffy---a serif typeface, maybe something like what you'd see in a university press book."*

Notice you're describing a *feeling*, not a technical specification. You don't need to know font names, or how fonts get loaded onto websites, or which file controls typography. "Academic but not stuffy" is enough for the AI to make a smart suggestion.

Behind the scenes, the AI is doing two things: loading a new font (probably from Google Fonts, a free library of web typefaces) and updating the variable that controls heading fonts across your site. You might see it editing two different spots---that's normal. Accept the changes, save, and refresh.

**You might not love the first suggestion.** That's fine---it's a starting point. "That's too formal, something a little more modern" or "I like it but can we try one with a bit more personality?" are exactly the kind of feedback that gets you to the right answer. The AI will suggest alternatives, and you pick the one that fits.

---

## Try it: ask the AI to explain something

Open the file the AI edited in the color exercise (`base.css`) and highlight a chunk that looks unfamiliar---maybe the section with all the `--spacing` or `--radius` variables. Then ask:

> *"What does this section do? Explain it like I've never seen CSS before."*

The AI might say something like: *"These are spacing variables. `--spacing-sm` is a small gap, `--spacing-md` is a medium one, and `--spacing-lg` is a large one. Whenever the site needs space between elements---between a heading and a paragraph, between cards in a grid---it uses one of these instead of a raw number. That way you can make the whole site feel more spacious or more compact by adjusting a few values here."*

Now you know what "spacing variables" are, and you know the names. Next time you want to tighten up the space between sections, you can tell the AI *"reduce `--spacing-lg` a bit"* instead of *"make things less spread out."* Both will work, but the first gets you exactly what you want on the first try.

**This is the real payoff of asking for explanations: you learn the vocabulary.** Every term you pick up---*variable*, *accent color*, *media query*, *front matter*---makes your next prompt more precise and gives you more control over the result. You don't need to study these terms in advance. You learn them by working with the materials and asking questions as they come up.

You don't have to memorize anything. But knowing that you *can* ask---and get a clear, patient answer---changes the dynamic. The code stops being a black box, and you start making editorial decisions with real understanding of what you're choosing between.

---

## How to ask well

The specificity of your prompt shapes the quality of the result. Compare:

| Vague | Specific |
|-------|----------|
| "Change the colors" | "Give my site a warm palette---cream background, dark brown text, rust-colored accents" |
| "Make text bigger" | "Increase the body font size slightly and add more line spacing for readability" |
| "Fix the spacing" | "There's too much space between the navigation bar and the page title---reduce it" |
| "Add an image" | "Add a right-aligned image with a caption in my about page, using the figure include" |

The specific versions tell the AI *what*, *where*, and *what feeling you're after*. The vague versions force the AI to guess, and it will often guess wrong.

**Referencing Xanthan concepts helps too.** If you know you're working with a "card grid" or a "jumbotron" or "front matter," use those terms. The AI will recognize them and make changes in the right place. But if you don't know the term, describe what you see: "the big image at the top of the page" works fine.

---

## When things don't look right

This will happen. It's normal and easy to fix:

- **Undo** --- press `Cmd+Z` (Mac) or `Ctrl+Z` (Windows) to reverse the change instantly
- **Be more specific** --- "That's too dark, make the background lighter" or "I meant only the headings, not all the text"
- **Ask for alternatives** --- "What are other ways to do this?" often surfaces better approaches
- **Ask why** --- "Why does it look different on this page?" helps diagnose when a change doesn't apply the way you expected

The AI doesn't get offended by feedback. Tell it what's wrong, and it'll adjust.

---

## What you're learning without trying

After a few of these conversations, you'll start to notice things---not because you sat down to study, but because you've been working with the materials:

- That colors and fonts live in `base.css` and use variables with names like `--accent-primary`
- That spacing uses a consistent system (`--spacing-sm`, `--spacing-md`, `--spacing-lg`)
- That components are included with `{% raw %}{% include ... %}{% endraw %}` tags and have parameters
- That your site's navigation is just a YAML file listing page titles and URLs

None of this is required knowledge. But it accumulates naturally, and each piece makes your next conversation with the AI more precise and productive.

---

## Next step

Now that you've seen how the cycle works---ask, review, save, refresh---you're ready for more substantial changes. [Building with AI](prompts) has examples organized by what you're trying to accomplish, from reshaping your site's visual identity to building entire new pages.
