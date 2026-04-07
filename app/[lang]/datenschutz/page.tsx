import { notFound } from 'next/navigation'
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
      <main style={{ backgroundColor: 'var(--bg-primary)', padding: '8rem 0' }}>
        <Container style={{ maxWidth: '720px' }}>

          <p style={{ color: 'var(--accent)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Rechtliches
          </p>
          <h1 style={{ fontFamily: 'var(--font-body-family)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'var(--weight-extrabold)', lineHeight: 'var(--leading-tight)', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '3.5rem' }}>
            Datenschutzerklärung
          </h1>

          <div className="legal-section">
            <h2 className="legal-h2">1. Verantwortlicher</h2>
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

          <div className="legal-section">
            <h2 className="legal-h2">2. Allgemeines</h2>
            <p className="legal-p">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir erheben, wie wir sie verwenden und welche Rechte Sie in Bezug auf Ihre Daten haben.
            </p>
            <p className="legal-p">
              Die Verarbeitung personenbezogener Daten erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO) sowie dem österreichischen Datenschutzgesetz (DSG).
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">3. Ihre Rechte</h2>
            <p className="legal-p">Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <p className="legal-p">
              Recht auf Auskunft (Art. 15 DSGVO) · Recht auf Berichtigung (Art. 16 DSGVO) · Recht auf Löschung (Art. 17 DSGVO) · Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO) · Recht auf Datenübertragbarkeit (Art. 20 DSGVO) · Widerspruchsrecht (Art. 21 DSGVO)
            </p>
            <p className="legal-p">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:office@bytex.at" className="legal-link">office@bytex.at</a>
            </p>
            <p className="legal-p">
              Sie haben zudem das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren:{' '}
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="legal-link">dsb.gv.at</a>
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">4. Kontaktformular</h2>
            <p className="legal-p">
              Wenn Sie uns über das Kontaktformular auf dieser Website kontaktieren, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, gewünschte Leistung, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet.
            </p>
            <p className="legal-p">
              Die Übertragung erfolgt über den Dienst Web3Forms (<a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="legal-link">web3forms.com</a>). Wir empfehlen, die Datenschutzerklärung von Web3Forms unter{' '}
              <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="legal-link">web3forms.com/privacy</a> zu lesen.
            </p>
            <p className="legal-p">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">5. Hosting</h2>
            <p className="legal-p">
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="legal-link">vercel.com/legal/privacy-policy</a>).
              Beim Aufruf der Website werden durch Vercel automatisch sogenannte Server-Logfiles erfasst. Dazu gehören: IP-Adresse, Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners sowie Zeitpunkt der Serveranfrage. Diese Daten sind nicht einer bestimmten Person zuordbar und werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p className="legal-p">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und fehlerfreien Betrieb der Website).
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">6. Cookies</h2>
            <p className="legal-p">
              Diese Website verwendet keine Tracking- oder Marketing-Cookies. Es können technisch notwendige Cookies eingesetzt werden, die für den ordnungsgemäßen Betrieb der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und werden nach Ende der Sitzung gelöscht.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">7. Externe Links</h2>
            <p className="legal-p">
              Diese Website enthält Links zu externen Websites Dritter. Für die Datenschutzpraktiken dieser externen Seiten sind ausschließlich deren Betreiber verantwortlich. Wir haben keinen Einfluss auf deren Inhalte und übernehmen keine Haftung.
            </p>
          </div>

          <div className="legal-section">
            <p className="legal-p" style={{ opacity: 0.5, fontSize: '0.75rem' }}>
              Stand: {new Date().toLocaleDateString('de-AT', { year: 'numeric', month: 'long' })}
            </p>
          </div>

        </Container>
      </main>
      <Footer nav={dict.nav} footer={dict.footer} lang={lang} />
    </>
  )
}
