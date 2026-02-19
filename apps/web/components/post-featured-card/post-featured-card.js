import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

// Función para formatear fecha: "Mar 15, 2022"
const formatDate = dateString => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const PostFeaturedCard = ({ post, locale }) => {
  return (
    <Link
      href={`/${locale}/blog/${post.slug.current}`}
      className="flex h-full grow items-start justify-center overflow-hidden rounded-3xl border border-greendark"
    >
      <div
        className="flex h-full w-1/3 items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${urlFor(post.mainImage).url()})` }}
      />
      <div className="flex h-full w-2/3 flex-col items-start justify-center gap-2 p-5">
        <p className="text-sm font-bold">{post.categories?.join(', ')}</p>
        <h2 className="line-clamp-2 text-xl font-bold">{post.title}</h2>
        <p className="line-clamp-1 text-sm">{post.excerpt}</p>
        <p className="text-sm font-bold">{formatDate(post.publishedAt)}</p>
      </div>
    </Link>
  );
};

export default PostFeaturedCard;
