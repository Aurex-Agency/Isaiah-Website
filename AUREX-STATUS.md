# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Current phase

Project setup complete and pushed to GitHub. Discovery, creative-direction approval, and asset review have also already happened in this workstream (see below) — status is reported accurately rather than reset, since the work is real and committed.

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

`/hooks` still needs to be run by the user in an interactive Claude Code session for hooks to load — this could not be triggered from here.

## Current branch

`main`, tracking `origin/main`. Pushed commits:

1. `3c04549` — Scaffold Next.js App Router site and Aurex project setup
2. `03f7dbd` — Add discovery findings and approved creative direction
3. `3fb0c2f` — Record completed asset review

## Approved decisions

- **Stack:** as above.
- **Discovery:** complete — see `DISCOVERY.md`.
- **Creative direction:** approved — Direction 1, "The Debut" (numbered "Look 01, 02..." chapter system). See `CREATIVE-DIRECTION.md`.
- **Asset review:** complete — 20 usable photos (no video) reviewed directly from Isaiah's Drive folder, confirmed sufficient for Direction 1, grouping into ~5-6 Look chapters. See `DISCOVERY.md` §9.

## Open decisions

- Real Instagram follower/engagement numbers — unverified by automation (Instagram blocks unauthenticated scraping); need a screenshot or direct figures from Isaiah before the stats/media-kit section can be built
- Where/how to import the reviewed photo assets into the project repo (currently only cached in this session's scratchpad, not committed)
- One accent color to pull from the actual imagery once page design begins (not to be chosen abstractly)
- No existing brand collabs or press — site credibility has to be carried entirely by portfolio presentation quality, not third-party proof

## Next recommended action

Discovery, creative direction, and asset review are already complete for this project — there is no pending discovery work to start. The next real steps in sequence are:

1. Get real Instagram stats directly from Isaiah (blocks the stats/media-kit section)
2. `/aurex-page-design` and `/aurex-copy` for the homepage and inquiry flow, using the approved "Look" chapter structure and reviewed asset set
3. Build the structured collab/booking inquiry form (Discovery's top-ranked opportunity) to replace the current bare-email-in-bio pattern

If "next recommended action: discovery" was intended to mean re-opening or expanding discovery rather than reflecting a fresh project, flag that back — current discovery is scoped to the initial site build and hasn't identified anything requiring rework.
