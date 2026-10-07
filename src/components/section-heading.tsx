type SectionHeadingProps = { label: string; title: string; description?: string; id: string };

export function SectionHeading({ label, title, description, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
