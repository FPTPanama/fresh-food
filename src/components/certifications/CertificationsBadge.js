'use client';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

/**
 * Componente para mostrar badges de certificaciones
 * @param {Object} props
 * @param {boolean} props.showLabels - Si muestra texto descriptivo
 * @param {string} props.size - 'small' | 'medium' | 'large'
 * @param {string} props.layout - 'horizontal' | 'vertical' | 'grid'
 */
export default function CertificationsBadge({ 
  showLabels = true, 
  size = 'medium',
  layout = 'horizontal',
  className = ''
}) {
  
  const certifications = [
    {
      name: 'GlobalG.A.P.',
      nameFull: 'GlobalG.A.P. IFA v6.0 GFS',
      logo: '/img/certifications/globalgap-logo.svg', // Necesitas descargar este logo
      description: 'Certificación Internacional de Buenas Prácticas Agrícolas',
      url: 'https://www.globalgap.org',
      ggn: '4063651260816, 4063651684858',
      validUntil: '2026'
    },
    {
      name: 'NSF Certification',
      nameFull: 'NSF Certification LLC',
      logo: '/img/certifications/nsf-logo.svg', // Opcional
      description: 'Certificador GlobalG.A.P.',
      url: 'https://www.nsf.org',
      show: false // Puedes activar esto si quieres mostrar el certificador
    },
    {
      name: 'KIWA España',
      nameFull: 'KIWA ESPAÑA, S.L.U',
      logo: '/img/certifications/kiwa-logo.svg', // Opcional
      description: 'Certificador GlobalG.A.P.',
      url: 'https://www.kiwa.com',
      show: false // Puedes activar esto si quieres mostrar el certificador
    }
  ];

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const layoutClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
    grid: 'grid grid-cols-2 md:grid-cols-3 gap-4'
  };

  const visibleCerts = certifications.filter(cert => cert.show !== false);

  return (
    <div className={classNames(
      'flex items-center justify-center gap-4',
      layoutClasses[layout],
      className
    )}>
      {visibleCerts.map((cert, index) => (
        <div 
          key={index}
          className={classNames(
            'flex flex-col items-center justify-center gap-2',
            'hover:opacity-80 transition-opacity'
          )}
        >
          <Link
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
              'flex items-center justify-center',
              'bg-white rounded-lg p-2 shadow-sm',
              'border border-gray-200',
              sizeClasses[size]
            )}
            title={cert.nameFull}
          >
            <Image
              src={cert.logo}
              alt={`${cert.name} Logo`}
              width={size === 'small' ? 60 : size === 'medium' ? 80 : 100}
              height={size === 'small' ? 60 : size === 'medium' ? 80 : 100}
              className="object-contain"
            />
          </Link>
          
          {showLabels && (
            <div className="flex flex-col items-center text-center max-w-[150px]">
              <p className="text-xs font-bold text-greendark">{cert.name}</p>
              {cert.description && (
                <p className="text-[10px] text-gray-600 mt-1">{cert.description}</p>
              )}
              {cert.ggn && (
                <p className="text-[9px] text-gray-500 mt-1">GGN: {cert.ggn}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

