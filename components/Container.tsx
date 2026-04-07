import type { CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function Container({ children, className, style }: Props) {
  return (
    <div
      className={className}
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
