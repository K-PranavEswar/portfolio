import { memo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { SectionHeader } from '../components/SectionHeader'
import { riseIn, viewport } from '../animations/motion'

// Shared Styles
const inputStyle = {
  width: '100%',
  padding: '1.1rem',
  borderRadius: '12px',
  border: '1px solid rgba(255,255,255,0.06)',
  background: 'rgba(255,255,255,0.02)', // Slightly brighter for contrast on pure black
  color: '#ffffff',
  outline: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
}

function Contact() {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        'service_am84p9h', // Keep these Service/Template IDs
        'template_8cebezc',
        formRef.current,
        { publicKey: 'ChEePP1sR1Htl5cz-' } // Keep this Public Key
      )
      .then(() => {
        setSuccess(true)
        formRef.current.reset()
        setTimeout(() => setSuccess(false), 4000)
      })
      .catch(() => {
        alert('Failed to send message ❌')
      })
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '8rem 1.5rem',
        background: '#000000', // Pure dark background
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Glow Effect */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 255, 195, 0.1) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none', // Important: won't interfere with clicks
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeader eyebrow="Get in touch" title="LET'S COLLABORATE" />

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.01)', // Almost transparent
              backdropFilter: 'blur(20px)',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.06)', // Subtle border
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            }}
          >
            <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Name Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#999', marginLeft: '4px' }}>Name</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ffc3';
                    e.target.style.background = 'rgba(0, 255, 195, 0.03)'; // subtle glow on focus
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.target.style.background = 'rgba(255,255,255,0.02)';
                  }}
                />
              </div>

              {/* Email Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#999', marginLeft: '4px' }}>Email</span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ffc3';
                    e.target.style.background = 'rgba(0, 255, 195, 0.03)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.target.style.background = 'rgba(255,255,255,0.02)';
                  }}
                />
              </div>

              {/* Message Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#999', marginLeft: '4px' }}>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ffc3';
                    e.target.style.background = 'rgba(0, 255, 195, 0.03)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.target.style.background = 'rgba(255,255,255,0.02)';
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending}
                style={{
                  marginTop: '1rem',
                  padding: '1.1rem',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: sending ? '#333' : 'linear-gradient(90deg, #00ffc3, #00aaff)',
                  color: '#000000', // pure black text on bright button
                  cursor: sending ? 'not-allowed' : 'pointer',
                  boxShadow: '0 10px 25px -5px rgba(0, 255, 195, 0.4)', // stronger glow on button
                }}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      textAlign: 'center',
                      color: '#00ffc3',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      background: 'rgba(0, 255, 195, 0.08)',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 255, 195, 0.2)',
                    }}
                  >
                    Message sent successfully! I'll get back to you soon. 🚀
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)