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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '5rem 0 4.5rem',
            gap: '4rem',
          }}
        >
          {/* Left — logo + statement */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display-family)',
                fontWeight: 'var(--weight-extrabold)',
                fontSize: 'var(--text-2xl)',
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Bytex
            </p>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 'var(--leading-snug)',
                whiteSpace: 'pre-line',
                maxWidth: '260px',
              }}
            >
              {footer.statement}
            </p>
          </div>

          {/* Right — nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-end' }}>
            <a href="#services" className="footer-link">{nav.services}</a>
            <a href="#references" className="footer-link">{nav.references}</a>
            <a href="#contact" className="footer-link">{nav.contact}</a>
          </nav>
        </div>
      </Container>

      {/* Bottom bar */}
      <Container>
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.07)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 0',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-xs)',
              color: 'rgba(255, 255, 255, 0.25)',
              letterSpacing: '0.03em',
            }}
          >
            © {new Date().getFullYear()} Bytex · Tobias Plank
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href={`/${lang}/impressum`} className="footer-email">{footer.impressum}</a>
            <a href={`/${lang}/datenschutz`} className="footer-email">{footer.datenschutz}</a>
            <a href="mailto:office@bytex.at" className="footer-email">office@bytex.at</a>
          </div>
        </div>
      </Container>

    </footer>
  )
}
