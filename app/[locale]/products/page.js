import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';
import React from 'react';

const Productos = async ({ params }) => {
  const { locale } = params;
  const dictionary = await getDictionary(locale);
  return (
    <div className="responsiveWidth">
      <GeneralLayout params={params}>
        <section style={{ height: 'calc(100vh - 180px)' }} className="flex flex-col w-full items-center justify-center gap-7">
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-start justify-center gap-5">
              <h1 className="font-black text-l-800 text-greendark" dangerouslySetInnerHTML={{ __html: dictionary.products.CALIDAD_EN_MANOS }} />
              <h2
                className="text-greendark leading-snug font-black text-l-500"
                dangerouslySetInnerHTML={{ __html: dictionary.products.DESDE_PRIMER_CORTE }}
              />
            </div>
            <Image src={'/img/agricultor_con_pineapple.webp'} width={400} height={300} alt="agricultor con piña" />
          </div>
        </section>
      </GeneralLayout>
    </div>
  );
};

export default Productos;
