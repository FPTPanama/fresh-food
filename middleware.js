import { NextResponse } from 'next/server';
import { i18n } from './i18n';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isMissingLocale = i18n.locales.every(locale => !pathname.startsWith(`/${locale}`));

  if (isMissingLocale) {
    return NextResponse.redirect(new URL(`/${i18n.defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
