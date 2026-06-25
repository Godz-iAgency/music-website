"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const CAL_LINK = "https://cal.com/christopher-downer-6pkxir/strategy-session";

const PLANS = [
  {
    tag: "Bands",
    name: "Band Launchpad",
    price: "From $750",
    priceNote: "One-time",
    headline: "Your complete booking infrastructure.",
    features: [
      "Professional EPK on your domain",
      "Fan capture system",
      "Automated venue outreach pipeline",
      "Show listings with automated updates",
      "Fan email follow-up sequences",
    ],
  },
  {
    tag: "Venues",
    name: "Venue Intelligence System",
    price: "$1,500",
    priceNote: "Per month",
    headline: "Stop sorting submissions by hand.",
    features: [
      "AI scoring for every band submission",
      "Automated booking calendar management",
      "48-hour response automation",
      "Monthly performance reporting",
    ],
  },
  {
    tag: "Talent Buyers",
    name: "Talent Buyer Pipeline",
    price: "$2,000",
    priceNote: "Per month",
    headline: "A deal pipeline that runs without you.",
    features: [
      "AI email triage and scoring",
      "Automated outreach to 100+ venues",
      "Centralized artist database",
      "Deal stage tracking end to end",
    ],
  },
  {
    tag: "Festivals",
    name: "Festival Operations Stack",
    price: "From $5,000",
    priceNote: "Plus $2,500 per month",
    headline: "Your entire operations pipeline automated.",
    features: [
      "Artist and vendor application scoring",
      "Sponsor outreach pipeline",
      "Volunteer coordination automation",
      "Post-festival analytics report",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center w-full section-spacing bg-surface-2 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              What We Build.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-sm md:text-base text-zinc-400 max-w-2xl">
              Fixed scope. Built to run without you.
            </p>
          </Reveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
          staggerDelay={0.1}
        >
          {PLANS.map(({ tag, name, price, priceNote, headline, features }) => (
            <StaggerItem key={name}>
              <motion.div
                className="group relative h-full flex flex-col rounded-2xl bg-surface-3 border border-accent/20 p-8 md:p-10 overflow-hidden hover:border-accent/40 transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Tag */}
                <span className="inline-block self-start text-[10px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-lg bg-accent/10 text-accent border border-accent/15 mb-6">
                  {tag}
                </span>

                {/* Plan name */}
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-5">
                  {name}
                </h3>

                {/* Price */}
                <div className="pb-6 mb-6 border-b border-white/[0.06]">
                  <div className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-white">
                    {price}
                  </div>
                  <div className="mt-2 text-xs font-semibold tracking-wide uppercase text-zinc-500">
                    {priceNote}
                  </div>
                </div>

                {/* Headline */}
                <p className="text-[15px] md:text-base font-semibold text-zinc-200 mb-6">
                  {headline}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3.5 mb-9">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 w-4 h-4 shrink-0 text-accent"
                        strokeWidth={2.4}
                      />
                      <span className="text-sm text-zinc-400 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center w-full px-6 py-3.5 bg-accent hover:bg-accent-light text-white text-xs font-bold tracking-[0.08em] uppercase rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(232,67,10,0.12)] hover:shadow-[0_0_30px_rgba(232,67,10,0.22)]"
                >
                  Book a Discovery Call
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Record labels note */}
        <Reveal delay={0.1}>
          <p className="mt-10 md:mt-12 text-center text-sm text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            Record labels: we build demo scoring, artist development tracking, and
            roster communication automation. Contact us for a scoped engagement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
