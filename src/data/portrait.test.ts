import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { PORTRAIT_ALT, PORTRAIT_FILES, PORTRAIT_SIZES, PORTRAIT_SRCSET } from '@/data/portrait';

const languages = ['fr', 'pt', 'en'] as const;

// A WebP file is a RIFF list of chunks. The portrait must hold one lossy frame (VP8) and nothing else: an EXIF or XMP
// chunk would carry the camera, the date of the photo and maybe a place. The frame header gives the size.
function readWebp(src: string) {
  const data = readFileSync(join(process.cwd(), 'public', src));
  const chunks: string[] = [];
  for (let at = 12; at + 8 <= data.length; ) {
    const size = data.readUInt32LE(at + 4);
    chunks.push(data.toString('latin1', at, at + 4));
    at += 8 + size + (size % 2);
  }
  return {
    riff: data.toString('latin1', 0, 4) + data.toString('latin1', 8, 12),
    chunks,
    width: data.readUInt16LE(26) & 0x3fff,
    height: data.readUInt16LE(28) & 0x3fff,
    bytes: data.length,
  };
}

describe('the portrait in the About section', () => {
  it('ships each file as a WebP of the size written in portrait.ts, in 4:5', () => {
    for (const file of PORTRAIT_FILES) {
      expect(existsSync(join(process.cwd(), 'public', file.src)), file.src).toBe(true);
      const webp = readWebp(file.src);
      expect(webp.riff, file.src).toBe('RIFFWEBP');
      expect([webp.width, webp.height], file.src).toEqual([file.width, file.height]);
      expect(file.height * 4, file.src).toBe(file.width * 5);
    }
  });

  it('carries no metadata: one image frame, no EXIF, no XMP', () => {
    for (const file of PORTRAIT_FILES) expect(readWebp(file.src).chunks, file.src).toEqual(['VP8 ']);
  });

  it('keeps each file within its size budget', () => {
    for (const file of PORTRAIT_FILES) expect(readWebp(file.src).bytes, file.src).toBeLessThanOrEqual(120_000);
  });

  it('offers the files smallest first, with the widths the CSS gives the portrait', () => {
    expect(PORTRAIT_FILES.map((file) => file.width)).toEqual([480, 960]);
    expect(PORTRAIT_SRCSET).toBe('/about/sammy-magbo-480.webp 480w, /about/sammy-magbo-960.webp 960w');
    const css = readFileSync(join(process.cwd(), 'src/components/AboutSection.css'), 'utf8');
    expect(css).toMatch(/\.ab-portrait \{[^}]*width: min\(100%, 360px\)/);
    expect(css).toMatch(/\.ab-portrait \{[^}]*width: min\(80%, 300px\)/);
    expect(PORTRAIT_SIZES).toBe('(max-width: 600px) 300px, 360px');
  });

  it('names Sam in the alternative text of each language', () => {
    for (const language of languages) expect(PORTRAIT_ALT[language]).toMatch(/^(Portrait de|Retrato de|Portrait of) Sammy K\. Magbo$/);
    expect(new Set(languages.map((language) => PORTRAIT_ALT[language])).size).toBe(3);
  });
});
