import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { C } from '../theme'

const NAV = [
  { label: 'Apply as Driver',    to: '/apply' },
  { label: 'Hire Drivers',       to: '/hire-drivers' },
  { label: 'Owner Operators',    to: '/owner-operators' },
  { label: 'About',              to: '/about' },
  { label: 'Contact',            to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', padding: '4rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-3" style={{ textDecoration: 'none' }}>
              <img
                src="/logo.svg"
                alt="MetaRecruiter"
                style={{ height: '22px' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
              <span className="font-sans font-bold text-xl" style={{ color: '#fff', letterSpacing: '-0.02em' }}>
                META<span style={{ color: C.signal }}>RECRUITER</span>
              </span>
            </Link>
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: '300px' }}>
              Precision CDL Class A driver placement. Connecting elite drivers with top transportation carriers nationwide.
            </p>

            <div className="flex flex-col gap-3 mt-6">
              {[
                { icon: <Phone size={14} />, label: '+1 301-861-0605' },
                { icon: <Mail size={14} />,  label: 'support@metarecruiter.com' },
                { icon: <MapPin size={14} />, label: '1013 Beards Hill Rd, Aberdeen, MD 21001' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-start gap-2">
                  <span style={{ color: C.signal, marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                  <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono-data text-xs tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Navigation
            </p>
            {NAV.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="font-sans text-sm"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'block', marginBottom: '1rem', letterSpacing: '0.02em' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Hours */}
          <div>
            <p className="font-mono-data text-xs tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Business Hours
            </p>
            <p className="font-sans text-sm mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Mon – Fri</p>
            <p className="font-mono-data text-sm mb-4" style={{ color: '#fff' }}>9:00 AM – 6:00 PM</p>
            <p className="font-sans text-sm mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Sat – Sun</p>
            <p className="font-mono-data text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>Closed</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="font-mono-data text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2026 MetaRecruiter LLC DBA Meta Recruiter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
