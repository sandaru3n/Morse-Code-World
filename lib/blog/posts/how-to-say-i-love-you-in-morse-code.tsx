import Link from "next/link";
import type { BlogPostMeta } from "../types";

const LOVE_FAQ = [
  {
    q: "How do you say I love you in Morse code?",
    a: "I love you in Morse code is · · / · − · · / − − − / · · · − / · / − · − − / − − − / · · − — with a longer pause between “love” and “you.”"
  },
  {
    q: "What does I love you sound like in Morse code?",
    a: "Spoken as rhythm: dit-dit, dit-dah-dit-dit, dah-dah-dah, dit-dit-dit-dah, dit — pause — dah-dit-dah-dah, dah-dah-dah, dit-dit-dah."
  },
  {
    q: "Can I flash I love you with a flashlight?",
    a: "Yes. Use short flashes for dots and long flashes for dashes. Leave a brief gap between letters and a longer gap between “love” and “you.”"
  },
  {
    q: "Is I love you in Morse code hard to learn?",
    a: "No. It uses common letters with simple patterns. Most people memorize the phrase in one sitting once they know that a dash is three times longer than a dot."
  },
  {
    q: "Can I type I love you in a Morse translator?",
    a: "Yes. Type “I love you” in our free Morse code translator and it will show the dot-dash pattern and play the audio rhythm instantly."
  }
] as const;

