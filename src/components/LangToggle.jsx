import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function LangToggle() {
  const { lang, toggle } = useLanguage()

  return (
    <motion.button
      onClick={toggle}
      className="flex items-center font-mono text-xs"
      style={{
        background: 'rgba(13,20,13,0.85)',
        border: '1px solid #2d6a2d',
        borderRadius: '6px',
        overflow: 'hidden',
        flexShrink: 0,
      }}
      whileHover={{ borderColor: '#00ff88' }}
      title="Toggle language / Sprache wechseln"
      aria-label="Toggle language"
    >
      {['en', 'de'].map((l) => (
        <span
          key={l}
          className="px-2.5 py-1 transition-colors"
          style={{
            color: lang === l ? '#0d0d0d' : '#5a7a5a',
            background: lang === l ? '#00ff88' : 'transparent',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: lang === l ? 700 : 400,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {l}
        </span>
      ))}
    </motion.button>
  )
}
