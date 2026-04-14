import { memo } from 'react'
import { motion } from 'framer-motion'
import { riseIn, viewport } from '../animations/motion'

function SectionHeaderComponent({ eyebrow, title, copy }) {
  return (
    <motion.div
      className="section-header"
      data-cinema-panel
      variants={riseIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </motion.div>
  )
}

export const SectionHeader = memo(SectionHeaderComponent)
