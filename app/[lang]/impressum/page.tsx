import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = { title: 'Impressum' }
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

      <main style={{ backgroundColor: 'var(--bg-primary)', padding: '7rem 0 6rem' }}>
        <Container style={{ maxWidth: '680px' }}>

          {/* Back */}
          <a href={`/${lang}`} className="legal-back">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Zurück
          </a>

          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ color: 'var(--accent)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Rechtliches
            </p>
            <h1 style={{ fontFamily: 'var(--font-body-family)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 'var(--weight-extrabold)', lineHeight: 'var(--leading-tight)', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Impressum
            </h1>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-loose)' }}>
              Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB
            </p>
          </div>

          {/* 01 — Betreiber */}
          <div className="legal-section">
            <span className="legal-num">01</span>
            <h2 className="legal-h2">Betreiber</h2>
            <dl className="legal-dl">
              <dt className="legal-dt">Webseitenbetreiber</dt>
              <dd className="legal-dd">Tobias Plank</dd>
              <dt className="legal-dt">Anschrift</dt>
              <dd className="legal-dd">Spielmanngasse 7, 8472 Vogau</dd>
              <dt className="legal-dt">UID-Nr</dt>
              <dd className="legal-dd">Nicht umsatzsteuerpflichtig gemäß § 6 Abs 1 Z 27 UStG</dd>
              <dt className="legal-dt">Aufsichtsbehörde</dt>
              <dd className="legal-dd">Bezirkshauptmannschaft Leibnitz</dd>
              <dt className="legal-dt">Mitgliedschaft</dt>
              <dd className="legal-dd">Wirtschaftskammer Steiermark</dd>
            </dl>
          </div>

          {/* 02 — Kontakt */}
          <div className="legal-section">
            <span className="legal-num">02</span>
            <h2 className="legal-h2">Kontaktdaten</h2>
            <dl className="legal-dl">
              <dt className="legal-dt">Telefon</dt>
              <dd className="legal-dd"><a href="tel:+4368181535090" className="legal-link">+43 681 81535090</a></dd>
              <dt className="legal-dt">E-Mail</dt>
              <dd className="legal-dd"><a href="mailto:office@bytex.at" className="legal-link">office@bytex.at</a></dd>
            </dl>
          </div>

          {/* 03 — Rechtsvorschrift */}
          <div className="legal-section">
            <span className="legal-num">03</span>
            <h2 className="legal-h2">Anwendbare Rechtsvorschrift</h2>
            <p className="legal-p">
              Anwendbare gewerbe- oder berufsrechtliche Vorschriften sind einsehbar unter:{' '}
              <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="legal-link">ris.bka.gv.at</a>
            </p>
            <p className="legal-p">
              Berufsbezeichnung: Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik
            </p>
          </div>

          {/* 04 — Streitbeilegung */}
          <div className="legal-section">
            <span className="legal-num">04</span>
            <h2 className="legal-h2">Online Streitbeilegung</h2>
            <p className="legal-p">
              Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit, Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="legal-link">ec.europa.eu/consumers/odr</a>
            </p>
          </div>

          {/* 05 — Urheberrecht */}
          <div className="legal-section">
            <span className="legal-num">05</span>
            <h2 className="legal-h2">Urheberrecht</h2>
            <p className="legal-p">
              Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B. dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.
            </p>
          </div>

          {/* 06 — Haftung */}
          <div className="legal-section">
            <span className="legal-num">06</span>
            <h2 className="legal-h2">Haftungsausschluss</h2>
            <p className="legal-p">
              Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.
            </p>
            <p className="legal-p">
              Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.
            </p>
          </div>

          {/* Source */}
          <p style={{ marginTop: '2.5rem', fontSize: '0.7rem', color: 'var(--text-muted)', opacity: 0.5, letterSpacing: '0.03em' }}>
            Quelle: Impressum Generator Österreich
          </p>

        </Container>
      </main>

      <Footer nav={dict.nav} footer={dict.footer} lang={lang} />
    </>
  )
}
