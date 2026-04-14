import { memo } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { riseIn, stagger } from '../animations/motion'

const quickLinks = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
]

const socialLinks = [
  { label: 'GitHub', href: '#contact', icon: 'GH' },
  { label: 'LinkedIn', href: `https://${profile.linkedin}`, icon: 'IN' },
  { label: 'Instagram', href: '#contact', icon: 'IG' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: '@' },
]

function FooterComponent() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="luxury-footer">
      <div className="footer-watermark" aria-hidden="true">
        PRANAV
      </div>
      <div className="footer-stars" aria-hidden="true" />
      <div className="footer-beam" aria-hidden="true" />
      <motion.div className="footer-shell" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div className="footer-brand" variants={riseIn}>
          <span className="eyebrow">Portfolio Signal</span>
          <h2>K PRANAV ESWAR</h2>
          <p>Learning. Building. Evolving. 🚀</p>
          <p>Full Stack Developer | Cybersecurity Enthusiast | MCA Student</p>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((social, index) => (
              <motion.a
                className="social-button"
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                key={social.label}
                aria-label={social.label}
                variants={riseIn}
                style={{ animationDelay: `${index * 0.14}s` }}
              >
                <span>{social.icon}</span>
                <i>{social.label}</i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.nav className="footer-links" variants={riseIn} aria-label="Footer quick links">
          <h3>Quick Links</h3>
          {quickLinks.map(([label, id]) => (
            <button type="button" key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </motion.nav>

        <motion.div className="footer-contact" variants={riseIn}>
          <h3>Contact</h3>
          <a href={`mailto:${profile.email}`}>
            <span>@</span>
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
            <span>☎</span>
            {profile.phone}
          </a>
          <p>
            <span>⌖</span>
            {profile.location}
          </p>
          <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
            <span>in</span>
            LinkedIn
          </a>
          <p>
            <span>GH</span>
            GitHub
          </p>
        </motion.div>
      </motion.div>

      <div className="footer-bottom">
        <span />
        <p>© 2026 Pranav Eswar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
