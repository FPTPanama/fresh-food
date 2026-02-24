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
 * @param {string} imageWrapperClassName - Clases para el wrapper de la imagen (fill=false)
 * @param {boolean} fill - Si la imagen debe llenar el contenedor. Default: true
 * @param {number} width - Ancho de la imagen (si fill=false)
 * @param {number} height - Alto de la imagen (si fill=false)
 * @param {string} objectFit - Ajuste de la imagen. Default: 'cover'
 * @param {number} scale - Escala para parallax. 1.3 para fill, 1.05 sutil para dimensiones fijas
 * @param {number} quality - Calidad de la imagen (Next.js)
 * @param {string} sizes - Atributo sizes para responsive (Next.js Image). Recomendado cuando fill=false
 * @param {boolean} fadeIn - Aplica fade-in al cargar. Default: false
 * @param {boolean} zoomIn - Aplica zoom-in al cargar. Default: false
 */
const ParallaxImage = ({
  src,
  alt,
  speed = 0.5,
  className = '',
  imageClassName = '',
  imageWrapperClassName = '',
  fadeIn = false,
  zoomIn = false,
  fill = true,
  width,
  height,
  objectFit = 'cover',
  scale,
  priority = false,
  quality,
  sizes,
}) => {
  // Scale sutil cuando hay dimensiones fijas para no alterar el aspecto
  const parallaxScale = scale ?? (fill ? 1.3 : 1.05);
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const parallax = parallaxRef.current;
    const inner = innerRef.current;

    if (!container || !parallax) return;
    if ((fadeIn || zoomIn) && !inner) return;

    const movement = (1 - speed) * 50;
    const target = inner;

    const ctx = gsap.context(() => {
      gsap.set(parallax, {
        scale: parallaxScale,
        yPercent: -movement / 2,
      });

      if (fadeIn || zoomIn) {
        const vars = {};
        if (fadeIn) vars.opacity = 1;
        if (zoomIn) vars.scale = 1;
        gsap.to(target, {
          ...vars,
          duration: 1,
          ease: 'power2.out',
          overwrite: true,
        });
      }

      gsap.to(parallax, {
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
  }, [speed, parallaxScale, fadeIn, zoomIn]);

  const containerClass = fill
    ? `relative h-full w-full min-h-[100px] self-stretch overflow-hidden ${className}`.trim()
    : `relative inline-block overflow-hidden ${className}`.trim();

  const parallaxClass = fill ? 'absolute inset-0' : `relative ${imageWrapperClassName}`.trim();

  const innerClass = fill
    ? `absolute inset-0 ${fadeIn ? 'opacity-0' : ''} ${zoomIn ? 'scale-0' : ''}`.trim()
    : `block ${fadeIn ? 'opacity-0' : ''} ${zoomIn ? 'scale-0' : ''}`.trim();

  return (
    <div ref={containerRef} className={containerClass}>
      <div ref={parallaxRef} className={parallaxClass}>
        <div ref={innerRef} className={innerClass}>
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-${objectFit} ${imageClassName}`}
              priority={priority}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={`object-${objectFit} ${imageClassName}`}
              priority={priority}
              quality={quality}
              sizes={sizes}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ParallaxImage;
