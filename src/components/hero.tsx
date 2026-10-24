import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";
import { callUrl } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">AI-powered apps · Custom builds</p>
          <h1 id="hero-heading" className="hero-headline">We develop innovative AI-powered apps <span>and subscription-based digital products across Health, Finance, Education, and Music.</span></h1>
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
