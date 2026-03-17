import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Header.css'

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Canary Dental</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#implants">{t('nav.implants')}</a></li>
            <li><a href="#ortho">{t('nav.ortho')}</a></li>
            <li><a href="#cdcp">{t('nav.cdcp')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </nav>
        <div className="lang-switcher">
          <button 
            className={language === 'en' ? 'active' : ''} 
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={language === 'zh' ? 'active' : ''} 
            onClick={() => setLanguage('zh')}
          >
            繁中
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
