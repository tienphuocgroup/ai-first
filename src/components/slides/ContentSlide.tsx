'use client'

import React from 'react'
import { Slide } from '@/data/slides'
import { motion } from 'framer-motion'

interface ContentSlideProps {
  slide: Slide
}

export default function ContentSlide({ slide }: ContentSlideProps) {
  return (
    <div className="flex flex-col h-full px-12 py-8 max-w-6xl mx-auto">
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
        {slide.content.main && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            {slide.content.main}
          </motion.p>
        )}

        {slide.content.sections && (
          <div className="grid gap-6">
            {slide.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`glass-panel p-6 rounded-lg ${
                  section.highlight ? 'border-2 border-cyan-400 neon-glow' : ''
                }`}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  {section.title}
                </h3>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cyan-400 mr-2">▸</span>
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

        {slide.content.points && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 mt-6"
          >
            {slide.content.points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <span className="text-cyan-400 text-2xl mt-1">•</span>
                <span className="text-lg text-gray-300">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {slide.content.quote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-6 glass-panel rounded-lg border-l-4 border-cyan-400"
          >
            <p className="text-lg text-gray-300 italic mb-2">
              "{slide.content.quote.text}"
            </p>
            {slide.content.quote.context && (
              <p className="text-sm text-gray-500">{slide.content.quote.context}</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}