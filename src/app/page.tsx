import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Capabilities } from "@/components/capabilities";
import { Technology } from "@/components/technology";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { team } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation showTeam={team.length > 0} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <Technology />
        <Team members={team} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
