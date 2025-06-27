'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, TrendingUp, Target, CheckCircle } from 'lucide-react'
import { sectors } from '@/data/content'
import { formatNumber } from '@/lib/utils'

export default function RoadmapSection() {
  const [activeTab, setActiveTab] = useState('manufacturing')
  const [expandedUseCase, setExpandedUseCase] = useState<string | null>(null)

  const activeSector = sectors.find(s => s.id === activeTab)

  return (
    <section id="roadmap" className="py-20 bg-slate-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-executive-dark mb-6">
            Lộ trình ứng dụng AI thực chiến
          </h2>
          <p className="text-xl text-executive-medium max-w-4xl mx-auto leading-relaxed">
            Hướng dẫn cụ thể cho các lĩnh vực trọng điểm của nền kinh tế Việt Nam
          </p>
        </motion.div>

        {/* Sector Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {sectors.map((sector, index) => (
            <motion.button
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveTab(sector.id)}
              className={`m-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === sector.id
                  ? 'bg-vietnam-red text-white shadow-lg'
                  : 'bg-white text-executive-dark hover:bg-red-50 hover:text-vietnam-red border border-slate-200'
              }`}
            >
              <span className="text-2xl mr-2">{sector.icon}</span>
              {sector.name}
            </motion.button>
          ))}
        </div>

        {activeSector && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Sector Overview */}
            <div className="mb-12">
              <div className="card-executive text-center mb-8">
                <div className="text-6xl mb-4">{activeSector.icon}</div>
                <h3 className="text-3xl font-bold text-executive-dark mb-4">
                  {activeSector.name}
                </h3>
                <p className="text-lg text-executive-medium">
                  {activeSector.description}
                </p>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {activeSector.statistics.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="statistic-card text-center"
                  >
                    <div className="text-3xl font-bold text-vietnam-red mb-2">
                      {typeof stat.value === 'number' ? formatNumber(stat.value) : stat.value}
                    </div>
                    <div className="font-semibold text-executive-dark mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-executive-medium">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div id={activeTab} className="space-y-6">
              <h4 className="text-2xl font-bold text-executive-dark mb-6 text-center">
                Ứng dụng thực tế cho {activeSector.name}
              </h4>
              
              {activeSector.useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-executive"
                >
                  <div 
                    className="cursor-pointer"
                    onClick={() => setExpandedUseCase(
                      expandedUseCase === useCase.id ? null : useCase.id
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-vietnam-red text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="text-xl font-semibold text-executive-dark">
                            {useCase.title}
                          </h5>
                          <p className="text-executive-medium">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`w-6 h-6 text-executive-medium transition-transform duration-200 ${
                          expandedUseCase === useCase.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {expandedUseCase === useCase.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-slate-200"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h6 className="font-semibold text-executive-dark mb-3 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-vietnam-red" />
                            Lợi ích chính
                          </h6>
                          <ul className="space-y-2">
                            {useCase.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-executive-medium">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="font-semibold text-executive-dark mb-3 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-vietnam-red" />
                            Triển khai
                          </h6>
                          <p className="text-executive-medium bg-blue-50 p-4 rounded-lg">
                            {useCase.implementation}
                          </p>
                          {useCase.roi && (
                            <div className="mt-4 p-3 bg-green-50 rounded-lg">
                              <span className="text-sm font-medium text-green-800">
                                ROI dự kiến: {useCase.roi}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-vietnam-red to-red-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Sẵn sàng bắt đầu hành trình AI-First?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Hãy bắt đầu với một lĩnh vực và mở rộng dần theo kinh nghiệm thực tế
            </p>
            <button className="bg-white text-vietnam-red px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Tư vấn triển khai
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}