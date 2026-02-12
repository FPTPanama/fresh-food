'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menu = ({ dictionary, pulse, setPulse, isAbsolute = false }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'es';

  const handleLinkClick = () => {
    if (setPulse) {
      setPulse(false);
    }
  };

  return (
    <div className={`z-50 flex flex-col gap-4 md:flex-1 md:flex-row md:items-center md:justify-start ${isAbsolute && 'absolute top-20'}`}>
      <Link
        href={`/${locale}`}
        onClick={handleLinkClick}
        className="z-50 font-black text-greendark transition-all hover:text-l-200 hover:text-greenlight md:hover:px-2"
      >
        {dictionary.header.HOME}
      </Link>
      <Link
        onClick={handleLinkClick}
        className="z-50 font-black text-greendark transition-all hover:text-l-200 hover:text-greenlight md:hover:px-2"
        href={`/${locale}/products`}
      >
        {dictionary.header.PRODUCTOS}
      </Link>
      <Link
        onClick={handleLinkClick}
        className="z-50 font-black text-greendark transition-all hover:text-l-200 hover:text-greenlight md:hover:px-2"
        href={`/${locale}/about-us`}
      >
        {dictionary.header.NOSOTROS}
      </Link>
      <Link
        onClick={handleLinkClick}
        className="z-50 font-black text-greendark transition-all hover:text-l-200 hover:text-greenlight md:hover:px-2"
        href={`/${locale}/logistic`}
      >
        {dictionary.header.LOGISTICA}
      </Link>
      <Link
        onClick={handleLinkClick}
        className="z-50 font-black text-greendark transition-all hover:text-l-200 hover:text-greenlight md:hover:px-2"
        href={`/${locale}/news`}
      >
        {dictionary.header.NEWS}
      </Link>
    </div>
  );
};

export default Menu;
