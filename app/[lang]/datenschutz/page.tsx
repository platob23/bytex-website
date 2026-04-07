import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = { title: 'Datenschutzerklärung' }
import { getDictionary, hasLocale } from '../dictionaries'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Container from '../../../components/Container'

export default async function DatenschutzPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar lang={lang} nav={dict.nav} forceScrolled altLangHref={`/${lang === 'de' ? 'en' : 'de'}/datenschutz`} />

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
              Datenschutz&shy;erklärung
            </h1>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-loose)' }}>
              Stand: {new Date().toLocaleDateString('de-AT', { year: 'numeric', month: 'long' })}
            </p>
          </div>

          {/* 01 — Verantwortlicher */}
          <div className="legal-section">
            <span className="legal-num">01</span>
            <h2 className="legal-h2">Verantwortlicher</h2>
            <dl className="legal-dl">
              <dt className="legal-dt">Name</dt>
              <dd className="legal-dd">Tobias Plank</dd>
              <dt className="legal-dt">Anschrift</dt>
              <dd className="legal-dd">Spielmanngasse 7, 8472 Vogau</dd>
              <dt className="legal-dt">E-Mail</dt>
              <dd className="legal-dd"><a href="mailto:office@bytex.at" className="legal-link">office@bytex.at</a></dd>
              <dt className="legal-dt">Telefon</dt>
              <dd className="legal-dd"><a href="tel:+4368181535090" className="legal-link">+43 681 81535090</a></dd>
            </dl>
          </div>

          {/* 02 — Allgemeines */}
          <div className="legal-section">
            <span className="legal-num">02</span>
            <h2 className="legal-h2">Allgemeines</h2>
            <p className="legal-p">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir erheben, wie wir sie verwenden und welche Rechte Sie in Bezug auf Ihre Daten haben.
            </p>
            <p className="legal-p">
              Die Verarbeitung personenbezogener Daten erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO) sowie dem österreichischen Datenschutzgesetz (DSG).
            </p>
          </div>

          {/* 03 — Ihre Rechte */}
          <div className="legal-section">
            <span className="legal-num">03</span>
            <h2 className="legal-h2">Ihre Rechte</h2>
            <p className="legal-p">Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <p className="legal-p">
              Auskunft (Art. 15 DSGVO) · Berichtigung (Art. 16 DSGVO) · Löschung (Art. 17 DSGVO) · Einschränkung der Verarbeitung (Art. 18 DSGVO) · Datenübertragbarkeit (Art. 20 DSGVO) · Widerspruch (Art. 21 DSGVO)
            </p>
            <p className="legal-p">
              Zur Ausübung Ihrer Rechte:{' '}
              <a href="mailto:office@bytex.at" className="legal-link">office@bytex.at</a>
            </p>
            <p className="legal-p">
              Sie haben zudem das Recht, sich bei der Datenschutzbehörde zu beschweren:{' '}
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="legal-link">dsb.gv.at</a>
            </p>
          </div>

          {/* 04 — Kontaktformular */}
          <div className="legal-section">
            <span className="legal-num">04</span>
            <h2 className="legal-h2">Kontaktformular</h2>
            <p className="legal-p">
              Wenn Sie uns über das Kontaktformular kontaktieren, werden die eingegebenen Daten (Name, E-Mail-Adresse, gewünschte Leistung, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Die Übertragung erfolgt über{' '}
              <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="legal-link">Web3Forms</a>.{' '}
              Deren Datenschutzerklärung ist unter{' '}
              <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="legal-link">web3forms.com/privacy</a> einsehbar.
            </p>
            <p className="legal-p">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
            </p>
          </div>

          {/* 05 — Hosting */}
          <div className="legal-section">
            <span className="legal-num">05</span>
            <h2 className="legal-h2">Hosting</h2>
            <p className="legal-p">
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet —{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="legal-link">vercel.com/legal/privacy-policy</a>.
              Beim Aufruf der Website erfasst Vercel automatisch Server-Logfiles: IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL sowie Zeitpunkt der Anfrage. Diese Daten sind keiner bestimmten Person zuordbar und werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p className="legal-p">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          {/* 06 — Cookies */}
          <div className="legal-section">
            <span className="legal-num">06</span>
            <h2 className="legal-h2">Cookies</h2>
            <p className="legal-p">
              Diese Website verwendet keine Tracking- oder Marketing-Cookies. Es können technisch notwendige Cookies eingesetzt werden, die für den ordnungsgemäßen Betrieb der Website erforderlich sind. Diese speichern keine personenbezogenen Daten und werden nach Ende der Sitzung gelöscht.
            </p>
          </div>

          {/* 07 — Externe Links */}
          <div className="legal-section">
            <span className="legal-num">07</span>
            <h2 className="legal-h2">Externe Links</h2>
            <p className="legal-p">
              Diese Website enthält Links zu externen Websites Dritter. Für die Datenschutzpraktiken dieser Seiten sind ausschließlich deren Betreiber verantwortlich. Wir haben keinen Einfluss auf deren Inhalte und übernehmen keine Haftung.
            </p>
          </div>

        </Container>
      </main>

      <Footer nav={dict.nav} footer={dict.footer} lang={lang} />
    </>
  )
}
