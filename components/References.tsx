import Container from './Container'

type Project = {
  number: string
  name: string
  description: string
  category: string
  tags: string[]
  url: string
  domain: string
}

type ReferencesDict = {
  eyebrow: string
  headline: string
  projects: Project[]
}

type Props = {
  references: ReferencesDict
}

export default function References({ references }: Props) {
  return (
    <section
      id="references"
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '8rem 0',
      }}
    >
      <Container>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '5rem',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
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
              {references.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'var(--weight-extrabold)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              {references.headline}
            </h2>
          </div>

          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            {references.projects.length} Projekte
          </p>
        </div>

        {/* Project rows */}
        <div>
          {references.projects.map((project) => (
            <a
              key={project.number}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row"
              aria-label={`${project.name} besuchen — ${project.domain}`}
            >
              {/* Number */}
              <span className="project-number">{project.number}</span>

              {/* Main content */}
              <div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className="project-link">
                  {project.domain}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"/>
                    <path d="M7 7h10v10"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

      </Container>
    </section>
  )
}
