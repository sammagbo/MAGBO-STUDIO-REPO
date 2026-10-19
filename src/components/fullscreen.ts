// The full-screen button of the demo video. On a phone the screens in the video are too small to read, and full
// screen, turned to landscape, gives them about the size they have on a laptop.

// What TypeScript's DOM types leave out: the iPhone's own video player, and lock(), which Chrome on Android keeps for
// full screen.
type PlayerVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };
type LockableOrientation = ScreenOrientation & { lock?: (orientation: 'landscape') => Promise<void> };

const HAVE_METADATA = 1; // HTMLMediaElement.HAVE_METADATA, readable outside the browser too

/**
 * Shows the video full screen, playing: through the Fullscreen API where the browser has it, turned to landscape where
 * the phone allows it; on an iPhone, in its own player once the video knows its size, and through the player's controls
 * before that.
 */
export function openFullscreen(video: PlayerVideo, orientation?: ScreenOrientation): void {
  // a refused play() keeps the poster, and full screen still opens
  video.play().catch(() => undefined);
  if (typeof video.requestFullscreen === 'function') {
    video
      .requestFullscreen()
      .then(() => (orientation as LockableOrientation | undefined)?.lock?.('landscape'))
      .catch(() => undefined);
    return;
  }
  if (typeof video.webkitEnterFullscreen === 'function' && video.readyState >= HAVE_METADATA) {
    try {
      video.webkitEnterFullscreen();
      return;
    } catch {
      // the player refused: its controls below still have their own full-screen button
    }
  }
  video.controls = true;
}
