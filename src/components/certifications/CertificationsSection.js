'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

/**
 * Componente para mostrar la sección de certificaciones
 * @param {Object} props
 * @param {boolean} props.showDetails - Si muestra detalles completos o resumen
 * @param {string} props.layout - 'grid' | 'list' | 'cards'
 */
export default function CertificationsSection({
  showDetails = false,
  layout = 'cards',
  className = ''
}) {
  const [certificationsData, setCertificationsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCertifications = async () => {
      try {
        const response = await fetch('/assets/certificaciones.json');
        const data = await response.json();
        setCertificationsData(data);
      } catch (error) {
        console.error('Error loading certifications:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCertifications();
  }, []);

  if (loading || !certificationsData || !certificationsData.certificaciones) {
    return (
      <section className={classNames('w-full py-8 px-4 md:px-8', className)}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">Cargando certificaciones...</p>
        </div>
      </section>
    );
  }

  const { certificaciones } = certificationsData;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isCertificateValid = (validoHasta) => {
    if (!validoHasta) return false;
    const expiryDate = new Date(validoHasta);
    const today = new Date();
    return expiryDate >= today;
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
      case 'list':
        return 'flex flex-col gap-4';
      case 'cards':
      default:
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
    }
  };

  return (
    <section className={classNames('w-full py-8 px-4 md:px-8', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-greendark mb-4">
            Certificaciones Internacionales
          </h2>
          <p className="text-lg text-gray-700">
            Contamos con certificaciones GlobalG.A.P. que garantizan la calidad y seguridad
            de nuestros productos agrícolas.
          </p>
        </div>

        <div className={getLayoutClasses()}>
          {certificaciones.map((cert) => (
            <div
              key={cert.id}
              className={classNames(
                'bg-white rounded-lg shadow-md p-6',
                'border border-gray-200',
                'hover:shadow-lg transition-shadow',
                !isCertificateValid(cert.validoHasta) && 'opacity-75'
              )}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src="/img/global-gap.svg"
                      alt="GlobalG.A.P. Logo"
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                    <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {cert.tipoCorto}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-greendark">
                    {cert.productor.nombre}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cert.productor.pais}
                  </p>
                </div>
                {isCertificateValid(cert.validoHasta) && (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    Activo
                  </span>
                )}
              </div>

              {/* Productos */}
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

              {/* Información Principal */}
              <div className="space-y-2 mb-4 text-sm">
                {cert.numeroCertificado && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">N° Certificado:</span>
                    <span className="font-semibold">{cert.numeroCertificado}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">GGN:</span>
                  <span className="font-semibold font-mono">{cert.ggn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Válido hasta:</span>
                  <span className="font-semibold">{formatDate(cert.validoHasta)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Organismo:</span>
                  <span className="font-semibold text-right">{cert.organismoEmisor.nombre}</span>
                </div>
              </div>

              {/* Países de Destino */}
              {cert.paisesDestino && cert.paisesDestino.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Países de Destino:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.paisesDestino.map((pais, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                      >
                        {pais.codigo}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Detalles Adicionales */}
              {showDetails && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 text-sm">
                  {cert.sitioProduccion && (
                    <div>
                      <span className="text-gray-600">Sitio de Producción: </span>
                      <span className="font-semibold">{cert.sitioProduccion.nombre}</span>
                    </div>
                  )}
                  {cert.productos[0]?.areaTotal && (
                    <div>
                      <span className="text-gray-600">Área Total: </span>
                      <span className="font-semibold">
                        {cert.productos[0].areaTotal} {cert.productos[0].unidad || 'hectáreas'}
                      </span>
                    </div>
                  )}
                  {cert.auditoria && (
                    <div>
                      <span className="text-gray-600">Última Auditoría: </span>
                      <span className="font-semibold">{formatDate(cert.auditoria.fechaFin)}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Link de Verificación */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href={cert.verificacionOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-greendark hover:underline font-semibold flex items-center gap-2"
                >
                  Verificar certificado →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen */}
        {certificationsData?.resumen && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Total de certificaciones activas:</strong> {certificationsData.resumen.totalCertificaciones}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

