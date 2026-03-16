import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Truck, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { C, HERO_IMG, PHILO_IMG, PROTO_IMGS } from '../theme'
import MagneticBtn from '../components/MagneticBtn'

gsap.registerPlugin(ScrollTrigger)

// ═══════════════════════════════════════════════════════════════════════
//  HERO
// ═══════════════════════════════════════════════════════════════════════
function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', { y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: 0.12, delay: 0.2 })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} style={{ height: '100dvh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', paddingBottom: '5rem', paddingLeft: 'clamp(1.5rem,6vw,7rem)', paddingRight: 'clamp(1.5rem,6vw,7rem)' }}>
      <img src={HERO_IMG} alt="Highway" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(17,17,17,0.97) 0%,rgba(17,17,17,0.55) 55%,rgba(17,17,17,0.2) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
        <p className="hero-line font-mono-data text-sm mb-5 tracking-widest uppercase" style={{ color: C.signal }}>
          CDL Class A • Nationwide Placement
        </p>
        <h1 style={{ lineHeight: 1, marginBottom: '1.8rem' }}>
          <span className="hero-line block font-sans font-bold" style={{ color: '#fff', fontSize: 'clamp(3rem,7.5vw,7rem)', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Command the
          </span>
          <span className="hero-line block font-serif-drama" style={{ color: C.signal, fontSize: 'clamp(4.5rem,12vw,11rem)', lineHeight: 0.9 }}>
            Road.
          </span>
        </h1>
        <p className="hero-line font-sans" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem,1.6vw,1.25rem)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          MetaRecruiter connects elite CDL Class A drivers with top-tier transportation carriers — precision placement, zero compromise.
        </p>
        <div className="hero-line flex flex-wrap gap-3 items-center">
          <MagneticBtn href="/apply" bg={C.signal} hoverBg="#fff" color="#fff" hoverColor={C.signal} style={{ padding: '1rem 2.2rem', borderRadius: '9999px', fontSize: '1rem', fontWeight: 700 }}>
            Apply as Driver
          </MagneticBtn>
          <MagneticBtn href="/owner-operators" bg="rgba(255,255,255,0.1)" hoverBg={C.signal} color="#fff" hoverColor="#fff" style={{ padding: '1rem 2.2rem', borderRadius: '9999px', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}>
            Owner Operators
          </MagneticBtn>
          <MagneticBtn href="/hire-drivers" bg={C.ink} hoverBg={C.signal} color="#fff" hoverColor="#fff" style={{ padding: '1rem 2.2rem', borderRadius: '9999px', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.15)' }}>
            Hire Drivers <ArrowRight size={15} />
          </MagneticBtn>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', right: '3rem', zIndex: 2 }}>
        <span className="font-mono-data text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.35)', writingMode: 'vertical-lr' }}>SCROLL</span>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  FEATURES
// ═══════════════════════════════════════════════════════════════════════
function ShufflerCard() {
  const labels = ['Owner-Operators', 'Company Drivers', 'Long-Haul Experts']
  const [items, setItems] = useState(labels)
  useEffect(() => {
    const id = setInterval(() => setItems(prev => { const n = [...prev]; n.unshift(n.pop()); return n }), 2800)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="card-surface p-8 h-full flex flex-col justify-between">
      <div>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Talent Pool</span>
        <h3 className="font-sans font-bold text-xl mt-3 mb-2" style={{ color: C.ink }}>Specialized CDL Recruitment</h3>
        <p className="font-sans text-sm" style={{ color: C.smoke, lineHeight: 1.7 }}>Access a curated network of verified Class A drivers — matched to your exact operational needs.</p>
      </div>
      <div className="mt-6 relative" style={{ height: '130px' }}>
        {items.map((label, i) => (
          <div key={label} style={{ position: 'absolute', width: '100%', top: `${i * 40}px`, opacity: i === 0 ? 1 : i === 1 ? 0.55 : 0.2, transform: `scale(${1 - i * 0.04})`, transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)', background: i === 0 ? C.signal : C.paper, color: i === 0 ? '#fff' : C.ink, borderRadius: '0.75rem', padding: '0.65rem 1rem', fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '0.9rem', border: `1px solid ${i === 0 ? C.signal : 'rgba(17,17,17,0.1)'}`, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Truck size={14} /> {label}
          </div>
        ))}
      </div>
    </div>
  )
}

const FEEDS = [
  '> Matching driver CDL-A #4821 with Carrier TX-09...',
  '> Background verification: PASSED ✓',
  '> DOT compliance check: CLEARED ✓',
  '> Route preference: Long-haul, OTR aligned',
  '> Placement confirmed — Aberdeen, MD hub',
  '> Onboarding initiated...',
]

function TypewriterCard() {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [display, setDisplay] = useState('')
  useEffect(() => {
    const current = FEEDS[lineIdx]
    if (charIdx < current.length) {
      const t = setTimeout(() => { setDisplay(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 38)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => { setLineIdx(l => (l + 1) % FEEDS.length); setCharIdx(0); setDisplay('') }, 1800)
      return () => clearTimeout(t)
    }
  }, [lineIdx, charIdx])
  return (
    <div className="card-surface p-8 h-full flex flex-col justify-between" style={{ background: C.ink }}>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="pulse-dot w-2 h-2 rounded-full" style={{ background: C.signal, display: 'inline-block' }} />
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Live Feed</span>
        </div>
        <h3 className="font-sans font-bold text-xl mb-2" style={{ color: '#fff' }}>Streamlined Placement</h3>
        <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>Real-time matching intelligence — from application to hire in days, not weeks.</p>
      </div>
      <div className="mt-6 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', minHeight: '80px' }}>
        <span className="font-mono-data text-sm" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
          {display}<span className="cursor-blink" style={{ color: C.signal }}>█</span>
        </span>
      </div>
    </div>
  )
}

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
function SchedulerCard() {
  const [active, setActive] = useState(null)
  const [saved, setSaved] = useState(false)
  useEffect(() => {
    const sequence = [1, 3, 4, 5]; let step = 0; let phase = 'moving'
    const tick = () => {
      if (phase === 'moving') { setActive(sequence[step]); phase = 'clicking'; return 600 }
      else if (phase === 'clicking') { step = (step + 1) % sequence.length; if (step === 0) { phase = 'saving'; setSaved(false); return 600 } phase = 'moving'; return 300 }
      else { setSaved(true); setTimeout(() => { setSaved(false); setActive(null) }, 900); phase = 'moving'; return 1200 }
    }
    let timeout; const loop = () => { timeout = setTimeout(loop, tick()) }; timeout = setTimeout(loop, 800)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <div className="card-surface p-8 h-full flex flex-col justify-between">
      <div>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Carrier Network</span>
        <h3 className="font-sans font-bold text-xl mt-3 mb-2" style={{ color: C.ink }}>Top-Tier Partnerships</h3>
        <p className="font-sans text-sm" style={{ color: C.smoke, lineHeight: 1.7 }}>Verified relationships with reputable transportation companies across the nation.</p>
      </div>
      <div className="mt-6">
        <div className="flex gap-2 mb-3">
          {DAYS.map((d, i) => (
            <div key={i} style={{ width: '36px', height: '36px', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Space Mono",monospace', fontSize: '0.75rem', fontWeight: 700, background: active === i ? C.signal : 'rgba(17,17,17,0.06)', color: active === i ? '#fff' : C.smoke, transform: active === i ? 'scale(0.95)' : 'scale(1)', transition: 'all 0.2s ease', border: `1px solid ${active === i ? C.signal : 'transparent'}` }}>{d}</div>
          ))}
        </div>
        <button style={{ width: '100%', padding: '0.65rem', borderRadius: '0.75rem', background: saved ? C.signal : 'rgba(17,17,17,0.06)', color: saved ? '#fff' : C.smoke, border: `1px solid ${saved ? C.signal : 'transparent'}`, fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
          <CheckCircle2 size={14} />{saved ? 'Carrier Saved!' : 'Save Carrier'}
        </button>
      </div>
    </div>
  )
}

function Features() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feat-card', { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: '.feat-card', start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section id="services" ref={ref} className="section-pad" style={{ background: C.offwhite }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>What We Do</span>
          <h2 className="font-sans font-bold mt-3" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', letterSpacing: '-0.03em', color: C.ink, lineHeight: 1.1 }}>
            Built for the<br /><span className="font-serif-drama" style={{ color: C.signal }}>transportation industry.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ gridAutoRows: '420px' }}>
          <div className="feat-card"><ShufflerCard /></div>
          <div className="feat-card"><TypewriterCard /></div>
          <div className="feat-card"><SchedulerCard /></div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  PHILOSOPHY
// ═══════════════════════════════════════════════════════════════════════
function Philosophy() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-word', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.06, scrollTrigger: { trigger: ref.current, start: 'top 65%' } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section id="about" ref={ref} className="section-pad" style={{ background: C.ink, position: 'relative', overflow: 'hidden' }}>
      <img src={PHILO_IMG} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.07, mixBlendMode: 'luminosity' }} />
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p className="font-sans text-lg mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {'Most recruiters focus on:'.split(' ').map((w, i) => <span key={i} className="philo-word inline-block mr-2">{w}</span>)}
        </p>
        <p className="font-sans mb-6" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(1rem,1.4vw,1.15rem)', lineHeight: 1.8 }}>
          Volume hiring. Generic job boards. Spray-and-pray applications with zero industry knowledge.
        </p>
        <div style={{ borderLeft: `3px solid ${C.signal}`, paddingLeft: '2rem', marginTop: '3rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1rem,1.4vw,1.15rem)', marginBottom: '0.75rem' }}>
            {'We focus on precision.'.split(' ').map((w, i) => <span key={i} className="philo-word inline-block mr-2">{w}</span>)}
          </p>
          <p className="font-serif-drama" style={{ fontSize: 'clamp(2.8rem,7vw,6.5rem)', lineHeight: 0.95, color: '#fff' }}>
            {[['Right','#fff'],['driver.',C.signal]].map(([w,col],i) => <span key={i} className="philo-word inline-block mr-4" style={{ color: col }}>{w}</span>)}
            <br />
            {[['Right','#fff'],['carrier.',C.signal]].map(([w,col],i) => <span key={i} className="philo-word inline-block mr-4" style={{ color: col }}>{w}</span>)}
            <br />
            <span className="philo-word inline-block" style={{ color: 'rgba(255,255,255,0.4)' }}>Every time.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  PROTOCOL
// ═══════════════════════════════════════════════════════════════════════
const STEPS = [
  { num: '01', title: 'Profile & Assess', desc: 'We learn your operation inside-out. Fleet size, routes, culture, compliance requirements. No assumptions — just deep industry expertise.', img: PROTO_IMGS[0], svg: 'helix' },
  { num: '02', title: 'Match & Connect',  desc: 'Our precision matching surfaces only qualified, verified CDL Class A candidates aligned to your exact specifications. Zero noise.',         img: PROTO_IMGS[1], svg: 'scanner' },
  { num: '03', title: 'Place & Support',  desc: 'We handle placement start-to-finish and stay engaged post-hire — because a great match is only the beginning of a long partnership.',     img: PROTO_IMGS[2], svg: 'waveform' },
]

function HelixSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      {[0,1,2,3].map(i => <ellipse key={i} cx="40" cy="40" rx={8+i*10} ry={8+i*10} stroke={i%2===0?C.signal:'rgba(255,255,255,0.15)'} strokeWidth="1.5" style={{ transformOrigin:'40px 40px', animation:`spin ${3+i}s linear infinite` }} />)}
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </svg>
  )
}

function ScannerSVG() {
  const [pos, setPos] = useState(0)
  useEffect(() => { const id = setInterval(() => setPos(p => (p+1)%85), 28); return () => clearInterval(id) }, [])
  const dots = []; for (let r=0;r<5;r++) for (let c=0;c<8;c++) dots.push({x:c*10+5,y:r*14+7})
  return (
    <svg width="85" height="80" viewBox="0 0 85 80" fill="none">
      {dots.map((d,i) => <circle key={i} cx={d.x} cy={d.y} r="2" fill={Math.abs(d.x-pos)<8?C.signal:'rgba(255,255,255,0.15)'} />)}
      <line x1={pos} y1="0" x2={pos} y2="80" stroke={C.signal} strokeWidth="1" opacity="0.6" />
    </svg>
  )
}

function WaveformSVG() {
  const points = Array.from({length:20},(_,i)=>`${(i/19)*80},${40+Math.sin(i*0.8)*22}`).join(' ')
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <polyline points={points} stroke={C.signal} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="waveform-path" />
      <polyline points={points} stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" transform="translate(0,8)" />
    </svg>
  )
}

function Protocol() {
  const ref = useRef(null)
  const cardRefs = useRef([])
  useEffect(() => {
    const cards = cardRefs.current
    const onScroll = () => {
      cards.forEach((card, i) => {
        if (i >= cards.length - 1 || !card) return
        const nextCard = cards[i+1]
        if (!nextCard) return
        const progress = Math.max(0, Math.min(1, (window.innerHeight - nextCard.getBoundingClientRect().top) / window.innerHeight))
        gsap.set(card, { scale: 1-progress*0.08, filter: `blur(${progress*16}px)`, opacity: 1-progress*0.45 })
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const svgMap = { helix: <HelixSVG />, scanner: <ScannerSVG />, waveform: <WaveformSVG /> }
  return (
    <section id="process" ref={ref} style={{ background: C.paper }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '7rem 1.5rem 0' }}>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Our Process</span>
        <h2 className="font-sans font-bold mt-3 mb-16" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', letterSpacing: '-0.03em', color: C.ink, lineHeight: 1.1 }}>
          Three steps.<br /><span className="font-serif-drama" style={{ color: C.signal }}>One perfect match.</span>
        </h2>
      </div>
      {STEPS.map((step, i) => (
        <div key={i} ref={el => { cardRefs.current[i] = el }} className="protocol-card" style={{ zIndex: 10+i }}>
          <div className="card-surface mx-4 md:mx-8" style={{ maxWidth: '1100px', width: '100%', background: i===1?C.ink:C.offwhite, overflow: 'hidden', minHeight: '480px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '480px' }}>
              <div style={{ padding: 'clamp(2.5rem,5vw,4.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono-data font-bold" style={{ fontSize: 'clamp(3.5rem,6vw,5rem)', color: i===1?'rgba(255,255,255,0.1)':'rgba(17,17,17,0.08)', lineHeight: 1 }}>{step.num}</span>
                    <div style={{ opacity: 0.9 }}>{svgMap[step.svg]}</div>
                  </div>
                  <h3 className="font-sans font-bold mb-4" style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', color: i===1?'#fff':C.ink, lineHeight: 1.2 }}>{step.title}</h3>
                  <p className="font-sans" style={{ color: i===1?'rgba(255,255,255,0.55)':C.smoke, lineHeight: 1.8, fontSize: '1.05rem' }}>{step.desc}</p>
                </div>
              </div>
              <div className="hidden md:block" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: i===1?'grayscale(30%) brightness(0.7)':'grayscale(15%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: i===1?'linear-gradient(to right,rgba(17,17,17,0.6) 0%,transparent 60%)':'linear-gradient(to right,rgba(245,243,238,0.4) 0%,transparent 60%)' }} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div style={{ height: '4rem' }} />
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  PRICING (updated with real prices)
// ═══════════════════════════════════════════════════════════════════════
const TIERS = [
  { name: 'Starter',                 sub: 'For growing carriers',      price: '$499',   period: '/mo', features: ['Access to driver leads', 'Candidate profiles', 'Verified CDL-A drivers', 'Email support'],                                                          pop: false },
  { name: 'Professional Recruiting', sub: 'Full-service placement',    price: '$1,500', period: '/mo', features: ['We recruit & pre-screen drivers', 'Only qualified candidates', 'DOT compliance checks', 'Dedicated account manager', 'Post-hire follow-up'], pop: true  },
  { name: 'Enterprise',              sub: 'High-volume carriers',      price: 'Custom', period: '',    features: ['Volume driver contracts', 'Custom driver profiles', 'Real-time reporting', 'SLA guarantees', '24/7 priority support'],                              pop: false },
]

function Pricing() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tier-card', { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: '.tier-card', start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="section-pad" style={{ background: C.offwhite }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Carrier Pricing</span>
        <h2 className="font-sans font-bold mt-3 mb-12" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', letterSpacing: '-0.03em', color: C.ink, lineHeight: 1.1 }}>
          Find your plan.<br /><span className="font-serif-drama" style={{ color: C.signal }}>Scale with confidence.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {TIERS.map(tier => (
            <div key={tier.name} className="tier-card" style={{ background: tier.pop?C.signal:C.offwhite, border: `1px solid ${tier.pop?C.signal:'rgba(17,17,17,0.12)'}`, borderRadius: '2rem', padding: '2.5rem', transform: tier.pop?'scale(1.04)':'scale(1)', boxShadow: tier.pop?`0 20px 60px ${C.signal}40`:'0 4px 24px rgba(0,0,0,0.05)' }}>
              <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: tier.pop?'rgba(255,255,255,0.7)':C.signal }}>{tier.sub}</span>
              <h3 className="font-sans font-bold text-xl mt-2 mb-1" style={{ color: tier.pop?'#fff':C.ink, lineHeight: 1.2 }}>{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-mono-data font-bold" style={{ fontSize: '2rem', color: tier.pop?'#fff':C.ink }}>{tier.price}</span>
                {tier.period && <span className="font-sans text-sm" style={{ color: tier.pop?'rgba(255,255,255,0.6)':C.smoke }}>{tier.period}</span>}
              </div>
              <ul className="flex flex-col gap-3 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={15} style={{ color: tier.pop?'rgba(255,255,255,0.8)':C.signal, flexShrink: 0, marginTop: '2px' }} />
                    <span className="font-sans text-sm" style={{ color: tier.pop?'rgba(255,255,255,0.85)':C.smoke, lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <MagneticBtn href="/hire-drivers" bg={tier.pop?'#fff':C.signal} hoverBg={tier.pop?C.ink:C.ash} color={tier.pop?C.signal:'#fff'} hoverColor="#fff" style={{ borderRadius: '9999px', padding: '0.85rem', width: '100%', fontSize: '0.875rem' }}>
                Get Started
              </MagneticBtn>
            </div>
          ))}
        </div>
        <p className="font-sans text-sm text-center mt-8" style={{ color: C.smoke }}>
          Drivers always apply for free. &nbsp;
          <Link to="/apply" style={{ color: C.signal, textDecoration: 'none', fontWeight: 600 }}>Apply now →</Link>
        </p>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  HOME EXPORT
// ═══════════════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
    </>
  )
}
