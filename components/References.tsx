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
  projectCount: string
  visitLabel: string
  projects: Project[]
}

type Props = {
  references: ReferencesDict
}

export default function References({ references }: Props) {
  return (
    <section
      id="references"
      aria-labelledby="references-heading"
      className="section-py"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Container>

        {/* Header */}
        <div className="references-header">
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>{references.eyebrow}</p>
            <h2
              id="references-heading"
              style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: 'var(--heading-section)',
                fontWeight: 'var(--weight-extrabold)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              {references.headline}
            </h2>
          </div>

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
              aria-label={`${project.name} ${references.visitLabel} — ${project.domain}`}
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
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
