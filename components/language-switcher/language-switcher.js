'use client';

import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdLanguage } from 'react-icons/md';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState('es');
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const localeFromPath = pathname.split('/')[1];
    setCurrentLocale(localeFromPath);
  }, [pathname]);

  const toggleLocale = () => {
    const newLocale = currentLocale === 'es' ? 'en' : 'es';
    const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <button
      onClick={toggleLocale}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className={classNames('flex items-center justify-between gap-2 px-4 py-2 bg-greendark rounded-full text-white transition-all', {
        grow: isHover,
      })}
    >
      <div className="flex items-center justify-center gap-1">
        <MdLanguage size={20} />
        <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
      </div>
      {isHover && <span className="text-sm">→ {currentLocale === 'es' ? 'EN' : 'ES'}</span>}
    </button>
  );
};

export default LanguageSwitcher;
