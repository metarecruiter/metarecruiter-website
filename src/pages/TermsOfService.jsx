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
          <div style={{ marginBottom: '2.5rem' }} className="font-sans" style2={{ color: C.smoke, lineHeight: 1.85, fontSize: '0.975rem' }}>
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
              You should also review our{' '}
              <a href="/privacy-policy" style={{ color: C.signal }}>Privacy Policy</a>,
              which explains how we collect and use personal information.
            </p>
          </div>

          <Section title="1. Description of Services">
            <p>MetaRecruiter LLC is a CDL Class A driver recruiting and placement company.</p>
            <p style={{ marginTop: '0.75rem' }}>Our services include:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Connecting CDL Class A drivers with carrier employers</Li>
              <Li>Connecting owner-operators with carrier load opportunities</Li>
              <Li>Providing driver recruiting services to transportation carriers</Li>
              <Li>Facilitating application, screening, and communication processes between drivers and carriers</Li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>MetaRecruiter acts as an intermediary between drivers/owner-operators and transportation carriers.</p>
          </Section>

          <Section title="2. Eligibility">
            <p>You must be at least 18 years of age to use our services.</p>
            <p style={{ marginTop: '0.75rem' }}>By submitting an application or inquiry through our Site, you represent that:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>You are legally eligible to work in the United States where applicable</Li>
              <Li>All information you provide is accurate and truthful</Li>
              <Li>You are submitting the information voluntarily</Li>
            </ul>
          </Section>

          <Section title="3. Driver & Owner-Operator Applications">
            <p>Submitting an application through MetaRecruiter does not guarantee job placement or employment.</p>
            <p style={{ marginTop: '0.75rem' }}>MetaRecruiter provides recruiting services and connects drivers or owner-operators with carriers. Final hiring decisions are made solely by the carrier companies.</p>
            <p style={{ marginTop: '0.75rem' }}>You agree that:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>All application information must be accurate and complete</Li>
              <Li>MetaRecruiter may reject or remove applications that do not meet basic qualifications</Li>
              <Li>Placement timelines vary depending on carrier availability and applicant qualifications</Li>
            </ul>
          </Section>

          <Section title="4. Carrier Recruiting Services">
            <p>Transportation carriers using MetaRecruiter's recruiting services agree that:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Service fees are governed by separate written agreements</Li>
              <Li>MetaRecruiter provides candidate information in good faith</Li>
              <Li>MetaRecruiter does not guarantee driver performance or conduct</Li>
              <Li>Carriers remain responsible for all background checks, compliance, and onboarding in accordance with FMCSA regulations</Li>
            </ul>
          </Section>

          <Section title="5. SMS Communications & Consent">
            <p>By submitting your phone number through forms on our website and checking the applicable consent checkbox, you agree to receive SMS messages from <strong>MetaRecruiter LLC DBA MetaRecruiter</strong>.</p>
            <p style={{ marginTop: '0.75rem' }}>Messages may include:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Application confirmations</Li>
              <Li>Driver recruiting updates</Li>
              <Li>Follow-ups regarding driver or owner-operator opportunities</Li>
              <Li>Appointment reminders or recruiting updates</Li>
              <Li>Service-related notifications</Li>
            </ul>

            <p style={{ marginTop: '1rem', fontWeight: 600, color: C.ink }}>Message Frequency</p>
            <p style={{ marginTop: '0.4rem' }}>Message frequency varies but typically does not exceed:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>2–5 messages per inquiry or application</Li>
              <Li>Up to 4 informational or recruiting messages per month</Li>
            </ul>

            <p style={{ marginTop: '1rem', fontWeight: 600, color: C.ink }}>Standard SMS Disclosures</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Message and data rates may apply</Li>
              <Li>You may opt out at any time by replying <strong>STOP</strong></Li>
              <Li>For assistance, reply <strong>HELP</strong> or contact us at <a href="mailto:support@metarecruiter.com" style={{ color: C.signal }}>support@metarecruiter.com</a></Li>
            </ul>

            <p style={{ marginTop: '1rem', fontWeight: 600, color: C.ink }}>Carrier Liability Disclaimer</p>
            <p style={{ marginTop: '0.4rem' }}>Mobile carriers are not liable for delayed or undelivered messages.</p>
          </Section>

          <Section title="6. Fees & Payments">
            <p>Driver and owner-operator applications are free of charge.</p>
            <p style={{ marginTop: '0.75rem' }}>Carrier recruiting services may be subject to fees outlined in a separate service agreement.</p>
            <p style={{ marginTop: '0.75rem' }}>Unless otherwise stated in writing, all recruiting service fees are non-refundable.</p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>All content on this Site, including text, graphics, logos, designs, and software, is the property of MetaRecruiter LLC and is protected by intellectual property laws.</p>
            <p style={{ marginTop: '0.75rem' }}>You may not reproduce, distribute, or create derivative works from this content without written permission from MetaRecruiter.</p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>The Site and services are provided "as is" and "as available."</p>
            <p style={{ marginTop: '0.75rem' }}>MetaRecruiter makes no warranties regarding:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Website availability</Li>
              <Li>Error-free operation</Li>
              <Li>Employment or placement outcomes</Li>
            </ul>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>To the fullest extent permitted by law, MetaRecruiter LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our Site or services.</p>
            <p style={{ marginTop: '0.75rem' }}>This includes but is not limited to:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Loss of employment opportunity</Li>
              <Li>Lost revenue or profits</Li>
              <Li>Data loss</Li>
              <Li>Service interruptions</Li>
            </ul>
          </Section>

          <Section title="10. Indemnification">
            <p>You agree to indemnify and hold harmless MetaRecruiter LLC, its employees, officers, and agents from any claims, damages, liabilities, or expenses arising from:</p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Li>Your use of the Site</Li>
              <Li>Your violation of these Terms</Li>
              <Li>Any false information submitted through our services</Li>
            </ul>
          </Section>

          <Section title="11. Third-Party Services">
            <p>MetaRecruiter may link to or interact with third-party services, including transportation carriers and job platforms.</p>
            <p style={{ marginTop: '0.75rem' }}>We are not responsible for the policies, actions, or services of third-party organizations.</p>
          </Section>

          <Section title="12. Governing Law">
            <p>These Terms shall be governed by and interpreted under the laws of the State of Maryland.</p>
            <p style={{ marginTop: '0.75rem' }}>Any disputes arising under these Terms shall be resolved in the courts located in Harford County, Maryland.</p>
          </Section>

          <Section title="13. Contact Information">
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
