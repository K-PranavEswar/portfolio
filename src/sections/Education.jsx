import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { education } from '../data/portfolio'
import { riseIn, stagger, viewport } from '../animations/motion'

function Education() {
  return (
    <section className="section education-section" id="education">
      <SectionHeader
        eyebrow="Academic Journey"
        title="A clean timeline of computer applications, systems, and software foundations."
      />
      <motion.div className="education-timeline" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
        {education.map((item, index) => (
          <motion.article className="education-card" variants={riseIn} key={item.degree} data-cinema-panel>
            <div className="education-logo" aria-hidden="true">
              {item.logo}
            </div>
            <div className="education-content">
              <span className="year-badge">{item.years}</span>
              <h3>{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-specialization">{item.specialization}</p>
              <div className="subject-row" aria-label={`${item.degree} key subjects`}>
                {item.subjects.map((subject) => (
                  <span key={subject}>{subject}</span>
                ))}
              </div>
              <p className="education-grade">Grade: {item.grade}</p>
            </div>
            <span className="education-index">{String(index + 1).padStart(2, '0')}</span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default memo(Education)
