'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Menu from '../menu/menu';
import LanguageSwitcher from 'components/language-switcher/language-switcher';
import BurgerMenu from '../burger-menu/burger-menu';

const Header = ({ dictionary }) => {
  const pathname = usePathname();
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
      className={`fixed left-0 top-0 z-30 flex h-auto w-screen flex-col items-center justify-between gap-5 px-4 py-4 text-greendark md:h-[130px] md:flex-row md:px-10 ${!isAtTop ? 'bg-fresh' : 'bg-transparent'} transition-all`}
    >
      <div className="flex w-full items-center justify-between gap-2 md:hidden">
        <div className="flex w-1/5 items-center justify-start">
          <BurgerMenu dictionary={dictionary} />
        </div>
        <div className="flex w-3/5 items-center justify-center">
          <Image src={'/img/freshfood_logo.svg'} height={50} width={300} alt="freshfood logo" />
        </div>
        <div className="flex w-1/5 items-center justify-center">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="hidden flex-1 md:flex">
        <Menu dictionary={dictionary} />
      </div>

      <Link className="hidden flex-1 cursor-pointer items-center justify-center md:flex" href={`/${pathname.split('/')[1] || 'es'}`}>
        <Image src={'/img/freshfood_logo.svg'} height={50} width={300} alt="freshfood logo" />
      </Link>

      <div className="hidden flex-1 items-center justify-end gap-5 md:flex">
        <LanguageSwitcher />
        <Link
          href={`/${pathname.split('/')[1] || 'es'}/contact`}
          className="flex items-center justify-center rounded-full border-2 border-greendark px-4 py-2 text-l-100 transition-all hover:bg-greendark hover:text-white md:hover:px-8"
        >
          {dictionary.header.QUIERES_MAS_INFO}
        </Link>
      </div>
    </div>
  );
};

export default Header;
