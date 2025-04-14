import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <div className={'flex justify-start items-center gap-4 w-1/4'}>
      <Link href={'/productos'}>
        <p className="font-black text-greendark">PRODUCTOS</p>
      </Link>
      <Link href={'/about-us'}>
        <p className="font-black text-greendark">ABOUT US</p>
      </Link>
    </div>
  );
};

export default Menu;
