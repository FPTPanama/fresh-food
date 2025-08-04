import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import { PiFarmFill } from 'react-icons/pi';
import { FaTruckField, FaBoxesPacking, FaShip, FaTruckArrowRight } from 'react-icons/fa6';
import { Divider, Steps } from 'antd';

import { MdHouseboat, MdOutlineArrowDownward } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { PiShippingContainerFill } from 'react-icons/pi';
import { FaTruckLoading } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';
import TitleScrollDisplay from 'components/title-scroll-display/title-scroll-display';

const Logistic = async ({ params }) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const ruta_tropical = [
    {
      title: dictionary.logistic.ruta_tropical[0].TITLE,
      description: dictionary.logistic.ruta_tropical[0].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[0].specifications,
      icon: <PiFarmFill size={50} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[1].TITLE,
      description: dictionary.logistic.ruta_tropical[1].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[1].specifications,
      icon: <FaTruckField size={50} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[2].TITLE,
      description: dictionary.logistic.ruta_tropical[2].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[2].specifications,
      icon: <FaBoxesPacking size={50} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[3].TITLE,
      description: dictionary.logistic.ruta_tropical[3].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[3].specifications,
      icon: <FaTruckLoading size={50} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[4].TITLE,
      description: dictionary.logistic.ruta_tropical[4].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[4].specifications,
      icon: <PiShippingContainerFill size={50} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[5].TITLE,
      description: dictionary.logistic.ruta_tropical[5].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[5].specifications,
      icon: <FaShip size={50} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[6].TITLE,
      description: dictionary.logistic.ruta_tropical[6].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[6].specifications,
      icon: <MdHouseboat size={50} />,
    },
    {
      title: dictionary.logistic.ruta_tropical[7].TITLE,
      description: dictionary.logistic.ruta_tropical[7].DESCRIPTION,
      especifications: dictionary.logistic.ruta_tropical[7].specifications,
      icon: <FaTruckArrowRight size={50} />,
    },
  ];
  return (
    <div className="responsiveWidth text-greendark">
      <div className="flex flex-col snap-y snap-mandatory overflow-y-scroll scroll-smooth mt-[130px] h-[calc(100vh-130px)]">
        <GeneralLayout dictionary={dictionary} showFooter={false}>
          <section className="flex flex-col w-full items-center justify-center gap-7 snap-start h-screen">
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col gap-3 w-1/3">
                <h1 className="text-l-800">{dictionary.logistic.Y_ESTA_ES_NUESTRA_RUTA}</h1>
                <p className="text-l-500 font-reg">{dictionary.logistic.DONDE_COMIENZA}</p>
              </div>
              <div className="flex items-center justify-center w-1/3 h-32">
                <Image
                  className="w-4/5 z-50 relative bottom-10"
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
          <section className="flex flex-col w-full justify-start h-full">
            {ruta_tropical.map((step, key) => {
              return (
                <div key={key} className="snap-start h-[calc(100vh-130px)] flex flex-col items-center justify-between gap-10 px-8 py-12">
                  <div className="flex items-center justify-start gap-2 w-full">
                    <p className="font-black text-l-400">{key + 1}</p>
                    <TbPointFilled />
                    <p className="text-l-400 font-black max-w-[300px]">{step.title.toUpperCase()}</p>
                  </div>
                  <div className="flex flex-col justify-between items-center w-full grow">
                    <div className="flex w-3/4 gap-10">
                      <div className="flex flex-col items-start justify-center w-full">
                        <p className="text-l-600 font-reg">{step.description}</p>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full gap-5 list-outside">
                        {step.especifications.map((spec, key) => {
                          return (
                            <div key={key} className="flex items-center w-full justify-start">
                              <FaAngleRight className="w-1/12" size={20} />
                              <p className="w-11/12">{spec}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-10 w-full">
                    {key < ruta_tropical.length - 1 && (
                      <div className="flex flex-col items-center justify-center w-full h-14">
                        <TitleScrollDisplay title={ruta_tropical[key + 1]?.title} number={key + 2} />
                        <div className="flex h-[1px] items-center justify-center w-2/4 border-greendark border" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        </GeneralLayout>
      </div>
    </div>
  );
};

export default Logistic;
