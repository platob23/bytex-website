import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Container from '../../../components/Container'

export default async function ImpressumPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar lang={lang} nav={dict.nav} forceScrolled altLangHref={`/${lang === 'de' ? 'en' : 'de'}/impressum`} />
      <main style={{ backgroundColor: 'var(--bg-primary)', padding: '8rem 0' }}>
        <Container style={{ maxWidth: '720px' }}>

          <p style={{ color: 'var(--accent)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Rechtliches
          </p>
          <h1 style={{ fontFamily: 'var(--font-body-family)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'var(--weight-extrabold)', lineHeight: 'var(--leading-tight)', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '3.5rem' }}>
            Impressum
          </h1>

          <div className="legal-section">
            <p className="legal-p">Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB</p>
          </div>

          <div className="legal-section">
            <dl className="legal-dl">
              <dt className="legal-dt">Webseitenbetreiber</dt>
              <dd className="legal-dd">Tobias Plank</dd>
              <dt className="legal-dt">Anschrift</dt>
              <dd className="legal-dd">Spielmanngasse 7, 8472 Vogau</dd>
              <dt className="legal-dt">UID-Nr</dt>
              <dd className="legal-dd">Nicht umsatzsteuerpflichtig gemäß § 6 Abs 1 Z 27 UStG</dd>
              <dt className="legal-dt">Gewerbeaufsichtsbehörde</dt>
              <dd className="legal-dd">Bezirkshauptmannschaft Leibnitz</dd>
              <dt className="legal-dt">Mitgliedschaften</dt>
              <dd className="legal-dd">Mitglied der Wirtschaftskammer Steiermark</dd>
            </dl>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">Kontaktdaten</h2>
            <dl className="legal-dl">
              <dt className="legal-dt">Telefon</dt>
              <dd className="legal-dd"><a href="tel:+4368181535090" className="legal-link">+43 681 81535090</a></dd>
              <dt className="legal-dt">E-Mail</dt>
              <dd className="legal-dd"><a href="mailto:office@bytex.at" className="legal-link">office@bytex.at</a></dd>
            </dl>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">Anwendbare Rechtsvorschrift</h2>
            <p className="legal-p">
              Anwendbare gewerbe- oder berufsrechtliche Vorschriften sind einsehbar unter:{' '}
              <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="legal-link">ris.bka.gv.at</a>
            </p>
            <p className="legal-p">Berufsbezeichnung: Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik</p>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">Online Streitbeilegung</h2>
            <p className="legal-p">
              Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit, Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="legal-link">ec.europa.eu/consumers/odr</a>
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">Urheberrecht</h2>
            <p className="legal-p">
              Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B. dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">Haftungsausschluss</h2>
            <p className="legal-p">
              Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.
            </p>
            <p className="legal-p">
              Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.
            </p>
          </div>

          <div className="legal-section">
            <p className="legal-p" style={{ color: 'var(--text-muted)', opacity: 0.6, fontSize: '0.75rem' }}>
              Quelle: Impressum Generator Österreich
            </p>
          </div>

        </Container>
      </main>
      <Footer nav={dict.nav} footer={dict.footer} lang={lang} />
    </>
  )
}
