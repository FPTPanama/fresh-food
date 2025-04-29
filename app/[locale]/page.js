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
      title: 'Productos de calidad',
      icon: <TiLeaf size={60} />,
      text: 'De nuestra red de proveedores a su país',
    },
    {
      title: 'Logística internacional',
      icon: <BiWorld size={60} />,
      text: 'Hacemos realidad su operación de inicio a fin',
    },
    {
      title: 'Disponibilidad',
      icon: <BiLoaderCircle size={60} />,
      text: 'Nuestra cartera de productores garantiza disponibilidad todo el año',
    },
    {
      title: 'Calidad y compromiso',
      icon: <LuBadgeCheck size={60} />,
      text: 'Nuestros clientes avalan la seriedad y transparencia de nuestras operaciones',
    },
  ];
  return (
    <div className="flex flex-col responsiveWidth">
      <GeneralLayout>
        <div className="flex flex-col gap-14 w-full items-center justify-center">
          <section style={{ height: 'calc(100vh - 180px)' }} className="flex flex-col w-full items-center justify-center gap-7">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-end justify-center w-2/6 text-greendark text-right gap-5">
                <h1 className="font-black">{dictionary.home.LLEVAMOS_LA_FRUTA}</h1>
                <p className="text-l-300 leading-3">
                  Cada producto llega a su destino con la promesa de algo <span className="font-rare text-l-600">bien hecho</span>.
                </p>
                <button className="px-10 py-3 bg-greendark rounded-full text-white">¿Ya nos conoces?</button>
              </div>
              <div className="flex items-center justify-center w-2/6 border">
                <Image className="mb-28 z-30 md:w-[800px] absolute" src={'/img/frutas_con_zumo_v3.webp'} width={700} height={200} />
              </div>
              <div className="flex flex-col items-start justify-center w-2/6 h-ful gap-5">
                <p className="font-black text-l-800 text-greendark">Limón, piña, pitahaya, mango, aguacate, café, cacao.</p>
                {/* <p className="font-reg text-l-400 text-greendark">Frutas exóticas seleccionadas desde latinoamérica a cualquier parte del mundo.</p> */}
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
                  <h2 className="text-white leading-snug font-black">Agricultores expertos desde Panamá, Estados Unidos y Venezuela.</h2>
                  <p className="text-white text-l-500 font-reg">
                    LLevando a tu mesa <br /> la esencia de la naturaleza.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-1/2"></div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-start justify-center w-full">
            <h2>Nuestro compromiso</h2>
            <div className="grid grid-cols-4 w-full gap-10">
              {compromiseItems.map((item, key) => {
                return (
                  <div key={key} className="flex w-full flex-col justify-center items-center p-5 gap-5">
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
        </div>
      </GeneralLayout>
    </div>
  );
}
