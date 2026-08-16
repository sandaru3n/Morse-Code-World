import Link from "next/link";
import { BlogMultiplexAd } from "@/components/blog/BlogMultiplexAd";
import type { BlogPostMeta } from "../types";

const TOOLS_FAQ = [
  {
    q: "Are these Morse code tools really free?",
    a: "Yes. Every tool on this list is free to use in a browser with no account and no payment. Some are supported by ads, but none of the core features are locked behind a paywall."
  },
  {
    q: "Which tool is best for a complete beginner?",
    a: "Start with a translator like Morse Code World to hear how letters sound, then move to Google's Morse Typing Trainer for playful practice. Once you can recognize a few letters by ear, LCWO's structured Koch course is the fastest path to real copying skill."
  },
  {
    q: "Do I need to install anything?",
    a: "No. All five tools run directly in a modern browser on desktop and mobile — nothing to download or install."
  },
  {
    q: "Can I practice Morse code without a radio?",
    a: "Absolutely. Browser tools play real audio tones at adjustable speeds, so you can learn to send and copy Morse long before you ever touch a radio key."
  }
] as const;

export const post: BlogPostMeta & { standalone: true } = {
  slug: "top-5-free-morse-code-tools",
  title: "Top 5 Free Morse Code Tools You Can Use in Your Browser",
  description:
    "The five best free Morse code tools in 2026 — translators, creators, trainers, and practice sites that run entirely in your browser with no install or signup.",
  excerpt:
    "From instant translators to structured trainers, these five free Morse code tools cover everything from your first dit to real on-air copying speed.",
  date: "2026-08-16",
  readingTime: 6,
  category: "Tools",
  tags: [
    "free morse code tools",
    "morse code translator",
    "morse code practice",
    "learn morse code online",
    "morse code trainer"
  ],
  coverEmoji: "🛠️",
  coverGradient: "from-indigo-500 to-violet-600",
  layout: "classic",
  faq: [...TOOLS_FAQ],
  standalone: true
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

/** Section heading in the classic dark prose style (label accent bar comes from prose-content > h2 rules). */
function DarkHeading({ title }: { title: string }) {
  return (
    <h2>
      <span className="prose-heading-title prose-heading-title--solo">{title}</span>
    </h2>
  );
}

function FaqSection({ heading, items }: { heading: string; items: { q: string; a: string }[] }) {
  return (
    <section className="blog-faq not-prose" aria-labelledby="tools-faq-heading">
      <h2 id="tools-faq-heading" className="blog-faq-heading">
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

/** Numbered card header for each tool in the list. */
function ToolRank({ rank, name, tagline }: { rank: number; name: string; tagline: string }) {
  return (
    <div className="not-prose mb-4 mt-2 flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 font-headline text-base font-bold text-white">
        {rank}
      </span>
      <div>
        <p className="font-headline text-lg font-bold text-on-surface">{name}</p>
        <p className="font-label text-xs text-slate-500">{tagline}</p>
      </div>
    </div>
  );
}

function Keyword({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-on-surface">{children}</strong>;
}

/**
 * Full page body — always rendered in the site's dark palette (the `dark`
 * class on the wrapper forces every dark: variant on, independent of the
 * visitor's theme). Header (SiteTopBar) is added by the route page.
 */
export function Top5MorseToolsPageBody() {
  return (
    <div
      className="dark relative flex min-h-screen flex-col overflow-x-hidden bg-surface-container-lowest text-on-surface selection:bg-primary-container selection:text-on-primary-container"
      data-blog-theme="dark"
    >
      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-x-hidden px-4 py-3 sm:p-5 lg:p-8">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            <nav aria-label="Breadcrumb" className="blog-breadcrumb mb-5 min-w-0">
              <ol className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 font-label text-xs leading-relaxed text-slate-400">
                <li className="shrink-0">
                  <Link href="/" className="transition-colors hover:text-primary-container">
                    Home
                  </Link>
                </li>
                <li className="shrink-0" aria-hidden="true">
                  /
                </li>
                <li className="shrink-0">
                  <Link href="/blog" className="transition-colors hover:text-primary-container">
                    Blog
                  </Link>
                </li>
                <li className="shrink-0" aria-hidden="true">
                  /
                </li>
                <li className="min-w-0 break-words text-on-surface">{post.title}</li>
              </ol>
            </nav>

            <header className="blog-header-card mb-6 overflow-hidden rounded-2xl border border-white/15 bg-surface-container sm:mb-8">
              <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${post.coverGradient} sm:h-44`}>
                <span className="text-7xl drop-shadow-md" role="img" aria-label={post.title}>
                  {post.coverEmoji}
                </span>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-4 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block shrink-0 rounded-full bg-primary-container/15 px-2.5 py-0.5 font-label text-[11px] font-semibold text-primary-container">
                      {post.category}
                    </span>
                    <span className="font-label text-[11px] text-slate-500">{post.readingTime} min read</span>
                  </div>
                  <div className="font-label text-[11px] text-slate-500">{formatDate(post.date)}</div>
                </div>

                <h1 className="font-headline text-2xl font-black leading-[1.2] tracking-tight text-on-surface sm:text-3xl md:text-4xl">
                  {post.title}
                </h1>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-slate-400 sm:mt-4 sm:text-base sm:leading-relaxed md:text-lg md:leading-[1.7]">
                  {post.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-outline-variant/20 bg-surface-container-high px-2 py-0.5 font-label text-[10px] uppercase tracking-wide text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <article className="blog-article-body rounded-2xl border border-outline-variant/20 bg-surface-container p-5 sm:p-8">
              <div className="prose-content">
                <p>
                  You don&apos;t need a radio license, a physical key, or even an app download to get into Morse
                  code anymore. Everything on this list runs in a browser tab, costs nothing, and works on a phone
                  just as well as on a desktop.
                </p>
                <p>
                  I&apos;ve ranked these five by how useful they are for the way most people actually arrive at
                  Morse code: curious first, serious later. The first two cover translating and creating; the last
                  three take you from playful practice to genuine copying skill.
                </p>

                <DarkHeading title="1. Morse Code World — The All-in-One Translator" />
                <ToolRank
                  rank={1}
                  name="Morse Code World"
                  tagline="morsecodeworld.org — translator, audio decoder, picture translator"
                />
                <p>
                  <Link href="/">Morse Code World</Link> is the fastest way to go from &ldquo;what does this say?&rdquo;
                  to an answer. Type any text and it converts to International Morse instantly — or paste dots and
                  dashes and it decodes them back to plain English. Then hit play and actually <em>hear</em> the
                  rhythm, with adjustable speed (WPM), tone pitch, and volume.
                </p>
                <p>What makes it more than a simple converter:</p>
                <ul>
                  <li>
                    An <Link href="/audio-morse-code-decoder">audio decoder</Link> that listens to Morse tones and
                    turns them into text
                  </li>
                  <li>
                    A <Link href="/morse-code-picture-translator">picture translator</Link> for decoding Morse from
                    images
                  </li>
                  <li>Playback controls that mimic a real signal, so your ear learns correct timing from day one</li>
                  <li>Available in 20 languages, no account or install required</li>
                </ul>
                <p>
                  <Keyword>Best for:</Keyword> quick translations, hearing correct timing, and everyday
                  encode/decode work.
                </p>

                <DarkHeading title="2. Morse Code Creator — Make and Share Morse Messages" />
                <ToolRank
                  rank={2}
                  name="Morse Code Creator"
                  tagline="morsecodecreator.org — create custom Morse code messages"
                />
                <p>
                  <a href="https://www.morsecodecreator.org/" target="_blank" rel="noopener">
                    Morse Code Creator
                  </a>{" "}
                  focuses on the fun, creative side of Morse: turning your own words into shareable dot-dash
                  messages. It&apos;s a clean, free tool for crafting Morse for cards, gifts, engravings, jewelry
                  patterns, and puzzles — the kind of uses where you want the pattern itself, nicely formatted, not
                  just a raw string.
                </p>
                <p>
                  If you&apos;ve ever wanted to hide &ldquo;I love you&rdquo; in a bracelet or slip a coded message
                  into a birthday card, this is the simplest way to generate it correctly.
                </p>
                <p>
                  <Keyword>Best for:</Keyword> creating Morse messages for gifts, crafts, and sharing with friends.
                </p>

                <DarkHeading title="3. Google Morse Typing Trainer — Learn by Playing" />
                <ToolRank
                  rank={3}
                  name="Morse Typing Trainer by Google"
                  tagline="morse.withgoogle.com — gamified learning experiment"
                />
                <p>
                  Google&apos;s{" "}
                  <a href="https://morse.withgoogle.com/learn/" target="_blank" rel="noopener">
                    Morse Typing Trainer
                  </a>{" "}
                  teaches the alphabet through a clever visual mnemonic system — each letter&apos;s shape hints at
                  its dot-dash pattern, so <Keyword>B</Keyword> looks like a bear (−···) and sticks in your memory.
                  It was originally built to showcase Morse as an accessibility input method, and it happens to be
                  one of the gentlest on-ramps for total beginners.
                </p>
                <p>
                  Most people can get through the whole alphabet in under an hour. It won&apos;t make you fast, but
                  it makes the patterns familiar — which is exactly what you need before serious practice.
                </p>
                <p>
                  <Keyword>Best for:</Keyword> absolute beginners memorizing the alphabet for the first time.
                </p>

                <BlogMultiplexAd />

                <DarkHeading title="4. LCWO — The Serious Trainer Hams Swear By" />
                <ToolRank rank={4} name="LCWO (Learn CW Online)" tagline="lcwo.net — structured Koch-method courses" />
                <p>
                  When you&apos;re ready to move from recognizing letters to actually <em>copying</em> Morse by ear,{" "}
                  <a href="https://lcwo.net/" target="_blank" rel="noopener">
                    LCWO
                  </a>{" "}
                  is where amateur radio operators worldwide train. Its free Koch-method course introduces
                  characters two at a time at full target speed, so you learn the sound of each letter rather than
                  counting dots. It tracks your accuracy across sessions and includes word training, callsign
                  practice, and code-group drills.
                </p>
                <p>
                  The interface is plain, but that&apos;s part of the charm — it&apos;s a gym, not a game. Fifteen
                  minutes a day on LCWO is the most reliable route to real copying speed.
                </p>
                <p>
                  <Keyword>Best for:</Keyword> building genuine head-copy skill and preparing for on-air CW.
                </p>

                <DarkHeading title="5. Morse Code Ninja — Free Practice Audio at Every Speed" />
                <ToolRank
                  rank={5}
                  name="Morse Code Ninja"
                  tagline="morsecode.ninja — thousands of hours of practice audio"
                />
                <p>
                  <a href="https://morsecode.ninja/" target="_blank" rel="noopener">
                    Morse Code Ninja
                  </a>{" "}
                  offers an enormous free library of practice sessions — words, phrases, callsigns, and full QSOs —
                  recorded at speeds from beginner-friendly 15&nbsp;WPM all the way to a blistering 50&nbsp;WPM.
                  Each recording sends the Morse, pauses, then speaks the answer, so you can practice hands-free
                  while commuting, walking, or doing dishes.
                </p>
                <p>
                  It&apos;s the perfect complement to LCWO: structured lessons at the desk, Ninja audio everywhere
                  else.
                </p>
                <p>
                  <Keyword>Best for:</Keyword> passive listening practice and pushing your speed higher.
                </p>

                <DarkHeading title="Which One Should You Open First?" />
                <p>It depends on where you are right now:</p>
                <ul>
                  <li>
                    <Keyword>Just curious?</Keyword> Type your name into the{" "}
                    <Link href="/">Morse Code World translator</Link> and press play.
                  </li>
                  <li>
                    <Keyword>Making a gift?</Keyword> Use{" "}
                    <a href="https://www.morsecodecreator.org/" target="_blank" rel="noopener">
                      Morse Code Creator
                    </a>{" "}
                    to generate a clean pattern.
                  </li>
                  <li>
                    <Keyword>Want to learn the alphabet?</Keyword> Spend an hour with Google&apos;s trainer.
                  </li>
                  <li>
                    <Keyword>Serious about CW?</Keyword> Do LCWO daily and fill the gaps with Morse Code Ninja
                    audio.
                  </li>
                </ul>
                <p>
                  And if you want the story behind the code itself, our{" "}
                  <Link href="/blog/history-of-morse-code">history of Morse code</Link> and{" "}
                  <Link href="/blog/morse-code-alphabet-guide">full alphabet guide</Link> are good next reads.
                </p>

                <FaqSection heading="Quick Answers" items={[...TOOLS_FAQ]} />

                <KeyTakeaway>
                  <p>
                    Translate and listen on <Keyword>Morse Code World</Keyword>, create shareable messages on{" "}
                    <Keyword>Morse Code Creator</Keyword>, learn the alphabet with{" "}
                    <Keyword>Google&apos;s trainer</Keyword>, build real skill on <Keyword>LCWO</Keyword>, and keep
                    your ears sharp with <Keyword>Morse Code Ninja</Keyword>. All five are free — the only thing
                    they cost is practice time.
                  </p>
                </KeyTakeaway>
              </div>
            </article>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-1.5 border border-outline-variant/20 bg-surface-container px-4 py-2.5 font-label text-sm font-semibold text-on-surface shadow-sm transition-colors hover:bg-surface-container-high"
              >
                ← All posts
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-1.5 bg-primary-container px-4 py-2.5 font-label text-sm font-semibold text-on-primary-container shadow-sm transition-colors hover:bg-primary-container/90"
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
