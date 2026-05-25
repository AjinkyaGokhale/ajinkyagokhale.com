import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

function TimelineEntry({ entry, index }) {
  return (
    <motion.div
      className="relative flex gap-3 sm:gap-5"
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 180, damping: 22, delay: index * 0.12 }}
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-3 h-3 rounded-sm mt-2"
          style={{ background: '#00ff88' }}
          initial={{ scale: 0, boxShadow: '0 0 0px rgba(0,255,136,0)' }}
          whileInView={{ scale: 1, boxShadow: '0 0 10px rgba(0,255,136,0.7)' }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2, type: 'spring', stiffness: 300 }}
        />
        <div className="w-px flex-1 mt-1"
             style={{ background: 'linear-gradient(to bottom, #2d6a2d, transparent)' }} />
      </div>

      <div className="flex-1 mb-6 sm:mb-8 p-4 sm:p-5 liquid-glass"
           style={{ borderLeft: '3px solid #2d6a2d', borderRadius: '16px' }}>
        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
          <span className="font-mono text-xs text-green-dim">[{entry.period}]</span>
          <span className="font-mono text-xs text-text-muted">{entry.location}</span>
        </div>
        <div className="mb-3">
          <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
            <span className="font-mono text-green-bright font-semibold text-sm">$</span>
            <span className="font-mono text-text-primary font-semibold text-sm">{entry.company}</span>
          </div>
          <span className="font-mono text-text-muted text-xs">{entry.role}</span>
        </div>
        <ul className="space-y-1.5 mb-4">
          {entry.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 font-mono text-xs text-text-muted">
              <span className="text-green-bright mt-0.5 flex-shrink-0">›</span>
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono"
              style={{ background: '#1a2e1a', border: '1px solid #2d6a2d', color: '#5a7a5a' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Professional() {
  const { lang } = useLanguage()
  const t = translations[lang].professional

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">

        <motion.div className="space-y-1"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-xs text-green-dim truncate">
            <span className="text-text-muted">~/portfolio</span>{' '}
            <span className="text-green-bright">$</span> cat experience.log
          </p>
          <h1 className="pixel-heading text-green-bright">{t.expTitle}</h1>
        </motion.div>

        <div className="pt-1">
          {t.timeline.map((entry, i) => (
            <TimelineEntry key={entry.company} entry={entry} index={i} />
          ))}
        </div>

        {/* Education */}
        <motion.div className="space-y-1 pt-2"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-xs text-green-dim truncate">
            <span className="text-text-muted">~/portfolio</span>{' '}
            <span className="text-green-bright">$</span> cat education.log
          </p>
          <h2 className="pixel-heading text-green-bright">{t.eduTitle}</h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {t.education.map((e, i) => (
            <motion.div key={e.institution}
              className="p-4 sm:p-5 liquid-glass"
              style={{ borderLeft: '3px solid #2d6a2d', borderRadius: '16px' }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 22, delay: i * 0.1 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <span className="font-mono text-xs text-green-dim">[{e.period}]</span>
                <span className="font-mono text-xs text-text-muted">{e.location}</span>
              </div>
              <div className="font-mono text-sm text-text-primary font-semibold leading-snug">{e.institution}</div>
              <div className="font-mono text-xs text-green-mid mt-0.5">{e.degree}</div>
              <div className="font-mono text-xs text-text-muted mt-1">{e.detail}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
