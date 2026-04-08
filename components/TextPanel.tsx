type TextPanelProps = {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
};

export default function TextPanel({ value, onChange, readOnly = false }: TextPanelProps) {
  return (
    <div className="card">
      <h2 className="panel-title">Text</h2>
      <textarea
        className="panel-textarea"
        placeholder="Type plain text..."
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
