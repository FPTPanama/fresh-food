'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para crear efecto parallax en elementos
 * @param {Object} options - Opciones del parallax
 * @param {number} options.speed - Velocidad del parallax (0.5 = 50% más lento, 1.5 = 50% más rápido). Default: 0.5
 * @param {string} options.direction - Dirección del movimiento: 'vertical' | 'horizontal'. Default: 'vertical'
 * @param {string} options.start - Posición de inicio del trigger. Default: 'top bottom'
 * @param {string} options.end - Posición de fin del trigger. Default: 'bottom top'
 */
export const useParallax = (options = {}) => {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);

  const { speed = 0.5, direction = 'vertical', start = 'top bottom', end = 'bottom top' } = options;

  useEffect(() => {
    const element = elementRef.current;
    const trigger = triggerRef.current || element;

    if (!element) return;

    const movement = (1 - speed) * 100;
    const property = direction === 'vertical' ? 'yPercent' : 'xPercent';

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { [property]: -movement / 2 },
        {
          [property]: movement / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [speed, direction, start, end]);

  return { elementRef, triggerRef };
};

export default useParallax;
