type MorsePanelProps = {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
};

export default function MorsePanel({ value, onChange, readOnly = false }: MorsePanelProps) {
  return (
    <div className="card">
      <h2 className="panel-title">Morse</h2>
      <textarea
        className="panel-textarea mono"
        placeholder="Use . and - with spaces between letters, / between words"
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
