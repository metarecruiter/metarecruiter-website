import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { C } from '../theme'
import MagneticBtn from '../components/MagneticBtn'

// ── GHL / Webhook URL (fill in when ready) ───────────────────────────
// const CONTACT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID/webhook-trigger/...'
const CONTACT_WEBHOOK_URL = ''

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', consentMarketing: false, consentNonMarketing: false })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  const handle = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      if (CONTACT_WEBHOOK_URL) {
        await fetch(CONTACT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            phone: form.phone,
            email: form.email,
            consentMarketing: form.consentMarketing,
            consentNonMarketing: form.consentNonMarketing,
            source: 'MetaRecruiter Contact Form',
          }),
        })
      }
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = { width: '100%', fontFamily: '"Space Grotesk",sans-serif', fontSize: '0.95rem', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1.5px solid rgba(17,17,17,0.15)', color: C.ink, background: '#fff', outline: 'none' }

  return (
    <div style={{ background: C.offwhite }}>
      {/* Page header */}
      <div style={{ background: C.ink, paddingTop: '8rem', paddingBottom: '5rem', paddingLeft: 'clamp(1.5rem,6vw,7rem)', paddingRight: 'clamp(1.5rem,6vw,7rem)' }}>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Contact</span>
        <h1 className="font-sans font-bold mt-3" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Get in<br /><span className="font-serif-drama" style={{ color: C.signal }}>touch.</span>
        </h1>
      </div>

      {/* Content */}
      <section className="section-pad">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <h2 className="font-sans font-bold mb-4" style={{ fontSize: '1.5rem', color: C.ink }}>
                Whether you're a driver or a carrier — we're here.
              </h2>
              <p className="font-sans mb-10" style={{ color: C.smoke, lineHeight: 1.8 }}>
                Reach out with questions about driver placement, carrier services, pricing, or anything else. We respond within one business day.
              </p>

              <div className="flex flex-col gap-5 mb-10">
                {[
                  { icon: <Phone size={18} />, label: '+1 301-861-0605',                         href: 'tel:+13018610605' },
                  { icon: <Mail size={18} />,  label: 'support@metarecruiter.com',               href: 'mailto:support@metarecruiter.com' },
                  { icon: <MapPin size={18} />, label: '1013 Beards Hill Rd, Aberdeen, MD 21001', href: null },
                ].map(({ icon, label, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div style={{ width: '40px', height: '40px', borderRadius: '0.75rem', background: `${C.signal}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.signal, flexShrink: 0 }}>{icon}</div>
                    {href
                      ? <a href={href} className="font-sans font-medium" style={{ color: C.ink, textDecoration: 'none', lineHeight: 2.5 }}>{label}</a>
                      : <span className="font-sans font-medium" style={{ color: C.ink, lineHeight: 2.5 }}>{label}</span>
                    }
                  </div>
                ))}
              </div>

              <div className="card-surface p-6" style={{ background: '#fff' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={15} style={{ color: C.signal }} />
                  <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Hours</span>
                </div>
                {[
                  { day: 'Mon – Fri', hours: '9:00 AM – 6:00 PM EST' },
                  { day: 'Sat – Sun', hours: 'Closed' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between py-2.5" style={{ borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
                    <span className="font-sans text-sm" style={{ color: C.smoke }}>{day}</span>
                    <span className="font-mono-data text-sm" style={{ color: hours === 'Closed' ? 'rgba(17,17,17,0.3)' : C.ink }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <form onSubmit={submit} className="card-surface p-8 flex flex-col gap-5" style={{ background: '#fff' }}>
              <h3 className="font-sans font-bold text-xl" style={{ color: C.ink }}>Send a message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>First Name <span style={{ color: C.signal }}>*</span></label>
                  <input name="firstName" required value={form.firstName} onChange={handle} placeholder="First Name" style={inputStyle} />
                </div>
                <div>
                  <label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>Last Name <span style={{ color: C.signal }}>*</span></label>
                  <input name="lastName" required value={form.lastName} onChange={handle} placeholder="Last Name" style={inputStyle} />
                </div>
              </div>

              <div>
                <label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>Phone</label>
                <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="Phone" style={inputStyle} />
              </div>

              <div>
                <label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>Email <span style={{ color: C.signal }}>*</span></label>
                <input name="email" type="email" required value={form.email} onChange={handle} placeholder="Email" style={inputStyle} />
              </div>

              {/* Consent checkboxes */}
              <div className="flex flex-col gap-4" style={{ marginTop: '0.25rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="consentMarketing"
                    checked={form.consentMarketing}
                    onChange={handle}
                    style={{ marginTop: '2px', width: '16px', height: '16px', flexShrink: 0, accentColor: C.signal, cursor: 'pointer' }}
                  />
                  <span className="font-sans text-sm" style={{ color: C.smoke, lineHeight: 1.6 }}>
                    I consent to receive marketing messages from MetaRecruiter LLC at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to Opt Out.
                  </span>
                </label>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="consentNonMarketing"
                    checked={form.consentNonMarketing}
                    onChange={handle}
                    style={{ marginTop: '2px', width: '16px', height: '16px', flexShrink: 0, accentColor: C.signal, cursor: 'pointer' }}
                  />
                  <span className="font-sans text-sm" style={{ color: C.smoke, lineHeight: 1.6 }}>
                    I consent to receive non-marketing messages from MetaRecruiter LLC about my order updates, appointment reminders etc. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                  </span>
                </label>
              </div>

              {/* Legal links */}
              <p className="font-sans text-sm text-center" style={{ color: C.smoke }}>
                <a href="/privacy-policy" style={{ color: C.signal, textDecoration: 'underline' }}>Privacy Policy</a>
                {' | '}
                <a href="/terms-of-service" style={{ color: C.signal, textDecoration: 'underline' }}>Terms of Service</a>
              </p>

              {status === 'error' && (
                <p className="font-sans text-sm text-center" style={{ color: '#c0392b' }}>Something went wrong. Please try again or email us directly.</p>
              )}

              {status === 'sent' ? (
                <div className="text-center" style={{ padding: '1rem 0' }}>
                  <p className="font-sans font-bold" style={{ color: C.ink, marginBottom: '0.4rem' }}>We received your message!</p>
                  <p className="font-sans text-sm" style={{ color: C.smoke }}>A team member will reach out within one business day.</p>
                </div>
              ) : (
                <MagneticBtn type="submit" bg={C.signal} hoverBg={C.ink} color="#fff" hoverColor="#fff" style={{ borderRadius: '9999px', padding: '1rem', fontSize: '1rem', width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending...' : 'Submit'}
                </MagneticBtn>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
