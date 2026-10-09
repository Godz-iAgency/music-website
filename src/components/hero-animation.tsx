"use client";

import { useEffect, useRef } from "react";

export function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let playAttempt: Promise<void> | null = null;
    let active = true;
    // The brand loop plays on every device, as it did before 2026-10-07, including phones set to remove animations.
    const startPlayback = () => {
      if (document.hidden || !video.paused || playAttempt) return;
      // Set both properties before play(), including browsers that hydrate muted late.
      video.defaultMuted = true;
      video.muted = true;
      playAttempt = video.play().catch(() => {
        // Retry on readiness, return to the page, or the next user interaction.
      }).finally(() => { playAttempt = null; });
    };
    const recoverSource = () => {
      if (!active) return;
      const source = video.currentSrc;
      if (source.includes("godzi-intro-mobile.mp4")) video.src = "/godzi-intro.webm";
      else if (source.includes("godzi-intro.webm")) video.src = "/godzi-intro.mp4";
      else return;
      video.load();
      startPlayback();
    };
    startPlayback();
    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    video.addEventListener("error", recoverSource);
    document.addEventListener("visibilitychange", startPlayback);
    window.addEventListener("pageshow", startPlayback);
    document.addEventListener("pointerdown", startPlayback, { passive: true });
    document.addEventListener("keydown", startPlayback);
    return () => {
      active = false;
      video.removeEventListener("loadeddata", startPlayback);
      video.removeEventListener("canplay", startPlayback);
      video.removeEventListener("error", recoverSource);
      document.removeEventListener("visibilitychange", startPlayback);
      window.removeEventListener("pageshow", startPlayback);
      document.removeEventListener("pointerdown", startPlayback);
      document.removeEventListener("keydown", startPlayback);
    };
  }, []);

  return (
    <div className="hero-animation">
      {/* The mobile-compatible copy comes first; both originals remain as fallbacks. */}
      <video ref={videoRef} autoPlay loop muted playsInline preload="auto" poster="/godzi-intro-poster.jpg"
        aria-label="GODZ-i brand animation">
        <source src="/godzi-intro-mobile.mp4" type="video/mp4" />
        <source src="/godzi-intro.webm" type="video/webm" />
        <source src="/godzi-intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
