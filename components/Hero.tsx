import Image from 'next/image'
import Container from './Container'
import ArrowButton from './ArrowButton'

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
    <section className="relative h-screen min-h-[600px]" aria-label="Hero">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        sizes="100vw"
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
            <p className="eyebrow eyebrow--on-dark" style={{ marginBottom: '1.5rem' }}>
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

            {/* CTA */}
            <ArrowButton
              href="#contact"
              variant="primary"
              style={{ padding: '1.125rem 2.5rem', fontSize: 'var(--text-base)' }}
            >
              {hero.cta}
            </ArrowButton>


          </div>
        </Container>
        </div>

      </div>
    </section>
  )
}
