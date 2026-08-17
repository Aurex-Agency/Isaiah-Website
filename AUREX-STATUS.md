# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Current phase

**Homepage art-direction and motion refinement pass is complete and verified.** Addresses the first visual review's findings: corrected image crops, varied page flow/transitions, differentiated chapter-title treatments, reworked Look 04/05/06 compositions, a merged editorial inquiry finale, and a real (not decorative) motion layer. **Stopping here for human + ChatGPT visual review.** No additional pages or launch work has been started.

## What changed this pass

**1. Image cropping — root cause and fix.** Every source photo is portrait or square; none are landscape. The prior implementation forced several into landscape-ish boxes (Look 06's hero into `16:9`, Look 03's fourth image into `21:9`), which is what cropped Isaiah's head out of frame. Fixed by measuring each image's true rendered aspect ratio via actual browser decoding (not file metadata, which can be misleading — see below) and choosing intentional crops from real ratios: Look 01/02 portraits now at `2:3`/`3:4` matching native, Look 03's images corrected from a wrongly-landscape `4:3`/`21:9` to portrait-safe `3:4`/`2:3`, and Look 06's hero now uses its true `~9:16` ratio instead of `16:9` — showing the full figure and environment, not a torso crop.

- Note on tooling: `sips`/`file` EXIF orientation reporting was inconsistent with what browsers actually render (confirmed via headless Chromium `naturalWidth`/`naturalHeight`, which is what Next.js Image and real visitors both see). Trust browser-decoded dimensions over file-metadata tools for this kind of check going forward.

**2. Page flow.** Removed the uniform `border-b` divider between every section, which was the main source of the "gallery, hard stop, gallery" feeling. Introduced two genuine structural overlaps (Look 03 → 04, Look 05 → 06) via negative margins so a chapter visually begins before the previous one fully ends — kept intentionally small (`-24px` to `-40px`) after discovering a larger overlap caused normal scroll navigation to skip past Look 04's title content entirely.

**3. Chapter-title variation.** No longer one shared template: Look 02 keeps a small subtle label, Look 03 and Look 04 get an oversized, low-opacity numeral as a real design event, Look 05 pairs a small number with a large title in negative space, Look 06's title overlaps directly on the hero image with a legibility scrim.

**4. Look 04 ("The Table") reworked** — larger image scale, offset/asymmetric positioning, the oversized "04" numeral integrated as tension rather than the image floating alone in empty space.

**5. Look 05 ("Home Ground") reworked** — real hierarchy instead of three uniform images: one hero gets a deliberate paper-colored mat/print treatment at larger scale, the two supporting images are smaller and unframed with varied vertical offset.

**6. Look 06 ("Away") fully reworked** — the hero now shows full environmental context (trees, brick square, full figure) instead of a cropped torso, paired with an airier, more asymmetric arrangement of the three supporting images.

**7. Inquiry finale reworked** — `ClosingStatement` and the old `InquirySection` are merged into one `InquiryFinale` component: an editorial split with the portrait on one side, "Available For / Brand Partnerships / Modeling / Creative Projects / Based in Nashville / Available for select projects and travel" plus the form on the other. No longer a generic form bolted to the bottom.

**8-9. Motion layer** — added via three new primitives in `src/components/motion/`:

- `RevealImage` — entrance choreography (opacity + 28px translate, optional 1.03 scale-settle on hero/primary images), staggered per Look
- `RevealTitle` — masked vertical reveal for chapter titles/numerals
- `ParallaxImage` — subtle 5-6% scroll-linked movement, applied only to three images (Look 01 hero, Look 03 hero, Look 06 hero), not everywhere
- `LookProgress` — the fixed corner tracker now slides vertically between numbers instead of a plain fade
- No scroll-jacking, no autoplay, no floating decoration, no blanket fade-up

**10. Header** increased from `text-sm`/14px to `text-lg`/`text-xl` with more padding — still restrained, no longer illegibly small.

## A real bug found and fixed during verification (worth flagging directly)

The `RevealTitle` masked-reveal pattern had a structural bug: the animated child was clipped by its own `overflow-hidden` parent _before_ the reveal fired, which meant `IntersectionObserver`-based `whileInView` could never detect it as visible — a chicken-and-egg deadlock where every chapter title/numeral was invisible regardless of scroll position. Caught this by testing with real Chromium scroll simulation rather than trusting static screenshots (an initial rapid-scroll screenshot test gave a false "empty page" reading before a proper continuous-scroll test isolated the real cause). Fixed with Motion's standard parent/child variants pattern; confirmed via direct DOM/transform inspection that every title reveals correctly after a full scroll-through, on both desktop and mobile.

A second, related bug: `useReducedMotion()` can resolve synchronously on the client's first paint, differing from the server-rendered pass and throwing a real React hydration-mismatch console error. Fixed with a `useSyncExternalStore`-based hook (`use-safe-reduced-motion.ts`) that guarantees the server snapshot and first client render match exactly, and switched from `initial={undefined}` to explicit `animate` targets so reduced-motion users get content immediately rather than a permanently-stuck hidden state. Verified: zero console errors in both normal and `reducedMotion: 'reduce'` browser contexts, and reduced-motion users see all content without needing to scroll.

## Verification completed

Run directly against the implementation, not just inspected:

- `npm run typecheck` — pass
- `npm run lint` — pass, no warnings
- `npm run test` (Playwright smoke + `@axe-core` WCAG 2.2 AA, desktop + mobile) — 4/4 pass
- `npm run build` — pass, static homepage
- `npm run start` (production server) — HTTP 200, zero console errors, desktop and mobile, verified via real headless-browser checks
- Reduced-motion explicitly tested via Playwright's `reducedMotion: 'reduce'` context — zero console errors, content visible without scroll
- Full continuous-scroll simulation (desktop 1440px, laptop 1280px, mobile) confirmed every image and title reveals correctly, no stuck/invisible elements other than expected off-screen carousel items and hidden mobile/desktop variants
- Every image crop reviewed against its true browser-decoded aspect ratio, not file metadata
- Section overlaps (Look 03→04, Look 05→06) checked for visual collision — none found after reducing overlap magnitude

No known open bugs.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + React 19, npm, `motion` for animation, Vercel hosting target. No CMS, no ecommerce, no auth.

## Open decisions (unchanged from prior status)

- Email delivery integration (e.g. Resend) — form validates and logs server-side only, doesn't deliver anywhere real yet
- Which contact email the form should eventually deliver to
- Real Instagram follower/engagement numbers — still unverified, not used anywhere
- Exact production domain — `layout.tsx` still uses a placeholder (`isaiahball.com`)
- Repo carries ~123MB of full-resolution images in git history — still a launch-readiness item
- Single-page vs. dedicated Inquiry page — still assumes single-page

## Next recommended action

**Human + ChatGPT visual review of the refined homepage.**

Do not begin additional pages or launch-readiness work (domain, email delivery, redirects, analytics, final SEO pass) until that review is complete.
