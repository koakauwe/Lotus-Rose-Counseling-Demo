# Lotus Rose Counseling — Website Setup Guide

## What You're Setting Up

Your website is built with a tool called **Astro** and hosted for free on **Cloudflare Pages**. The code lives on **GitHub**. When you make a change to the code and save it, Cloudflare automatically rebuilds your website — usually in about 30 seconds.

You'll be using **Claude Code** to make changes. Claude Code is an AI assistant that runs in your terminal (the black window where you type commands). You tell it what you want to change in plain English, and it edits the code for you. You don't need to know how to code.

This guide walks you through everything from scratch.

---

## Step 1: Create a GitHub Account

GitHub is where your website's code is stored. Think of it like Google Drive, but for code.

1. Go to **https://github.com/signup**
2. Create an account with your email
3. Choose a username (something professional like `joybouchard` or `lotusrosecounseling`)
4. Verify your email

Once your account is created, **tell Koa your GitHub username** so he can give you access to the website's code repository.

---

## Step 2: Install Git

Git is the tool that connects your computer to GitHub. It tracks changes to your files.

### On Mac:
1. Open **Terminal** (search for "Terminal" in Spotlight, or find it in Applications > Utilities)
2. Type this and press Enter:
   ```
   git --version
   ```
3. If Git isn't installed, your Mac will prompt you to install it. Click **Install** and follow the prompts.

### On Windows:
1. Go to **https://git-scm.com/download/win**
2. Download the installer and run it
3. Click **Next** through all the default options — the defaults are fine
4. When it's done, you'll have a program called **Git Bash** — that's your terminal

### Configure Git with your name and email:
Open your terminal (Terminal on Mac, Git Bash on Windows) and type these two commands, replacing with your actual name and email:

```
git config --global user.name "Joy Bouchard"
git config --global user.email "your-email@example.com"
```

---

## Step 3: Install Node.js

Node.js is what runs the website on your computer so you can preview changes before they go live.

1. Go to **https://nodejs.org**
2. Download the **LTS** version (the one that says "Recommended for Most Users")
3. Run the installer — click Next through everything, defaults are fine
4. To verify it worked, open your terminal and type:
   ```
   node --version
   ```
   You should see a version number like `v22.x.x`

---

## Step 4: Install Claude Code

Claude Code is the AI that will help you edit your website. You talk to it in plain English.

1. You'll need a Claude account. Go to **https://claude.ai** and sign up if you haven't already
2. In your terminal, type:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
3. Wait for it to install (might take a minute)
4. To verify it worked, type:
   ```
   claude --version
   ```

---

## Step 5: Download Your Website Code

Now you'll download ("clone") your website's code to your computer.

1. Open your terminal
2. Navigate to where you want to keep the website files. For example, your Documents folder:

   **Mac:**
   ```
   cd ~/Documents
   ```

   **Windows (Git Bash):**
   ```
   cd ~/Documents
   ```

3. Clone the repository (Koa will give you the exact URL once you have GitHub access):
   ```
   git clone https://github.com/koakauwe/Lotus-Rose-Counseling-Demo.git
   ```

4. Go into the folder:
   ```
   cd Lotus-Rose-Counseling-Demo
   ```

5. Install the website's dependencies:
   ```
   npm install
   ```

---

## Step 6: Preview Your Website Locally

Before making changes, let's make sure everything works.

