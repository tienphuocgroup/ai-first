'use client'

import { motion } from 'framer-motion'
import { aiModelComparison } from '@/data/content'
import { CheckCircle, ArrowRight, Users, Settings, Shield, BarChart3 } from 'lucide-react'
import { useState } from 'react'

export default function FundamentalsSection() {
  return (
    <section id="fundamentals" className="py-20 bg-gradient-to-br from-executive-cloud via-white to-executive-mist">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-executive-charcoal mb-6">
            Nền tảng - Định nghĩa Tư duy{' '}
            <span className="text-gradient">AI-First</span>
          </h2>
          <p className="text-xl text-executive-pewter max-w-4xl mx-auto leading-relaxed">
            Hiểu rõ sự khác biệt giữa mô hình AI Hỗ trợ và AI-First để xây dựng 
            chiến lược phù hợp cho doanh nghiệp Việt Nam
          </p>
        </motion.div>

        <div id="ai-first-definition" className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-executive-steel mb-8">
              <h3 className="text-2xl font-bold text-executive-charcoal mb-4">
                Từ khẩu hiệu thời thượng đến mô hình kinh doanh
              </h3>
              <p className="text-executive-pewter leading-relaxed mb-4">
                Thưa các anh chị CEO, dạo này đi đâu chúng ta cũng nghe người ta nói về "AI-First" (Ưu tiên AI), 
                nghe rất kêu, rất "Tây". Tuy nhiên, với một doanh nghiệp Việt Nam đang tìm kiếm lợi thế cạnh tranh bền vững, 
                chúng ta cần một cách hiểu thực tế và sâu sắc hơn.
              </p>
              <p className="text-executive-pewter leading-relaxed mb-4">
                Một mô hình vận hành AI-First thực thụ không phải là việc trang bị vài công cụ AI cho các quy trình cũ, 
                mà là một cam kết chiến lược, xem trí tuệ máy móc là xương sống của toàn bộ doanh nghiệp.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-executive-mist rounded-lg">
                  <h4 className="font-semibold text-executive-charcoal mb-2">AI Nhận biết</h4>
                  <p className="text-sm text-executive-pewter">Dùng công cụ AI riêng lẻ cho tác vụ đơn giản</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-executive-charcoal mb-2">AI Hỗ trợ</h4>
                  <p className="text-sm text-executive-pewter">Tăng cường hiệu quả cho quy trình do con người dẫn dắt</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg border-2 border-executive-emerald">
                  <h4 className="font-semibold text-executive-emerald mb-2">AI-First</h4>
                  <p className="text-sm text-executive-pewter">AI là xương sống trong thiết kế và vận hành</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="chart-container"
          >
            <h4 className="text-xl font-bold text-executive-charcoal mb-6">
              So sánh Mô hình Vận hành AI Hỗ trợ và AI-First
            </h4>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 font-semibold text-executive-charcoal">
                      Khía cạnh
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-blue-600">
                      Mô hình AI Hỗ trợ
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-vietnam-red">
                      Mô hình AI-First
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {aiModelComparison.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-4 px-4 font-medium text-executive-charcoal">
                        {row.aspect}
                      </td>
                      <td className="py-4 px-4 text-executive-pewter">
                        {row.aiSupported}
                      </td>
                      <td className="py-4 px-4 text-executive-pewter">
                        {row.aiFirst}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* IT Precedents Section */}
        <div id="it-precedents" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-executive-charcoal mb-8 text-center">
              Tiền lệ từ ngành IT - Lập trình Tác tử và Mô hình Kỹ sư Mới
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="card-executive">
                <h4 className="text-xl font-bold text-executive-charcoal mb-4">
                  Trợ lý Lập trình AI
                </h4>
                <p className="text-executive-pewter mb-4">
                  GitHub Copilot và các công cụ tương tự đã mang lại bước nhảy vọt về năng suất, 
                  giúp lập trình viên hoàn thành tác vụ nhanh hơn 20-50%.
                </p>
                <ul className="space-y-2 text-sm text-executive-pewter">
                  <li>• Tự động hóa công việc lặp đi lặp lại</li>
                  <li>• Cải thiện sự hài lòng của lập trình viên</li>
                  <li>• Cho phép tập trung vào giải quyết vấn đề sáng tạo</li>
                </ul>
              </div>

              <div className="card-executive">
                <h4 className="text-xl font-bold text-executive-charcoal mb-4">
                  AI Tác tử (Agentic AI)
                </h4>
                <p className="text-executive-pewter mb-4">
                  Hệ thống tự trị hiểu mục tiêu cấp cao, lập kế hoạch và thực thi 
                  quy trình phức tạp với sự can thiệp tối thiểu của con người.
                </p>
                <ul className="space-y-2 text-sm text-executive-pewter">
                  <li>• Tự động viết mã, chạy thử nghiệm</li>
                  <li>• Phân tích lỗi và triển khai giải pháp</li>
                  <li>• Cải thiện 80-90% việc tạo mã cơ sở dữ liệu</li>
                </ul>
              </div>
            </div>

            <div className="chart-container">
              <h4 className="text-xl font-bold text-executive-charcoal mb-6">
                Sự tiến hóa của các vai trò IT trong Kỷ nguyên AI Tác tử
              </h4>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-3 px-3 font-semibold text-executive-charcoal">Vai trò</th>
                      <th className="text-left py-3 px-3 font-semibold text-executive-charcoal">Tác vụ được AI tự động hóa</th>
                      <th className="text-left py-3 px-3 font-semibold text-executive-charcoal">Trách nhiệm mới</th>
                      <th className="text-left py-3 px-3 font-semibold text-executive-charcoal">Kỹ năng tương lai</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-3 font-medium text-executive-charcoal">Lập trình viên Junior</td>
                      <td className="py-3 px-3 text-executive-pewter">Tạo mã rập khuôn, kiểm thử đơn vị, gỡ lỗi cơ bản</td>
                      <td className="py-3 px-3 text-executive-pewter">Xem xét mã AI, kỹ thuật tạo câu lệnh</td>
                      <td className="py-3 px-3 text-executive-pewter">Tư duy phản biện, quản trị AI</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-3 font-medium text-executive-charcoal">Kỹ sư Senior</td>
                      <td className="py-3 px-3 text-executive-pewter">Viết mã thông thường, tái cấu trúc</td>
                      <td className="py-3 px-3 text-executive-pewter">Thiết kế kiến trúc, đặt tiêu chuẩn chất lượng</td>
                      <td className="py-3 px-3 text-executive-pewter">Kiến trúc hệ thống, đánh giá mô hình AI</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-3 font-medium text-executive-charcoal">Kỹ sư Vận hành</td>
                      <td className="py-3 px-3 text-executive-pewter">Kiểm tra hệ thống, phân loại sự cố</td>
                      <td className="py-3 px-3 text-executive-pewter">Phát triển công cụ bảo trì chủ động</td>
                      <td className="py-3 px-3 text-executive-pewter">Mô hình hóa dự đoán, AI-ops</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400">
                <p className="text-sm text-amber-800">
                  <strong>Tác động quan trọng:</strong> Sự tự động hóa đang tạo ra "cú đánh đau cho người mới bắt đầu" 
                  trong ngành IT, khi nhu cầu tuyển dụng junior giảm mạnh, nhưng giá trị của kỹ sư senior được khuếch đại.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}