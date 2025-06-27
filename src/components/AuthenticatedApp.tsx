'use client'

import { useState } from 'react'
import PasswordProtection from './PasswordProtection'
import Navigation from './Navigation'
import HeroSection from './sections/HeroSection'
import FundamentalsSection from './sections/FundamentalsSection'
import TPGCaseStudySection from './sections/TPGCaseStudySection'
import HumanCapitalSection from './sections/HumanCapitalSection'
import CEOMandateSection from './sections/CEOMandateSection'
import Footer from './Footer'

export default function AuthenticatedApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuthenticated = () => {
    setIsAuthenticated(true)
  }

  const AppContent = () => (
    <>
      <Navigation />
      <HeroSection />
      <FundamentalsSection />
      <TPGCaseStudySection />
      <HumanCapitalSection />
      <CEOMandateSection />
      <Footer />
    </>
  )

  return (
    <PasswordProtection onAuthenticated={handleAuthenticated}>
      <AppContent />
    </PasswordProtection>
  )
}