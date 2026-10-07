# Portfolio rebuild

The music-focused homepage is now a software portfolio with the requested hero, four linked apps, concise capabilities, eleven technologies and a simple contact composer. It uses the original dark theme and orange accent, supplied product imagery and the newly generated Cash Flow Tracker logo.

## Products

- Bookworm AI: https://bookworm-ai.app/ — existing headline and supplied poster.
- SplitMic: https://www.splitmic.com/ — Music Industry Connected.
- Six Plants: https://www.gbombs.app/ — Healthy eating made simple.
- Cash Flow Tracker: https://cash-flow-tracker-godz-i.vercel.app/ — Every dollar counts.

Both Six Plants images appear in its card. Each entire card opens its live app. Original artwork is copied without edits. The cash-flow reference informed the requested cleaner logo's lime/cyan palette and flow-arrow concept.

## Contact

The message icon opens a native modal with Subject and Message. Continue in Gmail opens Google's compose window to Christopher@godz-iagency.com. Use my email app opens the same draft via mailto. Visitors send from their email account. There is no automatic-send backend or webhook. No real email was sent during checks.

## Animation and scope

The original muted inline animation remains byte-for-byte unchanged, with pause/play and reduced-motion handling:

- godzi-intro.webm SHA-256: 3AEE3A80D864FA86E47871F5739EB38E44D5AF68A68AA33A1DB65B57F4C73E71
- godzi-intro.mp4 SHA-256: A846E80602C317615BCE518B85398C20F868BA43D63CCE128E6A6249D2021D6D

The public homepage composition replaces the old marketing sections; unused legacy sources and separate project archives are retained. Team stays hidden because no staff information was supplied. Production environment values were not modified.

## Logo generation

Built-in image generation produced public/products/cash-flow-tracker.png (1942 by 809). Final prompt:

> Final professional logo. Perfectly clean flat 2D graphic on a SOLID uniform very dark navy background #080d16. Horizontal centered logo: elegant lime-green (#b8e858) cash-flow symbol made of two opposing smooth rounded arrows in an S loop, with one cyan (#55cee3) arrow. To the right exact text "Cash Flow" in bold modern geometric sans-serif lime-green, second line "TRACKER" in cyan uppercase, widely spaced. Large flat solid fills. Crisp impeccable smooth edges. No transparency. NO texture, grain, artifacts, distress, glow, gradients, 3D, shadows, bevels, tiny dots, white, mockup or additional text. The only content is the logo on uniform dark navy. Wide logo layout filling most of the canvas with balanced padding.

The retained dependency and deployment setup is unchanged. The explicit build root and archive exclusions prevent unrelated local projects from being bundled.

## Verification

Production build and TypeScript passed. Scoped ESLint passed with zero warnings, and git diff --check passed. Browser review covered 1440x900, 768x1024, 390x844 and 320x740 with no horizontal overflow. All 18 images loaded, four app links were correct, and the message window fit both phone sizes. Subject/body URL encoding, initial focus, Escape dismissal, restored trigger focus and mobile navigation were verified. Browser console had no errors. Production smoke checks passed for the page, 21 assets, social preview and eleven browser JavaScript files with no contact-credential references. No email was sent.

Full-project lint retains eight pre-existing errors and six warnings in unused legacy components, documented during the original rebuild. None of those sources changed.
