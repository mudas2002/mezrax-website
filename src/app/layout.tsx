// src/app/layout.tsx
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: 'Mezrax - Innovation, Seamlessly Delivered',
  description: 'Leading innovation in digital solutions with cutting-edge technology and seamless delivery.',
  keywords: ['Digital Transformation', 'Innovation', 'Technology Solutions', 'Software Development', 'IT Services'],
  authors: [{ name: 'Mezrax' }],
  creator: 'Mezrax',
  publisher: 'Mezrax',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mezrax.com',
    siteName: 'Mezrax',
    title: 'Mezrax - Innovation, Seamlessly Delivered',
    description: 'Leading innovation in digital solutions with cutting-edge technology and seamless delivery.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mezrax',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mezrax - Innovation, Seamlessly Delivered',
    description: 'Leading innovation in digital solutions with cutting-edge technology and seamless delivery.',
    images: ['/images/twitter-image.jpg'],
    creator: '@mezrax',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${lexend.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}