// Dynamic Sitemap for Fresh Food Panamá
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

export default function sitemap() {
  const baseUrl = 'https://freshfoodpanama.com';
  const locales = ['es', 'en'];
  
  // Páginas principales del sitio
  const routes = ['', '/products', '/about-us', '/logistic', '/contact'];
  
  // Generar URLs para cada locale
  const urls = [];
  
  locales.forEach((locale) => {
    routes.forEach((route) => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  return urls;
}

