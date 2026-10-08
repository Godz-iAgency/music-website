@AGENTS.md

# GODZ-i Website

## CONTEXT

The GODZ-i website. Next.js 16 / React 19 / Tailwind app deployed on Vercel via GitHub (repo: Godz-iAgency/music-website, branch: main). Live site: https://www.godz-iagency.com

GODZ-i (pronounced "God's Eye") builds useful apps for work and everyday life. The site is a hybrid:

1. Portfolio: shows the apps GODZ-i built.
2. Storefront: visitors discover and open each app through its existing product link. There is no on-site checkout.
3. Client funnel: visitors who want GODZ-i to build an app, or to partner, book a video discovery call or message us.

This replaces the earlier music-industry agency positioning (venues, talent buyers, bands, labels, festivals, n8n automation). That direction is retired. Do not restore it, and do not add pages for it.

Founder: Christopher Downer. Based in Austin, Texas. Admin email: christopher@godz-iagency.com

Current brief and history: `docs/claude-code-copy-handoff.md`. Read it first for any copy or design task. Related: `docs/portfolio-configuration.md`, `docs/portfolio-rebuild-report.md`, `docs/mobile-animation-fix.md`.

## THE APPS

Locked card copy. Keep verbatim. Links live in `src/data/portfolio.ts`.

| App | Headline | Subtext |
| --- | --- | --- |
| Bookworm AI | Making every book smarter. | Turn any book into a 7-day course. |
| SplitMic | Music Industry Connected. | Connecting bands, venues, talent buyers, record labels and festivals on the same platform. |
| Six Plants | Healthy Eating Made Simple | Get a 7-day meal plan with recipe and grocery list |
| Cash Flow Tracker | Every dollar counts. | See income, expenses and account balances in one place. |

To add an app, add one entry to `products` and one to `capabilities` in `src/data/portfolio.ts`, plus its assets. Add one outcome line to the hero paragraph. Section titles must not mention how many apps exist.

## CALLS TO ACTION

- Discovery call (a video call, 30 minutes): https://cal.com/christopher-downer-6pkxir/strategy-session
- Current labels: hero "Video Call", Contact "Book a Video Discovery Call".
- Message Us opens a Gmail or email-app draft. The visitor presses Send in their composer. No backend email service.
- Product cards say "View Live App". Do not say "Buy", "Get", or imply a purchase flow until one exists.

## BRAND AND DESIGN

- Approved dark theme: background #050507, orange accent (#E8430A family), white text. System font stack.
- Public brand name is GODZ-i only. Do not restore "GODZ-i Agency".
- Layout, fonts, imagery, wallpapers, logos, animation and interactions are approved. Copy changes are text-only unless the user asks for a design change.
- Design tweaks beyond that: only when confidence is above 95%. Otherwise leave it alone.
- Preserve `src/components/hero-animation.tsx`, the hero video, the mobile-compatible MP4 source, poster and playback recovery (commit 89ea25a). Do not edit `public/` assets.
- Nav labels are locked: Apps, App Description, Tech Stack, Contact Us. Anchors: #work, #capabilities, #technology, #contact.

## COPY RULES

- Outcome-first and specific. Say what the user can do with the app.
- Short sentences. Every line earns its place or gets cut.
- Style: direct, Hormozi-like. Concrete nouns and numbers. Name the problem, then the result.
- No dashes used stylistically. No filler. No generic AI-sounding language.
- Banned vague phrasing: "move forward with clarity", "connect better", "make room for what matters", "make everyday progress easier".
- Use we, our, us for the company. Never I, me, my.
- Do not invent pricing, trials, guarantees, testimonials, metrics, purchase flows or unsupported features. Do not call apps "AI" unless verified. Only Bookworm AI is confirmed as AI.
- Cash Flow Tracker: no promises of returns, bank integrations or automation. Six Plants: no medical claims.

## WHERE COPY LIVES

- Hero: `src/components/hero.tsx`
- Apps intro: `src/components/selected-work.tsx`
- App Description: `src/components/capabilities.tsx` (title) and `src/data/portfolio.ts` (`capabilities` cards)
- Tech Stack: `src/components/technology.tsx` and `src/data/portfolio.ts` (`technologies`)
- Contact and message window: `src/components/contact.tsx`
- Metadata: `src/app/layout.tsx`, `src/app/manifest.json`
- Social preview image: `src/app/opengraph-image.tsx`. Keep it in sync with the hero.

Not live: the older components (`problem`, `two-path`, `founder-story`, `services`, `testimonials`, `proof`, `about` and similar) are not imported by the page and carry stale agency copy. Leave them unless asked. Full-project lint has pre-existing findings there. Lint only changed files.

## MODEL RULE

- Sonnet: research and planning only. Present the plan and wait for approval.
- Opus: implementation.
- When implementation is approved: run `npm run build`, lint changed files, check phone, tablet and desktop wrapping, then push straight to main (auto-deploys to Vercel) and verify the live site.

## SECURITY

- NEVER commit `.env.local` or other `.env*` files.
- Leave untracked supplied archives alone: `Christoper Zip 2/` and `Christopher Zip Folder.zip`. Do not search them for marketing context.
- No dependency, package file, deployment, domain or remote changes unless asked.
- Keep every existing href, email address and anchor unless the user asks to change one.
