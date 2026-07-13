import Link from "next/link";
import { BlogFaq } from "@/components/blog/BlogFaq";
import { BlogKeyTakeaway } from "@/components/blog/BlogKeyTakeaway";
import { BlogMorseHighlight } from "@/components/blog/BlogMorseHighlight";
import { SectionHeading, SubsectionHeading } from "@/components/blog/SectionHeading";
import type { BlogPost } from "../types";

const A_FAQ = [
  {
    q: "What is A in Morse code?",
    a: "A in Morse code is one dot followed by one dash (· −), spoken as “dit-dah.”"
  },
  {
    q: "How do you write A in Morse code?",
    a: "Write it as a short mark followed by a long mark: · −. In text form, it is often shown as “.-”."
  },
  {
    q: "How do you say A in Morse code?",
    a: "Say it as “dit-dah,” with the second sound held about three times longer than the first."
  },
  {
    q: "What is the opposite of A in Morse code?",
    a: "N is the reverse of A. N is dash-dot (− ·), while A is dot-dash (· −)."
  },
  {
    q: "Why is A a short code in Morse?",
    a: "Because A appears frequently in English, especially at the start of words, Morse code assigns it a short pattern to make transmission faster."
  },
  {
    q: "Is A in Morse code the same in every language?",
    a: "International Morse code uses the same pattern for A across most languages that use the Latin alphabet. Some older regional variants, like American Morse code from the 1840s, used slightly different timing."
  },
  {
    q: "Can I use a flashlight to send A in Morse code?",
    a: "Yes. A short flash followed by a longer flash sends the letter A. This works with lights, sound, or even taps on a surface."
  }
] as const;

