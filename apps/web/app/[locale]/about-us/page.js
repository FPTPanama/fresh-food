import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';
import React from 'react';
import { TbTemperatureSnow } from 'react-icons/tb';
import { LuPackageCheck } from 'react-icons/lu';
import { MdTrackChanges } from 'react-icons/md';
import { GrUserPolice } from 'react-icons/gr';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title:
      locale === 'es'
        ? 'Nosotros - Fresh Food Panamá | Exportadores de Confianza desde Centroamérica'
        : 'About Us - Fresh Food Panama | Trusted Exporters from Central America',
    description:
      locale === 'es'
        ? 'Somos exportadores directos de frutas tropicales desde Panamá. Sin intermediarios, control de temperatura, empaque especializado y trazabilidad completa. Cumplimos estándares internacionales.'
        : 'We are direct exporters of tropical fruits from Panama. No intermediaries, temperature control, specialized packaging, and complete traceability. We comply with international standards.',
    keywords:
      locale === 'es'
        ? 'exportadores frutas panamá, agroexportación centroamérica, trazabilidad alimentos, control temperatura frutas, certificaciones fitosanitarias'
        : 'fruit exporters panama, central america agro-export, food traceability, fruit temperature control, phytosanitary certifications',
    openGraph: {
      title: locale === 'es' ? 'Nosotros - Fresh Food Panamá' : 'About Us - Fresh Food Panama',
      description:
        locale === 'es'
          ? 'Exportadores directos con más de 10 años de experiencia. Garantizamos calidad y frescura desde el origen.'
          : 'Direct exporters with over 10 years of experience. We guarantee quality and freshness from the origin.',
      url: `https://freshfoodpanama.com/${locale}/about-us`,
      images: [
        {
          url: 'https://freshfoodpanama.com/img/limon_tahiti_volando_v2.webp',
          width: 1200,
          height: 630,
          alt: 'Fresh Food Panama - About Us',
        },
      ],
    },
    alternates: {
      canonical: `https://freshfoodpanama.com/${locale}/about-us`,
      languages: {
        es: 'https://freshfoodpanama.com/es/about-us',
        en: 'https://freshfoodpanama.com/en/about-us',
      },
    },
  };
}

const page = async ({ params }) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const aboutUsPack = [
    {
      title: dictionary.about_us.pack.CONTROL_TEMPERATURA,
      description: dictionary.about_us.pack.MANTENEMOS_CADENA,
      icon: <TbTemperatureSnow size={80} />,
    },
    {
      title: dictionary.about_us.pack.EMPAQUE_ESPECIALIZADO,
      description: dictionary.about_us.pack.UTILIZAMOS_EMPAQUES,
      icon: <LuPackageCheck size={80} />,
    },
    {
      title: dictionary.about_us.pack.SEGUIMIENTO_TIEMPO_REAL,
      description: dictionary.about_us.pack.OFRECEMOS_MONITOREO,
      icon: <MdTrackChanges size={80} />,
    },
    {
      title: dictionary.about_us.pack.CUMPLIMIENTO_NORMATIVAS,
      description: dictionary.about_us.pack.CUMPLIMOS_ESTANDARES,
      icon: <GrUserPolice size={80} />,
    },
  ];

  return (
    <div className="responsiveWidth text-greendark">
      <GeneralLayout dictionary={dictionary}>
        <div className="flex w-full flex-col gap-20">
          <section className="flex h-auto w-full flex-col items-center justify-center gap-7 md:h-[calc(100vh-180px)]">
            <div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
              <div className="flex h-full w-full flex-col items-start justify-center gap-5 md:w-2/5">
                <h1 className="font-black text-l-600 text-greendark md:text-l-800">{dictionary.about_us.FRUTA_FRESCA_PRINCIPIO_FIN}</h1>
                <p className="font-reg text-l-300 md:text-l-400">{dictionary.about_us.FRESH_FOOD_GARANTIZAMOS}</p>
              </div>
              <div className="flex h-[200px] w-full flex-col items-center justify-start md:h-full md:w-3/5">
                <Image
                  className="relative -top-16 h-[300px] w-auto md:top-0 md:h-full"
                  src={'/img/limon_tahiti_volando_v2.webp'}
                  width={300}
                  height={400}
                  alt="limon tahiti"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </section>
          <section className="flex w-full flex-col items-center justify-center gap-5 md:mb-10">
            <div
              className="relative flex min-h-[500px] w-full flex-col items-center justify-center rounded-[30px] bg-cover bg-center bg-no-repeat md:min-h-[700px]"
              style={{
                backgroundImage: `url(/img/cacao_perfilado_ok.webp)`,
              }}
            >
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50px',
                  background: 'linear-gradient(90deg,rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.7) 100%)',
                }}
              >
                <div className="flex h-full w-full items-center justify-start p-5 text-white md:p-10">
                  <div className="flex w-full flex-col gap-5 md:w-1/3">
                    <h2 className="font-black text-l-400 text-white md:text-l-600">{dictionary.about_us.SIN_INTERMEDIARIOS}</h2>
                    <p className="font-reg text-l-200 md:text-l-300">{dictionary.about_us.LA_UNICA_MANERA_DE_GARANTIZAR}</p>
                    <p className="font-reg text-l-200 md:text-l-300">{dictionary.about_us.SEGUIMOS_PROTOCOLOS_RIGUROSOS}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {aboutUsPack.map((item, key) => {
              return (
                <div key={key} className="flex flex-col items-start justify-start gap-4 p-3">
                  <div className="flex items-center justify-center">{item.icon}</div>
                  <p className="font-black text-l-400">{item.title}</p>
                  <p className="text-l-200">{item.description}</p>
                </div>
              );
            })}
          </section>

          <section className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col gap-10 md:w-1/3">
              <h2 className="text-l-600 font-bold text-greendark md:text-l-900">{dictionary.about_us.TU_CONFIANZA_NUESTRA_PRIORIDAD}</h2>
              <p className="font-reg text-l-300 leading-9 md:text-l-400">{dictionary.about_us.SABEMOS_QUE_ELEGIR_ALIMENTOS}</p>
            </div>
          </section>
        </div>
      </GeneralLayout>
    </div>
  );
};

export default page;
