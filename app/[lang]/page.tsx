import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import References from '../../components/References'
import Process from '../../components/Process'
import FAQ from '../../components/FAQ'
import Contact from '../../components/Contact'

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar lang={lang} nav={dict.nav} />
      <main>
        <Hero hero={dict.hero} />
        <Services services={dict.services} />
        <Process process={dict.process} />
        <References references={dict.references} />
        <FAQ faq={dict.faq} />
        <Contact contact={dict.contact} />
      </main>
    </>
  )
}
