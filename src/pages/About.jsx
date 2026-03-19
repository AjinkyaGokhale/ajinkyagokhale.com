import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import TerminalCard from '../components/TerminalCard'

const SKILLS = [
  { label: 'AWS Cloud (Lambda, EC2, DynamoDB, IoT…)', pct: 92 },
  { label: 'Python / C/C++ / Embedded Firmware', pct: 85 },
  { label: 'IoT & Hardware Design (KiCad, ESP32)', pct: 82 },
  { label: 'React.js / TypeScript / Node.js', pct: 80 },
  { label: 'Infrastructure as Code (CDK v2, Terraform)', pct: 78 },
  { label: 'Docker / CI-CD / Linux Admin', pct: 75 },
]

const HOBBIES = [
  { label: 'Local LLMs', desc: 'Optimizing inference, quantized models, open-source AI on personal hardware' },
  { label: 'Self-Hosting', desc: 'Home Assistant & Nextcloud on a personal Kubernetes cluster' },
  { label: 'Homelab', desc: 'Container orchestration, networking, infrastructure automation' },
  { label: 'Tech Content', desc: 'Built GPHReviews to 42K+ YouTube subscribers (2017–2023)' },
]

const CERTS = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services' },
]

const LANGS = [
  { lang: 'English', level: 'Professional Proficiency' },
  { lang: 'German', level: 'Intermediate (B1)' },
  { lang: 'Hindi', level: 'Native Speaker' },
]

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

const sectionHeader = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
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
          <h1 className="pixel-heading text-green-bright">ABOUT.EXE</h1>
        </motion.div>

        <TerminalCard title="cat about.md" delay={0}>
          <div className="font-mono text-xs sm:text-sm space-y-4">
            <div>
              <span className="text-green-bright"># </span>
              <span className="text-text-primary font-semibold">Ajinkya Prashant Gokhale</span>
            </div>
            <div>
              <p className="text-green-dim text-xs mb-1">## Location</p>
              <p className="text-text-muted">Stuttgart, Germany</p>
            </div>
            <div>
              <p className="text-green-dim text-xs mb-1">## Role</p>
              <p className="text-text-muted leading-relaxed">
                MSc. Infotech student at University of Stuttgart (Computer Hardware/Software Engineering)
                and Working Student at Nineti GmbH — founding engineer building IoT infrastructure
                from the ground up: hardware, firmware, cloud, and frontend.
              </p>
            </div>
            <div>
              <p className="text-green-dim text-xs mb-1">## Background</p>
              <p className="text-text-muted leading-relaxed">
                B.Tech in Electronics & Telecommunications from VJTI Mumbai (GPA 8.32/10).
                Started with PCB design and embedded firmware on ESP32/Arduino, then expanded
                into cloud architecture and full-stack development.
              </p>
            </div>
            <div>
              <p className="text-green-dim text-xs mb-1">## Currently</p>
              <div className="text-text-muted space-y-1">
                <p><span className="text-green-bright">→</span> Writing Master's thesis @ University of Stuttgart</p>
                <p><span className="text-green-bright">→</span> Scaling Stromleser IoT to 10,000+ devices on AWS</p>
                <p><span className="text-green-bright">→</span> Growing SwapMails — serverless email, 1000+ users</p>
                <p>
                  <span className="text-green-bright">→</span>{' '}
                  <span style={{ color: '#00ff88' }}>Available for full-time roles from October 2026</span>
                </p>
              </div>
            </div>
          </div>
        </TerminalCard>

        <TerminalCard title="skills --verbose" delay={0.08}>
          <div className="space-y-3 sm:space-y-4">
            <p className="font-mono text-xs text-green-dim">
              [SKILL_MATRIX] Proficiency levels initialized...
            </p>
            {SKILLS.map((s, i) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 120} />
            ))}
          </div>
        </TerminalCard>

        <TerminalCard title="cat certifications.json" delay={0.12}>
          <ul className="space-y-3">
            {CERTS.map((c) => (
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
                  ✓ certified
                </span>
              </li>
            ))}
          </ul>
        </TerminalCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <TerminalCard title="locale --list" delay={0.05}>
            <ul className="font-mono text-xs sm:text-sm space-y-2.5">
              {LANGS.map(({ lang, level }) => (
                <li key={lang} className="flex flex-col xs:flex-row xs:items-center gap-0.5 xs:gap-3">
                  <span className="text-green-bright w-20 flex-shrink-0">{lang}</span>
                  <span className="text-text-muted">{level}</span>
                </li>
              ))}
            </ul>
          </TerminalCard>

          <TerminalCard title="cat hobbies.txt" delay={0.1}>
            <ul className="font-mono text-xs sm:text-sm space-y-2.5">
              {HOBBIES.map((h, i) => (
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
