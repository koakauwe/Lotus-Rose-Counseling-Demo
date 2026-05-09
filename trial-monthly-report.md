# Lotus Rose Counseling — Monthly Trial Report Template

This is the format for the monthly recap Joy gets during the 3-month trial.
The goal is **one short, honest paragraph that answers the question**:
*"Did marketing produce more new clients than it cost?"*

Everything below is in service of that one question. Don't dress it up with
dashboards. Send the email, then file the report in the repo.

---

## How to Fill This In

Each month, gather these inputs *before* writing:

| Input | Where to Get It | Notes |
|---|---|---|
| Form submissions count | Joy's inbox (search "New Consultation Request") OR Resend dashboard | One per email. Skip honeypot/spam. |
| Form submissions by referral source | The "Heard About Us" line at the bottom of each notification email | Tally manually. Roll "Not provided" into "Unknown." |
| New clients this month | **Ask Joy directly.** "How many new clients started this month?" | This is the only real ROI number. |
| Where new clients said they found you | **Ask Joy directly.** "What did each one say when you asked how they found you?" | Match to the form submission names if you can. |
| Form-to-client conversion rate | Calculate: new clients ÷ form submissions | Useful trend metric over the trial. |
| Top traffic sources | GA4 → Reports → Acquisition → Traffic acquisition | Filter to last month. |
| Top GBP campaigns | GA4 → Reports → Acquisition → Sessions by campaign → filter `source = gbp` | Tells you which GBP topics drove sessions. |
| GBP profile activity | GBP dashboard → Performance | Calls, direction requests, profile views. |
| GSC impressions/clicks | Search Console → Performance | Total impressions, total clicks, top queries. |

**Time to gather and write: about 30 minutes once you've done it twice.**

---

## The Report (What Joy Sees)

Paste this into an email or a doc and send it. Don't attach a spreadsheet
unless she asks. The numbers in the prose are doing the work.

### Email subject

`Lotus Rose — Marketing Recap, [Month Year]`

### Body

> Hey Joy,
>
> Here's the recap for **[Month]**.
>
> *(Month 1 only — include this paragraph and then delete it from the
> month 2 and 3 emails.)*
>
> *This is the first month with real measurement in place. The numbers
> below are an honest first picture, not a comparison to anything —
> we didn't have analytics or form tracking running before this. The
> point of month 1 is to establish what "normal" looks like with these
> pieces working. Month 2 is when we'll have something to compare
> against.*
>
> **The headline:**
> The website produced **[X] consultation requests** this month. You said
> **[Y] became consultation calls** and **[Z] of those became new clients**.
> Those new clients said they found us through **[channel breakdown — e.g.,
> "2 through Google search, 1 through your Google Business Profile"]**.
>
> **The funnel:**
> - **[X]** form submissions
> - **[Y]** consultation calls (per your numbers)
> - **[Z]** new clients started ([Z÷X*100]% form-to-client rate)
>
> **What drove it this month:**
> [1-3 sentences pointing to specific things that worked. Examples:
>  - "The Mormon Wives mention on the homepage came up in two intake conversations."
>  - "The May 11 GBP post on EMDR drove [N] sessions to the EMDR page."
>  - "Search Console shows we ranked on page 1 for 'postpartum therapy Orem' starting [date]."]
>
> **What I'm changing for [next month]:**
> [1-2 sentences. Examples:
>  - "Pulling back on infertility content; not enough volume yet."
>  - "Adding two GBP posts on grief work after seeing 4 inquiries this month."
>  - "Submitting the new modalities pages to Search Console."]
>
> Let me know if you want to talk through any of it.
>
> — Koa

---

## What NOT to Include

These are tempting but actively make the report worse:

- ❌ **Bounce rate, time on page, scroll depth.** Vanity metrics that don't answer the question.
- ❌ **Phone click counts as a conversion number.** A click isn't a call. Reference it once if it's interesting context, never as the success metric.
- ❌ **Big GA4 screenshots.** Joy doesn't read GA4. The prose is the report.
- ❌ **"Engagement is up X%" without saying what it produced.** Engagement that doesn't lead to a conversation is noise.
- ❌ **Claiming credit for clients who would have come anyway.** If she got a referral from another therapist, that's word of mouth, not marketing. Be honest about it.

---

## What to Track Internally (Not in the Report)

These go into your own tracker, not Joy's email. They feed *your* decisions
about what to do next month.

