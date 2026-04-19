'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Container from './Container'

type NavDict = {
  services: string
  references: string
  faq: string
  contact: string
  ariaLabelOpen: string
  ariaLabelClosed: string
  ariaMobileNav: string
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
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)

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

  // Close menu on Escape key, return focus to hamburger
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Focus first link when menu opens; trap Tab within menu
  useEffect(() => {
    if (!menuOpen) return
    const menu = menuRef.current
    if (!menu) return
    const focusable = Array.from(menu.querySelectorAll<HTMLElement>('a'))
    focusable[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const linkColor = scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.7)'

  const navItems = [
    { label: nav.services, href: `/${lang}#services` },
    { label: nav.references, href: `/${lang}#references` },
    { label: nav.faq, href: `/${lang}#faq` },
    { label: nav.contact, href: `/${lang}#contact` },
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
                  <Link
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
                  </Link>
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
                gap: '0.2rem',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.55)',
                transition: 'color 0.2s ease, opacity 0.2s ease',
              }}
            >
              <span style={{ color: scrolled ? 'var(--text-primary)' : '#fff', opacity: 0.9 }}>{lang.toUpperCase()}</span>
              <span style={{ opacity: 0.3 }}>/</span>
              <span>{altLang.toUpperCase()}</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            className="nav-hamburger"
            aria-label={menuOpen ? nav.ariaLabelOpen : nav.ariaLabelClosed}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
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
        <>
        {/* Backdrop — closes menu on outside click */}
        <div
          aria-hidden="true"
          style={{ position: 'fixed', inset: 0, top: '68px', zIndex: 48 }}
          onClick={() => setMenuOpen(false)}
        />
        <nav id="mobile-menu" ref={menuRef} className="nav-mobile-menu" aria-label={nav.ariaMobileNav}>
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href={altLangHref ?? `/${altLang}`}
            className="nav-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {altLang.toUpperCase()}
          </Link>
        </nav>
        </>
      )}
    </>
  )
}
