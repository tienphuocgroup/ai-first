'use client'

import { motion } from 'framer-motion'
import { Users, Target, TrendingUp, ArrowRight, CheckCircle, XCircle, Lightbulb, Settings, BarChart3 } from 'lucide-react'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const pillars = [
  {
    id: 'mindset',
    icon: Lightbulb,
    title: 'Con người & Tư duy',
    subtitle: 'Nền tảng của mọi sự thay đổi',
    color: 'executive-emerald',
    points: [
      'Thay đổi triết lý tuyển dụng: Tố chất > Kinh nghiệm',
      'Lãnh đạo làm gương: AI là đồng nghiệp, không phải công cụ',
      'Văn hóa dữ liệu tinh gọn: Markdown thay PowerPoint'
    ]
  },
  {
    id: 'restructure', 
    icon: Settings,
    title: 'Tái cấu trúc Đội ngũ',
    subtitle: 'Tinh gọn và mạnh mẽ',
    color: 'executive-navy',
    points: [
      'Xóa bỏ vai trò cũ: Tester, BA, Junior/Mid-level',
      'Khai sinh "Orchestrator": Nhạc trưởng điều phối AI',
      'Mô hình vận hành: AI là thành viên bắt buộc trong team'
    ]
  },
  {
    id: 'results',
    icon: BarChart3, 
    title: 'Ứng dụng Thực tiễn',
    subtitle: 'Tạo ra giá trị đột phá',
    color: 'executive-amber',
    points: [
      'Trợ lý AI nội bộ (RAG): Khai phá tri thức ngầm',
      'Báo cáo tiến hóa: Từ mô tả sang đề xuất hành động',
      'Dự án website: 150 triệu → 0 đồng, biến chi phí thành tài sản'
    ]
  }
]

const transformationMetrics = [
  {
    metric: 'Chi phí dự án',
    before: '150 triệu VND',
    after: '0 VND', 
    improvement: '100%',
    description: 'Website development cost eliminated'
  },
  {
    metric: 'Thời gian báo cáo',
    before: '4-6 giờ',
    after: '30 phút',
    improvement: '87.5%', 
    description: 'Report generation time reduced'
  },
  {
    metric: 'Độ chính xác dữ liệu',
    before: '85%',
    after: '97%',
    improvement: '14.1%',
    description: 'Data accuracy improvement'
  },
  {
    metric: 'Tốc độ ra quyết định',
    before: '2-3 ngày',
    after: '30 phút',
    improvement: '95%',
    description: 'Decision-making acceleration'
  }
]

export default function TPGCaseStudySection() {
  const [activePillar, setActivePillar] = useState('mindset')

  return (
    <section id="tpg-case-study" className="py-20 bg-gradient-to-br from-executive-cloud via-white to-executive-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-executive-charcoal mb-6"
          >
            Case Study TPG: Lộ Trình Chuyển Đổi AI
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-executive-pewter max-w-4xl mx-auto leading-relaxed"
          >
            Không xem AI là công cụ, mà là nền tảng để tái cấu trúc toàn diện đội ngũ và quy trình làm việc. 
            Lộ trình không bắt đầu từ công nghệ, mà từ 3 trụ cột chiến lược.
          </motion.p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              const isActive = activePillar === pillar.id
              
              return (
                <motion.div
                  key={pillar.id}
                  variants={itemVariants}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'transform -translate-y-2' 
                      : 'hover:transform hover:-translate-y-1'
                  }`}
                  onClick={() => setActivePillar(pillar.id)}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-executive-navy shadow-xl' 
                      : 'border-executive-steel hover:border-executive-platinum'
                  }`}>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-xl ${
                        pillar.color === 'executive-emerald' ? 'bg-green-100 text-executive-emerald' :
                        pillar.color === 'executive-navy' ? 'bg-blue-100 text-executive-navy' :
                        'bg-amber-100 text-executive-amber'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-executive-charcoal">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-executive-pewter">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-executive-pewter">
                          <CheckCircle className="w-5 h-5 text-executive-emerald mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Transformation Results */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-executive-charcoal text-center mb-12"
          >
            Kết Quả Chuyển Đổi Đo Được
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationMetrics.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border border-executive-steel"
              >
                <h4 className="text-lg font-semibold text-executive-charcoal mb-4">
                  {item.metric}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-executive-pewter">Trước:</span>
                    <span className="text-sm font-medium text-executive-crimson">
                      {item.before}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-executive-pewter">Sau:</span>
                    <span className="text-sm font-medium text-executive-emerald">
                      {item.after}
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-executive-emerald mb-1">
                    ↑{item.improvement}
                  </div>
                  <p className="text-xs text-executive-pewter">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-executive-charcoal rounded-2xl p-8 md:p-12 text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="w-16 h-16 bg-executive-amber rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bài Học Cuối Cùng: Không Có Công Thức Sẵn
            </h3>
            <p className="text-executive-platinum text-lg leading-relaxed max-w-4xl mx-auto">
              Lộ trình của TPG là một ví dụ, không phải công thức để sao chép. 
              Vai trò của CEO không phải tìm "bản đồ" hoàn hảo, mà tạo ra môi trường 
              và văn hóa để đội ngũ tự vẽ nên tấm bản đồ của riêng mình.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}