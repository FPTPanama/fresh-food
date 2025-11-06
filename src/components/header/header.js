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
      className={`flex md:flex-row flex-col w-screen fixed z-30 top-0 left-0 justify-between items-center md:h-[130px] h-auto md:px-10 px-4 py-4 gap-5 text-greendark ${!isAtTop ? 'bg-fresh' : 'bg-transparent'} transition-all`}
    >
      <div className="md:hidden flex justify-between items-center w-full gap-2">
        <div className="flex w-1/5 justify-start items-center">
          <BurgerMenu dictionary={dictionary} />
        </div>
        <div className="flex w-3/5 justify-center items-center">
          <Image src={'/img/freshfood_logo.svg'} height={50} width={300} alt="freshfood logo" />
        </div>
        <div className="flex w-1/5 justify-center items-center">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="hidden md:flex flex-1">
        <Menu dictionary={dictionary} />
      </div>

      <Link className="cursor-pointer hidden md:flex flex-1 items-center justify-center" href={`/${pathname.split('/')[1] || 'es'}`}>
        <Image src={'/img/freshfood_logo.svg'} height={50} width={300} alt="freshfood logo" />
      </Link>

      <div className="flex-1 items-center justify-end gap-5 hidden md:flex">
        <LanguageSwitcher />
        <Link
          href={`/${pathname.split('/')[1] || 'es'}/contact`}
          className="flex items-center  text-l-100 justify-center border-greendark border-2 py-2 px-4 rounded-full md:hover:px-8 transition-all hover:bg-greendark hover:text-white"
        >
          {dictionary.header.QUIERES_MAS_INFO}
        </Link>
      </div>
    </div>
  );
};

export default Header;
