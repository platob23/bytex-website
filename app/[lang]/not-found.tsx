import { headers } from 'next/headers'

const content = {
  de: {
    eyebrow: '404',
    title: 'Seite nicht gefunden.',
    description: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    cta: 'Zur Startseite',
    href: '/de',
  },
  en: {
    eyebrow: '404',
    title: 'Page not found.',
    description: "The page you're looking for doesn't exist or has been moved.",
    cta: 'Back to home',
    href: '/en',
  },
}

export default async function NotFound() {
  const h = await headers()
  const lang = (h.get('x-lang') ?? 'de') as keyof typeof content
  const c = content[lang] ?? content.de

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0d0d12',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
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
          {c.eyebrow}
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
          {c.title}
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
          {c.description}
        </p>
        <a
          href={c.href}
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
          {c.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
