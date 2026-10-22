import { useEffect, useRef } from 'react';
import { openFullscreen } from '@/components/fullscreen';

interface ProjectDemoProps {
      webm: string;
      mp4: string;
      poster: string;
      label: string;
      caption: string;
      button: string;
}

const PlayIcon = () => (
      <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3.5 2.2v7.6L9.8 6z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
);

// The demo of a project card. A card is too narrow to read the screens of a video, so it shows the poster, still, and a
// button that plays the video full screen: nothing loads before that click, on the button or on the poster. Leaving
// full screen stops the video and brings the poster back.
export const ProjectDemo = ({ webm, mp4, poster, label, caption, button }: ProjectDemoProps) => {
      const ref = useRef<HTMLVideoElement>(null);

      useEffect(() => {
            const video = ref.current;
            if (!video) return;
            let shown = false;
            const stop = () => {
                  shown = false;
                  video.pause();
                  video.load(); // back to the poster, until the next play
            };
            const change = () => {
                  if (document.fullscreenElement === video) shown = true;
                  else if (shown) stop();
            };
            document.addEventListener('fullscreenchange', change);
            video.addEventListener('webkitendfullscreen', stop); // the iPhone's own player
            return () => {
                  document.removeEventListener('fullscreenchange', change);
                  video.removeEventListener('webkitendfullscreen', stop);
            };
      }, []);

      const open = () => {
            if (ref.current) openFullscreen(ref.current, window.screen?.orientation);
      };
      // a click on the poster opens it too, unless the player shows its own controls: then the click is theirs
      const openFromPoster = () => {
            if (ref.current && !ref.current.controls) open();
      };

      return (
            <>
                  <video ref={ref} className="pj-video" poster={poster} muted loop playsInline preload="none" aria-label={label} onClick={openFromPoster}>
                        <source src={webm} type="video/webm" />
                        <source src={mp4} type="video/mp4" />
                  </video>
                  <figcaption className="pj-media-caption">
                        <span>{caption}</span>
                        <button type="button" className="pj-fullscreen" onClick={open}>
                              {button}
                              <PlayIcon />
                        </button>
                  </figcaption>
            </>
      );
};
