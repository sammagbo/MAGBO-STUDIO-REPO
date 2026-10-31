import type { Language } from '@/data/translations';

// Sam's portrait in the About section (src/components/AboutSection.tsx), approved on the preview on 31/10/2026: photo 6
// of the studio session of 13/03/2026, cropped to 4:5 and in black and white. The files are in public/about; the test
// checks that each one is a WebP of the size written here and carries no metadata (no EXIF, no XMP).

export interface PortraitFile {
      src: string;
      width: number;
      height: number;
}

/** smallest first: the first one is also the plain src of the image */
export const PORTRAIT_FILES: PortraitFile[] = [
      { src: '/about/sammy-magbo-480.webp', width: 480, height: 600 },
      { src: '/about/sammy-magbo-960.webp', width: 960, height: 1200 },
];

export const PORTRAIT_SRCSET = PORTRAIT_FILES.map((file) => `${file.src} ${file.width}w`).join(', ');

/** the widest the portrait gets on screen, as AboutSection.css sets it: 300px on a phone, 360px elsewhere */
export const PORTRAIT_SIZES = '(max-width: 600px) 300px, 360px';

export const PORTRAIT_ALT: Record<Language, string> = {
      en: 'Portrait of Sammy K. Magbo',
      pt: 'Retrato de Sammy K. Magbo',
      fr: 'Portrait de Sammy K. Magbo',
};
