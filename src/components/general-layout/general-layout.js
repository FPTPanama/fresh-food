import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const GeneralLayout = ({ children, params }) => {
  return (
    <div className={'flex flex-col items-center justify-between'}>
      <Header params={params} />
      <div className="mt-[180px] flex flex-col w-full mb-10">{children}</div>
      <Footer params={params} />
    </div>
  );
};

export default GeneralLayout;
