import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

const Contact: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div id="contact" className="contact-page">
      <div className="container">
        <h2 className="section-title">{t('nav.contact')}</h2>
        <div className="contact-layout">
          <div className="contact-info-cards">
            <div className="info-card">
              <h4>Phone</h4>
              <p>(604) 496-0392</p>
            </div>
            <div className="info-card">
              <h4>Email</h4>
              <p>canary.dental.surrey@gmail.com</p>
            </div>
            <div className="info-card">
              <h4>Address</h4>
              <p>14920 104 Ave, Surrey, BC V3R 1M7</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>

        <div className="map-container">
          {/* Placeholder for Google Maps iframe */}
          <div className="map-placeholder">
            <p>Google Maps Integration for 14920 104 Ave, Surrey, BC</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.3361834241513!2d-122.81057842352723!3d49.19133887133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d79679696969%3A0x6969696969696969!2s14920%20104%20Ave%2C%20Surrey%2C%20BC%20V3R%201M7%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '16px' }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
