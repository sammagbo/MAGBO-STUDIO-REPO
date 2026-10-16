import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ErrorBoundary } from '@/components/ErrorBoundary';

describe('the error screen', () => {
  it('replaces a crashed page with a plain message and a reload button', () => {
    const boundary = new ErrorBoundary({ children: 'original content' });
    boundary.state = ErrorBoundary.getDerivedStateFromError();
    const html = renderToStaticMarkup(<>{boundary.render()}</>);
    expect(html).toContain('The page could not be displayed.');
    expect(html).toContain('Reload the page</button>');
    expect(html).not.toContain('original content');
  });

  it('renders the page itself while nothing has crashed', () => {
    const boundary = new ErrorBoundary({ children: 'original content' });
    expect(renderToStaticMarkup(<>{boundary.render()}</>)).toBe('original content');
  });
});
