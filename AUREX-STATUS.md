# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Current phase

Project setup complete and pushed to GitHub. Discovery and asset review are also complete. **Creative direction is not yet approved** — it was marked approved in an earlier working session before the intended human + ChatGPT creative-direction review gate had taken place. That has been corrected: Direction 1, "The Debut," is the current working recommendation only. Page design and copy are blocked until the joint review happens.

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
2. `03f7dbd` — Add discovery findings and approved creative direction _(direction approval noted here was premature — see Current phase)_
3. `3fb0c2f` — Record completed asset review
4. `670752c` — Status update (superseded by this correction)

## Decisions

- **Stack:** as above. Settled.
- **Discovery:** complete — see `DISCOVERY.md`. Settled.
- **Asset review:** complete — 20 usable photos (no video) reviewed directly from Isaiah's Drive folder, grouping into ~5-6 Look chapters. Settled; informs the creative-direction review but doesn't decide it.
- **Creative direction:** NOT settled. Three directions are documented in `CREATIVE-DIRECTION.md` ("The Debut," "The Lookbook," "The Reel"). Direction 1 is the working recommendation. Final choice is pending the human + ChatGPT review below.

## Open decisions

- **Creative direction approval** — blocking. Requires human + ChatGPT joint review of all three directions in `CREATIVE-DIRECTION.md` before any page design or copy work starts.
- Real Instagram follower/engagement numbers — unverified by automation (Instagram blocks unauthenticated scraping); need a screenshot or direct figures from Isaiah before the stats/media-kit section can be built
- Where/how to import the reviewed photo assets into the project repo (currently only cached in this session's scratchpad, not committed)
- One accent color to pull from the actual imagery, once a direction is approved and page design begins
- No existing brand collabs or press — site credibility has to be carried entirely by portfolio presentation quality, not third-party proof

## Next recommended action

**Human + ChatGPT creative-direction review of all three directions in `CREATIVE-DIRECTION.md`, before page design.**

Do not proceed to `/aurex-page-design` or `/aurex-copy` until that review is complete and a direction is formally approved. Getting real Instagram stats from Isaiah can happen in parallel — it doesn't depend on the creative-direction outcome.
