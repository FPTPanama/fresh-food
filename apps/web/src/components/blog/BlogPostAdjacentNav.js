import Link from 'next/link';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const activeCard =
  'group flex h-full min-h-[100px] flex-col justify-center gap-2 rounded-xl border-2 border-greendark p-4 text-left text-greendark transition-all hover:bg-greendark hover:text-white md:p-5';
const disabledCard =
  'flex h-full min-h-[100px] flex-col justify-center gap-2 rounded-xl border-2 border-greendark/25 bg-transparent p-4 text-left text-greendark/35 md:p-5';

export default function BlogPostAdjacentNav({ locale, older, newer, labels }) {
  return (
    <nav
      className="mt-16 grid grid-cols-1 gap-4 border-t border-greendark/20 pt-10 md:grid-cols-2"
      aria-label={labels.ARIA}
    >
      <div className="md:pr-2">
        {older ? (
          <Link href={`/${locale}/blog/${older.slug}`} className={`${activeCard} items-start`}>
            <span className="flex items-center gap-1 text-sm font-bold">
              <IoChevronBack className="shrink-0" aria-hidden />
              {labels.TO_OLDER}
            </span>
            <span className="line-clamp-2 text-l-100 group-hover:text-white/90">{older.title}</span>
          </Link>
        ) : (
          <div className={`${disabledCard} items-start`} aria-disabled="true">
            <span className="flex items-center gap-1 text-sm font-bold">
              <IoChevronBack className="shrink-0" aria-hidden />
              {labels.TO_OLDER}
            </span>
          </div>
        )}
      </div>
      <div className="md:pl-2">
        {newer ? (
          <Link href={`/${locale}/blog/${newer.slug}`} className={`${activeCard} items-end text-right md:items-end`}>
            <span className="flex items-center gap-1 text-sm font-bold">
              {labels.TO_NEWER}
              <IoChevronForward className="shrink-0" aria-hidden />
            </span>
            <span className="line-clamp-2 text-l-100 group-hover:text-white/90">{newer.title}</span>
          </Link>
        ) : (
          <div className={`${disabledCard} items-end text-right`} aria-disabled="true">
            <span className="flex items-center gap-1 text-sm font-bold">
              {labels.TO_NEWER}
              <IoChevronForward className="shrink-0" aria-hidden />
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
