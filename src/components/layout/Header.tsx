'use client'

import { motion, MotionProps } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLProps<HTMLDivElement>>
const MotionHeader = motion.header as React.FC<MotionProps & React.HTMLProps<HTMLElement>>
const MotionButton = motion.button as React.FC<MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>

const navLinks = [
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Portfolio', href: '#portfolio' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(sectionId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <MotionHeader
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-100' 
          : 'bg-transparent'
      }`}
    >
      <nav className="h-20 max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => scrollToSection('#hero')}
          className="relative h-32 w-32"
        >
          <Image
            src={isScrolled || isMobileMenuOpen ? '/logo/logo2.png' : '/logo/white2.png'}
            alt="Company Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <MotionButton
              key={link.title}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-zinc-900 ${
                isScrolled ? 'text-zinc-600' : 'text-white/90'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {link.title}
            </MotionButton>
          ))}
          <MotionButton
            onClick={() => scrollToSection('#contact')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                : 'bg-white text-zinc-900 hover:bg-white/90'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </MotionButton>
        </div>

        {/* Mobile Menu Button */}
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            isScrolled || isMobileMenuOpen ? 'text-zinc-600' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </MotionButton>
      </nav>

      {/* Mobile Menu */}
      <MotionDiv
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="md:hidden overflow-hidden bg-white/80 backdrop-blur-xl border-t border-zinc-100"
      >
        <div className="max-w-6xl mx-auto px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <MotionButton
              key={link.title}
              onClick={() => scrollToSection(link.href)}
              className="block w-full px-4 py-2 text-left text-sm font-medium text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ x: 0 }}
            >
              {link.title}
            </MotionButton>
          ))}
          <MotionButton
            onClick={() => scrollToSection('#contact')}
            className="w-full px-4 py-2 mt-4 text-sm font-medium bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </MotionButton>
        </div>
      </MotionDiv>
    </MotionHeader>
  )
}