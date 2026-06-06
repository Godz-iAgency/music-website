"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function SplitMicBanner() {
  return (
    <section className="relative w-full py-16 bg-[#030305] border-t border-b border-white/[0.03] overflow-hidden flex flex-col items-center">
      {/* Background visual glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/[0.015] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10 text-center relative z-10 flex flex-col items-center">
        <Reveal>
          <a
            href="https://splitmic.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit SplitMic"
            className="relative w-16 h-16 mb-6 rounded-2xl overflow-hidden border border-white/[0.06] bg-surface-2 flex items-center justify-center mx-auto transition-all duration-300 hover:border-accent/40 hover:scale-105"
          >
            <Image
              src="/SplitMic.jpg.png"
              alt="SplitMic Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </a>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-3">
            Based in Austin? Join SplitMic.
          </h3>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-lg mx-auto">
            The platform connecting every player in the Austin music industry.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <MagneticButton
            href="https://splitmic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-light text-white text-xs font-bold tracking-[0.08em] uppercase rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(232,67,10,0.12)] hover:shadow-[0_0_30px_rgba(232,67,10,0.22)]"
            strength={0.15}
          >
            Join Free
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
