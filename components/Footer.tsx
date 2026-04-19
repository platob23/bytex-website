import Link from 'next/link'
import Container from './Container'

type Nav = {
  services: string
  references: string
  faq: string
  contact: string
}

type FooterDict = {
  statement: string
  impressum: string
  datenschutz: string
}

type Props = {
  nav: Nav
  footer: FooterDict
  lang: string
}

export default function Footer({ nav, footer, lang }: Props) {
  return (
    <footer style={{ backgroundColor: '#080810' }}>

      {/* Top row — brand left, nav right */}
      <Container>
        <div className="footer-top-row">
          {/* Left — logo + statement + social */}
          <div>
            <Link
              href={`/${lang}`}
              className="nav-logo"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display-family)',
                fontWeight: 'var(--weight-extrabold)',
                fontSize: 'var(--text-2xl)',
                letterSpacing: '-0.03em',
                color: 'var(--on-dark)',
                textDecoration: 'none',
                marginBottom: '1rem',
                transition: 'opacity 0.2s ease',
              }}
            >
              Bytex
            </Link>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--on-dark-muted)',
                lineHeight: 'var(--leading-snug)',
                whiteSpace: 'pre-line',
                maxWidth: '260px',
                marginBottom: '1.25rem',
              }}
            >
              {footer.statement}
            </p>
            <a
              href="https://www.instagram.com/bytex.at"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bytex on Instagram"
              className="footer-link"
              style={{ display: 'inline-flex' }}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>

          {/* Right — nav links */}
          <nav className="footer-nav">
            <a href="#services" className="footer-link">{nav.services}</a>
            <a href="#references" className="footer-link">{nav.references}</a>
            <a href="#faq" className="footer-link">{nav.faq}</a>
            <a href="#contact" className="footer-link">{nav.contact}</a>
          </nav>
        </div>
      </Container>

      {/* Bottom bar */}
      <Container>
        <div className="footer-bottom-bar">
          <span
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--weight-semibold)',
              color: 'rgba(255, 255, 255, 0.46)',
              letterSpacing: '0.03em',
            }}
          >
            © {new Date().getFullYear()} Bytex · Tobias Plank
          </span>
          <div className="footer-legal">
            <a href={`/${lang}/impressum`} className="footer-email">{footer.impressum}</a>
            <a href={`/${lang}/datenschutz`} className="footer-email">{footer.datenschutz}</a>
            <a href="mailto:office@bytex.at" className="footer-email">office@bytex.at</a>
          </div>
        </div>
      </Container>

    </footer>
  )
}
