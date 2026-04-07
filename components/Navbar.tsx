'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './Container'

type NavDict = {
  services: string
  references: string
  contact: string
}

type Props = {
  lang: string
  nav: NavDict
}

export default function Navbar({ lang, nav }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const altLang = lang === 'de' ? 'en' : 'de'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkColor = scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.7)'
  const linkHoverColor = scrolled ? 'var(--text-primary)' : '#ffffff'

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      }}
    >
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}
      >
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="nav-logo"
          style={{
            fontFamily: 'var(--font-display-family)',
            fontWeight: 'var(--weight-extrabold)',
            fontSize: 'var(--text-2xl)',
            letterSpacing: '-0.03em',
            textDecoration: 'none',
            color: scrolled ? 'var(--text-primary)' : '#ffffff',
            transition: 'color 0.35s ease, opacity 0.2s ease',
          }}
        >
          Bytex
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {/* Nav links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { label: nav.services, href: '#services' },
              { label: nav.references, href: '#references' },
              { label: nav.contact, href: '#contact' },
            ].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link"
                  data-scrolled={scrolled ? 'true' : 'false'}
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--weight-regular)',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    color: linkColor,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Lang toggle */}
          <Link
            href={`/${altLang}`}
            aria-label={`Switch to ${altLang}`}
            className="nav-globe"
            data-scrolled={scrolled ? 'true' : 'false'}
            style={{
              display: 'flex',
              alignItems: 'center',
              color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.55)',
              transition: 'color 0.2s ease, opacity 0.2s ease',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </Link>
        </div>
      </Container>
    </header>
  )
}
