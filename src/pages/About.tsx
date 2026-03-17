import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './About.css'
import aboutImg from '../assets/about_pic.png'

const About: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div id="about" className="about-page">
      <section className="about-hero">
        <div className="container">
          <h2 className="section-title">{t('nav.about')}</h2>
          <div className="about-layout">
            <div className="about-text">
              <h3>Meet Dr. Alex Cheng</h3>
              <p>
                Dr. Alex Cheng graduated from New York University (NYU) College of Dentistry. 
                Born in Taiwan and raised in Vancouver, Dr. Cheng combines international education 
                with local care. He is fluent in both English and Mandarin, enabling him to 
                provide personalized care to the diverse community of Surrey.
              </p>
              <p>
                At Canary Dental Surrey, our philosophy is simple: **Precision care—all in one place.** 
                We leverage the latest technology and a patient-first approach to ensure every 
                visit is comfortable and effective.
              </p>
              <div className="highlights">
                <div className="highlight-item">
                  <strong>One-Stop Service</strong>
                  <span>From cleaning to implants</span>
                </div>
                <div className="highlight-item">
                  <strong>Bilingual Care</strong>
                  <span>English & Mandarin</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={aboutImg} alt="Patient Care at Canary Dental" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
