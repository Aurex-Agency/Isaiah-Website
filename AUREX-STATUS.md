# Aurex Status — Isaiah Ball Personal Brand Website

Last updated: 2026-08-17

## Approved decisions

- **Stack:** Next.js 16 (App Router) + TypeScript + Tailwind v4 + React 19, npm, Vercel hosting. See `/aurex-stack` output in conversation history and `CLAUDE.md`.
- **Discovery:** Complete — see `DISCOVERY.md`.
- **Creative direction:** Approved — Direction 1, "The Debut" (numbered chapter/"Look 01, 02..." system). See `CREATIVE-DIRECTION.md`.

## Project setup status

Scaffold, quality tooling (typecheck/lint/test/build), Playwright smoke + a11y tests, Aurex hooks, and CI are installed and verified working. Initial commit made (not pushed).

## Asset review — complete (2026-08-17)

Reviewed all 20 photos from Isaiah's Drive folder directly (downloaded and viewed each one, not inferred from filenames). Findings:

- 20 usable photos, no video — Direction 3 ("The Reel") is off the table for launch; Direction 1 ("The Debut") is well-supported
- Groups naturally into ~5-6 "Look" chapters: studio/branded-merch shoot (highest production value, Nikon Z5 + Lightroom), quarry + mural street style, venue/event styling (ties to local-business targeting), cabin/rustic, Boston + NYC travel content, and a black-and-white portrait (good "about" candidate)
- CLIENT-CONFIRMED: all photos are Isaiah's to use freely, no outside photographer credit needed
- Still open: pull one accent color from the actual imagery once page design begins (not chosen abstractly)
- Local originals cached in this session's scratchpad (not copied into the repo yet — pending a decision on where/how to import them for implementation)

## Still open (from DISCOVERY.md)

- Real Instagram follower/engagement numbers — unverified by automation, need a screenshot/direct figures from Isaiah before building the stats/media-kit section
- No existing brand collabs/press — proof has to come from portfolio quality alone, not social proof
- CORRECTION to earlier local-only framing: Isaiah has real travel content (Boston, NYC) beyond Nashville, not a purely hyperlocal presence

## Next steps, in order

1. Get real Instagram stats directly from Isaiah
2. `/aurex-page-design` and `/aurex-copy` for the homepage + inquiry flow (assets are ready; user held off proceeding as of 2026-08-17, reason not yet given)
3. Build the structured collab/booking inquiry form (Discovery's top-ranked opportunity) — replaces the current bare-email-in-bio pattern
