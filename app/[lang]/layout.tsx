import { Geist, Syne } from 'next/font/google'
import '../globals.css'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }]
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
