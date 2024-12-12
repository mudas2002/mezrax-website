// src/app/page.tsx
import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
// import Engagement from '@/components/sections/Engagement'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="relative">
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Services />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Portfolio />
        </Suspense>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Engagement />
        </Suspense> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  )
}