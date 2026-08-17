@AGENTS.md

# Isaiah Website — Project Instructions

Personal brand / portfolio website for Isaiah, a social media influencer and content creator. Site goal: win brand sponsorships, project collaborations, and modeling bookings. Primary conversion is a collab/sponsorship inquiry (contact/booking flow), not organic lead-gen in the traditional SMB sense.

Shared Aurex methodology lives in `Aurex-Website-OS` (constitution, rules, skills). This file holds only what's specific to this repo.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- React 19
- Package manager: npm (`package-lock.json` is committed)
- Hosting target: Vercel
- No CMS yet — portfolio/media-kit/brand-partner content is code-driven (TS/JSON data files under `src/`). Revisit a headless CMS only if Isaiah needs to self-serve content updates without a dev.
- No CRM/ecommerce/auth requirements.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (must pass before any launch-readiness claim)
- `npm run start` — run the production build locally
- `npm run lint` — ESLint (flat config, `eslint-config-next`)
- `npm run typecheck` — `tsc --noEmit` (run `npm run build` at least once first in a fresh checkout — Next generates route types like `LayoutProps<...>` into `.next/types` that `tsc` depends on)

No test framework is installed yet. Do not reference `npm test` until one is added (see Remaining optional upgrades in setup output).

## Project structure

- `src/app/` — App Router routes
- `src/app/globals.css` — Tailwind entry
- `public/` — static assets

## Client-specific constraints

- No approved creative direction yet — run `/aurex-art-direction` before building out page-level design.
- No approved copy/positioning yet — run `/aurex-discovery` and `/aurex-copy` before writing final page content.
- This is a single-person personal brand, not a company — tone, proof (past brand partners, engagement stats, press), and trust signals should reflect an individual creator, not a business.
