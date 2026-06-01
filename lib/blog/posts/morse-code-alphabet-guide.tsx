import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "morse-code-alphabet-guide",
  title: "Morse Code Alphabet: Every Letter, Number & Symbol",
  description:
    "The complete Morse code alphabet reference — all 26 letters, 10 numbers, and common punctuation marks with memory tips for each character.",
  excerpt:
    "A definitive reference for the complete International Morse Code alphabet: every letter from A to Z, numbers 0–9, and the most-used punctuation characters.",
  date: "2026-05-18",
  readingTime: 5,
  category: "Reference",
  tags: ["morse code alphabet", "morse code chart", "reference", "characters"],
  coverEmoji: "🔤",
  coverGradient: "from-violet-500 to-purple-600",

  Content: function AlphabetContent() {
    const letters = [
      ["A", "·−"], ["B", "−···"], ["C", "−·−·"], ["D", "−··"],
      ["E", "·"], ["F", "··−·"], ["G", "−−·"], ["H", "····"],
      ["I", "··"], ["J", "·−−−"], ["K", "−·−"], ["L", "·−··"],
      ["M", "−−"], ["N", "−·"], ["O", "−−−"], ["P", "·−−·"],
      ["Q", "−−·−"], ["R", "·−·"], ["S", "···"], ["T", "−"],
      ["U", "··−"], ["V", "···−"], ["W", "·−−"], ["X", "−··−"],
      ["Y", "−·−−"], ["Z", "−−··"]
    ];
    const numbers = [
      ["0", "−−−−−"], ["1", "·−−−−"], ["2", "··−−−"], ["3", "···−−"],
      ["4", "····−"], ["5", "·····"], ["6", "−····"], ["7", "−−···"],
      ["8", "−−−··"], ["9", "−−−−·"]
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
      ["(", "−·−−·", "Parenthesis open"],
    ];

    return (
      <div className="prose-content">
        <p>
          International Morse Code uses a system of short signals (dots, <em>dit</em>) and long
          signals (dashes, <em>dah</em>) to represent letters, numbers, and punctuation. A dah is
          exactly three times the length of a dit. The standard was formalized by the International
          Telecommunication Union (ITU) and is used globally by amateur radio operators, maritime
          services, and emergency communications.
        </p>

        <h2>The Morse Code Alphabet (A–Z)</h2>
        <p>
          The most common letters (E, T, A, I, N, O, S, H) have the shortest codes — this was
          deliberate, based on letter frequency in English text.
        </p>

        <div className="not-prose my-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {letters.map(([letter, code]) => (
            <div key={letter} className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 dark:border-outline-variant/20 dark:bg-surface-container">
              <span className="w-6 font-headline text-lg font-black text-neutral-900 dark:text-on-surface">{letter}</span>
              <span className="font-mono text-sm font-bold tracking-wider text-emerald-600 dark:text-primary-container">{code}</span>
            </div>
          ))}
        </div>

        <h2>Numbers 0–9</h2>
        <p>
          Numbers follow a logical pattern: 1 starts with one dot, 2 with two dots, and so on up to
          5. From 6 onward, dashes appear at the start and increase toward 0 (five dashes).
        </p>

        <div className="not-prose my-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {numbers.map(([num, code]) => (
            <div key={num} className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 dark:border-outline-variant/20 dark:bg-surface-container">
              <span className="w-5 font-headline text-lg font-black text-neutral-900 dark:text-on-surface">{num}</span>
              <span className="font-mono text-xs font-bold tracking-wider text-emerald-600 dark:text-primary-container">{code}</span>
            </div>
          ))}
        </div>

        <h2>Punctuation & Prosigns</h2>
        <p>
          Punctuation marks and procedural signals (prosigns) are less commonly memorized by
          beginners, but important for full written communication and radio operation.
        </p>

        <div className="not-prose my-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {punctuation.map(([sym, code, name]) => (
            <div key={sym} className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 dark:border-outline-variant/20 dark:bg-surface-container">
              <span className="w-7 text-center font-headline text-base font-black text-neutral-900 dark:text-on-surface">{sym}</span>
              <span className="flex-1 font-mono text-xs font-bold tracking-wider text-emerald-600 dark:text-primary-container">{code}</span>
              <span className="font-label text-[10px] text-slate-500 dark:text-slate-400">{name}</span>
            </div>
          ))}
        </div>

        <h2>Timing Rules</h2>
        <p>Morse code timing is everything. These ratios are standardized by the ITU:</p>
        <ul>
          <li>1 dit = 1 unit</li>
          <li>1 dah = 3 units</li>
          <li>Gap between signals within a letter = 1 unit</li>
          <li>Gap between letters = 3 units</li>
          <li>Gap between words = 7 units</li>
        </ul>
        <p>
          At 20 WPM (words per minute), one unit is about 60 milliseconds. The reference &ldquo;word&rdquo;
          used to calculate WPM is &ldquo;PARIS&rdquo; — 50 units long including trailing space.
        </p>

        <h2>The Most Important Letters to Learn First</h2>
        <p>
          If you&apos;re just starting, prioritize these high-frequency letters in English text:
        </p>
        <p className="font-mono text-lg tracking-wide">
          E · &nbsp; T − &nbsp; A ·− &nbsp; I ·· &nbsp; N −· &nbsp; O −−− &nbsp; S ··· &nbsp; H ····
        </p>
        <p>
          These 8 letters alone cover roughly 50% of characters in typical English text, so mastering
          them first gives you the biggest return on practice time.
        </p>

        <h2>Tips for Memorization</h2>
        <ul>
          <li>
            <strong>Mirror pairs:</strong> N (−·) is the mirror of A (·−). K (−·−) mirrors R (·−·).
            Learning pairs together halves the memorization load.
          </li>
          <li>
            <strong>Count the signals:</strong> E has 1 signal, I has 2, S has 3, H has 4.
            T has 1, M has 2, O has 3.
          </li>
          <li>
            <strong>Learn by sound:</strong> Don&apos;t stare at the chart — listen to each character
            played at speed and train your ear to recognize it without thinking.
          </li>
        </ul>
      </div>
    );
  }
};
