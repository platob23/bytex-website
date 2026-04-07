export default function ImpressumPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        padding: '12rem 2rem 8rem',
        maxWidth: '720px',
        margin: '0 auto',
      }}
    >
      <p
        style={{
          color: 'var(--accent)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        Rechtliches
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 'var(--weight-extrabold)',
          lineHeight: 'var(--leading-tight)',
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          marginBottom: '3rem',
        }}
      >
        Impressum
      </h1>
    </main>
  )
}
