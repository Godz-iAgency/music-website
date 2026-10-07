"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => { /* Playback remains available through the control. */ });
    };
    applyPreference();
    preference.addEventListener("change", applyPreference);
    return () => preference.removeEventListener("change", applyPreference);
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  }

  return (
    <div className="hero-animation">
      {/* Original animation files and playback loop are preserved. */}
      <video ref={videoRef} loop muted playsInline preload="metadata" poster="/godzi_icon.png"
        aria-label="GODZ-i brand animation"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <source src="/godzi-intro.webm" type="video/webm" />
        <source src="/godzi-intro.mp4" type="video/mp4" />
      </video>
      <button type="button" className="animation-control" onClick={togglePlayback}
        aria-label={playing ? "Pause brand animation" : "Play brand animation"}>
        {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        <span>{playing ? "Pause" : "Play"}</span>
      </button>
    </div>
  );
}
