# Homepage Design Plan — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17
Status: **Planning for review.** Produced per the approved creative direction (`CREATIVE-DIRECTION.md` §0, Direction 1 "The Debut" with required refinements). This is a plan, not implementation — no page/component code has been written. Awaiting human + ChatGPT review before any implementation begins.

Companion documents: `IMAGE-ASSETS.md` (imported photo manifest and Look assignments), `HOMEPAGE-COPY.md` (draft copy referenced throughout this plan).

## 1. Homepage information hierarchy

1. Header/nav — wordmark + single inquiry link, persistent but quiet
2. Hero / Look 01 opening — the site's first visual statement, doubles as Look 01's opening image (no separate generic hero exists before the portfolio starts)
3. Look 01 — The Studio
4. Look 02 — Around Town
5. Look 03 — After Dark
6. Look 04 — The Table
7. Look 05 — Home Ground
8. Look 06 — Away
9. Closing context beat (portrait + short direct statement of what he does and who he works with)
10. Inquiry / CTA section (primary conversion point)
11. Footer

This is a single continuous homepage scroll, not a multi-page structure — consistent with a personal-brand portfolio site at this stage. **Open question for review:** confirm whether a dedicated separate Inquiry page is wanted instead of (or in addition to) an in-page section — see §15.

## 2. Section-by-section page structure

| #   | Section               | Purpose                                                                            |
| --- | --------------------- | ---------------------------------------------------------------------------------- |
| 1   | Header                | Wayfinding + persistent inquiry access, stays out of the way of imagery            |
| 2   | Look 01 — The Studio  | Opens the site; establishes production value and professionalism                   |
| 3   | Look 02 — Around Town | Establishes authentic personal style in real Nashville environments                |
| 4   | Look 03 — After Dark  | Most editorial/ambitious chapter; demonstrates aesthetic range at "campaign" level |
| 5   | Look 04 — The Table   | Single-image rhythm break; ties directly to local-business/event positioning       |
| 6   | Look 05 — Home Ground | Broadens stylistic range into vintage/preppy territory                             |
| 7   | Look 06 — Away        | Demonstrates reach beyond Nashville; closes the portfolio on range                 |
| 8   | Closing context       | Direct, human statement of who he is and what he's looking for — no invented proof |
| 9   | Inquiry / CTA         | Primary conversion point, reason-for-contact routing                               |
| 10  | Footer                | Location, real social links, email fallback                                        |

## 3. Exact role of each Look chapter

- **Look 01 — The Studio:** proof of professionalism. This is the chapter that answers a brand or agency evaluator's hardest question — "can he actually execute a produced shoot, or is this just phone selfies?" Opens the site because it's the strongest credibility signal available.
- **Look 02 — Around Town:** authenticity. Shows his real personal style in unstaged Nashville environments — the "who he actually is" counterweight to Look 01's polish.
- **Look 03 — After Dark:** aesthetic ambition. The most visually sophisticated, densest chapter — the one most likely to convince a brand-sponsorship evaluator he can carry a real campaign look.
- **Look 04 — The Table:** restraint as a statement, and a direct line to the local-business/event buyer type (photographers, boutiques, event companies) identified in `DISCOVERY.md` §3.
- **Look 05 — Home Ground:** range. Shows he isn't locked into one aesthetic (streetwear/editorial) — useful for brands with a different visual identity.
- **Look 06 — Away:** reach. Directly executes the "Nashville is his base, not his limit" refinement (`CREATIVE-DIRECTION.md` §0, point 6) and closes the portfolio on an outward note before the direct ask.

## 4. Proposed image grouping for each section

Full detail in `IMAGE-ASSETS.md`. Summary:

- Look 01: 3 images (1 hero + 2 supporting)
- Look 02: 3 images (1 hero + 2 supporting)
- Look 03: 4 images (1 hero + 3 supporting) — intentionally the densest
- Look 04: 1 image (hero only) — intentionally the sparsest
- Look 05: 3 images (1 hero + 2 supporting)
- Look 06: 4 images (1 hero + 3 supporting)
- Closing context: 1 portrait (not part of the numbered system)

This asymmetry (3/3/4/1/3/4) is deliberate, not arbitrary — it's what directly satisfies the requirement that Look compositions vary rather than repeat one section pattern (`CREATIVE-DIRECTION.md` §0, point 3).

## 5. Desktop composition strategy

Each Look's layout is driven by what its own image set supports, not a shared template:

