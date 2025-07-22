import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import FormHrk from 'components/form/form-hrk';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
  const { locale } = params;
  const dictionary = await getDictionary(locale);
  return (
    <GeneralLayout params={params} showFooter={false}>
      <div className="responsiveWidth w-full text-greendark">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-1/2 flex flex-col gap-4 items-center">
            <div className="flex flex-col items-start justify-center w-1/2 gap-5">
              <Image src={'/img/mango_rebanado.webp'} width={150} height={200} alt="mango rebanado" />
              <p className="text-l-600 font-bold max-w-[350px]">{dictionary.contact.AQUI_PUEDES_COMUNICARTE}</p>

              <p className="max-w-[350px]" dangerouslySetInnerHTML={{ __html: dictionary.footer.CENTRO_PRINCIPAL }} />

              <div className="flex flex-col items-start justify-center">
                <p>{dictionary.contact.CALLE}</p>
                <p>{dictionary.contact.CIUDAD}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start h-full justify-center w-1/3 gap-5">
            <p className="text-l-600 font-bold max-w-[350px]">{dictionary.contact.DEJANOS_TUS_DATOS}</p>
            <FormHrk dictionary={dictionary} />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default page;
