import { NextResponse } from 'next/server';
import { i18n } from './i18n';

function detectBrowserLanguage(acceptLanguage) {
  if (!acceptLanguage) return null;

  const languages = acceptLanguage.split(',');
  
  for (const lang of languages) {
    const languageCode = lang.split(';')[0].trim().toLowerCase();
    const primaryLanguage = languageCode.split('-')[0].toLowerCase();
    
    if (i18n.locales.includes(primaryLanguage)) {
      return primaryLanguage;
    }
  }
  
  return null;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isMissingLocale = i18n.locales.every(locale => !pathname.startsWith(`/${locale}`));

  if (isMissingLocale) {
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    if (cookieLocale && i18n.locales.includes(cookieLocale)) {
      const response = NextResponse.redirect(new URL(`/${cookieLocale}${pathname}`, request.url));
      response.cookies.set('NEXT_LOCALE', cookieLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      return response;
    }

    const acceptLanguage = request.headers.get('accept-language');
    const detectedLocale = detectBrowserLanguage(acceptLanguage);
    const locale = detectedLocale || i18n.defaultLocale;
    
    const response = NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    
    return response;
  }

  const currentLocale = pathname.split('/')[1];
  if (i18n.locales.includes(currentLocale)) {
    const response = NextResponse.next();
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    
    if (cookieLocale !== currentLocale) {
      response.cookies.set('NEXT_LOCALE', currentLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
    }
    
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
