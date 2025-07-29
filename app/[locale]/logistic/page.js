import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import ScrollButton from 'components/scroll-button/scroll-down';
import { PiFarmFill } from 'react-icons/pi';
import { FaTruckField, FaBoxesPacking, FaShip, FaTruckArrowRight } from 'react-icons/fa6';
import { MdHouseboat } from 'react-icons/md';
import { PiShippingContainerFill } from 'react-icons/pi';
import { FaTruckLoading } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';

const Logistic = async ({ params }) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const ruta_tropical = [
    {
      title: dictionary.logistic.ruta_tropical[0].TITLE,
      description: dictionary.logistic.ruta_tropical[0].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[0].specifications,
      icon: <PiFarmFill size={160} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[1].TITLE,
      description: dictionary.logistic.ruta_tropical[1].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[1].specifications,
      icon: <FaTruckField size={160} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[2].TITLE,
      description: dictionary.logistic.ruta_tropical[2].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[2].specifications,
      icon: <FaBoxesPacking size={160} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[3].TITLE,
      description: dictionary.logistic.ruta_tropical[3].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[3].specifications,
      icon: <FaTruckLoading size={160} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[4].TITLE,
      description: dictionary.logistic.ruta_tropical[4].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[4].specifications,
      icon: <PiShippingContainerFill size={160} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[5].TITLE,
      description: dictionary.logistic.ruta_tropical[5].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[5].specifications,
      icon: <FaShip size={160} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[6].TITLE,
      description: dictionary.logistic.ruta_tropical[6].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[6].specifications,
      icon: <MdHouseboat size={160} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[7].TITLE,
      description: dictionary.logistic.ruta_tropical[7].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[7].specifications,
      icon: <FaTruckArrowRight size={160} />,
    },
  ];
  return (
    <div className="responsiveWidth gap-10 text-greendark">
      <GeneralLayout dictionary={dictionary}>
        <section style={{ height: 'calc(100vh - 180px)' }} className="flex flex-col w-full items-center justify-center gap-7">
          <ScrollButton dictionary={dictionary} />
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col gap-3 w-1/3">
              <h1 className="text-l-800">{dictionary.logistic.Y_ESTA_ES_NUESTRA_RUTA}</h1>
              <p className="text-l-500 font-reg">{dictionary.logistic.DONDE_COMIENZA}</p>
            </div>
            <div className="flex items-center justify-center w-1/3 h-32">
              <Image
                className="w-4/5 z-20 relative bottom-32"
                src={'/img/aguacate_semilla_ok.webp'}
                width={400}
                height={500}
                alt="aguacate en semilla"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-1/3 gap-5">
              <p className="text-l-300 font-reg">{dictionary.logistic.SABEMOS_QUE_PARA_CONFIAR}</p>
              <p className="text-l-300 font-reg">{dictionary.logistic.QUEREMOS_EXPLICARTE}</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full gap-10">
          {ruta_tropical.map((step, key) => {
            return (
              <div key={key} className="grid grid-cols-3 w-full border-2 border-greendark p-10 rounded-2xl">
                <div className="flex flex-col items-start justify-center w-full">
                  <p className="font-black text-l-500">{key + 1}.</p>
                  <p className="text-l-400 max-w-[350px] font-black">{step.title}</p>
                  <p className="text-l-200 max-w-[350px]">{step.description}</p>
                </div>
                <div className="flex items-center justify-center w-full">{step.icon}</div>
                <div className="flex flex-col items-start justify-center w-full gap-5 list-outside">
                  {step.especifications.map((spec, key) => {
                    return (
                      <div key={key} className="flex items-center w-full justify-start gap-4">
                        <FaAngleRight className="w-1/6" size={20} />
                        <p className="w-5/6">{spec}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </GeneralLayout>
    </div>
  );
};

export default Logistic;
