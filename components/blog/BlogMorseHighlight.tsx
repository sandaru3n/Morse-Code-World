type BlogMorseHighlightProps = {
  pattern: string;
  label?: string;
  caption?: string;
};

/** Prominent Morse pattern display for guide-style posts. */
export function BlogMorseHighlight({ pattern, label, caption }: BlogMorseHighlightProps) {
  return (
    <figure className="blog-morse-highlight not-prose">
      {label ? <p className="blog-morse-highlight-label">{label}</p> : null}
      <p className="blog-morse-highlight-pattern" aria-label={`Morse code pattern: ${pattern}`}>
        {pattern}
      </p>
      {caption ? <figcaption className="blog-morse-highlight-caption">{caption}</figcaption> : null}
    </figure>
  );
}
