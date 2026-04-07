import { NextResponse } from 'next/server'

const locales = ['de', 'en']
const defaultLocale = 'de'

function getLocale(request) {
  const acceptLang = request.headers.get('accept-language') || ''
  return acceptLang.toLowerCase().startsWith('en') ? 'en' : defaultLocale
}

export function proxy(request) {
  const { pathname } = request.nextUrl

  const detectedLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (detectedLocale) {
    const response = NextResponse.next()
    response.headers.set('x-lang', detectedLocale)
    return response
  }

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
}
