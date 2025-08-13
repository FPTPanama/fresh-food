import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from 'react-icons/ri';

const Menu = ({ dictionary, pulse, setPulse, isAbsolute = false }) => {
  return (
    <div className={`flex md:flex-row flex-col md:justify-start md:items-center gap-4 md:flex-1 z-50 ${isAbsolute && 'absolute top-20'}`}>
      <Link
        href={'/'}
        onClick={() => setPulse(false)}
        className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50"
      >
        {dictionary.header.HOME}
      </Link>
      <Link
        onClick={() => setPulse(false)}
        className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50"
        href={'/products'}
      >
        {dictionary.header.PRODUCTOS}
      </Link>
      <Link
        onClick={() => setPulse(false)}
        className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50"
        href={'/about-us'}
      >
        {dictionary.header.NOSOTROS}
      </Link>
      <Link
        onClick={() => setPulse(false)}
        className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50"
        href={'/logistic'}
      >
        {dictionary.header.LOGISTICA}
      </Link>
    </div>
  );
};

export default Menu;
