import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import ScrollSmootherProvider from '../scroll-smoother';

const GeneralLayout = ({ children, dictionary, showFooter = true, overflowHidden = false, alternateUrls = null, useScrollSmoother = false }) => {
  const content = (
    <>
      <div className={`mb-10 flex w-full flex-col md:mt-[130px] ${overflowHidden ? 'overflow-hidden' : ''}`}>{children}</div>
      {showFooter && <Footer dictionary={dictionary} />}
    </>
  );

  return (
    <div
      className={`flex w-full flex-col items-center justify-between ${overflowHidden && !useScrollSmoother ? 'overflow-hidden' : ''} h-auto`}
    >
      <Header dictionary={dictionary} alternateUrls={alternateUrls} />
      {useScrollSmoother ? <ScrollSmootherProvider>{content}</ScrollSmootherProvider> : content}
    </div>
  );
};

export default GeneralLayout;
