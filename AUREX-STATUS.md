# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Current phase

**Conversion, information-hierarchy, and negative-space pass is complete and verified.** Evolves the homepage from a pure editorial photo portfolio into a high-converting personal-brand site that still reads as premium fashion editorial. Every major section now has an explicit business purpose alongside the photography. **Stopping here for human + ChatGPT visual review.** No additional pages or launch work has been started. The approved visual identity (palette, type system, Look numbering, restraint) was not redesigned — extended.

## What changed this pass

**1. Hero conversion message strengthened.** Identity block updated to "Isaiah Ball / Fashion Creator / Model / Creative Partner / Nashville based / Available for campaigns, collaborations and travel," with a small "Campaign Ready" label above it. Added a primary CTA ("Work With Isaiah" → scrolls to the inquiry form) and secondary CTA ("View Socials" → scrolls to the new Social Presence section), styled as editorial text links with an underline-draw and arrow-translate hover, not buttons. New shared `EditorialLink` component reused for every CTA on the site.

**2. Social Presence section added** (`social-presence.tsx`, new, anchored at `#social`). Real handles only, Instagram @_.isaiahball and TikTok @_isaiahball, both linking out. Qualitative positioning copy ("Fashion, lifestyle and personality-led content across short-form social platforms... Nashville based. Growing audience. Available for brand partnerships and UGC."). **No follower counts, engagement rates, or other metrics are displayed** — none exist yet, verified. Architected so a stats row can be added later without restructuring (see Open Decisions).

**3. "What Isaiah Creates" commercial section added** (`what-isaiah-creates.tsx`, new). Four numbered capabilities (Brand Content, Modeling, UGC, Creative Collaborations) in large editorial typography with alternating indent and divider lines — not cards, not icons.

**4. Every Look now carries a commercial label**, varied in execution rather than templated: Look 02 "Lifestyle Content" (small subtitle), Look 03 "Editorial + Events" (caption line beneath an oversized numeral), Look 04 "Hospitality + Experiences" (integrated into the reworked negative-space copy block), Look 05 "Style With Range" (subtitle in the header block), Look 06 "Available To Travel" (full positioning statement, see #7).

**5. Negative space given purpose.** Look 04's previously-empty left column now holds the "Hospitality + Experiences" positioning copy. Look 05's header area now carries the "Style With Range" line instead of empty space above the triptych. Look 06 gained a full positioning block beneath the hero image. None of this was solved by simply enlarging images, per the brief's explicit guardrail.

**6. Two mid-page conversion moments added** (`mid-page-cta.tsx`, new, reused twice): "Planning a campaign? Work With Isaiah →" after Look 03 (right after the strongest editorial work), and "Interested in a partnership? Start a Collaboration →" after Look 06 (right before the finale). Not spammed after every section.

**7. Look 06 positioning strengthened**: "Nashville based. Available beyond." plus "Available for select campaigns, shoots, events and travel opportunities," placed beneath the hero image with its own subtle counter-motion (see below).

**8. Inquiry finale strengthened** with a "Let's Make Something." headline above the existing "Available For" list and form. Added `scroll-mt` to both the finale and the Social Presence section so the fixed header doesn't clip content when jumped to via anchor link — a real bug caught during verification (see below).

**9. Motion layer extended**, still restrained:

- `ParallaxText` (new) — scroll-linked movement (~48-56px) on the Look 03 and Look 04 oversized numerals
- `RevealImage` gained a `direction` prop — two Look 06 supporting images now enter from the side (edge reveal) instead of from below
- Counter-motion: Look 06's positioning text moves opposite the hero image's parallax via a negative `ParallaxText` range
- `EditorialLink` carries the CTA micro-interaction (underline draw, arrow translate) used everywhere
- No scroll-jacking, no long entrances, not every element animated

**10. Social metrics architecture** — deliberately not built into a visual placeholder. See Open Decisions for exactly what's needed from Isaiah before a stats row can be added.

**11. Content density/rhythm** — page now reads identity → visual proof → capability → visual proof → mid-CTA → social presence → visual proof ×3 (each carrying its own commercial label) → mid-CTA → conversion, instead of photo-photo-photo-photo-form. Photography remains dominant; new text sections are short and purpose-built, not long-form marketing copy.

## A real bug found and fixed during verification

A WCAG AA contrast failure: `text-paper/40`, used for every new small uppercase label (chapter commercial tags, section eyebrows), resolves to `#736f6a` on the `#1c1815` background — a 3.53:1 contrast ratio against the required 4.5:1 for normal-size text. Calculated the actual blend mathematically, confirmed against axe's own reported color, and found the real threshold (~48% opacity) before applying a fix with real margin: every affected label bumped from `/40` to `/55`. Re-verified with Playwright + axe — 4/4 tests pass, zero violations. Placeholder text and disabled form states were left alone since axe correctly exempts them.

Also fixed during this pass: an em dash appeared in newly-written copy ("Style With Range — comfortable...") before being caught and corrected — the constitution's no-dash rule for website copy was re-checked across all new and existing components; the only remaining em/en dashes in the codebase are in code comments, not visible copy.

## Verification completed

Run directly against the implementation, not just inspected:

- `npm run typecheck` — pass
- `npm run lint` — pass, no warnings
- `npm run test` (Playwright smoke + `@axe-core` WCAG 2.2 AA, desktop + mobile) — 4/4 pass (one real contrast failure caught and fixed, see above)
- `npm run build` — pass, static homepage
- `npm run start` (production server) — HTTP 200, zero console errors across normal, `reducedMotion: 'reduce'`, and mobile contexts
- Full continuous-scroll simulation on desktop (1440px) and mobile confirmed every new section renders, all reveals trigger, no stuck elements
- Anchor-link navigation tested directly (`#inquire`, `#social`) — confirmed correct scroll position with the fixed header no longer clipping content
- Social links verified to point to the real, verified handles (Instagram @_.isaiahball, TikTok @_isaiahball) consistently across the footer, Social Presence section, and Person JSON-LD schema
- Grepped for any follower/engagement/statistic-shaped text — none found; only the code comment noting metrics are intentionally omitted

No known open bugs.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + React 19, npm, `motion` for animation, Vercel hosting target. No CMS, no ecommerce, no auth.

## Open decisions

**New — information needed from Isaiah before the Social Presence section can carry real metrics:**

- Instagram follower count
- TikTok follower count
- Engagement rate, if available
- Monthly or recent view counts, if available
- Audience demographics, if he can provide them

None of the above are displayed anywhere on the live site. Do not add placeholder numbers when this information arrives — wire them into `social-presence.tsx`'s `PLATFORMS` data directly.

**Carried over from prior status:**

- Email delivery integration (e.g. Resend) — form validates and logs server-side only, doesn't deliver anywhere real yet
- Which contact email the form should eventually deliver to
- Exact production domain — `layout.tsx` still uses a placeholder (`isaiahball.com`)
- Repo carries ~123MB of full-resolution images in git history — still a launch-readiness item
- Single-page vs. dedicated Inquiry page — still assumes single-page

## Next recommended action

**Human + ChatGPT visual review of the conversion-focused homepage.**

Do not begin additional pages or launch-readiness work (domain, email delivery, redirects, analytics, final SEO pass) until that review is complete.
