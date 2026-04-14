import { memo, useCallback, useRef } from 'react'

function TiltCardComponent({
  as: Tag = 'article',
  className = '',
  children,
  ...props
}) {
  const cardRef = useRef(null)
  const frameRef = useRef(0)

  const handleMove = useCallback((event) => {
    const card = cardRef.current
    if (!card || window.innerWidth < 768) return

    cancelAnimationFrame(frameRef.current)

    frameRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      card.style.transform = `
        perspective(1000px)
        rotateX(${-y * 8}deg)
        rotateY(${x * 10}deg)
        scale3d(1.02,1.02,1.02)
      `
    })
  }, [])

  const handleLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }, [])

  return (
    <Tag
      ref={cardRef}
      className={`transition-transform duration-300 will-change-transform ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </Tag>
  )
}

export const TiltCard = memo(TiltCardComponent)