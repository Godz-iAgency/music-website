import { capabilities } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { BookOpen, UsersRound, Leaf, ChartNoAxesCombined } from "lucide-react";

const capabilityIcons = [BookOpen, UsersRound, Leaf, ChartNoAxesCombined];

export function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities" aria-labelledby="capabilities-heading">
      <div className="container">
        <SectionHeading label="Capabilities" title="Different industries. Same discipline." id="capabilities-heading" />
        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index];
            return (
            <div key={capability.name} className="capability">
              <div className="capability-symbol" aria-hidden="true"><Icon size={25} strokeWidth={1.6} /><span className="capability-number">0{index + 1}</span></div>
              <h3>{capability.name}</h3><p>{capability.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
