import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { education } from '../data/portfolio'
import { riseIn, stagger, viewport } from '../animations/motion'

function Education() {
  return (
    <section 
      id="education" 
      className="relative min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8 text-white selection:bg-red-500/30"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Academic Journey"
          title="A clean timeline of computer applications, systems, and software foundations."
        />

        <motion.div 
          className="mx-auto mt-16 max-w-3xl space-y-8"
          variants={stagger} 
          initial="hidden" 
          whileInView="show" 
          viewport={viewport}
        >
          {education.map((item, index) => (
            <motion.article 
              key={item.degree} 
              variants={riseIn}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f11] p-6 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-[#151518]"
            >
              {/* Top Row: Logo & Index Number */}
              <div className="mb-8 flex items-start justify-between">
                <div 
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-red-500/40 bg-black shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-shadow duration-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] text-sm font-bold"
                  aria-hidden="true"
                >
                  {item.logo}
                </div>
                
                <span className="text-6xl font-black tracking-tighter text-white/5 transition-colors duration-500 group-hover:text-white/10 sm:text-7xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content Area */}
              <div className="flex flex-col items-start space-y-5">
                <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-red-100 shadow-sm">
                  {item.years}
                </span>

                <div className="space-y-2">
                  <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                    {item.degree}
                  </h3>
                  <p className="text-lg font-bold text-white sm:text-xl">
                    {item.institution}
                  </p>
                  <p className="text-base text-zinc-400 sm:text-lg">
                    {item.specialization}
                  </p>
                </div>

                {/* Subjects Tags */}
                <div 
                  className="flex flex-wrap gap-2 pt-2" 
                  aria-label={`${item.degree} key subjects`}
                >
                  {item.subjects.map((subject) => (
                    <span 
                      key={subject}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md transition-colors hover:bg-white/10 sm:text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium text-zinc-400 sm:text-base">
                    Grade: <span className="text-zinc-200">{item.grade}</span>
                  </p>
                </div>
              </div>

              {/* Subtle background glow effect on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 40px rgba(239,68,68,0.05)' }} />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export default memo(Education)
