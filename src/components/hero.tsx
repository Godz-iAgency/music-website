import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-brand">GODZ-i Agency</p>
          <h1 id="hero-heading">Make room <span>for what matters.</span></h1>
          <p className="hero-description">Learn more. Connect better. Live healthier.<br className="hero-copy-break" /> Move forward with clarity.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-accent">View Our Work <ArrowDown size={17} aria-hidden="true" /></a>
            <a href="#contact" className="hero-contact">Contact Us <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
}
