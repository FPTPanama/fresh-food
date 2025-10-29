import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import FormHrk from 'components/form/form-hrk';
import Image from 'next/image';
import React from 'react';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  return {
    title: locale === 'es'
      ? 'Contacto - Fresh Food Panamá | Solicita una Cotización'
      : 'Contact - Fresh Food Panama | Request a Quote',
    description: locale === 'es'
      ? 'Contáctanos para solicitar información sobre exportación de frutas tropicales. Respondemos en 24 horas. Oficinas en Panamá, atención internacional.'
      : 'Contact us to request information about tropical fruit export. We respond within 24 hours. Offices in Panama, international service.',
    keywords: locale === 'es'
      ? 'contacto exportadores frutas, cotización exportación panamá, importar frutas tropicales, proveedores frutas frescas'
      : 'contact fruit exporters, panama export quote, import tropical fruits, fresh fruit suppliers',
    openGraph: {
      title: locale === 'es' ? 'Contacto - Fresh Food Panamá' : 'Contact - Fresh Food Panama',
      description: locale === 'es'
        ? 'Solicita información o cotización. Estamos aquí para ayudarte.'
        : 'Request information or a quote. We are here to help you.',
      url: `https://freshfoodpanama.com/${locale}/contact`,
    },
    alternates: {
      canonical: `https://freshfoodpanama.com/${locale}/contact`,
      languages: {
        'es': 'https://freshfoodpanama.com/es/contact',
        'en': 'https://freshfoodpanama.com/en/contact',
      },
    },
  };
}

const page = async ({ params }) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return (
    <GeneralLayout dictionary={dictionary} showFooter={false}>
      <div className="responsiveWidth w-full text-greendark">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-1/2 flex flex-col gap-4 items-center">
            <div className="flex flex-col items-start justify-center w-1/2 gap-5">
              <Image src={'/img/mango_rebanado_ok.webp'} width={150} height={200} alt="mango rebanado" />
              <p className="text-l-600 font-bold max-w-[350px]">{dictionary.contact.AQUI_PUEDES_COMUNICARTE}</p>

              <p className="max-w-[350px]" dangerouslySetInnerHTML={{ __html: dictionary?.footer?.CENTRO_PRINCIPAL }} />

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
