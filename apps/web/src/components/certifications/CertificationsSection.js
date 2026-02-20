'use client';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import GlobalGapIcon from '@/components/logos/GlobalGapIcon';
import NsfIcon from '@/components/logos/NsfIcon';

export default function CertificationsSection({ showDetails = false, layout = 'cards', className = '', dictionary = null, locale = 'es' }) {
  const [certificationsData, setCertificationsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCertifications = async () => {
      try {
        // Intentar cargar el archivo de certificaciones según el idioma
        const response = await fetch(`/assets/certificaciones${locale === 'en' ? '.en' : ''}.json`);
        if (!response.ok) {
          // Si no existe la versión en inglés, usar la versión en español
          const fallbackResponse = await fetch('/assets/certificaciones.json');
          if (!fallbackResponse.ok) {
            throw new Error(dictionary?.about_us?.certifications?.ERROR_CARGAR || 'No se pudo cargar el archivo de certificaciones');
          }
          const fallbackData = await fallbackResponse.json();
          setCertificationsData(fallbackData);
          return;
        }
        const data = await response.json();
        setCertificationsData(data);
      } catch (err) {
        // Error al cargar certificaciones - usar datos de fallback
        setError(err.message);
        // Los datos de fallback deberían venir del JSON, pero si no están disponibles,
        // usar datos básicos sin traducción (los nombres de certificaciones son universales)
        setCertificationsData({
          certificaciones: [
            {
              id: 'globalgap-fallback',
              nombre: 'GlobalG.A.P.',
              tipo: locale === 'es' ? 'Certificación GlobalG.A.P.' : 'GlobalG.A.P. Certification',
              descripcion:
                locale === 'es'
                  ? 'Certificación internacional que garantiza buenas prácticas agrícolas, seguridad alimentaria y sostenibilidad.'
                  : 'International certification that guarantees good agricultural practices, food safety and sustainability.',
              logo: 'GlobalGAP',
              sitioWeb: 'https://www.globalgap.org',
              beneficios:
                locale === 'es'
                  ? ['Garantiza buenas prácticas agrícolas', 'Asegura la seguridad alimentaria', 'Promueve la sostenibilidad']
                  : ['Guarantees good agricultural practices', 'Ensures food safety', 'Promotes sustainability'],
            },
            {
              id: 'nsf-fallback',
              nombre: 'NSF International',
              tipo: locale === 'es' ? 'Certificación NSF' : 'NSF Certification',
              descripcion:
                locale === 'es'
                  ? 'NSF International es una organización independiente que certifica productos y sistemas.'
                  : 'NSF International is an independent organization that certifies products and systems.',
              logo: 'NSF',
              sitioWeb: 'https://www.nsf.org',
              beneficios:
                locale === 'es'
                  ? ['Certificación de calidad y seguridad', 'Verificación independiente', 'Cumplimiento de normativas']
                  : ['Quality and safety certification', 'Independent verification', 'Regulatory compliance'],
            },
          ],
        });
      } finally {
        setLoading(false);
      }
    };

    loadCertifications();
  }, [locale, dictionary]);

  if (loading) {
    return (
      <section className={classNames('w-full px-4 py-8 md:px-8', className)}>
        <div className="mx-auto max-w-7xl text-center">
          <div className="animate-pulse">
            <div className="mx-auto mb-4 h-8 w-1/3 rounded bg-gray-200"></div>
            <div className="mx-auto mb-8 h-4 w-2/3 rounded bg-gray-200"></div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[1, 2].map(i => (
                <div key={i} className="h-96 rounded-2xl bg-gray-100 p-8"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Obtener textos de traducción con fallback
  const t = dictionary?.about_us?.certifications || {};

  if (!certificationsData || !certificationsData.certificaciones || certificationsData.certificaciones.length === 0) {
    return (
      <section className={classNames('w-full px-4 py-8 md:px-8', className)}>
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-600">{t.NO_DISPONIBLES || 'No hay certificaciones disponibles en este momento.'}</p>
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
    <section className={classNames('flex w-full flex-col items-center justify-center gap-6 px-4 py-8 md:px-8', className)}>
      <div className="mb-12 flex w-full flex-col items-start justify-center">
        <h2 className="mb-4 font-black text-3xl text-greendark md:text-5xl">{t.TITULO || 'Certificaciones Internacionales'}</h2>
        <p className="max-w-3xl max-w-[350px] text-lg md:text-xl">
          {t.DESCRIPCION ||
            'Contamos con certificaciones internacionales que garantizan la calidad, seguridad y sostenibilidad de nuestros productos agrícolas.'}
        </p>
      </div>

      <div className={getLayoutClasses()}>
        {certifications.map(cert => (
          <div
            key={cert.id}
            className={classNames(
              'rounded-2xl bg-white p-8 shadow-lg',
              'border-2 border-gray-100',
              'transition-all hover:border-greendark/20 hover:shadow-xl',
              'flex flex-col',
            )}
          >
            <div className="mb-6 flex items-center justify-center">
              {cert.logo === 'GlobalGAP' ? (
                <GlobalGapIcon width={120} height={80} color="#224C22" />
              ) : (
                <NsfIcon width={100} height={100} color="#224C22" />
              )}
            </div>

            <div className="mb-4 text-center">
              <h3 className="mb-2 font-black text-2xl text-greendark">{cert.nombre}</h3>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">{cert.tipo}</p>
            </div>

            <p className="mb-6 text-center leading-relaxed text-gray-700">{cert.descripcion}</p>

            {cert.beneficios && cert.beneficios.length > 0 && (
              <div className="mb-6 flex-1">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-greendark">{t.BENEFICIOS || 'Beneficios:'}</h4>
                <ul className="space-y-2">
                  {cert.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1 text-greendark">✓</span>
                      <span className="text-sm">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cert.productos && cert.productos.length > 0 && showDetails && (
              <div className="mb-4">
                <h4 className="mb-2 text-sm font-semibold text-gray-700">{t.PRODUCTOS_CERTIFICADOS || 'Productos Certificados:'}</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.productos.map((producto, idx) => (
                    <span key={idx} className="rounded bg-greendark/10 px-2 py-1 text-xs font-medium text-greendark">
                      {producto.nombre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {showDetails && (cert.numeroCertificado || cert.ggn || cert.validoHasta) && (
              <div className="mb-4 space-y-2 border-t pt-4 text-sm">
                {cert.numeroCertificado && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.NUMERO_CERTIFICADO || 'N° Certificado:'}</span>
                    <span className="font-semibold">{cert.numeroCertificado}</span>
                  </div>
                )}
                {cert.ggn && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">GGN:</span>
                    <span className="font-mono font-semibold">{cert.ggn}</span>
                  </div>
                )}
                {cert.validoHasta && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.VALIDO_HASTA || 'Válido hasta:'}</span>
                    <span className="font-semibold">
                      {new Date(cert.validoHasta).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="mt-auto border-t border-gray-200 pt-6">
              <a
                href={cert.verificacionOnline || cert.sitioWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-greendark px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-greendark/90"
              >
                {cert.verificacionOnline ? t.VERIFICAR_CERTIFICADO || 'Verificar certificado →' : t.MAS_INFORMACION || 'Más información →'}
              </a>
            </div>
          </div>
        ))}
      </div>

      {certificationsData?.resumen && showDetails && (
        <div className="flex w-full flex-col items-start justify-between rounded-xl border-2 border-greendark p-6">
          <h3 className="mb-2 text-xl font-bold text-greendark">{t.RESUMEN_CERTIFICACIONES || 'Resumen de Certificaciones'}</h3>
          <p className="text-gray-700">
            <strong>{t.TOTAL_CERTIFICACIONES || 'Total de certificaciones:'}</strong> {certificationsData.resumen.totalCertificaciones}
          </p>

          <div className="text-sm text-gray-600">
            <p>
              {t.ULTIMA_ACTUALIZACION || 'Última actualización:'}{' '}
              {certificationsData.resumen.ultimaActualizacion
                ? new Date(certificationsData.resumen.ultimaActualizacion).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US')
                : 'N/A'}
            </p>
          </div>
        </div>
      )}

      {showDetails && (
        <div className="flex w-full items-center justify-center md:mt-32">
          <div className="flex max-w-[350px] flex-col items-start">
            <h3 className="mb-4 font-reg text-3xl text-greendark md:text-6xl">
              {t.POR_QUE_IMPORTANTES || '¿Por qué son importantes estas certificaciones?'}
            </h3>
            <p className="leading-relaxed text-gray-700">
              {t.TEXTO_IMPORTANCIA ||
                'Estas certificaciones garantizan que nuestros productos cumplen con los más altos estándares de calidad, seguridad alimentaria y sostenibilidad. Esto nos permite exportar a los mercados más exigentes del mundo y asegurar la confianza de nuestros clientes.'}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
