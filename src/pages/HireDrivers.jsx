import { CheckCircle2, Shield, Clock, Users, Phone, Mail } from 'lucide-react'
import { C } from '../theme'
import MagneticBtn from '../components/MagneticBtn'
import { useState } from 'react'
import { submitToN8N } from '../utils/formSubmit'

const HERO_IMG = '/hire-hero.png'

const FEATURES = [
  { icon: <Shield size={22} />, title: 'Pre-Screened Drivers', desc: 'Every candidate is verified — CDL Class A confirmed, DOT compliance checked, driving history reviewed before you see their profile.' },
  { icon: <Clock size={22} />,  title: 'Fast Turnaround',      desc: 'Our targeted recruiting gets qualified drivers in front of you in days, not weeks. We work on your timeline, not ours.' },
  { icon: <Users size={22} />, title: 'Dedicated Recruiter',   desc: 'You get a single point of contact who learns your fleet, your culture, and your standards — and holds them for every placement.' },
]

const TIERS = [
  { name: 'Starter',                 sub: 'For growing carriers',   price: '$499',   period: '/mo', features: ['Access to driver leads', 'Candidate profiles', 'Verified CDL-A drivers', 'Email support', 'Up to 5 placements/mo'], pop: false },
  { name: 'Professional Recruiting', sub: 'Full-service placement', price: '$1,500', period: '/mo', features: ['We recruit & pre-screen drivers', 'Only qualified candidates sent', 'Full DOT compliance checks', 'Dedicated account manager', 'Unlimited placements', 'Post-hire follow-up'], pop: true },
  { name: 'Enterprise',              sub: 'High-volume fleets',     price: 'Custom', period: '',    features: ['Volume driver contracts', 'Custom driver profiles', 'Real-time reporting dashboard', 'SLA guarantees', '24/7 priority support'], pop: false },
]

