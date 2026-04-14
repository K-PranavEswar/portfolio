import { memo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function ScrollToTopComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 460)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.button
      type="button"
      className={`scroll-top ${isVisible ? 'is-visible' : ''}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 18 }}
      transition={{ duration: 0.2 }}
    >
      <span>Top</span>
      <i aria-hidden="true">↑</i>
    </motion.button>
  )
}

export const ScrollToTop = memo(ScrollToTopComponent)
