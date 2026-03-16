import { useState } from 'react'

export default function MagneticBtn({
  href, type = 'button', onClick,
  bg, hoverBg, color, hoverColor,
  children, style, className,
}) {
  const [hov, setHov] = useState(false)
  const El = href ? 'a' : 'button'
  return (
    <El
      href={href}
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`font-sans font-semibold ${className || ''}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: bg,
        color: hov ? hoverColor : color,
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: 'color 0.3s ease, transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
        transform: hov ? 'scale(1.03)' : 'scale(1)',
        ...style,
      }}
    >
      <span
        style={{
          position: 'absolute', inset: 0,
          background: hoverBg,
          transform: hov ? 'translateX(0)' : 'translateX(-105%)',
          transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
          zIndex: 0,
        }}
      />
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {children}
      </span>
    </El>
  )
}
