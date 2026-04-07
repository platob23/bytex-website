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
  forceScrolled?: boolean
  altLangHref?: string
}

export default function Navbar({ lang, nav, forceScrolled, altLangHref }: Props) {
  const [scrolled, setScrolled] = useState(forceScrolled ?? false)
  const [menuOpen, setMenuOpen] = useState(false)
  const altLang = lang === 'de' ? 'en' : 'de'

  useEffect(() => {
    if (forceScrolled) return
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceScrolled])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkColor = scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.7)'

  const navItems = [
    { label: nav.services, href: '#services' },
    { label: nav.references, href: '#references' },
    { label: nav.contact, href: '#contact' },
  ]

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
          backgroundColor: scrolled || menuOpen ? 'rgba(255,255,255,0.96)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${scrolled || menuOpen ? 'var(--border)' : 'transparent'}`,
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
              color: scrolled || menuOpen ? 'var(--text-primary)' : '#ffffff',
              transition: 'color 0.35s ease, opacity 0.2s ease',
            }}
          >
            Bytex
          </Link>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navItems.map(({ label, href }) => (
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

            <Link
              href={altLangHref ?? `/${altLang}`}
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
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            style={{ color: scrolled || menuOpen ? 'var(--text-primary)' : '#ffffff' }}
          >
            {menuOpen ? (
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </Container>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="nav-mobile-menu" aria-label="Mobilmenü">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link
            href={altLangHref ?? `/${altLang}`}
            className="nav-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {altLang.toUpperCase()}
          </Link>
        </nav>
      )}
    </>
  )
}
