---
title: Troubleshooting
layout: default
date: 2026-02-16
---

# Troubleshooting

{% include nav/scrollspy-toc.html %}

Minor errors are a normal part of editing---they happen to everyone, and they're almost always easy to fix. Most issues come down to a small typo, a mismatched filename, or a missing character. This page helps you figure out what's going on, fix it, and move on. None of these problems are deep technical rabbit holes. They're the equivalent of a missing period at the end of a sentence: once you see it, the fix is obvious.

**When in doubt, paste the error message into your AI assistant.** It will usually tell you exactly what's wrong and where to fix it. That's often the fastest path to a solution.

---

## Images not showing

This is the most common issue, and the fix is almost always one of three things.

### 1. The filename doesn't match exactly

This is the number one cause. Filenames are case-sensitive and must match character for character---including the extension.

- `photo.jpg` is not the same as `Photo.jpg` or `photo.JPG`
- `.jpg`, `.jpeg`, and `.png` are all different extensions
- Spaces in filenames can cause problems (use hyphens instead: `my-photo.jpg`)

**How to check:** Look at the actual filename in your repository (in the `assets/images/` folder or wherever you uploaded it) and compare it letter by letter to what's in your code. Pay close attention to capitalization and the file extension.

### 2. The file path doesn't match the actual location

Your image code has to point to exactly where the file lives in your repository. If the image is at `assets/images/projects/photo.jpg` but your code says `assets/images/photo.jpg`, it won't show up.

**How to check:** In GitHub, navigate to the image file and look at the path in the URL bar or the breadcrumb trail at the top of the page. That's the path your code needs to use.

### 3. Relative vs. absolute paths

This is the one that confuses people most, but the rule is simple:

- **Absolute path** (starts with `/`): `/assets/images/photo.jpg` --- works from any page on your site, because it starts from the root. **Use this by default.**
- **Relative path** (no leading `/`): `images/photo.jpg` --- looks for the image relative to the current page's folder. This works fine if the image is in the right place relative to that specific page, but it will break if you move the page or use the same code on a different page.

If an image works on one page but not another, this is almost certainly why.

---

## Site not updating

**Symptom:** You made changes and committed them, but your site looks the same after several minutes.

**What's probably happening:** A syntax error is preventing your site from building. GitHub tried to rebuild your site, hit the error, and stopped. Your site stays on the last working version until the error is fixed.

