'use client'

import { motion, MotionProps } from 'framer-motion'
import Image from 'next/image'
import { Users, Target, BarChart, Globe } from 'lucide-react'
import MediaDisplay from '@/components/ui/MediaDisplay'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>

const stats = [
  { value: '10+', label: 'Years Experience', Icon: BarChart },
  { value: '200+', label: 'Global Clients', Icon: Globe },
  { value: '50+', label: 'Team Experts', Icon: Users },
  { value: '500+', label: 'Projects Delivered', Icon: Target },
]

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: '/api/placeholder/400/400',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    image: '/api/placeholder/400/400',
  },
  {
    name: 'Emily Williams',
    role: 'Design Director',
    image: '/api/placeholder/400/400',
  },
  {
    name: 'David Kim',
    role: 'Head of Operations',
    image: '/api/placeholder/400/400',
  },
]

// interface MediaDisplayProps {
//   type: 'image' | 'video'
//   src: string
//   poster?: string
// }

// function MediaDisplay({ type, src, poster }: MediaDisplayProps) {
//   return (
//     <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100">
//       {type === 'video' ? (
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           poster={poster}
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src={src} type="video/mp4" />
//         </video>
//       ) : (
//         <Image
//           src={src}
//           alt="Vision Image"
//           fill
//           className="object-cover"
//         />
//       )}
//     </div>
//   )
// }

export default function AboutPage() {
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
              Shaping digital excellence
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
              Since 2014, we've been at the forefront of digital innovation, helping 
              businesses transform and thrive in an ever-evolving digital landscape.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="mb-6 md:mb-8">
                  <stat.Icon className="w-8 h-8 text-zinc-900" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-medium text-zinc-900">
                    {stat.value}
                  </p>
                  <p className="text-base md:text-lg text-zinc-600">
                    {stat.label}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 mb-6">
              Our team
            </h2>
            <p className="text-xl text-zinc-600 max-w-xl mx-auto">
              The talented people behind our success.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {team.map((member, index) => (
              <MotionDiv
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative aspect-[3/4] mb-6 bg-zinc-100 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-zinc-600">
                  {member.role}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 mb-6">
                Our vision
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed">
                We envision a world where technology seamlessly enhances every aspect
                of business and life. Our commitment to innovation and excellence
                drives us to continuously push boundaries and create solutions that
                make this vision a reality.
              </p>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* <MediaDisplay
                type="video"
                src="/logo/about.jpg"
                poster="/logo/poster.jpg" // Optional: Add a fallback image while video loads
              /> */}
              <Image
                src="/logo/about.jpg"
                width={6000}
                height={3000}
                alt="Picture of the author"
                className='rounded-2xl'
              />
            </MotionDiv>
          </div>
        </div>
      </section>
    </main>
  )
}