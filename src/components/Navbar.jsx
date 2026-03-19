import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#professional', label: 'Professional' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'professional', 'projects', 'resume']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.15, rootMargin: '-56px 0px 0px 0px' }
      )
      obs.observe(el)
      return obs
    })

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observers.forEach(o => o?.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function handleNav(href) {
    scrollTo(href.replace('#', ''))
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40"
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: scrolled ? 'rgba(13,13,13,0.95)' : 'rgba(13,13,13,0.75)',
          borderBottom: '1px solid #1f2e1f',
          transition: 'background 0.3s ease',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 font-pixel hover:text-green-neon transition-colors"
            style={{ fontSize: '10px', color: '#00ff88' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ color: '#5a7a5a' }}>&gt;</span>
            <Terminal size={14} />
            <span>dev.portfolio</span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={cn(
                    'relative text-sm font-mono transition-colors pb-0.5',
                    isActive ? 'text-green-bright' : 'text-text-muted hover:text-text-primary'
                  )}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5"
                      style={{ background: '#00ff88' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden text-text-muted hover:text-green-bright transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute top-14 left-0 right-0 border-b border-border-green overflow-hidden"
              style={{ background: 'rgba(13,13,13,0.97)' }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              {NAV_LINKS.map(({ href, label }, i) => {
                const id = href.replace('#', '')
                return (
                  <motion.button
                    key={href}
                    onClick={() => handleNav(href)}
                    className={cn(
                      'block w-full text-left px-6 py-4 text-sm font-mono border-b border-border-green transition-colors',
                      active === id ? 'text-green-bright' : 'text-text-muted'
                    )}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 25 }}
                    whileTap={{ x: 4 }}
                  >
                    <span className="text-green-dim mr-2">›</span>
                    {label}
                  </motion.button>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
