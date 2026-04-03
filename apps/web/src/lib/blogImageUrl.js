import { urlFor } from '@/sanity/lib/image';

const QUALITY = 85;

/**
 * URLs del CDN de Sanity para el cuerpo del blog: fit=max (sin recorte agresivo),
 * calidad fija y auto=format. Resoluciones pensadas para ~max-w-3xl y pantallas retina.
 */
export const blogImagePresets = {
  /** Imagen a ancho completo en el artículo (~768px layout × 2) */
  inline: { width: 1600, height: 900 },
  /** Celda de galería / carrusel */
  gallery: { width: 900, height: 675 },
  /** Avatar en bloque de cita */
  avatar: { width: 96, height: 96 },
};

/**
 * @param {object} image - nodo imagen de Sanity (con asset o _ref)
 * @param {{ width: number, height: number }} size - tamaño máximo pedido al CDN
 */
export function getBlogImageUrl(image, size) {
  if (!image || !size?.width) return null;

  try {
    if (image?.asset?.url) {
      const url = new URL(image.asset.url);
      url.searchParams.set('w', String(size.width));
      if (size.height) url.searchParams.set('h', String(size.height));
      url.searchParams.set('fit', 'max');
      url.searchParams.set('q', String(QUALITY));
      url.searchParams.set('auto', 'format');
      return url.toString();
    }

    if (image?.asset?._ref || image?._ref) {
      let b = urlFor(image).fit('max').quality(QUALITY).auto('format').width(size.width);
      if (size.height) b = b.height(size.height);
      return b.url();
    }

    return null;
  } catch (error) {
    console.error('Error generating blog image URL:', error);
    return null;
  }
}
