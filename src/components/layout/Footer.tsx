

// 'use client'

// import { motion, MotionProps } from 'framer-motion'
// import Link from 'next/link'

// const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>
// const MotionFooter = motion.footer as React.FC<MotionProps & React.HTMLProps<HTMLElement>>

// const links = [
//   { title: 'About', href: '#about' },
//   { title: 'Services', href: '#services' },
//   { title: 'Portfolio', href: '#portfolio' },
//   { title: 'Contact', href: '#contact' },
// ]

// const socialLinks = [
//   { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
//   { name: 'LinkedIn', href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
//   { name: 'GitHub', href: '#', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
// ]

// export default function Footer() {
//   return (
//     <MotionFooter 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       className="bg-gray-900 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Mezrax</h3>
//             <p className="text-gray-400">
//               Transforming businesses through innovative digital solutions.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {links.map((link) => (
//                 <li key={link.title}>
//                   <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
//                     {link.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Contact</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>123 Innovation Street</li>
//               <li>Tech City, TC 12345</li>
//               <li>contact@mezrax.com</li>
//               <li>+1 (555) 123-4567</li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="text-gray-400 hover:text-white transition-colors"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span className="sr-only">{social.name}</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d={social.icon} />
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
//           <p>© {new Date().getFullYear()} Mezrax. All rights reserved.</p>
//         </div>
//       </div>
//     </MotionFooter>
//   )
// }



'use client'

import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import { Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>
const MotionFooter = motion.footer as React.FC<MotionProps & React.HTMLProps<HTMLElement>>
const MotionA = motion.a as React.FC<MotionProps & React.HTMLProps<HTMLAnchorElement>>
const MotionButton = motion.button as React.FC<MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>

const links = [
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Portfolio', href: '#portfolio' },
  { title: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'Twitter', href: '#', Icon: Twitter },
  { name: 'LinkedIn', href: '#', Icon: Linkedin },
  { name: 'GitHub', href: '#', Icon: Github },
]

export default function Footer() {
  return (
    <MotionFooter 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-zinc-950 pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-xl font-medium text-white">
              Mezrax
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <MotionA
                  key={social.name}
                  href={social.href}
                  className="text-zinc-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.Icon className="h-5 w-5" />
                </MotionA>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-white">Quick Links</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-white">Contact</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>123 Innovation Street</li>
              <li>Tech City, TC 12345</li>
              <li>
                <a 
                  href="mailto:contact@mezrax.com" 
                  className="hover:text-white transition-colors"
                >
                  contact@mezrax.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+15551234567" 
                  className="hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-white">Stay Updated</p>
            <p className="text-sm text-zinc-400">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm bg-white/5 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
              <MotionButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-4 py-2 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
              >
                Subscribe
              </MotionButton>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Mezrax. All rights reserved.
          </p>
        </div>
      </div>
    </MotionFooter>
  )
}