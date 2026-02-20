import { safeFetch } from '@/sanity/lib/client';
import { featuredPostsQuery, regularPostsQuery, postsQuery } from '@/sanity/lib/queries';
import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import PostCard from 'components/post-card/post-card';
import PostFeaturedCard from 'components/post-featured-card/post-featured-card';
import BlogHero from 'components/blog-hero/blog-hero';

async function getFeaturedPosts(language) {
  return await safeFetch(featuredPostsQuery, { language });
}

async function getRegularPosts(language) {
  return await safeFetch(regularPostsQuery, { language });
}

async function getAllPosts(language) {
  return await safeFetch(postsQuery, { language });
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  return {
    title: locale === 'es' 
      ? 'Noticias | Fresh Food Panamá' 
      : 'News | Fresh Food Panama',
    description: locale === 'es'
      ? 'Noticias y artículos sobre exportación de frutas tropicales, agricultura sostenible y productos frescos desde Panamá.'
      : 'News and articles about tropical fruit export, sustainable agriculture and fresh products from Panama.',
    openGraph: {
      title: locale === 'es' ? 'Noticias | Fresh Food Panamá' : 'News | Fresh Food Panama',
      description: locale === 'es'
        ? 'Noticias y artículos sobre exportación de frutas tropicales y productos frescos.'
        : 'News and articles about tropical fruit export and fresh products.',
      type: 'website',
    },
  };
}

const BlogPage = async ({ params }) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const featuredPosts = await getFeaturedPosts(locale);
  const regularPosts = await getRegularPosts(locale);

  const posts = await getAllPosts(locale);

  return (
    <GeneralLayout dictionary={dictionary}>
      <div className="responsiveWidth mb-20 flex w-full flex-col text-greendark">
        <section className="flex w-full flex-col items-start justify-between gap-5 pb-10 md:h-[calc(100vh-130px)]">
          <BlogHero image="/img/frutas_blog_header.webp" brightness="0.6" yOffset={30}>
            <div className="relative z-10 mb-10 flex w-1/2 flex-col items-start justify-center p-20">
              <p className="mb-5 rounded-full border border-white px-6 py-2 text-sm text-white">{dictionary.blog.PRODUCTS}</p>
              <h1 className="text-4xl font-bold text-white">{dictionary.blog.EXPERT_FARMERS}</h1>
              <h2 className="font-thin text-3xl text-white">{dictionary.blog.BRINGING_THE_BEST_TO_WHERE_IT_MATTERS_MOST}</h2>
            </div>
          </BlogHero>
          <div className="grid w-full grow grid-cols-2 flex-col items-start justify-center gap-5">
            {featuredPosts &&
              featuredPosts.slice(0, 2).map((post, key) => {
                return <PostFeaturedCard key={key} post={post} locale={locale} />;
              })}
          </div>
        </section>
        <section className="grid grid-cols-3 gap-5">{posts && posts.map(post => <PostCard key={post._id} post={post} locale={locale} />)}</section>
      </div>
    </GeneralLayout>
  );
};

export default BlogPage;
