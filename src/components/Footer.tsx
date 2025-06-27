'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-executive-dark text-white py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-vietnam-red to-vietnam-gold rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">AI</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">AI-First Vietnam</h3>
            <p className="text-slate-300">
              Chiến lược chuyển đổi AI cho doanh nghiệp Việt Nam
            </p>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-400">
              © 2024 AI-First Vietnam Strategy. Được phát triển để hỗ trợ doanh nghiệp Việt Nam chuyển đổi số.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}