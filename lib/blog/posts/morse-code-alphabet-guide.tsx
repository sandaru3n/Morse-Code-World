import { SectionHeadingSingle } from "@/components/blog/SectionHeading";
import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "morse-code-alphabet-guide",
  title: "Morse Code Alphabet: Every Letter, Number & Symbol",
  description:
    "The complete Morse code alphabet reference — all 26 letters, 10 numbers, and common punctuation marks with memory tips for each character.",
  excerpt:
    "A definitive reference for the complete International Morse Code alphabet: every letter from A to Z, numbers 0–9, and the most-used punctuation characters.",
  date: "2026-05-18",
  readingTime: 6,
  category: "Reference",
  tags: ["morse code alphabet", "morse code chart", "ITU morse code"],
  coverEmoji: "🔤",
  coverGradient: "from-violet-500 to-purple-600",
  coverImage: "/blogimages/morse-code-alphabet-guide.webp",
  coverImageAlt: "International Morse code alphabet chart showing letters, numbers, and dot-dash patterns",

  Content: function AlphabetContent() {
    const letters = [
      ["A", "·−"],
      ["B", "−···"],
      ["C", "−·−·"],
      ["D", "−··"],
      ["E", "·"],
      ["F", "··−·"],
      ["G", "−−·"],
      ["H", "····"],
      ["I", "··"],
      ["J", "·−−−"],
      ["K", "−·−"],
      ["L", "·−··"],
      ["M", "−−"],
      ["N", "−·"],
      ["O", "−−−"],
      ["P", "·−−·"],
      ["Q", "−−·−"],
      ["R", "·−·"],
      ["S", "···"],
      ["T", "−"],
      ["U", "··−"],
      ["V", "···−"],
      ["W", "·−−"],
      ["X", "−··−"],
      ["Y", "−·−−"],
      ["Z", "−−··"]
    ];
    const numbers = [
      ["0", "−−−−−"],
      ["1", "·−−−−"],
      ["2", "··−−−"],
      ["3", "···−−"],
      ["4", "····−"],
      ["5", "·····"],
      ["6", "−····"],
      ["7", "−−···"],
      ["8", "−−−··"],
      ["9", "−−−−·"]
    ];
    const punctuation = [
      [".", "·−·−·−", "Period"],
      [",", "−−··−−", "Comma"],
      ["?", "··−−··", "Question mark"],
      ["!", "−·−·−−", "Exclamation"],
      ["/", "−··−·", "Slash"],
      ["@", "·−−·−·", "At sign"],
      ["=", "−···−", "Equals / BT"],
      ["+", "·−·−·", "Plus / AR"],
      ["-", "−····−", "Hyphen"],
      ["(", "−·−−·", "Parenthesis open"]
    ];

    return (
      <div className="prose-content">
        <p>
          International Morse Code has a system of short signals and long signals, where dots (
          <em>dit</em>) and dashes (<em>dah</em>) represent letters, numbers, and punctuation. A dah is
          exactly three times longer than a dit. It is a globally used standard formalised by the
          International Telecommunication Union (ITU) and used by amateur radio operators, maritime
          services, and emergency communications.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="The Morse Code Alphabet (A–Z)" />
        <p>
          There are shorter and longer codes for each letter, with the more common letters (E, T, A, I,
          N, O, S, H) assigned to short codes — this was intentional, based on frequency of occurrence in
          English text.
        </p>
        <br className="prose-gap" />

        <div className="not-prose my-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {letters.map(([letter, code]) => (
            <div
              key={letter}
              className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 dark:border-outline-variant/20 dark:bg-surface-container"
            >
              <span className="w-6 font-headline text-lg font-black text-neutral-900 dark:text-on-surface">
                {letter}
              </span>
              <span className="font-mono text-sm font-bold tracking-wider text-emerald-600 dark:text-primary-container">
                {code}
              </span>
            </div>
          ))}
        </div>
        <br className="prose-gap" />

        <SectionHeadingSingle title="Numbers 0–9" />
        <p>
          Numbers follow a very logical order: 1 has just one dot, 2 adds another dot, and so on up to 5.
          From 6 onward, dashes appear at the beginning of the pattern and increase toward 0 (five dashes
          for zero).
        </p>
        <br className="prose-gap" />

        <div className="not-prose my-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {numbers.map(([num, code]) => (
            <div
              key={num}
              className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 dark:border-outline-variant/20 dark:bg-surface-container"
            >
              <span className="w-5 font-headline text-lg font-black text-neutral-900 dark:text-on-surface">
                {num}
              </span>
              <span className="font-mono text-xs font-bold tracking-wider text-emerald-600 dark:text-primary-container">
                {code}
              </span>
            </div>
          ))}
        </div>
        <br className="prose-gap" />

        <SectionHeadingSingle title="Punctuation & Prosigns" />
        <p>
          Beginners tend not to memorize punctuation marks and procedural signals (prosigns), although they
          are necessary for complete written communication, as well as operation over the radio.
        </p>
        <br className="prose-gap" />

        <div className="not-prose my-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {punctuation.map(([sym, code, name]) => (
            <div
              key={sym}
              className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 dark:border-outline-variant/20 dark:bg-surface-container"
            >
              <span className="w-7 text-center font-headline text-base font-black text-neutral-900 dark:text-on-surface">
                {sym}
              </span>
              <span className="flex-1 font-mono text-xs font-bold tracking-wider text-emerald-600 dark:text-primary-container">
                {code}
              </span>
              <span className="font-label text-[10px] text-slate-500 dark:text-slate-400">{name}</span>
            </div>
          ))}
        </div>
        <br className="prose-gap" />

        <SectionHeadingSingle title="Timing Rules" />
        <p>Morse code timing is everything. These ratios are benchmarked by the ITU:</p>
        <br className="prose-gap" />
        <ul>
          <li>1 dit = 1 unit</li>
          <li>1 dah = 3 units</li>
          <li>Distance between signals in a letter = 1 unit</li>
          <li>Gap between letters = 3 units</li>
          <li>Gap between words = 7 units</li>
        </ul>
        <br className="prose-gap" />
        <p>
          At 20 WPM (words per minute), one unit is approximately 60 milliseconds. The word used for WPM
          calculation is &ldquo;PARIS&rdquo; — 50 units long, including the trailing space.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="The First Letters to Learn" />
        <p>
          If you are a beginner, here is an ordering of high-frequency letters in English text:
        </p>
        <br className="prose-gap" />
        <p className="font-mono text-lg tracking-wide text-neutral-800 dark:text-slate-200">
          E · &nbsp; T − &nbsp; A ·− &nbsp; I ·· &nbsp; N −· &nbsp; O −−− &nbsp; S ··· &nbsp; H ····
        </p>
        <br className="prose-gap" />
        <p>
          These 8 letters alone represent about half of characters in regular written English text — meaning
          that learning them first gives you the highest return for time spent practicing.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="Tips for Memorization" />
        <ul>
          <li>
            <span className="prose-emphasis">Mirror pairs:</span> N (−·) is a mirror of A (·−). K (−·−)
            mirrors R (·−·). Learning them in pairs halves the memorization task.
          </li>
          <li>
            <span className="prose-emphasis">Signal count:</span> E = 1, I = 2, S = 3, H = 4. T = 1, M = 2,
            O = 3.
          </li>
          <li>
            <span className="prose-emphasis">Learn by sound:</span> Don&apos;t fixate on the chart — hear each
            character played at tempo and train your ear to recognize it without conscious thought.
          </li>
        </ul>
      </div>
    );
  }
};
