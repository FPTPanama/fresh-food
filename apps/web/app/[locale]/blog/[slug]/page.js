import { safeFetch, checkSanityConfig } from '@/sanity/lib/client';
import { postBySlugQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import BlogContent from '@/components/blog/BlogContent';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import { IoArrowForwardCircleOutline, IoArrowForwardOutline } from 'react-icons/io5';

async function getPost(slug, language) {
  return await safeFetch(postBySlugQuery, { slug, language });
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;

  const defaultDescription =
    locale === 'es'
      ? 'Artículos sobre exportación de frutas tropicales, agricultura sostenible y productos frescos desde Panamá.'
      : 'Articles about tropical fruit export, sustainable agriculture and fresh products from Panama.';

  if (!checkSanityConfig()) {
    return {
      title: 'Blog | Fresh Food',
      description: defaultDescription,
    };
  }

  const post = await getPost(slug, locale);

  if (!post) {
    return {
      title: locale === 'es' ? 'Post no encontrado' : 'Post not found',
      description: defaultDescription,
    };
  }

  return {
    title: `${post.title} | Fresh Food Blog`,
    description: post.excerpt || defaultDescription,
  };
}

export default async function PostPage({ params }) {
  const { slug, locale } = await params;
  const dictionary = await getDictionary(locale);
  const isConfigured = checkSanityConfig();

  // Si Sanity no está configurado, mostrar mensaje
  if (!isConfigured) {
    return (
      <main className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link href={`/${locale}/blog`} className="text-green-600 hover:underline">
            ← Volver al Blog
          </Link>
        </nav>
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800">
          <p className="font-semibold">⚠️ CMS no configurado</p>
          <p className="mt-1 text-sm">Configura las variables de entorno de Sanity para ver este post.</p>
        </div>
      </main>
    );
  }

  const post = await getPost(slug, locale);

  if (!post) {
    notFound();
  }

  // Construir URLs alternativas para el language switcher (slugs pueden diferir por idioma)
  const alternateUrls = (post._translations || [])
    .filter((t) => t?.slug && t?.language)
    .reduce(
      (acc, t) => {
        acc[t.language] = `/${t.language}/blog/${t.slug}`;
        return acc;
      },
      { es: null, en: null }
    );
  // Si falta una traducción, usar el índice del blog en ese idioma
  if (!alternateUrls.es) alternateUrls.es = '/es/blog';
  if (!alternateUrls.en) alternateUrls.en = '/en/blog';

  return (
    <div className="responsiveWidth mb-20 flex w-full flex-col px-5 text-greendark md:px-0">
      <GeneralLayout dictionary={dictionary} alternateUrls={alternateUrls}>
        <section className="flex w-full flex-col items-center justify-center text-gray-800">
          <article className="mx-auto mt-20 max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-l-100 text-greendark">
              <Link href={'/'}>Home</Link>
              <IoArrowForwardOutline />
              <Link href={`/${locale}/blog`}>Blog</Link>
              <IoArrowForwardOutline />
              <Link className="line-clamp-1" href={`/${locale}/blog/${slug}`}>
                {post.title}
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-8 w-full">
              <h1 className="mb-4 w-full text-4xl font-bold leading-tight">{post.title}</h1>

              {/* Meta */}
              <div className="flex-start flex w-full items-center gap-4">
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
                    <span className="text-sm font-bold">{post.author.name}</span>
                  </div>
                )}
                <p className="text-sm text-greendark">|</p>
                {post.publishedAt && (
                  <time className="text-sm text-greendark" dateTime={post.publishedAt}>
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
            {post.excerpt && <p className="font-regular mb-8 text-xl leading-relaxed">{post.excerpt}</p>}

            {/* Contenido */}
            <BlogContent body={post.body} />
          </article>
        </section>
      </GeneralLayout>
    </div>
  );
}
