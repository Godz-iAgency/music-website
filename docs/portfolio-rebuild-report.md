# GODZ-i visual refinement

The existing layout and dark/orange theme are preserved. The typography audit identified small labels, light heading weights and aggressive negative tracking. The refinement replaces Montserrat presentation with native system typography, clearer heading weights, readable body/utility text and consistent stroke weights for functional icons. Capabilities have simple purpose-specific outline icons and technology marks have restrained dark frames.

The homepage headline is now **We build AI apps for work and life.** Its supporting copy names concrete results: learning the key ideas in books, finding bands and venues for a show, planning a week of healthy meals and seeing income and spending in one place. The redundant hero brand label was removed. Public branding, footer, metadata and app manifest use **GODZ-i**. Section and capability headings retain the visitor's payoff. Contact invites visitors to bring their next app to life. The search description and social preview match the direct messaging. The latest update is limited to the product cards; overall page copy remains unchanged.

## Navigation

The expanded mobile menu used to increase the sticky header's document height. Anchor scrolling happened before the menu collapsed, so the destination moved upward afterward. The menu is now an absolute overlay below a constant-height header. Section offsets follow desktop/mobile header heights. Destination focus, immediate interaction, Escape dismissal and reduced-motion scrolling remain supported. Long sections scroll naturally rather than being compressed to fit a phone.

## Product branding and contact

The original Cash Flow Tracker green/gold logo and clear-flow.webp water artwork were copied without edits. A dark overlay and a framed intact mark keep its card readable. All four product names now have their original mark beside them. Bookworm's name row uses the newly supplied original book mark. SplitMic's name row uses the supplied microphone-only mark, while its larger wordmark remains. The Cash Flow name row uses the same original mark as its visual stage. The supplied Bookworm poster and Six Plants artwork, app URLs and card placements remain.

The card headings use the owner's approved copy verbatim: **Making every book smarter.**, **Music Industry Connected.**, **Healthy eating made simpler.** and **Every dollar counts.** Subtext describes a seven-day book course; bands, venues, talent buyers, record labels and festivals sharing one platform; a seven-day recipe plan and grocery list; and income, expenses and account balances in one place. Bookworm's visual stage now uses a generated cyan/blue/violet/magenta network wallpaper behind the intact poster. The full built-in image generation prompt is saved in `docs/bookworm-wallpaper-prompt.md`.

The contact action reads **Message Us**, uses a refined message icon and retains Christopher@godz-iagency.com. The email-app alternative reads **Use your email app**. Company-facing wording is plural. Visitors send from the Gmail or email-app composer; no real messages are sent during verification.

## Animation and scope

The video loops automatically with no visible play/pause control. Reduced-motion preference handling remains. Both original media files are unchanged:

- godzi-intro.webm SHA-256: 3AEE3A80D864FA86E47871F5739EB38E44D5AF68A68AA33A1DB65B57F4C73E71
- godzi-intro.mp4 SHA-256: A846E80602C317615BCE518B85398C20F868BA43D63CCE128E6A6249D2021D6D

No dependencies, production domain, environment values, team data or separate project archives were changed. Full-project lint retains its pre-existing eight errors and six warnings in unused legacy components; scoped checks cover the live page changes.

## Verification

Production build and TypeScript passed; scoped ESLint and whitespace checks passed. The current production smoke check verified four product cards, four name-row logos, all four approved headings and subtexts, eleven technology entries, twenty-five asset requests and the social preview. Browser checks covered 320×740, 370×822, 390×844, 740×320, 768×1024, 1024×768 and 1440×900 viewports. No horizontal overflow or clipped card text appeared; each name-row mark stayed 32×32px. The Bookworm wallpaper and intact poster loaded together. The Bookworm and SplitMic name-row assets match the supplied originals byte for byte. Previous navigation and contact checks verified that every phone/tablet menu destination exposed its heading below the header; the contact section remained readable at the end of the page. The message composer fit a narrow phone, scrolled on a landscape phone, encoded both email destinations correctly and restored focus after Escape. Product links opened their intended live sites. The original Cash Flow logo and water artwork loaded correctly. Monochrome technology marks have sufficient contrast against their dark frames.
