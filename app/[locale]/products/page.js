import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import Image from 'next/image';
import React from 'react';
import { FaTruckField, FaBoxesPacking, FaShip, FaTruckArrowRight } from 'react-icons/fa6';
import { TiInfoLarge } from 'react-icons/ti';

const Productos = async ({ params }) => {
  const { locale } = params;
  const dictionary = await getDictionary(locale);

  const products = [
    {
      title: dictionary.products.fruits[0].TITLE,
      title_tec: dictionary.products.fruits[0].TITLE_TEC,
      descripcion: dictionary.products.fruits[0].DESCRIPCION,
      alias: dictionary.products.fruits[0].NOTE,
      img: '/img/productos/limon_tahiti.webp',
      bg_img: '/img/productos/limon_tahiti_fondo.webp',
      especificaciones: [
        {
          Presentación: 'A granel / en cajas plásticas o de cartón',
        },
        {
          'Tamaño / Calibre': 'Calibres 110, 138, 175, 200',
        },
        {
          Color: 'Verde brillante uniforme',
        },
        {
          'Peso unitario': '90 - 120 gramos',
        },
        {
          'Contenido de jugo': '>= 45%',
        },
        {
          Empaque: 'Cajas de 18 kg netos / 40 lbs',
        },
        {
          Almacenamiento: 'Refrigerado 8-10 degC; HR: 85-90%',
        },
        {
          'Vida útil': '30 - 45 días',
        },
        {
          Origen: 'Colombia, Veracruz-México',
        },
      ],
    },
    {
      title: dictionary.products.fruits[1].TITLE,
      title_tec: dictionary.products.fruits[1].TITLE_TEC,
      descripcion: dictionary.products.fruits[1].DESCRIPCION,
      alias: dictionary.products.fruits[1].NOTE,
      img: '/img/productos/mango.webp',
      bg_img: '/img/productos/mango_fondo.webp',
      especificaciones: [
        {
          Variedad: 'Tommy Atkins / Kent / Ataulfo / Keitt / Haden',
        },
        {
          'Peso unitario': '300 - 600 gramos',
        },
        {
          Pulpa: 'Amarilla intensa, firme, sin fibras',
        },
        {
          Empaque: 'Cajas de 4kg, 6kg, o 9 Kg netos',
        },
        {
          Almacenamiento: '10-13 degC, HR: 85-90%',
        },
        {
          'Vida útil': '14 - 21 días',
        },
        {
          Origen: 'México, Perú, Venezuela',
        },
      ],
    },
    {
      title: dictionary.products.fruits[2].TITLE,
      title_tec: dictionary.products.fruits[2].TITLE_TEC,
      descripcion: dictionary.products.fruits[2].DESCRIPCION,
      alias: dictionary.products.fruits[2].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/pineapple_fondo.webp',
      especificaciones: [
        {
          Variedad: 'MD2 (Golden Sweet / Extra Sweet)',
        },
        {
          'Peso unitario': '1.0 - 2.5 kg',
        },
        {
          Empaque: 'Cajas de cartón de 12 kg',
        },
        {
          Almacenamiento: '7 - 10 degC; HR: 85-90%',
        },
        {
          'Vida útil': '15 - 25 días',
        },
        {
          Origen: 'Panamá',
        },
      ],
    },
    {
      title: dictionary.products.fruits[3].TITLE,
      title_tec: dictionary.products.fruits[3].TITLE_TEC,
      descripcion: dictionary.products.fruits[3].DESCRIPCION,
      alias: dictionary.products.fruits[3].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/pitahaya_fondo.webp',
      especificaciones: [
        {
          Variedad: 'MD2 (Golden Sweet / Extra Sweet)',
        },
        {
          'Peso unitario': '1.0 - 2.5 kg',
        },
        {
          Empaque: 'Cajas de cartón de 12 kg',
        },
        {
          Almacenamiento: '7 - 10 degC; HR: 85-90%',
        },
        {
          'Vida útil': '15 - 25 días',
        },
        {
          Origen: 'Panamá',
        },
      ],
    },
    {
      title: dictionary.products.fruits[4].TITLE,
      title_tec: dictionary.products.fruits[4].TITLE_TEC,
      descripcion: dictionary.products.fruits[4].DESCRIPCION,
      alias: dictionary.products.fruits[4].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/aguacate_fondo.webp',
      especificaciones: [
        {
          Variedad: 'MD2 (Golden Sweet / Extra Sweet)',
        },
        {
          'Peso unitario': '1.0 - 2.5 kg',
        },
        {
          Empaque: 'Cajas de cartón de 12 kg',
        },
        {
          Almacenamiento: '7 - 10 degC; HR: 85-90%',
        },
        {
          'Vida útil': '15 - 25 días',
        },
        {
          Origen: 'Panamá',
        },
      ],
    },
    {
      title: dictionary.products.fruits[5].TITLE,
      title_tec: dictionary.products.fruits[5].TITLE_TEC,
      descripcion: dictionary.products.fruits[5].DESCRIPCION,
      alias: dictionary.products.fruits[5].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/cacao_fondo.webp',
      especificaciones: [
        {
          Variedad: 'MD2 (Golden Sweet / Extra Sweet)',
        },
        {
          Fermentación: '80-90%',
        },
        {
          Humedad: '<= 7.5%',
        },
        {
          'Peso unitario': '1.0 - 2.5 kg',
        },
        {
          Empaque: 'Sacos de yute de 60 kg con bolsa interna',
        },
        {
          Almacenamiento: '18-22 degC, HR < 65%',
        },
        {
          'Vida útil': '6 - 12 meses',
        },
        {
          Origen: 'Panamá',
        },
      ],
    },
    {
      title: dictionary.products.fruits[6].TITLE,
      title_tec: dictionary.products.fruits[6].TITLE_TEC,
      descripcion: dictionary.products.fruits[6].DESCRIPCION,
      alias: dictionary.products.fruits[6].NOTE,
      img: '/img/productos/pineapple.webp',
      bg_img: '/img/productos/cafe_fondo.webp',
      especificaciones: [
        {
          Variedad: 'Coffea arabica / robusta',
        },
        {
          'Peso unitario': '150 - 350 g',
        },
        {
          Proceso: 'Lavado / Natural / Honey / Anaeróbico',
        },
        {
          Humedad: '10-12%',
        },
        {
          Empaque: 'Sacos de yute de 60 kg con bolsa GrainPro',
        },
        {
          Almacenamiento: '8 - 12 meses',
        },
        {
          'Vida útil': '21 - 30 días',
        },
        {
          Origen: 'Panamá - Chiriquí, Veraguas, Colombia',
        },
      ],
    },
  ];
  return (
    <div className="responsiveWidth gap-10">
      <GeneralLayout params={params}>
        <section style={{ height: 'calc(100vh - 180px)' }} className="flex flex-col w-full items-center justify-center gap-7">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-start justify-center gap-5 w-1/3">
              <h1 className="font-black text-l-800 text-greendark" dangerouslySetInnerHTML={{ __html: dictionary.products.CALIDAD_EN_MANOS }} />
            </div>
            <div className="flex items-center justify-center w-1/3">
              <Image className="z-20" src={'/img/agricultor_con_pineapple_v2.webp'} width={500} height={300} alt="agricultor con piña" />
            </div>
            <div className="flex flex-col items-start justify-center w-1/3 gap-5 p-5">
              <h2
                className="text-greendark leading-snug font-black text-l-500"
                dangerouslySetInnerHTML={{ __html: dictionary.products.DESDE_PRIMER_CORTE }}
              />

              <button className="text-white bg-greendark py-2 px-5 rounded-full">{dictionary.products.YA_CONOCES_NUESTROS_PRODUCTOS}</button>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center w-full mt-10">
            <h2
              className="text-greendark leading-snug font-black text-l-600 text-center"
              dangerouslySetInnerHTML={{ __html: dictionary.products.NUESTROS_PRODUCTOS }}
            />
            <p
              className="text-l-400 font-reg text-greendark max-w-[350px] text-center"
              dangerouslySetInnerHTML={{ __html: dictionary.products.SELECCIONAMOS_CON_ESMERO }}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-5 mb-10">
            {products.map((fruit, key) => {
              return (
                <>
                  <div
                    className="flex flex-col items-center justify-center w-full min-h-[700px]"
                    key={key}
                    style={{
                      backgroundImage: `url(${fruit.bg_img})`,
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
                      <div className="flex items-center justify-center w-full h-full">
                        <div className="flex flex-col justify-end items-start gap-4 w-1/3 p-10 h-full">
                          <p className="text-l-400 text-white font-thin" dangerouslySetInnerHTML={{ __html: fruit.descripcion }} />
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/3">
                          <p className="text-l-800 font-black text-white text-center z-10">{fruit.title}</p>
                          <p className="font-homemade text-l-600 leading-9 text-white">{fruit.title_tec}</p>
                          <button className="mt-7 text-white font-reg border border-white px-10 py-2 rounded-full">
                            {dictionary.products.QUIERO_SABER_MAS}
                          </button>
                        </div>
                        <div className="flex flex-col justify-center text-white items-start gap-5 h-full w-1/3 p-5">
                          <div className="flex flex-col justify-start items-start gap-3">
                            <div className="flex flex-col gap-2 items-start justify-start">
                              {fruit.especificaciones.map((item, key) => {
                                return (
                                  <div key={key} className="flex items-center justify-center gap-2">
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
                  <div className="flex justify-start items-center h-9 w-full mb-10">
                    <div className="flex items-center justify-center">
                      <TiInfoLarge size={40} />
                      <p className="font-reg text-l-100">{fruit.alias}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </GeneralLayout>
    </div>
  );
};

export default Productos;
