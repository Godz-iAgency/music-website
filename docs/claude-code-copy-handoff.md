# GODZ-i — Claude Code copy-only handoff

Fresh handoff, 2026-10-07. Read this as the owner's current brief, alongside AGENTS.md and any newer direct instructions. The owner approves the current visual design and product cards. The next task is to improve the advertising copy throughout the existing page, not to redesign or rebuild it.

## Purpose and audience

GODZ-i (pronounced God's Eye) builds useful apps for work and everyday life. The site serves two purposes: a portfolio demonstrating the apps GODZ-i has built, and a marketplace/storefront where visitors discover and access GODZ-i apps they can purchase through the existing product destinations. Explain what each app helps its user accomplish and make the next action obvious.

The audience includes people choosing a learning, music, food-planning or finance app, and prospective clients evaluating GODZ-i's ability to build useful software. Lead with the user's concrete result. Establish the apps as real products before inviting an app-development enquiry. Keep the public name GODZ-i; do not restore a redundant GODZ-i Agency label above the hero.

The current site links out to the apps; it has no on-site marketplace checkout. Do not invent prices, purchase URLs, subscriptions, trials, licence terms, availability, testimonials, metrics, savings, guarantees or features. Marketplace positioning is the business purpose, not permission to implement commerce or imply an unverified purchase flow. Use the existing links and truthful CTA wording. Existing Stripe and other technology entries do not prove a particular product's billing flow.

## Copy direction

Review every visible text surface in the active homepage: hero, supporting paragraph, CTA labels, Apps introduction, product descriptions, App Description section, Tech Stack introduction, Contact Us section and message-window instructions. Review metadata title/description for consistency. Rewrite editable copy directly in the existing components/data, using the app knowledge already available in your authorized context. Cross-check product facts against this file and the repository; explain any meaningful uncertainty instead of making up a claim.

Use short, specific, outcome-first language. Say what users get or can do, using recognizable tasks and nouns. Avoid vague lines such as "Make room for what matters," "move forward with clarity," "connect better" or generic promises about progress. Do not mechanically insert the word "clarity." The owner's example "building smarter AI productivity apps" describes the intended simplicity, not an exact headline to copy. Cleverness must never obscure the product. Use we/our/us for the company, never I/me/my. Keep names, slogans, technical product names and necessary functional labels accurate.

The owner has just approved the four card headings below. They are locked brand copy: retain them verbatim. Review their supporting descriptions for accuracy and precision; preserve the approved message and keep them similarly brief. The newly chosen navigation/section labels are also locked. "All text" means audit everything, not rewrite approved slogans or brand names unnecessarily.

## App facts and approved card copy

| App | Locked headline | Current approved subtext | Existing destination — preserve exactly |
| --- | --- | --- | --- |
| Bookworm AI | Making every book smarter. | Turn any book into a 7-day course. | https://bookworm-ai.app/ |
| SplitMic | Music Industry Connected. | Connecting bands, venues, talent buyers, record labels and festivals on the same platform. | https://www.splitmic.com/ |
| Six Plants | Healthy Eating Made Simple | Get a 7-day meal plan with recipe and grocery list | https://www.gbombs.app/ |
| Cash Flow Tracker | Every dollar counts. | See income, expenses and account balances in one place. | https://cash-flow-tracker-godz-i.vercel.app/ |

- **Bookworm AI:** turns books into structured seven-day learning experiences. Supplied product context includes AI-generated courses, multiple reading levels, an AI book assistant, flashcards, multilingual learning and book clubs. Its existing poster says "Making every book smarter." Keep the product text consistent with that artwork.
- **SplitMic:** one music-industry platform connecting bands, venues, talent buyers, record labels and festivals. Supplied broader context also includes backline companies, instrument rental, rehearsal studios and live-show discovery. Keep the owner's five principal audience groups in the card description. Do not reduce it to only bands and venues or replace the slogan with a new music-connection headline.
- **Six Plants:** personalized healthy-eating planning around six plant-food categories, selected foods, a seven-day meal plan, recipes and grocery lists. Describe practical meal planning; do not claim medical treatment or guaranteed health results. The owner's latest correction replaces the earlier "simpler" wording with the exact heading "Healthy Eating Made Simple" and the subtext shown above.
- **Cash Flow Tracker:** brings income, expenses and account balances into one view. Supplied context includes account allocation, transfers, personal/business classification and cash-flow visibility. Do not promise financial returns, bank integrations or automation without verified support. The owner corrected "Follow the money" to "Every dollar counts."

## What Codex has already changed

1. Retained the existing Next.js/React/Tailwind site, section order, four-card grid, deployment domain and dark theme with GODZ-i orange accents.
2. Refined typography to native system fonts, heading weights/tracking and readable body labels; standardized functional outline icons and technology-logo frames. There is no request to change fonts or styling further.
3. Fixed mobile menu navigation: the menu is an overlay below a constant-height sticky header, closes without shifting destinations, and uses appropriate section offsets. Keyboard dismissal, target focus and reduced-motion support remain.
4. Preserved the original GODZ-i logo and looping hero video. Removed the visible pause/play control; the animation loops automatically with reduced-motion preference handling.
5. Added original marks beside all four app names. Bookworm uses the owner's book mark; SplitMic uses the microphone-only mark beside its name and retains the large wordmark. Six Plants keeps its original mark and food lettering. Cash Flow Tracker keeps its original green/gold logo and supplied water background.
6. Generated a cyan/blue/violet/magenta network wallpaper behind the intact Bookworm poster. The owner explicitly approved this result. Its asset is public/products/bookworm-wallpaper.png and provenance is docs/bookworm-wallpaper-prompt.md. Do not regenerate, crop, recolor or replace any artwork.
7. Restored the four approved card slogans/subtexts in commit 3852c24ced4b5aae975f640462a69db307925262, deployed on the official site. These replaced earlier unwanted generic card headlines.
8. Set public branding to GODZ-i and company-facing messaging to plural. Message Us opens an accessible message window addressed to Christopher@godz-iagency.com. Continue in Gmail and Use your email app open prefilled drafts; the visitor presses Send in their composer. No backend email service is involved. Do not imply that the website itself sends email.
9. Added Claude Design and then Resend to the current twelve-entry technology list, alongside Codex, Claude Code, Gemini API, Supabase, Firestore, Vercel, Stripe, Google Workspace, Higgsfield and Google Vids. Resend is labeled Email Sending and follows Google Workspace. Its addition is a Tech Stack entry; the contact composer still opens Gmail or the visitor's email app and has no Resend integration.
10. In the commit carrying this handoff, renamed desktop/mobile navigation and the corresponding section labels to **Apps**, **App Description**, **Tech Stack**, **Contact Us**. Existing anchors remain **#work**, **#capabilities**, **#technology**, **#contact**. Retained the Contact Us arrow and styling. The broader ad copy has intentionally been left for this next copywriting task.
11. In a subsequent owner-requested visual update, moved each App Description number to the left of its icon and added four generated wallpapers matching the apps' brand palettes. They are hosted in public/descriptions with prompts in docs/description-wallpaper-prompts.md. Dark overlays maintain readability. Preserve these cards, image elements and responsive styles during the copy-only task.
12. Fixed mobile hero compatibility by adding a smaller H.264 baseline MP4 as the first source and a matching animation-frame poster. Both original videos remain untouched. Playback now retries on media readiness, page return and interaction, with bounded source fallback and proper listener cleanup. Reduced-motion preference remains respected and no visible playback controls were added. Preserve the entire hero-animation.tsx implementation and the new assets during the copy-only task. Context and verification are in docs/mobile-animation-fix.md. Physical-phone settings cannot be inspected from this workspace; do not claim a direct physical-device test.

## Preservation rules

- Text-only edits. Keep the layout, component structure, order, containers, grids, spacing, dimensions, breakpoints, colors, fonts, motion, icons and interactions exactly as approved. Fit copy into the existing design; shorten copy if needed rather than adjusting CSS.
- Do not edit src/app/globals.css, assets in public/, hero media, image-generating components such as the social-preview image, or the product-card rendering structure. Do not change JSX structure, classes, IDs, aria relationships, imports or logic just to rewrite text. Text nodes and existing copy-string values are the edit surface.
- Keep every href, URL, email address, image source, image dimension and anchor unchanged. Keep app names, locked card slogans, the four new navigation/section labels and technology names. Keep Message Us as the company-facing message action. Do not introduce additional links, routes, sections or checkout.
- Preserve dialog behaviour, email encoding, keyboard/focus handling, mobile-menu behaviour, autoplay/reduced-motion logic and hidden team state. Preserve truthful functional instructions such as sending from the visitor's email composer.
- Do not add dependencies, change package files, environment variables, credentials, deployment settings, repository remote or domain. Leave untracked supplied archives (Christoper Zip 2/ and Christopher Zip Folder.zip) alone. Do not search those archives or private configuration for marketing context.

## Where to work and how to finish

Repository: Godz-iAgency/music-website. Official site: https://www.godz-iagency.com/. Local folder: C:/Users/druma/OneDrive/Desktop/GODZ-i/Apps/GODZ-i Website. Read AGENTS.md and relevant bundled Next.js documentation under node_modules/next/dist/docs/ before coding; this project uses Next.js 16.2.2 and React 19.2.4.

The active page is src/app/page.tsx. Its copy is mainly in src/components/hero.tsx, selected-work.tsx, capabilities.tsx, technology.tsx, contact.tsx and src/data/portfolio.ts. Navigation labels are in src/components/navigation.tsx. Search/social metadata text is in src/app/layout.tsx. src/components/product-card.tsx renders the data; preserve its structure. Footer and reusable heading components should only change if an existing editable text value needs a justified copy update. Legacy components not imported by the live page are outside scope.

First inspect the current branch and working tree; do not overwrite another person's changes. Read docs/portfolio-configuration.md and docs/portfolio-rebuild-report.md for implementation context. Review only the active text surfaces and supported app facts. Then implement a coherent copy-only rewrite. Keep descriptions concise enough to fit the present cards on phones and desktop. Check the final diff for any accidental non-copy change.

Run a production build and scoped ESLint for changed live files, then review mobile, tablet and desktop text wrapping, navigation destinations and CTA labels. Full-project lint has pre-existing findings in unused legacy sources (eight errors and six warnings at the last audit); do not fix unrelated code during this task. Existing temporary smoke scripts may assert the old generic hero/section copy, so update only relevant copy expectations if you use them; never remove functional or asset checks to make a test pass.

Report the final copy, the files changed and verification results. Commit only task files, then push to the connected GitHub branch as the owner requested. Verify the deployed official page shows the copy. Keep unrelated archives, private files and temporary browser artifacts out of the commit. No messages, purchases or email sending are required for verification.

## Copy-and-paste execution prompt

Read docs/claude-code-copy-handoff.md and follow this fresh brief. Improve the advertising copy throughout the active GODZ-i homepage using the app knowledge already in your context and the supported facts in the handoff. Position GODZ-i as both a portfolio of useful apps and a marketplace/storefront for discovering and purchasing them through the existing destinations. Make the copy specific, concise and outcome-first. Preserve the approved card slogans, app names, Apps / App Description / Tech Stack / Contact Us labels, all links and every aspect of the approved design. Make text-only edits in existing copy strings; do not touch images, layout, CSS, behaviour, dependencies or commerce functionality. Implement the copy, verify it fits phone/tablet/desktop layouts, review the diff, commit and push only the intended files, and confirm the official site displays the update. Report any unsupported claim instead of inventing it.