- **Look 01:** full-bleed wide hero (the establishing shot) at top, then the two portrait images placed side-by-side beneath with deliberate vertical offset (not aligned to the same baseline) and generous negative space between them.
- **Look 02:** large hero image left (roughly 60% width), two smaller supporting images stacked right (roughly 40% width) — an asymmetric column break, not a centered grid.
- **Look 03:** the most spread-like composition — one large image, three smaller at varied scale, with at least one image bleeding off the right edge of the viewport. This is where the Direction 2 "edge-bleeding photography" and "varied image scale" principles are most visible.
- **Look 04:** single full-bleed image, short caption in generous negative space, nothing else on screen. No competing elements.
- **Look 05:** staggered triptych — three images at different vertical offsets and at least one cropped tighter than the others for scale contrast, not an even 3-column grid.
- **Look 06:** large hero plus a loose asymmetric cluster of the three supporting images, slight offset/rotation between them to suggest movement without becoming a gimmick (kept subtle per the anti-gimmick guardrail in `CREATIVE-DIRECTION.md`).

Look numbers ("01" through "06") appear as a consistent typographic marker at each Look's opening — this is the thread that ties the varied compositions together, per the approved direction.

## 6. Mobile-specific composition strategy

Not simple stacking — each Look gets a deliberate mobile recomposition:

- **Look 01:** hero full-bleed top, then the two portraits as a tight side-by-side 2-up row (not full-width stacked) to preserve some of the desktop asymmetry.
- **Look 02:** hero full-bleed, then the two supporting images as a horizontal swipeable pair rather than stacked.
- **Look 03:** becomes a vertical sequence (necessary at this density on a small screen) but with varied image heights and at least one full-bleed break against the others' inset margins — never four identical stacked crops in a row.
- **Look 04:** stays a single full-bleed moment — the mobile translation is naturally close to desktop here since it's already minimal.
- **Look 05:** the triptych becomes a horizontal swipe carousel rather than a vertical stack.
- **Look 06:** hero full-bleed, then the remaining three images as a horizontal swipe strip — reinforces the "movement" idea even more naturally through physical swiping.

General rule across the page: never stack more than two full-width images in a row without a scale, format, or interaction break (swipe group, single full-bleed moment, etc.).

## 7. Typography hierarchy

- **Display face** (wordmark, Look numbers, section intros/pull-quotes): should read as confident and editorial with some personality — a distinctive grotesque or a modern serif with real character, not an ornate heritage serif that would read as generic luxury. Exact typeface not yet selected — this describes the personality target for that selection.
- **Body/UI face** (form fields, captions, nav, footer): plain, highly legible sans-serif. Quiet by design — all the typographic personality lives in the display face.
- **Look numbers** function as a wayfinding device: large scale, tabular numerals, consistent corner placement across otherwise-varied Look compositions (per §5-6 above).
- Restraint: 2-3 weights maximum across the whole type system.

## 8. Photo-derived palette recommendation

Derived from direct observation of the actual imported images (`IMAGE-ASSETS.md`), not chosen abstractly:

- **Base neutral:** warm off-white / warm charcoal — matches the warm lighting quality that recurs across the studio, night-venue, and daytime shoots. Not stark black or bright white.
- **Primary accent candidate: denim/indigo blue.** Recurs genuinely across multiple Looks — the mural-shoot jersey (Look 02), a denim jacket (Look 03), jeans (Look 06). Reads confident and masculine without tipping into generic "influencer app" gradient territory.
- **Secondary/supporting: warm rust or brick red.** Recurs in the NYC brick wall and graffiti backdrop (Look 06) and several vintage cap tones throughout.
- **Tertiary/neutral-adjacent: olive or khaki.** Recurs constantly as clothing (chinos, the Carhartt vest reserve image) — useful as a supporting neutral for UI details (dividers, tags) rather than a headline color.

