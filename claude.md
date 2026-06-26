@AGENTS.md

# GODZ-i Website Overhaul

## CONTEXT

This is the GODZ-i website. Next.js app deployed on Vercel via GitHub (repo: Godz-iAgency/music-website). Live site: https://www.godz-iagency.com

GODZ-i is an AI systems company that builds automation for the music industry exclusively. Founder: Christopher Downer (25 years music industry, international touring, Jimmy Cliff, Rita Marley, Broadway with Ashé Caribbean Performing Arts Company). Based in Austin, Texas.

Primary ICP: Independent Austin venue booking managers and talent buyers with 4+ events/month managing submissions and outreach manually. Secondary: bands, record labels, festivals.

Brand: Background #050507, Accent #E8450A (orange), Text white. Do not change visual identity or design language.

Discovery Call link (use everywhere): https://cal.com/christopher-downer-6pkxir/strategy-session
30-minute call. No pitch. No commitment.

## COPY RULES

- No dashes in ad copy (no em dashes, no hyphens used stylistically)
- No filler words
- No generic AI-sounding language
- Minimum words for maximum clarity
- Every line earns its place or gets cut

## MODEL RULE

- Sonnet = research/planning only. Present plan, wait for approval.
- User switches to Opus for implementation.
- Push straight to main (auto-deploys to Vercel).

## SECURITY

- NEVER commit `.env.local`
- Admin email: christopher@godz-iagency.com
- N8N webhook URL and auth secret are in env vars (NEXT_PUBLIC_N8N_WEBHOOK_URL, NEXT_PUBLIC_N8N_AUTH_SECRET)

---

## TASK PROGRESS

- [x] Task 1 — Fix Meta Tags (`src/app/layout.tsx`) — commit `13733cd`
- [x] Task 2 — Fix CTA Link — already correct in all 5 locations, no change needed
- [x] Task 3 — Update Hero Section (`src/components/hero.tsx`) — commit `13733cd`
- [x] Task 4 — Update Founder Section (`src/components/about.tsx`) — commit `13733cd`
- [x] Task 5 — Upgrade Testimonials (`src/components/testimonials.tsx`) — commit `13733cd`
- [x] Task 6 — Add Services Section (Payment Card Design) — rewrote `services.tsx` with 4 pricing cards, rendered between Proof and Testimonials in `page.tsx`
- [ ] Task 7 — Create /venues Page
- [ ] Task 8 — Create /talent-buyers Page
- [ ] Task 9 — Create /bands Page
- [ ] Task 10 — Create /record-labels Page
- [ ] Task 11 — Create /festivals Page
- [ ] Task 12 — Create /austin-music-industry Page
- [ ] Task 13 — Create /case-studies Page
- [ ] Task 14 — Update Navigation
- [ ] Task 15 — Update Footer
- [x] Task 16 — Add SplitMic Callout Block to Homepage — rewrote `splitmic-banner.tsx` as a distinct bordered card (outline CTA), placed after FinalCTA

## RECOMMENDED EXECUTION ORDER (remaining)

1. Task 6 — Services pricing cards (rewrite `src/components/services.tsx`, update `src/app/page.tsx`)
2. Task 16 — SplitMic callout block (rewrite `src/components/splitmic-banner.tsx`)
3. Task 14 — Navigation (dropdown "Who We Help", add Services/Case Studies/Book a Call)
4. Task 15 — Footer (audience links, tagline, contact info)
5. Task 7 — /venues page
6. Task 8 — /talent-buyers page
7. Task 9 — /bands page
8. Task 10 — /record-labels page
9. Task 11 — /festivals page
10. Task 12 — /austin-music-industry page
11. Task 13 — /case-studies page

## NOTE: STALE AGENCY CONTENT

These components still reference "marketing agencies" and should be addressed:
- `src/components/problem.tsx` — headline says "Your agency doesn't have a talent problem"
- `src/components/technology.tsx` — "4 Specialized AI Agents" with agency-focused descriptions
- `src/components/founder-story.tsx` — mentions "marketing agencies" (not rendered on page)
- `src/components/two-path.tsx` — mentions "Marketing Agencies" (not rendered on page)

