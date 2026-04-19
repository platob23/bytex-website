import type { Metadata } from 'next'
import { Geist, Syne } from 'next/font/google'
import '../globals.css'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
})

const meta = {
  de: {
    title: 'Bytex – Webentwicklung & SaaS',
    description: 'Individuelle Websites und SaaS-Lösungen für Startups, kleine Unternehmen und Selbständige. Sauber umgesetzt, langfristig tragfähig.',
  },
  en: {
    title: 'Bytex – Web Development & SaaS',
    description: 'Custom websites and SaaS solutions for startups, small businesses, and independent professionals. Clean code, long-term quality.',
  },
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  const m = meta[lang as keyof typeof meta] ?? meta.de
  const url = `https://bytex.at/${lang}`

  return {
    title: { default: m.title, template: '%s – Bytex' },
    description: m.description,
    metadataBase: new URL('https://bytex.at'),
    alternates: {
      canonical: url,
      languages: { de: 'https://bytex.at/de', en: 'https://bytex.at/en' },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      siteName: 'Bytex',
      locale: lang === 'de' ? 'de_AT' : 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: ['/og-image.png'],
    },
    robots: { index: true, follow: true },
  }
}

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }]
}

function getJsonLd(lang: string) {
  const isDe = lang === 'de'
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bytex',
    url: `https://bytex.at/${lang}`,
    email: 'office@bytex.at',
    inLanguage: isDe ? 'de-AT' : 'en-US',
    founder: { '@type': 'Person', name: 'Tobias Plank' },
    address: { '@type': 'PostalAddress', addressCountry: 'AT' },
    serviceType: isDe
      ? ['Webentwicklung', 'SaaS-Entwicklung', 'Branding']
      : ['Web Development', 'SaaS Development', 'Branding'],
    areaServed: { '@type': 'Country', name: 'Austria' },
    sameAs: [],
  }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(lang)) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
