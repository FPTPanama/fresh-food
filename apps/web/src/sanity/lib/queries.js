import { groq } from 'next-sanity'

// Obtener todos los posts
export const postsQuery = groq`
  *[_type == "post" && language == $language] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "author": author->name,
    "categories": categories[]->title
  }
`

// Obtener un post por slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage,
    "author": author->{
      name,
      image,
      bio
    },
    "categories": categories[]->{
      title,
      slug
    }
  }
`

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
`

// Obtener todas las categorías
export const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    slug,
    description
  }
`

// Obtener posts recientes (para sidebar o home)
export const recentPostsQuery = groq`
  *[_type == "post" && language == $language] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage
  }
`
