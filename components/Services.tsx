import Container from './Container'
import ArrowButton from './ArrowButton'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSpring, SiPostgresql } from 'react-icons/si'

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
  techLabel: string
  items: ServiceItem[]
}

const techs = [
  { name: 'Next.js', icon: <SiNextdotjs size={22} color="#000000" aria-hidden="true" /> },
  { name: 'TypeScript', icon: <SiTypescript size={22} color="#3178C6" aria-hidden="true" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={22} color="#38BDF8" aria-hidden="true" /> },
  { name: 'Spring Boot', icon: <SiSpring size={22} color="#6DB33F" aria-hidden="true" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={22} color="#336791" aria-hidden="true" /> },
]

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
                fontSize: 'var(--heading-section)',
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
            className="services-subtext"
            style={{
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-loose)',
              color: 'var(--text-muted)',
              maxWidth: '400px',
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

        {/* Tech stack + CTA */}
        <div className="services-bottom">
          <div>
            <p className="services-tech-label">{services.techLabel}</p>
            <div className="services-tech-icons">
              {techs.map(({ name, icon }) => (
                <div key={name} className="services-tech-item">
                  {icon}
                  <span className="services-tech-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <ArrowButton href="#contact" variant="dark">{services.cta}</ArrowButton>
        </div>

      </Container>
    </section>
  )
}
