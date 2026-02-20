'use client';

import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, useTransition } from 'react';
import { MdLanguage } from 'react-icons/md';

const LanguageSwitcher = ({ alternateUrls = null }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState('es');
  const [isHover, setIsHover] = useState(false);
  const [isPending, startTransition] = useTransition();
  const prevLocaleRef = useRef(null);

  useEffect(() => {
    const localeFromPath = pathname.split('/')[1];
    if (localeFromPath && (localeFromPath === 'es' || localeFromPath === 'en')) {
      setCurrentLocale(localeFromPath);
      // Solo refrescar cuando el locale cambió (ej. al cambiar idioma en el blog)
      if (prevLocaleRef.current !== null && prevLocaleRef.current !== localeFromPath) {
        router.refresh();
      }
      prevLocaleRef.current = localeFromPath;
    }

    // Restaurar la posición del scroll si se cambió el idioma
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition !== null) {
      // Usar doble requestAnimationFrame para asegurar que se ejecute después del render completo
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition, 10),
            behavior: 'instant' // Evitar animación suave para que sea instantáneo
          });
          sessionStorage.removeItem('scrollPosition');
        });
      });
    }
  }, [pathname]);

  const toggleLocale = () => {
    const newLocale = currentLocale === 'es' ? 'en' : 'es';
    // Si hay URLs alternativas (ej. post con slugs distintos por idioma), usar la correcta
    const newPath = alternateUrls?.[newLocale] ?? (() => {
      const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '') || '/';
      return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    })();

    // Guardar la posición actual del scroll en sessionStorage antes de navegar
    const scrollPosition = window.scrollY || window.pageYOffset;
    sessionStorage.setItem('scrollPosition', scrollPosition.toString());

    // Actualizar el estado inmediatamente para feedback visual instantáneo
    setCurrentLocale(newLocale);

    // Guardar la preferencia en cookie ANTES de navegar
    const maxAge = 60 * 60 * 24 * 365; // 1 año
    const secureFlag = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${maxAge}; SameSite=Lax${secureFlag}`;

    // Usar startTransition para evitar recargas completas de la página
    // Esto permite que Next.js haga una navegación del lado del cliente sin recargar
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <>
      <button
        onClick={toggleLocale}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className={classNames('hidden md:flex items-center justify-between gap-2 px-4 py-2 bg-greendark rounded-full text-white md:transition-all', {
          grow: isHover,
        })}
      >
        <div className="flex items-center justify-center gap-1">
          <MdLanguage size={20} />
          <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
        </div>
        {isHover && <span className="text-sm">→ {currentLocale === 'es' ? 'EN' : 'ES'}</span>}
      </button>
      <button onClick={toggleLocale} className="flex md:!hidden items-center justify-center gap-1">
        <MdLanguage size={20} />
        <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
      </button>
    </>
  );
};

export default LanguageSwitcher;
