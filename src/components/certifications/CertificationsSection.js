'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import GlobalGapIcon from '@/components/logos/GlobalGapIcon';
import NsfIcon from '@/components/logos/NsfIcon';

export default function CertificationsSection({
  showDetails = false,
  layout = 'cards',
  className = ''
}) {
  const [certificationsData, setCertificationsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCertifications = async () => {
      try {
        const response = await fetch('/assets/certificaciones.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo de certificaciones');
        }
        const data = await response.json();
        setCertificationsData(data);
      } catch (err) {
        console.error('Error loading certifications:', err);
        setError(err.message);
        setCertificationsData({
          certificaciones: [
            {
              id: 'globalgap-fallback',
              nombre: 'GlobalG.A.P.',
              tipo: 'Certificación GlobalG.A.P.',
              descripcion: 'Certificación internacional que garantiza buenas prácticas agrícolas, seguridad alimentaria y sostenibilidad.',
              logo: 'GlobalGAP',
              sitioWeb: 'https://www.globalgap.org',
              beneficios: [
                'Garantiza buenas prácticas agrícolas',
                'Asegura la seguridad alimentaria',
                'Promueve la sostenibilidad'
              ]
            },
            {
              id: 'nsf-fallback',
              nombre: 'NSF International',
              tipo: 'Certificación NSF',
              descripcion: 'NSF International es una organización independiente que certifica productos y sistemas.',
              logo: 'NSF',
              sitioWeb: 'https://www.nsf.org',
              beneficios: [
                'Certificación de calidad y seguridad',
                'Verificación independiente',
                'Cumplimiento de normativas'
              ]
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    loadCertifications();
  }, []);

  if (loading) {
    return (
      <section className={classNames('w-full py-8 px-4 md:px-8', className)}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gray-100 rounded-2xl p-8 h-96"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!certificationsData || !certificationsData.certificaciones || certificationsData.certificaciones.length === 0) {
    return (
      <section className={classNames('w-full py-8 px-4 md:px-8', className)}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">No hay certificaciones disponibles en este momento.</p>
        </div>
      </section>
    );
  }

  const certifications = certificationsData.certificaciones;

  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 gap-8';
      case 'list':
        return 'flex flex-col gap-6';
      case 'cards':
      default:
        return 'grid grid-cols-1 md:grid-cols-2 gap-8';
    }
  };

  return (
    <section className={classNames('w-full py-8 px-4 md:px-8', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-greendark mb-4">
            Certificaciones Internacionales
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Contamos con certificaciones internacionales que garantizan la calidad, seguridad y sostenibilidad
            de nuestros productos agrícolas.
          </p>
        </div>

        <div className={getLayoutClasses()}>
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={classNames(
                'bg-white rounded-2xl shadow-lg p-8',
                'border-2 border-gray-100',
                'hover:shadow-xl hover:border-greendark/20 transition-all',
                'flex flex-col'
              )}
            >
              <div className="flex items-center justify-center mb-6">
                {cert.logo === 'GlobalGAP' ? (
                  <GlobalGapIcon width={120} height={80} color="#224C22" />
                ) : (
                  <NsfIcon width={100} height={100} color="#224C22" />
                )}
              </div>

              <div className="mb-4 text-center">
                <h3 className="text-2xl font-black text-greendark mb-2">
                  {cert.nombre}
                </h3>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {cert.tipo}
                </p>
              </div>

              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                {cert.descripcion}
              </p>

              {cert.beneficios && cert.beneficios.length > 0 && (
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-bold text-greendark mb-3 uppercase tracking-wide">
                    Beneficios:
                  </h4>
                  <ul className="space-y-2">
                    {cert.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-greendark mt-1">✓</span>
                        <span className="text-sm">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cert.productos && cert.productos.length > 0 && showDetails && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Productos Certificados:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.productos.map((producto, idx) => (
                      <span
                        key={idx}
                        className="bg-greendark/10 text-greendark text-xs font-medium px-2 py-1 rounded"
                      >
                        {producto.nombre}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {showDetails && (cert.numeroCertificado || cert.ggn || cert.validoHasta) && (
                <div className="mb-4 space-y-2 text-sm border-t pt-4">
                  {cert.numeroCertificado && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">N° Certificado:</span>
                      <span className="font-semibold">{cert.numeroCertificado}</span>
                    </div>
                  )}
                  {cert.ggn && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">GGN:</span>
                      <span className="font-semibold font-mono">{cert.ggn}</span>
                    </div>
                  )}
                  {cert.validoHasta && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Válido hasta:</span>
                      <span className="font-semibold">
                        {new Date(cert.validoHasta).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-auto pt-6 border-t border-gray-200">
                <a
                  href={cert.verificacionOnline || cert.sitioWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-greendark text-white rounded-lg hover:bg-greendark/90 transition-colors font-semibold"
                >
                  {cert.verificacionOnline ? 'Verificar certificado →' : 'Más información →'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {certificationsData?.resumen && showDetails && (
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-greendark mb-2">
                  Resumen de Certificaciones
                </h3>
                <p className="text-gray-700">
                  <strong>Total de certificaciones:</strong> {certificationsData.resumen.totalCertificaciones}
                </p>
                {certificationsData.resumen.certificacionesActivas && (
                  <p className="text-gray-700">
                    <strong>Certificaciones activas:</strong> {certificationsData.resumen.certificacionesActivas}
                  </p>
                )}
              </div>
              <div className="text-sm text-gray-600">
                <p>Última actualización: {
                  certificationsData.resumen.ultimaActualizacion
                    ? new Date(certificationsData.resumen.ultimaActualizacion).toLocaleDateString('es-ES')
                    : 'N/A'
                }</p>
              </div>
            </div>
          </div>
        )}

        {showDetails && (
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold text-greendark mb-4">
              ¿Por qué son importantes estas certificaciones?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Estas certificaciones garantizan que nuestros productos cumplen con los más altos estándares
              de calidad, seguridad alimentaria y sostenibilidad. Esto nos permite exportar a los mercados
              más exigentes del mundo y asegurar la confianza de nuestros clientes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
