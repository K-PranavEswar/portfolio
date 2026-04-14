import { memo } from 'react'
import { motion } from 'framer-motion'
import { MapPin, CalendarDays, Briefcase } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { TiltCard } from '../components/TiltCard'
import { timeline } from '../data/portfolio'
import { riseIn, viewport } from '../animations/motion'

function Timeline() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Subtle Background Red Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff2038]/[0.02] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader 
          eyebrow="EXPERIENCE" 
          title="Career Experiences!"
        />

        <div className="relative mt-20">
          {/* Main Vertical Timeline Laser Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#ff2038] via-[#ff2038]/20 to-transparent sm:-translate-x-1/2 rounded-full" />

          <div className="space-y-12 sm:space-y-20">
            {timeline.map((item, index) => {
              // Alternate left and right positioning for desktop
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={riseIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isLeft ? 'sm:justify-start' : 'sm:justify-end'
                  }`}
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full bg-[#ff2038] border-[3px] border-[#020203] shadow-[0_0_20px_rgba(255,32,56,0.8)] -translate-x-1/2 z-20 mt-6 sm:mt-0" />

                  {/* Desktop Date Display (Shows on the opposite side of the card) */}
                  <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-[45%] text-gray-500 font-mono text-sm tracking-widest ${isLeft ? 'right-0 text-left pl-12' : 'left-0 text-right pr-12'}`}>
                    {item.duration}
                  </div>

                  {/* Experience Card */}
                  <TiltCard
                    className={`ml-16 sm:ml-0 w-[calc(100%-4rem)] sm:w-[45%] rounded-[2rem] border border-white/[0.05] bg-gradient-to-b from-[#0a0a0e] to-[#050507] p-6 sm:p-8 hover:border-[#ff2038]/30 transition-colors duration-500 group`}
                    data-cinema-panel
                  >
                    {/* Top Subtle Red Edge Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#ff2038]/60 to-transparent transition-colors duration-700" />

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-[#ff2038] transition-colors duration-300">
                      {item.role}
                    </h3>

                    {/* Meta Info */}
                    <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-3">
                        <Briefcase size={16} className="text-[#ff2038]/70" />
                        <span className="font-medium text-gray-300">{item.company}</span>
                      </span>

                      {/* Mobile Date Display (Hidden on Desktop) */}
                      <span className="flex sm:hidden items-center gap-3">
                        <CalendarDays size={16} className="text-[#ff2038]/70" />
                        {item.duration}
                      </span>

                      <span className="flex items-center gap-3">
                        <MapPin size={16} className="text-[#ff2038]/70" />
                        {item.location}
                      </span>
                    </div>

                    <p className="mt-5 text-gray-400 leading-relaxed text-[0.95rem]">
                      {item.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#ff2038]/10 border border-[#ff2038]/20 text-[#ff2038] tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Timeline)