Task 6 replaces `services.tsx`. Recommend removing `problem.tsx` and `technology.tsx` from page render (or rewriting them) since they don't fit the music-industry positioning. The other two are already not rendered.

---

## FULL TASK SPECS (remaining)

### TASK 6 — Add Services Section (Payment Card Design)

Create a new section on the homepage between "What We've Built" and "Testimonials."

**Section title:** "What We Build"

**Design requirements:**
- Four cards in a grid (2x2 on desktop, stacked on mobile)
- Each card has a visible border (use orange accent #E8450A at low opacity, or white at 15% opacity)
- Card style: payment page aesthetic — clean, structured, price prominent, features listed clearly
- No decorative elements. No icons unless they serve clarity.
- Price displayed large and prominent on each card
- One CTA button per card
- Copy is minimal. No dashes. No filler.

**Card 1 — Band Launchpad**
Tag: Bands
Price: From $750
One-time
Headline: "Your complete booking infrastructure."
Features:
  Professional EPK on your domain
  Fan capture system
  Automated venue outreach pipeline
  Show listings with automated updates
  Fan email follow-up sequences
CTA: "Book a Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

**Card 2 — Venue Intelligence System**
Tag: Venues
Price: $1,500 / mo
Headline: "Stop sorting submissions by hand."
Features:
  AI scoring for every band submission
  Automated booking calendar management
  48-hour response automation
  Monthly performance reporting
CTA: "Book a Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

**Card 3 — Talent Buyer Pipeline**
Tag: Talent Buyers
Price: $2,000 / mo
Headline: "A deal pipeline that runs without you."
Features:
  AI email triage and scoring
  Automated outreach to 100+ venues
  Centralized artist database
  Deal stage tracking end to end
CTA: "Book a Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

**Card 4 — Festival Operations Stack**
Tag: Festivals
Price: From $5,000 + $2,500 / mo
Headline: "Your entire operations pipeline automated."
Features:
  Artist and vendor application scoring
  Sponsor outreach pipeline
  Volunteer coordination automation
  Post-festival analytics report
CTA: "Book a Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

**Note below all four cards (small text, centered):**
"Record labels: we build demo scoring, artist development tracking, and roster communication automation. Contact us for a scoped engagement."

### TASK 7 — Create /venues Page

New page at /venues.

Meta title: `AI Booking Systems for Music Venues | GODZ-i`
Meta description: `GODZ-i builds AI submission scoring and booking automation for independent music venues. Austin, Texas.`

Hero headline: "Your inbox is full of band submissions. Your calendar is managed by hand."

Subheadline: "We build AI scoring and booking automation for independent venues so the best acts surface automatically and your calendar runs without you."

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session
Microcopy: "30 minutes. We map your current process and show you what we'd build."

Section title: "What a Venue Intelligence System Does"
Content:
  Scores every band submission against your criteria automatically
  Surfaces the top acts without manual review
  Sends automated responses at every stage
  Manages booking calendar with confirmations and reminders
  Delivers a monthly performance report

Pull quote:
"100 venues contacted. Automated follow-ups sent 48 hours apart. Zero manual work after setup. The bookings came in while I focused on performing."
Andrew Knor — Talent Buyer, The Empire

Pricing callout:
Venue Intelligence System
$1,500 per month
Fixed scope. Ongoing optimization.

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

### TASK 8 — Create /talent-buyers Page

New page at /talent-buyers.

Meta title: `AI Deal Pipeline for Talent Buyers | GODZ-i`
Meta description: `GODZ-i builds AI triage systems and deal pipelines for independent talent buyers. Austin, Texas.`

Hero headline: "Managing deals, artists, and 200 emails a week with no pipeline is a systems problem."

Subheadline: "We build AI triage and automated deal pipelines for independent talent buyers so your operation scales without you in every thread."

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

Section title: "What a Talent Buyer Pipeline Does"
Content:
  Triages every inbound email automatically by urgency and deal stage
  Builds and maintains a centralized artist database
  Automates outreach sequencing to 100+ venues
  Tracks every deal from pitched to settled
  Flags what needs your attention — everything else runs

Pull quote:
"Christopher built an automated outreach system that contacted 100 venues and sent follow-ups automatically. I did not touch my inbox. The bookings came in while I was performing."
Andrew Knor — Talent Buyer, The Empire

Pricing callout:
Talent Buyer Pipeline
$2,000 per month

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

### TASK 9 — Create /bands Page

New page at /bands.

Meta title: `AI Booking Systems for Bands | GODZ-i`
Meta description: `GODZ-i builds automated venue outreach, EPK systems, and fan capture for independent bands. Austin, Texas.`

Hero headline: "Sending booking emails by hand with no system behind them."

Subheadline: "We build a complete booking infrastructure for independent bands doing 2 or more paid shows a month."

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

Section title: "What the Band Launchpad Includes"
Content:
  Professional EPK hosted on your own domain
  Fan capture system across every show and platform
  Automated venue outreach pipeline with scheduled follow-ups
  Show listings with automated calendar updates
  Fan email follow-up sequences from day one

Timeline callout: "Delivered in two weeks. Fixed scope. Fixed price."

Pricing callout:
Band Launchpad
From $750 — one time

Pull quote:
"What took us months to figure out, Christopher delivered in two weeks. The system is now handling our entire workflow."
Matthias Gautreaux — Founder, Ras Mundi

Small note below:
"This package is for bands doing 2 to 4 paid shows per month minimum. Not there yet? Join SplitMic free and build your network first."
Link: Join SplitMic → splitmic.com

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

### TASK 10 — Create /record-labels Page

New page at /record-labels.

Meta title: `AI Systems for Independent Record Labels | GODZ-i`
Meta description: `GODZ-i builds demo scoring AI, artist development tracking, and roster automation for independent record labels. Austin, Texas.`

Hero headline: "Demo review is slow. Artist development lives in spreadsheets. Roster communication is manual."

Subheadline: "We build AI demo scoring, artist development tracking, and roster communication automation for independent labels with active rosters."

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

Section title: "What We Build for Record Labels"
Content:
  AI demo scoring — every submission scored, top acts surfaced automatically
  Artist development tracker — milestones, release schedules, performance targets in one system
  Roster communication automation — updates and reporting sent without manual work
  A&R pipeline from submission to signed

Pricing callout:
Custom scoped engagement
Typically $2,000 to $2,500 per month

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

### TASK 11 — Create /festivals Page

New page at /festivals.

Meta title: `AI Operations Systems for Music Festivals | GODZ-i`
Meta description: `GODZ-i automates artist applications, sponsor outreach, volunteer coordination, and post-festival reporting for independent music festivals. Austin, Texas.`

Hero headline: "Running a festival on spreadsheets and group texts is a systems problem."

Subheadline: "We build automated operations stacks for independent festivals. Artist applications, sponsor pipelines, volunteer coordination, and post-event analytics — all running before your event date."

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

Section title: "What the Festival Operations Stack Includes"
Content:
  Artist and vendor application scoring — best acts surface automatically
  Sponsor outreach pipeline with automated sequencing and tracking
  Volunteer coordination — applications, assignments, confirmations, reminders
  Post-festival analytics — attendance, revenue, artist performance, sponsor ROI

Pricing callout:
Festival Operations Stack
From $5,000 setup + $2,500 per month
Scoped to your event timeline.

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

### TASK 12 — Create /austin-music-industry Page

New page at /austin-music-industry. Local SEO landing page.

Meta title: `AI Systems for Austin's Music Industry | GODZ-i`
Meta description: `GODZ-i is Austin's only AI systems company built exclusively for the music industry. Venues, bands, talent buyers, record labels, and festivals.`

Hero headline: "Austin's music industry runs on relationships and talent. The ones who scale run on systems too."

Subheadline: "GODZ-i is the only AI systems company built exclusively for Austin's music industry."

Body copy:
"Austin has more live music venues per capita than any city in the world. Thousands of working bands. Independent labels. A festival calendar that runs year-round. Most of it still managed by hand.

GODZ-i was built in Austin, for Austin. We built SplitMic — the platform connecting every player in Austin's music ecosystem — because we are not just serving this market. We are embedded in it.

We are currently accepting 3 new clients."

CTA: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

SplitMic callout:
"New to Austin's music scene? Join SplitMic free — the platform built to connect every player in Austin's music ecosystem."
Link: splitmic.com

### TASK 13 — Create /case-studies Page

New page at /case-studies.

Meta title: `Case Studies | GODZ-i`
Meta description: `AI systems built for music industry clients — booking pipelines, fan capture systems, venue outreach automation, and more.`

Page headline: "Real Work. Real Results."

Subheadline: "Every system is custom scoped, delivered in weeks, and built to run without the client managing it."

Case Study 1 — Ras Mundi
Client type: Independent artist
Problem: No EPK, no fan capture, no venue outreach system. Everything manual.
What we built:
  Professional EPK on client domain
  Fan intake and capture system
  Automated venue outreach pipeline with follow-up sequences
  Performance reporting dashboard
Timeline: 2 weeks
Result: "What used to take hours every week now runs without us. The system replaced at least 8 hours of manual work per week from day one."
Matthias Gautreaux — Founder, Ras Mundi
Link: rasmundimusic.com

Case Study 2 — DJ AK
Client type: Talent buyer
Problem: Manual venue outreach. No follow-up system. Unmanageable inbox.
What we built:
  Automated venue outreach system contacting 100 venues
  Follow-up sequences sent automatically 48 hours apart
  Zero manual work after setup
Result: "I did not touch my inbox. The bookings came in while I was performing. That system paid for itself in the first month."
Andrew Knor — Talent Buyer, The Empire
Link: itzdjak.com

Case Study 3 — SplitMic
Type: Platform build
Problem: Austin's music industry had no central connection layer.
What we built: Full music industry connection platform. Bands, venues, talent buyers, record labels, and festivals on one platform. Production ready.
Link: splitmic.com

Final CTA:
"Ready to be next?"
Button: "Book a Free Discovery Call" → https://cal.com/christopher-downer-6pkxir/strategy-session

### TASK 14 — Update Navigation

Current nav: Home | Who We Help | Work | Testimonials | About

New nav: Home | Who We Help | Services | Case Studies | About | Book a Call

"Book a Call" is a styled orange button, not a plain text link.

"Who We Help" becomes a dropdown with:
  Venues → /venues
  Talent Buyers → /talent-buyers
  Bands → /bands
  Record Labels → /record-labels
  Festivals → /festivals

"Services" scrolls to the services section on the homepage (anchor link).
"Case Studies" links to /case-studies.

### TASK 15 — Update Footer

Add to footer navigation:
  Venues → /venues
  Talent Buyers → /talent-buyers
  Bands → /bands
  Record Labels → /record-labels
  Festivals → /festivals
  Austin Music Industry → /austin-music-industry
  Case Studies → /case-studies

Footer tagline: "The only AI systems company built exclusively for the music industry."

Footer contact:
  christopher@godz-iagency.com
  godz-iagency.com
  Austin, Texas

Keep LinkedIn link. Update copyright year to 2026.

### TASK 16 — Add SplitMic Callout Block to Homepage

After the final CTA section on the homepage, add a distinct callout block.

Headline: "Not ready for a system yet? Start here."

Body: "SplitMic connects every player in Austin's music industry — bands, venues, talent buyers, record labels, and festivals on one network. Free to join."

CTA: "Join SplitMic Free" → https://splitmic.com

Style: Distinct from the main CTA block. Use a subtle border or slightly different background so it reads as a separate section. Keep within brand palette.
