import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';
import React from 'react';
import { TbTemperatureSnow } from 'react-icons/tb';
import { LuPackageCheck } from 'react-icons/lu';
import { MdTrackChanges } from 'react-icons/md';
import { GrUserPolice } from 'react-icons/gr';

const page = async ({ params }) => {
  const { locale } = params;
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
    <GeneralLayout dictionary={dictionary}>
      <div className="responsiveWidth text-greendark">
        <div className="flex flex-col w-full gap-20">
          <section style={{ height: 'calc(100vh - 180px)' }} className="flex flex-col w-full items-center justify-center gap-7">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col justify-center items-start w-2/5 h-full gap-5">
                <h1 className="font-black text-l-800 text-greendark">{dictionary.about_us.FRUTA_FRESCA_PRINCIPIO_FIN}</h1>
                <p className="text-l-400 font-reg">{dictionary.about_us.FRESH_FOOD_GARANTIZAMOS}</p>
              </div>
              <div className="flex flex-col w-3/5 items-center justify-start h-full">
                <Image className="h-full w-auto" src={'/img/limon_tahiti_volando_v2.webp'} width={300} height={400} alt="limon tahiti" />
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center w-full gap-5 mb-10">
            <div
              className="flex flex-col items-center justify-center w-full min-h-[700px]"
              style={{
                backgroundImage: `url(/img/cacao_perfilado_ok.webp)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                position: 'relative',
                borderRadius: '30px',
                backgroundRepeat: 'no-repeat',
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
                <div className="flex items-center justify-start w-full h-full text-white p-10">
                  <div className="flex flex-col w-1/3 gap-5">
                    <h2 className="font-black text-l-600">{dictionary.about_us.SIN_INTERMEDIARIOS}</h2>
                    <p className="text-l-300 font-reg">{dictionary.about_us.LA_UNICA_MANERA_DE_GARANTIZAR}</p>
                    <p className="text-l-300 font-reg">{dictionary.about_us.SEGUIMOS_PROTOCOLOS_RIGUROSOS}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-4 gap-4">
            {aboutUsPack.map((item, key) => {
              return (
                <div key={key} className="flex flex-col items-start justify-start p-3 gap-4">
                  <div className="flex items-center justify-center">{item.icon}</div>
                  <p className="text-l-400 font-black">{item.title}</p>
                  <p className="text-l-200">{item.description}</p>
                </div>
              );
            })}
          </section>
          <section className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col w-1/3 gap-10">
              <h2 className="text-l-900 font-bold">{dictionary.about_us.TU_CONFIANZA_NUESTRA_PRIORIDAD}</h2>
              <p className="text-l-400 font-reg leading-9">{dictionary.about_us.SABEMOS_QUE_ELEGIR_ALIMENTOS}</p>
            </div>
          </section>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default page;
