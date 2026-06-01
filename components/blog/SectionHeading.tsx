/** SEO-friendly h2: small label line + large bold subtitle */
export function SectionHeading({
  label,
  title
}: {
  label: string;
  title: string;
}) {
  return (
    <>
      <h2>
        <span className="prose-heading-label">{label}</span>
        <br />
        <span className="prose-heading-title">{title}</span>
      </h2>
      <br className="prose-gap" aria-hidden="true" />
    </>
  );
}

/** Single-line h2 when there is no separate label */
export function SectionHeadingSingle({ title }: { title: string }) {
  return (
    <>
      <h2>
        <span className="prose-heading-title prose-heading-title--solo">{title}</span>
      </h2>
      <br className="prose-gap" aria-hidden="true" />
    </>
  );
}

/** h3: label + bold subtitle (e.g. Week 1 / Letters A–M) */
export function SubsectionHeading({
  label,
  title
}: {
  label: string;
  title: string;
}) {
  return (
    <>
      <h3>
        <span className="prose-heading-label prose-heading-label--h3">{label}</span>
        <br />
        <span className="prose-heading-subtitle">{title}</span>
      </h3>
      <br className="prose-gap" aria-hidden="true" />
    </>
  );
}
