'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Maximize, Clock, Hash } from 'lucide-react'
import { slides, Slide } from '@/data/slides'
import SlideContent from './slides/SlideContent'
import { motion, AnimatePresence } from 'framer-motion'

export default function SlideDeck() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isPresenting, setIsPresenting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [slideStartTime, setSlideStartTime] = useState(Date.now())

  const currentSlide = slides[currentSlideIndex]
  const totalSlides = slides.length
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index)
      setSlideStartTime(Date.now())
    }
  }, [totalSlides])

  const nextSlide = useCallback(() => {
    goToSlide(currentSlideIndex + 1)
  }, [currentSlideIndex, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlideIndex - 1)
  }, [currentSlideIndex, goToSlide])

  const togglePresentation = () => {
    setIsPresenting(!isPresenting)
    if (!isPresenting) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevSlide()
          break
        case 'f':
        case 'F':
          e.preventDefault()
          togglePresentation()
          break
        case 'p':
        case 'P':
          e.preventDefault()
          setIsPaused(!isPaused)
          break
        case 'Escape':
          if (isPresenting) {
            setIsPresenting(false)
          }
          break
        default:
          // Check for number keys to jump to specific slides
          if (e.key >= '0' && e.key <= '9') {
            const slideNumber = parseInt(e.key) - 1
            if (slideNumber >= 0 && slideNumber < Math.min(9, totalSlides)) {
              goToSlide(slideNumber)
            }
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlideIndex, nextSlide, prevSlide, isPresenting, isPaused, totalSlides, goToSlide])

  // Timer
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - slideStartTime) / 1000))
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isPaused, slideStartTime])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="slide-container scan-line">
      {/* Background grid effect */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      {/* Header */}
      <header className="slide-header px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold text-cyan-400 neon-text">
              AI-First Engineering
            </h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Hash className="w-4 h-4" />
              <span>{currentSlideIndex + 1} / {totalSlides}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-300">{formatTime(elapsedTime)}</span>
              <span className="text-gray-500">/ {currentSlide.duration}m</span>
            </div>
            
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              title={isPaused ? "Resume (P)" : "Pause (P)"}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
            
            <button
              onClick={togglePresentation}
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              title="Fullscreen (F)"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-magenta-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </header>

      {/* Main content */}
      <main className="slide-content">
        <AnimatePresence initial={false} custom={currentSlideIndex}>
          <motion.div
            key={currentSlideIndex}
            custom={currentSlideIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                nextSlide()
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide()
              }
            }}
            className="w-full h-full"
          >
            <SlideContent slide={currentSlide} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer navigation */}
      <footer className="slide-footer px-6 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="cyber-button px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
            title="Previous (←)"
          >
            <ChevronLeft className="w-5 h-5 inline mr-2" />
            Previous
          </button>

          {/* Slide dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlideIndex
                    ? 'w-8 bg-cyan-400 neon-glow'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                title={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className="cyber-button px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
            title="Next (→)"
          >
            Next
            <ChevronRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>

        {/* Keyboard shortcuts hint */}
        <div className="mt-2 text-center text-xs text-gray-500">
          <span className="mr-4">← → Navigate</span>
          <span className="mr-4">Space Next</span>
          <span className="mr-4">F Fullscreen</span>
          <span className="mr-4">P Pause</span>
          <span>1-9 Jump</span>
        </div>
      </footer>
    </div>
  )
}