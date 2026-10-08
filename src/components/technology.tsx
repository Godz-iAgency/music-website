import Image from "next/image";
import { technologies } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Technology() {
  return (
    <section id="technology" className="section technology" aria-labelledby="technology-heading">
      <div className="container">
        <SectionHeading label="Tech Stack" title="What powers every app." id="technology-heading" />
        <ul className="technology-grid">
          {technologies.map((technology) => (
            <li key={technology.name} className="technology-item">
              <div className="technology-logo"><Image src={technology.logo} alt="" width={28} height={28} /></div>
              <div><h3>{technology.name}</h3><p>{technology.category}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