- Form submission → client conversion rate, trended over the 3 months
- Per-channel cost per client (when there's enough volume to calculate)
- Which GBP post topics drive the most sessions vs. the most form submissions
  (these are different — high traffic doesn't always mean high intent)
- Pages with high impressions but low click-through in GSC → titles to rewrite
- Pages with high traffic but no form submissions → CTAs to test

---

## What We Knew Going In

We didn't have website analytics before May 1, 2026, so most website-side
"baseline" numbers don't exist. The trial isn't a pure comparison-to-baseline
exercise — it's an absolute measurement: *did marketing produce more new
clients than it cost?* That math works without historical data.

That said, **Joy does have real intake numbers from her practice records,
and those are the most important baseline of all.** They tell us where
"recovered" looks like and where "great" looks like.

### Joy's intake history (provided May 6, 2026)

| Period | Inbound leads | New clients | Lead → client rate |
|---|---|---|---|
| **Historical average** (pre-slowdown) | ~30/month | 12–15/month | ~40–50% |
| **March 2026** | 16 | 7 | 44% |
| **April 2026** | 15 | 6 | 40% |

**Industry context:** Joy reports the slowdown isn't unique to Lotus Rose —
it's an industry-wide pattern. Other therapy practices are seeing the same
softness. This matters for trial framing: we're working against a headwind,
not a calm sea.

**What this means for the trial:**
- "Back to historical average" = ~30 leads/month → 12–15 new clients/month.
  That's roughly **double current performance.** A real, meaningful goal.
- The lead → client rate (40–44%) is already *good* and tracks with industry
  norms. This isn't a "Joy needs to convert better" problem. It's a *volume*
  problem. Marketing's job is to feed her more leads, not improve her
  closing rate.
- If the trial moves leads from 15/month → 22/month with the same conversion
  rate, that's roughly +3 new clients/month. At Joy's average lifetime value,
  that's the ROI math.

### Other going-in signals (fill these in once and leave them)

| Signal | Value | Source |
|---|---|---|
| GBP profile views — April 2026 | _____ | GBP dashboard → Performance → 30 days ending April 30 |
| GBP calls — April 2026 | _____ | GBP dashboard → Calls |
| GBP direction requests — April 2026 | _____ | GBP dashboard → Directions |
| GSC impressions — last 28 days before May 1 | _____ | Search Console → Performance |
| GSC clicks — last 28 days before May 1 | _____ | Search Console → Performance |

**Notes for month 1:**
- GA4 has no pre-trial data, so the report leads with absolute numbers
  (e.g., "12 form submissions this month"), not deltas.
- Form submissions weren't tracked before May 6, 2026, so any
  "submissions per month" trend starts in June.
- GSC and GBP do have historical data, so April → May → June comparisons
  on those platforms are real and worth surfacing.

---

## Monthly Reports Archive

Keep a running list of each month's report below. Even one sentence per month
is enough to spot trends without re-opening old emails.

### Month 1 — [Month Year]
- Form submissions: __ | New clients: __
- Top channel: ____
- One thing that worked: ____
- One thing that didn't: ____

### Month 2 — [Month Year]
- Form submissions: __ | New clients: __
- Top channel: ____
- One thing that worked: ____
- One thing that didn't: ____

### Month 3 — [Month Year]
- Form submissions: __ | New clients: __
- Top channel: ____
- One thing that worked: ____
- One thing that didn't: ____

---

## How the Three Months Are Different

Each month plays a different role. Don't write the same kind of report
three times.

| Month | What we're doing | What the report contains |
|---|---|---|
| 1 (May) | Establishing the measurement floor | Absolute numbers, no comparisons. "This is what we now know." |
| 2 (June) | First real comparison | Month-over-month deltas finally mean something. Channel mix becomes signal. |
| 3 (July) | Decision month | Two months of trends + revenue attribution. "Here's what it produced. Worth keeping?" |

---

## Trial Decision Framework

At the end of month 3, the conversation with Joy is:

> "Over three months you got [N] new clients we can trace back to the website.
> At your average client lifetime value, that's roughly $[X] in revenue.
> You paid me $[Y]. Is the gap big enough to keep going?"

If the answer is yes, transition to a monthly retainer.
If the answer is no, be honest about why (volume too low, wrong channel mix,
content not converting) and decide whether a different scope would change it.

The trial is **a test, not a sales pitch.** If the numbers don't work, say so.
That's how you earn long-term clients, not by spinning weak data.
