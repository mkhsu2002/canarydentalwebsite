import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Specialized.css'

const Specialized: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="specialized-container">
      <section id="implants" className="spec-section">
        <div className="container">
          <h2 className="section-title">{t('nav.implants')}</h2>
          <div className="spec-content">
            <div className="spec-text">
              <h3>Missing a Tooth? Dental Implants are the Solution.</h3>
              <p>
                A dental implant is a titanium post that acts as a permanent artificial tooth root. 
                At Canary Dental Surrey, we use the **Straumann BLX System**, a world-leading 
                implant technology known for its durability and natural aesthetic.
              </p>
              <ul>
                <li><strong>Guided Bone Regeneration (GBR):</strong> To ensure enough bone support for the implant.</li>
                <li><strong>Sinus Lift:</strong> Procedures for upper jaw tooth replacement.</li>
                <li><strong>All-on-4 / All-on-6:</strong> Full arch restoration solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="ortho" className="spec-section dark">
        <div className="container">
          <h2 className="section-title">{t('nav.ortho')}</h2>
          <div className="spec-content">
            <div className="spec-text">
              <h3>Achieve Your Perfect Smile with Modern Orthodontics.</h3>
              <p>
                From traditional braces to clear aligners, we provide orthodontic solutions 
                tailored to both children and adults. Our goal is not just a straighter 
                smile, but a healthier bite and improved oral function.
              </p>
              <div className="ortho-options">
                <div className="option">
                  <h4>Invisalign®</h4>
                  <p>Clear, removable aligners for a virtually invisible treatment experience.</p>
                </div>
                <div className="option">
                  <h4>Traditional Braces</h4>
                  <p>Reliable and effective treatment, including the MBT orthodontic technique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cdcp" className="spec-section">
        <div className="container">
          <h2 className="section-title">{t('nav.cdcp')}</h2>
          <div className="spec-content">
            <div className="spec-text">
              <h3>We Support the Canadian Dental Care Plan (CDCP).</h3>
              <p>
                Canary Dental Surrey is proud to participate in the CDCP to help make 
                dental care more accessible to Canadians. If you are eligible for the 
                program, our team is ready to guide you through the process and ensure 
                you receive the care you need.
              </p>
              <div className="cdcp-info">
                <p><strong>Now Accepting New Patients under CDCP!</strong></p>
                <p>Please bring your CDCP identification card during your first visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <h2 className="section-title">Common Questions (FAQ)</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Is dental implant surgery painful?</h4>
              <p>Most patients experience minimal discomfort during and after the procedure, often managed with local anesthesia and over-the-counter pain relief.</p>
            </div>
            <div className="faq-item">
              <h4>How long does orthodontic treatment take?</h4>
              <p>Treatment time varies depending on the complexity of the case but typically ranges from 12 to 24 months.</p>
            </div>
            <div className="faq-item">
              <h4>Do you accept insurance?</h4>
              <p>Yes, we accept most major insurance plans and the Canadian Dental Care Plan (CDCP).</p>
            </div>
            <div className="faq-item">
              <h4>Is Dr. Alex Cheng's clinic open on Saturdays?</h4>
              <p>Yes, we are open on Saturdays from 9:30 AM to 6:00 PM for your convenience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Specialized
