import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { aboutText } from '../data/portfolio'
import { riseIn, viewport } from '../animations/motion'

const highlights = [
  {
    title: "MERN Development",
    desc: "Building smooth, scalable, and responsive web applications.",
    icon: "💻" 
  },
  {
    title: "Offensive Security",
    desc: "Penetration testing with a proactive security mindset.",
    icon: "🛡️"
  },
  {
    title: "Creative Coding",
    desc: "Crafting interactive experiences with Three.js & Python.",
    icon: "🚀"
  }
]

// Seamless loop-nu vendi array duplicate cheyyunnu
const marqueeItems = [...highlights, ...highlights, ...highlights, ...highlights]

function About() {
  return (
    <section 
      className="section relative py-20 overflow-hidden" 
      id="about"
    >
      <SectionHeader eyebrow="ABOUT ME" />

      {/* Static Soft Background Glow (Torch mattiyathu kondu ithu sthiram aayi kanikkam) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full pointer-events-none opacity-20"
        style={{ 
          background: 'radial-gradient(circle, rgba(255,32,56,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Hello, I'm <span className="text-[#ff2038]">Pranav</span>
          </h2>
        </div>

        {/* Text Area */}
        <motion.div 
          variants={riseIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col gap-6 max-w-4xl mx-auto md:mx-0 mb-16"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-[#09090c] border border-white/5 relative overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
            <p className="text-gray-400 leading-relaxed text-[1.05rem]">
              {aboutText}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
             {['Kerala', 'Developer', 'Security Enthusiast', 'MCA Student'].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-4 py-1.5 rounded-full bg-[#09090c] text-gray-400 text-sm border border-white/5 transition-colors hover:text-[#ff2038] hover:border-[#ff2038]/30 cursor-default"
                >
                  {tag}
                </span>
             ))}
          </div>
        </motion.div>
      </div>

      {/* ---------------- MARQUEE SECTION ---------------- */}
      <div className="relative z-10 w-full overflow-hidden mt-8 py-4 pointer-events-auto">
        
        {/* Gradient Edges for a smooth fade effect on the left and right */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#020203] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#020203] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-6 w-max"
          // Left to Right movement: Starts at -50% (hidden half) and moves to 0%
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ 
            ease: "linear", 
            duration: 30, // Speed adjust cheyyan ee value matam
            repeat: Infinity 
          }}
        >
          {marqueeItems.map((item, index) => (
            <div 
              key={index}
              className="w-[300px] md:w-[380px] p-5 rounded-xl border border-white/5 bg-[#09090c] flex items-center gap-5 flex-shrink-0 relative overflow-hidden group hover:border-[#ff2038]/30 transition-colors"
            >
              {/* Subtle hover shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="text-3xl opacity-60">
                {item.icon}
              </div>
              <div>
                <h4 className="text-gray-200 text-lg font-medium mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}

export default memo(About)