'use client';

import { useEffect, useState } from 'react';
import { MdOutlineArrowDownward } from 'react-icons/md';

const ScrollButton = ({ dictionary }) => {
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
      className={`${isAtTop ? 'slide-bottom' : 'slide-up'} flex items-center justify-center absolute bottom-10 border-greendark border-2 py-2 px-8 rounded-full gap-2`}
    >
      <p className="text-l-100 font-reg">{dictionary.scroll_down.DESLIZA_HACIA_ABAJO}</p>
      <MdOutlineArrowDownward />
    </div>
  );
};

export default ScrollButton;
