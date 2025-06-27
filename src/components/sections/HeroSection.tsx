'use client'

import { motion } from 'framer-motion'
import { ArrowDown, TrendingUp, Target, Users, Zap } from 'lucide-react'
import { keyStatistics } from '@/data/content'
import { formatNumber, formatPercent } from '@/lib/utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const statisticIcons = {
  'ai-productivity-gain': TrendingUp,
  'vietnam-ai-engineers-need': Target,
  'current-ai-graduates': Users,
  'skill-gap': Users,
  'vietnam-leaders-ai-hiring': TrendingUp,
  'manufacturing-gdp-target': Zap
}

export default function HeroSection() {
  const scrollToNextSection = () => {
    const element = document.getElementById('fundamentals')
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 section-container py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          {/* Main headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mô hình Vận hành{' '}
              <span className="text-gradient bg-gradient-to-r from-vietnam-gold to-yellow-400 bg-clip-text text-transparent">
                AI-First
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
              Tái Cấu trúc Tổ chức và Nguồn lực cho Doanh nghiệp Việt
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Chiến lược thực tiễn giúp CEO và lãnh đạo doanh nghiệp Việt Nam
              chuyển đổi sang mô hình AI-First để tạo lợi thế cạnh tranh bền vững
            </p>
          </motion.div>

          {/* Key Statistics Dashboard */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Tình hình AI tại Việt Nam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyStatistics.map((stat) => {
                const IconComponent = statisticIcons[stat.id as keyof typeof statisticIcons] || TrendingUp
                return (
                  <motion.div
                    key={stat.id}
                    variants={itemVariants}
                    className="statistic-card bg-white/95 backdrop-blur-md border border-white/30 shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <IconComponent className="w-8 h-8 text-vietnam-red" />
                      {stat.trend && (
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          stat.trend === 'up' ? 'bg-green-100 text-green-700' :
                          stat.trend === 'down' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {stat.trend === 'up' ? '↗' : stat.trend === 'down' ? '↘' : '→'}
                        </div>
                      )}
                    </div>
                    <div className="text-3xl font-bold text-vietnam-red mb-2">
                      {typeof stat.value === 'number' ? formatNumber(stat.value) : stat.value}
                    </div>
                    <div className="text-sm font-bold text-slate-700 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {stat.description}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToNextSection}
              className="bg-vietnam-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
            >
              Khám phá Chiến lược
            </button>
            <button className="bg-transparent border-2 border-vietnam-gold text-vietnam-gold hover:bg-vietnam-gold hover:text-executive-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Tải Báo cáo PDF
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-blue-200"
          >
            <p className="text-sm mb-2">Cuộn xuống để tìm hiểu thêm</p>
            <motion.button
              onClick={scrollToNextSection}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}