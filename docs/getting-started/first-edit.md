---
layout: default
title: Make Your First Edit
date: 2026-02-14
---

{% include nav/scrollspy-toc.html %}

# Make Your First Edit

Your site is live. Now let's change something so you can see the full cycle: edit a file, save it, and watch the change appear on your live site.

---

## Open the code editor

GitHub has a built-in code editor that works like a real development environment---right in your browser.

1. Go to your repository on GitHub (e.g., `github.com/YOUR-USERNAME/YOUR-REPO`)
2. Press the **`.`** key on your keyboard

That's it. GitHub opens a full VS Code editor in your browser, with your file tree on the left and an editor on the right. No installation required.

---

## Make a change

1. In the file tree on the left, click **`index.md`** to open your homepage
2. Find the `title:` line in the front matter (the section between the `---` markers at the top)
3. Change the title to something of your own---your name, your project name, whatever fits
4. Below the front matter, add a sentence or two of your own text

For example, if the front matter says:
```yaml
title: My Portfolio
```
Change it to:
```yaml
title: Sarah Martinez
```

And below the closing `---`, add something like:
```markdown
I study medieval cartography at UNM and I'm interested in how maps shape political imagination.
```

---

## Save and publish

1. In the left sidebar, click the **Source Control** icon (it looks like a branch, and should show a badge with the number of changed files)
2. You'll see your changed file listed
3. Type a short message describing what you changed (e.g., "Update homepage title")
4. Click the **checkmark** icon or press **Ctrl+Enter** (Cmd+Enter on Mac) to commit
5. When prompted, click **"Sync Changes"** to push your changes to GitHub

---

## See it live

GitHub Pages will rebuild your site automatically. This takes about 1--2 minutes.

1. Go to your repository page on GitHub (press the GitHub icon in the bottom-left of the editor, or navigate to `github.com/YOUR-USERNAME/YOUR-REPO`)
2. Click the **Actions** tab to watch the build progress
3. When the yellow dot turns green, refresh your live site

Your change is live on the open web.

---

## What just happened

You edited a file, committed the change (saving a versioned snapshot), and pushed it to GitHub, which rebuilt your site automatically. This is the same workflow professional developers use every day. The tools are just text files and version control---nothing proprietary, nothing you can't take with you.

---

## Next step

**[Add an Image](add-an-image)** --- put a photo on your site.
