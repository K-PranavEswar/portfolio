import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { skillCategories } from '../data/portfolio'

const chipVariants = {
  initial: { opacity: 0, scale: 0.92, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: '0px 10px 30px rgba(255, 32, 56, 0.2)',
    borderColor: 'rgba(255, 32, 56, 0.5)',
  },
}

const SkillChip = memo(({ skill }) => (
  <motion.div
    variants={chipVariants}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    className="flex items-center gap-4 px-6 py-4 min-w-[220px] bg-[#0b0b0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl cursor-default"
  >
    <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      {skill.icon}
    </span>

    <div className="flex flex-col">
      <strong className="text-white text-sm tracking-wide">
        {skill.name}
      </strong>

      <div className="flex items-center gap-2 mt-1">
        <div className="h-1 w-14 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#ff2038]"
            style={{ width: `${skill.level}%` }}
          />
        </div>

        <span className="text-[10px] text-gray-400 font-mono uppercase tracking-tight">
          {skill.level}%
        </span>
      </div>
    </div>
  </motion.div>
))

function SkillLane({ skills, reverse = false, speed = 28 }) {
  const duplicatedSkills = useMemo(
    () => [...skills, ...skills, ...skills],
    [skills]
  )

  return (
    <div className="relative w-screen ml-[calc(50%-50vw)] overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#020203] via-[#020203]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#020203] via-[#020203]/80 to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex gap-6 w-max px-6"
        animate={{
          x: reverse ? ['-33.333%', '0%'] : ['0%', '-33.333%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillChip
            key={`${skill.name}-${index}`}
            skill={skill}
          />
        ))}
      </motion.div>
    </div>
  )
}

function Skills() {
  const allSkills = useMemo(
    () => skillCategories.flatMap((cat) => cat.skills),
    []
  )

  const midpoint = Math.ceil(allSkills.length / 2)
  const firstLane = allSkills.slice(0, midpoint)
  const secondLane = allSkills.slice(midpoint)

  return (
    <section
      className="section section-wide py-20 overflow-hidden bg-[#020203] relative"
      id="skills"
    >
      {/* cinematic background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,32,56,0.05)_0%,transparent_70%)]" />

        <motion.div
          className="absolute top-[10%] left-[-5%] h-[420px] w-[420px] rounded-full bg-[#ff2038]/10 blur-[140px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-[15%] right-[-5%] h-[350px] w-[350px] rounded-full bg-white/[0.03] blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeader
          eyebrow="Expertise"
          title={
            <>
              <span className="text-white">TECH </span>
              <span className="text-[#ff2038]">STACK</span>
              <span className="text-white"> & TOOLS</span>
            </>
          }
        />

        <div className="relative z-10 flex flex-col gap-8 mt-6">
          <SkillLane
            skills={firstLane}
            speed={24}
          />

          <SkillLane
            skills={secondLane}
            reverse
            speed={30}
          />
        </div>
      </div>
    </section>
  )
}

export default memo(Skills)