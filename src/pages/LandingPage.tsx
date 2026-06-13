import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import TrustedBy from '../components/sections/TrustedBy'
import Features from '../components/sections/Features'
import Services from '../components/sections/Services'
import ProjectShowcase from '../components/sections/ProjectShowcase'
import DevelopmentProcess from '../components/sections/DevelopmentProcess'
import Testimonials from '../components/sections/Testimonials'
import Pricing from '../components/sections/Pricing'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import Footer from '../components/sections/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Services />
        <ProjectShowcase />
        <DevelopmentProcess />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
