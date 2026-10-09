# Mobile hero animation compatibility — 2026-10-07

The owner reported that a physical Android phone showed the plain GODZ-i poster while the desktop phone preview played the animation. The physical phone is not connected to this workspace, so its exact codec, power-saving and accessibility settings cannot be inspected. The fix addresses verified compatibility and recovery weaknesses without claiming a direct device test.

## Findings and changes

- Original MP4: 1440×1440, 24 fps, H.264 Main profile / level 5.0, 15,769,845 bytes. Original WebM: 1440×1440 VP9, 2,434,784 bytes. Higher-resolution decoding is unnecessary for this small hero and can vary across phones.
- Added public/godzi-intro-mobile.mp4 from the original animation: 640×640, 24 fps, constrained-baseline H.264 level 3.0, yuv420p, no audio, fast-start metadata. The 1,461,163-byte file is 90.7% smaller than the original MP4 and plays as a ten-second loop.
- Added public/godzi-intro-poster.jpg, a frame extracted at 0.5 seconds from the original animation. A blocked or reduced-motion player now shows the animation artwork rather than the unrelated plain logo.
- The mobile-compatible MP4 is the first source. Both original files remain unchanged as fallbacks. Their SHA-256 values are still A846E80602C317615BCE518B85398C20F868BA43D63CCE128E6A6249D2021D6D (MP4) and 3AEE3A80D864FA86E47871F5739EB38E44D5AF68A68AA33A1DB65B57F4C73E71 (WebM).
- The player explicitly mutes before playback, preloads the small video, retries after media readiness, page return and user interaction, and moves to the next source after a decoding error. It avoids repeated starts while already playing, stops cycling after the last fallback, and removes event listeners on unmount.
- Looping, inline playback, the existing layout and the absence of pause/play controls remain. Reduced motion is still respected: it deliberately pauses the video; unrelated taps do not override that preference. A website cannot guarantee autoplay against every phone's browser or power policy.

## Asset generation and references

The derived video and poster were made with a temporary imageio-ffmpeg 0.6.0 tool under ignored .tmp/media-tools. No application dependency or package file changed. Encoding options: scale=640:640:flags=lanczos,fps=24; libx264; baseline; level 3.0; yuv420p; CRF 23; medium preset; no audio; +faststart. Original content and sequence are retained.

Browser-policy references: https://developer.chrome.com/blog/autoplay/ and https://webkit.org/blog/6784/new-video-policies-for-ios/. Temporary tool provenance: https://pypi.org/project/imageio-ffmpeg/.

## Verification

Production build and TypeScript passed. The derived file decoded fully without errors, has fast-start metadata, and the preview served byte-range requests with HTTP 206. The poster loads successfully. Run node scripts/check-hero-playback.mjs to check rejected-autoplay recovery, no duplicate restart, hidden-page behaviour, page return, reduced-motion changes, bounded source fallback and event-listener cleanup.

The browser preview played the derived MP4 with 640×640 decoded dimensions, readyState 4, muted/inline/loop enabled and no video error. Playback crossed the loop boundary from 9.947 seconds to 0.025 seconds. Phone, landscape phone, tablet and desktop checks showed no horizontal overflow; the animation remained playing through the responsive review. No browser console errors appeared. The final published-site check is performed after deployment; this report does not claim direct access to the owner's physical phone.

## Update 2026-10-08: reduced-motion pause removed

The owner's Samsung Galaxy A16 still showed a still frame. The video file played when opened directly on the phone, and the phone's "Remove animations" setting was on. That setting makes Android browsers report prefers-reduced-motion: reduce, and the redesign on 2026-10-07 (commit 34c3e75) had added code that paused the video in that case and ignored taps. The site before the redesign played the video unconditionally, which is why it used to work.

At the owner's request, hero-animation.tsx no longer reads the reduced-motion preference; the loop plays on every device. Muting, retries, source fallback and listener cleanup are unchanged. scripts/check-hero-playback.mjs now asserts playback while the phone requests reduced motion.
