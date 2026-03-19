import { useState } from 'react'

// Color palette
const _ = null        // transparent
const K = '#0a0f0a'   // near-black
const D = '#1a3a1a'   // darkest green
const A = '#2d6a2d'   // dark green
const B = '#3a8a3a'   // medium green
const C = '#52b452'   // light green
const E = '#6fcf6f'   // bright green
const S = '#1a2e1a'   // shadow
const H = '#d4f0d4'   // highlight (eyes)

// 20 x 24 pixel art face
const GRID = [
  [_,_,_,_,_,D,D,D,D,D,D,D,D,D,D,_,_,_,_,_],
  [_,_,_,D,D,A,A,A,A,A,A,A,A,A,A,D,D,_,_,_],
  [_,_,D,A,A,B,B,B,B,B,B,B,B,B,B,A,A,D,_,_],
  [_,D,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,D,_],
  [_,D,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,D,_],
  [_,D,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,D,_],
  [D,A,B,B,K,K,K,B,B,B,B,B,B,K,K,K,B,B,A,D],
  [D,A,B,B,K,H,K,B,B,B,B,B,B,K,H,K,B,B,A,D],
  [D,A,B,B,K,K,K,B,B,B,B,B,B,K,K,K,B,B,A,D],
  [D,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,D],
  [D,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,D],
  [D,A,B,B,B,B,B,A,A,A,A,A,A,B,B,B,B,B,A,D],
  [D,A,B,B,B,B,A,C,C,C,C,C,C,A,B,B,B,B,A,D],
  [D,A,B,B,B,B,B,A,A,A,A,A,A,B,B,B,B,B,A,D],
  [D,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,D],
  [_,D,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,D,_],
  [_,D,A,B,A,D,D,D,D,D,D,D,D,D,D,A,B,A,D,_],
  [_,_,D,A,D,_,_,_,_,_,_,_,_,_,_,D,A,D,_,_],
  [_,_,_,S,_,_,_,_,_,_,_,_,_,_,_,_,S,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,D,D,D,D,D,D,_,_,_,_,D,D,D,D,D,D,_,_],
  [_,D,A,A,A,A,A,A,D,_,_,D,A,A,A,A,A,A,D,_],
  [_,D,B,B,B,B,B,B,D,_,_,D,B,B,B,B,B,B,D,_],
  [_,_,D,D,D,D,D,D,_,_,_,_,D,D,D,D,D,D,_,_],
]

const HOVER_COLORS = ['#39ff14', '#00ff88', '#52b452', '#6fcf6f', '#3a8a3a']

export default function PixelAvatar() {
  const [hovered, setHovered] = useState(false)
  const [hoveredCell, setHoveredCell] = useState(null)

  const rows = GRID.length
  const cols = GRID[0].length
  const cx = cols / 2
  const cy = rows / 2

  return (
    <div
      className="inline-block cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setHoveredCell(null) }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 11px)`,
          gridTemplateRows: `repeat(${rows}, 11px)`,
          gap: '1px',
        }}
      >
        {GRID.map((row, ri) =>
          row.map((color, ci) => {
            if (color === null) {
              return (
                <div
                  key={`${ri}-${ci}`}
                  style={{ width: 11, height: 11 }}
                />
              )
            }

            // Distance from center for stagger
            const dx = ci - cx
            const dy = ri - cy
            const dist = Math.sqrt(dx * dx + dy * dy)
            const delay = hovered ? `${dist * 35}ms` : '0ms'

            // Pick shimmer color based on position
            const shimmerIdx = (ri + ci) % HOVER_COLORS.length
            const shimmerColor = HOVER_COLORS[shimmerIdx]

            const isHoveredCell = hoveredCell?.r === ri && hoveredCell?.c === ci

            return (
              <div
                key={`${ri}-${ci}`}
                onMouseEnter={() => setHoveredCell({ r: ri, c: ci })}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: '1px',
                  backgroundColor: hovered
                    ? isHoveredCell
                      ? shimmerColor
                      : color
                    : color,
                  transition: `background-color 0.15s ease ${delay}, filter 0.15s ease ${delay}`,
                  filter: hovered ? `brightness(${1 + 0.3 * Math.sin(dist * 0.4)})` : 'none',
                }}
              />
            )
          })
        )}
      </div>
    </div>
  )
}
