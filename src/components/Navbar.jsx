import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { C } from '../theme'
import MagneticBtn from './MagneticBtn'

const NAV_LINKS = [
  { label: 'Apply as Driver', to: '/apply' },
  { label: 'Hire Drivers',    to: '/hire-drivers' },
  { label: 'Owner Operators', to: '/owner-operators' },
  { label: 'About',           to: '/about' },
  { label: 'Contact',         to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    if (!isHome) setScrolled(true)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => setOpen(false), [location.pathname])

  const solid = scrolled || !isHome
  const textColor = solid ? C.ink : 'rgba(255,255,255,0.9)'
  const bgStyle = solid
    ? { background: 'rgba(245,243,238,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(17,17,17,0.1)' }
    : { background: 'transparent', border: '1px solid transparent' }

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
      style={{ width: '96%', maxWidth: '1380px', borderRadius: '9999px', padding: '0.7rem 1.5rem', ...bgStyle }}
    >
      <div className="flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" style={{ textDecoration: 'none' }}>
          <img src="/logo.svg" alt="MetaRecruiter" style={{ height: '24px' }} onError={e => { e.currentTarget.style.display = 'none' }} />
          <span className="font-sans text-base tracking-tight" style={{ color: solid ? C.signal : '#fff', fontWeight: 800, whiteSpace: 'nowrap' }}>
            META<span style={{ color: solid ? C.ink : 'rgba(255,255,255,0.55)' }}>RECRUITER</span>
          </span>
        </Link>

        {/* Desktop: nav links */}
        <div className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} className="font-sans text-sm font-medium"
              style={{ color: location.pathname === l.to ? C.signal : textColor, textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop: Apply Now CTA */}
        <div className="hidden lg:flex items-center">
          <MagneticBtn
            href="/apply"
            bg={C.signal}
            hoverBg="#fff"
            color="#fff"
            hoverColor={C.signal}
            className="btn-apply-now"
            style={{
              borderRadius: '9999px',
              padding: '0.7rem 1.8rem',
              fontSize: '0.9rem',
              whiteSpace: 'nowrap',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Apply Now
          </MagneticBtn>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden" style={{ color: textColor, background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden flex flex-col gap-3 mt-4 pb-4" style={{ borderTop: '1px solid rgba(17,17,17,0.1)', paddingTop: '1rem' }}>
          {[{ label: 'Home', to: '/' }, ...NAV_LINKS].map(l => (
            <Link key={l.to} to={l.to} className="font-sans text-sm font-medium"
              style={{ color: location.pathname === l.to ? C.signal : C.ink, textDecoration: 'none', display: 'block' }}>
              {l.label}
            </Link>
          ))}
          <MagneticBtn href="/apply" bg={C.signal} hoverBg={C.ink} color="#fff" hoverColor="#fff"
            style={{ borderRadius: '9999px', padding: '0.75rem', fontSize: '0.875rem', width: '100%', marginTop: '0.5rem' }}>
            Apply Now
          </MagneticBtn>
        </div>
      )}
    </nav>
  )
}
