import { useEffect, useRef, useState } from 'react';

interface ProjectVideoProps {
      webm: string;
      mp4: string;
      poster: string;
      label: string;
}

// The demo of MAGBO Access Control, silent and looped: it loads once it comes on screen and plays only while it stays there.
// Visitors who ask their system for less motion get the still poster and the player's own controls.
export const ProjectVideo = ({ webm, mp4, poster, label }: ProjectVideoProps) => {
      const ref = useRef<HTMLVideoElement>(null);
      const [still] = useState(() => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true);

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

      return (
            <video ref={ref} className="pj-video" poster={poster} muted loop playsInline preload="none" controls={still} aria-label={label}>
                  <source src={webm} type="video/webm" />
                  <source src={mp4} type="video/mp4" />
            </video>
      );
};
