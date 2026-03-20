import { useState } from 'react'
import { CheckCircle2, XCircle, ChevronRight, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { C } from '../theme'
import MagneticBtn from '../components/MagneticBtn'
import { submitToN8N } from '../utils/formSubmit'

// ─── Qualification rules ─────────────────────────────────────────────
const isDisqualified = (f) => {
  if (f.hasCdl       === 'no')  return 'CDL Class A license required for all positions.'
  if (f.accidents    === '2' || f.accidents === '3+') return 'Candidates with 2 or more at-fault accidents in the last 3 years do not meet placement requirements at this time.'
  if (f.violations   === 'yes') return 'Major violations (DUI, reckless driving, excessive speeding) within the last 5 years are a disqualifying factor.'
  if (f.sap          === 'yes') return 'Candidates currently enrolled in a SAP program are not eligible at this time.'
  if (f.drugTest     === 'no')  return 'All positions require passing a DOT drug test.'
  if (f.workAuth     === 'no')  return 'Authorization to work in the United States is required.'
  if (f.english      === 'no')  return 'Basic English communication is required for all placements.'
  return null
}

const STEPS = [
  {
    id: 'personal',
    title: 'Personal Information',
    sub: 'Let\'s start with the basics.',
    fields: [
      { name: 'firstName',  label: 'First Name',    type: 'text',   required: true },
      { name: 'lastName',   label: 'Last Name',     type: 'text',   required: true },
      { name: 'email',      label: 'Email Address', type: 'email',  required: true },
      { name: 'phone',      label: 'Phone Number',  type: 'tel',    required: false },
    ],
  },
  {
    id: 'cdl',
    title: 'CDL Qualification',
    sub: 'Confirm your CDL Class A status.',
    fields: [
      { name: 'hasCdl', label: 'Do you hold a valid CDL Class A license?', type: 'radio', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }], required: true },
      { name: 'otrExp', label: 'Years of OTR (Over-the-Road) experience', type: 'select', options: [{ value: '', label: 'Select...' }, { value: 'less1', label: 'Less than 1 year' }, { value: '1-2', label: '1 – 2 years' }, { value: '3-5', label: '3 – 5 years' }, { value: '5+', label: '5+ years' }], required: true },
    ],
  },
  {
    id: 'history',
    title: 'Driving History',
    sub: 'Please answer honestly — this helps us place you correctly.',
    fields: [
      { name: 'accidents',  label: 'How many at-fault accidents have you had in the last 3 years?', type: 'radio', options: [{ value: '0', label: '0' }, { value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3+', label: '3 or more' }], required: true },
      { name: 'violations', label: 'Do you have any major violations (DUI, reckless driving, excessive speeding) in the last 5 years?', type: 'radio', options: [{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }], required: true },
    ],
  },
  {
    id: 'compliance',
    title: 'DOT Compliance',
    sub: 'Federal requirements for all commercial drivers.',
    fields: [
      { name: 'sap',      label: 'Are you currently enrolled in a SAP (Substance Abuse Professional) program?', type: 'radio', options: [{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }], required: true },
      { name: 'drugTest', label: 'Are you able to pass a DOT drug test?',                                       type: 'radio', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }], required: true },
      { name: 'workAuth', label: 'Are you authorized to work in the United States?',                            type: 'radio', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }], required: true },
      { name: 'english',  label: 'Can you communicate in basic English?',                                       type: 'radio', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }], required: true },
    ],
  },
  {
    id: 'preferences',
    title: 'Job Preferences',
    sub: 'Tell us what you\'re looking for.',
    fields: [
      { name: 'routeType', label: 'Preferred route type', type: 'radio', options: [{ value: 'otr', label: 'OTR (Over-the-Road)' }, { value: 'regional', label: 'Regional' }, { value: 'local', label: 'Local' }, { value: 'any', label: 'Open to any' }], required: true },
      { name: 'startDate', label: 'Earliest available start date', type: 'date', required: true },
      { name: 'notes',     label: 'Anything else you\'d like us to know? (optional)', type: 'textarea', required: false },
    ],
  },
]

