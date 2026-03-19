import { useEffect, useRef } from 'react'
import { Heart } from 'lucide-react'
import DotGridCanvas from './components/DotGridCanvas'
import Navbar from './components/Navbar'
import { ToastProvider } from './components/Toast'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Professional from './pages/Professional'
import Resume from './pages/Resume'

export default function App() {
  const consoleFired = useRef(false)
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
      <main className="relative z-10">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="professional"><Professional /></section>
        <section id="projects"><Projects /></section>
        <section id="resume"><Resume /></section>
      </main>
      <footer className="relative z-10 liquid-glass" style={{ borderRadius: 0 }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs" style={{ color: '#5a8a6a' }}>
            Made with <Heart size={11} fill="#ff4d6d" style={{ color: '#ff4d6d', display: 'inline', verticalAlign: 'middle', margin: '0 3px' }} /> in Stuttgart
          </p>
          <p className="font-mono text-xs" style={{ color: '#4a7a5a' }}>
            © {new Date().getFullYear()} Ajinkya Gokhale — All rights reserved
          </p>
        </div>
      </footer>
    </ToastProvider>
  )
}
