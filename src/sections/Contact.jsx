import { memo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { SectionHeader } from '../components/SectionHeader'
import { riseIn, viewport } from '../animations/motion'

function Contact() {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        'service_am84p9h',
        'template_8cebezc',
        formRef.current,
        {
          publicKey: 'ChEePP1sR1Htl5cz-',
        }
      )
      .then(() => {
        setSuccess(true)
        formRef.current.reset()
        setTimeout(() => setSuccess(false), 3000)
      })
      .catch((error) => {
        console.log(error)
        alert('Failed to send message ❌')
      })
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <section className="section contact-section" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Open a channel for builds, internships, and security-minded web work."
      />

      <motion.div
        className="contact-panel"
        variants={riseIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <label>
            Name
            <input type="text" name="user_name" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" name="user_email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me what we are building."
              required
            />
          </label>

          <button type="submit" className="button button-primary" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {success && <p className="success-text">Message sent successfully 🚀</p>}
        </form>
      </motion.div>
    </section>
  )
}

export default memo(Contact)