import Link from 'next/link';
import { cookies } from 'next/headers';
import { getDictionary } from '@/lib/getDictionary';
import { i18n } from '../i18n';

export default async function NotFound() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  const locale = i18n.locales.includes(cookieLocale) ? cookieLocale : i18n.defaultLocale;
  const dictionary = await getDictionary(locale);
  const t = dictionary.not_found;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-fresh px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 scale-x-[-1] bg-cover bg-center bg-no-repeat mix-blend-multiply"
        style={{ backgroundImage: 'url(/img/sombra.svg)' }}
      />
      <div className="relative z-10 m-auto flex w-full max-w-[90%] flex-col items-start justify-center gap-10">
        <h1
          className="flex w-full max-w-[80%] items-center justify-center gap-1 text-7xl font-bold text-greendark md:gap-2 md:text-8xl"
          aria-label={t.ARIA_404}
        >
          {t.TITLE}
        </h1>
        <p className="mt-4 text-lg text-greendark md:text-xl">{t.SUBTITLE}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 flex items-center justify-center rounded-full border-2 border-greendark px-4 py-2 text-l-100 text-greendark transition-all hover:bg-greendark hover:text-white md:hover:px-8"
        >
          {t.BACK_HOME}
        </Link>
      </div>
    </div>
  );
}
