import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1 id="hero-heading">Use our apps. <span>Or have us build yours.</span></h1>
          <p className="hero-description">Turn a book into a 7-day course. Plan a week of meals. Track every dollar. Find the people your next show needs. We built them all. Use one, or book a call and we&apos;ll build yours.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-accent">See the Apps <ArrowDown size={17} aria-hidden="true" /></a>
            <a href="https://cal.com/christopher-downer-6pkxir/strategy-session" className="hero-contact" target="_blank" rel="noopener noreferrer">Book a Call <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
}
