import Container from './Container'

type Nav = {
  services: string
  references: string
  contact: string
}

type FooterDict = {
  cta: string
}

type Props = {
  nav: Nav
  footer: FooterDict
}

export default function Footer({ nav, footer }: Props) {
  return (
    <footer style={{ backgroundColor: '#080810' }}>

      {/* Top row — nav + CTA */}
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '5rem 0 4.5rem',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <a href="#services" className="footer-link">{nav.services}</a>
            <a href="#references" className="footer-link">{nav.references}</a>
            <a href="#contact" className="footer-link">{nav.contact}</a>
          </nav>

          <a href="#contact" className="footer-cta">
            {footer.cta}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </Container>

      {/* Giant wordmark */}
      <div style={{ overflow: 'hidden', lineHeight: 1 }}>
        <Container>
          <p
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: 'clamp(5.5rem, 19.5vw, 18rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 0.82,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            BYTEX
          </p>
        </Container>
      </div>

      {/* Bottom bar */}
      <Container>
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.07)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 0',
            marginTop: '2rem',
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
          <a href="mailto:office@bytex.at" className="footer-email">
            office@bytex.at
          </a>
        </div>
      </Container>

    </footer>
  )
}
