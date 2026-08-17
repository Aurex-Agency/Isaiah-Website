# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Current phase

**Detail, motion-direction, and visual-density polish pass is complete and verified.** Targets the second review's specific weaknesses: dead desktop space, static-feeling information sections, mid-tier scroll animation, a Social Presence section that needed a signature treatment, and a handful of mobile crops needing independent art direction. **Stopping here for human + ChatGPT visual review.** No additional pages or launch work has been started. The approved visual identity and the prior pass's conversion architecture were not redesigned — refined.

## What changed this pass

**1. "What Isaiah Creates" rebuilt as a sticky, scroll-linked interactive sequence.** No longer a static stacked list. The section pins (`position: sticky`) for 350vh of scroll on desktop; as the visitor scrolls, one of the four capabilities is "active" at a time — its number and title grow and shift to a denim accent, a vertical progress rail fills alongside the list, and a photograph tied to that capability wipes into view via `clip-path` (not an opacity fade) on the right half. Photos are drawn from the existing Look image set, matched thematically (Brand Content → Around Town, Modeling → Studio, UGC → Away/NYC, Creative Collaborations → The Table) — no new assets needed. Mobile falls back to a plain vertical sequence, not an attempt at the desktop sticky behavior, per the brief.

**2. Look 04 ("The Table") substantially reworked.** Large two-line typographic statement ("Hospitality / + Experiences") now anchors the section, with the oversized "04" numeral integrated directly behind it (not floating separately), a real opportunity list (Styled Shoots, Events, Hospitality Partnerships, Lifestyle Campaigns), and the hero image given genuine counter-motion — the image parallaxes one direction on scroll while the typography block drifts the opposite way via a negative-range `ParallaxText`.

**3. Look 03's dead space fixed.** The empty margin beside the fourth "After Dark" image now holds real content: a small "Nashville, TN" / "Look 03 / 06" metadata pair plus a short positioning line ("Editorial-ready for campaigns, events and after-hours coverage"), rather than being solved by enlarging the photo.

**4. Social Presence rebuilt as the intended signature section.** A large "Social" / "Presence" two-line typographic device now opens it. Both platforms carry a masked, per-character digit-roll reveal (new `AnimatedMetric` component) for stat display — **using clearly-labeled DEMO values only** (12.8K / 8.4% / 6.2K / 428K, matching the brief's own example figures), with an explicit on-page disclaimer ("Metrics shown are placeholder demo values for design review only, pending Isaiah's verified figures") plus a prominent code comment marking the data block as demo-only and not for production. See Open Decisions for exactly what's needed from Isaiah to replace these.

**5. Visual detail layer added across the site:** the fixed Look-progress tracker now reads "03 / 06" instead of just "03"; a small animated scroll cue was added to the Look 01 hero; every `RevealImage` now carries a subtle 3.5% hover-zoom on desktop pointer devices (disabled specifically on Look 05's matted "print" image, since a physical print shouldn't visually zoom); CTA links got a stronger primary/secondary distinction (primary CTAs are now larger and shift to the denim accent color on hover).

**6. Desktop density increased selectively** in Look 03, Look 04, and "What Isaiah Creates" specifically — the three areas flagged as having the most inactive space — rather than uniformly enlarging photography across the site.

**7. Mobile crop QA performed directly**, not assumed. Every Look was inspected at 390×844, 393×852, and 430×932 using precise scroll positioning (not `scrollIntoViewIfNeeded`, which produced a false positive during this pass — see below). Result: no real crop problems found; all compositions read as intentional with full heads/faces visible. No mobile-specific object-position overrides were needed beyond what the prior pass already established.

## Two real bugs found and fixed during verification

**Reduced-motion desync in the new sticky section.** The text panel's "active" state (React state, updated via a scroll listener) and the image wipes' reduced-motion fallback (which read that same state) drifted out of sync — at a given scroll position the text would correctly show capability 3 as active while the image stack was still showing capability 1. Root cause: the normal-motion path drives images directly off continuous scroll position, but the reduced-motion path was going through an intermediate React state update instead, introducing lag. Fixed by deriving the reduced-motion image state from the exact same scroll-position calculation as the text panel (a hard-stepped `useTransform`, no interpolation) rather than through state — verified in sync at five checkpoints across the scroll range after the fix, zero console errors.

**A false-positive "cropped head" finding, caught and corrected before reporting it.** An initial mobile QA pass using `scrollIntoViewIfNeeded()` on tall multi-image sections appeared to show Look 02's hero cropping off Isaiah's head entirely. Isolating the exact image element directly, and separately re-verifying with precise scroll-position math instead of `scrollIntoViewIfNeeded`, proved the image renders correctly with full head and body visible — the alignment behavior of `scrollIntoViewIfNeeded` on a section taller than the viewport was landing the screenshot mid-image, not the image itself being miscropped. Re-ran the entire mobile crop QA pass with the reliable method before concluding anything. Worth remembering for future QA passes on this site.

**Also caught:** a Next.js dev-mode warning ("Image with `fill` and parent element with invalid position") introduced by the new hover-zoom wrapper in `RevealImage`, from a non-positioned intermediate `div`. Fixed by giving that wrapper explicit `position: relative`.

## Verification completed

Run directly against the implementation, not just inspected:

- `npm run typecheck` — pass
- `npm run lint` — pass, no warnings
- `npm run test` (Playwright smoke + `@axe-core` WCAG 2.2 AA, desktop + mobile) — 4/4 pass
- `npm run build` — pass, static homepage
- `npm run start` (production server) — HTTP 200, zero console errors across desktop 1440px, laptop 1280px, `reducedMotion: 'reduce'`, mobile 390px, and mobile 430px
- Sticky "What Isaiah Creates" sequence scrolled through step-by-step in both normal and reduced-motion modes, confirmed clean wipe transitions with no seams, and (after the fix above) confirmed the text/image active-state stays in sync throughout
- Dedicated mobile crop review at 390×844, 393×852, and 430×932 using precise scroll positioning — no real crop issues found
- Demo social metrics confirmed clearly labeled on-page and in code; grepped for any other unverified statistic-shaped text — none found
- Social links and all CTAs (`#inquire`, `#social`) verified to navigate correctly with the fixed header no longer clipping target content
- Swept all new copy for em/en dashes per the constitution's writing standard — clean; only code comments contain them

No known open bugs.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + React 19, npm, `motion` for animation, Vercel hosting target. No CMS, no ecommerce, no auth.

## Open decisions

**Information needed from Isaiah before Social Presence can carry real metrics** (unchanged from prior status, still not resolved — demo values are in place for design review only, per this pass):

- Instagram follower count
- TikTok follower count
- Engagement rate, if available
- Monthly or recent view counts, if available
- Audience demographics, if he can provide them

Demo values (12.8K / 8.4% / 6.2K / 428K) currently populate `social-presence.tsx`'s `PLATFORMS` data, clearly commented as demo-only. Replace with verified numbers directly in that file before launch — do not leave the demo values in a production deploy.

**Carried over from prior status:**

- Email delivery integration (e.g. Resend) — form validates and logs server-side only, doesn't deliver anywhere real yet
- Which contact email the form should eventually deliver to
- Exact production domain — `layout.tsx` still uses a placeholder (`isaiahball.com`)
- Repo carries ~123MB of full-resolution images in git history — still a launch-readiness item
- Single-page vs. dedicated Inquiry page — still assumes single-page

## Next recommended action

**Human + ChatGPT visual review of the polished homepage.**

Do not begin additional pages or launch-readiness work (domain, email delivery, redirects, analytics, final SEO pass, or replacing demo social metrics with real ones) until that review is complete.
