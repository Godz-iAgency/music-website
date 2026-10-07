import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import * as jsxRuntime from "react/jsx-runtime";

function eventTarget() {
  const listeners = new Map();
  return {
    addEventListener(type, callback) {
      if (!listeners.has(type)) listeners.set(type, new Set());
      listeners.get(type).add(callback);
    },
    removeEventListener(type, callback) { listeners.get(type)?.delete(callback); },
    emit(type) { for (const callback of listeners.get(type) || []) callback(); },
    listenerCount() { return [...listeners.values()].reduce((n, set) => n + set.size, 0); },
  };
}

async function flushPlayback() { await new Promise(setImmediate); }

async function check() {
  const video = Object.assign(eventTarget(), {
    paused: true, muted: false, defaultMuted: false, rejected: true,
    currentSrc: "/godzi-intro-mobile.mp4", src: "", plays: 0, loads: 0,
    play() {
      this.plays++;
      if (this.rejected) return Promise.reject(new Error("Autoplay blocked"));
      this.paused = false;
      return Promise.resolve();
    },
    pause() { this.paused = true; },
    load() { this.loads++; this.currentSrc = this.src; this.paused = true; },
  });
  const preference = Object.assign(eventTarget(), {matches: false});
  const document = Object.assign(eventTarget(), {hidden: false});
  const window = Object.assign(eventTarget(), {matchMedia: () => preference});
  let cleanup;
  const sandboxModule = {exports: {}};
  const source = fs.readFileSync("src/components/hero-animation.tsx", "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX},
  }).outputText;
  vm.runInNewContext(compiled, {
    module: sandboxModule, exports: sandboxModule.exports, window, document,
    require(name) {
      if (name === "react") return {useRef: () => ({current: video}), useEffect: effect => {cleanup = effect();}};
      if (name === "react/jsx-runtime") return jsxRuntime;
      throw new Error(`Unexpected component import: ${name}`);
    },
  });
  sandboxModule.exports.HeroAnimation();
  await flushPlayback();
  assert.equal(video.plays, 1);
  assert.ok(video.muted && video.defaultMuted, "Mute before attempting autoplay");

  video.rejected = false;
  document.emit("pointerdown");
  await flushPlayback();
  assert.ok(!video.paused, "Recover a rejected autoplay on user interaction");
  const playingAttempts = video.plays;
  video.emit("canplay");
  document.emit("keydown");
  assert.equal(video.plays, playingAttempts, "Do not restart a playing loop");

  video.pause();
  document.hidden = true;
  video.emit("canplay");
  assert.equal(video.plays, playingAttempts, "Do not start in a hidden document");
  document.hidden = false;
  document.emit("visibilitychange");
  await flushPlayback();
  assert.ok(!video.paused, "Resume on return to the page");

  preference.matches = true;
  preference.emit("change");
  assert.ok(video.paused, "Respect reduced motion");
  document.emit("pointerdown");
  assert.ok(video.paused, "An unrelated tap must not override reduced motion");
  preference.matches = false;
  preference.emit("change");
  await flushPlayback();
  assert.ok(!video.paused, "Resume when the motion preference permits playback");

  video.emit("error");
  await flushPlayback();
  assert.equal(video.src, "/godzi-intro.webm", "Recover mobile MP4 decoding errors");
  video.emit("error");
  await flushPlayback();
  assert.equal(video.src, "/godzi-intro.mp4", "Try the preserved original MP4 last");
  video.emit("error");
  assert.equal(video.loads, 2, "Do not loop through failed sources indefinitely");

  cleanup();
  assert.equal(video.listenerCount() + preference.listenerCount() + document.listenerCount() + window.listenerCount(), 0);
  console.log("Hero playback recovery, preferences, source fallback, and cleanup passed.");
}

check().catch(error => { console.error(error); process.exitCode = 1; });
