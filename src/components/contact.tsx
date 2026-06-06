"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!;
const N8N_AUTH_SECRET = process.env.NEXT_PUBLIC_N8N_AUTH_SECRET!;

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "GODZ-i Website Message": N8N_AUTH_SECRET,
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg bg-surface-2 border border-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-zinc-600 hover:border-accent/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300";

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center w-full section-spacing bg-surface overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      {/* Soft accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.03] blur-[200px] pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-10 md:mb-12 flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              Contact
              <span className="w-10 h-px bg-accent/40" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              Send Us a Message.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-sm md:text-base text-zinc-400 font-medium max-w-md">
              Tell us what you&apos;re working on and we&apos;ll get back to you.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl bg-surface-3 border border-white/[0.05] p-8 md:p-10"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="text-xs font-semibold tracking-wider uppercase text-zinc-400"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="text-xs font-semibold tracking-wider uppercase text-zinc-400"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold tracking-wider uppercase text-zinc-400"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center px-8 py-3.5 bg-accent hover:bg-accent-light text-white text-xs font-bold tracking-[0.08em] uppercase rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(232,67,10,0.15)] hover:shadow-[0_0_30px_rgba(232,67,10,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-center text-emerald-400 font-medium">
                Thanks — your message has been sent. We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-center text-red-400 font-medium">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