export const post: BlogPostMeta & { standalone: true } = {
  slug: "how-to-say-i-love-you-in-morse-code",
  title: "How to Say I Love You in Morse Code",
  description:
    "Learn to express \"I love you\" in Morse code. Our simple guide will help you master this timeless method of communication and impress your loved ones.",
  excerpt:
    "Say \"I love you\" in Morse code with dots and dashes — a romantic pattern you can tap, flash, or whisper. Learn the full code, letter by letter.",
  date: "2026-07-12",
  readingTime: 6,
  category: "Learning",
  tags: ["i love you morse code", "morse code love", "romantic morse code", "dit dah"],
  coverEmoji: "❤️",
  coverGradient: "from-rose-500 to-pink-600",
  coverImage: "/blogimages/How%20to%20Say%20I%20Love%20You%20in%20Morse%20Code.webp",
  coverImageAlt: "How to say I love you in Morse code — romantic dot-dash pattern guide with heart and telegraph theme",
  layout: "white",
  faq: [...LOVE_FAQ],
  standalone: true
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function WhiteHeading({ title }: { title: string }) {
  return (
    <h2 className="blog-white-heading">
      <span className="blog-white-heading-accent" aria-hidden="true" />
      <span className="blog-white-heading-text">{title}</span>
    </h2>
  );
}

function MorseHighlight({
  pattern,
  label,
  caption
}: {
  pattern: string;
  label?: string;
  caption?: string;
}) {
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

function FaqSection({ heading, items }: { heading: string; items: { q: string; a: string }[] }) {
  return (
    <section className="blog-faq not-prose" aria-labelledby="love-faq-heading">
      <h2 id="love-faq-heading" className="blog-faq-heading">
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

function KeyTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <aside className="blog-key-takeaway not-prose" aria-label="The short version">
      <p className="blog-key-takeaway-title">The short version</p>
      <div className="blog-key-takeaway-body">{children}</div>
    </aside>
  );
}

/** Full page body — no external blog components; header (SiteTopBar) is added by the route page. */
export function ILoveYouMorsePageBody() {
  return (
    <div
      className="blog-page--white relative flex min-h-screen flex-col overflow-x-hidden bg-white text-[#475569]"
      data-blog-theme="white"
    >
      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-x-hidden px-4 py-3 sm:p-5 lg:p-8">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            <nav aria-label="Breadcrumb" className="blog-breadcrumb mb-5 min-w-0">
              <ol className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 font-label text-xs leading-relaxed text-[#94A3B8]">
                <li className="shrink-0">
                  <Link href="/" className="transition-colors hover:text-violet-600">
                    Home
                  </Link>
                </li>
                <li className="shrink-0" aria-hidden="true">
                  /
                </li>
                <li className="shrink-0">
                  <Link href="/blog" className="transition-colors hover:text-violet-600">
                    Blog
                  </Link>
                </li>
                <li className="shrink-0" aria-hidden="true">
                  /
                </li>
                <li className="min-w-0 break-words text-[#475569]">{post.title}</li>
              </ol>
            </nav>

            <header className="blog-header-card blog-header--white mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mb-8">
              {post.coverImage ? (
                <div className="overflow-hidden border-b border-slate-200 bg-slate-100">
                  <img
                    src={post.coverImage}
                    alt={post.coverImageAlt ?? post.title}
                    width={1200}
                    height={630}
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                    className="aspect-[21/9] w-full max-w-full object-cover sm:aspect-[2.2/1]"
                  />
                </div>
              ) : (
                <div
                  className={`flex h-36 items-center justify-center bg-gradient-to-br ${post.coverGradient} sm:h-44`}
                >
                  <span className="text-7xl drop-shadow-md" role="img" aria-label={post.title}>
                    {post.coverEmoji}
                  </span>
                </div>
              )}

              <div className="p-4 sm:p-6">
                <div className="mb-4 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 font-label text-[11px] font-semibold text-emerald-700">
                      {post.category}
                    </span>
                    <span className="font-label text-[11px] text-[#94A3B8]">{post.readingTime} min read</span>
                  </div>
                  <div className="font-label text-[11px] text-[#94A3B8]">{formatDate(post.date)}</div>
                </div>

                <h1 className="blog-header-title font-headline text-2xl font-bold leading-[1.2] tracking-tight text-[#334155] sm:text-3xl md:text-4xl">
                  {post.title}
                </h1>
                <p className="blog-header-desc mt-3 font-body text-[15px] leading-relaxed text-[#64748B] sm:mt-4 sm:text-base sm:leading-relaxed md:text-lg md:leading-[1.7]">
                  {post.description}
                </p>
              </div>

              <div className="blog-white-tags-bar">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-white-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <article className="blog-article-body blog-article-body--white">
              <div className="prose-content prose-content--white prose-content--purple">
                <p className="prose-lead">
                  Saying <span className="prose-emphasis-dark">I love you</span> in Morse code is one of the
                  most romantic ways to use this old telegraph language. Three short words become a rhythm of dots
                  and dashes you can tap on a table, flash with a phone light, or whisper as{" "}
                  <span className="prose-morse-term">dit-dah</span> sounds.
                </p>
                <br className="prose-gap" />
                <p className="prose-muted">
                  You do not need radio equipment or years of practice. Once you know how each letter is encoded,
                  the full phrase takes less than a minute to send — and it is memorable enough to surprise someone
                  special.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="What Is &ldquo;I Love You&rdquo; in Morse Code?" />
                <p>
                  In International Morse code, every letter is a unique pattern of dots (
                  <span className="prose-morse-term">dit</span>) and dashes (
                  <span className="prose-morse-term">dah</span>). A dash lasts about three times longer than a dot.
                  Letters are separated by a short pause; words like{" "}
                  <span className="prose-keyword">love</span> and <span className="prose-keyword">you</span> get a
                  slightly longer gap.
                </p>
                <br className="prose-gap" />
                <MorseHighlight
                  pattern="·· ·−·· −−− ···− ·   −·−− −−− ··−"
                  label="I love you — International Morse Code"
                  caption="Short pause between letters · longer pause between “love” and “you”"
                />
                <p>
                  In plain text form, the same message is often written as{" "}
                  <span className="font-mono text-sm text-violet-600 sm:text-base">
                    .. .-.. --- ...- . -.-- --- ..-
                  </span>
                  . Try it in our <Link href="/">Morse code translator</Link> — type the words and hear the rhythm
                  instantly.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="Letter-by-Letter Breakdown" />
                <p>
                  Here is how each letter in <span className="prose-keyword">I love you</span> is built:
                </p>
                <br className="prose-gap" />
                <ul>
                  <li>
                    <span className="prose-keyword">I</span> = · ·{" "}
                    <span className="prose-morse-term">(dit-dit)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">L</span> = · − · ·{" "}
                    <span className="prose-morse-term">(dit-dah-dit-dit)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">O</span> = − − −{" "}
                    <span className="prose-morse-term">(dah-dah-dah)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">V</span> = · · · −{" "}
                    <span className="prose-morse-term">(dit-dit-dit-dah)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">E</span> = · <span className="prose-morse-term">(dit)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">Y</span> = − · − −{" "}
                    <span className="prose-morse-term">(dah-dit-dah-dah)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">O</span> = − − −{" "}
                    <span className="prose-morse-term">(dah-dah-dah)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">U</span> = · · −{" "}
                    <span className="prose-morse-term">(dit-dit-dah)</span>
                  </li>
                </ul>
                <br className="prose-gap" />
                <p>
                  Notice that <span className="prose-keyword">O</span> appears twice — three dashes each time.{" "}
                  <span className="prose-keyword">V</span> is the trickiest letter in the phrase because it uses four
                  symbols. Say the whole word <span className="prose-keyword">love</span> as one flowing rhythm before
                  you pause for <span className="prose-keyword">you</span>.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="How to Say It Out Loud" />
                <p>
                  Morse operators do not spell letter names — they speak the rhythm. For{" "}
                  <span className="prose-keyword">I love you</span>, practice like this:
                </p>
                <br className="prose-gap" />
                <ol className="blog-white-rhythm-list">
                  <li>
                    <span className="prose-keyword">I</span> —{" "}
                    <span className="prose-morse-term">&ldquo;dit-dit&rdquo;</span>
                  </li>
                  <li>
                    <span className="prose-keyword">LOVE</span> —{" "}
                    <span className="prose-morse-term">
                      &ldquo;dit-dah-dit-dit, dah-dah-dah, dit-dit-dit-dah, dit&rdquo;
                    </span>
                  </li>
                  <li>
                    <span className="prose-keyword">YOU</span> —{" "}
                    <span className="prose-morse-term">
                      &ldquo;dah-dit-dah-dah, dah-dah-dah, dit-dit-dah&rdquo;
                    </span>
                  </li>
                </ol>
                <br className="prose-gap" />
                <p>
                  Repeat at a steady tempo. Speed does not matter for a romantic message — clear, even timing is what
                  makes the pattern recognizable.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="How to Send It with a Flashlight or Phone" />
                <p>A flashlight turns Morse code into a visible love note. Use these rules:</p>
                <br className="prose-gap" />
                <ul>
                  <li>Short flash = dot</li>
                  <li>Long flash (about three times longer) = dash</li>
                  <li>Brief darkness between letters</li>
                  <li>Slightly longer darkness between &ldquo;love&rdquo; and &ldquo;you&rdquo;</li>
                </ul>
                <br className="prose-gap" />
                <p>
                  Your phone screen works too — tap the display on and off, or use the torch. Some couples hide the
                  pattern in a late-night window signal or a campfire flash across a yard.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="Fun Ways to Use It" />
                <p>
                  Beyond flashlights, people have tapped <span className="prose-keyword">I love you</span> in Morse on
                  a car horn, a metal ring on a railing, or even a necklace with dot-and-dash beads. Other ideas:
                </p>
                <br className="prose-gap" />
                <ul>
                  <li>Write the dot-dash pattern inside a greeting card</li>
                  <li>Encode it in a bracelet or ring engraving</li>
                  <li>Hide it in a text as a pattern of short and long vibration pulses</li>
                  <li>Use it as a wedding or anniversary code phrase only you two understand</li>
                </ul>
                <br className="prose-gap" />
                <p>
                  Learning a few more letters? Browse our{" "}
                  <Link href="/blog/morse-code-alphabet-guide">Morse code alphabet guide</Link> or start with{" "}
                  <Link href="/blog/a-in-morse-code">the letter A</Link> — one of the shortest codes in the system.
                </p>
                <br className="prose-gap" />

                <FaqSection heading="FAQ: I love you in Morse code" items={[...LOVE_FAQ]} />
                <br className="prose-gap" />

                <KeyTakeaway>
                  <p>
                    <span className="prose-keyword">I love you</span> in Morse code is{" "}
                    <span className="font-mono text-violet-600">·· ·−·· −−− ···− ·   −·−− −−− ··−</span> — a rhythm
                    anyone can learn in one evening. Flash it, tap it, or type it in our{" "}
                    <Link href="/">free translator</Link>. It is a small pattern with a big meaning, carried the same
                    way telegraph operators sent urgent news more than a century ago — one dot and dash at a time.
                  </p>
                </KeyTakeaway>
              </div>
            </article>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-1.5 border border-slate-200 bg-white px-4 py-2.5 font-label text-sm font-semibold text-[#64748B] shadow-sm transition-colors hover:bg-slate-50 hover:text-[#475569]"
              >
                ← All posts
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-1.5 bg-violet-600 px-4 py-2.5 font-label text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
              >
                Try the Translator ⠿
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
