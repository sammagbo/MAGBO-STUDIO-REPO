// Renders og-image.html to public/og-image.png (1200 x 630) with headless Chrome, over the DevTools protocol:
// the command-line --screenshot leaves the bottom of the image blank, because its viewport is shorter than the window.
// Needs Node 22+ (global WebSocket) and Chrome or Chromium on the PATH, or CHROME=/path/to/chrome.
import { execFileSync, spawn } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const WIDTH = 1200;
const HEIGHT = 630;
const here = dirname(fileURLToPath(import.meta.url));
const source = pathToFileURL(join(here, 'og-image.html')).href;
const output = resolve(here, '../../public/og-image.png');

const findChrome = () => {
  if (process.env.CHROME) return process.env.CHROME;
  for (const name of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
    try {
      return execFileSync('which', [name], { encoding: 'utf8' }).trim();
    } catch {
      // not installed under this name
    }
  }
  throw new Error('Chrome or Chromium not found: set CHROME to its path.');
};

const profile = mkdtempSync(join(tmpdir(), 'og-image-'));
const chrome = spawn(findChrome(), [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
  '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
], { stdio: ['ignore', 'ignore', 'pipe'] });
const exited = new Promise((done) => chrome.once('exit', done));

// Chrome prints "DevTools listening on ws://…" on stderr once it is ready.
const browserUrl = await new Promise((done, fail) => {
  let log = '';
  chrome.stderr.on('data', (chunk) => {
    log += chunk;
    const match = log.match(/DevTools listening on (ws:\/\/\S+)/);
    if (match) done(match[1]);
  });
  exited.then((code) => fail(new Error(`Chrome exited (${code}) before DevTools was ready:\n${log}`)));
});

const socket = new WebSocket(browserUrl);
await new Promise((done, fail) => {
  socket.onopen = done;
  socket.onerror = () => fail(new Error('could not connect to Chrome'));
});

let lastId = 0;
const replies = new Map();
const events = [];
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  const reply = replies.get(message.id);
  if (reply) {
    replies.delete(message.id);
    if (message.error) reply.fail(new Error(`${reply.method}: ${message.error.message}`));
    else reply.done(message.result);
  } else {
    for (const listener of [...events]) listener(message);
  }
};
const send = (method, params = {}, sessionId) => new Promise((done, fail) => {
  const id = ++lastId;
  replies.set(id, { method, done, fail });
  socket.send(JSON.stringify({ id, method, params, sessionId }));
});
const once = (method, sessionId) => new Promise((done) => {
  const listener = (message) => {
    if (message.method !== method || message.sessionId !== sessionId) return;
    events.splice(events.indexOf(listener), 1);
    done(message.params);
  };
  events.push(listener);
});

try {
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  await send('Page.enable', {}, sessionId);
  await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false }, sessionId);
  const loaded = once('Page.loadEventFired', sessionId);
  await send('Page.navigate', { url: source }, sessionId);
  await loaded;

  // The two fonts come from node_modules: stop if they did not load, rather than write an image in a fallback font.
  const { result } = await send('Runtime.evaluate', {
    expression: 'document.fonts.ready.then(() => [...document.fonts].filter((font) => font.status === "loaded").length)',
    awaitPromise: true,
  }, sessionId);
  if (result.value !== 2) throw new Error(`expected 2 fonts loaded, got ${result.value}: run npm ci first`);

  const { data } = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT, scale: 1 } }, sessionId);
  writeFileSync(output, Buffer.from(data, 'base64'));
  console.log(`public/og-image.png written (${WIDTH} x ${HEIGHT})`);
} finally {
  // Ask Chrome to close, so it flushes its temporary profile; kill it if it is still running after 5 s.
  const timer = setTimeout(() => chrome.kill(), 5000);
  try {
    socket.send(JSON.stringify({ id: ++lastId, method: 'Browser.close' }));
  } catch {
    chrome.kill();
  }
  await exited;
  clearTimeout(timer);
  socket.close();
  try {
    rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  } catch {
    // a leftover temporary profile is harmless
  }
}
