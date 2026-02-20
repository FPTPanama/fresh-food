'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Componente reutilizable que anima children con GSAP .from cuando entra en viewport
 *
 * @param {React.ReactNode} children - Contenido a animar
 * @param {string} start - Posición de inicio del ScrollTrigger. Default: 'top 85%' (dispara cuando el top del elemento llega al 85% del viewport)
 * @param {Object} from - Propiedades iniciales de gsap.from (antes de la animación). Default: { opacity: 0, y: 40 }
 * @param {Object} to - Propiedades finales (opcional, para fromTo). Si no se pasa, usa valores por defecto
 * @param {number} duration - Duración de la animación en segundos. Default: 0.8
 * @param {number} delay - Retraso antes de la animación. Default: 0
 * @param {string} ease - Ease de la animación. Default: 'power3.out'
 * @param {string} className - Clases adicionales para el wrapper
 * @param {Object} style - Estilos inline para el wrapper
 * @param {boolean} once - Si true, la animación solo se ejecuta una vez. Default: true
 */
const ScrollReveal = ({
  children,
  start = 'top 85%',
  from = { opacity: 0, y: 40 },
  to,
  duration = 0.8,
  delay = 0,
  ease = 'power3.out',
  className = '',
  style = {},
  once = true,
}) => {
  const ref = useRef(null);

  // Estilo inicial para evitar flash: el elemento empieza oculto desde el primer paint
  const initialStyle = {
    opacity: from?.opacity ?? 0,
    transform: `translate(${from?.x ?? 0}px, ${from?.y ?? 40}px)${from?.scale !== undefined ? ` scale(${from.scale})` : ''}`,
    ...style,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // fromTo con estado final explícito: evita que gsap lea el inline style como destino
    const toState = to ?? {
      opacity: 1,
      x: 0,
      y: 0,
      ...(from?.scale !== undefined && { scale: 1 }),
    };

    const ctx = gsap.context(() => {
      const animation = gsap.fromTo(element, from, {
        ...toState,
        duration,
        delay,
        ease,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: element,
        start,
        animation,
        toggleActions: once ? 'play none none none' : 'play none none reverse',
        markers: true,
      });
    });

    return () => ctx.revert();
  }, [start, from, to, duration, delay, ease, once]);

  return (
    <div ref={ref} className={className} style={initialStyle}>
      {children}
    </div>
  );
};

export default ScrollReveal;
