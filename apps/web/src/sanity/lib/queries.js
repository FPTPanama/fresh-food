import { groq } from 'next-sanity';

// Obtener todos los posts por idioma
export const postsQuery = groq`
  *[_type == "post" && language == $language] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    language,
    "author": author->name,
    "categories": categories[]->title
  }
`;

// Obtener todos los posts (sin filtro de idioma - fallback)
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    language,
    "author": author->name,
    "categories": categories[]->title
  }
`;

// Obtener un post por slug e idioma, con traducciones para el language switcher
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && language == $language][0] {
    _id,
    title,
    slug,
    language,
    publishedAt,
    excerpt,
    body[] {
      ...,
      _type == "image" => {
        ...,
        asset->
      },
      _type == "imageGallery" => {
        ...,
        images[] {
          ...,
          asset->
        }
      },
      _type == "videoEmbed" => {
        ...,
        thumbnail {
          ...,
          asset->
        }
      },
      _type == "quoteBlock" => {
        ...,
        authorImage {
          ...,
          asset->
        }
      }
    },
    mainImage {
      ...,
      asset->
    },
    "author": author->{
      name,
      image {
        ...,
        asset->
      },
      bio
    },
    "categories": categories[]->{
      title,
      slug
    },
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      "slug": slug.current,
      language
    }
  }
`;

// Post por slug en cualquier idioma (solo metadatos para resolver URL canónica)
export const postBySlugAnyLanguageQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    language,
    "slug": slug.current,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      "slug": slug.current,
      language
    }
  }
`;

// Obtener posts por categoría
export const postsByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current && language == $language] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "author": author->name
  }
`;

// Obtener todas las categorías
export const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    slug,
    description
  }
`;

// Obtener posts recientes (para sidebar o home)
export const recentPostsQuery = groq`
  *[_type == "post" && language == $language] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage
  }
`;

// Obtener posts destacados por idioma
export const featuredPostsQuery = groq`
  *[_type == "post" && "Highlights" in categories[]->title && language == $language] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    language,
    "author": author->name,
    "categories": categories[]->title
  }
`;

// Obtener posts NO destacados por idioma
export const regularPostsQuery = groq`
  *[_type == "post" && !("Highlights" in categories[]->title) && language == $language] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    language,
    "author": author->name,
    "categories": categories[]->title
  }
`;

// Orden de posts por idioma (mismo criterio que el listado) para navegación anterior/siguiente
export const postsNavOrderQuery = groq`
  *[_type == "post" && language == $language] | order(publishedAt desc) {
    title,
    "slug": slug.current
  }
`;
