"use client";

import { useEffect, useRef } from "react";

export function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => { /* The original poster remains if autoplay is unavailable. */ });
    };
    applyPreference();
    preference.addEventListener("change", applyPreference);
    return () => preference.removeEventListener("change", applyPreference);
  }, []);

  return (
    <div className="hero-animation">
      {/* Original animation files and playback loop are preserved. */}
      <video ref={videoRef} autoPlay loop muted playsInline preload="metadata" poster="/godzi_icon.png"
        aria-label="GODZ-i brand animation">
        <source src="/godzi-intro.webm" type="video/webm" />
        <source src="/godzi-intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
