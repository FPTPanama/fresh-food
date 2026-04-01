'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Componente que anima texto al montar (sin ScrollTrigger).
 * Ideal para contenido en el hero/top que debe aparecer al cargar la página.
 *
 * @param {React.ReactNode} children - Contenido a animar
 * @param {Object} from - Propiedades iniciales. Default: { opacity: 0, y: 40 }
 * @param {Object} to - Propiedades finales (opcional)
 * @param {number} duration - Duración en segundos. Default: 0.8
 * @param {number} delay - Retraso antes de la animación. Default: 0
 * @param {string} ease - Ease. Default: 'power3.out'
 * @param {string} className - Clases adicionales
 * @param {Object} style - Estilos inline
 */
export const TextAnimate = ({
  children,
  from = { opacity: 0, y: 40 },
  to,
  duration = 0.8,
  delay = 0,
  ease = 'power3.out',
  className = '',
  style = {},
}) => {
  const ref = useRef(null);

  const initialStyle = {
    opacity: from?.opacity ?? 0,
    transform: `translate(${from?.x ?? 0}px, ${from?.y ?? 40}px)${from?.scale !== undefined ? ` scale(${from.scale})` : ''}`,
    ...style,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const toState = to ?? {
      opacity: 1,
      x: 0,
      y: 0,
      ...(from?.scale !== undefined && { scale: 1 }),
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(element, from, {
        ...toState,
        duration,
        delay,
        ease,
      });
    });

    return () => ctx.revert();
  }, [from, to, duration, delay, ease]);

  return (
    <div ref={ref} className={`relative ${className}`.trim()} style={initialStyle}>
      {children}
    </div>
  );
};
