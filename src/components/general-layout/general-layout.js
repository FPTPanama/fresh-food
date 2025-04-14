import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const GeneralLayout = ({ children }) => {
  return (
    <div className={'flex flex-col items-center justify-between'}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
