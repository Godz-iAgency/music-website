"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function SplitMicBanner() {
  return (
    <section className="relative w-full section-spacing flex flex-col items-center overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <Reveal>
          {/* Distinct contained card — separate from the main CTA block */}
          <div className="relative max-w-3xl mx-auto rounded-3xl border border-white/[0.08] bg-surface-2 px-8 py-12 md:px-14 md:py-16 text-center overflow-hidden">
            {/* Soft accent glow inside the card */}
            <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[420px] h-[300px] rounded-full bg-accent/[0.05] blur-[110px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Clickable logo */}
              <a
                href="https://splitmic.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit SplitMic"
                className="relative w-16 h-16 mb-7 rounded-2xl overflow-hidden border border-white/[0.06] bg-surface-3 flex items-center justify-center transition-all duration-300 hover:border-accent/40 hover:scale-105"
              >
                <Image
                  src="/SplitMic.jpg.png"
                  alt="SplitMic Logo"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </a>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
                Not ready for a system yet? Start here.
              </h3>

              <p className="text-zinc-400 text-sm md:text-base mb-9 max-w-xl mx-auto leading-relaxed">
                SplitMic connects every player in Austin&apos;s music industry.
                Bands, venues, talent buyers, record labels, and festivals on one
                network. Free to join.
              </p>

              <a
                href="https://splitmic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-accent/40 hover:border-accent hover:bg-accent text-white text-xs font-bold tracking-[0.08em] uppercase rounded-xl transition-all duration-300"
              >
                Join SplitMic Free
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
