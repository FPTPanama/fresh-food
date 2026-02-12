import { notFound } from 'next/navigation';
import { i18n } from '../../i18n';
import '@/styles/burger-menu.scss';
import '@/styles/global.scss';
import '@/styles/globals.css';
import '@/styles/mixins.scss';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  return {
    metadataBase: new URL('https://freshfoodpanama.com'),
    title: {
      default: locale === 'es' 
        ? 'Fresh Food Panamá | Exportación de frutas y alimentos frescos desde Centroamérica'
        : 'Fresh Food Panama | Export of fresh fruits and food from Central America',
      template: locale === 'es' ? '%s | Fresh Food Panamá' : '%s | Fresh Food Panama',
    },
    description: locale === 'es'
      ? 'Exportamos frutas tropicales, vegetales frescos y alimentos de alta calidad desde Panamá hacia el mundo. Garantizamos frescura, trazabilidad y cumplimiento sanitario.'
      : 'We export tropical fruits, fresh vegetables and high-quality food from Panama to the world. We guarantee freshness, traceability and sanitary compliance.',
    keywords: locale === 'es'
      ? 'frutas tropicales, exportación de alimentos, Panamá, mango, piña, limón tahití, aguacate, productos frescos, agroexportación, fresh food panama'
      : 'tropical fruits, food export, Panama, mango, pineapple, tahiti lime, avocado, fresh products, agro-export, fresh food panama',
    authors: [{ name: 'Fresh Food Panamá' }],
    creator: 'Fresh Food Panamá',
    publisher: 'Fresh Food Panamá',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url: `https://freshfoodpanama.com/${locale}`,
      siteName: 'Fresh Food Panamá',
      title: locale === 'es' ? 'Fresh Food Panamá' : 'Fresh Food Panama',
      description: locale === 'es'
        ? 'Frutas tropicales, vegetales frescos y productos agroalimentarios exportados desde Panamá con los más altos estándares de calidad y frescura.'
        : 'Tropical fruits, fresh vegetables and agro-food products exported from Panama with the highest quality and freshness standards.',
      images: [
        {
          url: '/img/fresh_food_metaimage.webp',
          width: 1200,
          height: 630,
          alt: 'Fresh Food Panamá - Exportación de frutas frescas',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'es' ? 'Fresh Food Panamá' : 'Fresh Food Panama',
      description: locale === 'es'
        ? 'Exportación de frutas tropicales y alimentos frescos desde Panamá'
        : 'Export of tropical fruits and fresh food from Panama',
      images: ['/img/fresh_food_metaimage.webp'],
    },
    alternates: {
      canonical: `https://freshfoodpanama.com/${locale}`,
      languages: {
        'es': 'https://freshfoodpanama.com/es',
        'en': 'https://freshfoodpanama.com/en',
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/favicon.ico',
    },
    verification: {
      // Agregar cuando tengas las verificaciones
      // google: 'tu-codigo-google',
      // yandex: 'tu-codigo-yandex',
      // bing: 'tu-codigo-bing',
    },
  };
}

const LocaleLayout = async ({ children, params }) => {
  const { locale } = await params;

  if (!i18n.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <OrganizationSchema locale={locale} />
      </head>
      <body className={`bg-fresh snap-y snap-mandatory scroll-smooth overflow-y-scroll`}>{children}</body>
    </html>
  );
};

export default LocaleLayout;
