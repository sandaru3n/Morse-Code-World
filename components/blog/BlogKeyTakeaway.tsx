type BlogKeyTakeawayProps = {
  title?: string;
  children: React.ReactNode;
};

export function BlogKeyTakeaway({ title = "The short version", children }: BlogKeyTakeawayProps) {
  return (
    <aside className="blog-key-takeaway not-prose" aria-label={title}>
      <p className="blog-key-takeaway-title">{title}</p>
      <div className="blog-key-takeaway-body">{children}</div>
    </aside>
  );
}
