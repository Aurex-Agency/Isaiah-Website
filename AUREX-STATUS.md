# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Current phase

**Homepage implementation is complete and verified.** Built per the approved creative direction (`CREATIVE-DIRECTION.md` §0, "The Debut" with required refinements) and the reviewed `HOMEPAGE-DESIGN.md` plan, incorporating the human + ChatGPT implementation-priority refinements (identity hierarchy, reduced explanatory copy, varied per-Look composition, restrained motion). **Stopping here for human + ChatGPT visual review.** No additional pages or launch work has been started.

## What was built

Homepage only (`src/app/page.tsx`), composed of:

- `SiteHeader` — persistent wordmark + "Inquire" link that scrolls to the form
- `LookProgress` — fixed corner Look-number tracker (desktop only), IntersectionObserver-driven, respects `prefers-reduced-motion`
- Six bespoke Look sections (`look-01-studio.tsx` through `look-06-away.tsx`), each with its own desktop composition and a distinct, deliberate mobile recomposition — not a shared template. Density varies 3/3/4/1/3/4 images per the approved plan.
- `ClosingStatement` — portrait + one short line, no invented proof
- `InquirySection` / `InquiryForm` — Name, Email, Reason for Contact, Message; client component using React 19 `useActionState` against a server action (`src/app/actions.ts`) with server-side validation
- `SiteFooter` — location, real Instagram/TikTok links, copyright

**Design system:** Fraunces (display) + Inter (body) via `next/font/google`; palette color-picked from the actual photography — warm charcoal/off-white base, denim blue primary accent, rust and olive supporting tones (`src/app/globals.css`). No black-and-white "luxury" treatment, no gradients, no rounded-UI/card patterns anywhere in the implementation (verified by grep).

**Motion:** `motion` package installed. Only two moments: the Look-number tick and hard-cut section transitions (i.e., the absence of crossfade). No autoplay, no scroll-jacking, no decorative background motion. Reduced-motion verified with `reducedMotion: 'reduce'` context — zero console errors, transitions degrade correctly.

**Images:** all via `next/image` with `fill` + explicit `sizes`, so responsive variants are generated and full-size originals aren't delivered as-is to visitors — confirmed via production build. `priority` set on the three Look 01 images (hero + both portraits), since testing showed the portrait row can sit above the fold on shorter viewports (a real Next.js LCP warning caught this and was fixed).

## Verification completed

Run directly against this implementation, not just inspected:

- `npm run typecheck` — pass
- `npm run lint` — pass, no warnings
- `npm run test` (Playwright smoke + `@axe-core` WCAG 2.2 AA, desktop + mobile) — 4/4 pass. **One real accessibility bug was caught and fixed**: the mobile horizontal swipe-image groups (Looks 02, 05, 06) were scrollable but not keyboard-focusable (`scrollable-region-focusable`, axe "serious" impact) — fixed with `tabIndex={0}` + `role="group"` + `aria-label` on each.
- `npm run build` — pass, static homepage
- `npm run start` (production server, not just dev) — verified directly: HTTP 200, zero console errors, desktop and mobile, via a real headless-browser check
- Visual inspection in a real browser at desktop (1440px) and mobile (iPhone 13) sizes — screenshots reviewed section by section, including close-up checks of Look 03 (the dense spread) and Look 04 (the minimal single-image moment)
- Keyboard tab order checked — correctly skips hidden mobile-only elements on desktop, reaches all form fields in order
- One real Next.js LCP performance warning was caught during verification and fixed (see above)
- One test-run false alarm (10 failed image requests) was traced to a stale leftover dev-server process occupying port 3000 from earlier in the session, not an app bug — confirmed by killing it and getting a clean, reproducible pass

No known open bugs.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + React 19, npm, Vercel hosting target. `motion` added as a new dependency for the two restrained animation moments described above. No CMS, no ecommerce, no auth.

## Decisions carried into implementation

- Identity hierarchy block (Isaiah Ball / Fashion Creator / Model / Creative Collaborator / Nashville, Tennessee / available for select projects and travel) replaces the earlier prose-paragraph hero copy, per the human + ChatGPT refinement.
- Per-Look captions were cut to just a number + title (no sentence-length captions) — photography carries the persuasion, per refinement 4.
- Single continuous homepage scroll, no separate Inquiry page (still an open question — see below).
- Inquiry form submissions are validated server-side and logged server-side; **real email delivery is not yet wired up** (no provider installed) — flagged clearly in code and here.

## Open decisions

- **Email delivery integration** (e.g. Resend) — the form works and validates correctly but doesn't deliver anywhere real yet. Needed before launch.
- Which contact email the form should eventually deliver to.
- Real Instagram follower/engagement numbers — still unverified; not used anywhere in the implementation.
- Exact production domain — `layout.tsx` currently uses a placeholder (`isaiahball.com`) for `metadataBase` and OG tags; needs the real domain before launch.
- Repo carries ~123MB of full-resolution images in git history (unchanged from the last status update) — still a launch-readiness item, not resolved.
- Single-page vs. dedicated Inquiry page — this build assumes single-page; still open for confirmation.

## Next recommended action

**Human + ChatGPT visual review of the live homepage implementation.**

Do not begin additional pages or launch-readiness work (domain, email delivery, redirects, analytics, final SEO pass) until that review is complete.
