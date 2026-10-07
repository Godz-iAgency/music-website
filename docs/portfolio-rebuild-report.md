# GODZ-i visual refinement

The existing layout and dark/orange theme are preserved. The typography audit identified small labels, light heading weights and aggressive negative tracking. The refinement replaces Montserrat presentation with native system typography, clearer heading weights, readable body/utility text and consistent stroke weights for functional icons. Capabilities have simple purpose-specific outline icons and technology marks have restrained dark frames.

The homepage headline is now **More progress. Less friction.** Its supporting copy leads with practical outcomes: putting learning to work, finding people, eating well with a plan and understanding where money goes. Section and capability headings now describe the visitor's payoff rather than the agency's process. Product headings lead with learning, music connections, easier healthy eating and clearer finances. Original brand slogans remain visible in the product descriptions and supplied artwork. Contact invites visitors to bring their next app to life. The search description and social preview use the same outcome-led language. Product and technology names stay intact.

## Navigation

The expanded mobile menu used to increase the sticky header's document height. Anchor scrolling happened before the menu collapsed, so the destination moved upward afterward. The menu is now an absolute overlay below a constant-height header. Section offsets follow desktop/mobile header heights. Destination focus, immediate interaction, Escape dismissal and reduced-motion scrolling remain supported. Long sections scroll naturally rather than being compressed to fit a phone.

## Product branding and contact

The original Cash Flow Tracker green/gold logo and clear-flow.webp water artwork were copied without edits. The prior generated logo is replaced. A dark overlay and a framed intact mark keep its card readable. Other product imagery, links, slogans and card placements remain.

The contact action reads **Message Us**, uses a refined message icon and retains Christopher@godz-iagency.com. The email-app alternative reads **Use your email app**. Company-facing wording is plural. Visitors send from the Gmail or email-app composer; no real messages are sent during verification.

## Animation and scope

The video loops automatically with no visible play/pause control. Reduced-motion preference handling remains. Both original media files are unchanged:

- godzi-intro.webm SHA-256: 3AEE3A80D864FA86E47871F5739EB38E44D5AF68A68AA33A1DB65B57F4C73E71
- godzi-intro.mp4 SHA-256: A846E80602C317615BCE518B85398C20F868BA43D63CCE128E6A6249D2021D6D

No dependencies, production domain, environment values, team data or separate project archives were changed. Full-project lint retains its pre-existing eight errors and six warnings in unused legacy components; scoped checks cover the live page changes.

## Verification

Production build and TypeScript passed; scoped ESLint and whitespace checks passed. The production smoke check verified four product cards, eleven technology entries, twenty-two asset requests and the social preview. Browser checks covered 320×740, 370×822, 390×844, 740×320, 768×1024, 1024×768 and 1440×900 viewports. No horizontal overflow appeared. Every phone/tablet menu destination exposed its heading below the header; the contact section remained fully readable when scrolling was limited by the end of the page. The message composer fit a narrow phone, scrolled on a landscape phone, encoded both email destinations correctly and restored focus after Escape. Product links opened their intended live sites. The original Cash Flow logo and water artwork loaded correctly. Several monochrome technology marks discovered during visual review now have sufficient contrast against their dark frames.
