// app/page.tsx
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Logos from '@/components/logos'
import Features from '@/components/features'
import Stats from '@/components/stats'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import CtaBanner from '@/components/cta-banner'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <CtaBanner />
      <Footer />
    </main>
  )
}