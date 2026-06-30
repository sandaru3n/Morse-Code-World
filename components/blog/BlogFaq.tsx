export type BlogFaqItem = {
  q: string;
  a: string;
};

type BlogFaqProps = {
  heading?: string;
  items: BlogFaqItem[];
};

export function BlogFaq({ heading = "Frequently asked questions", items }: BlogFaqProps) {
  return (
    <section className="blog-faq not-prose" aria-labelledby="blog-faq-heading">
      <h2 id="blog-faq-heading" className="blog-faq-heading">
        {heading}
      </h2>
      <dl className="blog-faq-list">
        {items.map((item) => (
          <div key={item.q} className="blog-faq-item">
            <dt className="blog-faq-question">{item.q}</dt>
            <dd className="blog-faq-answer">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
