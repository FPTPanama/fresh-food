import GeneralLayout from '@/components/general-layout/general-layout';
import Image from 'next/image';
import { TiLeaf } from 'react-icons/ti';
import { BiWorld, BiLoaderCircle } from 'react-icons/bi';
import { PiFarmFill } from 'react-icons/pi';
import { FaTruckField, FaBoxesPacking, FaShip, FaTruckArrowRight } from 'react-icons/fa6';
import { MdHouseboat } from 'react-icons/md';
import { PiShippingContainerFill } from 'react-icons/pi';
import { LuBadgeCheck } from 'react-icons/lu';
import { FaTruckLoading } from 'react-icons/fa';
import { getDictionary } from '@/lib/getDictionary';
import Link from 'next/link';

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

  const RoadFruitMap = [
    {
      title: dictionary.home.road_fruit_map[0].TITLE,
      icon: <PiFarmFill size={60} />,
      text: dictionary.home.road_fruit_map[0].TEXT,
    },
    {
      title: dictionary.home.road_fruit_map[1].TITLE,
      icon: <FaTruckField size={60} />,
      text: dictionary.home.road_fruit_map[1].TEXT,
    },
    {
      title: dictionary.home.road_fruit_map[2].TITLE,
      icon: <FaBoxesPacking size={60} />,
      text: dictionary.home.road_fruit_map[2].TEXT,
    },
    {
      title: dictionary.home.road_fruit_map[3].TITLE,
      icon: <FaTruckLoading size={60} />,
      text: dictionary.home.road_fruit_map[3].TEXT,
    },
    {
      title: dictionary.home.road_fruit_map[4].TITLE,
      icon: <PiShippingContainerFill size={60} />,
      text: dictionary.home.road_fruit_map[4].TEXT,
    },
    {
      title: dictionary.home.road_fruit_map[5].TITLE,
      icon: <FaShip size={60} />,
      text: dictionary.home.road_fruit_map[5].TEXT,
    },
    {
      title: dictionary.home.road_fruit_map[6].TITLE,
      icon: <MdHouseboat size={60} />,
      text: dictionary.home.road_fruit_map[6].TEXT,
    },
    {
      title: dictionary.home.road_fruit_map[7].TITLE,
      icon: <FaTruckArrowRight size={60} className="" />,
      text: dictionary.home.road_fruit_map[7].TEXT,
    },
  ];

  return (
    <div className="flex flex-col responsiveWidth">
      <GeneralLayout dictionary={dictionary}>
        <div className="flex flex-col gap-14 w-full items-center justify-center">
          <section className="flex flex-col w-full h-full mt-10 md:mt-0 md:h-[calc(100vh-180px)] items-center justify-center gap-7">
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
              <div className="flex flex-col items-start md:items-end justify-center w-full md:w-2/6 text-greendark text-left md:text-right gap-5">
                <h1 className="font-black text-l-600 md:text-l-800">{dictionary.home.LLEVAMOS_LA_FRUTA}</h1>
                <p className="text-l-200 md:text-l-500">
                  {dictionary.home.CADA_PRODUCTO_LLEGA}
                  <span className="font-rare text-l-400 md:text-l-600 leading-3">{dictionary.home.BIEN_HECHO}</span>
                </p>

                <Link
                  href={'/about-us'}
                  className="flex justify-center px-10 py-3 bg-greendark rounded-full text-white z-20 hover:px-14 transition-all w-full md:w-fit"
                >
                  {dictionary.home.YA_NOS_CONOCES}
                </Link>
              </div>
              <div className="flex items-center justify-center w-full md:w-2/6 h-[100px] mt-44 md:mt-0">
                <Image
                  className="mb-0 md:mb-28 md:h-auto md:w-[800px] absolute z-10"
                  src={'/img/frutas_con_zumo_ok.webp'}
                  width={700}
                  height={200}
                  alt="frutas con zumo"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full md:w-2/6 h-ful gap-5">
                <p className="font-black text-l-600 md:text-l-800 text-greendark">{dictionary.home.LIMON_MANGO}</p>
              </div>
            </div>
          </section>
          <section
            className="mt-0 md:mt-28 flex relative w-full md:pt-[56.25%] rounded-2xl md:rounded-[50px] bg-cover bg-center bg-no-repeat h-[400px] md:h-auto"
            style={{
              backgroundImage: 'url(/img/agricultor_limones_tahiti_ok.webp)',
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
              <div className="flex items-center justify-center w-full gap-5 h-full p-10 md:p-16">
                <div className="flex flex-col w-1/2 justify-center items-start">
                  <h2 className="text-white leading-snug font-black text-l-200 md:text-l-500">{dictionary.home.AGRICULTORES_EXPERTOS}</h2>
                  <p
                    className="text-white text-l-200 md:text-l-500 font-reg"
                    dangerouslySetInnerHTML={{ __html: dictionary.home.LLEVANDO_TU_MESA }}
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-1/2" />
              </div>
            </div>
          </section>
          <section className="flex flex-col items-start justify-center w-full md:mt-14 text-greendark">
            <h2 className="font-black text-l-500 md:text-l-600" dangerouslySetInnerHTML={{ __html: dictionary.home.NUESTRO_COMPROMISO }} />
            <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-10 md:gap-10 mt-10">
              {compromiseItems.map((item, key) => {
                return (
                  <div key={key} className="flex w-full flex-col justify-start items-center p-0 md:p-5 gap-2 md:gap-5">
                    <div className="flex items-center justify-start w-full">{item.icon}</div>
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <p className="font-black text-l-400 md:text-l-300 leading-2">{item.title}</p>
                      <p className="text-l-200">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="flex flex-col items-start justify-center w-full  md:mt-14 gap-5 text-greendark">
            <div className="flex flex-col items-start justify-center max-w-[350px] gap-5">
              <h2 className="font-black text-l-500 md:text-l-600" dangerouslySetInnerHTML={{ __html: dictionary.home.NUESTRO_EMPAQUE }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
              <div className="flex items-center justify-center w-full">
                <Image src={'/img/mangos_box_ok.webp'} width={400} height={200} alt="mangos en caja" />
              </div>
              <div className="flex flex-col w-full items-center justify-center gap-5">
                <p
                  className="max-w-[350px] text-l-600 text-left md:text-center font-reg leading-10"
                  dangerouslySetInnerHTML={{ __html: dictionary.home.GARANTIZAMOS_SEGURIDAD_REQUERIMIENTOS }}
                />
                <p
                  className="max-w-[350px] text-l-300 text-left md:text-center"
                  dangerouslySetInnerHTML={{ __html: dictionary.home.UTILIZAMOS_MATERIAL_ALTA_CALIDAD }}
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <Image src={'/img/pineapples_box_ok.webp'} width={400} height={200} alt="mangos en caja" />
              </div>
            </div>
          </section>
          <section className="flex flex-col items-start justify-center w-full md: mt-14 gap-5 text-greendark">
            <h2 className="font-black text-l-500 md:text-l-600" dangerouslySetInnerHTML={{ __html: dictionary.home.NUESTRA_RUTA }} />
            <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-10 mt-10">
              {RoadFruitMap.map((item, key) => {
                return (
                  <div key={key} className="flex w-full flex-col justify-start items-center md:p-5 gap-5">
                    <div className="flex items-center justify-start w-full gap-3">
                      <p className="font-black text-l-600">{key + 1}</p>
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <p className="font-black text-l-300">{item.title}</p>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </GeneralLayout>
    </div>
  );
}
