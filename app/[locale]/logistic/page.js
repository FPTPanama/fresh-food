import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import ScrollButton from 'components/scroll-button/scroll-down';
import Image from 'next/image';
import React from 'react';

const Logistic = async ({ params }) => {
  const { locale } = params;
  const dictionary = await getDictionary(locale);
  return (
    <div className="responsiveWidth gap-10 text-greendark">
      <GeneralLayout params={params}>
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
                src={'/img/aguacate_semilla_v2.webp'}
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
      </GeneralLayout>
    </div>
  );
};

export default Logistic;
