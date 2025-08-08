'use client'

import React from 'react'
import { Slide } from '@/data/slides'
import { motion } from 'framer-motion'

interface ComparisonSlideProps {
  slide: Slide
}

export default function ComparisonSlide({ slide }: ComparisonSlideProps) {
  const { comparison, quote } = slide.content

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
        {comparison && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-x-auto mb-8"
          >
            <table className="w-full glass-panel rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-gray-700">
                  {comparison.headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-left text-cyan-400 font-bold uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + rowIndex * 0.1 }}
                    className={`border-b border-gray-800 ${
                      row.highlight
                        ? 'bg-cyan-400/10 border-l-4 border-cyan-400'
                        : 'hover:bg-gray-800/50'
                    } transition-colors`}
                  >
                    {row.values.map((value, colIndex) => (
                      <td
                        key={colIndex}
                        className={`px-6 py-4 ${
                          colIndex === 0
                            ? 'font-semibold text-white'
                            : 'text-gray-300'
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {quote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-8 glass-panel rounded-lg border-2 border-cyan-400 neon-glow text-center"
          >
            <p className="text-2xl text-white font-semibold mb-4">
              "{quote.text}"
            </p>
            {quote.author && (
              <p className="text-lg text-cyan-400">{quote.author}</p>
            )}
            {quote.context && (
              <p className="text-sm text-gray-500 mt-2">{quote.context}</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}