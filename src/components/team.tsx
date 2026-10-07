import Image from "next/image";
import type { TeamMember } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Team({ members }: { members: readonly TeamMember[] }) {
  if (members.length === 0) return null;
  return (
    <section id="team" className="section team" aria-labelledby="team-heading">
      <div className="container">
        <SectionHeading label="Team" title="The people behind the work." id="team-heading" />
        <div className="team-grid">
          {members.map((member) => (
            <article key={member.name} className="team-member">
              {member.image && <Image {...member.image} alt={member.image.alt} sizes="(max-width: 640px) 90vw, 33vw" className="team-image" />}
              <h3>{member.name}</h3><p className="team-role">{member.role}</p>
              {member.biography && <p>{member.biography}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
