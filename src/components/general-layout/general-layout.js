import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const GeneralLayout = ({ children }) => {
  return (
    <div className={'flex flex-col items-center justify-between'}>
      <Header />
      <div className="mt-[180px] flex flex-col w-full mb-10">{children}</div>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
