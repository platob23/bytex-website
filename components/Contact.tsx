'use client'

import { useState } from 'react'
import Container from './Container'
import ArrowButton from './ArrowButton'

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
  successTitle: string
  successBody: string
  backToForm: string
  error: string
  errRequired: string
  errEmail: string
  errSelect: string
}

type ContactDict = {
  eyebrow: string
  headline: string
  subtext: string
  available: string
  form: ContactForm
}

type Props = {
  contact: ContactDict
}

type FieldErrors = {
  name?: string
  email?: string
  service?: string
  message?: string
}

export default function Contact({ contact }: Props) {
  const { form } = contact
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  function validate(data: FormData): FieldErrors {
    const errs: FieldErrors = {}
    if (!data.get('name')) errs.name = form.errRequired
    const email = data.get('email') as string
    if (!email) errs.email = form.errRequired
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = form.errEmail
    if (!data.get('service')) errs.service = form.errSelect
    if (!data.get('message')) errs.message = form.errRequired
    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('sending')

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
      aria-labelledby="contact-heading"
      className="section-py"
      style={{ backgroundColor: '#0d0d12' }}
    >
      <Container>
        <div className="contact-grid">

          {/* Left */}
          <div>
            <p className="eyebrow eyebrow--on-dark" style={{ marginBottom: '1rem' }}>{contact.eyebrow}</p>
            <h2
              id="contact-heading"
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
            <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.55)', lineHeight: 'var(--leading-loose)', maxWidth: '340px' }}>
              {contact.subtext}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--success)', flexShrink: 0 }} />
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
                {contact.available}
              </span>
            </div>
          </div>

          {/* Right — white card */}
          <div className="contact-card" style={{ backgroundColor: 'var(--bg-primary)', borderRadius: '4px', padding: '2.5rem' }}>
            {status === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '0.5rem 0' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
                  backgroundColor: 'rgba(0,168,118,0.08)',
                  border: '1px solid rgba(0,168,118,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                    {form.successTitle}
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-loose)' }}>
                    {form.successBody}
                  </p>
                </div>
                <button onClick={() => setStatus('idle')} className="contact-reset-btn">
                  {form.backToForm}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="contact-fields-row">
                  <div>
                    <label htmlFor="contact-name" className="contact-label">{form.name}</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder={form.namePlaceholder}
                      className="contact-input"
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      onChange={() => setErrors(e => ({ ...e, name: undefined }))}
                    />
                    {errors.name && <p id="err-name" className="contact-field-error" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="contact-label">{form.email}</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder={form.emailPlaceholder}
                      className="contact-input"
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      onChange={() => setErrors(e => ({ ...e, email: undefined }))}
                    />
                    {errors.email && <p id="err-email" className="contact-field-error" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="contact-label">{form.service}</label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    className="contact-select"
                    aria-invalid={errors.service ? 'true' : undefined}
                    aria-describedby={errors.service ? 'err-service' : undefined}
                    onChange={() => setErrors(e => ({ ...e, service: undefined }))}
                  >
                    <option value="" disabled>—</option>
                    {form.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && <p id="err-service" className="contact-field-error" role="alert">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="contact-label">{form.message}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder={form.messagePlaceholder}
                    className="contact-textarea"
                    aria-invalid={errors.message ? 'true' : undefined}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    onChange={() => setErrors(e => ({ ...e, message: undefined }))}
                  />
                  {errors.message && <p id="err-message" className="contact-field-error" role="alert">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--error)', marginTop: '-0.25rem' }} role="alert">
                    {form.error}
                  </p>
                )}

                <div>
                  <ArrowButton
                    type="submit"
                    disabled={status === 'sending'}
                    showArrow={status !== 'sending'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {status === 'sending' ? form.sending : form.submit}
                  </ArrowButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
