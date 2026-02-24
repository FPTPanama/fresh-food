import GeneralLayout from '@/components/general-layout/general-layout';
import ScrollReveal from '@/components/scroll-reveal';
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
import { TextAnimate } from '@/components/text-animate';
import { ParallaxImage } from '@/components/parallax';
import BlogHero from 'components/blog-hero/blog-hero';

export default async function Home({ params }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const compromiseItems = [
    {
      title: dictionary.home.compromise_items[0].TITLE,
      icon: <TiLeaf size={60} />,
      text: dictionary.home.compromise_items[0].TEXT,
      start: 'top 80%',
      delay: 1,
    },
    {
      title: dictionary.home.compromise_items[1].TITLE,
      icon: <BiWorld size={60} />,
      text: dictionary.home.compromise_items[1].TEXT,
      start: 'top 85%',
      delay: 0.5,
    },
    {
      title: dictionary.home.compromise_items[2].TITLE,
      icon: <BiLoaderCircle size={60} />,
      text: dictionary.home.compromise_items[2].TEXT,
      start: 'top 76%',
      delay: 0.7,
    },
    {
      title: dictionary.home.compromise_items[3].TITLE,
      icon: <LuBadgeCheck size={60} />,
      text: dictionary.home.compromise_items[3].TEXT,
      start: 'top 75%',
      delay: 0.8,
    },
  ];

  const RoadFruitMap = [
    {
      title: dictionary.home.road_fruit_map[0].TITLE,
      icon: <PiFarmFill size={60} />,
      text: dictionary.home.road_fruit_map[0].TEXT,
      start: 'top 80%',
      delay: 0.5,
    },
    {
      title: dictionary.home.road_fruit_map[1].TITLE,
      icon: <FaTruckField size={60} />,
      text: dictionary.home.road_fruit_map[1].TEXT,
      start: 'top 90%',
      delay: 1,
    },
    {
      title: dictionary.home.road_fruit_map[2].TITLE,
      icon: <FaBoxesPacking size={60} />,
      text: dictionary.home.road_fruit_map[2].TEXT,
      start: 'top 80%',
      delay: 1.5,
    },
    {
      title: dictionary.home.road_fruit_map[3].TITLE,
      icon: <FaTruckLoading size={60} />,
      text: dictionary.home.road_fruit_map[3].TEXT,
      start: 'top 85%',
      delay: 1.0,
    },
    {
      title: dictionary.home.road_fruit_map[4].TITLE,
      icon: <PiShippingContainerFill size={60} />,
      text: dictionary.home.road_fruit_map[4].TEXT,
      start: 'top 80%',
      delay: 0.6,
    },
    {
      title: dictionary.home.road_fruit_map[5].TITLE,
      icon: <FaShip size={60} />,
      text: dictionary.home.road_fruit_map[5].TEXT,
      start: 'top 90%',
      delay: 0.75,
    },
    {
      title: dictionary.home.road_fruit_map[6].TITLE,
      icon: <MdHouseboat size={60} />,
      text: dictionary.home.road_fruit_map[6].TEXT,
      start: 'top 85%',
      delay: 0.9,
    },
    {
      title: dictionary.home.road_fruit_map[7].TITLE,
      icon: <FaTruckArrowRight size={60} className="" />,
      text: dictionary.home.road_fruit_map[7].TEXT,
      start: 'top 80%',
      delay: 0.5,
    },
  ];

  return (
    <div className="responsiveWidth flex flex-col">
      <GeneralLayout dictionary={dictionary}>
        <div className="flex w-full flex-col items-center justify-center gap-14">
          <section className="relative mt-10 flex h-full w-full flex-col items-center justify-center gap-7 md:mt-0 md:h-[calc(100vh-180px)]">
            <div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
              <div className="flex w-full flex-col items-start justify-center gap-5 text-left text-greendark md:w-2/6 md:items-end md:text-right">
                <TextAnimate from={{ opacity: 0, y: 50 }} duration={0.8}>
                  <h1 className="font-black text-l-600 md:text-l-800">{dictionary.home.LLEVAMOS_LA_FRUTA}</h1>
                </TextAnimate>
                <TextAnimate from={{ opacity: 0, y: 50 }} duration={0.9} delay={0.2}>
                  <p className="text-l-200 md:text-l-500">
                    {dictionary.home.CADA_PRODUCTO_LLEGA}
                    <span className="font-rare text-l-400 leading-3 md:text-l-600">{dictionary.home.BIEN_HECHO}</span>
                  </p>
                </TextAnimate>

                <Link
                  href={'/about-us'}
                  className="z-20 flex w-full justify-center rounded-full bg-greendark px-10 py-3 text-white transition-all hover:px-14 md:w-fit"
                >
                  {dictionary.home.YA_NOS_CONOCES}
                </Link>
              </div>
              <div className="mt-44 flex h-[100px] w-full items-center justify-center md:mt-0 md:w-2/6" />
              <div className="h-ful flex w-full flex-col items-start justify-center gap-5 md:w-2/6">
                <TextAnimate from={{ opacity: 0, y: 50 }} duration={1.2} delay={0.5}>
                  <p className="font-black text-l-600 text-greendark md:text-l-800">{dictionary.home.LIMON_MANGO}</p>
                </TextAnimate>
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[90vw] -translate-x-1/2 -translate-y-1/2 md:w-auto">
              <ParallaxImage
                src="/img/frutas_con_zumo_ok.webp"
                alt="frutas con zumo"
                width={700}
                speed={0.1}
                height={200}
                fill={false}
                fadeIn
                zoomIn
                className="w-full md:w-auto"
                imageClassName="mb-0 w-full md:mb-28 h-auto md:w-[800px] w-auto"
                priority
                quality={90}
              />
            </div>
          </section>

          <BlogHero image="/img/agricultor_limones_tahiti_ok.webp" brightness="0.9" isCover={false}>
            <div className="relative z-10 flex h-[400px] w-full items-center justify-center gap-5 p-10 md:h-[calc(100vh-130px)] md:p-16">
              <div className="flex w-1/2 flex-col items-start justify-center">
                <ScrollReveal start="top 80%" duration={1.5} once={false}>
                  <h2 className="font-black text-l-200 leading-snug text-white md:text-l-500">{dictionary.home.AGRICULTORES_EXPERTOS}</h2>
                </ScrollReveal>
                <ScrollReveal start="top 80%" once={false}>
                  <p
                    className="font-reg text-l-200 text-white md:text-l-500"
                    dangerouslySetInnerHTML={{ __html: dictionary.home.LLEVANDO_TU_MESA }}
                  />
                </ScrollReveal>
              </div>
              <div className="flex w-1/2 flex-col items-center justify-center" />
            </div>
          </BlogHero>

          <section className="flex w-full flex-col items-start justify-center text-greendark md:mt-14">
            <h2
              className="font-black text-l-500 text-greendark md:text-l-600"
              dangerouslySetInnerHTML={{ __html: dictionary.home.NUESTRO_COMPROMISO }}
            />
            <div className="mt-10 grid w-full grid-cols-1 gap-10 md:grid-cols-4 md:gap-10">
              {compromiseItems.map((item, key) => {
                return (
                  <ScrollReveal key={key} start={item.start} from={{ opacity: 0, y: 50 }} duration={1.2} delay={item.delay} once={false}>
                    <div key={key} className="flex w-full flex-col items-center justify-start gap-2 p-0 md:gap-5 md:p-5">
                      <div className="flex w-full items-center justify-start">{item.icon}</div>
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <p className="leading-2 font-black text-l-400 md:text-l-300">{item.title}</p>
                        <p className="text-l-200">{item.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
          <section className="flex w-full flex-col items-start justify-center gap-5 text-greendark md:mt-14">
            <div className="flex max-w-[350px] flex-col items-start justify-center gap-5">
              <ScrollReveal start="top 80%" from={{ opacity: 0, y: 50 }} duration={1.2} delay={0.5} once={false}>
                <h2
                  className="font-black text-l-500 text-greendark md:text-l-600"
                  dangerouslySetInnerHTML={{ __html: dictionary.home.NUESTRO_EMPAQUE }}
                />
              </ScrollReveal>
            </div>
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
              <div className="flex w-full items-center justify-center">
                <Image src={'/img/mangos_box_ok.webp'} width={400} height={200} alt="mangos en caja" loading="lazy" quality={85} />
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-5">
                <ScrollReveal start="top 80%" from={{ opacity: 0, y: 50 }} duration={1.2} delay={0.5} once={false}>
                  <p
                    className="max-w-[350px] text-left font-reg text-l-600 leading-10 md:text-center"
                    dangerouslySetInnerHTML={{ __html: dictionary.home.GARANTIZAMOS_SEGURIDAD_REQUERIMIENTOS }}
                  />
                </ScrollReveal>
                <ScrollReveal start="top 80%" from={{ opacity: 0, y: 50 }} duration={1.8} delay={1} once={false}>
                  <p
                    className="max-w-[350px] text-left text-l-300 md:text-center"
                    dangerouslySetInnerHTML={{ __html: dictionary.home.UTILIZAMOS_MATERIAL_ALTA_CALIDAD }}
                  />
                </ScrollReveal>
              </div>
              <div className="flex w-full items-center justify-center">
                <Image src={'/img/pineapples_box_ok.webp'} width={400} height={200} alt="piñas en caja" loading="lazy" quality={85} />
              </div>
            </div>
          </section>
          <section className="md: mt-14 flex w-full flex-col items-start justify-center gap-5 text-greendark">
            <h2 className="font-black text-l-500 text-greendark md:text-l-600" dangerouslySetInnerHTML={{ __html: dictionary.home.NUESTRA_RUTA }} />
            <div className="mt-10 grid w-full grid-cols-1 gap-10 md:grid-cols-4">
              {RoadFruitMap.map((item, key) => {
                return (
                  <ScrollReveal key={key} start={item.start} from={{ opacity: 0, y: 50 }} duration={1.8} delay={item.delay} once={false}>
                    <div className="flex w-full flex-col items-center justify-start gap-5 md:p-5">
                      <div className="flex w-full items-center justify-start gap-3">
                        <p className="font-black text-l-600">{key + 1}</p>
                        {item.icon}
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-2">
                        <p className="font-black text-l-300">{item.title}</p>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        </div>
      </GeneralLayout>
    </div>
  );
}
