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
        <p className="font-sans mt-1" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>Last Updated: March 10, 2026</p>
      </div>

      {/* Body */}
      <section className="section-pad">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Intro */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem', marginBottom: '0.75rem' }}>
              MetaRecruiter LLC ("MetaRecruiter," "we," "us," or "our") operates the website{' '}
              <a href="https://metarecruiter.com" style={{ color: C.signal }}>https://metarecruiter.com</a>{' '}
              (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or submit information through our forms.
            </p>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem', marginBottom: '0.75rem' }}>
              This Privacy Policy should be read together with our{' '}
              <a href="/terms-of-service" style={{ color: C.signal }}>Terms of Service</a>,
              which govern your use of our Site and services.
            </p>
            <p className="font-sans" style={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem' }}>
              By using our Site, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          <Section title="1. Information We Collect">
            <p>We may collect the following categories of personal information when you interact with our website or services.</p>

            <SubHead>Contact Information</SubHead>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>First name</Li>
              <Li>Last name</Li>
              <Li>Email address</Li>
              <Li>Phone number</Li>
            </ul>
            <p style={{ marginTop: '0.6rem' }}>This information may be collected through contact forms, driver application forms, or other communication channels.</p>

            <SubHead>Professional Information</SubHead>
            <p>Information submitted through driver or owner-operator applications may include:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>CDL license status</Li>
              <Li>Driving history</Li>
              <Li>Employment preferences</Li>
              <Li>Owner-operator details</Li>
              <Li>Work eligibility information</Li>
            </ul>

            <SubHead>Usage Data</SubHead>
            <p>We may automatically collect certain information including:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>IP address</Li>
              <Li>Browser type</Li>
              <Li>Device information</Li>
              <Li>Pages visited</Li>
              <Li>Time spent on pages</Li>
              <Li>Referring website addresses</Li>
            </ul>

            <SubHead>Communications</SubHead>
            <p>We may retain records of communications you send to us, including emails, text messages, or form submissions.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We may use the information we collect to:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Process and evaluate driver or owner-operator applications</Li>
              <Li>Match qualified drivers with carrier partners</Li>
              <Li>Respond to inquiries and provide customer support</Li>
              <Li>Send application updates or recruiting communications</Li>
              <Li>Send marketing communications (only with explicit consent)</Li>
              <Li>Improve and operate our website and recruiting services</Li>
              <Li>Comply with legal obligations</Li>
            </ul>
          </Section>

          <Section title="3. SMS Text Message Communications">
            <p>By providing your phone number through forms on our website and checking the applicable consent checkbox, you agree to receive SMS messages from <strong>MetaRecruiter LLC DBA MetaRecruiter</strong>.</p>
            <p style={{ marginTop: '0.75rem' }}>These messages may include:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Driver application confirmations</Li>
              <Li>Recruiting follow-ups</Li>
              <Li>Appointment scheduling</Li>
              <Li>Recruiting opportunities</Li>
              <Li>Service-related notifications</Li>
            </ul>

            <SubHead>Message Frequency</SubHead>
            <p>Message frequency varies but typically does not exceed:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>2–5 messages per application or recruiting inquiry</Li>
              <Li>Up to 4 informational or recruiting messages per month</Li>
            </ul>

            <SubHead>Standard SMS Disclosures</SubHead>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Message and data rates may apply</Li>
              <Li>You may opt out at any time by replying <strong>STOP</strong></Li>
              <Li>For assistance, reply <strong>HELP</strong> or contact us at <a href="mailto:support@metarecruiter.com" style={{ color: C.signal }}>support@metarecruiter.com</a></Li>
            </ul>

            <SubHead>Mobile Data Protection</SubHead>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Mobile information will not be shared, sold, rented, or transferred to third parties or affiliates for marketing or promotional purposes.</Li>
              <Li>SMS consent is not a condition of employment or placement.</Li>
            </ul>
          </Section>

          <Section title="4. Sharing Your Information">
            <p>We may share your information with the following parties when necessary to provide services:</p>

            <SubHead>Carrier Partners</SubHead>
            <p>With your consent, we may share application information with transportation carriers to facilitate driver placement opportunities.</p>

            <SubHead>Service Providers</SubHead>
            <p>We may share information with trusted service providers who help operate our business systems, including CRM and communication platforms (such as GoHighLevel). These providers are required to maintain confidentiality.</p>

            <SubHead>Legal Requirements</SubHead>
            <p>We may disclose information if required by law, regulation, legal process, or to protect the rights and safety of MetaRecruiter.</p>

            <p style={{ marginTop: '1rem', fontWeight: 600, color: C.ink }}>We do not sell your personal information to third parties.</p>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain personal information only as long as necessary to fulfill the purposes described in this policy or as required by law.</p>
            <p style={{ marginTop: '0.75rem' }}>Driver or owner-operator application data is typically retained for up to 24 months unless a longer retention period is required by law.</p>
            <p style={{ marginTop: '0.75rem' }}>You may request deletion of your data at any time by contacting us.</p>
          </Section>

          <Section title="6. Your Privacy Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Li>Access personal information we hold about you</Li>
              <Li>Request correction of inaccurate information</Li>
              <Li>Request deletion of your personal data</Li>
              <Li>Opt out of marketing communications</Li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>To exercise these rights, please contact us at:{' '}
              <a href="mailto:support@metarecruiter.com" style={{ color: C.signal }}>support@metarecruiter.com</a>
            </p>
          </Section>

          <Section title="7. Cookies & Tracking Technologies">
            <p>Our Site may use cookies and similar tracking technologies to improve website functionality and analyze website traffic.</p>
            <p style={{ marginTop: '0.75rem' }}>You can instruct your browser to refuse cookies or alert you when cookies are being used. However, some features of the Site may not function properly without cookies.</p>
          </Section>

          <Section title="8. Security">
            <p>We implement reasonable technical and organizational measures designed to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>Our services are intended for individuals 18 years of age or older. We do not knowingly collect personal information from individuals under 18.</p>
          </Section>

          <Section title="10. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time. When updates occur, we will post the revised policy on this page with an updated effective date.</p>
            <p style={{ marginTop: '0.75rem' }}>Your continued use of the Site after changes constitutes acceptance of the updated policy.</p>
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
