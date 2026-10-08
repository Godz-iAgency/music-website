import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";
import { callUrl } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Live apps · Custom builds · Austin, Texas</p>
          <h1 id="hero-heading">Production-ready apps. <span>Use ours, or we build yours.</span></h1>
          <p className="hero-description">Every app is live. Open one now, or book a free video call and leave with a plan for yours.</p>
          <div className="hero-actions">
            <a href={callUrl} className="button button-accent" target="_blank" rel="noopener noreferrer">Book a Free Call <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            <a href="#work" className="hero-contact">Our Apps <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
}
