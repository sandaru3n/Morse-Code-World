import Link from "next/link";
import { BlogMultiplexAd } from "@/components/blog/BlogMultiplexAd";
import type { BlogPostMeta } from "../types";

const THANK_YOU_FAQ = [
  {
    q: "What is thank you in Morse code?",
    a: "Thank you in Morse code is − ···· ·− −· −·− / −·−− −−− ··− — that is T-H-A-N-K, a pause, then Y-O-U."
  },
  {
    q: "Is there a short version?",
    a: "Yes — TU (− ··−). It is what radio operators actually send. TNX and TKS mean “thanks.”"
  },
  {
    q: "How long does it take to learn?",
    a: "One sitting, honestly. Eight letters, and T is a single dash. The only rule to remember is that a dash lasts three times as long as a dot."
  },
  {
    q: "Can I hear it somewhere?",
    a: "Type “thank you” into our free Morse code translator and it will play the audio for you."
  }
] as const;

export const post: BlogPostMeta & { standalone: true } = {
  slug: "morse-code-for-thank-you",
  title: "Morse Code for Thank You (and the Shortcut Real Operators Use)",
  description:
    "What's the Morse code for \"thank you\"? Here's the full dot-dash pattern, how it sounds out loud, and the two-letter shortcut ham radio operators actually use.",
  excerpt:
    "Learn the full Morse code for “thank you,” how it sounds out loud, and the two-letter TU shortcut that ham radio operators use every day.",
  date: "2026-07-14",
  readingTime: 5,
  category: "Learning",
  tags: [
    "morse code for thank you",
    "thank you morse code",
    "thank you in morse",
    "tnx morse code",
    "dit dah"
  ],
  coverEmoji: "🙏",
  coverGradient: "from-teal-500 to-emerald-600",
  coverImage: "/blogimages/Morse%20Code%20for%20Thank%20You.webp",
  coverImageAlt:
    "Morse code for thank you — full dot-dash pattern and TU operator shortcut guide",
  layout: "white",
  faq: [...THANK_YOU_FAQ],
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
    <section className="blog-faq not-prose" aria-labelledby="thank-you-faq-heading">
      <h2 id="thank-you-faq-heading" className="blog-faq-heading">
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
export function ThankYouMorsePageBody() {
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
                  Let&apos;s get the answer out of the way first, because I know why you&apos;re here:
                </p>
                <br className="prose-gap" />
                <MorseHighlight
                  pattern="− ···· ·− −· −·−   −·−− −−− ··−"
                  label="Thank you — International Morse Code"
                  caption="Longer pause between “thank” and “you”"
                />
                <p>
                  Or if you&apos;re copying it into a card or a text message:{" "}
                  <span className="font-mono text-sm text-violet-600 sm:text-base">
                    - .... .- -. -.- / -.-- --- ..-
                  </span>
                  . The slash marks the gap between the two words.
                </p>
                <br className="prose-gap" />
                <p className="prose-muted">
                  If you want to hear what it actually sounds like, paste it into our{" "}
                  <Link href="/">Morse code translator</Link> and hit play — reading dots on a screen and hearing
                  the rhythm are two very different experiences.
                </p>
                <br className="prose-gap" />
                <p>
                  Now, if you&apos;ve got another few minutes, stick around. Because there&apos;s a much better way
                  to say thanks in Morse, and it&apos;s only two letters long.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="Breaking It Down" />
                <p>
                  Eight letters, and honestly they&apos;re a friendly bunch. Here&apos;s the whole thing letter by
                  letter:
                </p>
                <br className="prose-gap" />
                <ul>
                  <li>
                    <span className="prose-keyword">T</span> = −{" "}
                    <span className="prose-morse-term">(just one dash — easiest letter in the alphabet along with E)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">H</span> = ····{" "}
                    <span className="prose-morse-term">(four quick dots)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">A</span> = · −{" "}
                    <span className="prose-morse-term">(dit-dah)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">N</span> = − ·{" "}
                    <span className="prose-morse-term">(dah-dit)</span>
                  </li>
                  <li>
                    <span className="prose-keyword">K</span> = − · −{" "}
                    <span className="prose-morse-term">(dah-dit-dah)</span>
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
                  A couple of things I like about this phrase. It opens with{" "}
                  <span className="prose-keyword">T</span>, a single dah — you literally cannot mess up the first
                  letter. And <span className="prose-keyword">H</span> right after it is the opposite: a little
                  machine-gun burst of four dits. That contrast makes the start of{" "}
                  <span className="prose-keyword">thank</span> really satisfying to tap out.
                </p>
                <br className="prose-gap" />
                <p>
                  Also notice <span className="prose-keyword">N</span> and <span className="prose-keyword">K</span>{" "}
                  sitting next to each other. K is just N with a dash stuck on the end (−· vs −·−). Once you spot
                  little family resemblances like that, the alphabet stops feeling like 26 random patterns and starts
                  feeling learnable.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="How It Sounds Out Loud" />
                <p>
                  Nobody who actually uses Morse says &ldquo;dot dot dash.&rdquo; They speak the rhythm —{" "}
                  <span className="prose-morse-term">dit</span> for dots,{" "}
                  <span className="prose-morse-term">dah</span> for dashes. So{" "}
                  <span className="prose-keyword">thank you</span> comes out like this:
                </p>
                <br className="prose-gap" />
                <ol className="blog-white-rhythm-list">
                  <li>
                    <span className="prose-keyword">THANK</span> —{" "}
                    <span className="prose-morse-term">
                      &ldquo;dah — dit-dit-dit-dit — dit-dah — dah-dit — dah-dit-dah&rdquo;
                    </span>
                  </li>
                  <li>
                    <span className="prose-keyword">YOU</span> —{" "}
                    <span className="prose-morse-term">
                      &ldquo;dah-dit-dah-dah — dah-dah-dah — dit-dit-dah&rdquo;
                    </span>
                  </li>
                </ol>
                <br className="prose-gap" />
                <p>
                  Say it a few times at a steady pace. Don&apos;t rush it. A dash should last about three times as
                  long as a dot, and there&apos;s a small breath between letters. Speed genuinely doesn&apos;t matter
                  here — a slow, even rhythm is far easier to recognize than a fast sloppy one. Ask anyone who&apos;s
                  tried to copy a nervous beginner on the air.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="TU: The Two-Letter Thank You" />
                <p>
                  Here&apos;s the part most articles skip. If you ever listen to actual ham radio operators, you&apos;ll
                  almost never hear the full phrase spelled out. Morse people are ruthless about abbreviation — every
                  extra letter is extra work on the key.
                </p>
                <br className="prose-gap" />
                <p>
                  So <span className="prose-keyword">thank you</span> becomes{" "}
                  <span className="prose-keyword">TU</span>:
                </p>
                <br className="prose-gap" />
                <MorseHighlight
                  pattern="− ··−"
                  label="TU — the operator’s shorthand for “thank you”"
                  caption="One dash, then dit-dit-dah — three beats, done"
                />
                <p>
                  It&apos;s the standard sign-off in contests and quick exchanges, where an operator might send it
                  hundreds of times in a weekend. You&apos;ll also see{" "}
                  <span className="prose-keyword">TNX</span> or <span className="prose-keyword">TKS</span> for
                  &ldquo;thanks&rdquo; in more relaxed conversations.
                </p>
                <br className="prose-gap" />
                <p>
                  There&apos;s something I find quietly charming about TU. It&apos;s gratitude stripped down to its
                  absolute minimum — the telegraph era&apos;s version of a nod across the room.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="Sending It with a Light" />
                <p>You don&apos;t need a radio. A phone torch works fine:</p>
                <br className="prose-gap" />
                <ul>
                  <li>Short flash for a dot, a flash about three times longer for a dash</li>
                  <li>Go dark briefly between letters, and a little longer between &ldquo;thank&rdquo; and &ldquo;you&rdquo;</li>
                </ul>
                <br className="prose-gap" />
                <p>That&apos;s it — those are all the rules.</p>
                <br className="prose-gap" />
                <p>
                  Tapping works the same way. Short knock = dot, and for a dash either a longer press or the classic
                  knuckle-drag on the table. I&apos;ve heard from a reader who taps{" "}
                  <span className="font-mono text-sm text-violet-600 sm:text-base">- .... .- -. -.-</span> on her
                  office wall to thank the colleague on the other side. Whether the colleague has decoded it yet is
                  another question.
                </p>
                <br className="prose-gap" />

                <WhiteHeading title="Where People Actually Use This" />
                <p>Some of my favorite uses that have come up over the years:</p>
                <br className="prose-gap" />
                <ul>
                  <li>
                    Written inside a thank-you card as a puzzle — works especially well for anyone who was in the
                    military, scouts, or amateur radio
                  </li>
                  <li>Engraved on a gift for a retiring teacher</li>
                  <li>Beaded into a bracelet, dots as small beads and dashes as long ones</li>
                  <li>
                    One couple I heard about ends phone calls by one of them humming dah dit-dit-dah — TU — before
                    hanging up
                  </li>
                </ul>
                <br className="prose-gap" />
                <p>
                  If this got you curious about the rest of the alphabet, the{" "}
                  <Link href="/blog/morse-code-alphabet-guide">full alphabet guide</Link> is the natural next stop,
                  or start tiny with <Link href="/blog/a-in-morse-code">the letter A</Link>.
                </p>
                <br className="prose-gap" />

                <BlogMultiplexAd />

                <FaqSection heading="Quick Answers" items={[...THANK_YOU_FAQ]} />
                <br className="prose-gap" />

                <KeyTakeaway>
                  <p>
                    Full phrase if you want the gesture, <span className="prose-keyword">TU</span> if you want the
                    operator&apos;s shorthand. Either way, you&apos;re sending thanks the same way it&apos;s crossed
                    oceans and battlefields for over 150 years — one{" "}
                    <span className="prose-morse-term">dit</span> and{" "}
                    <span className="prose-morse-term">dah</span> at a time.
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
