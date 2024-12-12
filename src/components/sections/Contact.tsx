'use client'

import { motion, MotionProps } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Mail, Phone, ArrowRight, Loader2 } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>
const MotionForm = motion.form as React.FC<MotionProps & React.HTMLProps<HTMLFormElement>>
const MotionButton = motion.button as React.FC<MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success')
    }, 1000)
  }

  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-zinc-500 tracking-wider uppercase mb-8 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6 max-w-3xl mx-auto">
            Let's discuss your
            <span className="font-medium"> next project</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your digital transformation journey? Get in touch with our team.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              {[
                { 
                  Icon: MapPin, 
                  text: '123 Innovation Street, Tech City, TC 12345',
                  label: 'Visit us'
                },
                { 
                  Icon: Mail, 
                  text: 'contact@mezrax.com',
                  label: 'Email us'
                },
                { 
                  Icon: Phone, 
                  text: '+1 (555) 123-4567',
                  label: 'Call us'
                },
              ].map((item) => (
                <div key={item.text} className="group">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                      <item.Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-500 mb-1">
                        {item.label}
                      </p>
                      <p className="text-zinc-900">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Contact Form */}
          <MotionForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 bg-zinc-50 p-8 rounded-3xl"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 h-12 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 h-12 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow resize-none"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            {/* Submit Button */}
            <MotionButton
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={formStatus === 'submitting'}
              className="group w-full h-12 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </MotionButton>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <p className="text-emerald-600 text-sm font-medium">Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again.</p>
            )}
          </MotionForm>
        </div>
      </div>
    </section>
  )
}