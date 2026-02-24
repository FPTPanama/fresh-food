'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Envuelve el contenido en la estructura requerida por ScrollSmoother
 * y crea la instancia. Solo para la vista home.
 *
 * Requiere: smooth-wrapper > smooth-content > children
 * El Header debe estar FUERA de este componente (position: fixed).
 */
const ScrollSmootherProvider = ({ children }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapper,
      content: content,
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper" className="fixed inset-0 z-0 overflow-hidden">
      <div ref={contentRef} id="smooth-content" className="responsiveWidth flex w-full flex-col items-center px-[5%] pb-20 md:px-0">
        {children}
      </div>
    </div>
  );
};

export default ScrollSmootherProvider;
