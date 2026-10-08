import Image from "next/image";
import { capabilities } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { BookOpen, UsersRound, Leaf, ChartNoAxesCombined } from "lucide-react";

const capabilityIcons = [BookOpen, UsersRound, Leaf, ChartNoAxesCombined];

export function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities" aria-labelledby="capabilities-heading">
      <div className="container">
        <SectionHeading label="App Description" title="The problem each app solves." id="capabilities-heading" />
        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index];
            return (
            <div key={capability.name} className={`capability capability-${capability.theme}`}>
              <Image src={capability.background} alt="" fill sizes="(max-width: 360px) 90vw, (max-width: 1100px) 45vw, 280px" className="capability-background" />
              <div className="capability-symbol" aria-hidden="true"><span className="capability-number">0{index + 1}</span><Icon size={25} strokeWidth={1.6} /></div>
              <h3>{capability.headline}</h3><p>{capability.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
