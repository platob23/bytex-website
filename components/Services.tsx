import Container from './Container'

type ServiceItem = {
  number: string
  title: string
  description: string
}

type ServicesDict = {
  eyebrow: string
  headline: string
  subtext: string
  cta: string
  items: ServiceItem[]
}

type Props = {
  services: ServicesDict
}

export default function Services({ services }: Props) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-py"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Container>

        {/* Section header */}
        <div className="services-header">
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>{services.eyebrow}</p>
            <h2
              id="services-heading"
              style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'var(--weight-extrabold)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              {services.headline}
            </h2>
          </div>

          <p
            style={{
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-loose)',
              color: 'var(--text-muted)',
              maxWidth: '400px',
              justifySelf: 'end',
            }}
          >
            {services.subtext}
          </p>
        </div>

        {/* Service rows */}
        <div>
          {services.items.map((item) => (
            <div key={item.number} className="service-row">
              <span className="service-number">{item.number}</span>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: '3rem',
          }}
        >
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              backgroundColor: 'var(--text-primary)',
              color: '#fff',
              padding: '1rem 2.25rem',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--weight-semibold)',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            {services.cta}
            <span aria-hidden="true" style={{ fontSize: '1rem' }}>→</span>
          </a>
        </div>

      </Container>
    </section>
  )
}
