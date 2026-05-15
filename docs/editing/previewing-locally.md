---
title: Previewing Locally
layout: default
date: 2025-01-01
---

# Previewing Locally

{% include nav/scrollspy-toc.html %}

Tired of waiting 1–2 minutes every time you make a change just to see if it worked? Want to preview your site instantly on your own computer before publishing changes to your public site on GitHub?

A widespread app called Docker lets you run your entire website on your computer, so you can see changes immediately. Make an edit, save the file, refresh your browser. No pushing changes and waiting for GitHub Pages to rebuild your site.

This guide shows you how to set up local development using Docker, even if you've never heard of it before.

---

## What Docker Does for You

**The issue:** Every time you push changes to GitHub, you wait while GitHub Pages rebuilds your site. If you made a typo or something doesn't look right, you have to fix it, push again, and wait again.

**The solution:** Docker runs Jekyll (the software that builds your site on GitHub Pages) directly on your computer. You see changes instantly in your browser—no pushing, no waiting, no surprises with your live site.

**Think of Docker as:** A self-contained mini-computer that already has everything set up to run your site. You don't need to install Ruby, Jekyll, or any complicated dependencies. Docker handles all that.

---

## Step 1: Install Docker Desktop

Docker Desktop is the app that makes this all work.

### For Mac:

