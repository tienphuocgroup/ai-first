'use client'

import React, { useState } from 'react'
import { Slide } from '@/data/slides'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

interface CodeSlideProps {
  slide: Slide
}

export default function CodeSlide({ slide }: CodeSlideProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { code } = slide.content

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      javascript: 'text-yellow-400',
      typescript: 'text-blue-400',
      python: 'text-green-400',
      markdown: 'text-purple-400',
      text: 'text-gray-400',
      bash: 'text-emerald-400',
      json: 'text-orange-400'
    }
    return colors[language.toLowerCase()] || 'text-gray-400'
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

      <div className="flex-1 overflow-y-auto space-y-6">
        {code && code.map((snippet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            className="glass-panel rounded-lg overflow-hidden"
          >
            {snippet.title && (
              <div className="px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                <h3 className="font-semibold text-white">{snippet.title}</h3>
                <span className={`text-sm ${getLanguageColor(snippet.language)}`}>
                  {snippet.language}
                </span>
              </div>
            )}
            
            <div className="relative">
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-gray-300 font-mono whitespace-pre">
                  {snippet.code}
                </code>
              </pre>
              
              <button
                onClick={() => copyToClipboard(snippet.code, index)}
                className="absolute top-4 right-4 p-2 glass-panel rounded-lg hover:bg-gray-700/50 transition-colors"
                title="Copy code"
              >
                {copiedIndex === index ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}