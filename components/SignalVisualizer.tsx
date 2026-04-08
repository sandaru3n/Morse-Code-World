type SignalVisualizerProps = {
  morse: string;
  activeIndex: number | null;
};

export default function SignalVisualizer({ morse, activeIndex }: SignalVisualizerProps) {
  const symbols = morse.split("").filter((char) => char === "." || char === "-");

  return (
    <div className="card">
      <h3 className="panel-title">Signal Visualizer</h3>
      <div className="signal">
        {symbols.length === 0 ? (
          <span>Nothing to visualize yet.</span>
        ) : (
          symbols.map((char, index) => (
            <div
              key={`${char}-${index}`}
              className={`symbol ${char === "." ? "dot" : "dash"} ${
                index === activeIndex ? "active" : ""
              }`}
            />
          ))
        )}
      </div>
    </div>
  );
}
