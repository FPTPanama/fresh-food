'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogHero = ({ children, image, brightness, yOffset, isCover = true }) => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;

    if (!container || !bg) return;

    const movement = yOffset || 30;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { yPercent: -movement / 2 },
        {
          yPercent: movement / 2,
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
  }, [yOffset]);

  const offset = yOffset || 30;
  const extraSize = offset + 10;

  return (
    <div ref={containerRef} className="relative flex h-full w-full flex-col items-start justify-center overflow-hidden rounded-3xl">
      <div
        ref={bgRef}
        className={`absolute left-0 w-full bg-center bg-no-repeat ${isCover ? 'bg-cover' : 'bg-[length:auto_100%] md:bg-contain'}`}
        style={{
          backgroundImage: `url(${image})`,
          filter: brightness ? `brightness(${brightness})` : 'brightness(0.6)',
          top: `-${extraSize}%`,
          height: `${100 + extraSize * 2}%`,
        }}
      />

      {children}
    </div>
  );
};

export default BlogHero;
