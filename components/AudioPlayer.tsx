"use client";

type AudioPlayerProps = {
  wpm: number;
  setWpm: (value: number) => void;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
};

export default function AudioPlayer({
  wpm,
  setWpm,
  isPlaying,
  onPlay,
  onStop
}: AudioPlayerProps) {
  return (
    <div className="card">
      <h3 className="panel-title">Audio Playback</h3>
      <div className="slider-wrap">
        <label htmlFor="wpm">WPM: {wpm}</label>
        <input
          id="wpm"
          type="range"
          min={5}
          max={30}
          value={wpm}
          onChange={(e) => setWpm(Number(e.target.value))}
        />
      </div>
      <div className="controls">
        <button className="btn" onClick={onPlay} disabled={isPlaying}>
          Play
        </button>
        <button className="btn" onClick={onStop} disabled={!isPlaying}>
          Stop
        </button>
      </div>
    </div>
  );
}
