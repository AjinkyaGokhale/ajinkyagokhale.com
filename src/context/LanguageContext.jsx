import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

function detectLanguage() {
  const stored = localStorage.getItem('portfolio-lang')
  if (stored === 'en' || stored === 'de') return stored
  const browserLang = (navigator.language || navigator.languages?.[0] || 'en').toLowerCase()
  return browserLang.startsWith('de') ? 'de' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage)

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang(l => l === 'en' ? 'de' : 'en')

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
