import { useEffect, useRef, useState } from 'react';
import { openFullscreen } from '@/components/fullscreen';

interface ProjectVideoProps {
      webm: string;
      mp4: string;
      poster: string;
      label: string;
      caption: string;
      fullscreen: string;
}

// navigator.connection, from Chrome and Edge, which TypeScript's DOM types leave out
type DataSaving = Navigator & { connection?: { saveData?: boolean } };

const ExpandIcon = () => (
      <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M1.5 4.5v-3h3M7.5 1.5h3v3M10.5 7.5v3h-3M4.5 10.5h-3v-3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
);

// The demo of MAGBO Access Control, silent and looped: it loads once it comes on screen and plays only while it stays there.
// Visitors who ask their system for less motion, or their browser for less data, get the still poster and the player's
// own controls. Under the video, the caption and a button that shows it full screen, where a phone can read it.
export const ProjectVideo = ({ webm, mp4, poster, label, caption, fullscreen }: ProjectVideoProps) => {
      const ref = useRef<HTMLVideoElement>(null);
      const [still] = useState(
            () =>
                  typeof window !== 'undefined' &&
                  (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true || (navigator as DataSaving).connection?.saveData === true),
      );

      useEffect(() => {
            const video = ref.current;
            if (!video || still || typeof IntersectionObserver === 'undefined') return;
            const observer = new IntersectionObserver(
                  ([entry]) => {
                        // a refused play() keeps the poster on screen, which is enough
                        if (entry.isIntersecting) video.play().catch(() => undefined);
                        else video.pause();
                  },
                  { threshold: 0.25 },
            );
            observer.observe(video);
            return () => observer.disconnect();
      }, [still]);

      const enlarge = () => {
            if (ref.current) openFullscreen(ref.current, window.screen?.orientation);
      };

      return (
            <>
                  <video ref={ref} className="pj-video" poster={poster} muted loop playsInline preload="none" controls={still} aria-label={label}>
                        <source src={webm} type="video/webm" />
                        <source src={mp4} type="video/mp4" />
                  </video>
                  <figcaption className="pj-media-caption">
                        <span>{caption}</span>
                        <button type="button" className="pj-fullscreen" onClick={enlarge}>
                              {fullscreen}
                              <ExpandIcon />
                        </button>
                  </figcaption>
            </>
      );
};
