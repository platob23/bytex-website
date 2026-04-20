import Container from './Container'

type TestimonialItem = {
  quote: string
  name: string
  role: string
  company: string
}

type TestimonialsDict = {
  eyebrow: string
  headline: string
  items: TestimonialItem[]
}

type Props = {
  testimonials: TestimonialsDict
}

function Stars() {
  return (
    <div aria-label="5 out of 5 stars" style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials({ testimonials }: Props) {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-py"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <Container>

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>{testimonials.eyebrow}</p>
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: 'var(--heading-section)',
              fontWeight: 'var(--weight-extrabold)',
              lineHeight: 'var(--leading-tight)',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}
          >
            {testimonials.headline}
          </h2>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {testimonials.items.map((item, i) => (
            <figure key={i} className="testimonial-card">

              <Stars />

              <blockquote className="testimonial-quote">
                {item.quote}
              </blockquote>

              <figcaption className="testimonial-footer">
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-meta">{item.role} · {item.company}</p>
              </figcaption>

            </figure>
          ))}
        </div>

      </Container>
    </section>
  )
}
