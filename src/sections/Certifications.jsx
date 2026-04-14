import { memo, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { certifications } from '../data/portfolio'

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [showArrows, setShowArrows] = useState(false)
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8; // Oru thavana 80% scroll aakum
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedCert])

  return (
    <section 
      className="section horizontal-section relative py-20 overflow-hidden" 
      id="certifications"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <SectionHeader
        eyebrow="Credentials"
        title="Verified certifications and learning milestones."
        copy="Click to view details or drag to explore more."
      />

      {/* Main Slider Container */}
      <div className="relative max-w-[1400px] mx-auto px-4 mt-12">
        
        {/* Navigation Arrows - Positioning them on the sides of the cards */}
        <div className="hidden md:block">
          <AnimatePresence>
            {showArrows && (
              <>
                <button 
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-cyan-500/40 text-white p-4 rounded-full backdrop-blur-xl border border-white/20 transition-all shadow-lg"
                  aria-label="Previous"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-cyan-500/40 text-white p-4 rounded-full backdrop-blur-xl border border-white/20 transition-all shadow-lg"
                  aria-label="Next"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                </button>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Horizontal Rail */}
        <div 
          className="horizontal-rail relative overflow-x-auto no-scrollbar w-full pb-10" 
          ref={carouselRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          <motion.div
            drag="x"
            dragConstraints={carouselRef}
            className="certificate-track flex gap-8 cursor-grab active:cursor-grabbing w-max px-12"
          >
            {certifications.map((cert, index) => (
              <motion.button
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                whileHover={{ y: -8 }}
                className="certificate-card group text-left w-[320px] sm:w-[400px] shrink-0 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl p-8 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                <div className="flex justify-between items-start">
                  <small className="text-cyan-400 uppercase tracking-[0.2em] text-[10px] font-black opacity-80">
                    Credential {String(index + 1).padStart(2, '0')}
                  </small>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-cyan-400"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>

                {/* Title Section - Adjusted for better visibility */}
                <h3 className="mt-6 text-2xl font-bold text-white leading-[1.3] min-h-[4rem]">
                  {cert.title}
                </h3>

                <p className="mt-2 text-zinc-400 font-medium">
                  {cert.issuer}
                </p>

                <div className="mt-12 flex items-center justify-between">
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[11px] font-bold text-zinc-300 uppercase tracking-tighter">
                    {cert.issued}
                  </div>
                  <span className="text-cyan-400 text-sm font-bold flex items-center gap-2">
                    View <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Modal - Unchanged but ensure image fits well */}
      <AnimatePresence>
        {selectedCert && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCert(null)} className="absolute inset-0 bg-black/90 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full">
                  <div className="p-6 border-b border-white/10 flex justify-between items-center bg-zinc-900">
                      <h2 className="font-bold text-white text-lg">{selectedCert.title}</h2>
                      <button onClick={() => setSelectedCert(null)} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                      </button>
                  </div>
                  <div className="p-4 bg-black/40 flex justify-center">
                    <img src={selectedCert.image} alt={selectedCert.title} className="max-h-[75vh] object-contain shadow-2xl rounded-lg" />
                  </div>
              </motion.div>
           </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default memo(Certifications)