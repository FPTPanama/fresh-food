'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Menu from '../menu/menu';
import LanguageSwitcher from 'components/language-switcher/language-switcher';

const Header = ({ dictionary }) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex w-screen fixed z-30 top-0 left-0 justify-between items-center md:h-[130px] px-10 py-4 gap-5 text-greendark ${!isAtTop ? 'bg-fresh' : 'bg-transparent'} transition-all`}
    >
      <Menu dictionary={dictionary} />
      <Link className="cursor-pointer flex-1 flex items-center justify-center" href={'/'}>
        <Image src={'/img/freshfood_logo.svg'} height={50} width={300} alt="freshfood logo" />
      </Link>
      x
      <div className="flex-1 flex items-center justify-end gap-5">
        <LanguageSwitcher />

        <Link
          href={'/contact'}
          className="flex items-center  text-l-100 justify-center border-greendark border-2 py-2 px-4 rounded-full md:hover:px-8 transition-all hover:bg-greendark hover:text-white"
        >
          {dictionary.header.QUIERES_MAS_INFO}
        </Link>
      </div>
    </div>
  );
};

export default Header;
