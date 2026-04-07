'use client'

import { useState } from 'react'
import Container from './Container'

type ContactForm = {
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  service: string
  serviceOptions: string[]
  message: string
  messagePlaceholder: string
  submit: string
  sending: string
  success: string
  error: string
}

type ContactDict = {
  eyebrow: string
  headline: string
  subtext: string
  form: ContactForm
}

type Props = {
  contact: ContactDict
}

export default function Contact({ contact }: Props) {
  const { form } = contact
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const data = new FormData(e.currentTarget)
    const payload = {
      access_key: '4a3757cc-cf86-4c7f-9eae-e5b95c9e97d2',
      name: data.get('name'),
      email: data.get('email'),
      service: data.get('service'),
      message: data.get('message'),
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#0d0d12',
        padding: '8rem 0',
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center',
          }}
        >
          {/* Left — info */}
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
              {contact.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'var(--weight-extrabold)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '1.25rem',
              }}
            >
              {contact.headline}
            </h2>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 'var(--leading-loose)',
                maxWidth: '340px',
              }}
            >
              {contact.subtext}
            </p>
          </div>

          {/* Right — white card with form */}
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '4px',
              padding: '2.5rem',
            }}
          >
            {status === 'success' ? (
              <div style={{ padding: '1rem 0' }}>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--weight-semibold)',
                    color: 'var(--success)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="contact-name" className="contact-label">
                      {form.name}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder={form.namePlaceholder}
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="contact-label">
                      {form.email}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder={form.emailPlaceholder}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="contact-label">
                    {form.service}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className="contact-select"
                  >
                    <option value="" disabled>—</option>
                    {form.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="contact-label">
                    {form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder={form.messagePlaceholder}
                    className="contact-textarea"
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--error)', marginTop: '-0.25rem' }}>
                    {form.error}
                  </p>
                )}

                <div>
                  <button type="submit" disabled={status === 'sending'} className="contact-btn">
                    {status === 'sending' ? form.sending : form.submit}
                    {status !== 'sending' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
