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
 * @param {number} scale - Escala para parallax. 1.3 para fill, 1.05 sutil para dimensiones fijas
 * @param {number} quality - Calidad de la imagen (Next.js)
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
  scale,
  priority = false,
  quality,
}) => {
  // Scale sutil cuando hay dimensiones fijas para no alterar el aspecto
  const parallaxScale = scale ?? (fill ? 1.3 : 1.05);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const movement = (1 - speed) * 50;

    const ctx = gsap.context(() => {
      gsap.set(image, {
        scale: parallaxScale,
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
  }, [speed, parallaxScale]);

  const containerClass = fill
    ? `relative h-full w-full min-h-[100px] self-stretch overflow-hidden ${className}`.trim()
    : `relative inline-block overflow-hidden ${className}`.trim();

  const imageWrapperClass = fill ? 'absolute inset-0' : 'relative';

  return (
    <div ref={containerRef} className={containerClass}>
      <div ref={imageRef} className={imageWrapperClass}>
        {fill ? (
          <Image src={src} alt={alt} fill className={`object-${objectFit} ${imageClassName}`} priority={priority} sizes="(max-width: 768px) 100vw, 800px" />
        ) : (
          <Image src={src} alt={alt} width={width} height={height} className={`object-${objectFit} ${imageClassName}`} priority={priority} quality={quality} />
        )}
      </div>
    </div>
  );
};

export default ParallaxImage;