The two most common causes are a typo in a [component include tag](#syntax-errors-in-includes) or a problem with the [front matter](#front-matter-errors) at the top of a page. Both are minor and easy to fix once you find them.

### How to find the error

1. Go to your repository on GitHub
2. Click the **Actions** tab (in the top menu, next to "Pull requests")
3. Look at the most recent workflow run---if it has a red X, the build failed
4. Click on that run, then click on the step called **"Build with Jekyll"**
5. Scroll through the output until you see text in red. That's your error message

### How to fix it

The error message usually tells you what went wrong and which file it's in. It looks something like:

```
Liquid Exception: Liquid syntax error (line 42): Expected end_of_string...
  in /home/runner/work/my-site/essays/water-rights.md
```

This tells you there's a syntax error on line 42 of `essays/water-rights.md`---probably a missing `%}` or a mismatched quote.

**If the error message makes sense to you:** Go to the file, find the line, fix the typo, and commit the change. GitHub will automatically try to rebuild.

**If the error message doesn't make sense:** Copy the entire error message and paste it into your AI assistant with a question like *"My Jekyll site won't build. Here's the error message---what's wrong and how do I fix it?"* The AI will tell you exactly which file to edit and what to change.

After you commit the fix, go back to the **Actions** tab and wait for the new build (1-2 minutes). A green checkmark means your site is live again.

---

## Syntax errors in includes

Includes are how you add components to your pages---images, alerts, carousels, audio players. They look like `{%raw%}{% include images/figure.html ... %}{%endraw%}` and have parameters that tell the component what to display. They're just text with a very specific format, which means typos in the wrong place can prevent your site from building. The errors are always small (a missing character, a mismatched quote), but they can be hard to spot because the syntax is unfamiliar. These are one of the most common reasons a [site stops updating](#site-not-updating).

**Symptom:** A component isn't rendering, or your site won't build and the error mentions "Liquid syntax."

Here are the usual culprits:

### Missing or wrong delimiters

The opening tag must be `{%raw%}{%{%endraw%}` and the closing must be `{%raw%}%}{%endraw%}`. Missing or wrong characters will break the build.

```liquid
{%raw%}❌ { include images/figure.html %}        ← missing %
❌ {% include images/figure.html }        ← missing %
✅ {% include images/figure.html %}{%endraw%}
```

### Mismatched quotes

Every opening quote needs a matching closing quote of the same type.

```liquid
{%raw%}❌ {% include images/figure.html caption="broken' %}     ← " and '
✅ {% include images/figure.html caption="works" %}{%endraw%}
```

### Missing closing tag

If an include spans multiple lines, it's easy to forget the closing `{%raw%}%}{%endraw%}`:

```liquid
{%raw%}❌ {% include images/figure.html
     image-path="/assets/images/photo.jpg"

✅ {% include images/figure.html
     image-path="/assets/images/photo.jpg"
%}{%endraw%}
```

---

## Front matter errors

Front matter is the small block of settings at the top of every page---it tells the site the page's title, which layout to use, and other details. It's just a few lines of plain text between two rows of dashes. If the formatting is slightly off (a missing dash, an extra blank line), the page either won't build or will render as unstyled text. Like include errors, these are typos, not deep technical problems, and they're the other common reason a [site stops updating](#site-not-updating).

**Symptom:** A page won't build, or it renders as raw text without any styling.

Every page needs front matter at the very top of the file---three dashes, a few fields, three more dashes:

```yaml
---
title: My Page
layout: default
date: 2024-12-02
---

# Page content starts here
```

**Common mistakes:**
- Blank lines before the first `---` (it must be the very first line of the file)
- Two dashes `--` instead of three `---`
- Missing the closing `---`
- Using tabs instead of spaces for indentation (YAML requires spaces)
- A colon in a title without quotes: `title: My Project: Phase 2` should be `title: "My Project: Phase 2"`

---

## Links not working

**Symptom:** Clicking a link gives a 404 error.

**Check the file extension.** Link to `/about`, not `/about.md`. Jekyll converts Markdown files to HTML automatically, so the URL drops the `.md` extension.

```markdown
❌ [About me](about.md)
✅ [About me](about)
✅ [About me](/about)
```

**Check the path.** If a page is at `essays/water-rights.md`, the URL is `/essays/water-rights`. Make sure your link matches the file's actual location in your repository.

**Check baseurl.** If your site is a project site (like `username.github.io/my-project/` rather than just `username.github.io`), make sure `baseurl` in `_config.yml` is set to `/my-project`. This affects how all paths resolve.

---

## Styles not applying

**Symptom:** You changed something in a CSS file but your site looks the same.

**Try a hard refresh first.** Browsers cache CSS files aggressively. Force a fresh load:
- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

If that doesn't help:

- **Check the file location** --- CSS files should be in `assets/css/` and linked in `_includes/page-header.html`
- **Check for CSS syntax errors** --- a missing semicolon or unclosed bracket can cause everything after it to be ignored. Your AI assistant can spot these instantly if you paste the file contents

---

## Using AI to troubleshoot

Your AI assistant is often the fastest way to solve problems you can't diagnose yourself. Here are some prompts that work well:

> *"My image isn't showing up. Here's the include code I'm using and the file is at assets/images/field-site.jpg. What's wrong?"*

> *"My site won't build. Here's the error from GitHub Actions: [paste the error]. What do I need to fix?"*

> *"I changed the heading color in base.css but nothing changed on my site. Can you check if I made a syntax error?"*

> *"This page looks different from my other pages---the layout seems wrong. Can you compare the front matter to a working page and tell me what's different?"*

The AI can cross-reference your code against the component's expected parameters, check YAML formatting, validate file paths, and interpret error messages. These are exactly the tasks that are tedious to do manually and trivial for AI.

---

## Still stuck?

If you've tried the fixes above and checked with your AI assistant:

- **Compare your code** to working examples in the [Component Library](component-library)
- **Try removing recent changes** --- if it worked before, the most recent edit is probably the culprit
- **[Open an issue](https://github.com/xanthan-web/xanthan/issues)** on GitHub with a description of the problem, what you've tried, and any error messages
