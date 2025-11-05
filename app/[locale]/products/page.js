import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';
import React from 'react';
import { TiInfoLarge } from 'react-icons/ti';
import ProductSchema from '@/components/seo/ProductSchema';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  return {
    title: locale === 'es' 
      ? 'Productos Fresh Food | Frutas Tropicales de Exportación - Limón, Mango, Piña'
      : 'Fresh Food Products | Export Tropical Fruits - Lime, Mango, Pineapple',
    description: locale === 'es'
      ? 'Exportamos frutas frescas de alta calidad: Limón Tahití, Mango Kent, Piña Golden, Aguacate Hass, Pitahaya y Cacao. Productos certificados desde Panamá.'
      : 'We export high-quality fresh fruits: Tahiti Lime, Kent Mango, Golden Pineapple, Hass Avocado, Dragon Fruit, and Cacao. Certified products from Panama.',
    keywords: locale === 'es'
      ? 'limón tahití exportación, mango kent panamá, piña golden, aguacate hass, pitahaya exportación, cacao panamá, frutas tropicales exportación'
      : 'tahiti lime export, kent mango panama, golden pineapple, hass avocado, dragon fruit export, panama cacao, tropical fruits export',
    openGraph: {
      title: locale === 'es' ? 'Productos Fresh Food Panamá' : 'Fresh Food Panama Products',
      description: locale === 'es'
        ? 'Limón, Mango, Piña, Aguacate, Pitahaya y Cacao de alta calidad para exportación'
        : 'High-quality Lime, Mango, Pineapple, Avocado, Dragon Fruit and Cacao for export',
      url: `https://freshfoodpanama.com/${locale}/products`,
      images: [{
        url: 'https://freshfoodpanama.com/img/agricultor_con_pineapple_ok.webp',
        width: 1200,
        height: 630,
        alt: 'Fresh Food Panama Products',
      }],
    },
    alternates: {
      canonical: `https://freshfoodpanama.com/${locale}/products`,
      languages: {
        'es': 'https://freshfoodpanama.com/es/products',
        'en': 'https://freshfoodpanama.com/en/products',
      },
    },
  };
}

