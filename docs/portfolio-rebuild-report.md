# GODZ-i visual refinement

The existing layout and dark/orange theme are preserved. The typography audit identified small labels, light heading weights and aggressive negative tracking. The refinement replaces Montserrat presentation with native system typography, clearer heading weights, readable body/utility text and consistent stroke weights for functional icons. Capabilities have simple purpose-specific outline icons and technology marks have restrained dark frames.

The homepage headline is now **We build AI apps for work and life.** Its supporting copy names concrete results: learning the key ideas in books, finding bands and venues for a show, planning a week of healthy meals and seeing income and spending in one place. The redundant hero brand label was removed. Public branding, footer, metadata and app manifest use **GODZ-i**. Section and capability headings retain the visitor's payoff. Contact invites visitors to bring their next app to life. The search description and social preview match the direct messaging. The latest update adds App Description wallpapers and a Resend technology entry; all page copy and product links remain unchanged.

## Navigation

The expanded mobile menu used to increase the sticky header's document height. Anchor scrolling happened before the menu collapsed, so the destination moved upward afterward. The menu is now an absolute overlay below a constant-height header. Section offsets follow desktop/mobile header heights. Destination focus, immediate interaction, Escape dismissal and reduced-motion scrolling remain supported. Long sections scroll naturally rather than being compressed to fit a phone.

## Product branding and contact

The original Cash Flow Tracker green/gold logo and clear-flow.webp water artwork were copied without edits. A dark overlay and a framed intact mark keep its card readable. All four product names now have their original mark beside them. Bookworm's name row uses the newly supplied original book mark. SplitMic's name row uses the supplied microphone-only mark, while its larger wordmark remains. The Cash Flow name row uses the same original mark as its visual stage. The supplied Bookworm poster and Six Plants artwork, app URLs and card placements remain.

The card headings use the owner's approved copy verbatim: **Making every book smarter.**, **Music Industry Connected.**, **Healthy Eating Made Simple** and **Every dollar counts.** Subtext describes a seven-day book course; bands, venues, talent buyers, record labels and festivals sharing one platform; a seven-day meal plan with recipe and grocery list; and income, expenses and account balances in one place. Bookworm's visual stage now uses a generated cyan/blue/violet/magenta network wallpaper behind the intact poster. The full built-in image generation prompt is saved in `docs/bookworm-wallpaper-prompt.md`.

The contact action reads **Message Us**, uses a refined message icon and retains Christopher@godz-iagency.com. The email-app alternative reads **Use your email app**. Company-facing wording is plural. Visitors send from the Gmail or email-app composer; no real messages are sent during verification.

## App Description wallpapers and Resend

The four App Description cards have distinct generated wallpapers: Bookworm cyan/blue/violet/magenta knowledge threads, SplitMic orange sound waves, Six Plants green botanical leaves and Cash Flow Tracker teal water with lime/gold light. Decorative optimized images sit beneath dark overlays in restrained rounded cards. The existing responsive column counts remain. Numbers 01–04 now precede their icons at the left. Headings, descriptions and app assets are unchanged. The prompt set and saved image paths are recorded in docs/description-wallpaper-prompts.md.

Resend is the twelfth Tech Stack entry, labeled Email Sending, immediately after Google Workspace. In the two-column grid they share a row. Other breakpoints follow the existing source order. Its unmodified white icon comes from Resend's official brand kit. This entry does not change the Gmail/email-app contact composer or introduce an email service integration.

## Animation and scope

The video loops automatically with no visible play/pause control. A smaller 640px H.264 baseline derivative is now the first source for phone compatibility, with media-readiness, page-return and interaction recovery plus bounded source fallback. A frame from the original animation is the poster. Reduced-motion preference handling remains. Details and playback verification are in docs/mobile-animation-fix.md. Both original media files are unchanged:

- godzi-intro.webm SHA-256: 3AEE3A80D864FA86E47871F5739EB38E44D5AF68A68AA33A1DB65B57F4C73E71
- godzi-intro.mp4 SHA-256: A846E80602C317615BCE518B85398C20F868BA43D63CCE128E6A6249D2021D6D

No dependencies, production domain, environment values, team data or separate project archives were changed. Full-project lint retains its pre-existing eight errors and six warnings in unused legacy components; scoped checks cover the live page changes.

## Verification

Production build and TypeScript passed; scoped ESLint and whitespace checks passed. The latest production-preview smoke check verified twelve technology entries, four App Description wallpapers, successful requests for all five new assets, and preserved product headlines and links. Browser checks covered 320×740, 370×822, 390×844, 740×320, 768×1024, 1024×768 and 1440×900 viewports. No horizontal overflow, clipped description text or clipped technology items appeared, and all four numbers were geometrically left of their icons. The wallpapers loaded and were visually reviewed at tablet size. An additional 600×900 review verified Resend beside Google Workspace and its icon loaded. No browser errors appeared. Previous product, navigation and contact checks verified intact original brand assets, section destinations, email encoding, focus restoration and the social preview. Product links and the original animation remain intact.
