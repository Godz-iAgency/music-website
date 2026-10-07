# Portfolio configuration

The existing Next.js 16 application remains connected to Godz-iAgency/music-website. React, Tailwind, dependencies, deployment domain and original animation media are retained.

Content and the four app URLs live in src/data/portfolio.ts. The twelve technologies include Claude Design and Resend (Email Sending), with Resend immediately after Google Workspace in source order. Existing responsive grid columns determine its visual placement. Resend's official white icon is hosted at public/technology/resend.svg. Team stays hidden until supplied staff information is added.

The hero states what GODZ-i builds, with concrete app results underneath. Its redundant brand eyebrow is removed; public branding is GODZ-i. Product card headings use the owner's approved slogans: Making every book smarter; Music Industry Connected; Healthy Eating Made Simple; Every dollar counts. Keep these slogans verbatim unless the owner requests a change. Their subtext describes the book course, shared music platform, meal plan and financial overview. Capability entries retain their category names as identifiers and expose a separate outcome headline. Keep the hero, metadata description and social-preview copy aligned when editing messaging. Avoid unsupported guarantees, invented metrics or claims about product results.

The palette remains dark with the GODZ-i orange accent. Typography uses native Apple system fonts on Apple devices, Segoe UI Variable/Segoe UI on Windows and platform fallbacks. Display headings have size-specific tracking and stronger weights; readable body text, labels and 16px form controls avoid tiny text and automatic input zoom.

Original product artwork is hosted in public/products. Every product name row renders its logo. Bookworm uses bookworm-original-mark.png. SplitMic keeps splitmic.png in its visual stage and uses nameLogo with splitmic-mark.png in the name row. Cash Flow Tracker uses the owner's original 1254px green/gold mark in both positions, with the supplied water background. The assets were copied without edits; unique paths prevent stale optimized images. Six Plants retains its original mark and food artwork.

Bookworm's visual stage uses the generated cyan/blue/magenta network wallpaper at public/products/bookworm-wallpaper.png, with its original poster on top. The generation prompt and provenance are saved in docs/bookworm-wallpaper-prompt.md. The card-only wallpaper does not change the site's dark/orange theme.

The four App Description cards have generated decorative wallpapers in public/descriptions, using Bookworm cyan/violet, SplitMic orange, Six Plants green and Cash Flow lime/gold/teal. Dark overlays preserve text contrast. Each number precedes its icon at the left. The existing responsive grid and all copy remain. Prompts and asset provenance are in docs/description-wallpaper-prompts.md. These wallpapers and their markup are part of the approved design for the next copy-only task.

Contact's Message Us icon opens an accessible message window to Christopher@godz-iagency.com. Continue in Gmail and Use your email app open prefilled drafts. The visitor sends in their composer. No backend, webhook or mail service is needed, and no environment values were changed.

Mobile navigation floats below a constant-height header. Section anchor offsets follow the header height, so closing the menu cannot shift or hide the destination heading. Long sections retain normal page scrolling.

Desktop/mobile navigation and matching section labels are Apps, App Description, Tech Stack and Contact Us. The existing destinations remain #work, #capabilities, #technology and #contact. The owner's next task is a copy-only rewrite; context, locked brand wording and preservation rules are in docs/claude-code-copy-handoff.md.

The original animation autoplays muted in an inline loop with no on-page playback controls. The operating system's reduced-motion preference is respected. GODZ-i's original logo and both animation files remain unchanged.

Production checks use the normal build, TypeScript and scoped ESLint. The separate supplied project archives and temporary review artifacts are excluded from scanning and publishing. Full-project lint has pre-existing findings in unused legacy sources.
