import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { C } from '../theme'
import MagneticBtn from '../components/MagneticBtn'

const ABOUT_IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'

const VALUES = [
  { title: 'Precision Over Volume',   desc: 'We don\'t flood carriers with unqualified candidates. Every driver we send has been screened, verified, and matched to your specific operation.' },
  { title: 'Industry-First Thinking', desc: 'We live in the transportation world. Our team understands DOT compliance, HOS regulations, and what it really takes to run a successful fleet.' },
  { title: 'Relationships, Not Transactions', desc: 'We stay engaged after placement because a great hire is just the start. We track outcomes and follow up because your success is our success.' },
]

export default function About() {
  return (
    <div style={{ background: C.offwhite }}>
      {/* Hero */}
      <div style={{ paddingTop: '9rem', paddingBottom: '6rem', paddingLeft: 'clamp(1.5rem,6vw,7rem)', paddingRight: 'clamp(1.5rem,6vw,7rem)', background: C.ink, position: 'relative', overflow: 'hidden' }}>
        <img src={ABOUT_IMG} alt="About" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08, mixBlendMode: 'luminosity' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>About MetaRecruiter</span>
          <h1 className="font-sans font-bold mt-3" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            We connect the<br /><span className="font-serif-drama" style={{ color: C.signal }}>people who move America.</span>
          </h1>
          <p className="font-sans mt-5" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: 1.8, fontSize: '1.05rem' }}>
            MetaRecruiter is a specialized CDL Class A recruiting and placement agency based in Aberdeen, Maryland. We bridge the gap between skilled drivers and the carriers who need them — with precision, speed, and industry expertise.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-pad">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Our Mission</span>
              <h2 className="font-sans font-bold mt-3 mb-6" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: C.ink, lineHeight: 1.1 }}>
                Precision placement.<br /><span className="font-serif-drama" style={{ color: C.signal }}>Zero compromise.</span>
              </h2>
              <p className="font-sans mb-4" style={{ color: C.smoke, lineHeight: 1.8 }}>
                The transportation industry runs on trust. Carriers trust their drivers with million-dollar loads. Drivers trust their carriers with their livelihoods. MetaRecruiter exists to make those connections the right way — thoroughly, transparently, and fast.
              </p>
              <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.8 }}>
                We specialize exclusively in CDL Class A recruitment. That focus means we know the industry, understand compliance requirements, and bring real expertise to every placement — not a generic staffing approach applied to trucking.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {VALUES.map(v => (
                <div key={v.title} className="card-surface p-6" style={{ background: '#fff' }}>
                  <h3 className="font-sans font-bold text-base mb-2" style={{ color: C.ink }}>{v.title}</h3>
                  <p className="font-sans text-sm" style={{ color: C.smoke, lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="section-pad" style={{ background: C.ink }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Find Us</span>
              <h2 className="font-sans font-bold mt-3 mb-8" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: '#fff', lineHeight: 1.1 }}>
                Based in Aberdeen,<br /><span className="font-serif-drama" style={{ color: C.signal }}>Maryland.</span>
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: <MapPin size={16} />, label: '1013 Beards Hill Road\nAberdeen, Maryland 21001' },
                  { icon: <Phone size={16} />,  label: '+1 301-861-0605' },
                  { icon: <Mail size={16} />,   label: 'support@metarecruiter.com' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span style={{ color: C.signal, marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                    <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-surface p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-center gap-2 mb-6">
                <Clock size={16} style={{ color: C.signal }} />
                <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Business Hours</span>
              </div>
              {[
                { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM EST' },
                { day: 'Saturday',        hours: 'Closed' },
                { day: 'Sunday',          hours: 'Closed' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{day}</span>
                  <span className="font-mono-data text-sm" style={{ color: hours === 'Closed' ? 'rgba(255,255,255,0.25)' : '#fff' }}>{hours}</span>
                </div>
              ))}
              <div className="mt-8">
                <MagneticBtn href="/contact" bg={C.signal} hoverBg="#fff" color="#fff" hoverColor={C.signal} style={{ borderRadius: '9999px', padding: '0.85rem 2rem', fontSize: '0.9rem', width: '100%' }}>
                  Contact Us
                </MagneticBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
