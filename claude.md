@AGENTS.md

# GODZ-i Website

## CONTEXT

The GODZ-i website. Next.js 16 / React 19 / Tailwind app deployed on Vercel via GitHub (repo: Godz-iAgency/music-website, branch: main). Live site: https://www.godz-iagency.com

GODZ-i (pronounced "God's Eye") builds useful apps for work and everyday life. The site is a hybrid:

1. Client funnel (primary, cold social traffic): companies that need a custom app built. CTA: free 30 minute video call (the orange button).
2. Product users: the apps are production ready and live. Users open them from the homepage or their own app page. Never mention paid, subscription or trial on the homepage.
3. Portfolio as proof: the live apps show companies we can build theirs.

Hero: "Production-ready apps. Use ours, or we build yours." Every section must serve both readers.

Copy follows a condensed Sabri Suby structure (audience callout, big promise, open loop, pain, mechanism, proof, guarantee, free call offer, steps, P.S.), kept short: short card copy up front, full copy one click away.

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

To add an app, add one entry each to `products`, `capabilities` and `appPages` in `src/data/portfolio.ts`, plus its assets. Its page, sitemap entry, footer link and structured data are generated from that data. Section titles must not mention how many apps exist.

App audiences (each app page targets one):
- Bookworm AI: readers who want to keep what they read. 7-day course, one lesson a day through a named framework, three assignments and three flashcards a day, AI chat assistant.
- SplitMic: Austin's music industry specifically. Free to join, no credit card. Search by role, genre or name, live opportunity feed, direct messaging.
- Six Plants: home cooks who want to eat healthier. Pick the plants you like; it creates meals, recipes, a 7-day plan and a grocery list.
- Cash Flow Tracker: people who track every dollar. Every bank account and credit card in one private view; income, expenses and transfers between accounts. Owner-confirmed; do not claim automatic bank sync.

## CALLS TO ACTION

- Discovery call (a video call, 30 minutes): https://cal.com/christopher-downer-6pkxir/strategy-session
- Current labels: "Book a Free Call" (hero and pages, orange), "Our Apps" (hero, secondary), "Pick a Time" (Contact). The call is free with no obligation; the visitor leaves with a plan either way.
- Guarantee (owner-confirmed, custom builds only, never the owner's own apps): every custom app includes 30 days of free maintenance after delivery. Not happy with the final delivery: we keep working for 30 days until it's right. After that, ongoing maintenance is an available service. NEVER say "for life", "forever" or "lifetime". Do not add other guarantees, scarcity or pricing.
- Message Us opens a Gmail or email-app draft. The visitor presses Send in their composer. No backend email service.
- Product cards say "View Live App". Do not say "Buy", "Get", or imply a purchase flow until one exists.

## BRAND AND DESIGN

- Approved dark theme: background #050507, orange accent (#E8430A family), white text. System font stack.
- Public brand name is GODZ-i only. Do not restore "GODZ-i Agency".
- Layout, fonts, imagery, wallpapers, logos, animation and interactions are approved. Copy changes are text-only unless the user asks for a design change.
- Design tweaks beyond that: only when confidence is above 95%. Otherwise leave it alone.
- Preserve `src/components/hero-animation.tsx`, the hero video, the mobile-compatible MP4 source, poster and playback recovery (commit 89ea25a). Do not edit `public/` assets.
- Nav labels are locked: Apps, App Description, Tech Stack, Contact Us. Anchors: #work, #capabilities, #technology, #contact. Off the homepage they point to `/#...` (`Navigation home={false}`).

## COPY RULES

- Outcome-first and specific. Say what the user can do with the app.
- Short sentences. Every line earns its place or gets cut.
- Style: direct, Hormozi-like. Concrete nouns and numbers. Name the problem, then the result.
- No dashes used stylistically. No filler. No generic AI-sounding language.
- Banned vague phrasing: "move forward with clarity", "connect better", "make room for what matters", "make everyday progress easier".
- Use we, our, us for the company. Never I, me, my.
- Do not invent pricing, trials, guarantees, testimonials, metrics, purchase flows or unsupported features. Do not call apps "AI" unless verified. Only Bookworm AI is confirmed as AI.
- Cash Flow Tracker: no promises of returns or automatic bank sync. Six Plants: no medical claims.
- Never double up: a line on the homepage card should not repeat the product card or the app page lead.

## WHERE COPY LIVES

- Hero: `src/components/hero.tsx`
- Apps intro: `src/components/selected-work.tsx`
- App Description: `src/components/capabilities.tsx` (title) and `src/data/portfolio.ts` (`capabilities` cards)
- Tech Stack: `src/components/technology.tsx` and `src/data/portfolio.ts` (`technologies`)
- Contact and message window: `src/components/contact.tsx`
- App pages: `src/app/apps/[slug]/page.tsx` (template) and `appPages` in `src/data/portfolio.ts` (copy, meta title and description)
- Build page (cold traffic landing page): `src/app/build/page.tsx`
- Metadata: `src/app/layout.tsx`, `src/app/manifest.json`, `pageMetadata()` in `src/lib/site.ts`
- Social preview image: `src/app/opengraph-image.tsx`. Keep it in sync with the hero.

## SEO

- Routes: `/`, `/build`, `/apps/bookworm-ai`, `/apps/splitmic`, `/apps/six-plants`, `/apps/cash-flow-tracker`. All static.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt` from the data.
- Every page uses `pageMetadata()` for its own title, description, canonical, Open Graph and Twitter fields. Nested metadata replaces the layout's, so never rely on inheritance.
- Structured data (JSON-LD via `jsonLd()`): Organization (layout), WebSite and ItemList (home), SoftwareApplication and BreadcrumbList (app pages), Service and BreadcrumbList (build).
- Internal links: App Description cards open app pages; app pages link to the other apps and /build; the footer links every page. Use descriptive link text.

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
