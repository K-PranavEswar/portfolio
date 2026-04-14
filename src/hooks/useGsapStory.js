import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapStory() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-cinema-panel]').forEach((panel) => {
        gsap.fromTo(
          panel,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 82%',
              once: true,
            },
          },
        )
      })

      const track = document.querySelector('[data-horizontal-track]')
      const rail = document.querySelector('[data-horizontal-rail]')

      if (track && rail && window.innerWidth >= 900) {
        const distance = () => track.scrollWidth - rail.clientWidth
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: rail,
            pin: true,
            scrub: 0.65,
            start: 'top top',
            end: () => `+=${Math.max(distance(), 600)}`,
            invalidateOnRefresh: true,
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])
}
