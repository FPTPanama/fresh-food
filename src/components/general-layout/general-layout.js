import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const GeneralLayout = ({ children, dictionary, showFooter = true }) => {
  return (
    <div className={'flex flex-col items-center justify-between'}>
      <Header dictionary={dictionary} />
      <div className="mt-[180px] flex flex-col w-full mb-10">{children}</div>
      {showFooter && <Footer dictionary={dictionary} />}
    </div>
  );
};

export default GeneralLayout;
