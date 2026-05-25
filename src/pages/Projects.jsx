import { motion } from 'framer-motion'
import { Github, Cloud, Camera, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const PROJECT_ICONS = [Mail, Camera, Cloud]

function ProjectCard({ project, index }) {
  const Icon = PROJECT_ICONS[index] || Mail
  return (
    <motion.div
      className="terminal-card p-4 sm:p-5 flex flex-col gap-3"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 200, damping: 22, delay: index * 0.1 }}
      whileHover={{
        y: -6,
        borderColor: '#00ff88',
        boxShadow: '0 0 20px rgba(0,255,136,0.2)',
        transition: { type: 'spring', stiffness: 400, damping: 25 },
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2 min-w-0">
          <div className="p-1.5 sm:p-2 rounded flex-shrink-0"
               style={{ background: '#1a2e1a', border: '1px solid #2d6a2d' }}>
            <Icon size={13} style={{ color: '#00ff88' }} />
          </div>
          <div className="min-w-0">
            <h3 className="font-mono font-semibold text-text-primary text-sm leading-tight">{project.name}</h3>
            <p className="font-mono text-xs text-text-muted leading-snug mt-0.5">{project.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <motion.a href="https://github.com/AjinkyaGokhale" target="_blank" rel="noopener noreferrer"
            className="text-text-muted p-1 block" whileHover={{ color: '#00ff88', scale: 1.2 }}
            whileTap={{ scale: 0.9 }}>
            <Github size={13} />
          </motion.a>
        </div>
      </div>

      <span className="font-mono text-xs text-green-dim">[{project.period}]</span>
      <p className="font-mono text-xs text-text-muted leading-relaxed">{project.desc}</p>

      <ul className="space-y-1.5">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-1.5 font-mono text-xs text-text-muted">
            <span className="text-green-bright mt-0.5 flex-shrink-0">›</span>
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.map(tag => (
          <span key={tag} className="px-1.5 sm:px-2 py-0.5 rounded text-xs font-mono"
            style={{ background: '#1a2e1a', border: '1px solid #2d6a2d', color: '#52b452' }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { lang } = useLanguage()
  const t = translations[lang].projects

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">

        <motion.div className="space-y-1"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-xs text-green-dim truncate">
            <span className="text-text-muted">~/portfolio</span>{' '}
            <span className="text-green-bright">$</span> ls -la ./projects
          </p>
          <h1 className="pixel-heading text-green-bright">{t.pageTitle}</h1>
          <p className="font-mono text-xs sm:text-sm text-text-muted">
            <span className="text-green-dim">total</span> {t.totalItems(t.projects.length)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Skills table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}>
          <div className="space-y-1 mb-4 sm:mb-6">
            <p className="font-mono text-xs text-green-dim truncate">
              <span className="text-text-muted">~/portfolio</span>{' '}
              <span className="text-green-bright">$</span> cat skills.json
            </p>
            <h2 className="pixel-heading text-green-bright">{t.skillsTitle}</h2>
          </div>
          <div className="p-4 sm:p-5 rounded-lg space-y-2.5"
               style={{ background: '#111611', border: '1px solid #1f2e1f' }}>
            {t.skillCategories.map(({ label, items }, i) => (
              <motion.div key={label}
                className="flex flex-col sm:flex-row gap-0.5 sm:gap-3 font-mono text-xs"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}>
                <span className="text-green-bright flex-shrink-0 sm:w-24">{label}</span>
                <span className="text-text-muted leading-relaxed">{items}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
