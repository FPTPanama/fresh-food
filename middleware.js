import { NextResponse } from 'next/server';
import { i18n } from './i18n';

/**
 * Detecta el idioma preferido del navegador desde el header Accept-Language
 * Compatible con todos los navegadores: Chrome, Firefox, Safari, Edge, etc.
 * @param {string} acceptLanguage - Header Accept-Language del navegador
 * @returns {string} - Código de idioma detectado o null
 */
function detectBrowserLanguage(acceptLanguage) {
  if (!acceptLanguage) return null;

  // El header Accept-Language puede venir en varios formatos:
  // - "es-ES,es;q=0.9,en;q=0.8" (Chrome, Edge)
  // - "es-MX,es;q=0.9" (Chrome con español de México)
  // - "en-US,en;q=0.9" (Chrome/Safari con inglés)
  // - "es" (algunos navegadores móviles)
  
  // Dividir por comas para obtener todos los idiomas en orden de preferencia
  const languages = acceptLanguage.split(',');
  
  for (const lang of languages) {
    // Remover el valor de calidad (q=0.9) si existe
    const languageCode = lang.split(';')[0].trim();
    
    // Extraer el código de idioma principal (es de es-ES, en de en-US, etc.)
    const primaryLanguage = languageCode.split('-')[0].toLowerCase();
    
    // Verificar si el idioma está en nuestros locales soportados
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
    // Obtener el header Accept-Language del navegador
    const acceptLanguage = request.headers.get('accept-language');
    
    // Detectar el idioma preferido del navegador
    const detectedLocale = detectBrowserLanguage(acceptLanguage);
    
    // Usar el idioma detectado o el idioma por defecto
    const locale = detectedLocale || i18n.defaultLocale;
    
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
