# Portfolio configuration

This is the existing Next.js 16 application connected to Godz-iAgency/music-website. React, Tailwind, Montserrat, the production domain and the original animation are retained.

Product content, URLs and the eleven technology entries live in src/data/portfolio.ts. All four cards open their own apps. Claude Design was added at the owner's request. Team content remains hidden until staff information is supplied.

Original supplied Bookworm, SplitMic and both Six Plants images are hosted in public/products with their original proportions. Cash Flow Tracker uses a newly generated lime/cyan logo on a dark navy background. The original GODZ-i branding and animation files remain unchanged.

Contact opens an accessible message window addressed to Christopher@godz-iagency.com. Subject and message stay in the visitor's browser until they choose Continue in Gmail or Use my email app. Both open a prefilled composer; the visitor presses Send there. There is no contact backend, webhook or new mail dependency. Existing environment files were not modified.

The page retains the original dark background and orange accent. Apple design guidance informed its typography, translucent navigation, immediate press feedback, touch targets and reduced-motion/transparency/contrast handling.

Technology assets: OpenAI, Claude, Gemini, Supabase, Vercel, Stripe and Google marks from Simple Icons 15.20.0; Firestore from Google's official cloud icon bundle; Higgsfield from its official icon; Google Vids from Google's official product image. Codex and Vercel marks adapt for contrast against dark surfaces.

Checks: npm run build, TypeScript and scoped ESLint. Full-project lint has existing findings in retained, unused legacy components. Separate supplied application archives and temporary review files are excluded from build scanning and are not part of the site.
