'use client'

import React, { useState } from 'react'
import { Slide } from '@/data/slides'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

interface InteractiveSlideProps {
  slide: Slide
}

export default function InteractiveSlide({ slide }: InteractiveSlideProps) {
  const [selectedQuadrant, setSelectedQuadrant] = useState<number | null>(null)
  const { main, sections } = slide.content

  const quadrants = [
    { 
      title: 'Low Ambiguity + Low Irreversibility',
      decision: '→ AI',
      color: 'from-green-400 to-emerald-500',
      description: 'Routine tasks, documentation, test generation'
    },
    { 
      title: 'High Ambiguity + Low Irreversibility',
      decision: '→ AI with Human Review',
      color: 'from-yellow-400 to-orange-500',
      description: 'Exploration, prototypes, initial drafts'
    },
    { 
      title: 'Low Ambiguity + High Irreversibility',
      decision: '→ Human with AI Assistance',
      color: 'from-blue-400 to-purple-500',
      description: 'Production deployments, data migrations'
    },
    { 
      title: 'High Ambiguity + High Irreversibility',
      decision: '→ Human Decides',
      color: 'from-red-400 to-pink-500',
      description: 'Architecture decisions, security policies'
    }
  ]

  return (
    <div className="flex flex-col h-full px-12 py-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-5xl font-bold text-cyan-400 neon-text mb-2">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <h2 className="text-2xl text-gray-400">{slide.subtitle}</h2>
        )}
      </motion.div>

      <div className="flex-1 flex flex-col justify-center">
        {main && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-white text-center mb-8"
          >
            {main}
          </motion.p>
        )}

        {sections ? (
          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`glass-panel p-6 rounded-lg cursor-pointer hover:scale-105 transition-transform ${
                  section.highlight ? 'border-2 border-cyan-400 neon-glow' : ''
                }`}
                onClick={() => setSelectedQuadrant(index)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {section.title}
                    </h3>
                    <p className="text-lg text-cyan-400 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {section.content}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-cyan-400" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {quadrants.map((quadrant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`glass-panel p-6 rounded-lg cursor-pointer hover:scale-105 transition-all ${
                  selectedQuadrant === index ? 'ring-2 ring-cyan-400' : ''
                }`}
                onClick={() => setSelectedQuadrant(index)}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${quadrant.color} rounded-full mb-4`} />
                <h3 className="text-lg font-bold text-white mb-2">
                  {quadrant.title}
                </h3>
                <p className="text-xl text-cyan-400 font-semibold mb-2">
                  {quadrant.decision}
                </p>
                <p className="text-sm text-gray-400">
                  {quadrant.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {selectedQuadrant !== null && !sections && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 glass-panel rounded-lg border-2 border-cyan-400"
          >
            <h4 className="text-xl font-bold text-white mb-2">
              Decision Framework Applied
            </h4>
            <p className="text-gray-300">
              {quadrants[selectedQuadrant].description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}