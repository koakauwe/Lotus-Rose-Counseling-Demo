# Lotus Rose Counseling — Marketing Activity Log

A running record of what Koa actually did each week. Feeds directly into
the monthly report's *"What drove it this month"* section so the recap to
Joy isn't reconstructed from memory.

**Format:** Reverse chronological, grouped by month. Each entry is a short
prose note — what was done, why it matters. If it isn't worth a sentence,
it isn't worth logging.

---

## May 2026

### Week of May 4

**Tuesday, May 6 — Joy's intake history captured for trial baseline**

Joy shared real intake numbers from her practice records — these are now
the anchor for every monthly report:

- **March 2026:** 16 inbound leads → 7 new clients (44% conversion)
- **April 2026:** 15 inbound leads → 6 new clients (40% conversion)
- **Historical average (pre-slowdown):** ~30 leads/month → 12–15 new clients/month

Joy's framing: the slowdown is industry-wide, not specific to Lotus Rose.
Other therapy practices are seeing the same softness. This is critical
context for the trial — we're working against a headwind.

**What this changes about the trial:**
- The 40–44% lead → client conversion rate is already healthy. Joy doesn't
  have a closing problem. She has a *volume* problem.
- Marketing's job during the trial is to feed her more leads, not optimize
  her sales process.
- "Back to historical average" = ~30 leads/month, roughly double current
  volume. That's the real success metric.
- Even modest progress matters: 15 → 22 leads/month at the same conversion
  rate produces +3 new clients/month, which is the ROI line.

Logged into `trial-monthly-report.md` "What We Knew Going In" section so
every monthly report from now on anchors against these numbers.

**Tuesday, May 6 — Trial-period tracking infrastructure built**

Wired up the measurement system that makes the 3-month trial reportable:

- **GA4 conversion events** added across the site. Every phone click, email
  click, contact-page click, and form submission now fires a tracked event
  with page context. Without this, GA4 only saw pageviews — no signal on
  what actually produced leads.
- **"How did you hear about us?" field** added to the contact form with 8
  options (Google search, Google Maps, Psychology Today, Mormon Wives,
  therapist referral, friend/family, Instagram, other). Selection flows
  into Joy's notification email as a highlighted row at the bottom *and*
  into the GA4 form-submission event, so attribution lives in two places.
- **UTM tags applied to all 13 GBP post CTAs** in the May–July calendar.
  Convention is `utm_source=gbp&utm_medium=organic&utm_campaign=<topic>`
  per post, so GA4 can break out which GBP topics drive sessions vs.
  generic "google / organic" traffic.
- **Monthly trial report template** committed at `trial-monthly-report.md`.
  Prose-first format, anchored to Joy's actual new-client count rather
  than vanity metrics. Includes a month-1-only framing paragraph that
  says explicitly "we didn't have analytics before May 1, this is the
  first real picture."
- **Search Console: 11 indexing requests submitted** for the highest-value
  unindexed pages — `/contact/`, `/about/`, `/insurance-and-pricing/`,
  `/our-therapists/`, `/trauma-therapy/`, `/anxiety-depression/`,
  `/teen-child-therapy/`, plus 4 more. Should resolve over the next 1–2
  weeks. Remaining ~7 pages held for the next batch.

Why this matters for the report: every channel claim made in the monthly
recap from this point forward has data behind it. Without this work, the
trial would have been "trust me," and the only honest answer would have
been "I don't know."

**Monday, May 4 — First GBP post published (Week 1 of 13)**

"Postpartum Therapy in Orem, Utah" went live on Google Business Profile.
Linked to `/postpartum-depression/?utm_source=gbp&utm_medium=organic&utm_campaign=postpartum-orem`.
First post following the policy-compliant rewrite (no clinical claims, no
phone/URL in body, "complimentary" instead of "free").

### Earlier in May (pre-trial start, captured for context)

- **Search Console sitemap submitted.** Site is being actively crawled —
  by May 4 Google had crawled 11 pages including the homepage, all main
  service pages, both indexed therapist bios, and the support-groups page.
- **GA4 + Microsoft Clarity active** as of May 1, 2026. This is the start
  of the trial measurement window.

---

## What's Coming (Pending Items for End-of-Month Report)

These are the things in motion that should produce signal by end of May:

- **Indexing settling** — expect Search Console indexed count to climb
  from 11 toward ~18 by mid-May as the requests process.
- **GBP post performance** — Weeks 1–4 of the calendar will be live by
  end of month (postpartum, EMDR, grief, anxiety). UTM data will show
  which topics produced sessions.
- **First form submissions with referral source data** — the new field
  starts capturing attribution from May 6 forward. End-of-month report
  will include channel breakdown.
- **First conversion event totals in GA4** — phone clicks, email clicks,
  form submissions, contact-CTA clicks all start counting from today.

---

## How to Use This File

**Adding entries:** Each time you do meaningful marketing work — published
a GBP post, requested indexing, fixed a page, ran an outreach effort,
updated content based on Search Console data — add a short note here the
same day. *Same day matters.* Don't try to reconstruct a month at month-end.

**At month-end:** Open this file and the latest version of
`trial-monthly-report.md`. Pull the "What drove it this month" section
of the report straight from this log — pick the 2–3 items most likely
to have moved the needle.

**Don't log:** routine commits to fix typos, design tweaks that don't
change SEO/UX outcomes, internal admin work. If it wouldn't change Joy's
opinion of whether to renew, it doesn't go here.
