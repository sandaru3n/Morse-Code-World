type HeadingVariant = "default" | "editorial";

/** SEO-friendly h2: small label line + large bold subtitle */
export function SectionHeading({
  label,
  title,
  variant = "default"
}: {
  label: string;
  title: string;
  variant?: HeadingVariant;
}) {
  if (variant === "editorial") {
    return (
      <h2 className="blog-section-heading blog-section-heading--editorial">
        <span className="blog-section-heading-num" aria-hidden="true">
          {label}
        </span>
        <span className="blog-section-heading-text">{title}</span>
      </h2>
    );
  }

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
  title,
  variant = "default"
}: {
  label: string;
  title: string;
  variant?: HeadingVariant;
}) {
  if (variant === "editorial") {
    return (
      <h3 className="blog-subsection-heading blog-subsection-heading--editorial">
        <span className="blog-subsection-label">{label}</span>
        <span className="blog-subsection-title">{title}</span>
      </h3>
    );
  }

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
