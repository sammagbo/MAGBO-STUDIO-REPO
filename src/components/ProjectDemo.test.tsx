import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ProjectDemo } from '@/components/ProjectDemo';

describe('the demo of a project card', () => {
  it('shows the poster and loads nothing before its button', () => {
    const html = renderToStaticMarkup(
      <figure>
        <ProjectDemo webm="/video/demo.webm" mp4="/video/demo.mp4" poster="/video/demo.webp" label="The demo" caption="Fictional data." button="Watch the demo" />
      </figure>,
    );
    expect(html).toContain('preload="none"');
    expect(html).toContain('poster="/video/demo.webp"');
    expect(html).toContain('aria-label="The demo"');
    expect(html).not.toContain('autoplay');
    expect(html).not.toContain('controls');
    expect(html.indexOf('/video/demo.webm')).toBeLessThan(html.indexOf('/video/demo.mp4'));
    expect(html).toContain('</video><figcaption class="pj-media-caption"><span>Fictional data.</span><button type="button" class="pj-fullscreen">Watch the demo<svg');
  });
});
