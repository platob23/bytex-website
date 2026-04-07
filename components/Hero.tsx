import Image from 'next/image'
import Container from './Container'

type HeroDict = {
  eyebrow: string
  headline: string
  subtext: string
  cta: string
  ctaSecondary: string
}

type Props = {
  hero: HeroDict
}

export default function Hero({ hero }: Props) {
  return (
    <section className="relative h-screen min-h-[600px]">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        priority
        quality={90}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Hero copy — vertically centered */}
        <div className="flex flex-col justify-center flex-1 pb-24">
        <Container>
          <div style={{ maxWidth: '680px' }}>

            {/* Eyebrow */}
            <p
              style={{
                color: 'var(--accent)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--weight-semibold)' as React.CSSProperties['fontWeight'],
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as React.CSSProperties['textTransform'],
                marginBottom: '1.5rem',
              }}
            >
              {hero.eyebrow}
            </p>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 800,
                lineHeight: 'var(--leading-tight)',
                letterSpacing: '-0.03em',
                color: '#fff',
                marginBottom: '1.5rem',
                whiteSpace: 'pre-line',
              }}
            >
              {hero.headline}
            </h1>

            {/* Subtext */}
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-normal)',
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}
            >
              {hero.subtext}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                  padding: '0.875rem 2rem',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--weight-semibold)' as React.CSSProperties['fontWeight'],
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  borderRadius: '4px',
                }}
              >
                {hero.cta}
              </a>
              <a
                href="#services"
                style={{
                  display: 'inline-block',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--weight-regular)' as React.CSSProperties['fontWeight'],
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  padding: '0.875rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                }}
              >
                {hero.ctaSecondary} →
              </a>
            </div>

          </div>
        </Container>
        </div>

      </div>
    </section>
  )
}
