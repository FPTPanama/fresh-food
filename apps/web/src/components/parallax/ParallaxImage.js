'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

/**
 * Componente de imagen con efecto parallax
 *
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo
 * @param {number} speed - Velocidad del parallax (menor = más lento). Default: 0.5
 * @param {string} className - Clases adicionales para el contenedor
 * @param {string} imageClassName - Clases adicionales para la imagen
 * @param {boolean} fill - Si la imagen debe llenar el contenedor. Default: true
 * @param {number} width - Ancho de la imagen (si fill=false)
 * @param {number} height - Alto de la imagen (si fill=false)
 * @param {string} objectFit - Ajuste de la imagen. Default: 'cover'
 * @param {number} scale - Escala adicional para evitar espacios vacíos. Default: 1.3
 */
const ParallaxImage = ({
  src,
  alt,
  speed = 0.5,
  className = '',
  imageClassName = '',
  fill = true,
  width,
  height,
  objectFit = 'cover',
  scale = 1.3,
  priority = false,
}) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const movement = (1 - speed) * 50;

    const ctx = gsap.context(() => {
      gsap.set(image, {
        scale: scale,
        yPercent: -movement / 2,
      });

      gsap.to(image, {
        yPercent: movement / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed, scale]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imageRef} className="h-full w-full">
        {fill ? (
          <Image src={src} alt={alt} fill className={`object-${objectFit} ${imageClassName}`} priority={priority} />
        ) : (
          <Image src={src} alt={alt} width={width} height={height} className={`object-${objectFit} ${imageClassName}`} priority={priority} />
        )}
      </div>
    </div>
  );
};

export default ParallaxImage;
