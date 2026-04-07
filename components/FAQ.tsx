'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Container from './Container'

type FaqItem = {
  question: string
  answer: string
}

type FaqDict = {
  eyebrow: string
  headline: string
  subtext: string
  items: FaqItem[]
}

type Props = {
  faq: FaqDict
}

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen((v) => !v), [])
  const id = `faq-answer-${index}`

  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="faq-question">{item.question}</span>
        <span className="faq-icon" data-open={open ? 'true' : 'false'} aria-hidden="true">
          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="0" x2="6" y2="12" />
            <line x1="0" y1="6" x2="12" y2="6" />
          </svg>
        </span>
      </button>
      <div
        id={id}
        className="faq-body"
        data-open={open ? 'true' : 'false'}
        role="region"
      >
        <div className="faq-body-inner">
          <p className="faq-answer">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ({ faq }: Props) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '8rem 0',
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left — accordion */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>{faq.eyebrow}</p>
            <h2
              id="faq-heading"
              style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'var(--weight-extrabold)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
              }}
            >
              {faq.headline}
            </h2>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                lineHeight: 'var(--leading-loose)',
                marginBottom: '3rem',
                maxWidth: '400px',
              }}
            >
              {faq.subtext}
            </p>

            <div>
              {faq.items.map((item, i) => (
                <FaqRow key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div style={{ position: 'sticky', top: '8rem', aspectRatio: '4 / 5' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="/question.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
