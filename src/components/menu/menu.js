import Link from 'next/link';
import React from 'react';
import { getDictionary } from '@/lib/getDictionary';
import { RiHome2Line } from 'react-icons/ri';

const Menu = ({ dictionary }) => {
  return (
    <div className={'flex justify-start items-center gap-4 flex-1 z-50'}>
      <Link href={'/'}>
        <RiHome2Line size={25} />
      </Link>
      <Link className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50" href={'/products'}>
        {dictionary.header.PRODUCTOS}
      </Link>
      <Link className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50" href={'/about-us'}>
        {dictionary.header.NOSOTROS}
      </Link>
      <Link className="font-black text-greendark hover:text-l-200 hover:text-greenlight transition-all md:hover:px-2 z-50" href={'/logistic'}>
        {dictionary.header.LOGISTICA}
      </Link>
    </div>
  );
};

export default Menu;
