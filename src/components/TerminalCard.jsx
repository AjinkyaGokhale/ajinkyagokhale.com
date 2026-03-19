import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export default function TerminalCard({ title, children, className, delay = 0 }) {
  return (
    <motion.div
      className={cn('terminal-card', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 200, damping: 22, delay }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-green bg-surface">
        <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
        <span className="w-3 h-3 rounded-full bg-green-mid opacity-80" />
        {title && <span className="ml-3 text-xs text-text-muted font-mono">{title}</span>}
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </motion.div>
  )
}
