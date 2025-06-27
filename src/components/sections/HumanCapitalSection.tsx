'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'
import { SkillGapChart, TalentReadinessChart } from '@/components/charts/SkillGapChart'

export default function HumanCapitalSection() {
  return (
    <section id="human-capital" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-executive-dark mb-6">
            Mệnh lệnh về{' '}
            <span className="text-gradient">Vốn con người</span>
          </h2>
          <p className="text-xl text-executive-medium max-w-4xl mx-auto leading-relaxed">
            Điều hướng Nghịch lý Nhân tài Việt Nam trong kỷ nguyên AI
          </p>
        </motion.div>

        {/* Talent Paradox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="card-executive">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-500 mr-3" />
              <h3 className="text-2xl font-bold text-executive-dark">
                Nghịch lý Nhân tài Việt Nam
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="space-y-4">
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Nhu cầu tuyển dụng AI</span>
                </div>
                <div className="text-4xl font-bold text-green-600">91%</div>
                <p className="text-executive-medium">
                  lãnh đạo doanh nghiệp Việt Nam đang cân nhắc tuyển dụng cho các vai trò chuyên về AI
                  (vượt mức trung bình toàn cầu)
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-red-600">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Thực tế nhân viên</span>
                </div>
                <div className="text-4xl font-bold text-red-600">84%</div>
                <p className="text-executive-medium">
                  nhân viên cảm thấy họ không có đủ thời gian và năng lượng để hoàn thành công việc hiện tại
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
              <p className="text-amber-800">
                <strong>Thách thức:</strong> Việt Nam cần khoảng 50.000 kỹ sư AI vào năm 2025 
                nhưng mỗi năm chỉ đào tạo được 5.000–7.000 người, và 60% sinh viên tốt nghiệp thiếu kỹ năng thực tế.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Data Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SkillGapChart />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TalentReadinessChart />
          </motion.div>
        </div>

        {/* New Talent Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-executive-dark mb-8 text-center">
            Kiến trúc Nhân tài Mới: Tinh gọn, Tinh nhuệ và được AI hỗ trợ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Cấu trúc phẳng hơn',
                description: 'AI tự động hóa báo cáo và phân tích, giảm nhu cầu quản lý trung gian',
                icon: '🏗️'
              },
              {
                title: 'Mở rộng bằng năng lực',
                description: 'Tăng trưởng không còn phụ thuộc vào số lượng nhân viên mà vào AI agents',
                icon: '🚀'
              },
              {
                title: 'Khuếch đại giá trị con người',
                description: 'Tập trung vào tư duy chiến lược, cân nhắc đạo đức và sáng tạo',
                icon: '💡'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-executive text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-executive-dark mb-3">
                  {item.title}
                </h4>
                <p className="text-executive-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-executive-dark mb-8 text-center">
            Ba Nguyên tắc Cốt lõi để Giải quyết Khoảng trống Nhân tài
          </h3>
          
          <div className="space-y-6">
            {[
              {
                number: 1,
                title: 'Đầu tư mạnh mẽ vào đào tạo thực tế tại chỗ',
                description: 'Vượt ra ngoài lý thuyết, tạo chương trình thực hành "human-in-the-loop" như Samsung đã làm với 100 chuyên gia địa phương.',
                action: 'Đào tạo thực hành 12 tuần'
              },
              {
                number: 2,
                title: 'Xây dựng văn hóa hỗ trợ, không phải thay thế',
                description: 'Truyền đạt nhất quán rằng AI hỗ trợ tiềm năng con người, giải phóng nhân viên cho công việc chiến lược và sáng tạo.',
                action: 'Giao tiếp từ cấp cao nhất'
              },
              {
                number: 3,
                title: 'Thiết lập quan hệ đối tác chiến lược',
                description: 'Hợp tác với nhà cung cấp công nghệ, trường đại học và tổ chức quốc tế để nhập khẩu kiến thức chuyên môn.',
                action: 'Đối tác công-tư như HCMC-Google'
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-executive"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-vietnam-red text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {solution.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-executive-dark mb-3">
                      {solution.title}
                    </h4>
                    <p className="text-executive-medium mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-vietnam-red">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">{solution.action}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}