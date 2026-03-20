import { C } from '../theme'

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 className="font-sans font-bold" style={{ fontSize: '1.2rem', color: C.ink, marginBottom: '0.75rem' }}>{title}</h2>
    <div className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem' }}>
      {children}
    </div>
  </div>
)

const Li = ({ children }) => (
  <li style={{ paddingLeft: '0', marginBottom: '0.4rem' }}>{children}</li>
)

export default function TermsOfService() {
  return (
    <div style={{ background: C.offwhite }}>
      {/* Header */}
      <div style={{ background: C.ink, paddingTop: '8rem', paddingBottom: '5rem', paddingLeft: 'clamp(1.5rem,6vw,7rem)', paddingRight: 'clamp(1.5rem,6vw,7rem)' }}>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Legal</span>
        <h1 className="font-sans font-bold mt-3" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Terms of Service
        </h1>
        <p className="font-sans mt-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>MetaRecruiter LLC DBA MetaRecruiter</p>
        <p className="font-sans mt-1" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>Last Updated: March 10, 2026</p>
      </div>

      {/* Body */}
      <section className="section-pad">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Intro */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem', marginBottom: '0.75rem' }}>
              Welcome to MetaRecruiter.
            </p>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem', marginBottom: '0.75rem' }}>
              These Terms of Service ("Terms") govern your access to and use of the website located at{' '}
              <a href="https://metarecruiter.com" style={{ color: C.signal }}>https://metarecruiter.com</a>{' '}
              (the "Site") and any services provided by MetaRecruiter LLC DBA MetaRecruiter ("MetaRecruiter," "Company," "we," "us," or "our").
            </p>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem', marginBottom: '0.75rem' }}>
              By accessing or using our Site or services, you agree to these Terms. If you do not agree, please do not use our Site or services.
            </p>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem' }}>
              Please also review our Privacy Policy:{' '}
              <a href="https://metarecruiter.com/privacy" style={{ color: C.signal }}>https://metarecruiter.com/privacy</a>
            </p>
          </div>

          <Section title="1. Description of Services">
            <p>MetaRecruiter LLC is a CDL Class A driver recruiting and placement company.</p>
            <p style={{ marginTop: '0.75rem' }}>Our services include:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Connecting CDL Class A drivers with carrier employers</Li>
              <Li>Connecting owner-operators with carrier load opportunities</Li>
              <Li>Providing driver recruiting services to transportation carriers</Li>
              <Li>Facilitating application, screening, and communication between drivers and carriers</Li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>MetaRecruiter acts as an intermediary between drivers/owner-operators and transportation carriers.</p>
          </Section>

          <Section title="2. Eligibility">
            <p>You must be at least 18 years of age to use our services.</p>
            <p style={{ marginTop: '0.75rem' }}>By submitting an application or inquiry, you confirm:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>You are legally eligible to work in the United States (where applicable)</Li>
              <Li>All information provided is accurate and truthful</Li>
              <Li>You are submitting information voluntarily</Li>
            </ul>
          </Section>

          <Section title="3. Driver & Owner-Operator Applications">
            <p>Submitting an application does not guarantee job placement or employment.</p>
            <p style={{ marginTop: '0.75rem' }}>MetaRecruiter connects applicants with carriers, but:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Hiring decisions are made solely by the carrier</Li>
              <Li>Placement timelines vary</Li>
              <Li>Applications may be rejected if requirements are not met</Li>
            </ul>
          </Section>

          <Section title="4. Carrier Recruiting Services">
            <p>Carriers agree that:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Fees are governed by separate agreements</Li>
              <Li>Candidate information is provided in good faith</Li>
              <Li>MetaRecruiter does not guarantee driver performance</Li>
              <Li>Carriers are responsible for compliance with FMCSA regulations</Li>
            </ul>
          </Section>

          <Section title="5. SMS Messaging Program">
            <p>By submitting your phone number and checking the consent checkbox, you agree to receive SMS messages from:</p>
            <p style={{ marginTop: '0.5rem', fontWeight: 600, color: C.ink }}>MetaRecruiter LLC DBA MetaRecruiter</p>

            <p style={{ marginTop: '1rem', fontWeight: 600, color: C.ink }}>Message Types</p>
            <p style={{ marginTop: '0.4rem' }}>Messages may include:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Application confirmations</Li>
              <Li>Recruiting updates</Li>
              <Li>Follow-ups regarding opportunities</Li>
              <Li>Appointment reminders</Li>
              <Li>Service-related notifications</Li>
            </ul>

            <p style={{ marginTop: '1rem', fontWeight: 600, color: C.ink }}>Message Frequency</p>
            <p style={{ marginTop: '0.4rem' }}>Message frequency varies but typically includes:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>2–5 messages per application or inquiry</Li>
              <Li>Up to 4 recruiting or informational messages per month</Li>
            </ul>

            <p style={{ marginTop: '1rem', fontWeight: 600, color: C.ink }}>Standard Disclosures</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Message and data rates may apply</Li>
              <Li>Consent is not a condition of employment</Li>
            </ul>
          </Section>

          <Section title="6. Opt-Out Instructions">
            <p>You may opt out of SMS communications at any time by replying:</p>
            <p style={{ marginTop: '0.5rem', fontWeight: 600, color: C.ink }}>STOP</p>
            <p style={{ marginTop: '0.5rem' }}>After you send "STOP", you will receive a confirmation message, and you will no longer receive SMS messages from MetaRecruiter.</p>
          </Section>

          <Section title="7. Re-Opt In Instructions">
            <p>To rejoin SMS communications after opting out, you must:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Submit a new form on our website, or</Li>
              <Li>Provide consent again through the original opt-in method</Li>
            </ul>
          </Section>

          <Section title="8. Help Instructions">
            <p>For assistance, reply:</p>
            <p style={{ marginTop: '0.5rem', fontWeight: 600, color: C.ink }}>HELP</p>
            <p style={{ marginTop: '0.5rem' }}>Or contact us at:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Email: <a href="mailto:support@metarecruiter.com" style={{ color: C.signal }}>support@metarecruiter.com</a></Li>
              <Li>Phone: <a href="tel:+13018610605" style={{ color: C.signal }}>+1 301-861-0605</a></Li>
            </ul>
          </Section>

          <Section title="9. Carrier Liability Disclaimer">
            <p>Mobile carriers are not liable for delayed or undelivered messages.</p>
          </Section>

          <Section title="10. Fees & Payments">
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Driver applications are free</Li>
              <Li>Carrier services may include fees per agreement</Li>
              <Li>Fees are non-refundable unless stated otherwise</Li>
            </ul>
          </Section>

          <Section title="11. Intellectual Property">
            <p>All content on this Site is the property of MetaRecruiter LLC and may not be reproduced without permission.</p>
          </Section>

          <Section title="12. Disclaimer of Warranties">
            <p>Services are provided "as is" without guarantees of:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Website uptime</Li>
              <Li>Error-free operation</Li>
              <Li>Employment outcomes</Li>
            </ul>
          </Section>

          <Section title="13. Limitation of Liability">
            <p>MetaRecruiter is not liable for:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Loss of employment opportunity</Li>
              <Li>Lost revenue</Li>
              <Li>Data loss</Li>
              <Li>Service interruptions</Li>
            </ul>
          </Section>

          <Section title="14. Indemnification">
            <p>You agree to indemnify MetaRecruiter against claims arising from:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Use of the Site</Li>
              <Li>Violations of these Terms</Li>
              <Li>False information submitted</Li>
            </ul>
          </Section>

          <Section title="15. Third-Party Services">
            <p>We are not responsible for third-party carriers, employers, or external services.</p>
          </Section>

          <Section title="16. Governing Law">
            <p>These Terms are governed by the laws of the State of Maryland.</p>
            <p style={{ marginTop: '0.75rem' }}>All disputes will be handled in Harford County, Maryland courts.</p>
          </Section>

          <Section title="17. Contact Information">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <p><strong>MetaRecruiter LLC DBA MetaRecruiter</strong></p>
              <p>1013 Beards Hill Rd<br />Aberdeen, MD 21001<br />United States</p>
              <p>Phone: <a href="tel:+13018610605" style={{ color: C.signal }}>+1 301-861-0605</a></p>
              <p>Email: <a href="mailto:support@metarecruiter.com" style={{ color: C.signal }}>support@metarecruiter.com</a></p>
              <p>Website: <a href="https://metarecruiter.com" style={{ color: C.signal }}>https://metarecruiter.com</a></p>
            </div>
          </Section>

        </div>
      </section>
    </div>
  )
}
