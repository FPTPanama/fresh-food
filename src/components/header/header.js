import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from '../menu/menu';
import { getDictionary } from '@/lib/getDictionary';
import { MdLanguage } from 'react-icons/md';
import LanguageSwitcher from 'components/language-switcher/language-switcher';

const Header = async ({ params }) => {
  const { locale } = params;
  const dictionary = await getDictionary(locale);
  return (
    <div className={'flex w-screen fixed top-0 left-0 justify-between items-center z-20 md:h-[130px] px-10 py-4 bg-fresh'}>
      <Menu params={params} />
      <Link className="cursor-pointer" href={'/'}>
        <Image src={'/img/freshfood_logo.svg'} height={50} width={300} alt="freshfood logo" />
      </Link>
      <div className="w-1/4 flex items-center justify-end gap-5">
        <LanguageSwitcher />

        <Link
          href={'/contact'}
          className="flex items-center text-greendark text-l-100 justify-center border-greendark border-2 py-2 px-4 rounded-full"
        >
          {dictionary.header.QUIERES_MAS_INFO}
        </Link>
      </div>
    </div>
  );
};

export default Header;
