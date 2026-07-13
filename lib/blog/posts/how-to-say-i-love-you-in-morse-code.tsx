import Link from "next/link";
import { BlogFaq } from "@/components/blog/BlogFaq";
import { BlogKeyTakeaway } from "@/components/blog/BlogKeyTakeaway";
import { BlogMorseHighlight } from "@/components/blog/BlogMorseHighlight";
import { BlogWhiteHeading } from "@/components/blog/BlogWhiteHeading";
import type { BlogPost } from "../types";

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

export const post: BlogPost = {
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
  layout: "white",
  faq: [...LOVE_FAQ],

  Content: function ILoveYouMorseContent() {
    return (
      <div className="prose-content prose-content--white prose-content--purple">
        <p className="prose-lead">
          Saying <span className="prose-emphasis-dark">I love you</span> in Morse code is one of the
          most romantic ways to use this old telegraph language. Three short words become a rhythm of dots and
          dashes you can tap on a table, flash with a phone light, or whisper as <span className="prose-morse-term">dit-dah</span> sounds.
        </p>
        <br className="prose-gap" />
        <p className="prose-muted">
          You do not need radio equipment or years of practice. Once you know how each letter is encoded, the
          full phrase takes less than a minute to send — and it is memorable enough to surprise someone special.
        </p>
        <br className="prose-gap" />

        <BlogWhiteHeading title="What Is &ldquo;I Love You&rdquo; in Morse Code?" />
        <p>
          In International Morse code, every letter is a unique pattern of dots (<span className="prose-morse-term">dit</span>) and dashes (
          <span className="prose-morse-term">dah</span>). A dash lasts about three times longer than a dot. Letters are separated by a short
          pause; words like <span className="prose-keyword">love</span> and <span className="prose-keyword">you</span> get a slightly longer gap.
        </p>
        <br className="prose-gap" />
        <BlogMorseHighlight
          pattern="·· ·−·· −−− ···− ·   −·−− −−− ··−"
          label="I love you — International Morse Code"
          caption="Short pause between letters · longer pause between “love” and “you”"
        />
        <p>
          In plain text form, the same message is often written as{" "}
          <span className="font-mono text-sm text-violet-600 sm:text-base">
            .. .-.. --- ...- . -.-- --- ..-
          </span>
          . Try it in our{" "}
          <Link href="/">Morse code translator</Link> — type the words and hear the rhythm instantly.
        </p>
        <br className="prose-gap" />

        <BlogWhiteHeading title="Letter-by-Letter Breakdown" />
        <p>Here is how each letter in <span className="prose-keyword">I love you</span> is built:</p>
        <br className="prose-gap" />
        <ul>
          <li>
            <span className="prose-keyword">I</span> = · · <span className="prose-morse-term">(dit-dit)</span>
          </li>
          <li>
            <span className="prose-keyword">L</span> = · − · · <span className="prose-morse-term">(dit-dah-dit-dit)</span>
          </li>
          <li>
            <span className="prose-keyword">O</span> = − − − <span className="prose-morse-term">(dah-dah-dah)</span>
          </li>
          <li>
            <span className="prose-keyword">V</span> = · · · − <span className="prose-morse-term">(dit-dit-dit-dah)</span>
          </li>
          <li>
            <span className="prose-keyword">E</span> = · <span className="prose-morse-term">(dit)</span>
          </li>
          <li>
            <span className="prose-keyword">Y</span> = − · − − <span className="prose-morse-term">(dah-dit-dah-dah)</span>
          </li>
          <li>
            <span className="prose-keyword">O</span> = − − − <span className="prose-morse-term">(dah-dah-dah)</span>
          </li>
          <li>
            <span className="prose-keyword">U</span> = · · − <span className="prose-morse-term">(dit-dit-dah)</span>
          </li>
        </ul>
        <br className="prose-gap" />
        <p>
          Notice that <span className="prose-keyword">O</span> appears twice — three dashes each time. <span className="prose-keyword">V</span> is the
          trickiest letter in the phrase because it uses four symbols. Say the whole word{" "}
          <span className="prose-keyword">love</span> as one flowing rhythm before you pause for <span className="prose-keyword">you</span>.
        </p>
        <br className="prose-gap" />

        <BlogWhiteHeading title="How to Say It Out Loud" />
        <p>
          Morse operators do not spell letter names — they speak the rhythm. For{" "}
          <span className="prose-keyword">I love you</span>, practice like this:
        </p>
        <br className="prose-gap" />
        <ol className="blog-white-rhythm-list">
          <li>
            <span className="prose-keyword">I</span> — <span className="prose-morse-term">&ldquo;dit-dit&rdquo;</span>
          </li>
          <li>
            <span className="prose-keyword">LOVE</span> — <span className="prose-morse-term">&ldquo;dit-dah-dit-dit, dah-dah-dah, dit-dit-dit-dah, dit&rdquo;</span>
          </li>
          <li>
            <span className="prose-keyword">YOU</span> — <span className="prose-morse-term">&ldquo;dah-dit-dah-dah, dah-dah-dah, dit-dit-dah&rdquo;</span>
          </li>
        </ol>
        <br className="prose-gap" />
        <p>
          Repeat at a steady tempo. Speed does not matter for a romantic message — clear, even timing is what
          makes the pattern recognizable.
        </p>
        <br className="prose-gap" />

        <BlogWhiteHeading title="How to Send It with a Flashlight or Phone" />
        <p>
          A flashlight turns Morse code into a visible love note. Use these rules:
        </p>
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

        <BlogWhiteHeading title="Fun Ways to Use It" />
        <p>
          Beyond flashlights, people have tapped <span className="prose-keyword">I love you</span> in Morse on a car horn, a metal
          ring on a railing, or even a necklace with dot-and-dash beads. Other ideas:
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

        <BlogFaq heading="FAQ: I love you in Morse code" items={[...LOVE_FAQ]} />
        <br className="prose-gap" />

        <BlogKeyTakeaway>
          <p>
            <span className="prose-keyword">I love you</span> in Morse code is{" "}
            <span className="font-mono text-violet-600">·· ·−·· −−− ···− ·   −·−− −−− ··−</span> — a rhythm anyone can learn in one evening.
            Flash it, tap it, or type it in our{" "}
            <Link href="/">free translator</Link>. It is a small pattern with a big meaning, carried the same
            way telegraph operators sent urgent news more than a century ago — one dot and dash at a time.
          </p>
        </BlogKeyTakeaway>
      </div>
    );
  }
};
