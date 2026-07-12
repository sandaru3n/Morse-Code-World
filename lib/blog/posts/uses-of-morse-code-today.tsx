import { SectionHeading, SectionHeadingSingle } from "@/components/blog/SectionHeading";
import { BlogInArticleAd } from "@/components/blog/BlogInArticleAd";
import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "uses-of-morse-code-today",
  title: "10 Surprising Uses of Morse Code in the Modern World",
  description:
    "Morse code isn't just a historical curiosity. From accessibility tech to military survival, here are 10 active uses of Morse code in 2026.",
  excerpt:
    "Think Morse code is obsolete? It's used in accessibility features, military survival training, aviation, and even smartphones. Here's where it still matters.",
  date: "2026-05-15",
  readingTime: 7,
  category: "Modern Uses",
  tags: ["morse code uses", "amateur radio", "modern morse code"],
  coverEmoji: "⚡",
  coverGradient: "from-sky-500 to-blue-600",
  coverImage: "/blogimages/uses-of-morse-code-today.webp",
  coverImageAlt: "Modern uses of Morse code — radio, accessibility, and communication technology in the world today",

  Content: function UsesContent() {
    return (
      <div className="prose-content">
        <p>
          The very last commercial maritime Morse station closed in 1999, and for most people the
          technology seemed destined to become a part of history. That prediction turned out to be
          completely off base. And, despite this proclivity to die out, Morse code has quietly persisted
          — and even expanded into the 21st century in some areas. And here are 10 of the places
          you&apos;ll see it being used today.
        </p>
        <br className="prose-gap" />

        <BlogInArticleAd />

        <SectionHeading label="1" title="Accessibility and Assistive Technology" />
        <p>
          Morse code is still used in a few varieties today, most notably for helping folks with motor
          disabilities to communicate. Morse input with dot and dash is supported via two switch inputs on
          Google&apos;s Gboard keyboard, meaning smartphones are usable by those who can&apos;t type in a
          conventional manner. Some eye-tracking systems can decode blinks as Morse signals. For those
          suffering from locked-in syndrome or ALS, Morse code could represent the difference between
          silence and communication.
        </p>
        <br className="prose-gap" />

        <SectionHeading label="2" title="Amateur (Ham) Radio" />
        <p>
          More than 3 million licensed amateur radio operators around the globe still utilize Morse code
          (called CW, for Continuous Wave) regularly. CW can penetrate interference and weak signal
          conditions that are fatal to voice communications, making it ideal for long-distance contacts
          or emergency nets. The International Morse Code Preservation Society actively promotes its use.
        </p>
        <br className="prose-gap" />

        <SectionHeading label="3" title="Military Survival Training" />
        <p>
          In the United States, the UK, and many other nations&apos; military forces still instruct
          personnel in Morse code as part of survival training (SERE — Survival, Evasion, Resistance,
          Escape). A downed pilot armed only with a flashlight or stone can send SOS signals. Morse is
          irreplaceable in survival, as no fancy machines are required — its simplicity and reliability
          speak for themselves.
        </p>
        <br className="prose-gap" />

        <SectionHeading label="4" title="Aviation Navigation: NDBs and VORs" />
        <p>
          Today, the identifiers of Non-Directional Beacons (NDBs) and VOR (VHF Omnidirectional Range)
          aviation stations transmit in Morse code as well. Pilots confirm that they&apos;re locked into the
          right navigational beacon by listening for its Morse ID. While GPS has reduced reliance on these
          beacons, they are still in use across the world and remain part of instrument flight training.
        </p>
        <br className="prose-gap" />

        <SectionHeading label="5" title="Emergency Communications" />
        <p>
          In disasters where phone networks, cellular towers, and internet infrastructure collapse,
          amateur radio operators using Morse code are often the only reliable communication link. Morse is
          low-power (a tiny battery can power a small transmitter for hours), propagates thousands of
          miles, and works well in heavy noise. Emergency planning frequently involves CW operators through
          organizations like FEMA and ARES (Amateur Radio Emergency Service).
        </p>
        <br className="prose-gap" />

        <SectionHeading label="6" title="Covert and Intelligence Operations" />
        <p>
          Although Morse code is no longer the primary method of communication, intelligence agencies and
          special operations forces still train personnel on how to use it for discreet communication. A
          single agent with a small transmitter can send compressed Morse bursts that are much more
          difficult to intercept or triangulate than voice. Morse was used by spy networks in the Cold War,
          and although classified, many believe it is still implemented today.
        </p>
        <br className="prose-gap" />

        <SectionHeading label="7" title="Hostage and Prisoner Signaling" />
        <p>
          Vietnam War POWs used the code they called &ldquo;Tap Code&rdquo; at the Hanoi Hilton, based on
          Morse principles. Prisoners tapped messages through cell walls using a 5×5 grid of letters. More
          directly, there are reports of hostages blinking Morse code messages to cameras during video
          statements — a behavior now trained for and tracked by intelligence analysts.
        </p>
        <br className="prose-gap" />

        <SectionHeading label="8" title="Lighthouse Identification" />
        <p>
          Many lighthouses around the world identify themselves to mariners today by light-flash patterns,
          many of which are directly derived from Morse code letter sequences. A lighthouse flashing
          &ldquo;· − −&rdquo; repeats the letter W, which those familiar with Morse recognize — offering
          sailors an alternative to GPS and chart plotters when identifying a particular tower.
        </p>
        <br className="prose-gap" />

        <SectionHeading label="9" title="Education and Cognitive Training" />
        <p>
          Educational research uses practice in Morse code as a proxy for language acquisition, pattern
          recognition, and auditory processing. A handful of studies have investigated Morse code as a form
          of cognitive training for older adults. It is more than a communication skill: its structured
          learning and rhythm-based progression stimulates multiple areas in the brain at once.
        </p>
        <br className="prose-gap" />

        <SectionHeading label="10" title="Pop Culture and Puzzles" />
        <p>
          Movies, TV shows (<em>The Walking Dead</em>; <em>Stranger Things</em>), video games, escape rooms,
          and ARGs have all featured the use of Morse tones. It is widely known, but it takes effort to
          decode — which is why puzzle designers use it. It has also become a favorite for tattoos,
          jewelry, and art projects — people encode important words or dates in the dot-dash pattern.
        </p>
        <br className="prose-gap" />

        <SectionHeadingSingle title="The Takeaway" />
        <p>
          One of the reasons Morse code has survived is because it is beautiful: a binary system (on/off,
          dit/dah) that can be transmitted over any channel capable of carrying a signal — light, sound,
          electrical current, or touch. In a complicated world of digital systems, that simplicity is not a
          weakness. It&apos;s a feature that preserves Morse code&apos;s relevance nearly 200 years after its
          invention.
        </p>
      </div>
    );
  }
};
