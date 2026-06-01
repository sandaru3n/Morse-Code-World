import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "uses-of-morse-code-today",
  title: "10 Surprising Uses of Morse Code in the Modern World",
  description:
    "Morse code isn't just a historical curiosity. From accessibility tech to military survival, here are 10 active uses of Morse code in 2026.",
  excerpt:
    "Think Morse code is obsolete? It's used in accessibility features, military survival training, aviation, and even smartphones. Here's where it still matters.",
  date: "2026-05-15",
  readingTime: 6,
  category: "Modern Uses",
  tags: ["morse code uses", "accessibility", "amateur radio", "military", "modern"],
  coverEmoji: "⚡",
  coverGradient: "from-sky-500 to-blue-600",

  Content: function UsesContent() {
    const uses = [
      {
        n: "1",
        title: "Accessibility and Assistive Technology",
        body: `One of the most meaningful modern uses of Morse code is enabling people with motor disabilities to communicate. Google's Gboard keyboard supports Morse input using two switch inputs (dot and dash), making smartphones usable for people who cannot type conventionally. Eye-tracking systems can interpret blinks as Morse signals. For people with locked-in syndrome or ALS, Morse code can be the difference between silence and communication.`
      },
      {
        n: "2",
        title: "Amateur (Ham) Radio",
        body: `Over 3 million licensed amateur radio operators worldwide still use Morse code (called CW, for Continuous Wave) regularly. CW signals can penetrate interference and weak signal conditions that defeat voice communications, making it invaluable for long-distance contacts and emergency nets. The International Morse Code Preservation Society actively promotes its use.`
      },
      {
        n: "3",
        title: "Military Survival Training",
        body: `Military forces in the US, UK, and many other countries still teach Morse code as part of survival and SERE (Survival, Evasion, Resistance, Escape) training. A downed pilot with only a flashlight or a rock can tap out distress signals. The simplicity and reliability of Morse — requiring no sophisticated equipment — makes it irreplaceable in survival scenarios.`
      },
      {
        n: "4",
        title: "Aviation Navigation: NDBs and VORs",
        body: `Non-Directional Beacons (NDBs) and VOR (VHF Omnidirectional Range) stations used in aviation still transmit their station identifiers in Morse code. Pilots verify they're tuned to the correct navigational beacon by listening for its Morse ID. While GPS has reduced reliance on these beacons, they remain active worldwide and are part of instrument flight training.`
      },
      {
        n: "5",
        title: "Emergency Communications",
        body: `When phone networks, cellular towers, and internet infrastructure fail in disasters, amateur radio operators using Morse code often provide the only reliable communication link. Morse requires minimal power (a small battery can run a transmitter for hours), works at frequencies that travel thousands of miles, and can be decoded even in heavy noise. FEMA and ARES (Amateur Radio Emergency Service) actively use CW operators in emergency planning.`
      },
      {
        n: "6",
        title: "Covert and Intelligence Operations",
        body: `Intelligence agencies and special operations forces still train personnel in Morse code for covert communications. A single agent with a small transmitter can send compressed Morse bursts that are harder to intercept and locate than voice transmissions. Cold War-era spy networks used Morse, and while classified, it's widely believed some current operations do too.`
      },
      {
        n: "7",
        title: "Hostage and Prisoner Signaling",
        body: `The "Tap Code" used by Vietnam War POWs at the Hanoi Hilton was based on Morse principles. Prisoners tapped messages through cell walls using a 5×5 letter grid. More directly, there are documented cases of hostages blinking Morse code messages to cameras during video statements — a behavior now recognized and monitored by intelligence analysts.`
      },
      {
        n: "8",
        title: "Lighthouse Identification",
        body: `Lighthouses worldwide still use light-flash patterns to identify themselves to mariners — and many of those patterns are directly based on Morse code letter sequences. A lighthouse flashing "· − −" repeating is transmitting the letter W. Sailors with a Morse reference can identify which lighthouse they're seeing, providing a backup to GPS and chart plotters.`
      },
      {
        n: "9",
        title: "Education and Cognitive Training",
        body: `Morse code training is used in educational research to study language acquisition, pattern recognition, and auditory processing. Several studies have explored Morse code as a cognitive training tool for aging adults. Its structured, rhythm-based learning activates multiple areas of the brain simultaneously, making it more than just a communication skill.`
      },
      {
        n: "10",
        title: "Pop Culture and Puzzles",
        body: `Morse code appears in movies, TV shows (The Walking Dead, Stranger Things), video games, escape rooms, and ARGs (Alternate Reality Games). Puzzle designers use it because it's widely known but requires active effort to decode. It's also become a popular theme for tattoos, jewelry, and art — people encode meaningful words or dates in the dot-dash pattern.`
      }
    ];

    return (
      <div className="prose-content">
        <p>
          When the last commercial maritime Morse station closed in 1999, many assumed the technology
          was headed for the history books. That prediction turned out to be wrong. Morse code has
          quietly persisted — and in some domains, expanded — into the 21st century. Here are ten
          places you&apos;ll find it actively used today.
        </p>

        {uses.map(({ n, title, body }) => (
          <div key={n}>
            <h2>{n}. {title}</h2>
            <p>{body}</p>
          </div>
        ))}

        <h2>The Takeaway</h2>
        <p>
          Morse code endures because it is elegant: a binary system (on/off, dit/dah) that works
          with any medium capable of producing a signal — light, sound, electrical current, or touch.
          In a world of complex digital systems, that simplicity is not a weakness. It&apos;s a
          feature that keeps Morse code alive and relevant nearly 200 years after its invention.
        </p>
      </div>
    );
  }
};
