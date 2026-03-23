import { useEffect } from 'react';

/**
 * useScrollReveal
 * Robustly reveals .reveal elements using IntersectionObserver.
 * Uses requestAnimationFrame + setTimeout to ensure the DOM
 * is fully painted before observing — fixes white-page on mount.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const init = () => {
      const revealEls = document.querySelectorAll('.reveal');

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              obs.unobserve(e.target); // stop watching once revealed
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      revealEls.forEach((el) => obs.observe(el));

      // Hero elements: immediate staggered reveal
      document.querySelectorAll('#hero .reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 100 + i * 200);
      });

      // Safety fallback: force-reveal anything still hidden after 1.5s
      setTimeout(() => {
        document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
          el.classList.add('in');
        });
      }, 1500);

      return obs;
    };

    // Wait for next paint before observing so elements are in the DOM
    let obs;
    const raf = requestAnimationFrame(() => {
      obs = init();
    });

    return () => {
      cancelAnimationFrame(raf);
      if (obs) obs.disconnect();
    };
  }, []);
};

export default useScrollReveal;