const Productos = async ({ params }) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const products = [
    {
      title: dictionary.products.fruits[0].TITLE,
      title_tec: dictionary.products.fruits[0].TITLE_TEC,
      descripcion: dictionary.products.fruits[0].DESCRIPCION,
      alias: dictionary.products.fruits[0].NOTE,
      img: '/img/productos/limon_tahiti.webp',
      bg_img: '/img/productos/limon_tahiti_fondo_ok.webp',
      especificaciones: dictionary.products.fruits[0].especificaciones,
    },
    {
      title: dictionary.products.fruits[1].TITLE,
      title_tec: dictionary.products.fruits[1].TITLE_TEC,
      descripcion: dictionary.products.fruits[1].DESCRIPCION,
      alias: dictionary.products.fruits[1].NOTE,
      img: '/img/productos/mango.webp',
      bg_img: '/img/productos/mango_fondo_ok.webp',
      especificaciones: dictionary.products.fruits[1].especificaciones,
    },
    {
      title: dictionary.products.fruits[2].TITLE,
      title_tec: dictionary.products.fruits[2].TITLE_TEC,
      descripcion: dictionary.products.fruits[2].DESCRIPCION,
      alias: dictionary.products.fruits[2].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/pineapple_fondo_ok.webp',
      especificaciones: dictionary.products.fruits[2].especificaciones,
    },
    {
      title: dictionary.products.fruits[3].TITLE,
      title_tec: dictionary.products.fruits[3].TITLE_TEC,
      descripcion: dictionary.products.fruits[3].DESCRIPCION,
      alias: dictionary.products.fruits[3].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/pitahaya_fondo_ok.webp',
      especificaciones: dictionary.products.fruits[3].especificaciones,
    },
    {
      title: dictionary.products.fruits[4].TITLE,
      title_tec: dictionary.products.fruits[4].TITLE_TEC,
      descripcion: dictionary.products.fruits[4].DESCRIPCION,
      alias: dictionary.products.fruits[4].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/aguacate_fondo_ok.webp',
      especificaciones: dictionary.products.fruits[4].especificaciones,
    },
    {
      title: dictionary.products.fruits[5].TITLE,
      title_tec: dictionary.products.fruits[5].TITLE_TEC,
      descripcion: dictionary.products.fruits[5].DESCRIPCION,
      alias: dictionary.products.fruits[5].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/cacao_fondo_ok.webp',
      especificaciones: dictionary.products.fruits[5].especificaciones,
    },
    {
      title: dictionary.products.fruits[6].TITLE,
      title_tec: dictionary.products.fruits[6].TITLE_TEC,
      descripcion: dictionary.products.fruits[6].DESCRIPCION,
      alias: dictionary.products.fruits[6].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/cafe_fondo_ok.webp',
      especificaciones: dictionary.products.fruits[6].especificaciones,
    },
  ];
  return (
    <>
      <ProductSchema locale={locale} />
      <div className="responsiveWidth gap-10">
        <GeneralLayout dictionary={dictionary}>
        <section className="flex md:mt-0 h-full md:h-[calc(100vh-180px)] flex-col w-full items-center justify-center gap-7">
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <div className="flex flex-col items-start justify-center gap-5 w-full md:w-1/3">
              <h1
                className="font-black text-l-600 md:text-l-800 text-greendark"
                dangerouslySetInnerHTML={{ __html: dictionary.products.CALIDAD_EN_MANOS }}
              />
            </div>
            <div className="flex items-center justify-center w-full h-[200px] md:h-auto md:w-1/3 mt-12 md:mt-0 mb-10 md:mb-0">
              <Image
                className="z-20 h-[400px] md:h-auto w-auto md:w-full"
                src={'/img/agricultor_con_pineapple_ok.webp'}
                width={500}
                height={300}
                alt="agricultor con piña"
                priority
                quality={90}
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full md:w-1/3 gap-5 p-0 md:p-5">
              <h2
                className="text-greendark leading-snug font-black text-l-400 md:text-l-500"
                dangerouslySetInnerHTML={{ __html: dictionary.products.DESDE_PRIMER_CORTE }}
              />

              <button className="text-white bg-greendark py-2 px-5 rounded-full">{dictionary.products.YA_CONOCES_NUESTROS_PRODUCTOS}</button>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center w-full mt-10">
            <h2
              className="text-greendark leading-snug font-black text-l-500 md:text-l-600 text-left md:text-center"
              dangerouslySetInnerHTML={{ __html: dictionary.products.NUESTROS_PRODUCTOS }}
            />
            <p
              className="text-l-300 md:text-l-400 font-reg text-greendark max-w-[350px] text-left md:text-center"
              dangerouslySetInnerHTML={{ __html: dictionary.products.SELECCIONAMOS_CON_ESMERO }}
            />
          </div>

          <div className="flex flex-col md:items-center justify-center w-full gap-5 mb-0 md:mb-10">
            {products.map((fruit, key) => {
              return (
                <div key={key} className="flex flex-col w-full gap-3 h-auto">
                  <div
                    className="flex flex-col items-start md:items-center relative justify-start md:justify-center w-full min-h-[1100px] md:min-h-[700px] bg-cover bg-center bg-no-repeat rounded-[30px]"
                    style={{
                      backgroundImage: `url(${fruit.bg_img})`,
                    }}
                  >
                    <div
                      className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 rounded-[50px]"
                      style={{
                        background: 'linear-gradient(90deg,rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.7) 100%)',
                      }}
                    >
                      <div className="flex flex-col md:flex-row items-center justify-start md:justify-center w-full h-full">
                        <div className="flex flex-col justify-start items-start gap-4 w-full md:w-1/3 p-5 md:p-10 md:h-full">
                          <p className="text-l-300 md:text-l-400 text-white font-thin" dangerouslySetInnerHTML={{ __html: fruit.descripcion }} />
                        </div>
                        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
                          <p className="text-l-500 md:text-l-800 font-black text-white text-center z-10">{fruit.title}</p>
                          <p className="font-homemade text-l-400 md:text-l-600 leading-9 text-white font-homemade">{fruit.title_tec}</p>
                          <button className="mt-7 text-white font-reg border border-white px-10 py-2 rounded-full hover:px-14 transition-all hover:font-black">
                            {dictionary.products.QUIERO_SABER_MAS}
                          </button>
                        </div>
                        <div className="flex flex-col justify-center text-white items-start gap-5 md:h-full w-full md:w-1/3 p-5">
                          <div className="flex flex-col justify-start items-start gap-3">
                            <div className="flex flex-col gap-4 items-start justify-start">
                              {fruit.especificaciones.map((item, key) => {
                                return (
                                  <div key={key} className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2">
                                    <p className="font-black text-l-200">{Object.keys(item)}</p>
                                    <p className="text-l-body">{Object.values(item)}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center md:h-9 w-full mb-10">
                    <div className="flex items-center justify-center">
                      <TiInfoLarge size={40} />
                      <p className="font-reg text-l-100">{fruit.alias}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </GeneralLayout>
    </div>
    </>
  );
};

export default Productos;
