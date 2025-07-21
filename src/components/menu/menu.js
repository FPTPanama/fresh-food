import Link from 'next/link';
import React from 'react';
import { getDictionary } from '@/lib/getDictionary';
import { RiHome2Line } from 'react-icons/ri';

const Menu = async ({ params }) => {
  const { locale } = params;
  const dictionary = await getDictionary(locale);
  return (
    <div className={'flex justify-start items-center gap-4 w-1/4'}>
      <Link href={'/'}>
        <RiHome2Line size={25} />
      </Link>
      <Link href={'/products'}>
        <p className="font-black text-greendark">{dictionary.header.PRODUCTOS}</p>
      </Link>
      <Link href={'/about-us'}>
        <p className="font-black text-greendark">{dictionary.header.NOSOTROS}</p>
      </Link>
      <Link href={'/logistic'}>
        <p className="font-black text-greendark">{dictionary.header.LOGISTICA}</p>
      </Link>
    </div>
  );
};

export default Menu;
