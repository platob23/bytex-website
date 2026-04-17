import Link from 'next/link'
import Container from './Container'

type Nav = {
  services: string
  references: string
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
          {/* Left — logo + statement */}
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
                color: '#ffffff',
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
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 'var(--leading-snug)',
                whiteSpace: 'pre-line',
                maxWidth: '260px',
              }}
            >
              {footer.statement}
            </p>
          </div>

          {/* Right — nav links */}
          <nav className="footer-nav">
            <a href="#services" className="footer-link">{nav.services}</a>
            <a href="#references" className="footer-link">{nav.references}</a>
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
              color: 'rgba(255, 255, 255, 0.45)',
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
