import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { skillCategories } from '../data/portfolio'
import { riseIn, viewport } from '../animations/motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

// -------------------------------------------------------------------
// Component for the Circular Ring Progress
// -------------------------------------------------------------------
const CircularProgress = ({ skill, index }) => {
  const radius = 34; // Size of the circle
  const circumference = 2 * Math.PI * radius;
  // Progress calc - ensures minimum fill for visibility
  const strokeDashoffset = circumference - (Math.max(skill.level, 15) / 100) * circumference;

  return (
    <div className="group flex flex-col items-center gap-3 w-24 flex-shrink-0">
      <div className="relative w-20 h-20 flex items-center justify-center">
        
        {/* SVG Circles */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none">
          {/* Background Track (Grey) */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            className="stroke-white/[0.05]"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress Fill (Red) - Removed animation to avoid glitches during scroll */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            className="stroke-[#ff2038] transition-all duration-500"
            strokeWidth="6"
            fill="transparent"
            strokeLinecap="round"
            style={{ 
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              filter: "drop-shadow(0px 0px 4px rgba(255, 32, 56, 0.4))" 
            }}
          />
        </svg>

        {/* Icon Inside the Circle */}
        <div className="relative z-10 text-3xl text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
          {skill.icon}
        </div>
      </div>

      {/* Skill Name */}
      <span className="text-xs font-medium text-gray-400 tracking-wide group-hover:text-gray-200 transition-colors text-center whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
};
// -------------------------------------------------------------------

function Skills() {
  return (
    <section className="section py-24 relative overflow-hidden" id="skills">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <SectionHeader
        eyebrow="Capabilities"
        title="Technical Arsenal."
        copy="A categorized view of my working stack, measured in practical confidence."
      />

      <motion.div
        className="max-w-6xl mx-auto px-4 md:px-8 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {skillCategories.map((category) => {
          // Seamless loop-nu vendi skills array 3 thavana duplicate cheyyunnu
          const marqueeSkills = [...category.skills, ...category.skills, ...category.skills];
          
          return (
            <motion.div
              key={category.title}
              variants={riseIn}
              className="p-6 md:p-8 rounded-[2rem] bg-[#07070a]/80 backdrop-blur-md border border-white/[0.05] shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/[0.05] z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Floatable Marquee Container */}
              <div className="relative w-full overflow-hidden flex-grow flex items-center">
                
                {/* Gradient Masks for smooth entry/exit at the edges */}
                <div className="absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-[#07070a] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-[#07070a] to-transparent z-10 pointer-events-none" />

                {/* The Scrolling Track */}
                <motion.div 
                  className="flex gap-6 w-max"
                  // Moves from 0 to -33.33% because we duplicated the array 3 times
                  animate={{ x: ["0%", "-33.33%"] }} 
                  transition={{ 
                    ease: "linear", 
                    duration: 15, // Change this value to make it faster/slower
                    repeat: Infinity 
                  }}
                >
                  {marqueeSkills.map((skill, index) => (
                    // Using a combination of skill name and index for a unique key since array is duplicated
                    <CircularProgress key={`${skill.name}-${index}`} skill={skill} index={index} />
                  ))}
                </motion.div>
                
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default memo(Skills)