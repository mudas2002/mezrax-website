'use client'

import { motion, MotionProps } from 'framer-motion'
import { Code, Cloud, Database, Shield, Smartphone, Pencil, Bot, BarChart } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>

const services = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies.',
    details: [
      'Web Applications',
      'Mobile Solutions',
      'API Development',
      'Enterprise Software'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure for modern businesses.',
    details: [
      'Cloud Migration',
      'AWS & Azure',
      'DevOps',
      'Containerization'
    ]
  },
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that drive business growth and innovation.',
    details: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Data Mining'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    details: [
      'Security Audits',
      'Penetration Testing',
      'Compliance',
      'Security Training'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    details: [
      'iOS Development',
      'Android Development',
      'React Native',
      'Flutter'
    ]
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights.',
    details: [
      'Business Intelligence',
      'Data Visualization',
      'Big Data Solutions',
      'Real-time Analytics'
    ]
  },
  {
    icon: Pencil,
    title: 'UI/UX Design',
    description: 'Create exceptional digital experiences.',
    details: [
      'User Research',
      'Interface Design',
      'Prototyping',
      'Design Systems'
    ]
  },
  {
    icon: BarChart,
    title: 'Digital Strategy',
    description: 'Strategic guidance for digital transformation.',
    details: [
      'Technology Consulting',
      'Digital Roadmap',
      'Process Optimization',
      'Innovation Planning'
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col justify-center bg-white text-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#f5f5f5_0%,_transparent_25%)]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-zinc-900 mb-8">
              Our services
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
              Comprehensive digital solutions tailored to transform your business 
              and drive sustainable growth.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-2xl p-8 hover:bg-zinc-900 transition-colors duration-300"
              >
                <div className="mb-6">
                  <service.icon className="w-8 h-8 text-zinc-900 group-hover:text-white transition-colors" 
                    strokeWidth={1.5} 
                  />
                </div>
                
                <h3 className="text-xl font-medium text-zinc-900 mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-600 mb-6 group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li 
                      key={detail}
                      className="text-sm text-zinc-600 group-hover:text-zinc-400 transition-colors"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 mb-6">
              Our process
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-6">
              A streamlined approach to delivering exceptional results.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
  {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100" />
            
            {['Discovery', 'Planning', 'Development', 'Delivery'].map((step, index) => (
              <MotionDiv
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center mx-auto group-hover:bg-white transition-colors duration-300">
                    <span className="text-3xl font-light text-zinc-900">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-4 px-4">
                  <h3 className="text-xl font-medium text-zinc-900">
                    {step}
                  </h3>
                  <div className="h-px w-12 bg-zinc-200 mx-auto" />
                  <p className="text-base text-zinc-600 leading-relaxed max-w-xs mx-auto">
                    {getProcessDescription(step)}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}

function getProcessDescription(step: string): string {
  switch (step) {
    case 'Discovery':
      return 'Understanding your needs, goals, and challenges through in-depth consultation.'
    case 'Planning':
      return 'Developing a comprehensive strategy and roadmap for your project.'
    case 'Development':
      return 'Building your solution with cutting-edge technology and best practices.'
    case 'Delivery':
      return 'Launching your project and providing ongoing support and maintenance.'
    default:
      return ''
  }
}