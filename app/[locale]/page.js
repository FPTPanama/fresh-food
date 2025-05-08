import GeneralLayout from '@/components/general-layout/general-layout';
import Image from 'next/image';
import { TiLeaf } from 'react-icons/ti';
import { BiWorld, BiLoaderCircle } from 'react-icons/bi';
import { LuBadgeCheck } from 'react-icons/lu';
import { getDictionary } from '@/lib/getDictionary';

export default async function Home({ params }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const compromiseItems = [
    {
      title: dictionary.home.compromise_items[0].TITLE,
      icon: <TiLeaf size={60} />,
      text: dictionary.home.compromise_items[0].TEXT,
    },
    {
      title: dictionary.home.compromise_items[1].TITLE,
      icon: <BiWorld size={60} />,
      text: dictionary.home.compromise_items[1].TEXT,
    },
    {
      title: dictionary.home.compromise_items[2].TITLE,
      icon: <BiLoaderCircle size={60} />,
      text: dictionary.home.compromise_items[2].TEXT,
    },
    {
      title: dictionary.home.compromise_items[3].TITLE,
      icon: <LuBadgeCheck size={60} />,
      text: dictionary.home.compromise_items[3].TEXT,
    },
  ];

  return (
    <div className="flex flex-col responsiveWidth">
      <GeneralLayout params={params}>
        <div className="flex flex-col gap-14 w-full items-center justify-center">
          <section style={{ height: 'calc(100vh - 180px)' }} className="flex flex-col w-full items-center justify-center gap-7">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-end justify-center w-2/6 text-greendark text-right gap-5">
                <h1 className="font-black text-l-800">{dictionary.home.LLEVAMOS_LA_FRUTA}</h1>
                <p className="text-l-300" dangerouslySetInnerHTML={{ __html: dictionary.home.CADA_PRODUCTO_LLEGA }} />

                <button className="px-10 py-3 bg-greendark rounded-full text-white">{dictionary.home.YA_NOS_CONOCES}</button>
              </div>
              <div className="flex items-center justify-center w-2/6 border">
                <Image className="mb-28 z-30 md:w-[800px] absolute" src={'/img/frutas_con_zumo_v3.webp'} width={700} height={200} />
              </div>
              <div className="flex flex-col items-start justify-center w-2/6 h-ful gap-5">
                <p className="font-black text-l-800 text-greendark">{dictionary.home.LIMON_MANGO}</p>
              </div>
            </div>
          </section>
          <section
            className="mt-20"
            style={{
              backgroundImage: 'url(/img/agricultor_limones_tahiti.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              position: 'relative',
              paddingTop: '56.25%',
              borderRadius: '50px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '50px',
                background: 'linear-gradient(90deg,rgba(0, 0, 0, 0.60) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)',
              }}
            >
              <div className="flex items-center justify-center w-full gap-5 h-full p-16">
                <div className="flex flex-col w-1/2 justify-center items-start">
                  <h2 className="text-white leading-snug font-black text-l-500">{dictionary.home.AGRICULTORES_EXPERTOS}</h2>
                  <p className="text-white text-l-500 font-reg" dangerouslySetInnerHTML={{ __html: dictionary.home.LLEVANDO_TU_MESA }} />
                </div>
                <div className="flex flex-col items-center justify-center w-1/2"></div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-start justify-center w-full md:mt-14">
            <h2 className="font-black text-l-600" dangerouslySetInnerHTML={{ __html: dictionary.home.NUESTRO_COMPROMISO }} />
            <div className="grid grid-cols-4 w-full gap-10 mt-10">
              {compromiseItems.map((item, key) => {
                return (
                  <div key={key} className="flex w-full flex-col justify-start items-center p-5 gap-5">
                    <div className="flex items-center justify-start w-full">{item.icon}</div>
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <p className="font-black text-l-300">{item.title}</p>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="flex flex-col items-start justify-center w-full md: mt-14 gap-5">
            <div className="flex flex-col items-start justify-center max-w-[350px] gap-5">
              <h2 className="font-black text-l-600" dangerouslySetInnerHTML={{ __html: dictionary.home.NUESTRO_EMPAQUE }} />
            </div>
            <div className="grid grid-cols-3 w-full gap-5">
              <div className="flex items-center justify-center w-full">
                <Image src={'/img/mangos_box.webp'} width={400} height={200} alt="mangos en caja" />
              </div>
              <div className="flex flex-col w-full items-center justify-center gap-5">
                <p
                  className="max-w-[350px] text-l-600 text-center font-reg leading-10"
                  dangerouslySetInnerHTML={{ __html: dictionary.home.GARANTIZAMOS_SEGURIDAD_REQUERIMIENTOS }}
                />
                <p
                  className="max-w-[350px] text-l-300 text-center"
                  dangerouslySetInnerHTML={{ __html: dictionary.home.UTILIZAMOS_MATERIAL_ALTA_CALIDAD }}
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <Image src={'/img/pineapples_box.webp'} width={400} height={200} alt="mangos en caja" />
              </div>
            </div>
          </section>
        </div>
      </GeneralLayout>
    </div>
  );
}
