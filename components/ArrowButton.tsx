import type { CSSProperties } from 'react'

type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'dark'
  style?: CSSProperties
  showArrow?: boolean
  // link
  href?: string
  // button
  type?: 'submit' | 'button'
  disabled?: boolean
}

const Arrow = () => (
  <span className="arrow-btn__arrow" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </span>
)

export default function ArrowButton({
  children, variant = 'primary', style, showArrow = true,
  href, type, disabled,
}: Props) {
  const cls = `arrow-btn arrow-btn--${variant}`

  if (href) {
    return (
      <a href={href} className={cls} style={style}>
        {children}
        {showArrow && <Arrow />}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} disabled={disabled} className={cls} style={style}>
      {children}
      {showArrow && <Arrow />}
    </button>
  )
}
