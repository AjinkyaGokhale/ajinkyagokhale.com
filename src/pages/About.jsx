import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import TerminalCard from '../components/TerminalCard'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

function SkillBar({ label, pct, delay = 0 }) {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const timer = setTimeout(() => { el.style.width = `${pct}%` }, delay + 400)
    return () => clearTimeout(timer)
  }, [pct, delay])

  return (
    <div className="space-y-1">
      <div className="flex justify-between font-mono text-xs gap-2">
        <span className="text-text-primary leading-snug">{label}</span>
        <span className="text-green-bright flex-shrink-0">{pct}%</span>
      </div>
      <div className="h-2 rounded-sm overflow-hidden" style={{ background: '#1a2e1a' }}>
        <div
          ref={barRef}
          className="h-full pixel-bar-fill rounded-sm"
          style={{ width: 0, transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms` }}
        />
      </div>
    </div>
  )
}

function LearningCerts({ certs, title }) {
  const [expanded, setExpanded] = useState(false)
  if (!certs || certs.length === 0) return null

  const linkedinCerts = certs.filter(c => c.issuer === 'LinkedIn')
  const otherCerts = certs.filter(c => c.issuer !== 'LinkedIn')

  return (
    <div className="mt-4 pt-4" style={{ borderTop: '1px solid #2a2a2a' }}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-primary transition-colors w-full text-left"
      >
        <span style={{ color: '#00ff88' }}>{expanded ? '▼' : '▶'}</span>
        <span>{title}</span>
        <span className="ml-auto px-1.5 py-0.5 rounded text-xs font-mono"
              style={{ background: '#1a1a2e', border: '1px solid #2d2d6a', color: '#8888ff' }}>
          {certs.length}
        </span>
      </button>
      {expanded && (
        <div className="mt-3 space-y-2">
          {linkedinCerts.length > 0 && (
            <div>
              <p className="font-mono text-xs text-text-muted mb-2 flex items-center gap-2">
                <span style={{ color: '#0a66c2' }}>■</span> LinkedIn Learning
              </p>
              <div className="flex flex-wrap gap-1.5">
                {linkedinCerts.map(c => (
                  <span key={c.name} className="px-2 py-1 rounded font-mono text-xs"
                        style={{ background: '#1a1a2e', border: '1px solid #2d2d4a', color: '#aab' }}>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          {otherCerts.length > 0 && (
            <div className="mt-2">
              <p className="font-mono text-xs text-text-muted mb-2 flex items-center gap-2">
                <span style={{ color: '#a435f0' }}>■</span> Udemy
              </p>
              <div className="flex flex-wrap gap-1.5">
                {otherCerts.map(c => (
                  <span key={c.name} className="px-2 py-1 rounded font-mono text-xs"
                        style={{ background: '#1a1a2e', border: '1px solid #2d2d4a', color: '#aab' }}>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const sectionHeader = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  const { lang } = useLanguage()
  const t = translations[lang].about

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">

        <motion.div className="space-y-1"
          variants={sectionHeader} initial="hidden"
          whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <p className="font-mono text-xs text-green-dim truncate">
            <span className="text-text-muted">~/portfolio/about</span>{' '}
            <span className="text-green-bright">$</span> cat about.md
          </p>
          <h1 className="pixel-heading text-green-bright">{t.pageTitle}</h1>
        </motion.div>

        <TerminalCard title="cat about.md" delay={0}>
          <div className="font-mono text-xs sm:text-sm space-y-4">
            <div>
              <span className="text-green-bright"># </span>
              <span className="text-text-primary font-semibold">{t.name}</span>
            </div>
            <div>
              <p className="text-green-dim text-xs mb-1">{t.locationLabel}</p>
              <p className="text-text-muted">{t.location}</p>
            </div>
            <div>
              <p className="text-green-dim text-xs mb-1">{t.roleLabel}</p>
              <p className="text-text-muted leading-relaxed">{t.roleText}</p>
            </div>
            <div>
              <p className="text-green-dim text-xs mb-1">{t.backgroundLabel}</p>
              <p className="text-text-muted leading-relaxed">{t.backgroundText}</p>
            </div>
            <div>
              <p className="text-green-dim text-xs mb-1">{t.currentlyLabel}</p>
              <div className="text-text-muted space-y-1">
                {t.currently.map((item, i) => (
                  <p key={i}>
                    <span className="text-green-bright">→</span>{' '}
                    {i === t.currently.length - 1
                      ? <span style={{ color: '#00ff88' }}>{item}</span>
                      : item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </TerminalCard>

        <TerminalCard title="skills --verbose" delay={0.08}>
          <div className="space-y-3 sm:space-y-4">
            <p className="font-mono text-xs text-green-dim">
              {t.skillMatrixInit}
            </p>
            {t.skills.map((s, i) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 120} />
            ))}
          </div>
        </TerminalCard>

        <TerminalCard title="cat certifications.json" delay={0.12}>
          <ul className="space-y-3">
            {t.certs.map((c) => (
              <li key={c.name} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-10 flex items-center justify-center rounded p-1.5"
                     style={{ background: '#1a1a1a', border: '1px solid #2d6a2d' }}>
                  <img src="/static/aws.png" alt="AWS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <p className="font-mono text-xs sm:text-sm text-text-primary font-medium leading-snug">{c.name}</p>
                  <p className="font-mono text-xs text-text-muted">{c.issuer}</p>
                </div>
                <span className="ml-auto px-2 py-0.5 rounded text-xs font-mono flex-shrink-0"
                      style={{ background: '#1a2e1a', border: '1px solid #2d6a2d', color: '#00ff88' }}>
                  {t.certified}
                </span>
              </li>
            ))}
          </ul>

          <LearningCerts certs={t.learningCerts} title={t.learningTitle} />
        </TerminalCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <TerminalCard title="locale --list" delay={0.05}>
            <ul className="font-mono text-xs sm:text-sm space-y-2.5">
              {t.langs.map(({ lang: langName, level }) => (
                <li key={langName} className="flex flex-col xs:flex-row xs:items-center gap-0.5 xs:gap-3">
                  <span className="text-green-bright w-20 flex-shrink-0">{langName}</span>
                  <span className="text-text-muted">{level}</span>
                </li>
              ))}
            </ul>
          </TerminalCard>

          <TerminalCard title="cat hobbies.txt" delay={0.1}>
            <ul className="font-mono text-xs sm:text-sm space-y-2.5">
              {t.hobbies.map((h, i) => (
                <li key={h.label} className="flex items-start gap-2">
                  <span className="text-green-bright flex-shrink-0">[{String(i).padStart(2, '0')}]</span>
                  <span>
                    <span className="text-text-primary font-medium">{h.label}</span>
                    <span className="text-text-muted"> — {h.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </TerminalCard>
        </div>

      </div>
    </section>
  )
}
