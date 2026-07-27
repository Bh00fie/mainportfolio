import React, { useEffect, useRef } from 'react';

// A pixel orbit ring around the headshot, with a small satellite tracking it.
// Same visual language as the footer trail: a tiny backing store upscaled by
// CSS so the pixels stay square, colours read from the theme variables.
//
// The satellite is a nod to the aerospace half of the background — the MEng
// dissertation was on solid lubrication in space.

const LOGICAL = 64; // square canvas, in logical pixels
const SCALE = 4;
const RING_RADIUS = 27;
const DOT_COUNT = 40;

// 5x3 satellite: panels either side of a body.
const SATELLITE = ['p.b.p', 'pbbbp', 'p.b.p'];

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

    const draw = (t) => {
      ctx.clearRect(0, 0, LOGICAL, LOGICAL);

      // Marching dots around the ring. Every fifth one is accented so the
      // rotation is legible without the whole ring shouting.
      for (let i = 0; i < DOT_COUNT; i += 1) {
        const angle = (i / DOT_COUNT) * Math.PI * 2 + t * 0.01;
        const x = Math.round(centre + Math.cos(angle) * RING_RADIUS);
        const y = Math.round(centre + Math.sin(angle) * RING_RADIUS);
        ctx.fillStyle = i % 5 === 0 ? colours.accent : colours.dot;
        ctx.fillRect(x, y, 1, 1);
      }

      // Satellite running the same orbit, a little faster than the dots.
      const satAngle = t * 0.022;
      const sx = Math.round(centre + Math.cos(satAngle) * RING_RADIUS) - 2;
      const sy = Math.round(centre + Math.sin(satAngle) * RING_RADIUS) - 1;
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

    let t = 0;
    let frameId;
    const tick = () => {
      frameId = requestAnimationFrame(tick);
      if (!onScreen || document.hidden) return;
      t += 1;
      draw(t);
    };

    draw(0);
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      visibility.disconnect();
    };
  }, [theme]);

  return <canvas className="pixelOrbit" ref={canvasRef} aria-hidden="true" />;
}

export default PixelOrbit;