export const post: BlogPost = {
  slug: "a-in-morse-code",
  title: "A in Morse Code: Everything You Need to Know",
  metaTitle: "A in Morse Code: Meaning, Chart & How to Remember It",
  description:
    "A in Morse code is dot-dash (· −), or \"dit-dah.\" Learn what it means, how to remember it, and see a full comparison chart with examples.",
  excerpt:
    "The letter A in Morse code is one dot and one dash — dit-dah. Learn the pattern, why it was designed that way, and how to tell A apart from similar letters.",
  date: "2026-06-15",
  readingTime: 7,
  category: "Reference",
  tags: ["A in morse code", "letter A morse code", "dit dah", "morse code chart"],
  coverEmoji: "🅰️",
  coverGradient: "from-blue-600 to-indigo-700",
  coverImage: "/blogimages/a-in-morse-code.webp",
  coverImageAlt: "Letter A in Morse code — dot-dash pattern chart with dit-dah rhythm guide",
  layout: "guide",
  faq: [...A_FAQ],

  Content: function AInMorseContent() {
    return (
      <div className="prose-content prose-content--guide prose-content--editorial">
        <p>
          The letter A in Morse code is one dot followed by one dash:{" "}
          <span className="prose-emphasis">· −</span>
        </p>
        <br className="prose-gap" />
        <p>
          That is it — two symbols. Yet there is more to this simple pattern than most people realize,
          from why Samuel Morse and Alfred Vail designed it that way to how you can still use it today.
        </p>
        <br className="prose-gap" />

        <SectionHeading variant="editorial" label="01" title="What does A look like in Morse code?" />
        <p>
          A in Morse code is written as <span className="prose-emphasis">dot-dash</span> (· −). When you
          tap it out, it sounds like a short beep followed by a long beep: dit-dah. Once they memorized it,
          1800s telegraph operators could transmit this in less than a second.
        </p>
        <br className="prose-gap" />
        <table>
          <thead>
            <tr>
              <th scope="col">Letter</th>
              <th scope="col">Morse code</th>
              <th scope="col">Sound</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>· −</td>
              <td>dit-dah</td>
            </tr>
          </tbody>
        </table>
        <br className="prose-gap" />
        <BlogMorseHighlight
          pattern="· −"
          label="Letter A - International Morse Code"
          caption="One short signal, then one long signal - no pause between them."
        />
        <p>
          This pattern shows up everywhere once you know it. Ships have flashed it with lights. Soldiers
          have sounded it out on metal pipes. Prisoners have used it to communicate through walls.
        </p>
        <br className="prose-gap" />

        <SectionHeading variant="editorial" label="02" title="Why is A just one dot and one dash?" />
        <p>
          The code was designed around frequency. Morse and his assistant Alfred Vail followed a principle
          similar to Huffman coding: more frequently used letters received shorter codes.{" "}
          <span className="prose-emphasis">E</span>, the most common letter in English, is a single dot.{" "}
          <span className="prose-emphasis">A</span> gets the second-shortest pattern because it appears
          constantly — and at the beginning of thousands of common words.
        </p>
        <br className="prose-gap" />
        <p>
          This was not guesswork. Letter counts were reportedly based on printer type cases - whichever bins
          ran empty fastest told them which characters to compress. That is how the efficiency of the code
          came about.
        </p>
        <br className="prose-gap" />

        <SectionHeading variant="editorial" label="03" title="How to remember A in Morse code" />
        <p>
          Most people learn Morse through rhythm, not rote memorization. For A, say{" "}
          <span className="prose-emphasis">“about”</span> aloud and emphasize the second syllable: short,
          then long. That is the dit-dah pattern.
        </p>
        <br className="prose-gap" />
        <SubsectionHeading variant="editorial" label="Tip" title="Visual memory aid" />
        <p>
          Think of the letter A itself — a short stroke and a long slanted line. Repetition is what makes it
          permanent, whatever method sticks. Fifty taps and you will not forget it.
        </p>
        <br className="prose-gap" />

        <SectionHeading variant="editorial" label="04" title="A in Morse code vs other letters" />
        <p>It helps to see A next to letters it is easy to confuse:</p>
        <br className="prose-gap" />
        <table>
          <thead>
            <tr>
              <th scope="col">Letter</th>
              <th scope="col">Morse code</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>A</strong>
              </td>
              <td>· −</td>
              <td>dot, dash</td>
            </tr>
            <tr>
              <td>
                <strong>N</strong>
              </td>
              <td>− ·</td>
              <td>dash, dot — the reverse of A</td>
            </tr>
            <tr>
              <td>
                <strong>U</strong>
              </td>
              <td>· · −</td>
              <td>dot, dot, dash</td>
            </tr>
            <tr>
              <td>
                <strong>W</strong>
              </td>
              <td>· − −</td>
              <td>dot, dash, dash</td>
            </tr>
          </tbody>
        </table>
        <br className="prose-gap" />
        <p>
          <strong>N</strong> trips people up the most because it is A&apos;s mirror image. Get the order
          backward and you have sent a completely different letter.
        </p>
        <br className="prose-gap" />

        <SectionHeading variant="editorial" label="05" title="Where A in Morse code is used today" />
        <p>Morse code is not dead. This mode can travel farther and is still used because weak signals are easier to decode than voice:</p>
        <br className="prose-gap" />
        <ul>
          <li>Amateur radio operators send individual letters and full messages by key</li>
          <li>Pilots and air traffic controllers occasionally identify navigation beacons by Morse</li>
          <li>Search and rescue teams use it as a backup when radios fail</li>
          <li>
            Training drills combine single letters like A with distress signals such as{" "}
            <Link href="/blog/what-is-sos-in-morse-code">SOS</Link>
          </li>
        </ul>
        <br className="prose-gap" />

        <SectionHeading variant="editorial" label="06" title="Quick reference chart" />
        <table>
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>·</td>
              <td>dot (dit)</td>
            </tr>
            <tr>
              <td>−</td>
              <td>dash (dah)</td>
            </tr>
            <tr>
              <td>· −</td>
              <td>Letter A</td>
            </tr>
          </tbody>
        </table>
        <br className="prose-gap" />

        <BlogFaq heading="FAQ: A in Morse code" items={[...A_FAQ]} />
        <br className="prose-gap" />

        <BlogKeyTakeaway>
          <p>
            In Morse code, <strong>A</strong> is two symbols: a dot and a dash. It is one of the first
            letters you learn because it is short and easy to remember. Once you nail it, letters like N, W,
            and U fall into place faster - they all follow the same dot-dash logic Morse and Vail worked out
            almost 200 years ago.
          </p>
        </BlogKeyTakeaway>

        <br className="prose-gap" />
        <p>
          Type <strong>A</strong> in our free{" "}
          <Link href="/">Morse code translator</Link> to hear the dit-dah rhythm, or browse the full{" "}
          <Link href="/blog/morse-code-alphabet-guide">Morse code alphabet guide</Link> for every letter.
        </p>
      </div>
    );
  }
};