function ContactForm() {
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', drivers: '', message: '', consentMarketing: false, consentNonMarketing: false })
  const [sent, setSent] = useState(false)
  const handle = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }
  const submit = async e => {
    e.preventDefault()

    const payload = {
      ...form,
      tags: ['hiring-interest', 'carrier'],
      pipelineStage: 'New Lead'
    }

    // Submit to N8N webhook
    const result = await submitToN8N('hire-drivers', payload)

    // Fallback: open mailto if webhook not configured
    if (!result.success && result.error === 'WEBHOOK_NOT_CONFIGURED') {
      const subject = encodeURIComponent('Carrier Inquiry — MetaRecruiter')
      const body = encodeURIComponent(
        `Company: ${form.company}\nContact: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDrivers Needed: ${form.drivers}\n\nMessage:\n${form.message}\n\nMarketing consent: ${form.consentMarketing ? 'Yes' : 'No'}\nNon-marketing consent: ${form.consentNonMarketing ? 'Yes' : 'No'}`
      )
      window.open(`mailto:support@metarecruiter.com?subject=${subject}&body=${body}`)
    }

    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }
  const inputStyle = { width: '100%', fontFamily: '"Space Grotesk",sans-serif', fontSize: '0.95rem', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1.5px solid rgba(17,17,17,0.15)', color: C.ink, background: '#fff', outline: 'none' }
  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>Company Name <span style={{ color: C.signal }}>*</span></label><input name="company" required value={form.company} onChange={handle} style={inputStyle} /></div>
        <div><label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>Your Name <span style={{ color: C.signal }}>*</span></label><input name="name" required value={form.name} onChange={handle} style={inputStyle} /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>Email <span style={{ color: C.signal }}>*</span></label><input name="email" type="email" required value={form.email} onChange={handle} style={inputStyle} /></div>
        <div><label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>Phone</label><input name="phone" type="tel" value={form.phone} onChange={handle} style={inputStyle} /></div>
      </div>
      <div><label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>How many drivers do you need?</label>
        <select name="drivers" value={form.drivers} onChange={handle} style={{ ...inputStyle, appearance: 'none' }}>
          <option value="">Select...</option>
          {['1–3','4–10','11–25','26–50','50+'].map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>
      <div><label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.4rem' }}>Tell us about your needs</label><textarea name="message" rows={4} value={form.message} onChange={handle} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Route types, schedule, compensation, fleet size..." /></div>

      {/* Consent checkboxes */}
      <div className="flex flex-col gap-3" style={{ borderTop: '1px solid rgba(17,17,17,0.08)', paddingTop: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
          <input type="checkbox" name="consentMarketing" checked={form.consentMarketing} onChange={handle}
            style={{ marginTop: '2px', width: '16px', height: '16px', flexShrink: 0, accentColor: C.signal, cursor: 'pointer' }} />
          <span className="font-sans text-sm" style={{ color: C.smoke, lineHeight: 1.6 }}>
            I consent to receive marketing messages from MetaRecruiter LLC at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to Opt Out.
          </span>
        </label>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
          <input type="checkbox" name="consentNonMarketing" checked={form.consentNonMarketing} onChange={handle}
            style={{ marginTop: '2px', width: '16px', height: '16px', flexShrink: 0, accentColor: C.signal, cursor: 'pointer' }} />
          <span className="font-sans text-sm" style={{ color: C.smoke, lineHeight: 1.6 }}>
            I consent to receive non-marketing messages from MetaRecruiter LLC about my inquiry, appointment reminders etc. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </span>
        </label>
        <p className="font-sans text-xs text-center" style={{ color: C.smoke }}>
          <a href="/privacy-policy" style={{ color: C.signal, textDecoration: 'underline' }}>Privacy Policy</a>
          {' | '}
          <a href="/terms-of-service" style={{ color: C.signal, textDecoration: 'underline' }}>Terms of Service</a>
        </p>
      </div>

      <MagneticBtn type="submit" bg={C.signal} hoverBg={C.ink} color="#fff" hoverColor="#fff" style={{ borderRadius: '9999px', padding: '1rem', fontSize: '1rem', width: '100%', marginTop: '0.5rem' }}>
        {sent ? '✓ We\'ll be in touch soon!' : 'Request Drivers →'}
      </MagneticBtn>
    </form>
  )
}

export default function HireDrivers() {
  return (
    <div style={{ background: C.offwhite }}>
      {/* Hero */}
      <div style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '6rem', paddingLeft: 'clamp(1.5rem,6vw,7rem)', paddingRight: 'clamp(1.5rem,6vw,7rem)', overflow: 'hidden' }}>
        <img src={HERO_IMG} alt="Fleet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', filter: 'brightness(0.45)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>For Carriers</span>
          <h1 className="font-sans font-bold mt-3" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Stop searching.<br /><span className="font-serif-drama" style={{ color: C.signal }}>Start hiring.</span>
          </h1>
          <p className="font-sans mt-5 mb-8" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', lineHeight: 1.8, fontSize: '1.05rem' }}>
            MetaRecruiter delivers pre-screened, DOT-compliant CDL Class A drivers matched to your operation — so you spend less time recruiting and more time moving freight.
          </p>
          <div className="flex flex-wrap gap-4">
            <MagneticBtn href="#pricing" bg={C.signal} hoverBg="#fff" color="#fff" hoverColor={C.signal} style={{ borderRadius: '9999px', padding: '1rem 2.5rem', fontSize: '1rem' }}>
              See Pricing
            </MagneticBtn>
            <MagneticBtn href="tel:+13018610605" bg="rgba(255,255,255,0.1)" hoverBg="rgba(255,255,255,0.2)" color="#fff" hoverColor="#fff" style={{ borderRadius: '9999px', padding: '1rem 2.5rem', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.25)' }}>
              <Phone size={16} /> Call Us
            </MagneticBtn>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="section-pad">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Why MetaRecruiter</span>
          <h2 className="font-sans font-bold mt-3 mb-12" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: C.ink, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            We handle the recruiting.<br /><span className="font-serif-drama" style={{ color: C.signal }}>You focus on the road.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map(f => (
              <div key={f.title} className="card-surface p-8" style={{ background: '#fff' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '1rem', background: `${C.signal}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.signal, marginBottom: '1.5rem' }}>{f.icon}</div>
                <h3 className="font-sans font-bold text-lg mb-3" style={{ color: C.ink }}>{f.title}</h3>
                <p className="font-sans text-sm" style={{ color: C.smoke, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-pad" style={{ background: C.ink }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Pricing</span>
          <h2 className="font-sans font-bold mt-3 mb-12" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Transparent pricing.<br /><span className="font-serif-drama" style={{ color: C.signal }}>No surprises.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {TIERS.map(tier => (
              <div key={tier.name} style={{ background: tier.pop?C.signal:'rgba(255,255,255,0.05)', border: `1px solid ${tier.pop?C.signal:'rgba(255,255,255,0.1)'}`, borderRadius: '2rem', padding: '2.5rem', transform: tier.pop?'scale(1.04)':'scale(1)', boxShadow: tier.pop?`0 20px 60px ${C.signal}40`:'none' }}>
                <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: tier.pop?'rgba(255,255,255,0.7)':C.signal }}>{tier.sub}</span>
                <h3 className="font-sans font-bold text-xl mt-2 mb-1" style={{ color: '#fff', lineHeight: 1.2 }}>{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-mono-data font-bold" style={{ fontSize: '2rem', color: '#fff' }}>{tier.price}</span>
                  {tier.period && <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{tier.period}</span>}
                </div>
                <ul className="flex flex-col gap-3 mb-8">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={15} style={{ color: tier.pop?'rgba(255,255,255,0.8)':'rgba(255,255,255,0.4)', flexShrink: 0, marginTop: '2px' }} />
                      <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <MagneticBtn href="#get-drivers" bg={tier.pop?'#fff':'rgba(255,255,255,0.1)'} hoverBg={tier.pop?C.ink:'rgba(255,255,255,0.2)'} color={tier.pop?C.signal:'#fff'} hoverColor={tier.pop?'#fff':'#fff'} style={{ borderRadius: '9999px', padding: '0.85rem', width: '100%', fontSize: '0.875rem' }}>
                  Get Started
                </MagneticBtn>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-center mt-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Placement fees may apply for certain direct hires. Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section id="get-drivers" className="section-pad">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Get Started</span>
              <h2 className="font-sans font-bold mt-3 mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: C.ink, lineHeight: 1.1 }}>
                Tell us what<br /><span className="font-serif-drama" style={{ color: C.signal }}>you need.</span>
              </h2>
              <p className="font-sans mb-8" style={{ color: C.smoke, lineHeight: 1.8 }}>
                Fill out the form and a specialist will reach out within one business day to discuss your driver needs and recommend the right plan.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Phone size={15} />, label: '+1 301-861-0605' },
                  { icon: <Mail size={15} />,  label: 'support@metarecruiter.com' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span style={{ color: C.signal }}>{icon}</span>
                    <span className="font-sans text-sm" style={{ color: C.smoke }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
