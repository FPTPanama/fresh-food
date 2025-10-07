import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import dayjs from 'dayjs';

const Footer = ({ dictionary }) => {
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
  ];
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[120px] w-full px-0 md:px-10 py-4 my-10 md:my-20 gap-5 md:gap-0">
      <div className="flex items-center justify-start gap-5 w-full md:w-2/6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-5">
          <Image width={80} height={40} src={'/img/freshfood_short.svg'} alt="freshfood logo short" />
          <div className="flex flex-col max-w-[350px] items-start justify-center text-greendark">
            <p dangerouslySetInnerHTML={{ __html: dictionary?.footer?.CENTRO_PRINCIPAL }} />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center w-full md:w-2/6">
        <Image className={'h-[200px] md:h-[320px] w-auto'} src={'/img/frutas_footer.webp'} alt="frutas con zumo" width={250} height={200} />
      </div>
      <div className="flex flex-col items-start md:items-end justify-center w-full md:w-2/6 text-greendark">
        <p className="font-black">{dictionary?.footer?.NUESTRA_DIRECCION}</p>
        <p>{dictionary?.footer?.CALLE_NUMERO}</p>
        <p>{dictionary?.footer?.PAIS_CIUDAD}</p>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-3 mt-4 md:w-fit w-full">
          <div className="grid grid-cols-4 mt-3 mb-3">
            {redSocItems.map((item, key) => {
              return (
                <div key={key} className="flex items-center justify-center w-[40px] h-auto">
                  <button>{item.icon}</button>
                </div>
              );
            })}
          </div>
          <p className="hidden md:flex">|</p>
          <p>
            <span className="font-black">{`${currentYear} ©`}</span> All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