**Explicitly rejected:** a desaturated black-and-white "luxury" treatment (this was Direction 2's original default and is specifically overridden per `CREATIVE-DIRECTION.md` §0 point 7), any gradient treatment, and any pink/purple color association that would read as a generic influencer template.

**Still needed:** exact hex values, to be color-picked directly from the actual image files during implementation — this plan identifies the right colors to pull from, not final swatches.

## 9. Motion and interaction intent

- **Signature moment (carried over from the original Direction 1 concept):** the Look number ticks up as the visitor scrolls past each section threshold — small, corner-scale, not a whole-screen event.
- **Section transitions:** hard cuts between Looks (a brief solid-color beat, not a soft crossfade) — reinforces confident pacing over a dreamy scroll feeling.
- **Within a Look:** no autoplay, no auto-advancing carousels. Any multi-image interaction (mobile swipe, desktop hover-reveal of a caption per the Direction 2 principle) is user-driven.
- **Reduced motion:** the number-tick and hard-cut transitions degrade gracefully to instant state changes; no parallax; no scroll-jacking regardless of motion preference.
- No decorative background motion, particles, or animated gradients — the entire motion budget is spent on the two devices above, consistent with "highly art-directed, not decorated."

## 10. Conversion path and CTA placement

- **Primary CTA label:** direct and commercial — "Work With Isaiah" or "Start an Inquiry." Per `CREATIVE-DIRECTION.md` §0 point 4, metaphorical/chapter language is explicitly not used in CTA copy (e.g., not "Chapter: Work With Isaiah").
- **Placement:**
  1. Header/nav — small, persistent, unobtrusive text link, always available without interrupting the imagery.
  2. Closing inquiry section — the primary, fullest CTA, after the portfolio and context beat.
  3. Optional quiet secondary link after Look 01 for buyers already convinced by the professionalism proof who don't need to see the rest of the portfolio — must stay understated (a small text link, not a button) so it doesn't break the editorial pacing.
- **No sticky floating CTA button** — would conflict with the full-bleed imagery and "not decorated" mandate. The header link stays reachable instead.

## 11. Inquiry-flow entry points

- Header/nav CTA → jumps to the inquiry section
- Closing inquiry section (primary entry point)
- Footer email fallback (upgraded from the current bare Gmail-in-bio pattern to a proper structured form, per `DISCOVERY.md` §14's top-ranked opportunity)
- Reason-for-contact field inside the form: **Brand Partnership / Modeling / Creative or Local Project** — routes visitor intent without splitting the site into three separate experiences, per `DISCOVERY.md` §3 and §11.

## 12. Draft homepage copy

See `HOMEPAGE-COPY.md` for the full draft, written to this plan's structure. Summary of the copy approach: direct and restrained, no invented stats/proof/testimonials/press, positions Isaiah as a fashion creator, model, and creative collaborator, frames Nashville as home base rather than a limit, and never foregrounds follower counts or the phrase "nano-influencer."

## 13. Navigation and header concept

Minimal: wordmark (his name) on the left, a single "Inquire" text link on the right. No dropdown, no hamburger menu — the page depth doesn't need one at this stage, since it's a single continuous scroll. On mobile, the same header persists in a condensed form. No logo animation or scroll-triggered header tricks — it should stay quiet and get out of the way of the imagery.

## 14. Footer concept

Minimal: location line ("Nashville, TN"), real social links (Instagram @_.isaiahball, TikTok @_isaiahball), an email contact fallback, and a small copyright line. No newsletter signup or other invented feature — nothing here beyond what's actually needed.

## 15. Homepage SEO considerations

- **Title tag:** specific and honest, e.g. "Isaiah Ball — Fashion Creator & Model, Nashville, TN." Not keyword-stuffed.
- **Meta description:** positions him accurately (fashion creator, model, creative collaborator, Nashville-based) — no invented claims.
- **OG image:** the Look 01 hero (studio, wide establishing shot) is the strongest candidate — matters because this page will be shared as a link-in-bio destination (`DISCOVERY.md` §1).
- **H1:** his name or a real positioning statement — genuine semantic H1, not a logo image standing in for one.
- **Alt text:** every image needs real, specific alt text (not decorative filler) — serves both accessibility and SEO. Flagged as an implementation requirement, not yet written.
- **Structured data:** Person schema with `sameAs` links to his verified Instagram and TikTok profiles — low-effort, legitimate addition for a personal-brand site.
- **Local relevance:** "Nashville" appears naturally in copy (already built into the draft copy) rather than keyword-stuffed repetition.
- Per `DISCOVERY.md` §10, primary traffic is social-referral, not organic search — SEO here is hygiene, not the primary growth lever. No blog/content-depth structure needed on the homepage.

## 16. Required assets or information still missing

- **Real Instagram stats** — still unverified (`DISCOVERY.md` §9 open question). Not used anywhere in this plan or the draft copy, consistent with the instruction not to use Instagram metrics until verified.
- **Exact palette hex values** — need to be color-picked from the actual imported image files during implementation (§8).
- **Font selection** — typographic personality is specified (§7); the actual typefaces are not yet chosen.
- **Inquiry form field list and email delivery integration** (e.g. Resend) — not yet built; referenced as a future integration in `CLAUDE.md`.
- **Confirm single-page vs. multi-page structure** — this plan assumes the homepage is the whole site for now (a single continuous scroll). Confirm with human + ChatGPT review whether a dedicated separate Inquiry page is wanted instead of, or in addition to, an in-page section.
- **Professional contact email** — currently the only channel is Isaiah's personal Gmail from his TikTok bio. Confirm whether that's the address the new form should deliver to, or whether a dedicated address should be set up first.
