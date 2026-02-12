import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'

async function getPosts(locale) {
  return await client.fetch(postsQuery, { language: locale })
}

export const metadata = {
  title: 'Blog | Fresh Food',
  description: 'Noticias y artículos sobre agricultura sostenible y productos frescos',
}

export default async function BlogPage({ params }) {
  const { locale } = await params
  const posts = await getPosts(locale)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>

      {posts?.length === 0 && (
        <p className="text-gray-500">No hay posts disponibles.</p>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <article
            key={post._id}
            className="overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md"
          >
            {post.mainImage && (
              <Link href={`/${locale}/blog/${post.slug.current}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(post.mainImage).width(400).height(250).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            )}

            <div className="p-4">
              <div className="mb-2 flex flex-wrap gap-2">
                {post.categories?.map((category, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <Link href={`/${locale}/blog/${post.slug.current}`}>
                <h2 className="mb-2 text-xl font-semibold hover:text-green-600">
                  {post.title}
                </h2>
              </Link>

              {post.excerpt && (
                <p className="mb-4 line-clamp-3 text-gray-600">{post.excerpt}</p>
              )}

              <div className="flex items-center justify-between text-sm text-gray-500">
                {post.author && <span>{post.author}</span>}
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
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
