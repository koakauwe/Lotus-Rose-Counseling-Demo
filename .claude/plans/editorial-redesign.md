# Lotus Rose Editorial/Magazine Layout Redesign

## Goal
Rebuild the site layout from Radiant-style (gradient heroes, centered labels, card grids) to an editorial/magazine style that matches Lotus Rose's current visual identity — image-heavy, alternating text+photo sections, full-bleed imagery.

## Content Approach
- Full rewrite using Joy's interview content for authentic voice
- Phone number: (801) 642-4244 (already updated in several files)
- Preserve all existing SEO (schema, FAQ, meta tags, breadcrumbs)

## Layout Changes

### 1. global.css — New Editorial Layout System
**Add:**
- `.split-section` — 50/50 grid (image + text), alternates with `.split-section--reverse`
- `.full-bleed-hero` — full-width background image with dark overlay + white text
- `.full-bleed-photo` — full-width image break between content sections
- `.editorial-text` — wider max-width (700px), generous line-height, pull-quote styling
- `.pull-quote` — large italic serif quote with accent border

**Modify:**
- Keep all existing card/button/FAQ/form/footer styles (they're fine)
- Keep color tokens, font stacks, shadows, transitions
- Adjust `.section-label` to work in both centered and left-aligned contexts

### 2. Homepage (index.astro) — Full Restructure
**Current:** Gradient hero > symptom cards > testimonials > Why LR box > therapist circles > service cards > photo grid > FAQ > CTA
**New editorial flow:**
1. **Full-bleed hero** — Office/flower photo background, white text overlay, headline + subtitle + CTA
2. **Split section** (text left, Joy's photo right) — Joy's story intro from interview
3. **Split section reverse** (photo left, text right) — "We don't just say we specialize in women"
4. **Full-width photo break** — Office interior shot
5. **Therapist profiles** — Keep 4-up grid but with real photos (already extracted)
6. **Split section** — Services overview with list links (not cards)
7. **Testimonials** — Keep card format (works fine editorially)
8. **Full-width photo break** — Another office shot
9. **FAQ accordion** — Keep as-is
10. **CTA section** — Keep gradient background

### 3. About page (about.astro) — Editorial Storytelling
**Current:** Gradient hero > text blocks > highlight box > photo grid
**New:**
1. **Full-bleed hero** — Office photo with "Our Story" overlay
2. **Split section** — Joy's photo + her story (from interview: 3 kids, birth trauma, PPD)
3. **Pull quote** — "I wanted to create a place that was very safe, that felt warm and welcoming"
4. **Split section reverse** — What makes LR different + training details
5. **Full-width photo gallery** — Office photos (3-up)
6. **CTA**

### 4. Service pages — Editorial Treatment
**Current ServiceLayout:** Gradient hero > slot content > CTA
**New ServiceLayout:**
1. **Full-bleed hero** — Relevant photo background + service name overlay
2. **Split section** — Intro text + photo
3. Slot content (keep existing section structure for body copy)
4. **CTA**

### 5. Our Therapists page — Keep mostly same
- TherapistCard component already uses side-by-side photo+text (editorial-compatible)
- Just update hero from gradient to full-bleed photo

### 6. Contact & Insurance — Keep as-is
- Already skip hero per checklist #39
- Layout is functional, not decorative

## Files to Modify
1. `src/styles/global.css` — Add editorial layout classes
2. `src/pages/index.astro` — Full homepage restructure
3. `src/pages/about.astro` — Editorial storytelling layout
4. `src/layouts/ServiceLayout.astro` — Full-bleed hero + split intro
5. `src/pages/postpartum-depression.astro` — Update to use new ServiceLayout
6. `src/pages/emdr-therapy.astro` — Update to use new ServiceLayout
7. `src/pages/our-therapists.astro` — Update hero only

## Files NOT Changed
- Header, Footer, SchemaOrg, MidPageCTA, TherapistCard — keep as-is
- BaseLayout — keep as-is
- Contact, Insurance, 404, Services overview — keep as-is
- All schema/SEO infrastructure — untouched

## Preview Plan
- Use preview_start to run dev server locally
- Verify with preview_screenshot before any push
- No GitHub push or Cloudflare deploy until user approves
