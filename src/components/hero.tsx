import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1 id="hero-heading">We build AI apps <span>for work and life.</span></h1>
          <p className="hero-description">Learn the key ideas in your books. Find bands and venues for your next show. Plan a week of healthy meals. See your income and spending in one place.</p>
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