1. In your terminal (make sure you're in the Lotus-Rose-Counseling-Demo folder), type:
   ```
   npm run dev
   ```

2. You'll see a message like:
   ```
   Local    http://localhost:4321/
   ```

3. Open your web browser and go to **http://localhost:4321/**
4. You should see your Lotus Rose Counseling website!
5. To stop the preview, press **Ctrl + C** in your terminal

---

## Step 7: Start Claude Code

This is where the magic happens. Instead of editing code yourself, you tell Claude what you want.

1. Make sure you're in your website folder in the terminal:
   ```
   cd ~/Documents/Lotus-Rose-Counseling-Demo
   ```

2. Start Claude Code:
   ```
   claude
   ```

3. Claude will start up and you'll see a prompt where you can type

4. Now you can tell Claude what to change in plain English! For example:
   - `"Change the phone number to (801) 555-1234"`
   - `"Add a new blog post about how EMDR therapy works"`
   - `"Update Brynnlee's bio to mention she now sees in-person clients"`
   - `"Change the office hours on the contact page to Monday-Thursday 9am-5pm"`
   - `"Add a new therapist named Sarah to the Our Therapists page"`

5. Claude will make the changes and show you what it did. You can preview the changes at http://localhost:4321/ (run `npm run dev` in a separate terminal window if it's not already running)

6. When you're happy with the changes, tell Claude:
   - `"Commit these changes and push to GitHub"`
   - Claude will save your changes and push them to GitHub
   - Cloudflare will automatically rebuild your website in about 30 seconds

---

## Step 8: Your Daily Workflow

Here's what your process looks like day-to-day:

### Making a change:

1. Open your terminal
2. Go to your website folder: `cd ~/Documents/Lotus-Rose-Counseling-Demo`
3. Start Claude: `claude`
4. Tell Claude what you want to change
5. Preview at http://localhost:4321/ (run `npm run dev` in another terminal if needed)
6. Tell Claude to commit and push
7. Wait 30 seconds — your live website is updated

### Before you start each session:

Always pull the latest changes first (in case Koa made updates):
```
cd ~/Documents/Lotus-Rose-Counseling-Demo
git pull
```

Then start Claude:
```
claude
```

---

## Common Things You'll Want to Do

### Update text on a page
Tell Claude: *"On the about page, change the second paragraph to say [new text]"*

### Add a new blog post
Tell Claude: *"Write a new blog post about [topic]. Make Joy the author. Target the keyword [keyword]."*

### Update a therapist's bio
Tell Claude: *"Update Megan's bio on the Our Therapists page. Here's her new bio: [text]"*

### Add a new therapist
Tell Claude: *"Add a new therapist to the Our Therapists page. Her name is [name], her title is [title], and she specializes in [specialties]. Here's her bio: [text]"*

### Change the phone number or address
Tell Claude: *"Change the phone number everywhere on the site to [new number]"*

### Add a new service page
Tell Claude: *"Create a new service page for [service name]. Target the keyword [keyword]. Include an FAQ section with at least 4 questions."*

### Update office photos
1. Save the new photo to the `public/photos/` folder in your website directory
2. Tell Claude: *"Replace the photo on [page] with the new photo I added called [filename]"*

---

## Troubleshooting

### "Command not found" when I type `claude`
Run `npm install -g @anthropic-ai/claude-code` again.

### "Command not found" when I type `npm`
Node.js isn't installed correctly. Go back to Step 3 and reinstall.

### The website preview looks broken
Stop the dev server (Ctrl + C) and restart it: `npm run dev`

### "Permission denied" or "authentication failed" when pushing to GitHub
You may need to set up a GitHub Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Lotus Rose Website"
4. Check the box for "repo"
5. Click "Generate token"
6. Copy the token — you'll use it as your password when Git asks

### I made a mistake and want to undo
Tell Claude: *"Undo the last change"* or *"Revert the last commit"*

### I'm stuck and need help
Text Koa! That's what he's here for.

---

## Important Notes

- **Your website hosting is free** through Cloudflare Pages. There's nothing to pay for hosting.
- **Don't edit files manually** unless you know what you're doing. Use Claude Code — it's much safer.
- **Always preview before pushing.** Check http://localhost:4321/ to make sure your changes look right.
- **Commits are like save points.** Every time you push, it creates a snapshot you can go back to if something goes wrong.
- **The CLAUDE.md file** in your project folder contains instructions that Claude reads automatically. Don't delete it.

---

## Your Website Structure (for reference)

```
Lotus-Rose-Counseling-Demo/
├── src/
│   ├── pages/           ← Each file here is a page on your website
│   │   ├── index.astro          → Homepage
│   │   ├── about.astro          → About page
│   │   ├── contact.astro        → Contact page
│   │   ├── our-therapists.astro → Our Therapists page
│   │   ├── services.astro       → Services overview
│   │   ├── blog/                → Blog posts
│   │   └── ...                  → Other pages
│   ├── components/      ← Reusable pieces (header, footer, etc.)
│   └── layouts/         ← Page templates
├── public/
│   ├── photos/          ← Your photos (drop new ones here)
│   ├── florals/         ← Floral background images
│   └── logo.png         ← Your logo
└── CLAUDE.md            ← Instructions for Claude
```

---

## Need Help?

- **Text Koa** for website questions
- **Claude Code docs:** https://docs.anthropic.com/en/docs/claude-code
- **Cloudflare Pages dashboard:** https://dash.cloudflare.com (ask Koa for login)
