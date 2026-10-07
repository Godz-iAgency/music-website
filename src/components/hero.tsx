import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-brand">GODZ-i Agency</p>
          <h1 id="hero-heading">More progress. <span>Less friction.</span></h1>
          <p className="hero-description">Put what you learn to work. Find your people. Eat well with a plan. Know where your money goes.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-accent">Explore the Apps <ArrowDown size={17} aria-hidden="true" /></a>
            <a href="#contact" className="hero-contact">Build With Us <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
}
