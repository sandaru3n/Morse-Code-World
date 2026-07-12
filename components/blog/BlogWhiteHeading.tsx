/** White-theme section heading with vertical blue–violet accent bar */
export function BlogWhiteHeading({ title }: { title: string }) {
  return (
    <h2 className="blog-white-heading">
      <span className="blog-white-heading-accent" aria-hidden="true" />
      <span className="blog-white-heading-text">{title}</span>
    </h2>
  );
}
