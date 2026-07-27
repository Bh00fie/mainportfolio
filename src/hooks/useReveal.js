import { useEffect, useRef, useState } from 'react';

// Fades a section in the first time it scrolls into view, then stops observing.
// Under prefers-reduced-motion it marks the section revealed immediately, so the
// content is never hidden behind an animation that will not run.
export default function useReveal() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, revealed ? 'reveal isRevealed' : 'reveal'];
}
