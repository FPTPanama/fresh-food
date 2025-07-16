import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
  const { locale } = params;
  const dictionary = await getDictionary(locale);
  return (
    <div className="responsiveWidth gap-10">
      <GeneralLayout params={params}>
        <section style={{ height: 'calc(100vh - 180px)' }} className="flex flex-col w-full items-center justify-center gap-7 text-greendark">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col justify-center items-start w-1/2 h-full gap-5">
              <h1 className="font-black text-l-800 text-greendark">{dictionary.about_us.FRUTA_FRESCA_PRINCIPIO_FIN}</h1>
              <p className="text-l-400 w-3/5">{dictionary.about_us.FRESH_FOOD_GARANTIZAMOS}</p>
            </div>
            <div className="flex flex-col w-1/2 items-center justify-center h-full p-10">
              <Image className="h-full w-auto" src={'/img/mango_rebanado.webp'} width={300} height={400} />
            </div>
          </div>
        </section>
      </GeneralLayout>
    </div>
  );
};

export default page;
