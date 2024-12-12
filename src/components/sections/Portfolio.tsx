'use client'

import { motion, MotionProps } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>

const portfolioItems = [
  {
    title: 'Digital Banking Platform',
    category: 'FinTech',
    description: 'A comprehensive digital banking solution with AI-powered insights.',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Healthcare Analytics Suite',
    category: 'Healthcare',
    description: 'Real-time analytics platform for healthcare providers.',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Smart City Infrastructure',
    category: 'IoT',
    description: 'Connected infrastructure management system for modern cities.',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'E-Commerce Revolution',
    category: 'Retail',
    description: 'Next-generation e-commerce platform with AR capabilities.',
    image: '/api/placeholder/600/400',
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 md:py-32" id="portfolio">
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6 max-w-3xl mx-auto">
            Featured
            <span className="font-medium"> projects</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform and succeed in the digital age.
          </p>
        </MotionDiv>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {portfolioItems.map((item, index) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-zinc-50 rounded-3xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-medium text-zinc-500 tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-medium text-zinc-900 mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ opacity: 1 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </MotionDiv>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}