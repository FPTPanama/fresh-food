// Structured Data para la Organización
// Schema.org Organization - https://schema.org/Organization

export default function OrganizationSchema({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fresh Food Panamá',
    alternateName: 'Fresh Food Panama',
    url: 'https://freshfoodpanama.com',
    logo: 'https://freshfoodpanama.com/img/freshfood_logo.svg',
    image: 'https://freshfoodpanama.com/img/fresh_food_metaimage.webp',
    description: locale === 'es'
      ? 'Exportadores de frutas tropicales y alimentos frescos desde Panamá. Limón Tahití, Mango, Piña, Aguacate, Pitahaya y Cacao de alta calidad.'
      : 'Exporters of tropical fruits and fresh food from Panama. High-quality Tahiti Lime, Mango, Pineapple, Avocado, Dragon Fruit and Cacao.',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PA',
      addressLocality: 'Panama City',
      addressRegion: 'Panama',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
      // 'https://www.facebook.com/freshfoodpanama',
      // 'https://www.instagram.com/freshfoodpanama',
      // 'https://www.linkedin.com/company/freshfoodpanama',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    keywords: locale === 'es'
      ? 'exportación frutas tropicales, limón tahití, mango kent, piña golden, aguacate hass, pitahaya, cacao panamá'
      : 'tropical fruit export, tahiti lime, kent mango, golden pineapple, hass avocado, dragon fruit, panama cacao',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

