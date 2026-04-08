"use client";

import Link from "next/link";

/** Long-form copy above the site footer on the home page (SEO + helpful context). */
export function SeoArticle() {
  return (
    <article
      className="lg:col-span-12"
      aria-labelledby="seo-article-heading"
    >
      <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
        <h2
          id="seo-article-heading"
          className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
        >
          Morse code translator: decode, encode, and practice in your browser
        </h2>
        <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
          <p>
            A capable <strong className="font-semibold text-neutral-800 dark:text-slate-200">morse code translator</strong>{" "}
            helps you move fluently between everyday language and the rhythm of dots and dashes. Whether you are studying for
            an amateur radio license, teaching signaling basics, or simply curious about how messages were sent before voice
            and digital modes dominated the airwaves, an interactive tool removes the friction of pencil-and-paper practice.
            You can type letters and punctuation, hear how they sound at different speeds, and watch timing patterns so
            that recognition becomes automatic rather than theoretical.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Morse code decoder and encoder in one place
          </h3>
          <p>
            Think of a <strong className="font-semibold text-neutral-800 dark:text-slate-200">morse code decoder</strong> as
            the half of the system that takes rhythmic input and turns it back into readable text. The encoder does the
            opposite: it maps each character to a standard pattern so you can copy code from a textbook or flashcard and
            immediately hear it. When both directions live in the same interface, you can verify your work in seconds—if
            the decoded line matches what you intended, your spacing and symbol choices are probably correct. That feedback
            loop matters because Morse is as much about timing as it is about memorizing the alphabet.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Convert Morse code to English and English to Morse
          </h3>
          <p>
            Many people arrive with a single goal: <strong className="font-semibold text-neutral-800 dark:text-slate-200">convert morse code to english</strong>{" "}
            from a string they copied from a practice app, an old manual, or a classroom exercise. Pasting dots, dashes, and
            spaces into a translator highlights whether word breaks and letter breaks are clear—small mistakes in spacing
            often turn an innocent sentence into gibberish. Going the other way, from English into Morse, supports
            composition: you draft a message, listen to playback, and adjust speed or pitch until it feels comfortable.
            Repetition at a sustainable pace tends to beat cramming at a speed you cannot yet copy accurately.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Morse alphabet translator and reference habits
          </h3>
          <p>
            A <strong className="font-semibold text-neutral-800 dark:text-slate-200">morse alphabet translator</strong> is
            most useful when it reinforces structure: A through Z, numerals, and a compact set of punctuation and prosigns
            used on the air. Beginners often start with small groups—short callsign-style patterns, then common words—before
            tackling full paragraphs. Keeping a quick reference nearby (or a built-in chart) prevents breaks in flow when a
            rare character appears. Over time, the goal is not to look up every symbol but to hear a letter and know it the
            way you recognize a spoken word, without mentally naming dots and dashes first.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            American Morse code translator vs. International Morse
          </h3>
          <p>
            Searchers sometimes look for an <strong className="font-semibold text-neutral-800 dark:text-slate-200">american morse code translator</strong>{" "}
            because they have seen historical railroad or landline telegraph materials that used a different set of spaced
            patterns than the International Morse most radio operators learn today. International Morse (often called
            Continental Morse in older books) is the alphabet widely used on amateur and maritime radio in the modern era.
            American Morse, while culturally important, differs in timing and in several character shapes; a dedicated
            historical tool may be required for faithful railroad-era transcription. This site focuses on the international
            alphabet so that results align with contemporary licensing study guides and on-air practice.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Speed, tone, and how you actually improve
          </h3>
          <p>
            Words per minute, Farnsworth spacing, sidetone pitch, and comfortable volume all change how code feels in the
            headphones. Beginners often raise pitch for clarity or slow the overall words-per-minute rate while keeping
            character rhythm consistent. Intermediate operators might push speed in short bursts, then return to a sustainable
            rate to rebuild accuracy. Visual learners benefit from a moving timeline or waveform that shows where energy
            sits relative to silence; auditory learners lean on clean tone and repeatable timing. Combining both channels can
            shorten the path from “I recognize that if I think for a second” to “I know it instantly.”
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Who still uses Morse, and why it is worth learning
          </h3>
          <p>
            Amateur radio communities worldwide continue to use Morse for weak-signal work and for the satisfaction of a
            skill that spans generations. Educators use it as an accessible lesson in patterns, rhythm, and even accessibility
            themes—Morse remains a bridge technology for some assistive setups. Historians and re-enactors study older manuals
            to understand how information moved along wires and coastlines. Whatever your motivation, a browser-based
            translator lowers the barrier: no install, quick experiments, and immediate audio feedback. Pair regular short
            sessions with on-air or club practice when you are ready, and treat accuracy before speed as the rule that keeps
            progress honest.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Study habits that pair well with a morse code decoder
          </h3>
          <p>
            Short daily sessions outperform occasional marathons. Try five to fifteen minutes of copy practice, then five
            minutes of review where you read English aloud while imagining the corresponding pattern. Alternate send and
            receive: encode a headline, decode a random phrase, then swap. Log trouble letters and revisit them at the end
            of the week; most people find that a handful of confusable pairs (such as similar rhythm groups) account for the
            majority of early errors. When you use a <strong className="font-semibold text-neutral-800 dark:text-slate-200">morse code decoder</strong>{" "}
            to check answers, write down what you thought you heard before revealing the solution so you train honest
            self-assessment instead of pattern-matching the screen.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            On-air etiquette, regulation, and safety
          </h3>
          <p>
            Translating text in a browser is only the classroom; transmitting on the radio requires licensing and band plans
            that depend on your country. In the United States, the Federal Communications Commission defines where and how
            amateur signals may be sent—always follow current rules, power limits, and polite bandwidth habits. Never rely on
            Morse tools for emergency communication where regulated voice or SMS services are available; treat this site as
            educational software. If you share recordings or screen captures online, avoid publishing personal identifiers you
            would not want indexed, and remember that historical messages may include outdated terminology—verify meaning before
            reusing quotes in academic or journalistic work.
          </p>

          <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
            For more on how this project is run and where it is operated from, see the{" "}
            <Link
              href="/about"
              className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
            >
              About
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </article>
  );
}
