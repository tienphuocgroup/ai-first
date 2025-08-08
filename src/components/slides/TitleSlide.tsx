'use client'

import React from 'react'
import { Slide } from '@/data/slides'
import { motion } from 'framer-motion'

interface TitleSlideProps {
  slide: Slide
}

export default function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl font-bold mb-6 holographic"
      >
        {slide.title}
      </motion.h1>
      
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-cyan-400 mb-8 neon-text"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      
      {slide.content.main && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8"
        >
          {slide.content.main}
        </motion.p>
      )}
      
      {slide.content.points && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col space-y-3 text-left"
        >
          {slide.content.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-neon" />
              <span className="text-lg text-gray-400">{point}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}