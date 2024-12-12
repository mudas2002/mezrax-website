'use client'

import { motion, MotionProps } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>
const MotionForm = motion.form as React.FC<MotionProps & React.HTMLProps<HTMLFormElement>>
const MotionButton = motion.button as React.FC<MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>
const MotionSpan = motion.span as React.FC<MotionProps & React.HTMLProps<HTMLSpanElement>>
const MotionP = motion.p as React.FC<MotionProps & React.HTMLProps<HTMLParagraphElement>>
const contactMethods = [
  {
    name: 'Email',
    value: 'contact@mezrax.com',
    description: 'Drop us a line anytime',
    Icon: Mail,
  },
  {
    name: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
    Icon: Phone,
  },
  {
    name: 'Office',
    value: '123 Innovation Street, Tech City',
    description: 'Come say hello',
    Icon: MapPin,
  },
  {
    name: 'Hours',
    value: 'Monday to Friday, 8am to 6pm',
    description: 'Were open',
    Icon: Clock,
  },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulated form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col justify-center bg-white text-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-zinc-900 mb-8">
              Get in touch
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
              Let's discuss how we can help transform your digital presence and create 
              something extraordinary together.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {contactMethods.map((method, index) => (
              <MotionDiv
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="mb-6">
                  <method.Icon className="w-8 h-8 text-zinc-900" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-medium text-zinc-900">
                    {method.name}
                  </h2>
                  <p className="text-base text-zinc-600">
                    {method.description}
                  </p>
                  <p className="text-lg text-zinc-900">
                    {method.value}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}

    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-medium text-zinc-900 mb-4">
            Let's start a conversation
          </h2>
          <p className="text-xl text-zinc-600 mb-4">
            Share your vision with us, and we'll help bring it to life.
          </p>
        </MotionDiv>

        <MotionForm
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                placeholder="Name"
                className="w-full px-4 h-12 bg-transparent text-zinc-900 placeholder:text-zinc-400
                        border-b border-zinc-200 focus:border-zinc-900 focus:outline-none
                        transition-colors text-base"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                placeholder="Email"
                className="w-full px-4 h-12 bg-transparent text-zinc-900 placeholder:text-zinc-400
                        border-b border-zinc-200 focus:border-zinc-900 focus:outline-none
                        transition-colors text-base"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              required
              placeholder="Subject"
              className="w-full px-4 h-12 bg-transparent text-zinc-900 placeholder:text-zinc-400
                      border-b border-zinc-200 focus:border-zinc-900 focus:outline-none
                      transition-colors text-base"
            />
          </div>

          <div>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              required
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-4 py-4 bg-transparent text-zinc-900 placeholder:text-zinc-400
                      border-b border-zinc-200 focus:border-zinc-900 focus:outline-none
                      transition-colors text-base resize-none"
            />
          </div>

          <MotionButton
            type="submit"
            disabled={formStatus === 'submitting'}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full h-12 bg-zinc-900 text-white rounded-full text-base font-medium
                    hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed
                    transition-colors flex items-center justify-center gap-2 mt-12"
          >
            {formStatus === 'submitting' ? (
              <>
                <MotionSpan
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                <span>Sending...</span>
              </>
            ) : (
              <>
                Send Message
                <MotionSpan
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </MotionSpan>
              </>
            )}
          </MotionButton>

          {/* Status Messages */}
          {formStatus === 'success' && (
          <MotionP
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-600 text-center mt-6"
          >
            Thank you! We'll get back to you soon.
          </MotionP>
        )}

        {formStatus === 'error' && (
          <MotionP
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-center mt-6"
          >
            Something went wrong. Please try again.
          </MotionP>
        )}
        </MotionForm>
      </div>
    </section>
    </main>
  )
}