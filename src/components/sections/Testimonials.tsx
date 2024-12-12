'use client'

import { motion, MotionProps } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'Working with Mezrax has been transformative for our business. Their innovative solutions and dedicated team have helped us achieve our digital transformation goals.',
    image: '/api/placeholder/80/80',
  },
  {
    name: 'Michael Chen',
    role: 'CEO at InnovateLabs',
    content: 'The expertise and professionalism of the Mezrax team is unmatched. They delivered our project on time and exceeded all expectations.',
    image: '/api/placeholder/80/80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Digital at GlobalTech',
    content: 'Mezrax brought our vision to life with their cutting-edge solutions and attention to detail. A truly outstanding partner for digital innovation.',
    image: '/api/placeholder/80/80',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 bg-zinc-50" id="testimonials">
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6 max-w-3xl mx-auto">
            What our 
            <span className="font-medium"> clients say</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            The trust of our clients is our greatest achievement.
          </p>
        </MotionDiv>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={testimonial.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  display: activeIndex === index ? 'block' : 'none'
                }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-white rounded-3xl p-8 md:p-12"
              >
                {/* Quote */}
                <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed mb-12">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-6">
                  <div className="overflow-hidden rounded-2xl w-16 h-16">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-zinc-900">{testimonial.name}</h3>
                    <p className="text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-8 h-1 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-zinc-900' : 'bg-zinc-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-zinc-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-zinc-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}