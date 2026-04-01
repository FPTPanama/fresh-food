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
      <head>
        {/* Preload fuentes críticas para reducir la latencia de la ruta crítica (Lighthouse) */}
        <link
          rel="preload"
          href="/fonts/pop_regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/pop_medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/pop_black.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/yesteryear.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-fresh">{children}</body>
    </html>
  );
}
