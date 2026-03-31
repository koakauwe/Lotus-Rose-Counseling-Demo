# Lotus Rose Counseling — Website Migration Guide

## What We're Doing

Moving lotusrosecounseling.com from the old Zyro/Hostinger website to the new Astro site hosted on Cloudflare Pages. After this:
- Your new website is live at lotusrosecounseling.com
- Website hosting is free (Cloudflare Pages)
- Contact form sends you email notifications via Resend

**IMPORTANT: Do NOT cancel your Hostinger account.** Your business email (info@lotusrosecounseling.com) runs through Hostinger/Titan. If you cancel Hostinger, your email stops working. You are only changing where your domain points for the website — your email will continue working through Hostinger.

**Time needed:** About 1 hour together, then 1-24 hours for DNS to propagate.

**Your domain is registered at:** Hostinger (nameservers: ns1.dns-parking.com, ns2.dns-parking.com)

---

## PHASE 1: Create Accounts (Joy Does This)

### Step 1: Create a Cloudflare Account

Cloudflare is where your website will be hosted (for free).

1. Open your browser and go to **https://dash.cloudflare.com/sign-up**
2. Enter your business email (the one you use for Lotus Rose)
3. Create a password
4. Click **Sign Up**
5. Check your email for a verification link and click it
6. You're in! You should see the Cloudflare dashboard

**Don't close this tab — you'll need it for the next steps.**

---

### Step 2: Create a Resend Account

Resend is the service that sends you email notifications when someone fills out your contact form.

1. Open a new tab and go to **https://resend.com**
2. Click **Start Building** or **Get Started** (top right)
3. Sign up with your business email
4. Verify your email if prompted
5. Once logged in, you'll see the Resend dashboard

#### Create an API Key:
1. In the left sidebar, click **API Keys**
2. Click **Create API Key** (top right)
3. Fill in:
   - **Name:** `Lotus Rose Website`
   - **Permission:** Select `Sending access`
   - **Domain:** Leave as `All domains`
4. Click **Create**
5. **IMPORTANT:** A key will appear that starts with `re_` — copy this entire key
6. Paste it somewhere safe (a note on your phone, a text to yourself, etc.) — you'll need it in Phase 3
7. Once you close this popup, you can't see the full key again

**Write down or save your API key now. You will need it later.**

---

## PHASE 2: Add Your Domain to Cloudflare

### Step 3: Add lotusrosecounseling.com to Cloudflare

