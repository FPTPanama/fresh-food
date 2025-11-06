'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menu = ({ dictionary, pulse, setPulse, isAbsolute = false }) => {
  const pathname = usePathname();
  // Extraer el locale del pathname
  const locale = pathname.split('/')[1] || 'es';

  const handleLinkClick = () => {
    if (setPulse) {
      setPulse(false);
    }
  };

  return (
    <div className={`flex md:flex-row flex-col md:justify-start md:items-center gap-4 md:flex-1 z-50 ${isAbsolute && 'absolute top-20'}`}>
      <Link
        href={`/${locale}`}
        onClick={handleLinkClick}
        className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50"
      >
        {dictionary.header.HOME}
      </Link>
      <Link
        onClick={handleLinkClick}
        className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50"
        href={`/${locale}/products`}
      >
        {dictionary.header.PRODUCTOS}
      </Link>
      <Link
        onClick={handleLinkClick}
        className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50"
        href={`/${locale}/about-us`}
      >
        {dictionary.header.NOSOTROS}
      </Link>
      <Link
        onClick={handleLinkClick}
        className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50"
        href={`/${locale}/logistic`}
      >
        {dictionary.header.LOGISTICA}
      </Link>
    </div>
  );
};

export default Menu;
