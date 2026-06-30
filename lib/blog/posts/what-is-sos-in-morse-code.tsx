import Link from "next/link";
import { BlogFaq } from "@/components/blog/BlogFaq";
import { BlogKeyTakeaway } from "@/components/blog/BlogKeyTakeaway";
import { BlogMorseHighlight } from "@/components/blog/BlogMorseHighlight";
import { SectionHeadingSingle, SubsectionHeading } from "@/components/blog/SectionHeading";
import type { BlogPost } from "../types";

const SOS_FAQ = [
  {
    q: "What is SOS in Morse code?",
    a: "...---... — three dots, three dashes, and three dots sent as one continuous signal."
  },
  {
    q: "What does SOS stand for?",
    a: "Officially, nothing. “Save Our Souls” and “Save Our Ship” came later as memory aids."
  },
  {
    q: "How do you send an SOS with a flashlight?",
    a: "Three short flashes, three long, three short. Pause. Repeat."
  },
  {
    q: "Is SOS still the official distress call?",
    a: "GMDSS replaced it for commercial shipping in 1999, but it remains a recognized emergency signal worldwide."
  }
] as const;

export const post: BlogPost = {
  slug: "what-is-sos-in-morse-code",
  title: "What Is SOS in Morse Code? The Complete Guide",
  description:
    "Explore the history and importance of SOS in Morse code. Understand why this simple signal is vital for communication in crises.",
  excerpt:
    "SOS is three dots, three dashes, three dots — the world's most recognized distress signal. Learn the pattern, how to send it, and why it still matters.",
  date: "2026-06-01",
  readingTime: 8,
  category: "Reference",
  tags: ["SOS morse code", "distress signal", "morse code SOS"],
  coverEmoji: "🆘",
  coverGradient: "from-red-600 to-orange-600",
  coverImage: "/blogimages/what-is-sos-in-morse-code2.webp",
  coverImageAlt: "SOS Morse code distress signal — emergency flashlight and maritime rescue communication",
  layout: "guide",
  faq: [...SOS_FAQ],

  Content: function SosMorseContent() {
    return (
      <div className="prose-content prose-content--guide">
        <p>
          Three quick beeps. Three slow ones. Three quick again. That simple pattern — written as{" "}
          <span className="prose-emphasis">... --- ...</span> — is the world&apos;s most famous distress
          signal. Tap it on a pipe, flash it with a phone light, or stamp it in beach sand.
        </p>
        <br className="prose-gap" />
        <p>
          SOS in Morse code is three dots, three dashes, and three dots again. Sailors relied on it for
          decades, and hikers still do. Here is what the signal means, how to send it, and how three
          letters ended up saving lives.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="The SOS pattern" />
        <p>
          Morse code turns letters into short and long signals. A dot is short. A dash is long. SOS works
          out like this:
        </p>
        <br className="prose-gap" />
        <ul>
          <li>
            <strong>S</strong> is three dots: <em>...</em>
          </li>
          <li>
            <strong>O</strong> is three dashes: <em>---</em>
          </li>
          <li>
            <strong>S</strong> is three dots: <em>...</em>
          </li>
        </ul>
        <br className="prose-gap" />
        <BlogMorseHighlight
          pattern="... --- ..."
          label="SOS in International Morse Code"
          caption="Send as one continuous rhythm — no pause between letters."
        />
        <p>
          One thing trips people up: you do not pause between the letters. SOS is transmitted as a single
          unbroken signal. Operators often write a bar over SOS for that reason. That steady beat is the
          entire point — even through bad static, it is hard to confuse with ordinary chatter.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="What does SOS stand for?" />
        <p>
          This is where most people are surprised: <span className="prose-emphasis">SOS does not stand for anything.</span>
        </p>
        <br className="prose-gap" />
        <p>
          You may have heard &ldquo;Save Our Souls&rdquo; or &ldquo;Save Our Ship.&rdquo; Both are phrases
          invented after the fact — memory aids so the code sticks in your head. The truth is simpler.
        </p>
        <br className="prose-gap" />
        <p>
          The pattern was chosen because it is clean, easy to remember, and difficult to mistake for other
          signals. Three dots, three dashes, three dots transmit quickly and cut through radio noise. Even a
          tired operator can recognize it in moments — which is why SOS became the international distress
          signal long before anyone attached a meaning to the letters.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="How to send an SOS" />
        <p>
          You can send it with anything you can turn on and off. A dash is roughly three times longer than a
          dot, with a similar gap between symbols.
        </p>
        <br className="prose-gap" />

        <SubsectionHeading label="Method" title="By sound" />
        <p>
          Tap a metal railing. Honk a horn. Bang a pot. Three fast, three slow, three fast. A car horn
          echoing across a valley has reached people miles away.
        </p>
        <br className="prose-gap" />

        <SubsectionHeading label="Method" title="By light" />
        <p>This is the method that has actually rescued people. Use a flashlight, headlights, or signal mirror:</p>
        <br className="prose-gap" />
        <ol>
          <li>Three short flashes</li>
          <li>Three long flashes</li>
          <li>Three short flashes</li>
          <li>Pause, then repeat</li>
        </ol>
        <br className="prose-gap" />
        <p>
          A mirror catching the sun and aimed at a plane can be spotted from a surprising distance.
        </p>
        <br className="prose-gap" />

        <SubsectionHeading label="Method" title="By markers" />
        <p>
          Stuck with no gear? Use rocks, logs, or boots in packed snow to spell SOS on the ground. Make the
          letters big — pilots read SOS as a distress signal without knowing Morse.
        </p>
        <br className="prose-gap" />
        <p>
          Whichever method you use, repeat with the same rhythm. Rescuers need a pattern, not one frantic
          blast.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="Where SOS came from" />
        <p>
          Before SOS, ships used different distress calls. Marconi operators often sent <strong>CQD</strong> —
          &ldquo;CQ&rdquo; for all stations, &ldquo;D&rdquo; for distress. Other countries used their own
          codes. That confusion had cost lives when ships from different systems passed in the night.
        </p>
        <br className="prose-gap" />
        <p>
          As radio spread across the seas, delegates at the International Radiotelegraph Convention in Berlin
          agreed in October 1906 that SOS would be one signal for everyone. It became official on 1 July
          1908 — chosen for how it sounds, not for what it spells.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="SOS and the Titanic" />
        <p>
          One of the most famous SOS calls went out in April 1912 from RMS <em>Titanic</em>. Wireless
          operators Jack Phillips and Harold Bride sent the older CQD first, then switched to SOS as water
          rose around their equipment.
        </p>
        <br className="prose-gap" />
        <p>
          The disaster lodged SOS in the public mind forever. It also helped drive new safety rules,
          including keeping a radio operator on duty around the clock. By 1912 SOS was largely standardized —
          the <em>Titanic</em> showed the world why one common signal mattered.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="Is SOS still used?" />
        <p>
          On large commercial ships, traditional radio SOS is rare. In 1999 the Global Maritime Distress and
          Safety System (GMDSS) added satellite and digital beacons — one button can send a ship&apos;s identity
          and position faster than manual Morse.
        </p>
        <br className="prose-gap" />
        <p>But SOS did not disappear. It moved:</p>
        <br className="prose-gap" />
        <ul>
          <li>Hikers still flash it with headlamps</li>
          <li>It remains a standard visual distress signal on land and at sea</li>
          <li>Many phones include an Emergency SOS feature that calls for help and shares location</li>
        </ul>
        <br className="prose-gap" />
        <p>
          Professionals moved on to newer systems. Ordinary people kept the three-letter pattern that means
          &ldquo;help me&rdquo; almost everywhere on Earth.
        </p>
        <br className="prose-gap" />

        <BlogFaq heading="Quick answers" items={[...SOS_FAQ]} />
        <br className="prose-gap" />

        <BlogKeyTakeaway>
          <p>
            SOS in Morse code is <strong>... --- ...</strong> — a pattern chosen for how clean it sounds, not
            for what it spells. It became the world&apos;s distress standard in 1908, rang out from the{" "}
            <em>Titanic</em> four years later, and outlived its retirement from professional radio. Learn to
            flash it with a light or scratch it in the dirt. You may never need it — until the one day you
            really do.
          </p>
        </BlogKeyTakeaway>

        <br className="prose-gap" />
        <p>
          Practice the rhythm with our free{" "}
          <Link href="/">Morse code translator</Link> — type SOS and hear the correct timing before you need
          it in an emergency.
        </p>
      </div>
    );
  }
};
