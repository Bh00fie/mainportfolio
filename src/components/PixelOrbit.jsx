import React, { useEffect, useRef } from 'react';

// A pixel orbit ring around the headshot, with a small satellite tracking it.
// Same visual language as the footer trail: a tiny backing store upscaled by
// CSS so the pixels stay square, colours read from the theme variables.
//
// The satellite is a nod to the aerospace half of the background — the MEng
// dissertation was on solid lubrication in space.
//
// Motion is quantised in BOTH space and time, which is what stops it looking
// like it is shaking. Rounding a continuously-rotating angle onto a 64px grid
// every frame makes each dot snap erratically between whole pixels, and at 4x
// upscale one of those is a visible 4px jump. Instead the ring's pixels are
// computed once into an ordered list, and everything advances by whole steps
// along that list on a slow tick — so each dot moves exactly one pixel at a
// time, evenly, the way hand-drawn pixel animation does.

const LOGICAL = 64;
const RING_RADIUS = 27;
const DOT_SPACING = 4; // draw a dot every Nth pixel of the ring
const ACCENT_EVERY = 5; // every Nth dot picks up the accent colour
const TICK_MS = 90;

// 5x3 satellite: solar panels either side of a body.
const SATELLITE = ['p.b.p', 'pbbbp', 'p.b.p'];

// Walk a circle once and keep each distinct integer pixel, in order. The result
// is a closed loop of adjacent pixels — stepping through it gives perfectly even
// motion with no rounding jitter.
function buildRing(radius) {
  const points = [];
  const samples = Math.ceil(2 * Math.PI * radius * 4);
  let last = null;

  for (let i = 0; i < samples; i += 1) {
    const angle = (i / samples) * Math.PI * 2;
    const x = Math.round(Math.cos(angle) * radius);
    const y = Math.round(Math.sin(angle) * radius);
    if (!last || last[0] !== x || last[1] !== y) {
      points.push([x, y]);
      last = [x, y];
    }
  }

  // The walk closes on itself; drop the duplicate.
  const first = points[0];
  const final = points[points.length - 1];
  if (points.length > 1 && first[0] === final[0] && first[1] === final[1]) {
    points.pop();
  }

  return points;
}

function PixelOrbit({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    canvas.width = LOGICAL;
    canvas.height = LOGICAL;
    ctx.imageSmoothingEnabled = false;

    const styles = getComputedStyle(document.documentElement);
    const read = (name, fallback) => styles.getPropertyValue(name).trim() || fallback;
    const colours = {
      dot: read('--border', '#e2e5ea'),
      accent: read('--accent', '#1a56db'),
      body: read('--textMuted', '#5b626b'),
    };

    const centre = LOGICAL / 2;
    const ring = buildRing(RING_RADIUS);
    const dotCount = Math.floor(ring.length / DOT_SPACING);

    const draw = (tick) => {
      ctx.clearRect(0, 0, LOGICAL, LOGICAL);

      // Dots advance one ring pixel every other tick, so they crawl rather than
      // race, and always land exactly on a pixel the ring actually occupies.
      const dotOffset = Math.floor(tick / 2);
      for (let i = 0; i < dotCount; i += 1) {
        const [x, y] = ring[(i * DOT_SPACING + dotOffset) % ring.length];
        ctx.fillStyle = (i + dotOffset) % ACCENT_EVERY === 0 ? colours.accent : colours.dot;
        ctx.fillRect(centre + x, centre + y, 1, 1);
      }

      // Satellite runs the same loop, one pixel per tick — still twice the
      // dots' pace, but an unhurried orbit rather than a lap.
      const [sxRaw, syRaw] = ring[tick % ring.length];
      const sx = centre + sxRaw - 2;
      const sy = centre + syRaw - 1;
      SATELLITE.forEach((row, y) => {
        for (let x = 0; x < row.length; x += 1) {
          if (row[x] === '.') continue;
          ctx.fillStyle = row[x] === 'p' ? colours.accent : colours.body;
          ctx.fillRect(sx + x, sy + y, 1, 1);
        }
      });
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

    // rAF drives the loop so it stays in step with the display and stops in
    // background tabs, but a frame is only drawn when the tick advances.
    let tick = 0;
    let lastAdvance = 0;
    let frameId;

    const loop = (now) => {
      frameId = requestAnimationFrame(loop);
      if (!onScreen || document.hidden) return;
      if (now - lastAdvance < TICK_MS) return;
      lastAdvance = now;
      tick += 1;
      draw(tick);
    };

    draw(0);
    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      visibility.disconnect();
    };
  }, [theme]);

  return <canvas className="pixelOrbit" ref={canvasRef} aria-hidden="true" />;
}

export default PixelOrbit;
