import { client } from '@/sanity/lib/client'
import { postBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getPost(slug) {
  return await client.fetch(postBySlugQuery, { slug })
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post no encontrado',
    }
  }

  return {
    title: `${post.title} | Fresh Food Blog`,
    description: post.excerpt,
  }
}

// Componentes personalizados para PortableText
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Imagen del post'}
            width={800}
            height={450}
            className="rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-green-600 hover:underline">
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="mb-4 mt-8 text-3xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-8 text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-6 text-xl font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-4 text-lg font-semibold">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-green-500 pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
}

export default async function PostPage({ params }) {
  const { slug, locale } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href={`/${locale}/blog`}
            className="text-green-600 hover:underline"
          >
            ← Volver al Blog
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {/* Categorías */}
          {post.categories?.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category.slug?.current || category.title}
                  className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="mb-4 text-4xl font-bold leading-tight">{post.title}</h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-600">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(40).height(40).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span>{post.author.name}</span>
              </div>
            )}

            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>
        </header>

        {/* Imagen principal */}
        {post.mainImage && (
          <div className="relative mb-8 h-96 w-full overflow-hidden rounded-xl">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Extracto */}
        {post.excerpt && (
          <p className="mb-8 text-xl leading-relaxed text-gray-600">
            {post.excerpt}
          </p>
        )}

        {/* Contenido */}
        <div className="prose prose-lg max-w-none">
          {post.body && (
            <PortableText value={post.body} components={portableTextComponents} />
          )}
        </div>
      </article>
    </main>
  )
}
