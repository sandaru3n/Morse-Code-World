import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "international-vs-american-morse-code",
  title: "International vs American Morse Code: Key Differences",
  description:
    "International and American Morse Code differ in several significant ways. Learn the history, key character differences, and which one you should learn.",
  excerpt:
    "There are actually two versions of Morse code — the familiar International standard and the older American version. They differ in 14 characters and have a fascinating history.",
  date: "2026-05-10",
  readingTime: 6,
  category: "Reference",
  tags: ["international morse code", "american morse code", "comparison", "telegraph"],
  coverEmoji: "🌐",
  coverGradient: "from-rose-500 to-pink-600",

  Content: function ComparisonContent() {
    const differences = [
      ["C", "−·−·", "··  ·", "dash-dit-dash-dit vs double-dit space dit"],
      ["F", "··−·", "·−·", "4-signal vs 3-signal"],
      ["J", "·−−−", "−··· ·", "4-signal vs spaced pattern"],
      ["L", "·−··", "⸺", "4-signal vs long dash"],
      ["O", "−−−", "··  ·", "3 dahs vs dit-dit space dit"],
      ["P", "·−−·", "·····", "4-signal vs 5 dits"],
      ["R", "·−·", "· ·−", "3-signal vs spaced dits"],
      ["X", "−··−", "·−··", "dash form vs dot-dash form"],
      ["Y", "−·−−", "·· ··", "4-signal vs spaced pairs"],
      ["Z", "−−··", "··· ·", "2-dah form vs spaced 3-dots"],
    ];

    return (
      <div className="prose-content">
        <p>
          Most people learning Morse code today encounter a single standard — International Morse Code.
          But there are actually two distinct systems: <strong>International Morse Code</strong>
          (also called Continental Morse) and <strong>American Morse Code</strong> (also called
          Railroad Morse or Landline Morse). Understanding both clarifies a lot of Morse code history
          and is essential for anyone reading older telegraphic records.
        </p>

        <h2>Origins: Two Different Inventors</h2>
        <p>
          <strong>American Morse Code</strong> was created by Samuel Morse and Alfred Vail in the
          1830s–40s for the US telegraph system. It was designed around the mechanical register —
          a paper-tape recorder that printed the signals — rather than for sound copying. This led
          to some unusual choices: long dashes of variable length, short internal spaces within
          some characters, and no zero in the original scheme.
        </p>
        <p>
          <strong>International Morse Code</strong> was developed in 1848 by Friedrich Clemens Gerke
          in Germany, who simplified the American system significantly. It was standardized at the
          1865 International Telegraph Convention in Paris and has been the global standard ever since.
          International Morse eliminates variable-length dashes and internal spaces, making every
          character a simple sequence of dits and dahs.
        </p>

        <h2>The Core Structural Differences</h2>

        <h3>1. Variable-Length Dashes (American Only)</h3>
        <p>
          American Morse has two types of dashes: a standard dash (−) and a long dash (⸺, about
          twice as long). The letter L is a single long dash. The zero (0) is two long dashes.
          International Morse uses only one dash length, making timing unambiguous.
        </p>

        <h3>2. Internal Spaces (American Only)</h3>
        <p>
          Several American Morse characters contain an internal pause within the character itself —
          not the gap between characters, but a half-space inside the character. For example, the
          letter C in American Morse is two dits with a space between them, then another dit
          (·· ·). In International Morse, C is simply −·−·. Internal spaces make American Morse
          much harder to learn by sound.
        </p>

        <h3>3. Number Representations</h3>
        <p>
          Numbers differ substantially. International Morse has a logical, easy-to-remember system
          (1=·−−−−, 2=··−−−, etc.). American Morse numbers were less systematic and some used
          that ambiguous long dash.
        </p>

        <h2>Character Comparison: Key Differences</h2>
        <p>
          Of the 26 letters, these have notably different codes between the two systems:
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-outline-variant/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200/80 bg-slate-50/80 dark:border-outline-variant/20 dark:bg-surface-container">
                <th className="px-4 py-3 text-left font-headline text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Letter</th>
                <th className="px-4 py-3 text-left font-headline text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">International</th>
                <th className="px-4 py-3 text-left font-headline text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">American</th>
                <th className="px-4 py-3 text-left font-headline text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Note</th>
              </tr>
            </thead>
            <tbody>
              {differences.map(([letter, intl, amer, note]) => (
                <tr key={letter} className="border-b border-slate-100 dark:border-outline-variant/10">
                  <td className="px-4 py-2.5 font-headline text-base font-black text-neutral-900 dark:text-on-surface">{letter}</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-emerald-600 dark:text-primary-container">{intl}</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-rose-600 dark:text-rose-400">{amer}</td>
                  <td className="px-4 py-2.5 text-xs text-slate-500 dark:text-slate-400">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Which Should You Learn?</h2>
        <p>
          For virtually all modern purposes, learn <strong>International Morse Code</strong>. It is:
        </p>
        <ul>
          <li>The global standard used by amateur radio operators worldwide</li>
          <li>Required for all ITU-related communications</li>
          <li>Simpler and more logical than American Morse</li>
          <li>The version used by accessibility software (Google Gboard, etc.)</li>
          <li>What all modern Morse code apps, tools, and trainers teach</li>
        </ul>
        <p>
          American Morse Code is primarily of historical interest. You might encounter it if you&apos;re
          researching 19th-century US telegraph history, working with antique telegraph equipment, or
          dealing with pre-1865 records. Some American railroad telegraph museums and enthusiasts still
          practice it.
        </p>

        <h2>Was American Morse Code "Wrong"?</h2>
        <p>
          Not at all — it was designed for different equipment and worked well for the mechanical
          register systems used in 19th-century America. Skilled American Morse operators could achieve
          40+ words per minute, which was extraordinary for the era. The transition to International
          Morse happened because of cross-border communication needs and the rise of sound-copying
          (listening to the clicks) rather than reading printed tape.
        </p>
        <p>
          Both systems are valid parts of Morse code history. But if you want to communicate with
          anyone using Morse today, International is the only choice.
        </p>
      </div>
    );
  }
};
