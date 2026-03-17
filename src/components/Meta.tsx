import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/LanguageContext'

interface MetaProps {
  title?: string
  description?: string
  keywords?: string
}

const Meta: React.FC<MetaProps> = ({ title, description, keywords }) => {
  const { language } = useLanguage()
  const defaultTitle = "Canary Dental Surrey | Precision Care All in One Place"
  const defaultDesc = "Canary Dental Surrey provides comprehensive dental care in Surrey, BC. Led by Dr. Alex Cheng, we offer implants, orthodontics, and general dentistry with bilingual support."
  const defaultKeywords = "dentist Surrey, dental implants Surrey, orthodontist Surrey, Dr. Alex Cheng, BCCOHP, family dentistry Surrey, 104 Ave dentist"

  return (
    <Helmet>
      <html lang={language === 'zh' ? 'zh-TW' : 'en'} />
      <title>{title ? `${title} | Canary Dental Surrey` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      
      {/* JSON-LD Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Canary Dental Surrey",
          "image": "https://www.canarydentalsurrey.com/logo.png",
          "@id": "https://www.canarydentalsurrey.com",
          "url": "https://www.canarydentalsurrey.com",
          "telephone": "+1-604-496-0392",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "14920 104 Ave",
            "addressLocality": "Surrey",
            "addressRegion": "BC",
            "postalCode": "V3R 1M7",
            "addressCountry": "CA"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Saturday"],
              "opens": "09:30",
              "closes": "18:00"
            }
          ]
        })}
      </script>
    </Helmet>
  )
}

export default Meta
