import { capabilities } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities" aria-labelledby="capabilities-heading">
      <div className="container">
        <SectionHeading label="Capabilities" title="Different industries. Same discipline." id="capabilities-heading" />
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <div key={capability.name} className="capability">
              <span className="capability-number" aria-hidden="true">0{index + 1}</span>
              <h3>{capability.name}</h3><p>{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
