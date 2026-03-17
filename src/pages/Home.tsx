import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Home.css'
import heroImg from '../assets/doctor alex.jpg'

const Home: React.FC = () => {
  const { t } = useLanguage()

  const services = [
    { id: 'exam', title: t('services.exam.title'), desc: t('services.exam.desc') },
    { id: 'restorative', title: t('services.restorative.title'), desc: t('services.restorative.desc') },
    { id: 'cosmetic', title: t('services.cosmetic.title'), desc: t('services.cosmetic.desc') },
    { id: 'implants', title: t('services.implants.title'), desc: t('services.implants.desc') },
    { id: 'ortho', title: t('services.ortho.title'), desc: t('services.ortho.desc') },
    { id: 'surgery', title: t('services.surgery.title'), desc: t('services.surgery.desc') },
  ]

  return (
    <div id="home" className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="title-block">{t('hero.title1')}</span>
            <span className="title-block accent">{t('hero.title2')}</span>
          </h1>
          <p>{t('hero.subtitle')}</p>
          <button className="cta-button">{t('hero.cta')}</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Dr. Alex Cheng" />
        </div>
      </section>

      <section id="services" className="services-section">
        <h2 className="section-title">{t('services.title')}</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={`#${service.id}`} className="service-link">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-card">
          <div className="promo-badge">Specials</div>
          <h2>$250 New Patient Special</h2>
          <p>Comprehensive exam, X-rays, and standard cleaning for new patients.</p>
          <button className="promo-button">Claim Offer</button>
        </div>
      </section>
    </div>
  )
}

export default Home