1. Go back to your Cloudflare dashboard tab (or go to **https://dash.cloudflare.com**)
2. On the home page, click **Add a domain** (or **+ Add a site**)
3. Type in: `lotusrosecounseling.com`
4. Click **Continue**
5. Select the **Free** plan at the bottom
6. Click **Continue**
7. Cloudflare will scan your existing DNS records. This takes a few seconds.
8. You'll see a list of DNS records it found — **don't change anything here yet**, just click **Continue**
9. Now you'll see a screen that says **"Change your nameservers"**

**You'll see two nameservers that look something like:**
```
clay.ns.cloudflare.com
connie.ns.cloudflare.com
```
(The actual names will be different — Cloudflare assigns random ones)

**Write these down or screenshot this page.** You'll enter these into Hostinger in the next step.

10. **Don't click "Done" yet** — leave this tab open. First, do Step 4.

---

### Step 4: Change Your Nameservers at Hostinger

This is the step that actually points your domain to Cloudflare. **Once you do this, your old Zyro website will stop working within a few minutes to a few hours.**

> **Important:** We'll set up the new website on Cloudflare Pages BEFORE doing this step, so the new site will be ready to go when the domain switches over. Skip ahead to Phase 3, then come back here.

When you're ready:

1. Open a new tab and go to **https://hpanel.hostinger.com** (or wherever you log into Hostinger)
2. Log in with your Hostinger account
3. Find your domain `lotusrosecounseling.com` — this might be under:
   - **Domains** in the left sidebar, OR
   - **Hosting** → click on your plan → **Domains**
4. Click on `lotusrosecounseling.com` to manage it
5. Look for **DNS / Nameservers** — this might be under:
   - **DNS Zone** tab, OR
   - **Nameservers** tab, OR
   - **Domain Settings** → **Nameservers**
6. You should see the current nameservers:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
7. Click **Change nameservers** (or **Edit**, or **Use custom nameservers**)
8. Replace them with the two Cloudflare nameservers you wrote down in Step 3:
   ```
   Nameserver 1: clay.ns.cloudflare.com
   Nameserver 2: connie.ns.cloudflare.com
   ```
9. Click **Save** or **Update**
10. Go back to Cloudflare and click **Done, check nameservers**

**Now wait.** Nameserver changes can take anywhere from 5 minutes to 24 hours to take effect. Cloudflare will email you when your domain is active. Usually it happens within 30 minutes.

You can check by going to your Cloudflare dashboard — when the domain shows a green checkmark and says **"Active"**, you're good to continue.

---

## PHASE 3: Deploy the New Website on Cloudflare Pages

**Do this BEFORE changing nameservers (Step 4) so the new site is ready when the domain switches.**

### Step 5: Create a GitHub Account (If Joy Doesn't Have One)

1. Go to **https://github.com/signup**
2. Create an account with your business email
3. Choose a username
4. Verify your email
5. **Tell Koa your GitHub username** so he can give you access to the website code

### Step 6: Connect GitHub to Cloudflare Pages

1. Go to your Cloudflare dashboard: **https://dash.cloudflare.com**
2. In the left sidebar, click **Workers & Pages**
3. Click **Create**
4. Click the **Pages** tab (not Workers)
5. Click **Connect to Git**
6. Click **Connect GitHub**
7. A GitHub popup will appear — authorize Cloudflare to access your repositories
8. Select the repository: **Lotus-Rose-Counseling-Demo**
   - If you don't see it, Koa needs to give you access first, or fork the repo to your GitHub account
9. Click **Begin setup**

#### Configure the build:
10. Set these values:
    - **Project name:** `lotusrosecounseling` (this will be your temporary URL: lotusrosecounseling.pages.dev)
    - **Production branch:** `main`
    - **Framework preset:** Select `Astro` from the dropdown
    - **Build command:** `npm run build`
    - **Build output directory:** `dist`
11. Click **Save and Deploy**
12. Wait for the build to complete (about 30-60 seconds)
13. Once it says **"Success!"**, your site is live at `lotusrosecounseling.pages.dev`

**Test it:** Open `lotusrosecounseling.pages.dev` in your browser. You should see the new Lotus Rose website.

### Step 7: Connect Your Custom Domain

1. In Cloudflare Pages, click on your **lotusrosecounseling** project
2. Click the **Custom domains** tab
3. Click **Set up a custom domain**
4. Type: `lotusrosecounseling.com`
5. Click **Continue**
6. Cloudflare will create a DNS record automatically — click **Activate domain**
7. Repeat for `www.lotusrosecounseling.com`:
   - Click **Set up a custom domain** again
   - Type: `www.lotusrosecounseling.com`
   - Click **Continue** → **Activate domain**

**Now go back and do Step 4** (change nameservers at Hostinger) if you haven't already.

---

## PHASE 4: Set Up Contact Form Email Notifications

### Step 8: Verify Your Domain in Resend

This lets Resend send emails from your domain (like `noreply@lotusrosecounseling.com`).

1. Go to **https://resend.com** and log in
2. In the left sidebar, click **Domains**
3. Click **Add Domain**
4. Enter: `lotusrosecounseling.com`
5. Click **Add**
6. Resend will show you a list of DNS records you need to add. You'll see records like:
   - A **TXT** record (for SPF)
   - One or more **CNAME** records (for DKIM)
   - Possibly an **MX** record

**For each record Resend shows you:**

7. Open your Cloudflare dashboard in another tab
8. Click on **lotusrosecounseling.com** → **DNS** → **Records**
9. Click **Add record**
10. Match the **Type** (TXT, CNAME, or MX) to what Resend shows
11. Copy the **Name** field from Resend into the **Name** field in Cloudflare
12. Copy the **Value** field from Resend into the **Content** field in Cloudflare
13. Make sure **Proxy status** is set to **DNS only** (grey cloud, not orange)
14. Click **Save**
15. Repeat for each DNS record Resend requires

16. Go back to Resend and click **Verify**
17. It may take a few minutes. Click **Verify** again until it shows a green checkmark.

### Step 9: Add Environment Variables to Cloudflare Pages

This connects your Resend API key to your website so the contact form works.

1. Go to Cloudflare dashboard → **Workers & Pages**
2. Click on your **lotusrosecounseling** project
3. Click **Settings** (tab at the top)
4. Scroll down to **Environment variables**
5. Click **Add variable**
6. Add this variable:
   - **Variable name:** `RESEND_API_KEY`
   - **Value:** Paste the API key you saved from Step 2 (starts with `re_`)
7. Click **Save**
8. Click **Add variable** again:
   - **Variable name:** `NOTIFICATION_EMAIL`
   - **Value:** The email where you want to receive form notifications (e.g., `info@lotusrosecounseling.com`)
9. Click **Save**

**Koa will build the serverless function that connects the contact form to Resend. Once he pushes that code, the form will start working automatically.**

---

## PHASE 5: Test and Go Live

### Step 10: Test Everything

Once your domain is active on Cloudflare (green checkmark in dashboard):

- [ ] Visit **lotusrosecounseling.com** — does the new website load?
- [ ] Visit **www.lotusrosecounseling.com** — does it redirect properly?
- [ ] Click through every page — do all links work?
- [ ] Check on your phone — does it look good on mobile?
- [ ] Click the phone number — does it dial correctly?
- [ ] Submit a test contact form — do you receive the email notification?
- [ ] Check the SSL padlock — does the browser show the site as secure (https)?

### Step 11: Downgrade Hostinger (Keep Email)

**Do NOT cancel Hostinger entirely — your business email depends on it.**

1. Log into Hostinger
2. Contact Hostinger support and ask: "I want to cancel my website hosting but keep my Titan email. What are my options?"
3. Downgrade to an **email-only plan** (Business Starter is ~$1/month per mailbox)
4. Your website hosting is now free through Cloudflare Pages, and you're only paying Hostinger for email

---

## After Migration: How to Make Changes

See the **SETUP-GUIDE.md** file in the website folder for detailed instructions on:
- Installing Claude Code
- Making text changes in plain English
- Adding blog posts
- Updating photos
- Pushing changes live

Or just text Koa and he'll handle it.

---

## Emergency: Something Went Wrong

**If the website goes down after changing nameservers:**
1. Don't panic — it usually takes up to 24 hours for DNS to fully propagate
2. Check Cloudflare dashboard — is the domain showing "Active"?
3. Check Cloudflare Pages — is the latest deployment showing "Success"?
4. If nothing is working after 24 hours, text Koa

**If you need to go back to the old site temporarily:**
1. Go to Hostinger → Domain → Nameservers
2. Change nameservers back to:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
3. The old Zyro site will come back within a few hours

---

## Summary of What Joy Needs to Do

| Step | What | Where | Time |
|------|------|-------|------|
| 1 | Create Cloudflare account | cloudflare.com | 2 min |
| 2 | Create Resend account + API key | resend.com | 5 min |
| 3 | Add domain to Cloudflare | Cloudflare dashboard | 5 min |
| 5 | Create GitHub account | github.com | 2 min |
| 6 | Connect repo to Cloudflare Pages | Cloudflare dashboard | 5 min |
| 7 | Connect custom domain | Cloudflare Pages | 3 min |
| 4 | Change nameservers at Hostinger | Hostinger dashboard | 5 min |
| 8 | Verify domain in Resend | Resend + Cloudflare DNS | 10 min |
| 9 | Add environment variables | Cloudflare Pages settings | 3 min |
| Wait | DNS propagation | — | 5 min - 24 hrs |
| 10 | Test everything | Browser | 10 min |
| 11 | Cancel Hostinger | Hostinger dashboard | 5 min |
