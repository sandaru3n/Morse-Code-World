import { CHAR_TO_MORSE } from "@/lib/morseMap";

type ReferenceChartProps = {
  onInsert: (char: string) => void;
};

export default function ReferenceChart({ onInsert }: ReferenceChartProps) {
  const entries = Object.entries(CHAR_TO_MORSE);

  return (
    <details className="card">
      <summary className="panel-title">Reference Chart</summary>
      <div className="reference-grid">
        {entries.map(([char, morse]) => (
          <button
            type="button"
            className="reference-cell mono"
            key={char}
            onClick={(e) => {
              e.preventDefault();
              onInsert(char);
            }}
          >
            {char} : {morse}
          </button>
        ))}
      </div>
    </details>
  );
}
