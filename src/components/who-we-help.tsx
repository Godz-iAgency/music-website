"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const CARDS = [
  {
    title: "Bands",
    pain: "You're sending booking emails by hand with no system behind them.",
    build: "We automate your venue outreach, fan capture, and follow-up.",
    photo: "/bands.jpg.jpg",
  },
  {
    title: "Venues",
    pain: "Your inbox is full of band submissions with no way to sort them.",
    build: "We build AI scoring systems so the best acts rise to the top.",
    photo: "/venues.jpg.jpg",
  },
  {
    title: "Talent Buyers",
    pain: "You're managing deals, artists, and emails with no pipeline.",
    build: "We build triage systems and deal pipelines that run without you.",
    photo: "/talent_buyers.jpg.jpg",
  },
  {
    title: "Record Labels",
    pain: "Demo review is slow, manual, and inconsistent.",
    build: "We build AI demo scoring and artist development tracking.",
    photo: "/record_labels.jpg.jpg",
  },
  {
    title: "Festivals",
    pain: "Applications, sponsors, and volunteers managed in spreadsheets.",
    build: "We automate your entire application and outreach pipeline.",
    photo: "/festivals.jpg.jpg",
  },
];

export function WhoWeHelp() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section
      id="who-we-help"
      className="relative flex flex-col items-center w-full section-spacing bg-surface overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white leading-tight">
              Built for Every Player in the Music Industry.
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CARDS.map(({ title, pain, build, photo }, index) => {
            const isFlipped = flippedIndex === index;
            return (
              <StaggerItem
                key={title}
                className="h-[380px] w-full cursor-pointer select-none"
                style={{ perspective: "1000px" }}
              >
                <div
                  onClick={() => toggleFlip(index)}
                  className="relative w-full h-full duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isFlipped ? "rotateY(180deg)" : "none",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl bg-surface-2 border border-white/[0.04] flex flex-col overflow-hidden hover:border-accent/20 transition-all duration-300"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* Image — top */}
                    <div className="relative w-full h-[150px] shrink-0">
                      <Image
                        src={photo}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/30 to-transparent" />
                    </div>
                    {/* Copy — bottom */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-white mb-3">{title}</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed font-medium">{pain}</p>
                      </div>
                      <p className="text-xs text-accent font-semibold tracking-wider uppercase">Click to see more &rarr;</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl bg-surface-3 border border-accent/25 flex flex-col overflow-hidden"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* Image — top */}
                    <div className="relative w-full h-[150px] shrink-0">
                      <Image
                        src={photo}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-3 via-surface-3/30 to-transparent" />
                    </div>
                    {/* Copy — bottom */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-accent mb-3">{title}</h3>
                        <p className="text-sm text-zinc-200 leading-relaxed font-medium">{build}</p>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-medium tracking-wide uppercase">Click to flip back</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
