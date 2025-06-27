'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigationItems } from '@/data/content'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
          : 'bg-transparent'
      )}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-vietnam-red to-vietnam-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-executive-dark">
                AI-First Vietnam
              </h1>
              <p className="text-sm text-executive-medium">
                Chiến lược cho Doanh nghiệp
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'nav-link',
                    activeSection === item.id && 'text-vietnam-red'
                  )}
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown className="inline-block w-4 h-4 ml-1" />
                  )}
                </button>
                
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => scrollToSection(child.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-executive-medium hover:text-vietnam-red hover:bg-slate-50 transition-colors"
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <button className="btn-primary">
              Tải Báo cáo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-executive-dark hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 py-4"
          >
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'block w-full text-left py-2 px-4 rounded-lg nav-link',
                      activeSection === item.id && 'text-vietnam-red bg-red-50'
                    )}
                  >
                    {item.title}
                  </button>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => scrollToSection(child.href)}
                          className="block w-full text-left py-1 px-4 text-sm text-executive-medium hover:text-vietnam-red transition-colors"
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <button className="btn-primary w-full">
                  Tải Báo cáo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}