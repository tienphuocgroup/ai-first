'use client'

import React from 'react'
import { Slide } from '@/data/slides'
import { motion } from 'framer-motion'
import { Terminal, Code2, Database, Cloud } from 'lucide-react'

interface DemoSlideProps {
  slide: Slide
}

export default function DemoSlide({ slide }: DemoSlideProps) {
  const { main, sections } = slide.content

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('input')) return <Database className="w-5 h-5" />
    if (title.toLowerCase().includes('outcome')) return <Cloud className="w-5 h-5" />
    if (title.toLowerCase().includes('step')) return <Code2 className="w-5 h-5" />
    return <Terminal className="w-5 h-5" />
  }

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

      <div className="flex-1 overflow-y-auto">
        {main && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-white font-semibold mb-8 text-center glass-panel p-4 rounded-lg border-2 border-cyan-400"
          >
            {main}
          </motion.div>
        )}

        {sections && (
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-panel p-6 rounded-lg hover:border-cyan-400 hover:border transition-all"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyan-400/20 rounded-lg text-cyan-400">
                    {getIcon(section.title)}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{section.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 p-6 bg-gradient-to-r from-cyan-400/10 to-magenta-500/10 rounded-lg border border-cyan-400/50"
        >
          <div className="flex items-center space-x-2 mb-3">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-mono">DEMO MODE</span>
          </div>
          <p className="text-gray-400 text-sm">
            Live demonstration environment ready. Press D to start interactive demo.
          </p>
        </motion.div>
      </div>
    </div>
  )
}