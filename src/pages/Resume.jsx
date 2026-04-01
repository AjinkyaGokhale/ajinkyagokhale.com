import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ExternalLink, Mail, Phone, Linkedin, Github, MapPin, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const RESUME_PDF = {
  en: '/static/Andy-Resume.pdf',
  de: '/static/Andy-Resume-DE.pdf',
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, delay },
})

function DocSection({ title, children }) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-3">
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: 700,
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#1a1a1a',
        }}>
          {title}
        </span>
        <div className="flex-1 h-px" style={{ background: '#1a1a1a' }} />
      </div>
      {children}
    </div>
  )
}

function Entry({ period, title, subtitle, location, bullets, tags }) {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-0.5">
        <div>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: '13px', color: '#111' }}>{title}</p>
          {subtitle && <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#2d6a2d' }}>{subtitle}</p>}
        </div>
        <div className="text-right flex-shrink-0">
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#555' }}>{period}</p>
          {location && <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#777' }}>{location}</p>}
        </div>
      </div>
      {bullets && (
        <ul className="space-y-0.5 pl-1 pt-0.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2"
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#444' }}>
              <span style={{ color: '#2d6a2d', flexShrink: 0, marginTop: '2px' }}>•</span>
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )}
      {tags && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map(t => (
            <span key={t} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              padding: '1px 6px',
              borderRadius: '3px',
              background: '#f0f7f0',
              border: '1px solid #c8dfc8',
              color: '#2d6a2d',
            }}>{t}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Resume() {
  const [open, setOpen] = useState(() => window.innerWidth >= 640)
  const { lang } = useLanguage()
  const t = translations[lang].resume

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-5">

        {/* Page header */}
        <motion.div {...fadeUp(0)} className="space-y-1">
          <p className="font-mono text-xs text-green-dim truncate">
            <span className="text-text-muted">~/portfolio</span>{' '}
            <span className="text-green-bright">$</span> cat resume.pdf
          </p>
          <h1 className="pixel-heading text-green-bright">{t.pageTitle}</h1>
        </motion.div>

        {/* Toolbar */}
        <motion.div {...fadeUp(0.08)} className="flex flex-wrap gap-2">
          <motion.a href={RESUME_PDF[lang]} download="Ajinkya_Gokhale_CV.pdf"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <button className="btn-glow flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs font-medium"
              style={{ background: '#00ff88', color: '#0d0d0d', border: '1px solid #00ff88' }}>
              <Download size={13} /> {t.downloadBtn}
            </button>
          </motion.a>
          <motion.a href={RESUME_PDF[lang]} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs font-medium transition-colors hover:border-green-bright hover:text-green-bright"
              style={{ background: 'transparent', color: '#d4f0d4', border: '1px solid #2d6a2d' }}>
              <ExternalLink size={13} /> {t.openBtn}
            </button>
          </motion.a>
        </motion.div>

        {/* Paper document */}
        <motion.div
          {...fadeUp(0.14)}
          className="liquid-glass"
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            imageRendering: 'pixelated',
          }}
        >
          {/* Slim top bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 cursor-pointer select-none"
               style={{ background: '#111', borderBottom: open ? '2px solid #2d6a2d' : 'none' }}
               onClick={() => setOpen(v => !v)}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-3 font-mono text-xs" style={{ color: '#666' }}>ajinkya_gokhale_cv.pdf</span>
            <div className="ml-auto flex items-center gap-1.5" onClick={e => e.stopPropagation()}>
              <a href={RESUME_PDF[lang]} download="Ajinkya_Gokhale_CV.pdf"
                 className="flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs transition-colors hover:text-white"
                 style={{ color: '#888', border: '1px solid #2a2a2a' }}>
                <Download size={11} />
                <span className="hidden sm:inline">{t.saveBtn}</span>
              </a>
              <a href={RESUME_PDF[lang]} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs transition-colors hover:text-white"
                 style={{ color: '#888', border: '1px solid #2a2a2a' }}>
                <ExternalLink size={11} />
                <span className="hidden sm:inline">{t.openShort}</span>
              </a>
              <motion.div className="p-1" animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={13} style={{ color: '#555' }} />
              </motion.div>
            </div>
          </div>

          {/* White paper */}
          <AnimatePresence initial={false}>
          {open && (
          <motion.div
            key="resume-paper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
          <div style={{ background: 'rgba(249,249,247,0.85)', padding: '2px 0', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
            <div className="resume-pixel-paper mx-auto space-y-5 px-8 sm:px-14 py-10 sm:py-12"
                 style={{ background: 'rgba(255,255,255,0.9)', maxWidth: '740px' }}>

              {/* Header */}
              <motion.div {...fadeUp(0.2)} className="space-y-2 pb-4"
                          style={{ borderBottom: '2px solid #1a1a1a' }}>
                <div>
                  <h2 style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
                    color: '#111',
                    letterSpacing: '-0.5px',
                    lineHeight: 1.1,
                  }}>
                    Ajinkya Prashant Gokhale
                  </h2>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#2d6a2d', marginTop: '4px' }}>
                    {t.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {[
                    { icon: MapPin,   text: 'Stuttgart, Germany' },
                    { icon: Phone,    text: '+49 15155269182' },
                    { icon: Mail,     text: 'st189203@stud.uni-stuttgart.de' },
                    { icon: Linkedin, text: 'linkedin.com/in/gokhaleajinkya' },
                    { icon: Github,   text: 'github.com/AjinkyaGokhale' },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text} className="flex items-center gap-1"
                          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#555' }}>
                      <Icon size={9} style={{ color: '#888', flexShrink: 0 }} />
                      {text}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div {...fadeUp(0.25)}>
                <DocSection title={t.sections.education}>
                  <div className="space-y-2.5">
                    {t.education.map((e) => (
                      <Entry key={e.title} period={e.period} title={e.title} subtitle={e.subtitle} location={e.location} />
                    ))}
                  </div>
                </DocSection>
              </motion.div>

              {/* Experience */}
              <motion.div {...fadeUp(0.3)}>
                <DocSection title={t.sections.experience}>
                  <div className="space-y-4">
                    {t.experience.map((e) => (
                      <Entry key={e.title} period={e.period} title={e.title} subtitle={e.subtitle} location={e.location} bullets={e.bullets} tags={e.tags} />
                    ))}
                  </div>
                </DocSection>
              </motion.div>

              {/* Projects */}
              <motion.div {...fadeUp(0.35)}>
                <DocSection title={t.sections.projects}>
                  <div className="space-y-4">
                    {t.projects.map((p) => (
                      <Entry key={p.title} period={p.period} title={p.title} subtitle={p.subtitle} bullets={p.bullets} tags={p.tags} />
                    ))}
                  </div>
                </DocSection>
              </motion.div>

              {/* Certifications */}
              <motion.div {...fadeUp(0.38)}>
                <DocSection title={t.sections.certifications}>
                  <div className="flex flex-wrap gap-3">
                    {['AWS Certified AI Practitioner', 'AWS Certified Solutions Architect'].map(cert => (
                      <div key={cert} className="flex items-center gap-2 px-3 py-1.5 rounded"
                           style={{ background: '#f0f7f0', border: '1px solid #c8dfc8' }}>
                        <img src="/static/aws.png" alt="AWS" style={{ width: '26px', height: '16px', objectFit: 'contain' }} />
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#1a1a1a' }}>{cert}</span>
                        <span style={{ color: '#2d6a2d', fontSize: '11px', fontWeight: 700 }}>✓</span>
                      </div>
                    ))}
                  </div>
                </DocSection>
              </motion.div>

              {/* Skills */}
              <motion.div {...fadeUp(0.4)}>
                <DocSection title={t.sections.technicalSkills}>
                  <div className="space-y-1">
                    {t.skills.map(({ label, value }) => (
                      <div key={label} className="flex flex-col sm:flex-row gap-0.5 sm:gap-2"
                           style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}>
                        <span className="flex-shrink-0 sm:w-20 font-semibold" style={{ color: '#1a1a1a' }}>{label}</span>
                        <span style={{ color: '#555' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </DocSection>
              </motion.div>

              {/* Languages & Extras */}
              <motion.div {...fadeUp(0.42)}>
                <DocSection title={t.sections.languagesExtracurricular}>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap gap-x-5 gap-y-0.5"
                         style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#555' }}>
                      {t.langsExtra.map(([l, v]) => (
                        <span key={l}><span style={{ color: '#111', fontWeight: 600 }}>{l}:</span> {v}</span>
                      ))}
                    </div>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#555', lineHeight: 1.6 }}>
                      <span style={{ color: '#111', fontWeight: 600 }}>{t.gphReviews}</span>
                      {t.extracurricular.slice(t.gphReviews.length)}
                    </p>
                  </div>
                </DocSection>
              </motion.div>

            </div>
          </div>
          </motion.div>
          )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
