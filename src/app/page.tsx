import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { WhoWeHelp } from "@/components/who-we-help";
import { Process } from "@/components/process";
import { Proof } from "@/components/proof";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { FinalCTA } from "@/components/final-cta";
import { SplitMicBanner } from "@/components/splitmic-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhoWeHelp />
        <Process />
        <Proof />
        <Testimonials />
        <About />
        <FinalCTA />
        <SplitMicBanner />
      </main>
      <Footer />
    </>
  );
}