1. Go to [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Click **Download for Mac**
3. Open the downloaded `.dmg` file and drag Docker to your Applications folder
4. Open Docker from Applications
5. Follow the setup prompts (you can use the default settings)
6. Docker Desktop will start running (you'll see a whale icon in your menu bar)

### For Windows:

1. Go to [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Click **Download for Windows**
3. Run the installer
4. Follow the setup prompts (you can use the default settings)
5. Restart your computer when prompted
6. Launch Docker Desktop from the Start menu
7. Docker Desktop will start running (you'll see a whale icon in your system tray)

---

## Step 2: Open Your Terminal

You'll need to use the terminal (Mac/Linux) or command prompt (Windows) to run Docker commands.

### On Mac:
1. Press `Command + Space` to open Spotlight
2. Type "Terminal" and press Enter

### On Windows:
1. Press the Windows key
2. Type "Command Prompt" or "PowerShell"
3. Press Enter

---

## Step 3: Navigate to Your Site Folder

You need to "go into" your website folder using the terminal. Here's how:

1. In the terminal, type `cd ` (that's "cd" followed by a space—don't press Enter yet!)
2. Find your site folder in Finder (Mac) or File Explorer (Windows)
3. Drag the folder into the terminal window
4. The full path to your folder appears after `cd `
5. Now press Enter

**Example of what you'll see:**
```bash
cd /Users/yourname/Documents/my-site
```

**How to tell it's working:** Your terminal prompt should now show your site folder name.

---

## Step 4: Run Your Site with Docker

Now for the magic! Copy and paste this command into your terminal and press Enter:

```bash
docker run --rm -it -p 4000:4000 -v "$(pwd):/srv/jekyll" jekyll/jekyll:4.2.0 jekyll serve --force_polling --livereload
```

**What this command does (you don't need to memorize this):**
- `docker run` - Tells Docker to run a container
- `jekyll/jekyll:4.2.0` - Uses the official Jekyll Docker image
- `-p 4000:4000` - Makes your site available at `localhost:4000`
- `-v "$(pwd):/srv/jekyll"` - Connects your site folder to the container
- `jekyll serve` - Runs the Jekyll server
- `--force_polling` - Watches for file changes on your computer
- `--livereload` - Automatically refreshes your browser when files change

**First time running?** Docker will download the Jekyll image (about 200MB). This takes a few minutes but only happens once.

**What you'll see:**
```
Server address: http://0.0.0.0:4000/
Server running... press ctrl-c to stop.
```

When you see this, your site is ready!

---

## Step 5: View Your Site

1. Open your web browser
2. Go to: `http://localhost:4000`
3. Your site appears!

Now the real power: Make a change to any file, save it, and watch your browser automatically refresh with the changes. No waiting!

---

## Daily Workflow

Once you have Docker installed, here's your typical workflow to edit your site:

1. **Start Docker Desktop** (if not already running)
2. **Open terminal** and navigate to your site folder: `cd /path/to/your/site`
3. **Run the Docker command:**
   ```bash
   docker run --rm -it -p 4000:4000 -v "$(pwd):/srv/jekyll" jekyll/jekyll:4.2.0 jekyll serve --force_polling --livereload
   ```
4. **Open browser** to `http://localhost:4000`
5. **Edit files** in VS Code and watch changes appear instantly
6. **When done**, press `Ctrl + C` in the terminal to stop the server
7. **Commit and push** your changes to GitHub (see [Editing Workflows](../editing/) guide)

{% include typography/alert.html
  class="info"
  title="Pro Tip: Save the Command"
  text="That Docker command is long! Save it in a text file so you can copy/paste it easily. Or better yet, create a file called `start-site.sh` (Mac/Linux) or `start-site.bat` (Windows) with the command inside, and just run that file."
%}

---

## Troubleshooting

### "Docker is not running"

**Fix:** Make sure Docker Desktop is open and running. Look for the whale icon in your menu bar/system tray.

### "Port 4000 is already in use"

**Fix:** You probably already have Jekyll running. Either:
- Close the other terminal window running Jekyll, or
- Use a different port: Change `-p 4000:4000` to `-p 4001:4000` and visit `http://localhost:4001`

### "Permission denied" or "Cannot connect to Docker daemon"

**Fix (Mac/Linux):** Try adding `sudo` before the command:
```bash
sudo docker run --rm -it -p 4000:4000 -v "$(pwd):/srv/jekyll" jekyll/jekyll:4.2.0 jekyll serve --force_polling --livereload
```

**Fix (Windows):** Make sure Docker Desktop is running and you've restarted your computer after installation.

### Site doesn't refresh automatically

**Fix:** The `--livereload` flag should handle this, but if it doesn't work:
1. Manually refresh your browser after saving files
2. Make sure you're using the full Docker command with `--force_polling --livereload`

### Changes don't appear

**Fix:**
1. Check the terminal for error messages
2. Make sure you saved the file in VS Code
3. Wait a second or two for Jekyll to rebuild
4. Try a hard refresh in your browser: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)

### "Error: no such file or directory"

**Fix:** Make sure you're in the correct folder. Type `ls` (Mac/Linux) or `dir` (Windows) and you should see folders like `_layouts`, `assets`, `guides`, etc. If not, navigate to the correct folder using `cd`.

---

## Advantages of Local Development

### Instant feedback
See changes immediately—no waiting for GitHub Pages to rebuild (which takes 2-3 minutes each time).

### Catch errors before publishing
If something breaks, you'll see it locally before your live site is affected. No more pushing broken code!

### Work offline
Once Docker has downloaded the Jekyll image, you can work without internet. Only connect when you're ready to push changes to GitHub.

### Test complex changes
When making big changes (new layouts, CSS refactoring, etc.), you can experiment freely and make sure everything works before going live.

### Better debugging
Error messages appear immediately in your terminal, making it much easier to figure out what went wrong.

---

## When to Use Local Development

**Use local development when:**
- Making multiple changes and want to see results quickly
- Testing new features or layouts
- Working on CSS/design changes
- Adding complex components
- Learning and experimenting

**Stick with GitHub editing when:**
- Making small text changes (fixing a typo, updating a date)
- Working on a computer where you can't install Docker
- Making quick edits from a mobile device

---

## Next Steps

Now that you have local development working:

1. **Explore [Using AI Assistance](../using-ai/)** - AI tools work great with local development
2. **Learn about [Colors & Fonts](colors-and-fonts)** - Easier to experiment when you can see changes instantly
3. **Check out the [Typography](typography) and [Images](images) pages** - Test different styles locally before publishing

---

## Summary

**What we did:**
1. Installed Docker Desktop
2. Opened terminal and navigated to site folder
3. Ran one Docker command to start local server
4. Viewed site at `localhost:4000`

**The command to remember:**
```bash
docker run --rm -it -p 4000:4000 -v "$(pwd):/srv/jekyll" jekyll/jekyll:4.2.0 jekyll serve --force_polling --livereload
```

**The workflow:**
1. Start Docker
2. Run command
3. Edit files
4. See changes instantly
5. Push to GitHub when ready

You now have a professional development workflow that makes building your site much faster and more enjoyable!
