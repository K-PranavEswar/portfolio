import { memo } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { riseIn } from '../animations/motion'

const socialLinks = [
  { label: 'GitHub', href: '#contact', icon: 'GH' },
  { label: 'LinkedIn', href: `https://${profile.linkedin}`, icon: 'IN' },
  { label: 'Instagram', href: '#contact', icon: 'IG' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: '@' },
]

function FooterComponent() {
  const brandContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    marginBottom: '1.8rem',
  }

  const textResetStyle = {
    margin: 0,
  }

  return (
    <footer className="luxury-footer">
      <div className="footer-watermark" aria-hidden="true">
        PRANAV
      </div>

      <div className="footer-stars" aria-hidden="true" />
      <div className="footer-beam" aria-hidden="true" />

      <motion.div
        className="footer-shell"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div className="footer-brand" variants={riseIn}>
          <div style={brandContentStyle}>
            <h2 style={textResetStyle}>K PRANAV ESWAR</h2>
            <p style={textResetStyle}>Learning. Building. Evolving. 🚀</p>
            <p style={textResetStyle}>
              Full Stack Developer | Cybersecurity Enthusiast | MCA Student
            </p>
          </div>

          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                className="social-button"
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span>{social.icon}</span>
                <i>{social.label}</i>
              </motion.a>
            ))}
          </div>
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