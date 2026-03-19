import { useEffect, useRef } from 'react'

const DOT_SIZE = 10
const GAP = 3
const MOUSE_RADIUS = 90
const IDLE_PULSE_SPEED = 0.5
const LERP_SPEED = 0.08  // smoothing factor for glow movement

export default function DotGridCanvas() {
  const canvasRef = useRef(null)
  const targetRef = useRef({ x: -9999, y: -9999 })  // where glow should go
  const glowRef  = useRef({ x: -9999, y: -9999 })   // current interpolated position
  const dotsRef = useRef([])
  const frameRef = useRef(null)
  const timeRef = useRef(0)
  const touchActiveRef = useRef(false)
  const isTouchDeviceRef = useRef(false)

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
      // Let gyro take over smoothly — don't reset position
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
      window.addEventListener('deviceorientation', onOrientation)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove',  onTouchMove,  { passive: true })
    window.addEventListener('touchend',   onTouchEnd)

    // iOS 13+ requires permission for DeviceOrientationEvent
    if (typeof DeviceOrientationEvent !== 'undefined') {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // Request on first touch so we have a user gesture
        const requestGyro = () => {
          DeviceOrientationEvent.requestPermission()
            .then(res => { if (res === 'granted') attachGyro() })
            .catch(() => {})
          window.removeEventListener('touchstart', requestGyro)
        }
        window.addEventListener('touchstart', requestGyro, { once: true })
      } else {
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

  return (
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
  )
}
