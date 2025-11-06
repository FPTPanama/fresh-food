import { NextResponse } from 'next/server';
import { i18n } from './i18n';

function detectBrowserLanguage(acceptLanguage, countryCode = null) {
  if (!acceptLanguage) {
    // Si no hay Accept-Language, intentar detectar por país
    return detectLanguageByCountry(countryCode);
  }

  const languages = acceptLanguage.split(',');

  for (const lang of languages) {
    const languageCode = lang.split(';')[0].trim().toLowerCase();
    const primaryLanguage = languageCode.split('-')[0].toLowerCase();

    if (i18n.locales.includes(primaryLanguage)) {
      return primaryLanguage;
    }
  }

  // Si no se encuentra en Accept-Language, intentar por país
  return detectLanguageByCountry(countryCode);
}

function detectLanguageByCountry(countryCode) {
  // Países donde el inglés es más común
  const englishCountries = ['US', 'GB', 'AU', 'CA', 'NZ', 'IE', 'ZA', 'SG', 'MY', 'PH', 'IN', 'PK', 'NG', 'KE', 'GH'];

  // Países donde el español es más común
  const spanishCountries = [
    'ES',
    'MX',
    'AR',
    'CO',
    'CL',
    'PE',
    'VE',
    'EC',
    'GT',
    'CU',
    'BO',
    'DO',
    'HN',
    'PY',
    'SV',
    'NI',
    'CR',
    'PA',
    'UY',
    'PR',
    'GQ',
  ];

  if (!countryCode) return null;

  const upperCountry = countryCode.toUpperCase();

  if (englishCountries.includes(upperCountry)) {
    return 'en';
  }

  if (spanishCountries.includes(upperCountry)) {
    return 'es';
  }

  // Para otros países, usar español como predeterminado (puedes ajustar esto)
  return null;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isMissingLocale = i18n.locales.every(locale => !pathname.startsWith(`/${locale}`));

  if (isMissingLocale) {
    // SIEMPRE priorizar la cookie si existe, incluso si hay una detección automática disponible
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    if (cookieLocale && i18n.locales.includes(cookieLocale)) {
      const response = NextResponse.redirect(new URL(`/${cookieLocale}${pathname}`, request.url));
      // Reforzar la cookie para asegurar que persista
      response.cookies.set('NEXT_LOCALE', cookieLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      return response;
    }

    // Solo si NO hay cookie, hacer detección automática
    const acceptLanguage = request.headers.get('accept-language');
    // Intentar obtener el país desde el header CF-IPCountry (Cloudflare) o Vercel
    const countryCode =
      request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country') || request.headers.get('x-country-code') || null;
    const detectedLocale = detectBrowserLanguage(acceptLanguage, countryCode);
    const locale = detectedLocale || i18n.defaultLocale;

    const response = NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));

    // Guardar el locale detectado en la cookie para futuras navegaciones
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

    // CRÍTICO: Si el locale en la URL no coincide con la cookie, redirigir a la cookie
    // Esto asegura que la preferencia del usuario siempre se respete
    if (cookieLocale && cookieLocale !== currentLocale && i18n.locales.includes(cookieLocale)) {
      const newPath = pathname.replace(`/${currentLocale}`, `/${cookieLocale}`);
      const redirectResponse = NextResponse.redirect(new URL(newPath, request.url));
      // Reforzar la cookie
      redirectResponse.cookies.set('NEXT_LOCALE', cookieLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      return redirectResponse;
    }

    // Sincronizar la cookie con el locale de la URL si no hay cookie o coincide
    // Esto asegura que la cookie siempre esté actualizada
    if (!cookieLocale || cookieLocale !== currentLocale) {
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
