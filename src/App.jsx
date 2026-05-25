import { useEffect, useRef } from 'react'
import { Heart } from 'lucide-react'
import DotGridCanvas from './components/DotGridCanvas'
import Navbar from './components/Navbar'
import { ToastProvider } from './components/Toast'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { translations } from './i18n/translations'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Professional from './pages/Professional'

const seoMeta = {
  en: {
    title: 'Ajinkya Gokhale — Software Engineer | IoT, Cloud & Systems | Stuttgart',
    description: 'Ajinkya Gokhale is a software engineer specialising in IoT infrastructure, AWS cloud architecture, embedded systems, and full-stack development. Founding engineer at Nineti GmbH. Based in Stuttgart, Germany. Available full-time from Oct 2026.',
    ogDescription: 'Founding engineer at Nineti GmbH. I build IoT infrastructure at scale — embedded firmware, distributed systems, and cloud architecture on AWS. Based in Stuttgart, Germany.',
    ariaLabels: { home: 'Home', about: 'About', professional: 'Professional Experience', projects: 'Projects' },
  },
  de: {
    title: 'Ajinkya Gokhale — Softwareentwickler | IoT, Cloud & Systeme | Stuttgart',
    description: 'Ajinkya Gokhale ist Softwareentwickler mit Schwerpunkt IoT-Infrastruktur, AWS-Cloud-Architektur, eingebettete Systeme und Full-Stack-Entwicklung. Gründungsingenieur bei Nineti GmbH. Standort: Stuttgart, Deutschland. Verfügbar in Vollzeit ab Oktober 2026.',
    ogDescription: 'Gründungsingenieur bei Nineti GmbH. IoT-Infrastruktur im großen Maßstab — eingebettete Firmware, verteilte Systeme und Cloud-Architektur auf AWS. Stuttgart, Deutschland.',
    ariaLabels: { home: 'Startseite', about: 'Über mich', professional: 'Berufserfahrung', projects: 'Projekte' },
  },
}

function AppInner() {
  const consoleFired = useRef(false)
  const { lang } = useLanguage()
  const t = translations[lang].footer
  const seo = seoMeta[lang]

  // Dynamic SEO: update title + meta description on language change
  useEffect(() => {
    document.title = seo.title
    document.querySelector('meta[name="description"]:not([lang])')?.setAttribute('content', seo.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.ogDescription)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', seo.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', seo.ogDescription)
  }, [lang, seo])

  useEffect(() => {
    if (consoleFired.current) return
    consoleFired.current = true
    console.log(
      '%c Hey, I see you snooping around. %c',
      'background: #00ff88; color: #0d0d0d; font-size: 14px; font-weight: bold; padding: 6px 12px; border-radius: 4px;',
      ''
    )
    console.log(
      '%c Nice try, but the secret sauce is in the code.\n Hire me and I\'ll explain it over coffee.',
      'color: #00ff88; font-family: monospace; font-size: 12px; line-height: 1.8;'
    )
    console.log(
      '%c -> github.com/AjinkyaGokhale',
      'color: #2d6a2d; font-family: monospace; font-size: 11px;'
    )
  }, [])

  // Redirect to PDF when user tries to print — gives a clean CV print
  useEffect(() => {
    const handler = () => window.location.replace('/static/Andy-cv.pdf')
    window.addEventListener('beforeprint', handler)
    return () => window.removeEventListener('beforeprint', handler)
  }, [])

  return (
    <ToastProvider>
      <DotGridCanvas />
      <Navbar />
      <main className="relative z-10" role="main" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Ajinkya Gokhale" />
        <meta itemProp="jobTitle" content="Software Engineer" />
        <meta itemProp="url" content="https://ajinkyagokhale.com" />
        <section id="home" aria-label={seo.ariaLabels.home}><Hero /></section>
        <section id="about" aria-label={seo.ariaLabels.about}><About /></section>
        <section id="professional" aria-label={seo.ariaLabels.professional}><Professional /></section>
        <section id="projects" aria-label={seo.ariaLabels.projects}><Projects /></section>
      </main>
      <footer className="relative z-10 liquid-glass" style={{ borderRadius: 0 }} role="contentinfo">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs" style={{ color: '#5a8a6a' }}>
            {t.made} <Heart size={11} fill="#ff4d6d" style={{ color: '#ff4d6d', display: 'inline', verticalAlign: 'middle', margin: '0 3px' }} /> {t.in}
          </p>
          <p className="font-mono text-xs" style={{ color: '#4a7a5a' }}>
            © {new Date().getFullYear()} Ajinkya Gokhale — {t.rights}
          </p>
        </div>
      </footer>
    </ToastProvider>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  )
}
