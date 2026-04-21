import { safeFetch, checkSanityConfig } from '@/sanity/lib/client';
import { postsNavOrderQuery } from '@/sanity/lib/queries';

/**
 * Vecinos en el mismo orden que el listado del blog (publishedAt desc).
 * - older: publicación más antigua (siguiente fila en el índice)
 * - newer: publicación más reciente (fila anterior en el índice)
 */
export async function getBlogAdjacentPosts(locale, currentSlug) {
  if (!checkSanityConfig()) {
    return { older: null, newer: null };
  }

  const ordered = await safeFetch(postsNavOrderQuery, { language: locale });
  if (!ordered?.length) {
    return { older: null, newer: null };
  }

  const idx = ordered.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) {
    return { older: null, newer: null };
  }

  return {
    older: idx < ordered.length - 1 ? ordered[idx + 1] : null,
    newer: idx > 0 ? ordered[idx - 1] : null,
  };
}
