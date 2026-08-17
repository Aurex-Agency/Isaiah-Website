# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Current phase

**Mobile experience and mobile art-direction pass is complete and verified.** Desktop is approved as the baseline and was intentionally not redesigned — the only shared-component change was scoped to a genuine mobile-caused bug (see below) and gated so it doesn't visually affect desktop. **Stopping here for human + ChatGPT mobile visual review.** No additional pages or launch work has been started.

## What changed this pass

**1. "What Isaiah Creates" rebuilt from scratch for mobile.** The prior mobile fallback (a fast, non-sticky pass-through of the desktop list) is gone. Mobile now gets its own sticky scroll sequence, sharing the same 300vh-of-scroll section and underlying scroll-tracking as desktop but with an entirely different mobile-specific layout: eyebrow at top, the single active capability's number and title dominant in the center (masked vertical transition between capabilities, not a receding list), a matching photo wiping in via `clip-path` below, and a description plus "01 / 04"-style progress rail at the bottom. Desktop's markup is untouched, sitting in its own `hidden sm:flex` branch alongside the new `sm:hidden` mobile branch.

**2. Full mobile image-by-image crop audit performed directly**, not assumed. Every Look, the mid-page CTAs, Social Presence, and the inquiry finale portrait were inspected at 390×844, 393×852, and 430×932 using precise scroll-position math (learned from a false-positive earlier in this project: `scrollIntoViewIfNeeded` on tall sections misrepresents crops — see prior status entries). Result: every composition already reads as intentional — full heads, faces, and key styling visible throughout, environmental context preserved in Looks 03/04/06, the Look 05 print-mat treatment intact. No object-position or aspect-ratio overrides were needed; the crops established in earlier passes hold up at all three widths.

**3. Social Presence metrics enlarged on mobile.** Previously the two stats per platform sat side-by-side at the same size used on desktop — reads as compressed on a narrow screen. Mobile now stacks them vertically at `text-6xl`, giving the numbers real presence, while desktop's side-by-side layout at its existing size is unchanged.

**4. Touch interactions verified, not just assumed safe.** Tapped the primary CTA and an image directly in a real touch-emulated browser context: navigation works, and no hover effect gets visually "stuck" after a tap (Motion's `whileHover` and the CSS `group-hover` underline/arrow treatments correctly don't trigger on touch, since neither uses touch events to simulate hover).

## A real bug found and fixed during verification

**Horizontal page overflow on mobile**, caused by Look 06's edge-reveal images (the `direction="left"`/`"right"` entrance added in the previous pass). Root cause: `RevealImage` applied the entrance `transform` and `overflow-hidden` to the _same_ element — moving a box does not cause its own `overflow-hidden` to contain that same movement, since the clip boundary moves with it. The element's initial `-56px` offset was pushing 36px past the viewport edge with nothing upstream to clip it, confirmed directly via `getBoundingClientRect()` on the live DOM. Fixed by splitting `RevealImage` into a stable, never-transformed outer wrapper (owns `overflow-hidden` and the sizing) with the animated entrance moved to an inner `absolute inset-0` layer — the transform is now reliably contained regardless of offset direction or magnitude. Verified zero horizontal overflow (`scrollWidth === clientWidth`) at all three mobile widths, laptop, and desktop after the fix, and confirmed the edge-reveal effect itself still looks and behaves identically once settled.

**Also caught:** a second WCAG AA contrast failure, this time on the new mobile "What Isaiah Creates" progress counter ("01 / 04") — it used `text-ink/55`, a value calibrated in an earlier pass for light-on-dark text, applied here to dark-on-_light_ (paper background) text where it measured 3.79:1 against the 4.5:1 minimum. Bumped to `/70`, matching the other ink-on-paper labels already established in this section. Re-verified clean with axe.

**Re-confirmed the reduced-motion sync fix still holds** for the new mobile-specific markup — checked the mobile title text, progress counter, and image clip states together at five scroll checkpoints in `reducedMotion: 'reduce'` mode; all three stayed perfectly synchronized throughout, zero console errors.

## Verification completed

Run directly against the implementation, not just inspected:

- `npm run typecheck` — pass
- `npm run lint` — pass, no warnings
- `npm run test` (Playwright smoke + `@axe-core` WCAG 2.2 AA, desktop + mobile) — 4/4 pass (one real contrast failure caught and fixed, see above)
- `npm run build` — pass, static homepage
- `npm run start` (production server) — HTTP 200, zero console errors across desktop 1440px, laptop 1280px, mobile 390/393/430px, and mobile `reducedMotion: 'reduce'`
- Horizontal overflow explicitly checked (`document.documentElement.scrollWidth` vs `clientWidth`) at all five of the above — zero overflow anywhere after the fix
- Mobile sticky "What Isaiah Creates" sequence scrolled through continuously (not discrete jumps) in both normal and reduced-motion modes on mobile viewport — clean entry, clean release, no trapping, no stuck states
- Full per-Look, per-width mobile crop audit (see above) — no real issues found
- Touch tap interactions verified directly in a touch-emulated context — CTA navigation works, no stuck hover states
- Social links and anchor navigation re-verified on mobile

No known open bugs.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + React 19, npm, `motion` for animation, Vercel hosting target. No CMS, no ecommerce, no auth.

## Open decisions

**Information needed from Isaiah before Social Presence can carry real metrics** (unchanged — demo values remain in place for design review only):

- Instagram follower count
- TikTok follower count
- Engagement rate, if available
- Monthly or recent view counts, if available
- Audience demographics, if he can provide them

Demo values (12.8K / 8.4% / 6.2K / 428K) populate `social-presence.tsx`'s `PLATFORMS` data, clearly commented as demo-only, with an on-page disclaimer. Replace with verified numbers directly in that file before launch.

**Carried over from prior status:**

- Email delivery integration (e.g. Resend) — form validates and logs server-side only, doesn't deliver anywhere real yet
- Which contact email the form should eventually deliver to
- Exact production domain — `layout.tsx` still uses a placeholder (`isaiahball.com`)
- Repo carries ~123MB of full-resolution images in git history — still a launch-readiness item
- Single-page vs. dedicated Inquiry page — still assumes single-page

## Next recommended action

**Human + ChatGPT mobile visual review.**

Do not begin additional pages or launch-readiness work (domain, email delivery, redirects, analytics, final SEO pass, or replacing demo social metrics with real ones) until that review is complete.
