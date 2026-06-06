"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Christopher built our complete artist operations system — EPK, fan outreach automation, venue booking pipeline, and performance reporting all integrated. What took us months to figure out he delivered in a couple of weeks. The system is now handling our entire workflow.",
    author: "Matthias Gautreaux",
    title: "Founder",
    company: "Ras Mundi",
    url: "https://rasmundimusic.com",
    photo: "/matthias_gautreaux.jpg.jpg",
    isSocial: false,
  },
  {
    quote:
      "Christopher built an automated outreach system that contacted 100 venues and sent follow-ups automatically. I did not touch my inbox. The bookings came in while I focused on performing.",
    author: "Andrew Knor",
    title: "Talent Buyer",
    company: "The Empire",
    url: "#",
    photo: "/andrew_knor.jpg.png",
    isSocial: false,
  },
  {
    quote: "Music Industry Connected.",
    author: "The platform built for Austin's music ecosystem.",
    title: "SplitMic",
    company: "SplitMic",
    url: "https://splitmic.com",
    photo: "/SplitMic.jpg.png",
    isSocial: true,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center w-full section-spacing bg-surface overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              Testimonials
              <span className="w-10 h-px bg-accent/40" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              What Clients Say.
            </h2>
          </Reveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          staggerDelay={0.1}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="group relative h-full rounded-2xl bg-surface-3 border border-white/[0.04] p-8 md:p-10 overflow-hidden hover:border-accent/15 transition-all duration-500 flex flex-col justify-between"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t bg-accent/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />

                {testimonial.isSocial ? (
                  <div className="relative z-10 flex flex-col h-full justify-between items-center text-center py-4">
                    <div className="flex flex-col items-center">
                      <div className="relative w-16 h-16 mb-6 rounded-2xl overflow-hidden border border-white/[0.06] bg-surface-2 flex items-center justify-center mx-auto">
                        <Image
                          src={testimonial.photo}
                          alt="SplitMic Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">
                        {testimonial.quote}
                      </p>
                      <p className="text-xs text-zinc-400 font-medium max-w-[200px] mx-auto">
                        {testimonial.author}
                      </p>
                    </div>
                    <div className="pt-6 w-full border-t border-white/[0.06] mt-8">
                      <a
                        href={testimonial.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-accent hover:text-accent-light transition-colors"
                      >
                        splitmic.com &rarr;
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative z-10 mb-8">
                      <svg
                        className="w-8 h-8 text-accent/40 mb-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-[14px] md:text-[15px] text-zinc-300 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    <div className="relative z-10 pt-6 border-t border-white/[0.06] flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white tracking-wide">
                          {testimonial.author}
                        </p>
                        <p className="text-[11px] text-zinc-500 mt-0.5 tracking-[0.04em]">
                          {testimonial.title},{" "}
                          <span className="text-accent/70 font-medium">
                            {testimonial.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
