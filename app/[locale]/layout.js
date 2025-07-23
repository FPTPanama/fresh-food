import { notFound } from 'next/navigation';
import { i18n } from '../../i18n';
import '@/styles/global.scss';
import '@/styles/globals.css';
import '@/styles/mixins.scss';

export const metadata = {
  title: 'Fresh Food Panamá | Exportación de frutas y alimentos frescos desde Centroamérica',
  description:
    'Exportamos frutas tropicales, vegetales frescos y alimentos de alta calidad desde Panamá hacia el mundo. Garantizamos frescura, trazabilidad y cumplimiento sanitario.',
  openGraph: {
    title: 'Fresh Food Panamá',
    description:
      'Frutas tropicales, vegetales frescos y productos agroalimentarios exportados desde Panamá con los más altos estándares de calidad y frescura.',
    url: 'https://freshfoodpanama.com/es',
    siteName: 'Fresh Food Panamá',
    keywords: ['frutas tropicales', 'exportación de alimentos', 'Panamá', 'mango', 'piña', 'productos frescos', 'agroexportación'],
    images: [
      {
        url: 'https://freshfoodpanama.com/img/fresh_food_metaimage.webp',
        width: 1200,
        height: 630,
        alt: 'Fresh Food Panamá - Exportación de frutas frescas',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!i18n.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`bg-fresh`}>{children}</body>
    </html>
  );
}
