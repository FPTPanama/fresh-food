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

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  return {
    title: locale === 'es'
      ? 'Logística - Fresh Food Panamá | Cadena de Frío y Transporte Internacional'
      : 'Logistics - Fresh Food Panama | Cold Chain and International Transport',
    description: locale === 'es'
      ? 'Nuestra ruta de exportación: desde la finca hasta tu destino. Control de temperatura, empaque especializado, trazabilidad GPS y cumplimiento fitosanitario. Transporte marítimo y terrestre.'
      : 'Our export route: from farm to your destination. Temperature control, specialized packaging, GPS traceability and phytosanitary compliance. Maritime and land transport.',
    keywords: locale === 'es'
      ? 'logística frutas frescas, cadena de frío exportación, transporte marítimo frutas, contenedores refrigerados, trazabilidad exportación'
      : 'fresh fruit logistics, cold chain export, fruit maritime transport, refrigerated containers, export traceability',
    openGraph: {
      title: locale === 'es' ? 'Logística - Fresh Food Panamá' : 'Logistics - Fresh Food Panama',
      description: locale === 'es'
        ? 'Seguimiento completo desde origen hasta destino. Garantizamos la cadena de frío.'
        : 'Complete tracking from origin to destination. We guarantee the cold chain.',
      url: `https://freshfoodpanama.com/${locale}/logistic`,
      images: [{
        url: 'https://freshfoodpanama.com/img/aguacate_semilla_ok.webp',
        width: 1200,
        height: 630,
        alt: 'Fresh Food Panama Logistics',
      }],
    },
    alternates: {
      canonical: `https://freshfoodpanama.com/${locale}/logistic`,
      languages: {
        'es': 'https://freshfoodpanama.com/es/logistic',
        'en': 'https://freshfoodpanama.com/en/logistic',
      },
    },
  };
}

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
      <div className="flex flex-col md:snap-y md:snap-mandatory overflow-y-scroll scroll-smooth md:mt-[130px] h-auto md:h-[calc(100vh-130px)] md:gap-0">
        <GeneralLayout dictionary={dictionary} showFooter={false}>
          <section className="flex w-full items-center justify-center gap-7 snap-start md:h-screen">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <div className="flex flex-col gap-3 w-full md:w-1/3">
                <h1 className="text-l-600 md:text-l-800">{dictionary.logistic.Y_ESTA_ES_NUESTRA_RUTA}</h1>
                <p className="text-l-300 md:text-l-500 font-reg">{dictionary.logistic.DONDE_COMIENZA}</p>
              </div>
              <div className="md:flex items-center justify-center w-full md:w-1/3 h-24 md:h-32">
                <Image
                  className="w-3/5 md:w-full z-50 relative bottom-40 left-20 md:left-0 md:bottom-10"
                  src={'/img/aguacate_semilla_ok.webp'}
                  width={400}
                  height={500}
                  alt="aguacate en semilla"
                  priority
                  quality={90}
                />
              </div>
              <div className="hidden md:flex flex-col items-start justify-center w-full md:w-1/3 gap-5">
                <p className="text-l-200 md:text-l-300 font-reg">{dictionary.logistic.SABEMOS_QUE_PARA_CONFIAR}</p>
                <p className="text-l-200 md:text-l-300 font-reg">{dictionary.logistic.QUEREMOS_EXPLICARTE}</p>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full justify-start md:h-full mt-32 gap-10 md:gap-0">
            {ruta_tropical.map((step, key) => {
              return (
                <div
                  key={key}
                  className="md:snap-start h-auto md:h-[calc(100vh-130px)] flex flex-col items-center justify-between gap-2 md:gap-10 md:px-8 md:py-12"
                >
                  <div className="flex items-center justify-start w-full">
                    <div className="flex flex-col md:flex-row md:justify-start items-start md:items-center md:gap-2">
                      <p className="font-black text-l-600 md:text-l-400">{key + 1}</p>
                      <TbPointFilled className="hidden md:block" />
                      <p className="text-l-300 md:text-l-400 font-black max-w-[300px]">{step.title.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center w-full grow">
                    <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-10">
                      <div className="flex flex-col items-start justify-center w-full">
                        <p className="text-l-300 md:text-l-600 font-reg">{step.description}</p>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full gap-5 list-outside">
                        {step.especifications.map((spec, key) => {
                          return (
                            <div key={key} className="flex items-center w-full justify-start">
                              <FaAngleRight className="hidden md:block w-1/12" size={20} />
                              <p className="w-full md:w-11/12">{spec}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center h-10 w-full">
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
