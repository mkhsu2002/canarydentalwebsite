import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import Meta from './components/Meta'
import Home from './pages/Home'
import About from './pages/About'
import Specialized from './pages/Specialized'
import Contact from './pages/Contact'
import Gallery from './components/Gallery'

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Meta />
        <Layout>
          <Home />
          <About />
          <Specialized />
          <Gallery />
          <Contact />
        </Layout>
      </LanguageProvider>
    </HelmetProvider>
  )
}

export default App
