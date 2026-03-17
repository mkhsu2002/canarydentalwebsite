import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Canary Dental Surrey</h3>
          <p>{t('hero.subtitle')}</p>
        </div>
        <div className="footer-section">
          <h3>{t('footer.location')}</h3>
          <p>14920 104 Ave, Surrey, BC V3R 1M7</p>
          <p>Phone: (604) 496-0392</p>
        </div>
        <div className="footer-section">
          <h3>{t('footer.hours')}</h3>
          <p>Tue/Wed/Thu/Sat: 9:30 AM – 6:00 PM</p>
          <p>Mon/Fri/Sun: Closed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Canary Dental Surrey. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}

export default Footer
