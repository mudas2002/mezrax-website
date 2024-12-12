'use client'

import { motion, MotionProps } from 'framer-motion'
import { CloudLightning, Globe2, Target } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>

const stats = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Global Clients', value: '200+' },
  { label: 'Team Experts', value: '50+' },
  { label: 'Years of Innovation', value: '10+' },
]

const values = [
  {
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge solutions and emerging technologies.',
    Icon: CloudLightning
  },
  {
    title: 'Client Success',
    description: 'Dedicated to delivering exceptional results that exceed expectations.',
    Icon: Target
  },
  {
    title: 'Global Reach',
    description: 'Serving clients worldwide with localized expertise and global insights.',
    Icon: Globe2
  },
]

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Content */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-zinc-500 tracking-wider uppercase mb-8 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6 max-w-3xl mx-auto">
            Transforming ideas into
            <span className="font-medium"> digital reality</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Since 2014, we've been at the forefront of digital innovation, helping businesses 
            transform and thrive in the digital age.
          </p>
        </MotionDiv>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <MotionDiv
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center"
            >
              <div className="text-4xl font-light text-zinc-900 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500 font-medium tracking-wide uppercase">{stat.label}</div>
            </MotionDiv>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-zinc-900">
                Building the future of
                <span className="font-medium"> digital experiences</span>
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Our team combines technical expertise with creative innovation to deliver 
                solutions that drive real business value. Every project is an opportunity 
                to push boundaries and create something extraordinary.
              </p>
            </div>

            <div className="space-y-12">
              {values.map((item, index) => (
                <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-zinc-800">
                    <item.Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-zinc-900 mb-2">{item.title}</h4>
                    <p className="text-zinc-600">{item.description}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-zinc-100 to-white rounded-3xl -z-10" />
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden bg-zinc-100">
                <img
                  src="/api/placeholder/800/1000"
                  alt="About Mezrax"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}