import '@/styles/burger-menu.scss';
import '@/styles/global.scss';
import '@/styles/globals.css';

export const metadata = {
  title: 'Fresh Food Panamá',
  description: 'Exportación de frutas tropicales y alimentos frescos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-fresh">{children}</body>
    </html>
  );
}
