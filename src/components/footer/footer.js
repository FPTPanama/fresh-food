import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-between h-auto border border-black w-full px-10 py-5">
      <div className="flex items-center justify-center gap-5 w-2/6 border">
        <div className="flex items-center justify-center gap-5">
          <Image width={80} height={40} src={'/img/freshfood_short.svg'} alt="freshfood logo short" />
          <div className="flex flex-col max-w-[350px] items-start justify-center text-greendark">
            <p>
              Tiene su centro principal de contrataciones en <span className="font-black">Miami, Estados Unidos</span>, con oficinas locales y
              representativas en <span className="font-black">Ciudad de Panamá, Panamá</span>, y{' '}
              <span className="font-black">Ciudad Guayana, Venezuela</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-2/6">
        <Image src={'/img/frutas_con_zumo.webp'} alt="frutas con zumo" width={280} height={100} />
      </div>
      <div className="flex flex-col items-end justify-center w-2/6 text-greendark">
        <p className="font-black">Nuestra dirección</p>
        <p>Calle 55, PH SFC. Oficina 26D</p>
        <p>Obarrio, Panama City, Panamá</p>
      </div>
    </div>
  );
};

export default Footer;