const EMPTY = {
  firstName: '', lastName: '', email: '', phone: '',
  hasCdl: '', otrExp: '',
  accidents: '', violations: '',
  sap: '', drugTest: '', workAuth: '', english: '',
  routeType: '', startDate: '', notes: '',
  consentMarketing: false, consentNonMarketing: false,
}

function RadioGroup({ field, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {field.options.map(opt => (
        <label
          key={opt.value}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.6rem 1.2rem', borderRadius: '9999px', cursor: 'pointer',
            border: `1.5px solid ${value === opt.value ? C.signal : 'rgba(17,17,17,0.15)'}`,
            background: value === opt.value ? `${C.signal}15` : 'transparent',
            transition: 'all 0.2s',
            fontFamily: '"Space Grotesk", sans-serif', fontWeight: 500, fontSize: '0.9rem',
            color: value === opt.value ? C.signal : C.smoke,
          }}
        >
          <input
            type="radio" name={field.name} value={opt.value}
            checked={value === opt.value} onChange={() => onChange(field.name, opt.value)}
            style={{ display: 'none' }}
          />
          {value === opt.value && <CheckCircle2 size={14} />}
          {opt.label}
        </label>
      ))}
    </div>
  )
}

function FieldRenderer({ field, value, onChange }) {
  const inputBase = {
    width: '100%', fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.95rem',
    padding: '0.85rem 1rem', borderRadius: '0.75rem', outline: 'none',
    border: `1.5px solid rgba(17,17,17,0.15)`, color: C.ink, background: '#fff',
    transition: 'border-color 0.2s',
  }
  if (field.type === 'radio')    return <RadioGroup field={field} value={value} onChange={onChange} />
  if (field.type === 'textarea') return <textarea name={field.name} value={value} onChange={e => onChange(field.name, e.target.value)} rows={4} style={{ ...inputBase, resize: 'vertical' }} placeholder="Optional..." />
  if (field.type === 'select')
    return (
      <select name={field.name} value={value} onChange={e => onChange(field.name, e.target.value)} required={field.required} style={{ ...inputBase, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234A4A4A' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
        {field.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    )
  return <input type={field.type} name={field.name} value={value} onChange={e => onChange(field.name, e.target.value)} required={field.required} style={inputBase} />
}

export default function ApplyDriver() {
  const [step, setStep]       = useState(0)
  const [form, setForm]       = useState(EMPTY)
  const [result, setResult]   = useState(null) // 'qualified' | 'disqualified'
  const [reason, setReason]   = useState('')

  const update = (name, val) => setForm(f => ({ ...f, [name]: val }))

  const currentStep = STEPS[step]

  const stepComplete = () => {
    return currentStep.fields.every(f => {
      if (!f.required) return true
      return form[f.name] && form[f.name] !== ''
    })
  }

  const next = () => {
    if (step < STEPS.length - 1) { setStep(s => s + 1) }
    else { submit() }
  }

  const submit = async () => {
    const disqualifyReason = isDisqualified(form)
    const qualified = !disqualifyReason
    const tag = qualified ? 'qualified-driver' : 'not-qualified-driver'
    const stage = qualified ? 'New Lead' : 'Not Qualified'

    const payload = {
      ...form,
      tags: [tag],
      pipelineStage: stage,
      qualified
    }

    // Submit to N8N webhook
    const result = await submitToN8N('apply-driver', payload)

    // Fallback: open mailto if webhook not configured or failed
    if (!result.success && result.error === 'WEBHOOK_NOT_CONFIGURED' && qualified) {
      const subject = encodeURIComponent('New Qualified Driver Application — MetaRecruiter')
      const body = encodeURIComponent(
        `New qualified driver application received:\n\n` +
        `Name: ${form.firstName} ${form.lastName}\n` +
        `Email: ${form.email}\nPhone: ${form.phone}\n` +
        `CDL Class A: ${form.hasCdl}\nOTR Experience: ${form.otrExp}\n` +
        `Accidents (3yr): ${form.accidents}\nMajor Violations: ${form.violations}\n` +
        `SAP Program: ${form.sap}\nDrug Test: ${form.drugTest}\n` +
        `Work Auth: ${form.workAuth}\nEnglish: ${form.english}\n` +
        `Route Type: ${form.routeType}\nStart Date: ${form.startDate}\n` +
        `Notes: ${form.notes || 'None'}\n\nPipeline Stage: ${stage}`
      )
      window.open(`mailto:support@metarecruiter.com?subject=${subject}&body=${body}`)
    }

    if (qualified) {
      setResult('qualified')
    } else {
      setReason(disqualifyReason)
      setResult('disqualified')
    }
  }

  if (result === 'qualified') return (
    <div style={{ minHeight: '100dvh', background: C.offwhite, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: `${C.signal}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
          <CheckCircle2 size={36} style={{ color: C.signal }} />
        </div>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Application Received</span>
        <h1 className="font-sans font-bold mt-3 mb-4" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', color: C.ink, lineHeight: 1.1 }}>
          You're a great fit.<br /><span className="font-serif-drama" style={{ color: C.signal }}>We'll be in touch.</span>
        </h1>
        <p className="font-sans mb-8" style={{ color: C.smoke, lineHeight: 1.8, fontSize: '1.05rem' }}>
          Your application has been submitted. A MetaRecruiter specialist will reach out within 1–2 business days to discuss your next opportunity.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <MagneticBtn href="/" bg={C.signal} hoverBg={C.ink} color="#fff" hoverColor="#fff" style={{ borderRadius: '9999px', padding: '0.9rem 2rem', fontSize: '0.95rem' }}>
            Back to Home
          </MagneticBtn>
          <MagneticBtn href="/contact" bg="transparent" hoverBg={C.signal} color={C.signal} hoverColor="#fff" style={{ borderRadius: '9999px', padding: '0.9rem 2rem', fontSize: '0.95rem', border: `1.5px solid ${C.signal}` }}>
            Contact Us
          </MagneticBtn>
        </div>
      </div>
    </div>
  )

  if (result === 'disqualified') return (
    <div style={{ minHeight: '100dvh', background: C.offwhite, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(17,17,17,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
          <XCircle size={36} style={{ color: C.smoke }} />
        </div>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.smoke }}>Not Eligible at This Time</span>
        <h1 className="font-sans font-bold mt-3 mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', color: C.ink, lineHeight: 1.1 }}>
          Thank you for applying.
        </h1>
        <p className="font-sans mb-4" style={{ color: C.smoke, lineHeight: 1.8, fontSize: '1.05rem' }}>
          {reason}
        </p>
        <p className="font-sans mb-8" style={{ color: C.smoke, lineHeight: 1.8 }}>
          We appreciate your interest in MetaRecruiter. Requirements may change — we encourage you to check back in the future.
        </p>
        <MagneticBtn href="/" bg={C.ink} hoverBg={C.signal} color="#fff" hoverColor="#fff" style={{ borderRadius: '9999px', padding: '0.9rem 2rem', fontSize: '0.95rem' }}>
          Back to Home
        </MagneticBtn>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100dvh', background: C.offwhite }}>
      {/* Page header */}
      <div style={{ background: C.ink, paddingTop: '7rem', paddingBottom: '4rem', paddingLeft: 'clamp(1.5rem,6vw,7rem)', paddingRight: 'clamp(1.5rem,6vw,7rem)' }}>
        <div style={{ maxWidth: '720px' }}>
          <div className="flex items-center gap-3 mb-4">
            <Truck size={18} style={{ color: C.signal }} />
            <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Driver Application</span>
          </div>
          <h1 className="font-sans font-bold" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Apply as a<br /><span className="font-serif-drama" style={{ color: C.signal }}>CDL Class A Driver.</span>
          </h1>
          <p className="font-sans mt-4" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '500px' }}>
            Free to apply. No commitment. Takes about 3 minutes.
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ background: C.paper, height: '4px' }}>
        <div style={{ height: '100%', background: C.signal, width: `${((step + 1) / STEPS.length) * 100}%`, transition: 'width 0.4s ease' }} />
      </div>

      {/* Form body */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-8">
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: i < step ? C.signal : i === step ? C.ink : 'rgba(17,17,17,0.1)', color: i <= step ? '#fff' : C.smoke, fontSize: '0.75rem', fontWeight: 700, fontFamily: '"Space Mono", monospace', transition: 'all 0.3s', flexShrink: 0 }}>
                {i < step ? <CheckCircle2 size={14} /> : i + 1}
              </div>
              {i < STEPS.length - 1 && <div style={{ width: '24px', height: '1.5px', background: i < step ? C.signal : 'rgba(17,17,17,0.15)' }} />}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="card-surface p-8" style={{ background: '#fff' }}>
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Step {step + 1} of {STEPS.length}</span>
          <h2 className="font-sans font-bold mt-2 mb-1" style={{ fontSize: '1.6rem', color: C.ink }}>{currentStep.title}</h2>
          <p className="font-sans text-sm mb-8" style={{ color: C.smoke }}>{currentStep.sub}</p>

          <div className="flex flex-col gap-6">
            {currentStep.fields.map(field => (
              <div key={field.name}>
                <label className="font-sans font-medium text-sm" style={{ color: C.ink, display: 'block', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                  {field.label}
                  {field.required && <span style={{ color: C.signal }}> *</span>}
                </label>
                <FieldRenderer field={field} value={form[field.name]} onChange={update} />
              </div>
            ))}
          </div>

          {/* Legal links — last step only */}
          {step === STEPS.length - 1 && (
            <div className="mt-8" style={{ borderTop: '1px solid rgba(17,17,17,0.08)', paddingTop: '1.5rem' }}>
              <p className="font-sans text-xs text-center" style={{ color: C.smoke }}>
                <a href="/privacy-policy" style={{ color: C.signal, textDecoration: 'underline' }}>Privacy Policy</a>
                {' | '}
                <a href="/terms-of-service" style={{ color: C.signal, textDecoration: 'underline' }}>Terms of Service</a>
              </p>
            </div>
          )}

          <div className="flex items-center justify-between mt-10">
            {step > 0
              ? <button onClick={() => setStep(s => s - 1)} className="font-sans font-medium text-sm" style={{ background: 'none', border: 'none', color: C.smoke, cursor: 'pointer', padding: '0.5rem 0' }}>← Back</button>
              : <span />
            }
            <MagneticBtn
              onClick={next}
              bg={stepComplete() ? C.signal : 'rgba(17,17,17,0.1)'}
              hoverBg={stepComplete() ? C.ink : 'rgba(17,17,17,0.1)'}
              color={stepComplete() ? '#fff' : C.smoke}
              hoverColor={stepComplete() ? '#fff' : C.smoke}
              style={{ borderRadius: '9999px', padding: '0.85rem 2rem', fontSize: '0.95rem', cursor: stepComplete() ? 'pointer' : 'not-allowed' }}
            >
              {step === STEPS.length - 1 ? 'Submit Application' : 'Continue'} <ChevronRight size={16} />
            </MagneticBtn>
          </div>
        </div>

        <p className="font-sans text-xs text-center mt-6" style={{ color: 'rgba(17,17,17,0.35)', lineHeight: 1.6 }}>
          Your information is kept confidential and used only for driver placement purposes.
          <br />Questions? <Link to="/contact" style={{ color: C.signal }}>Contact us</Link>.
        </p>
      </div>
    </div>
  )
}
