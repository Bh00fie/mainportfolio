import React, { useEffect, useRef } from 'react';

// A little pixel-art hiker walking a scrolling trail, drawn procedurally on a
// canvas — no sprite sheet, no image requests. Sits above the footer and picks
// up the travelling/hiking thread the contour dividers start.
//
// Drawn at true pixel scale (a ~28px-tall backing store) and upscaled by CSS
// with image-rendering: pixelated, so the pixels stay crisp and square instead
// of being faked with large rectangles.

const LOGICAL_HEIGHT = 28;
const SCALE = 4;
const GROUND = 4; // rows of solid ground at the bottom

// 7x9 body, then three rows of legs that swap per frame. '.' is transparent,
// 'b' body, 's' skin, 'p' pack.
const BODY = [
  '..bbb..',
  '.bbbbb.',
  '..sss..',
  '..sss..',
  '.pbbb..',
  '.pbbbb.',
  '.pbbb..',
  '..bbb..',
  '..bbb..',
];

const LEG_FRAMES = [
  ['..b.b..', '..b.b..', '..b.b..'],
  ['..bbb..', '.b...b.', '.b...b.'],
  ['..b.b..', '..b.b..', '..b.b..'],
  ['..bbb..', '.b...b.', '..b..b.'],
];

function PixelTrail({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const styles = getComputedStyle(document.documentElement);
    const read = (name, fallback) => styles.getPropertyValue(name).trim() || fallback;
    const colours = {
      far: read('--border', '#e2e5ea'),
      near: read('--textMuted', '#5b626b'),
      ground: read('--text', '#16181a'),
      body: read('--text', '#16181a'),
      skin: read('--textMuted', '#5b626b'),
      pack: read('--accent', '#1a56db'),
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    const resize = () => {
      const next = Math.max(1, Math.round(canvas.clientWidth / SCALE));
      if (next === width) return;
      width = next;
      canvas.width = width;
      canvas.height = LOGICAL_HEIGHT;
      ctx.imageSmoothingEnabled = false;
    };
    resize();

    // Two hill layers at different speeds and wavelengths, which is all the
    // parallax this needs to read as depth.
    const hillHeight = (x, offset, amplitude, wavelength, base) =>
      Math.round(base + amplitude * Math.sin((x + offset) / wavelength));

    const drawSprite = (rows, originX, originY) => {
      rows.forEach((row, y) => {
        for (let x = 0; x < row.length; x += 1) {
          const key = row[x];
          if (key === '.') continue;
          ctx.fillStyle =
            key === 'p' ? colours.pack : key === 's' ? colours.skin : colours.body;
          ctx.fillRect(originX + x, originY + y, 1, 1);
        }
      });
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, LOGICAL_HEIGHT);

      // Far hills.
      ctx.fillStyle = colours.far;
      for (let x = 0; x < width; x += 1) {
        const h = hillHeight(x, t * 0.18, 3, 19, 9);
        ctx.fillRect(x, LOGICAL_HEIGHT - GROUND - h, 1, h);
      }

      // Near hills.
      ctx.fillStyle = colours.near;
      for (let x = 0; x < width; x += 1) {
        const h = hillHeight(x, t * 0.5 + 40, 2, 11, 5);
        ctx.fillRect(x, LOGICAL_HEIGHT - GROUND - h, 1, h);
      }

      // Ground: solid earth under a crisp trail edge, so the hills sit on
      // something rather than floating above an empty strip.
      ctx.fillStyle = colours.near;
      ctx.fillRect(0, LOGICAL_HEIGHT - GROUND, width, GROUND);
      ctx.fillStyle = colours.ground;
      ctx.fillRect(0, LOGICAL_HEIGHT - GROUND, width, 1);

      // The hiker holds position while the world scrolls under them.
      const hikerX = Math.round(width * 0.26);
      const surface = LOGICAL_HEIGHT - GROUND - hillHeight(hikerX, t * 0.5 + 40, 2, 11, 5);
      const frame = Math.floor(t / 5) % LEG_FRAMES.length;
      // A one-pixel bob on the mid-stride frames.
      const bob = frame % 2 === 1 ? 1 : 0;
      const originY = surface - (BODY.length + 3) + bob;

      drawSprite(BODY, hikerX, originY);
      drawSprite(LEG_FRAMES[frame], hikerX, originY + BODY.length);
    };

    if (prefersReducedMotion) {
      draw(0);
      return undefined;
    }

    let onScreen = true;
    const visibility = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    visibility.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(0);
    });
    resizeObserver.observe(canvas);

    let t = 0;
    let frameId;
    const tick = () => {
      frameId = requestAnimationFrame(tick);
      if (!onScreen || document.hidden) return;
      t += 0.55;
      draw(t);
    };

    // Paint once up front so the scene is there even in a background tab.
    draw(0);
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      visibility.disconnect();
      resizeObserver.disconnect();
    };
  }, [theme]);

  return <canvas className="pixelTrail" ref={canvasRef} aria-hidden="true" />;
}

export default PixelTrail;
