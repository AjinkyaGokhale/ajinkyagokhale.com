import { motion } from 'framer-motion'
import { Github, ExternalLink, Cloud, Camera, Mail } from 'lucide-react'

const PROJECTS = [
  {
    icon: Mail,
    name: 'SwapMails',
    subtitle: 'AWS Serverless Email Platform + Chrome Extension',
    period: 'Jan 2025 – Present',
    desc: 'Event-driven serverless disposable email platform — 1,000+ users, 99.9% uptime, GDPR-compliant, AES-256 encryption, 95% cost reduction over traditional hosting.',
    bullets: [
      'AWS Lambda, SES, DynamoDB, CDK v2 — handles 1000x traffic spikes automatically',
      'Chrome extension on Web Store: 500+ active users, one-click generation for 100+ sites',
      'React.js frontend via CloudFront CDN; RESTful API Gateway serving 10,000+ calls/day',
      'Sub-60s delivery, automated TTL cleanup, zero-knowledge data processing',
    ],
    tags: ['AWS Lambda', 'DynamoDB', 'SES', 'CDK v2', 'React.js', 'Chrome Ext', 'GDPR'],
    github: 'https://github.com/AjinkyaGokhale',
    demo: null,
  },
  {
    icon: Camera,
    name: 'Gesture Recognition',
    subtitle: 'Time-of-Flight Camera · Python, OpenCV',
    period: 'Jan 2023',
    desc: 'Real-time hand gesture recognition with a Time-of-Flight depth camera — 95% classification accuracy with 20% fewer false positives via advanced ML filtering.',
    bullets: [
      '95% accuracy in real-time gesture detection and classification',
      '20% reduction in false positives through ML filtering techniques',
      'Depth sensing + motion tracking via ToF camera + OpenCV pipeline',
    ],
    tags: ['Python', 'OpenCV', 'Computer Vision', 'ToF Camera', 'Machine Learning'],
    github: 'https://github.com/AjinkyaGokhale',
    demo: null,
  },
  {
    icon: Cloud,
    name: 'Stromleser IoT Platform',
    subtitle: 'Nineti GmbH · AWS IoT Infrastructure',
    period: 'Feb 2024 – Present',
    desc: 'Full-stack IoT platform (hardware → firmware → cloud → mobile) managing real-time data from 10,000+ connected devices at 99.9% uptime.',
    bullets: [
      '10,000+ IoT devices on EC2, Lambda, DynamoDB, IoT Core — 99.9% uptime',
      '20+ PCB circuits in KiCad; firmware optimization → 25% faster response time',
      'MQTT real-time telemetry with CloudWatch monitoring and automated alerting',
    ],
    tags: ['AWS IoT Core', 'MQTT', 'ESP32', 'KiCad', 'Lambda', 'DynamoDB', 'Firmware'],
    github: 'https://github.com/AjinkyaGokhale',
    demo: null,
  },
]

const SKILL_CATEGORIES = [
  { label: 'Cloud',        items: 'AWS (Lambda · EC2 · S3 · DynamoDB · RDS · IoT Core · SES · API Gateway · CloudFormation · IAM · VPC · CloudWatch) · GCP' },
  { label: 'Languages',   items: 'Python · Java · JavaScript · C/C++ · Rust · TypeScript · HTML5/CSS3' },
  { label: 'Backend',     items: 'Node.js · Express.js · RESTful APIs · Microservices · Serverless · Event-Driven Architecture' },
  { label: 'Frontend',    items: 'React.js · JavaScript ES6+ · Chrome Extension Dev · Responsive Design' },
  { label: 'IaC & CI/CD', items: 'AWS CDK v2 · CloudFormation · Terraform · GitHub Actions · CodePipeline · Jenkins' },
  { label: 'Databases',   items: 'DynamoDB · PostgreSQL · MySQL · SQL · NoSQL · Data Modelling' },
  { label: 'DevOps',      items: 'Docker · CloudWatch · X-Ray · Linux Administration · Performance Monitoring' },
  { label: 'IoT/HW',      items: 'AWS IoT Core · MQTT · Raspberry Pi · Arduino · ESP32/NodeMCU · KiCad · Fusion 360' },
  { label: 'Security',    items: 'GDPR · AWS IAM · SSL/TLS · AES-256 · Network Security · Data Privacy' },
]

function ProjectCard({ project, index }) {
  const Icon = project.icon
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
          {project.demo && (
            <motion.a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="text-text-muted p-1 block" whileHover={{ color: '#00ff88', scale: 1.2 }}
              whileTap={{ scale: 0.9 }}>
              <ExternalLink size={13} />
            </motion.a>
          )}
          <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
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
          <h1 className="pixel-heading text-green-bright">PROJECTS.DIR</h1>
          <p className="font-mono text-xs sm:text-sm text-text-muted">
            <span className="text-green-dim">total</span> {PROJECTS.length} items found
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
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
            <h2 className="pixel-heading text-green-bright">TECHNICAL_SKILLS</h2>
          </div>
          <div className="p-4 sm:p-5 rounded-lg space-y-2.5"
               style={{ background: '#111611', border: '1px solid #1f2e1f' }}>
            {SKILL_CATEGORIES.map(({ label, items }, i) => (
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
