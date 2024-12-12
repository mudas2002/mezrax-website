'use client'

import { motion, MotionProps } from 'framer-motion'
import { Lightbulb, Cloud, Cpu, Shield, ArrowRight } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>
const MotionButton = motion.button as React.FC<MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>

const services = [
  {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions tailored to your needs.',
    Icon: Lightbulb,
    color: 'bg-amber-50'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services for maximum efficiency and reliability.',
    Icon: Cloud,
    color: 'bg-sky-50'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Harness the power of AI to unlock insights and automate processes.',
    Icon: Cpu,
    color: 'bg-violet-50'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security solutions.',
    Icon: Shield,
    color: 'bg-emerald-50'
  }
]

export default function Services() {
  return (
    <section className="py-24 md:py-32" id="services">
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
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6 max-w-3xl mx-auto">
            Comprehensive solutions for
            <span className="font-medium"> digital excellence</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We offer a suite of cutting-edge services designed to transform your business 
            and drive sustainable growth in the digital age.
          </p>
        </MotionDiv>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className={`absolute inset-0 ${service.color} rounded-3xl transform transition-transform duration-300 group-hover:scale-105`} />
              <div className="relative p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <service.Icon className="w-8 h-8 text-zinc-900" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-zinc-900">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      {service.description}
                    </p>
                    <MotionButton
                      className="inline-flex items-center text-zinc-900 font-medium hover:text-zinc-600 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </MotionButton>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}