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
    title:
      locale === 'es'
        ? 'Productos Fresh Food | Frutas Tropicales de Exportación - Limón, Mango, Piña'
        : 'Fresh Food Products | Export Tropical Fruits - Lime, Mango, Pineapple',
    description:
      locale === 'es'
        ? 'Exportamos frutas frescas de alta calidad: Limón Tahití, Mango Kent, Piña Golden, Aguacate Hass, Pitahaya y Cacao. Productos certificados desde Panamá.'
        : 'We export high-quality fresh fruits: Tahiti Lime, Kent Mango, Golden Pineapple, Hass Avocado, Dragon Fruit, and Cacao. Certified products from Panama.',
    keywords:
      locale === 'es'
        ? 'limón tahití exportación, mango kent panamá, piña golden, aguacate hass, pitahaya exportación, cacao panamá, frutas tropicales exportación'
        : 'tahiti lime export, kent mango panama, golden pineapple, hass avocado, dragon fruit export, panama cacao, tropical fruits export',
    openGraph: {
      title: locale === 'es' ? 'Productos Fresh Food Panamá' : 'Fresh Food Panama Products',
      description:
        locale === 'es'
          ? 'Limón, Mango, Piña, Aguacate, Pitahaya y Cacao de alta calidad para exportación'
          : 'High-quality Lime, Mango, Pineapple, Avocado, Dragon Fruit and Cacao for export',
      url: `https://freshfoodpanama.com/${locale}/products`,
      images: [
        {
          url: 'https://freshfoodpanama.com/img/agricultor_con_pineapple_ok.webp',
          width: 1200,
          height: 630,
          alt: 'Fresh Food Panama Products',
        },
      ],
    },
    alternates: {
      canonical: `https://freshfoodpanama.com/${locale}/products`,
      languages: {
        es: 'https://freshfoodpanama.com/es/products',
        en: 'https://freshfoodpanama.com/en/products',
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
          <section className="flex h-full w-full flex-col items-center justify-center gap-7 md:mt-0 md:h-[calc(100vh-180px)]">
            <div className="flex w-full flex-col items-center justify-between md:flex-row">
              <div className="flex w-full flex-col items-start justify-center gap-5 md:w-1/3">
                <h1
                  className="font-black text-l-600 text-greendark md:text-l-800"
                  dangerouslySetInnerHTML={{ __html: dictionary.products.CALIDAD_EN_MANOS }}
                />
              </div>
              <div className="mb-10 mt-12 flex h-[200px] w-full items-center justify-center md:mb-0 md:mt-0 md:h-auto md:w-1/3">
                <Image
                  className="z-20 h-[400px] w-auto md:h-auto md:w-full"
                  src={'/img/agricultor_con_pineapple_ok.webp'}
                  width={500}
                  height={300}
                  alt="agricultor con piña"
                  priority
                  quality={90}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-5 p-0 md:w-1/3 md:p-5">
                <h2
                  className="font-black text-l-400 leading-snug text-greendark md:text-l-500"
                  dangerouslySetInnerHTML={{ __html: dictionary.products.DESDE_PRIMER_CORTE }}
                />

                <button className="rounded-full bg-greendark px-5 py-2 text-white">{dictionary.products.YA_CONOCES_NUESTROS_PRODUCTOS}</button>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center gap-10">
            <div className="mt-10 flex w-full flex-col items-center justify-center">
              <h2
                className="text-left font-black text-l-500 leading-snug text-greendark md:text-center md:text-l-600"
                dangerouslySetInnerHTML={{ __html: dictionary.products.NUESTROS_PRODUCTOS }}
              />
              <p
                className="max-w-[350px] text-left font-reg text-l-300 text-greendark md:text-center md:text-l-400"
                dangerouslySetInnerHTML={{ __html: dictionary.products.SELECCIONAMOS_CON_ESMERO }}
              />
            </div>

            <div className="mb-0 flex w-full flex-col justify-center gap-5 md:mb-10 md:items-center">
              {products.map((fruit, key) => {
                return (
                  <div key={key} className="flex h-auto w-full flex-col gap-3">
                    <div
                      className="relative flex min-h-[1100px] w-full flex-col items-start justify-start rounded-[30px] bg-cover bg-center bg-no-repeat md:min-h-[700px] md:items-center md:justify-center"
                      style={{
                        backgroundImage: `url(${fruit.bg_img})`,
                      }}
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center rounded-[50px]"
                        style={{
                          background: 'linear-gradient(90deg,rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.7) 100%)',
                        }}
                      >
                        <div className="flex h-full w-full flex-col items-center justify-start md:flex-row md:justify-center">
                          <div className="flex w-full flex-col items-start justify-start gap-4 p-5 md:h-full md:w-1/3 md:p-10">
                            <p className="font-thin text-l-300 text-white md:text-l-400" dangerouslySetInnerHTML={{ __html: fruit.descripcion }} />
                          </div>
                          <div className="flex w-full flex-col items-center justify-center md:w-1/3">
                            <p className="z-10 text-center font-black text-l-500 text-white md:text-l-800">{fruit.title}</p>
                            <p className="font-homemade text-l-400 leading-9 text-white md:text-l-600">{fruit.title_tec}</p>
                            <button className="mt-7 rounded-full border border-white px-10 py-2 font-reg text-white transition-all hover:px-14 hover:font-black">
                              {dictionary.products.QUIERO_SABER_MAS}
                            </button>
                          </div>
                          <div className="flex w-full flex-col items-start justify-center gap-5 p-5 text-white md:h-full md:w-1/3">
                            <div className="flex flex-col items-start justify-start gap-3">
                              <div className="flex flex-col items-start justify-start gap-4">
                                {fruit.especificaciones.map((item, key) => {
                                  return (
                                    <div key={key} className="flex flex-col items-start justify-center gap-2 md:flex-row md:items-center">
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
                    <div className="mb-10 flex w-full items-center justify-start md:h-9">
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
