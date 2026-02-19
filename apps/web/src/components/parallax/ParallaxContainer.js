'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Contenedor genérico con efecto parallax para background-image u otros elementos
 *
 * @param {React.ReactNode} children - Contenido del componente
 * @param {string} backgroundImage - URL de la imagen de fondo (opcional)
 * @param {number} speed - Velocidad del parallax (0.3 = muy lento, 0.7 = casi normal). Default: 0.5
 * @param {string} className - Clases adicionales
 * @param {Object} style - Estilos inline adicionales
 * @param {string} bgPosition - Posición del background. Default: 'center'
 * @param {string} bgSize - Tamaño del background. Default: 'cover'
 * @param {string} filter - Filtros CSS para el fondo (ej: 'brightness(0.4)'). No afecta al children
 * @param {number} contentZIndex - Z-index del contenido. Default: 20
 * @param {boolean|number} hoverZoom - Activa zoom en hover. true = 1.1, o un número para escala personalizada
 * @param {number} hoverDuration - Duración de la transición en ms. Default: 400
 */
const ParallaxContainer = ({
  children,
  backgroundImage,
  yOffset = 30,
  speed = 0.5,
  className = '',
  style = {},
  bgPosition = 'center',
  bgSize = 'cover',
  filter = '',
  contentZIndex = 20,
  hoverZoom = false,
  hoverDuration = 400,
}) => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const zoomScale = hoverZoom === true ? 1.1 : hoverZoom || 1;

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;

    if (!container || !bg) return;

    const movement = (1 - speed) * yOffset;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { yPercent: -movement },
        {
          yPercent: movement,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [speed, yOffset]);

  const offset = yOffset || 30;
  const extraSize = offset + 10;

  return (
    <div
      ref={containerRef}
      className={`relative z-0 h-full w-full overflow-hidden ${className}`}
      style={style}
      onMouseEnter={() => hoverZoom && setIsHovered(true)}
      onMouseLeave={() => hoverZoom && setIsHovered(false)}
    >
      {backgroundImage && (
        <div
          ref={bgRef}
          className="pointer-events-none absolute left-0 w-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: bgPosition,
            backgroundSize: bgSize,
            backgroundRepeat: 'no-repeat',
            top: `-${extraSize}%`,
            height: `${100 + extraSize * 2}%`,
            filter: filter || undefined,
            transform: isHovered ? `scale(${zoomScale})` : 'scale(1)',
            transition: `transform ${hoverDuration}ms ease-out`,
          }}
        />
      )}
      <div className="relative h-full w-full" style={{ zIndex: contentZIndex }}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxContainer;
