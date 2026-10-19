import { describe, expect, it, vi } from 'vitest';
import { openFullscreen } from '@/components/fullscreen';

// lets the promises of play(), requestFullscreen() and lock() settle
const settle = () => new Promise((done) => setTimeout(done, 0));

const video = <T extends object>(fields: T) => ({ play: vi.fn(() => Promise.resolve()), readyState: 0, controls: false, ...fields });
const asVideo = (fake: object) => fake as unknown as HTMLVideoElement;
const asOrientation = (fake: object) => fake as unknown as ScreenOrientation;

describe('the full-screen button of the demo video', () => {
  it('plays the video full screen and turns a phone to landscape', async () => {
    const lock = vi.fn(() => Promise.resolve());
    const fake = video({ requestFullscreen: vi.fn(() => Promise.resolve()) });
    openFullscreen(asVideo(fake), asOrientation({ lock }));
    await settle();
    expect(fake.play).toHaveBeenCalledOnce();
    expect(fake.requestFullscreen).toHaveBeenCalledOnce();
    expect(lock).toHaveBeenCalledWith('landscape');
    expect(fake.controls).toBe(false);
  });

  it('stays quiet when the browser refuses full screen, the landscape lock or the playback', async () => {
    const lock = vi.fn(() => Promise.reject(new Error('not supported')));
    const refused = video({ play: vi.fn(() => Promise.reject(new Error('no autoplay'))), requestFullscreen: vi.fn(() => Promise.reject(new Error('denied'))) });
    openFullscreen(asVideo(refused), asOrientation({ lock }));
    const unlocked = video({ requestFullscreen: vi.fn(() => Promise.resolve()) });
    openFullscreen(asVideo(unlocked), asOrientation({ lock }));
    await settle();
    expect(lock).toHaveBeenCalledOnce();
  });

  it('opens the iPhone player once the video knows its size', () => {
    const fake = video({ webkitEnterFullscreen: vi.fn(), readyState: 1 });
    openFullscreen(asVideo(fake));
    expect(fake.webkitEnterFullscreen).toHaveBeenCalledOnce();
    expect(fake.controls).toBe(false);
  });

  it('shows the player controls on an iPhone before the video has loaded, or when its player refuses', () => {
    const early = video({ webkitEnterFullscreen: vi.fn() });
    openFullscreen(asVideo(early));
    expect(early.webkitEnterFullscreen).not.toHaveBeenCalled();
    expect(early.controls).toBe(true);
    const refusing = video({ webkitEnterFullscreen: vi.fn(() => { throw new Error('InvalidStateError'); }), readyState: 4 });
    openFullscreen(asVideo(refusing));
    expect(refusing.controls).toBe(true);
  });
});
