import { notFound } from 'next/navigation';
import { i18n } from '../../i18n';
import '@/styles/global.scss';
import '@/styles/globals.css';
import '@/styles/mixins.scss';

export const metadata = {
  title: 'Fresh Food Panamá',
  description: 'Exportación de frutas tropicales a todo el mundo.',
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
