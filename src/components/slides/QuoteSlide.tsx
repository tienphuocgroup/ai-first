'use client'

import React from 'react'
import { Slide } from '@/data/slides'
import { motion } from 'framer-motion'

interface QuoteSlideProps {
  slide: Slide
}

export default function QuoteSlide({ slide }: QuoteSlideProps) {
  const { quote, points, main } = slide.content

  return (
    <div className="flex flex-col items-center justify-center h-full px-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl"
      >
        {quote && (
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <span className="absolute -top-8 -left-8 text-8xl text-cyan-400/30 font-serif">
                "
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {quote.text}
              </h1>
              <span className="absolute -bottom-8 -right-8 text-8xl text-cyan-400/30 font-serif">
                "
              </span>
            </motion.div>
            
            {quote.context && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-400 mt-8"
              >
                {quote.context}
              </motion.p>
            )}
          </div>
        )}

        {main && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-bold text-cyan-400 neon-text mb-8"
          >
            {main}
          </motion.h2>
        )}

        {points && points.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-panel p-8 rounded-lg"
          >
            <div className="space-y-4 text-left">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-cyan-400 text-xl mt-1">▸</span>
                  <span className="text-lg text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}