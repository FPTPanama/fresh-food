// Structured Data para Productos
// Schema.org Product - https://schema.org/Product

export default function ProductSchema({ locale }) {
  const products = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: locale === 'es' ? 'Limón Tahití' : 'Tahiti Lime',
      description: locale === 'es'
        ? 'Limón Tahití fresco de exportación desde Panamá. Alta calidad, certificado y con trazabilidad completa.'
        : 'Fresh Tahiti Lime for export from Panama. High quality, certified and with complete traceability.',
      image: 'https://freshfoodpanama.com/img/productos/limon_tahiti_fondo_ok.webp',
      brand: {
        '@type': 'Brand',
        name: 'Fresh Food Panamá',
      },
      category: locale === 'es' ? 'Frutas Cítricas' : 'Citrus Fruits',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: locale === 'es' ? 'Mango Kent' : 'Kent Mango',
      description: locale === 'es'
        ? 'Mango Kent de exportación desde Panamá. Dulce, jugoso y de alta calidad.'
        : 'Kent Mango for export from Panama. Sweet, juicy and high quality.',
      image: 'https://freshfoodpanama.com/img/productos/mango_fondo_ok.webp',
      brand: {
        '@type': 'Brand',
        name: 'Fresh Food Panamá',
      },
      category: locale === 'es' ? 'Frutas Tropicales' : 'Tropical Fruits',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: locale === 'es' ? 'Piña Golden' : 'Golden Pineapple',
      description: locale === 'es'
        ? 'Piña Golden fresca para exportación. Dulce y jugosa, cultivada en Panamá.'
        : 'Fresh Golden Pineapple for export. Sweet and juicy, grown in Panama.',
      image: 'https://freshfoodpanama.com/img/productos/pineapple_fondo_ok.webp',
      brand: {
        '@type': 'Brand',
        name: 'Fresh Food Panamá',
      },
      category: locale === 'es' ? 'Frutas Tropicales' : 'Tropical Fruits',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(products) }}
    />
  );
}

