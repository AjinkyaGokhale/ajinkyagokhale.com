import { useState, useEffect, useRef } from 'react'

// Characters that cause a brief natural pause (like a human typing)
const PAUSE_CHARS = new Set(['.', ',', '—', ':', '!', '?'])

export default function TypewriterText({
  text,
  speed = 60,
  delay = 0,        // ms before starting
  className = '',
  showCursor = true,
  onDone,
}) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(delay === 0)
  const timeoutRef = useRef(null)

  // Handle start delay
  useEffect(() => {
    if (delay === 0) return
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  // Typing loop — recursive setTimeout for variable speed
  useEffect(() => {
    if (!started) return
    setDisplayed('')
    setDone(false)

    let i = 0

    function typeNext() {
      i++
      setDisplayed(text.slice(0, i))

      if (i >= text.length) {
        setDone(true)
        onDone?.()
        return
      }

      const ch = text[i - 1]
      // Natural rhythm: pause longer on punctuation, faster on spaces
      const jitter = (Math.random() - 0.5) * speed * 0.5
      const pause = PAUSE_CHARS.has(ch) ? speed * 3 : ch === ' ' ? speed * 0.4 : speed
      timeoutRef.current = setTimeout(typeNext, Math.max(10, pause + jitter))
    }

    timeoutRef.current = setTimeout(typeNext, speed)
    return () => clearTimeout(timeoutRef.current)
  }, [started, text, speed])

  return (
    <span className={className}>
      {displayed}
      {showCursor && !done && <span className="cursor-blink" />}
    </span>
  )
}
