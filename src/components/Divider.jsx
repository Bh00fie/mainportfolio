import React from 'react';
import useReveal from '../hooks/useReveal';

// Topographic contour lines that draw themselves as you scroll past — a nod to
// the hiking and map side of things, and a section break with more character
// than a 1px rule. Purely decorative, so it is hidden from assistive tech.
function Divider() {
  const [ref, revealClass] = useReveal();

  // Nested ridge lines. Each is the same shape at a slightly different scale,
  // the way contours stack up a hillside.
  const contours = [
    'M0 40 C 120 40, 170 12, 300 12 S 480 40, 600 40',
    'M0 40 C 130 40, 175 20, 300 20 S 470 40, 600 40',
    'M0 40 C 140 40, 180 28, 300 28 S 460 40, 600 40',
    'M0 40 C 150 40, 185 35, 300 35 S 450 40, 600 40',
  ];

  return (
    <div className={`divider ${revealClass}`} ref={ref} aria-hidden="true">
      <svg viewBox="0 0 600 44" preserveAspectRatio="none" className="dividerSvg">
        {contours.map((d, index) => (
          <path
            key={d}
            d={d}
            className="contour"
            style={{ animationDelay: `${index * 0.12}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

export default Divider;
