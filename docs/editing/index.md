---
layout: default
title: Editing Workflows
date: 2026-02-14
---

{% include nav/scrollspy-toc.html %}

# Editing Workflows

There are two ways to edit your Xanthan site: in the browser through GitHub, or locally on your computer. Both produce the same result---files committed to your repository and published to your live site. The difference is in the editing experience.

**Start with GitHub editing.** It requires no installation, works from any computer, and is perfectly fine for adding pages, editing text, and uploading images. When you find yourself making frequent changes or wanting more control, switch to local editing.

---

## Editing in GitHub

GitHub's built-in code editor gives you an intuitive editing environment in your browser. A list of files shows up on the left, and you can edit files on the right. Press **`.`** on any repository page to open it.

### Edit an existing page

1. Press `.` on your repository page to open the code editor
2. Click a file in the left sidebar (e.g., `index.md`)
3. Make your changes in the editor
4. Click the **Source Control** icon in the left sidebar
5. Type a short commit message and press **Ctrl+Enter** (Cmd+Enter on Mac)
6. Click **"Sync Changes"** to push to GitHub

### Add a new page

1. In the code editor, right-click in the file tree and choose **"New File"**
2. Name it with `.md` at the end (e.g., `my-new-page.md`)
3. Add front matter at the top:
   ```yaml
   ---
   title: My New Page
   layout: default
   ---
   ```
4. Write your content below the front matter
5. Commit and sync

### Edit the navigation menu

The navigation menu is controlled by a single data file:

1. Open `_data/top-nav.yml` in the code editor
2. Follow the pattern of existing entries:
   ```yaml
   - title: "My New Page"
     url: "/my-new-page"
   ```
3. Commit and sync

For more on navigation options, see the [Navigation guide](navigation).

### Move files into folders

To organize pages into folders (e.g., `projects/my-project.md`):

1. Open the file in the code editor
2. Click on the filename at the top of the editor tab
3. Edit the path to include the folder (GitHub creates it automatically)
4. Commit and sync

---

## Editing locally

For frequent editing, working on your own computer is faster and more flexible. You'll need two free tools:

### 1. Install the tools

- **[GitHub Desktop](https://desktop.github.com)** --- keeps your local files and GitHub repository in sync
- **[Visual Studio Code](https://code.visualstudio.com)** --- a proper code editor with file management, search/replace, and AI assistant support

### 2. Clone your repository

1. In GitHub Desktop, go to **File > Clone Repository**
2. Find your site's repository in the GitHub.com tab
3. Select it and click **Clone**
4. Choose where on your computer you want the files

### 3. Edit in VS Code

1. In GitHub Desktop, click **"Open in Visual Studio Code"**
2. VS Code opens with your full project loaded
3. Edit files, add images, rename and move things---all with a real file manager

### 4. Commit and push

When you save a file, GitHub Desktop notices the change automatically:

1. Switch to GitHub Desktop
2. Your changed files appear in the left sidebar
3. Add a short summary of what you changed
4. Click **"Commit to main"**
5. Click **"Push origin"** to send changes to GitHub

Your site rebuilds automatically in about a minute.

### Before you commit

A quick checklist to prevent common errors:

- Matching quotes in include blocks (`"..."` not `"...'`)
- File paths that match actual file locations exactly
- Include blocks with proper delimiters (`{%raw%}{% ... %}{%endraw%}`)
- Front matter properly formatted between `---` markers

---

## Which should I use?

| | GitHub editor | Local editing |
|---|---|---|
| **Setup** | None | Install 2 apps |
| **Best for** | Quick edits, single pages | Frequent changes, multiple files |
| **File management** | Limited | Full (drag, drop, rename, move) |
| **Works offline** | No | Yes |
| **AI assistance** | Limited | Full (Copilot, Cursor, etc.) |
| **Preview locally** | No | Yes (with [Docker](previewing-locally)) |

Most people start in GitHub and graduate to local editing as their site grows. There's no wrong answer---use whatever keeps you productive.

---

## Next steps

- **[Typography](typography)** --- adjust readable defaults, heading scale, and voice
- **[Images](images)** --- add and style figures, galleries, and visual layout
- **[Colors & Fonts](colors-and-fonts)** --- customize palette and type system
- **[Pages & Front Matter](../reference/pages-and-front-matter)** --- understand what controls how pages behave
- **[Previewing Locally](previewing-locally)** *(advanced/optional)* --- instant local feedback while editing
- **[Troubleshooting](../reference/troubleshooting)** --- if something isn't working
