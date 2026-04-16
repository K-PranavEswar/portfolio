import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { aboutText } from '../data/portfolio'
import { riseIn, viewport } from '../animations/motion'

const highlights = [
  {
    title: 'MERN Development',
    desc: 'Building smooth, scalable, and responsive web applications.',
    icon: '💻',
  },
  {
    title: 'Offensive Security',
    desc: 'Penetration testing with a proactive security mindset.',
    icon: '🛡️',
  },
  {
    title: 'Creative Coding',
    desc: 'Crafting interactive experiences with Three.js & Python.',
    icon: '🚀',
  },
]

const marqueeItems = [...highlights, ...highlights, ...highlights, ...highlights]

function About() {
  const snowflakes = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.7 + 0.2,
        duration: Math.random() * 10 + 12,
        delay: Math.random() * 10,
        drift: Math.random() * 40 - 20,
      })),
    []
  )

  return (
    <section
      className="section section-wide py-20 overflow-hidden bg-[#020203]"
      id="about"
    >
      {snowflakes.map((flake) => (
        <motion.span
          key={flake.id}
          className="absolute top-0 rounded-full bg-white pointer-events-none"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: flake.left,
            opacity: flake.opacity,
            filter: 'blur(1px)',
          }}
          animate={{
            y: ['-10vh', '110vh'],
            x: [0, flake.drift, 0],
            opacity: [0, flake.opacity, 0],
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: flake.delay,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/70" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(255,32,56,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 w-full">
        <SectionHeader eyebrow="ABOUT ME" />

        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Hello, I&apos;m <span className="text-[#ff2038]">Pranav</span>
            </h2>
          </div>

          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-6 w-full mb-16"
          >
            <div className="w-full p-6 md:p-10 lg:p-12 rounded-3xl bg-[#09090c]/80 backdrop-blur-md border border-white/5 relative overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
              <p className="text-gray-300 leading-[2] text-lg md:text-xl max-w-none">
                {aboutText}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {['Kerala', 'Developer', 'Security Enthusiast', 'MCA Student'].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 rounded-full bg-[#09090c]/80 backdrop-blur-md text-gray-300 text-sm md:text-base border border-white/5 transition-colors hover:text-[#ff2038] hover:border-[#ff2038]/30 cursor-default"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        <div className="relative w-full overflow-hidden mt-10 py-6">
          <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#020203] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#020203] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[380px] p-5 rounded-2xl border border-white/5 bg-[#09090c]/80 backdrop-blur-md flex items-center gap-5 flex-shrink-0 relative overflow-hidden group hover:border-[#ff2038]/30 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="text-3xl opacity-70">{item.icon}</div>

                <div>
                  <h4 className="text-gray-100 text-lg font-medium mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)