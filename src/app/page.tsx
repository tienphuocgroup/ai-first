import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import FundamentalsSection from '@/components/sections/FundamentalsSection'
import RoadmapSection from '@/components/sections/RoadmapSection'
import HumanCapitalSection from '@/components/sections/HumanCapitalSection'
import CEOMandateSection from '@/components/sections/CEOMandateSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <FundamentalsSection />
      
      <RoadmapSection />
      
      <HumanCapitalSection />
      
      <CEOMandateSection />
      
      <Footer />
    </main>
  )
}