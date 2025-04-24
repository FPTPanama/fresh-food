import GeneralLayout from '@/components/general-layout/general-layout';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col responsiveWidth">
      <GeneralLayout>
        <div className="flex flex-col gap-14 w-full items-center justify-center">
          <div style={{ height: 'calc(100vh - 180px)' }} className="flex flex-col w-full items-center justify-center gap-7">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-end justify-center w-2/6 text-greendark text-right gap-5">
                <h1 className="font-black">Llevamos lo mejor a donde más importa</h1>
                <p className="text-l-300 leading-3">
                  Cada producto llega a su destino con la promesa de algo <span className="font-rare text-l-600">bien hecho</span>.
                </p>
                <button className="px-10 py-3 bg-greendark rounded-full text-white">¿Ya nos conoces?</button>
              </div>
              <div className="flex items-center justify-center w-2/6 border">
                <Image className="mb-28 z-30 absolute md:w-[800px]" src={'/img/frutas_con_zumo_v3.webp'} width={700} height={200} />
              </div>
              <div className="flex flex-col items-start justify-center w-2/6 h-ful gap-5">
                <p className="font-black text-l-800 text-greendark">Limón, piña, pitahaya, mango, aguacate, café, cacao.</p>
                {/* <p className="font-reg text-l-400 text-greendark">Frutas exóticas seleccionadas desde latinoamérica a cualquier parte del mundo.</p> */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col w-1/3">
              <Image src={'/img/pitahaya_cortada_v1.webp'} width={400} height={100} alt="pitahaya cortada" />
            </div>
            <div className=" flex flex-col w-1/3 gap-5">
              <h2 className="font-black text-l-600 m-0">
                Comercializamos <br />
                calidad
              </h2>
              <p>
                Ofrecemos <span className="font-black">productos de alta calidad</span> con experiencia en exportaciones a Europa y Asia. Nuestro
                control garantiza frescura en cada entrega.
              </p>
              <p>
                Con presencia en <span className="font-black">Panamá, EE. UU. y Venezuela</span>, operamos de forma eficiente y cercana a nuestros
                mercados.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <Image src={'/img/mangos_caja.webp'} width={300} height={300} alt="mangos en una caja" />
            </div>
          </div>
        </div>
      </GeneralLayout>
    </div>
  );
};

export default Home;
