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
          <ScrollButton />
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col gap-3 w-1/3">
              <h1 className="text-l-800">Y esta es nuestra ruta natural.</h1>
              <p className="text-l-500 font-reg">Donde comienza el sabor de nuestros productos, del campo hasta la mesa.</p>
            </div>
            <div className="flex items-center justify-center w-1/3">
              <Image src={'/img/aguacate_semilla.webp'} width={600} height={500} />
            </div>
            <div className="flex items-center justify-center w-1/3">
              <p className="text-l-500 font-reg">Donde comienza el sabor de nuestros productos, del campo hasta la mesa.</p>
            </div>
          </div>
        </section>
      </GeneralLayout>
    </div>
  );
};

export default Logistic;
