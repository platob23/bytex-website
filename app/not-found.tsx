import { Geist, Syne } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-sans', subsets: ['latin'] })
const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export default function NotFound() {
  return (
    <html className={`${geistSans.variable} ${syne.variable}`}>
      <body
        style={{
          margin: 0,
          backgroundColor: '#0d0d12',
          color: '#ffffff',
          fontFamily: 'var(--font-body-family)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1.5rem',
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}
          >
            Page not found.
          </h1>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
              maxWidth: '340px',
              margin: '0 auto 2.5rem',
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            Back to home
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  )
}
