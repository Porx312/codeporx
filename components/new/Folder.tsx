import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FolderProps {
  color?: string
  size?: number
  items?: React.ReactNode[]
  className?: string
}

const socialmedia = [
  {
    name: 'github',
    href: 'https://github.com/Porx312',
    src: '/icons/github.png',
  },

  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/jose-blanco-31b934373/',
    src: '/icons/linkedin.png',
  },
  {
    name: 'threads',
    href: 'https://www.threads.com/@porxd3?hl=es',
    src: '/icons/cv.png',
  },
]

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex
  if (color.length === 3) {
    color = color
      .split('')
      .map((c) => c + c)
      .join('')
  }
  const num = parseInt(color, 16)
  let r = (num >> 16) & 0xff
  let g = (num >> 8) & 0xff
  let b = num & 0xff
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))))
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))))
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))))
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}

const Folder: React.FC<FolderProps> = ({
  color = '#5227FF',
  size = 1,
  items = [],
  className = '',
}) => {
  const maxItems = 3
  const papers = items.slice(0, maxItems)
  while (papers.length < maxItems) {
    papers.push(null)
  }

  const [open, setOpen] = useState(false)
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  )
  const hexToRgb = (hex) => {
    const [r, g, b] = hex
      .replace('#', '')
      .match(/.{1,2}/g)
      .map((x) => parseInt(x, 16))
    return `${r}, ${g}, ${b}`
  }
  const folderBackColor = darkenColor(color, 0.08)
  const paper1 = '#ffffff'
  const paper2 = '#ffffff'
  const paper3 = '#ffffff'

  const handleClick = () => {
    setOpen((prev) => !prev)
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })))
    }
  }

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = (e.clientX - centerX) * 0.15
    const offsetY = (e.clientY - centerY) * 0.15
    setPaperOffsets((prev) => {
      const newOffsets = [...prev]
      newOffsets[index] = { x: offsetX, y: offsetY }
      return newOffsets
    })
  }

  const handlePaperMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev]
      newOffsets[index] = { x: 0, y: 0 }
      return newOffsets
    })
  }

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3,
  } as React.CSSProperties

  const scaleStyle = { transform: `scale(${size})` }

  const getOpenTransform = (index: number) => {
    if (index === 0) return 'translate(-120%, -70%) rotate(-15deg)'
    if (index === 1) return 'translate(10%, -70%) rotate(15deg)'
    if (index === 2) return 'translate(-50%, -100%) rotate(5deg)'
    return ''
  }

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={`group relative mt-16 cursor-pointer transition-all duration-200 ease-in ${
          !open ? 'hover:-translate-y-2' : ''
        }`}
        style={{
          ...folderStyle,
          transform: open ? 'translateY(-8px)' : undefined,
        }}
        onClick={handleClick}
      >
        <div
          className="rounded-tl-0 relative h-[40px] w-[60px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="rounded-bl-0 rounded-br-0 absolute bottom-[98%] left-0 z-0 h-[10px] w-[30px] rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          {papers.map((item, i) => {
            let sizeClasses = ''
            if (i === 0) sizeClasses = open ? 'w-[70%] h-[80%]' : 'w-[70%] h-[80%]'
            if (i === 1) sizeClasses = open ? 'w-[80%] h-[80%]' : 'w-[80%] h-[70%]'
            if (i === 2) sizeClasses = open ? 'w-[90%] h-[80%]' : 'w-[90%] h-[60%]'

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined

            return (
              <Link href={socialmedia[i]['href']} key={i}>
                <div
                  onMouseMove={(e) => handlePaperMouseMove(e, i)}
                  onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
                  className={`absolute bottom-[10%] left-1/2 z-20 flex items-center justify-center transition-all duration-300 ease-in-out
              ${
                !open
                  ? '-translate-x-1/2 translate-y-[10%] transform group-hover:translate-y-0'
                  : 'hover:scale-110'
              }
              ${sizeClasses}
              /* -------- efecto vidrio -------- */
              /*   desenfoque */ /*
              un  poco más de saturación */ /* contorno
              de 1 px   muy tenue */ /* sombra suave */
              shadow-[0_4px_30px_rgba(0,0,0,0.08)] ring-1 ring-white/30 backdrop-blur-md backdrop-saturate-150
              `}
                  style={{
                    ...(!open ? {} : { transform: transformStyle }),
                    /* Fondo semitransparente en el mismo tono que tus variables paperX */
                    background: `rgba(${hexToRgb(
                      i === 0 ? paper1 : i === 1 ? paper2 : paper3
                    )}, 0.35)`,
                    borderRadius: '10px',
                  }}
                >
                  <Image
                    src={socialmedia[i].src}
                    alt={socialmedia[i].name}
                    width={100}
                    height={100}
                    className="h-7 w-7 transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </Link>
            )
          })}
          <div
            className={`absolute z-30 h-full w-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
            }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(15deg) scaleY(0.6)' }),
            }}
          ></div>
          <div
            className={`absolute z-30 flex h-full w-full origin-bottom items-center justify-center transition-all duration-300 ease-in-out ${
              !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
            }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(-15deg) scaleY(0.6)' }),
            }}
          >
            {/*    <TwitterIcon  className="w-10 text-white" /> */}
            {!open ? 'Open' : 'Close'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Folder
