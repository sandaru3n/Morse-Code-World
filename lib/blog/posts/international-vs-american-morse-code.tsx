import {
  SectionHeadingSingle,
  SubsectionHeading
} from "@/components/blog/SectionHeading";
import { BlogInArticleAd } from "@/components/blog/BlogInArticleAd";
import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "international-vs-american-morse-code",
  title: "International vs American Morse Code: Key Differences",
  description:
    "International and American Morse Code differ in several significant ways. Learn the history, key character differences, and which one you should learn.",
  excerpt:
    "There are actually two versions of Morse code — the familiar International standard and the older American version. They differ in 14 characters and have a fascinating history.",
  date: "2026-05-10",
  readingTime: 7,
  category: "Reference",
  tags: ["international morse code", "american morse code", "morse comparison"],
  coverEmoji: "🌐",
  coverGradient: "from-rose-500 to-pink-600",
  coverImage: "/blogimages/international-vs-american-morse-code.webp",
  coverImageAlt: "Comparison of International Morse code and American Morse code symbols and timing",

  Content: function ComparisonContent() {
    const differences = [
      ["C", "−·−·", "·· ·", "dash-dit-dash-dit vs double-dit space dit"],
      ["F", "··−·", "·−·", "4-signal vs 3-signal"],
      ["J", "·−−−", "−··· ·", "4-signal vs spaced pattern"],
      ["L", "·−··", "⸺", "4-signal vs long dash"],
      ["O", "−−−", "·· ·", "3 dahs vs dit-dit space dit"],
      ["P", "·−−·", "·····", "4-signal vs 5 dits"],
      ["R", "·−·", "· ·−", "3-signal vs spaced dits"],
      ["X", "−··−", "·−··", "dash form vs dot-dash form"],
      ["Y", "−·−−", "·· ··", "4-signal vs spaced pairs"],
      ["Z", "−−··", "··· ·", "2-dah form vs spaced 3-dots"]
    ];

    return (
      <div className="prose-content">
        <p>
          The most common Morse code you will see today is a standard called International Morse.
          However, there are in fact two separate systems:{" "}
          <span className="prose-emphasis">International Morse Code</span> (sometimes also called
          Continental Morse) and <span className="prose-emphasis">American Morse Code</span> (also
          sometimes called Railroad or Landline Morse). Understanding both explains much about the
          history of Morse code and is crucial for anyone reading older telegraphic records.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="Origins: Two Different Inventors" />
        <p>
          In the 1830s–40s, Samuel Morse and Alfred Vail developed American Morse Code for use with the
          US telegraph system. It was intended around the mechanical register — a recorder producing a
          paper-tape record of its signals; it had no notion regarding sound copying. This resulted in a
          few odd choices: long dashes of variable length, short internal spaces inside some characters, and
          no zero in the original scheme.
        </p>
        <br className="prose-gap" />
        <p>
          International Morse Code was simplified in its development (1848) from the American system by
          Friedrich Clemens Gerke, and presented in Germany. Standardized in Paris at the 1865
          International Telegraph Convention, it has been the international standard ever since.
          International Morse removes both variable-length dashes and internal spaces, turning every
          character into a neat dit/dah sequence.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="The Core Structural Differences" />

        <SubsectionHeading label="1" title="Variable-Length Dashes (American Only)" />
        <p>
          There are two dashes in American Morse: the normal dash (−) and the long or double dash (⸺,
          about twice as long). The letter L is one long dash; zero (0) is represented by two long dashes.
          With only one length of dash, timing is unambiguous in International Morse.
        </p>
        <br className="prose-gap" />

        <SubsectionHeading label="2" title="Internal Spaces (American Only)" />
        <p>
          Some American Morse characters have a semi-pause built into the character itself — not between two
          characters, but within that character. In American Morse, the letter C looks like two dits with a
          space between them, then another dit (·· ·). In International Morse it is simply −·−·. American
          Morse is much more difficult to learn by ear because of these internal spaces.
        </p>
        <br className="prose-gap" />

        <SubsectionHeading label="3" title="Number Representations" />
        <p>
          Numbers differ substantially. International Morse follows an easy-to-remember pattern (1=·−−−−,
          2=··−−−, and so on). American Morse has been considerably less systematic, and some patterns even
          used that ambiguous long dash.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="Character Comparison: Key Differences" />
        <p>
          Of the 26 letters, these have significantly different codes between the two systems:
        </p>
        <br className="prose-gap" />

        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-outline-variant/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200/80 bg-slate-50/80 dark:border-outline-variant/20 dark:bg-surface-container">
                <th className="px-4 py-3 text-left font-headline text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Letter
                </th>
                <th className="px-4 py-3 text-left font-headline text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  International
                </th>
                <th className="px-4 py-3 text-left font-headline text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  American
                </th>
                <th className="px-4 py-3 text-left font-headline text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {differences.map(([letter, intl, amer, note]) => (
                <tr key={letter} className="border-b border-slate-100 dark:border-outline-variant/10">
                  <td className="px-4 py-2.5 font-headline text-base font-black text-neutral-900 dark:text-on-surface">
                    {letter}
                  </td>
                  <td className="px-4 py-2.5 font-mono font-bold text-emerald-600 dark:text-primary-container">
                    {intl}
                  </td>
                  <td className="px-4 py-2.5 font-mono font-bold text-rose-600 dark:text-rose-400">
                    {amer}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-slate-500 dark:text-slate-400">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br className="prose-gap" />

        <BlogInArticleAd />

        <SectionHeadingSingle title="Which Should You Learn?" />
        <p>
          For almost every modern use, learn{" "}
          <span className="prose-emphasis">International Morse Code</span>. It is:
        </p>
        <br className="prose-gap" />
        <ul>
          <li>The worldwide standard used by amateurs around the world</li>
          <li>Required for all ITU-related communications</li>
          <li>More rational and simpler than American Morse</li>
          <li>The one that accessibility software (Google Gboard, etc.) uses</li>
          <li>What all modern Morse code apps, tools, and trainers teach</li>
        </ul>
        <br className="prose-gap" />
        <p>
          American Morse code is almost entirely of historic note. You will see it if you are studying US
          telegraphy history in the 19th century, using or restoring antique equipment, or working with
          pre-1865 records. A few railroad telegraph museums and amateur enthusiasts in America continue
          to use it.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title='Was American Morse Code "Wrong"?' />
        <p>
          Certainly not — it was created for various types of machinery as well and produced good results
          in the mechanical register systems predominant in nineteenth-century America. American Morse
          operators could hit 40+ words per minute if they were skilled, which was pretty impressive for
          the time. The adoption of International Morse was because it enabled cross-border traffic and
          also reflected an increase in the use of sound-copying (listening to the clicks) as opposed to
          reading printed tape.
        </p>
        <br className="prose-gap" />
        <p>
          Both systems are valid parts of Morse code history. However, if you are communicating with anyone
          in Morse today, International is the only option available.
        </p>
      </div>
    );
  }
};
