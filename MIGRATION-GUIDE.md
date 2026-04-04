# Lotus Rose Counseling — Website Migration Guide

## What's Happening

Koa is moving your website from Hostinger to a new, faster platform. Your new website is already built and ready — it just needs your domain pointed to it.

**What changes:**
- Your website will be hosted on Cloudflare Pages (free, faster, better SEO)
- The new website has more pages, better search visibility, and a working contact form

**What stays the same:**
- Your domain (lotusrosecounseling.com) — same address, same URL
- Your email (info@lotusrosecounseling.com) — keeps working through Hostinger
- Your phone number, address, everything else

**IMPORTANT: Do NOT cancel your Hostinger account.** Your business email runs through Hostinger. If you cancel it, your email stops working. We are only changing where your website points — your email is not affected.

---

## What Joy Needs to Do (One Thing)

You need to change your domain's nameservers at Hostinger. This tells the internet "my website lives at Cloudflare now" instead of "my website lives at Hostinger." Your email is not affected by this change.

### Step-by-Step Instructions

1. Open your browser and go to **https://hpanel.hostinger.com**
2. Log in with your Hostinger username and password
3. In the left sidebar, look for **Domains** and click it
4. You should see `lotusrosecounseling.com` in the list — click on it
5. Look for a tab or section called **DNS / Nameservers** (it might say "Nameservers" or be under "DNS Zone")
6. You should see the current nameservers listed as:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
7. Click **Change nameservers** (or **Edit**, or **Use custom nameservers**)
8. Replace them with these two new nameservers:

   **Nameserver 1:** `clay.ns.cloudflare.com`

   **Nameserver 2:** `connie.ns.cloudflare.com`

9. Click **Save**
10. Text Koa and let him know it's done

**That's it.** Koa handles everything else from here.

---

## What to Expect After

- **Within 5-30 minutes** (sometimes up to 24 hours): your website will switch to the new one
- **Your old website** will stop showing — that's expected
- **Your email** will keep working — nothing changes with email
- **If something looks wrong**, text Koa — he can fix it or roll it back

---

## Koa's Checklist (For Koa, Not Joy)

### Account Access
- **Cloudflare:** Danaya.olmstead@gmail.com (manages DNS + Pages hosting)
- **Resend:** koakauwe@gmail.com (manages contact form email delivery)
- **GitHub:** koakauwe (repo: Lotus-Rose-Counseling-Demo)
- **NOTIFICATION_EMAIL:** joy.bouchard@lotusrosecounseling.com, officemanager@lotusrosecounseling.com

### Migration Steps

Once Joy changes the nameservers:

- [x] Watch Cloudflare dashboard — wait for lotusrosecounseling.com to show "Active"
- [x] Add custom domain `lotusrosecounseling.com` to the Pages project (Custom domains tab)
- [x] Add custom domain `www.lotusrosecounseling.com` to the Pages project
- [x] Create Resend account and get API key
- [x] Add Resend DNS records (SPF, DKIM, CNAME) to Cloudflare DNS
- [x] Verify domain in Resend
- [x] Add `RESEND_API_KEY` and `NOTIFICATION_EMAIL` environment variables to Cloudflare Pages settings
- [x] Test the contact form — submit a test and verify email arrives
- [ ] Test all pages on desktop and mobile
- [ ] Verify SSL (https) is working
- [ ] Check that phone number links dial correctly
- [ ] Confirm email still works (send Joy a test email to her @lotusrosecounseling.com address)

---

## Emergency Rollback

If something goes badly wrong and the website needs to go back to the old one:

1. Joy logs into Hostinger
2. Goes to Domains → lotusrosecounseling.com → Nameservers
3. Changes nameservers back to:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
4. The old website comes back within a few hours

---

## Later: Downgrade Hostinger

Once everything is working and confirmed stable (give it a week):

1. Contact Hostinger support
2. Ask: "I want to cancel my website hosting but keep my Titan email. What are my options?"
3. Downgrade to an email-only plan (~$1/month per mailbox)
4. Website hosting is now free through Cloudflare — you're only paying Hostinger for email
