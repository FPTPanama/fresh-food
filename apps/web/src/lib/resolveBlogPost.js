import { redirect } from 'next/navigation';
import { safeFetch, checkSanityConfig } from '@/sanity/lib/client';
import { postBySlugQuery, postBySlugAnyLanguageQuery } from '@/sanity/lib/queries';

async function fetchPost(slug, language) {
  return await safeFetch(postBySlugQuery, { slug, language });
}

/**
 * Obtiene el post por slug + idioma. Si la URL mezcla locale y slug de otro idioma,
 * redirige a la URL canónica (traducción en el idioma pedido o versión original).
 */
export async function resolveBlogPost(slug, locale) {
  const post = await fetchPost(slug, locale);
  if (post) return post;

  if (!checkSanityConfig()) return null;

  const hint = await safeFetch(postBySlugAnyLanguageQuery, { slug });
  if (!hint) return null;

  if (hint.language === locale) {
    const retry = await fetchPost(hint.slug, locale);
    return retry ?? null;
  }

  const translations = (hint._translations || []).filter(t => t?.slug && t?.language);
  const forLocale = translations.find(t => t.language === locale);
  if (forLocale) {
    redirect(`/${locale}/blog/${forLocale.slug}`);
  }

  redirect(`/${hint.language}/blog/${hint.slug}`);
}
