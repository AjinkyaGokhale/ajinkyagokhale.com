import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Clipboard, FileText, Check } from 'lucide-react'
import TypewriterText from '../components/TypewriterText'
import { useToast } from '../components/Toast'

const EMAIL = 'st189203@stud.uni-stuttgart.de'
const GITHUB_URL = 'https://github.com/AjinkyaGokhale'
const LINKEDIN_URL = 'https://linkedin.com/in/gokhaleajinkya'
const TAGS = ['IoT & Cloud', 'Embedded Systems', 'Full-Stack', 'AWS Certified']

const BIO_MAIN = `Founding engineer at Nineti GmbH, building IoT infrastructure at scale — managing production devices on AWS. I work across the full stack: PCB design, embedded firmware, distributed systems, and system design from HLD to deployment. Language-agnostic — C, Python, TypeScript, whatever the problem needs. Based in Stuttgart, tinkering with homelabs and local LLMs in my spare time. Currently writing my Master's thesis — `
const BIO_HIGHLIGHT = `available full-time from Oct 2026.`

function BioTyper() {
  const [phase, setPhase] = useState('main') // 'main' | 'highlight' | 'done'
  return (
    <span>
      <TypewriterText
        text={BIO_MAIN}
        speed={26}
        delay={1400}
        showCursor={phase === 'main'}
        className="text-text-muted"
        onDone={() => setPhase('highlight')}
      />
      {phase !== 'main' && (
        <TypewriterText
          text={BIO_HIGHLIGHT}
          speed={30}
          delay={0}
          showCursor={phase === 'highlight'}
          className="text-green-bright"
          onDone={() => setPhase('done')}
        />
      )}
    </span>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } },
}

const btnStyle = {
  background: 'rgba(13, 20, 13, 0.85)',
  backdropFilter: 'blur(24px) saturate(160%)',
  WebkitBackdropFilter: 'blur(24px) saturate(160%)',
  color: '#d4f0d4',
  border: '1px solid #2d6a2d',
}

export default function Hero() {
  const showToast = useToast()
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      showToast('✓ Email copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-14">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-10 sm:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

          {/* ── Left column ── */}
          <motion.div
            className="flex-1 w-full lg:w-[60%] space-y-5 sm:space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Terminal pill */}
            <motion.div variants={item}>
              <div
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-xs sm:text-sm"
                style={{ background: '#1a1a1a', border: '1px solid #2d6a2d', color: '#00ff88' }}
              >
                <span className="text-text-muted hidden xs:inline">~/portfolio</span>
                <span className="text-green-dim">$</span>
                <span>whoami</span>
                <span className="cursor-blink" />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={item}>
              <h1 className="font-mono font-bold leading-tight"
                  style={{ fontSize: 'clamp(1.6rem, 5vw, 3.2rem)' }}>
                <span className="text-text-primary">Ajinkya </span>
                <TypewriterText text="Gokhale" speed={80} className="text-green-bright text-glow" />
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                  — Software Engineer | IoT, AWS Cloud, Embedded Systems & System Design
                </span>
              </h1>
              <p className="font-pixel text-green-mid mt-2 tracking-wider leading-relaxed"
                 style={{ fontSize: 'clamp(6px, 1.8vw, 8px)' }}>
                MSc. INFOTECH @ UNIVERSITY OF STUTTGART
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div variants={item} className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs sm:text-sm">
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="flex items-center gap-1.5 group"
                  whileHover={{ scale: 1.05 }}
                >
                  {i > 0 && <span className="text-green-dim">•</span>}
                  <span className="text-text-muted group-hover:text-green-bright transition-colors cursor-default">
                    {tag}
                  </span>
                </motion.span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.div variants={item}
              className="font-mono text-xs sm:text-sm leading-relaxed max-w-xl">
              <BioTyper />
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={item}
              className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 pt-1">
              <motion.a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                className="contents" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <button
                  className="btn-glow flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 rounded-md font-mono text-xs sm:text-sm font-medium w-full sm:w-auto"
                  style={{ background: '#00ff88', color: '#0d0d0d', border: '1px solid #00ff88' }}
                >
                  <Github size={15} /> GitHub
                </button>
              </motion.a>

              <motion.a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                className="contents" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 rounded-md font-mono text-xs sm:text-sm font-medium hover:border-green-bright hover:text-green-bright w-full sm:w-auto transition-colors"
                  style={btnStyle}>
                  <Linkedin size={15} /> LinkedIn
                </button>
              </motion.a>

              <motion.button onClick={copyEmail} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 rounded-md font-mono text-xs sm:text-sm font-medium hover:border-green-bright hover:text-green-bright w-full sm:w-auto transition-colors"
                style={btnStyle}>
                {copied ? <Check size={15} /> : <Clipboard size={15} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 rounded-md font-mono text-xs sm:text-sm font-medium hover:border-green-bright hover:text-green-bright w-full sm:w-auto transition-colors"
                style={btnStyle}>
                <FileText size={15} /> Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ── Right column — Photo ── */}
          <motion.div
            className="w-full lg:w-[40%] flex flex-col items-center gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          >
            <motion.div
              className="avatar-wrap relative scanlines"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'rgba(17,22,17,0.6)',
                border: '2px solid #1f2e1f',
                borderRadius: '12px',
                boxShadow: '0 0 40px rgba(0,255,136,0.12), inset 0 0 20px rgba(0,255,136,0.03)',
                overflow: 'hidden',
                maxWidth: '280px',
                width: '100%',
              }}
            >
              <img
                src="/static/avator.png"
                alt="Ajinkya Gokhale"
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(1.05) brightness(0.95)' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, rgba(0,255,136,0.06) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />
            </motion.div>
            <motion.p
              className="font-pixel text-green-dim text-center"
              style={{ fontSize: '7px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              &lt; AJINKYA_GOKHALE.EXE /&gt;
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
