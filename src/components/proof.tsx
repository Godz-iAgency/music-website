"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const PROOFS = [
  {
    num: "01",
    client: "Ras Mundi",
    description:
      "EPK, fan intake system, automated venue outreach pipeline, performance reporting. Delivered in two weeks.",
    link: "https://rasmundimusic.com",
    linkText: "rasmundimusic.com",
  },
  {
    num: "02",
    client: "DJ AK — Austin DJ, 300+ Five-Star Reviews",
    description:
      "Automated venue outreach system. 100 venues contacted. Automated follow-ups sent 48 hours apart. Zero manual work after setup.",
    link: "https://itzdjak.com",
    linkText: "itzdjak.com",
  },
  {
    num: "03",
    client: "SplitMic",
    description:
      "Music industry connection platform built for Austin. Connects bands, venues, talent buyers, record labels, and festivals on one platform.",
    link: "https://splitmic.com",
    linkText: "Join SplitMic free if you're in Austin",
  },
];

export function Proof() {
  return (
    <section id="work" className="relative flex flex-col items-center w-full section-spacing overflow-hidden bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              Real Work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              What We&apos;ve Built.
            </h2>
          </Reveal>
        </div>

        <StaggerContainer staggerDelay={0.06}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {PROOFS.map((proof) => (
              <StaggerItem key={proof.num}>
                <ProofCard {...proof} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProofCard({
  num,
  client,
  description,
  link,
  linkText,
}: {
  num: string;
  client: string;
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <motion.div
      className="group relative h-full rounded-2xl bg-surface-2 border border-white/[0.04] p-9 md:p-11 overflow-hidden hover:border-accent/15 transition-all duration-500 flex flex-col justify-between"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Animated top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/60 via-accent/20 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out" />

      {/* Large watermark number */}
      <span className="absolute top-4 right-6 text-[5.5rem] font-black text-white/[0.015] leading-none select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-700 font-mono">
        {num}
      </span>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-4 leading-snug">
            {client}
          </h3>
          <p className="text-[14px] text-zinc-400 leading-relaxed mb-8">{description}</p>
        </div>
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light transition-colors group/link"
          >
            {linkText}
            <span className="group-hover/link:translate-x-1 transition-transform duration-200"> &rarr;</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
