import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from '../menu/menu';

const Header = () => {
  return (
    <div className={'flex w-screen fixed top-0 left-0 justify-between items-center z-20 md:h-[180px] px-10 py-4 bg-fresh'}>
      <Menu />
      <Link className="cursor-pointer" href={'/'}>
        <Image src={'/img/freshfood_logo.svg'} height={50} width={400} alt="freshfood logo" />
      </Link>
      <div className="w-1/4 flex items-center justify-end">
        <button className="flex items-center text-greendark justify-center border-greendark border-2 py-3 px-6 rounded-full">
          Do you have more info?
        </button>
      </div>
    </div>
  );
};

export default Header;
