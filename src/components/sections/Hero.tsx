// 'use client'

// import { motion, MotionProps } from 'framer-motion'
// import Link from 'next/link'
// import { ArrowRight, ChevronDown } from 'lucide-react'

// const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>

// export default function Hero() {
//   return (
//     <section className="relative min-h-[100vh] flex flex-col justify-center bg-white text-zinc-900 overflow-hidden">
//       {/* Subtle gradient background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#f5f5f5_0%,_transparent_50%)]" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto">
//           {/* Pre-title */}
//           <MotionDiv
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//             className="mb-6"
//           >
//             <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 text-zinc-800">
//               <span className="text-sm font-medium tracking-wide">Mezrax</span>
//             </div>
//           </MotionDiv>

//           {/* Main title with gradient text */}
//           <MotionDiv 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
//               Build
//               <span className="font-normal"> the future </span>
//               <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
//                 with confidence
//               </span>
//             </h1>
//           </MotionDiv>

//           {/* Subtitle */}
//           <MotionDiv 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="text-lg md:text-xl text-zinc-600 mb-12 leading-relaxed max-w-2xl"
//           >
//             Transform your digital presence with innovative solutions that seamlessly blend design and technology.
//           </MotionDiv>

//           {/* CTA Section */}
//           <MotionDiv 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <Link 
//               href="#contact"
//               className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-all duration-200 ease-in-out"
//             >
//               Get Started
//               <MotionDiv
//                 initial={{ x: 0 }}
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
//                 className="ml-2"
//               >
//                 <ArrowRight className="w-4 h-4" />
//               </MotionDiv>
//             </Link>
//             <Link 
//               href="#learn-more" 
//               className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
//             >
//               Learn More
//               <ChevronDown className="w-4 h-4 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
//             </Link>
//           </MotionDiv>
//         </div>
//       </div>

//       {/* Bottom gradient overlay */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
//       {/* Scroll indicator */}
//       <MotionDiv 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <MotionDiv
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="w-1 h-12 rounded-full bg-gradient-to-b from-zinc-200 to-transparent"
//         />
//       </MotionDiv>
//     </section>
//   )
// }

'use client'

import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>
const MotionPath = motion.path as React.FC<MotionProps & React.SVGProps<SVGPathElement>>
const MotionSpan = motion.span as React.FC<MotionProps & React.HTMLProps<HTMLSpanElement>>

export default function Hero() {
  // Add client-side only rendering for animations
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center bg-white text-zinc-900 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#f5f5f5_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_#fafafa_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,_#fafafa_0%,_white_25%,_#f5f5f5_50%,_white_75%,_#fafafa_100%)] opacity-40" />
      
      {/* Abstract SVG Pattern */}
      {isMounted && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-[0.15]">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <MotionPath
              d="M 100 0 L 200 50 L 200 150 L 100 200 L 0 150 L 0 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1 }
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <MotionPath
              d="M 100 20 L 180 60 L 180 140 L 100 180 L 20 140 L 20 60 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1 }
              }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <MotionPath
              d="M 100 40 L 160 70 L 160 130 L 100 160 L 40 130 L 40 70 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1 }
              }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="8"
              className="fill-zinc-900"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </svg>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Pre-title */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 text-zinc-800">
              <span className="text-sm font-medium tracking-wide">Mezrax</span>
            </div>
          </MotionDiv>

          {/* Main title with gradient text */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
              Build
              <span className="font-normal"> the future </span>
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
                with confidence
              </span>
            </h1>
          </MotionDiv>

          {/* Subtitle */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-600 mb-12 leading-relaxed max-w-2xl"
          >
            Transform your digital presence with innovative solutions that seamlessly blend design and technology.
          </MotionDiv>

          {/* CTA Section */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="#contact"
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-all duration-200 ease-in-out"
            >
              Get Started
              <MotionSpan
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                <ArrowRight className="w-4 h-4" />
              </MotionSpan>
            </Link>
            <Link 
              href="#learn-more" 
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Learn More
              <ChevronDown className="w-4 h-4 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>
          </MotionDiv>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
      {/* Scroll indicator */}
      {isMounted && (
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <MotionDiv
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-12 rounded-full bg-gradient-to-b from-zinc-200 to-transparent"
          />
        </MotionDiv>
      )}
    </section>
  )
}