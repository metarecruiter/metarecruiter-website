import { C } from '../theme'

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 className="font-sans font-bold" style={{ fontSize: '1.2rem', color: C.ink, marginBottom: '0.75rem' }}>{title}</h2>
    <div className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem' }}>
      {children}
    </div>
  </div>
)

const SubHead = ({ children }) => (
  <p style={{ fontWeight: 600, color: C.ink, marginTop: '1rem', marginBottom: '0.4rem' }}>{children}</p>
)

const Li = ({ children }) => (
  <li style={{ marginBottom: '0.4rem' }}>{children}</li>
)

export default function PrivacyPolicy() {
  return (
    <div style={{ background: C.offwhite }}>
      {/* Header */}
      <div style={{ background: C.ink, paddingTop: '8rem', paddingBottom: '5rem', paddingLeft: 'clamp(1.5rem,6vw,7rem)', paddingRight: 'clamp(1.5rem,6vw,7rem)' }}>
        <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: C.signal }}>Legal</span>
        <h1 className="font-sans font-bold mt-3" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Privacy Policy
        </h1>
        <p className="font-sans mt-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>MetaRecruiter LLC DBA MetaRecruiter</p>
        <p className="font-sans mt-1" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>Last Updated: March 20, 2026</p>
      </div>

      {/* Body */}
      <section className="section-pad">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Intro */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem', marginBottom: '0.75rem' }}>
              MetaRecruiter LLC ("MetaRecruiter," "we," "us," or "our") operates the website{' '}
              <a href="https://metarecruiter.com" style={{ color: C.signal }}>https://metarecruiter.com</a>{' '}
              (the "Site"). This Privacy Policy explains how we collect, use, store, and protect your information when you use our services.
            </p>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem', marginBottom: '0.75rem' }}>
              This Privacy Policy should be read together with our Terms of Service:{' '}
              <a href="https://metarecruiter.com/terms" style={{ color: C.signal }}>https://metarecruiter.com/terms</a>
            </p>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem' }}>
              By using our Site, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          <Section title="1. Information We Collect">
            <p>We may collect personal information that you voluntarily provide to us when you interact with our website or services.</p>

            <SubHead>Contact Information</SubHead>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>First name</Li>
              <Li>Last name</Li>
              <Li>Email address</Li>
              <Li>Phone number</Li>
            </ul>
            <p style={{ marginTop: '0.6rem' }}>This information is collected through contact forms, driver applications, and other communication channels.</p>

            <SubHead>Professional Information</SubHead>
            <p>When submitting driver or owner-operator applications, we may collect:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>CDL license status</Li>
              <Li>Driving history</Li>
              <Li>Employment preferences</Li>
              <Li>Owner-operator details</Li>
              <Li>Work eligibility information</Li>
            </ul>

            <SubHead>Usage Data</SubHead>
            <p>We may automatically collect certain technical data including:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>IP address</Li>
              <Li>Browser type</Li>
              <Li>Device information</Li>
              <Li>Pages visited</Li>
              <Li>Time spent on pages</Li>
              <Li>Referring URLs</Li>
            </ul>

            <SubHead>Communications</SubHead>
            <p>We may retain records of communications you send to us, including emails, SMS messages, and form submissions.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Process and evaluate driver and owner-operator applications</Li>
              <Li>Match qualified candidates with carrier partners</Li>
              <Li>Respond to inquiries and provide support</Li>
              <Li>Send service-related and application-related communications</Li>
              <Li>Send marketing communications only with your explicit consent</Li>
              <Li>Improve our website and services</Li>
              <Li>Comply with legal obligations</Li>
            </ul>
          </Section>

          <Section title="3. SMS Text Messaging Communications">
            <p>By providing your phone number through our website forms and checking the applicable consent checkbox, you agree to receive SMS messages from:</p>
            <p style={{ marginTop: '0.5rem', fontWeight: 600, color: C.ink }}>MetaRecruiter LLC DBA MetaRecruiter</p>

            <SubHead>Types of Messages</SubHead>
            <p>Messages may include:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Application confirmations</Li>
              <Li>Recruiting updates</Li>
              <Li>Follow-ups regarding opportunities</Li>
              <Li>Appointment scheduling</Li>
              <Li>Service-related notifications</Li>
            </ul>
            <p style={{ marginTop: '0.6rem' }}>Consent is collected separately for marketing and non-marketing messages where applicable.</p>

            <SubHead>Message Frequency</SubHead>
            <p>Message frequency varies but typically does not exceed:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>2–5 messages per application or inquiry</Li>
              <Li>Up to 4 recruiting or informational messages per month</Li>
            </ul>

            <SubHead>Standard SMS Disclosures</SubHead>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Message and data rates may apply</Li>
              <Li>You may opt out at any time by replying <strong>STOP</strong></Li>
              <Li>For assistance, reply <strong>HELP</strong> or contact us at <a href="mailto:support@metarecruiter.com" style={{ color: C.signal }}>support@metarecruiter.com</a></Li>
            </ul>

            <SubHead>Mobile Data Protection</SubHead>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</Li>
              <Li>Text messaging originator opt-in data and consent will not be shared with any third parties, excluding aggregators and providers of the text message services.</Li>
              <Li>SMS consent is not a condition of employment or placement.</Li>
            </ul>
          </Section>

          <Section title="4. Sharing Your Information">
            <p>We may share your information only as necessary to provide our services.</p>

            <SubHead>Carrier Partners</SubHead>
            <p>With your consent, we may share your application information with transportation carriers to facilitate job opportunities.</p>

            <SubHead>Service Providers</SubHead>
            <p>We may share information with trusted vendors that help operate our business systems (such as CRM and communication platforms). These providers are required to maintain confidentiality.</p>

            <SubHead>Legal Requirements</SubHead>
            <p>We may disclose information if required by law or to protect our legal rights.</p>

            <p style={{ marginTop: '1rem', fontWeight: 600, color: C.ink }}>We do not sell your personal information.</p>

            <p style={{ marginTop: '0.75rem' }}>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the text message services.</p>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain personal information only as long as necessary to fulfill the purposes described in this policy or as required by law.</p>
            <p style={{ marginTop: '0.75rem' }}>Application data is typically retained for up to 24 months.</p>
            <p style={{ marginTop: '0.75rem' }}>You may request deletion of your data at any time by contacting us.</p>
          </Section>

          <Section title="6. Your Privacy Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Access your personal information</Li>
              <Li>Request corrections</Li>
              <Li>Request deletion</Li>
              <Li>Opt out of marketing communications</Li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>To exercise your rights, contact:{' '}
              <a href="mailto:support@metarecruiter.com" style={{ color: C.signal }}>support@metarecruiter.com</a>
            </p>
          </Section>

          <Section title="7. Cookies & Tracking Technologies">
            <p>We may use cookies and similar technologies to improve website functionality and analyze traffic.</p>
            <p style={{ marginTop: '0.75rem' }}>You can disable cookies in your browser settings, though some features of the Site may not function properly.</p>
          </Section>

          <Section title="8. Security">
            <p>We implement reasonable safeguards to protect your personal information. However, no method of transmission over the Internet is completely secure.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>Our services are intended for individuals 18 years of age or older. We do not knowingly collect personal information from individuals under 18.</p>
          </Section>

          <Section title="10. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.</p>
            <p style={{ marginTop: '0.75rem' }}>Your continued use of the Site constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="11. Contact Information">
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
