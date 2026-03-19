import { useEffect, useRef, useState } from 'react'

const DOT_SIZE = 10
const GAP = 3
const MOUSE_RADIUS = 90
const IDLE_PULSE_SPEED = 0.5
const LERP_SPEED = 0.08  // smoothing factor for glow movement

export default function DotGridCanvas() {
  const canvasRef = useRef(null)
  const [showGyroBtn, setShowGyroBtn] = useState(false)
  const targetRef = useRef({ x: -9999, y: -9999 })  // where glow should go
  const glowRef  = useRef({ x: -9999, y: -9999 })   // current interpolated position
  const dotsRef = useRef([])
  const frameRef = useRef(null)
  const timeRef = useRef(0)
  const touchActiveRef = useRef(false)
  const isTouchDeviceRef = useRef(false)
  const attachGyroRef = useRef(null)
  const gyroActiveRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    function buildDots() {
      const step = DOT_SIZE + GAP
      const cols = Math.ceil(window.innerWidth / step) + 1
      const rows = Math.ceil(window.innerHeight / step) + 1
      const dots = []
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          dots.push({ x: c * step, y: r * step })
      dotsRef.current = dots
    }

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      buildDots()
    }

    function lerp(a, b, t) { return a + (b - a) * t }
    function easeOut(t) { return 1 - Math.pow(1 - t, 3) }

    function draw(timestamp) {
      timeRef.current = timestamp * 0.001
      const idle = 0.5 + 0.5 * Math.sin(timeRef.current * IDLE_PULSE_SPEED)

      // Smoothly interpolate glow toward target
      glowRef.current.x = lerp(glowRef.current.x, targetRef.current.x, LERP_SPEED)
      glowRef.current.y = lerp(glowRef.current.y, targetRef.current.y, LERP_SPEED)

      // Gyro-driven scroll — top/bottom 25% of screen triggers scroll
      if (gyroActiveRef.current && !touchActiveRef.current) {
        const h = window.innerHeight
        const gy = targetRef.current.y   // use raw gyro target, not lerped glow
        const ZONE = 0.25
        const MAX_SPEED = 10
        let scrollDelta = 0
        if (gy < h * ZONE && gy > 0) {
          const t = 1 - gy / (h * ZONE)
          scrollDelta = -Math.round(t * MAX_SPEED)
        } else if (gy > h * (1 - ZONE) && gy < h) {
          const t = (gy - h * (1 - ZONE)) / (h * ZONE)
          scrollDelta = Math.round(t * MAX_SPEED)
        }
        if (scrollDelta !== 0) {
          const el = document.documentElement
          el.scrollTop = el.scrollTop + scrollDelta
          // fallback for iOS Safari
          if (el.scrollTop === 0 && scrollDelta !== 0) {
            document.body.scrollTop = document.body.scrollTop + scrollDelta
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = glowRef.current.x
      const my = glowRef.current.y

      for (const dot of dotsRef.current) {
        const dx = dot.x + DOT_SIZE / 2 - mx
        const dy = dot.y + DOT_SIZE / 2 - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_RADIUS) {
          const t = easeOut(1 - dist / MOUSE_RADIUS)
          const rVal = Math.round(lerp(0xcc, 0x00, t))
          const gVal = Math.round(lerp(0xff, 0xcc, t))
          const bVal = Math.round(lerp(0xcc, 0x88, t))
          ctx.fillStyle = `rgba(${rVal},${gVal},${bVal},${lerp(0.08, 0.85, t)})`
        } else {
          ctx.fillStyle = `rgba(180,180,180,${0.015 + 0.004 * idle})`
        }
        ctx.fillRect(dot.x, dot.y, DOT_SIZE, DOT_SIZE)
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    // ── Mouse ──
    function onMouseMove(e) {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }
    function onMouseLeave() {
      targetRef.current = { x: -9999, y: -9999 }
    }

    // ── Touch — finger drag drives the glow ──
    function onTouchStart(e) {
      isTouchDeviceRef.current = true
      touchActiveRef.current = true
      const t = e.touches[0]
      targetRef.current = { x: t.clientX, y: t.clientY }
      glowRef.current   = { x: t.clientX, y: t.clientY } // snap on first touch
    }
    function onTouchMove(e) {
      touchActiveRef.current = true
      const t = e.touches[0]
      targetRef.current = { x: t.clientX, y: t.clientY }
    }
    function onTouchEnd() {
      touchActiveRef.current = false
      // If no gyro, fade the glow off-screen so it doesn't stick
      if (!gyroActiveRef.current) {
        targetRef.current = { x: -9999, y: -9999 }
      }
    }

    // ── Gyroscope — tilt moves an ambient glow when not touching ──
    function onOrientation(e) {
      if (touchActiveRef.current) return
      const gamma = Math.max(-45, Math.min(45, e.gamma ?? 0))  // left-right tilt
      const beta  = Math.max(  0, Math.min(90, e.beta  ?? 45)) // forward tilt
      const x = ((gamma + 45) / 90) * window.innerWidth
      const y = (beta / 90) * window.innerHeight
      targetRef.current = { x, y }
    }

    function attachGyro() {
      gyroActiveRef.current = true
      window.addEventListener('deviceorientation', onOrientation)
    }
    attachGyroRef.current = attachGyro

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove',  onTouchMove,  { passive: true })
    window.addEventListener('touchend',   onTouchEnd)

    // iOS 13+ requires explicit user gesture via requestPermission
    if (typeof DeviceOrientationEvent !== 'undefined') {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // Show a button so the user can grant permission (iOS requires a real tap)
        setShowGyroBtn(true)
      } else {
        // Android / non-permission devices — attach directly
        attachGyro()
      }
    }

    frameRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove',  onTouchMove)
      window.removeEventListener('touchend',   onTouchEnd)
      window.removeEventListener('deviceorientation', onOrientation)
    }
  }, [])

  function handleGyroPermission() {
    DeviceOrientationEvent.requestPermission()
      .then(res => {
        if (res === 'granted') attachGyroRef.current?.()
      })
      .catch(() => {})
      .finally(() => setShowGyroBtn(false))
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: '#0d0d0d',
        }}
      />
      {showGyroBtn && (
        <button
          onClick={handleGyroPermission}
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            background: '#0d0d0d',
            border: '1px solid #2d6a2d',
            color: '#4ade80',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            letterSpacing: '0.05em',
          }}
        >
          [ enable gyro effect ]
        </button>
      )}
    </>
  )
}
