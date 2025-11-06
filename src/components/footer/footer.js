'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import dayjs from 'dayjs';
import TridgeLogo from '@/components/logos/TridgeLogo';
import GlobalGapIcon from '@/components/logos/GlobalGapIcon';
import NsfIcon from '@/components/logos/NsfIcon';

const Footer = ({ dictionary }) => {
  const pathname = usePathname();
  const [locale, setLocale] = useState('es');

  useEffect(() => {
    const localeFromPath = pathname.split('/')[1] || 'es';
    setLocale(localeFromPath === 'es' || localeFromPath === 'en' ? localeFromPath : 'es');
  }, [pathname]);

  const currentYear = dayjs().year();
  const redSocItems = [
    {
      red: 'instagram',
      icon: <FaInstagram size={20} color="#224C22" />,
      url: '',
    },
    {
      red: 'twitter',
      icon: <RiTwitterXLine size={20} color="#224C22" />,
      url: '',
    },
    {
      red: 'linkedin',
      icon: <FaLinkedinIn size={20} color="#224C22" />,
      url: '',
    },
    {
      red: 'google',
      icon: <FaGoogle size={20} color="#224C22" />,
      url: '',
    },
    {
      red: 'tridge',
      icon: <TridgeLogo width={20} height={20} color="#224C22" />,
      url: 'https://www.tridge.com/seller/premium-profile-preview/BOH-c033c708',
    },
  ];
  return (
    <div className="my-10 flex h-auto w-full flex-col items-center justify-between gap-5 px-0 py-4 md:my-20 md:h-[120px] md:flex-row md:gap-0 md:px-10">
      <div className="flex w-full items-center justify-start gap-5 md:w-2/6">
        <div className="flex flex-col items-start justify-center gap-5 md:flex-row md:items-center">
          <Image width={80} height={40} src={'/img/freshfood_short.svg'} alt="freshfood logo short" />
          <div className="flex max-w-[350px] flex-col items-start justify-center text-greendark">
            <p
              dangerouslySetInnerHTML={{
                __html: dictionary?.footer?.CENTRO_PRINCIPAL,
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-center md:w-2/6">
        <Image className={'h-[200px] w-auto md:h-[320px]'} src={'/img/frutas_footer.webp'} alt="frutas con zumo" width={250} height={200} />
      </div>
      <div className="flex w-full flex-col items-start justify-center text-greendark md:w-2/6 md:items-end">
        <p className="font-black">{dictionary?.footer?.NUESTRA_DIRECCION}</p>
        <p>{dictionary?.footer?.CALLE_NUMERO}</p>
        <p>{dictionary?.footer?.PAIS_CIUDAD}</p>

        <div className="mt-4 flex w-full flex-col items-end justify-center md:w-fit md:gap-3">
          <div className="mb-3 mt-3 grid grid-cols-5 gap-2">
            {redSocItems.map((item, key) => {
              return (
                <div key={key} className="flex h-auto w-[40px] items-center justify-center">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
                      {item.icon}
                    </a>
                  ) : (
                    <button>{item.icon}</button>
                  )}
                </div>
              );
            })}
          </div>
          <p>
            <span className="font-black">{`${currentYear} ©`}</span> All rights reserved
          </p>

          <div className="flex flex-col items-end gap-2 text-l-body text-greendark">
            <p className="font-bold">{dictionary?.footer?.CERTIFICACIONES_GLOBALES}</p>
            <div className="flex items-center justify-center gap-2">
              <Link
                href={`/${locale}/certificates`}
                className="transition-opacity hover:opacity-70 cursor-pointer flex items-center"
                aria-label="Ver certificaciones Global GAP"
              >
                <GlobalGapIcon width={50} height={40} color="#224C22" />
              </Link>
              <Link
                href={`/${locale}/certificates`}
                className="transition-opacity hover:opacity-70 cursor-pointer flex items-center"
                aria-label="Ver certificaciones NSF"
              >
                <NsfIcon width={40} height={40} color="#224C22" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
