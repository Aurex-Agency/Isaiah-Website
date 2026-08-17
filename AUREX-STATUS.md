# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Current phase

Project setup, discovery, asset review, and creative direction are all complete and finally approved. Image assets have been imported into the repository. **Homepage page-design and copy planning are now complete and ready for review** (`HOMEPAGE-DESIGN.md`, `HOMEPAGE-COPY.md`, `IMAGE-ASSETS.md`). **Stopping here for human + ChatGPT review before any implementation begins.** Do not proceed to `/aurex-page-design` implementation, component code, or page-building until that review is complete.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + React 19, npm (`package-lock.json` committed), Vercel hosting target. No CMS, no ecommerce, no auth. See `CLAUDE.md` for full detail and `/aurex-stack` reasoning in conversation history.

## Verification completed

Run directly, not just inspected, from a clean `.next` state:

- `npm run typecheck` (`next typegen && tsc --noEmit`) — pass
- `npm run lint` — pass, no warnings
- `npm run test` (Playwright: smoke + `@axe-core` WCAG 2.2 AA scan, desktop + mobile) — 4/4 pass
- `npm run build` — pass
- Aurex hooks (`format-changed-file.mjs`, `pre-push-quality.mjs`) — executed directly against this repo, confirmed working
- CI workflow (`.github/workflows/aurex-quality.yml`) — includes Playwright browser install step; matches the locally-verified check sequence
- **`/hooks` — confirmed run successfully in an interactive Claude Code session.** Hooks are loaded and active for this project.

## Current branch

`main`, tracking `origin/main`. Pushed commits through `6d495ba` (see prior status entries for full list); this update and the image-asset/homepage-planning commits that follow it are pending push as of this writing.

## Decisions

- **Stack:** settled. As above.
- **Discovery:** settled. See `DISCOVERY.md`.
- **Asset review:** settled. 20 usable photos (no video) reviewed directly from Isaiah's Drive folder.
- **Creative direction:** settled — final approval. Direction 1, "The Debut," approved with 10 required refinements. Full detail in `CREATIVE-DIRECTION.md` §0.
- **Image import:** settled. 19 of 20 reviewed photos imported into `public/images/` at full original quality, organized by Look under sensible filenames. 1 held in reserve, not imported (redundant, not a quality reject — see `IMAGE-ASSETS.md`). Repo-size tradeoff (~123MB) flagged as a launch-readiness item, not resolved.
- **Homepage planning:** settled, pending review. `HOMEPAGE-DESIGN.md` covers information hierarchy, section structure, each Look's role, image grouping, desktop and mobile composition strategy, typography hierarchy, photo-derived palette recommendation, motion/interaction intent, conversion path, CTA placement, inquiry-flow entry points, nav/header/footer concepts, SEO considerations, and open items. `HOMEPAGE-COPY.md` is the draft copy. No page/component code has been written.

## Open decisions

- **Human + ChatGPT review of the homepage plan and copy** — blocking. Required before any implementation begins.
- Real Instagram follower/engagement numbers — unverified by automation; not used anywhere in the current plan or copy, and doesn't block review.
- Exact palette hex values — to be color-picked from the actual imported image files during implementation, per `HOMEPAGE-DESIGN.md` §8.
- Font selection — typographic personality is specified (`HOMEPAGE-DESIGN.md` §7); exact typefaces not yet chosen.
- Single continuous homepage vs. a dedicated separate Inquiry page — assumed single-page for this plan; needs confirmation (`HOMEPAGE-DESIGN.md` §16).
- Which contact email the new inquiry form should deliver to (currently only a personal Gmail exists, from the TikTok bio).
- No existing brand collabs or press — site credibility has to be carried entirely by portfolio presentation quality, not third-party proof.

## Next recommended action

**Human + ChatGPT review of `HOMEPAGE-DESIGN.md`, `HOMEPAGE-COPY.md`, and `IMAGE-ASSETS.md`.**

Do not proceed to `/aurex-page-design` implementation, `/aurex-copy` finalization, or any component/page code until that review is complete and the plan is approved.
