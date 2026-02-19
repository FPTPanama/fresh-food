import { ParallaxContainer } from '@/components/parallax';
import { urlFor } from '@/sanity/lib/image';

const { default: Image } = require('next/image');
const { default: Link } = require('next/link');

const PostCard = ({ post, featured = false, locale }) => (
  <Link
    href={`/${locale}/blog/${post.slug.current}`}
    key={post._id}
    className={'relative flex grow cursor-pointer flex-col gap-5 overflow-hidden rounded-3xl bg-black shadow-sm transition-shadow hover:shadow-md'}
  >
    <ParallaxContainer
      backgroundImage={urlFor(post.mainImage).url()}
      bgSize="cover"
      filter="brightness(0.4)"
      contentZIndex={10}
      hoverZoom={1.1}
      hoverDuration={200}
    >
      <div className="flex h-full grow flex-col justify-between p-10">
        <div className="mb-20 flex flex-wrap gap-2">
          {post?.categories?.map((category, index) => (
            <div key={index} className="flex items-center justify-center rounded-full border border-white px-2 py-1">
              <p key={index} className="rounded-full px-2 py-1 text-xs text-white">
                {category}
              </p>
            </div>
          ))}
        </div>

        <p className={`mb-2 line-clamp-2 font-black text-l-300 text-white`}>{post.title}</p>

        {post.excerpt && <p className="font-regular mb-4 line-clamp-2 text-l-100 text-white">{post.excerpt}</p>}

        <div className="flex items-center justify-between text-sm text-white">
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
    </ParallaxContainer>
  </Link>
);

export default PostCard;
