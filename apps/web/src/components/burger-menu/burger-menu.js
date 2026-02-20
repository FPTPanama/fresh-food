'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import Menu from '../menu/menu';

const BurgerMenu = ({ dictionary }) => {
  const [pulse, setPulse] = useState(false);

  return (
    <>
      {pulse && <div className="masOveBox slide-menu" />}

      <div onClick={() => setPulse(!pulse)} className={classNames(`burgerMenu ${pulse ? 'burgerIcon open' : 'burgerIcon close'}`)}>
        <span />
        <span />
        <span />
        <span />
      </div>

      {pulse && <Menu pulse={pulse} setPulse={setPulse} dictionary={dictionary} isAbsolute={true} />}
    </>
  );
};

export default BurgerMenu;
