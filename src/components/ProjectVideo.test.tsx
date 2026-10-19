import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ProjectVideo } from '@/components/ProjectVideo';

describe('the demo video', () => {
  it('loads nothing before it is on screen, and offers full screen under it', () => {
    const html = renderToStaticMarkup(
      <figure>
        <ProjectVideo webm="/video/demo.webm" mp4="/video/demo.mp4" poster="/video/demo.webp" label="The demo" caption="Fictional students." fullscreen="Watch full screen" />
      </figure>,
    );
    expect(html).toContain('preload="none"');
    expect(html).toContain('aria-label="The demo"');
    expect(html.indexOf('/video/demo.webm')).toBeLessThan(html.indexOf('/video/demo.mp4'));
    expect(html).toContain('</video><figcaption class="pj-media-caption"><span>Fictional students.</span><button type="button" class="pj-fullscreen">Watch full screen<svg');
  });
});
