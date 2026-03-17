import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Gallery.css'

// Reuse existing images for demonstration
import img1 from '../assets/20250617114309svb6u.png'
import img2 from '../assets/20250617114359yw9k2.png'
import img3 from '../assets/20250617133117n6p39.png'

const Gallery: React.FC = () => {
  const { t } = useLanguage()

  const items = [
    { id: 1, img: img1, title: 'Smile Transformation 1' },
    { id: 2, img: img2, title: 'Orthodontic Results' },
    { id: 3, img: img3, title: 'Implant Success' },
  ]

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">{t('nav.gallery')}</h2>
        <div className="gallery-grid">
          {items.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
