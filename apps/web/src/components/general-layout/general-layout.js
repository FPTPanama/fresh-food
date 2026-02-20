import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const GeneralLayout = ({
  children,
  dictionary,
  showFooter = true,
  overflowHidden = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-between ${
        overflowHidden && "overflow-hidden"
      } h-auto`}
    >
      <Header dictionary={dictionary} />
      <div className="md:mt-[130px] flex flex-col w-full mb-10">{children}</div>
      {showFooter && <Footer dictionary={dictionary} />}
    </div>
  );
};

export default GeneralLayout;
