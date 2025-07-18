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
        <div className="flex items-center justify-center w-full">
          <div className="w-1/2 flex flex-col gap-4">
            <Image src={'/img/mango_rebanado.webp'} width={150} height={200} />
            <p className="text-l-600 font-bold max-w-[350px]">Aquí puedes comunicarte con nosotros</p>

            <p className="max-w-[350px]" dangerouslySetInnerHTML={{ __html: dictionary.footer.CENTRO_PRINCIPAL }} />

            <div className="flex flex-col items-start justify-center">
              <p className="text-l-300">Calle 55, PH SFC. Oficina 26D Obarrio,</p>
              <p className="text-l-300">Ciudad de Panamá, Panamá</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <FormHrk />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default page;
