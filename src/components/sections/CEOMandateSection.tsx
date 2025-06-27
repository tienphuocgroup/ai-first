'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Circle, ArrowRight, ArrowLeft, BarChart3, Trophy, AlertCircle } from 'lucide-react'
import { ceoQuestions } from '@/data/content'

interface AssessmentState {
  [questionId: string]: {
    [criteriaIndex: number]: boolean
  }
}

export default function CEOMandateSection() {
  const [showAssessment, setShowAssessment] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<AssessmentState>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswerChange = (questionId: string, criteriaIndex: number, checked: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [criteriaIndex]: checked
      }
    }))
  }

  const calculateScore = () => {
    let totalScore = 0
    let maxScore = 0

    ceoQuestions.forEach(question => {
      maxScore += question.assessment.criteria.length
      const questionAnswers = answers[question.id] || {}
      totalScore += Object.values(questionAnswers).filter(Boolean).length
    })

    return { totalScore, maxScore, percentage: maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0 }
  }

  const getScoreLevel = (percentage: number) => {
    if (percentage >= 80) return { level: 'Xuất sắc', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' }
    if (percentage >= 60) return { level: 'Tốt', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' }
    if (percentage >= 40) return { level: 'Trung bình', color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' }
    return { level: 'Cần cải thiện', color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200' }
  }

  const nextQuestion = () => {
    if (currentQuestion < ceoQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const resetAssessment = () => {
    setAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
    setShowAssessment(false)
  }

  if (showAssessment) {
    if (showResults) {
      const score = calculateScore()
      const scoreLevel = getScoreLevel(score.percentage)

      return (
        <section id="ceo-mandate" className="py-20 bg-slate-50">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className={`card-executive ${scoreLevel.bgColor} ${scoreLevel.borderColor} border-2`}>
                <div className="text-center mb-8">
                  <Trophy className={`w-16 h-16 mx-auto mb-4 ${scoreLevel.color}`} />
                  <h2 className="text-3xl font-bold text-executive-dark mb-2">
                    Kết quả Đánh giá AI Readiness
                  </h2>
                  <div className={`text-6xl font-bold mb-2 ${scoreLevel.color}`}>
                    {score.percentage}%
                  </div>
                  <div className={`text-xl font-semibold ${scoreLevel.color}`}>
                    {scoreLevel.level}
                  </div>
                  <p className="text-executive-medium mt-2">
                    Bạn đã trả lời {score.totalScore}/{score.maxScore} tiêu chí một cách tích cực
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {ceoQuestions.map((question, index) => {
                    const questionAnswers = answers[question.id] || {}
                    const questionScore = Object.values(questionAnswers).filter(Boolean).length
                    const questionPercentage = Math.round((questionScore / question.assessment.criteria.length) * 100)

                    return (
                      <div key={question.id} className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-executive-dark">
                            {index + 1}. {question.question}
                          </h4>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            questionPercentage >= 75 ? 'bg-green-100 text-green-800' :
                            questionPercentage >= 50 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {questionScore}/{question.assessment.criteria.length}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              questionPercentage >= 75 ? 'bg-green-500' :
                              questionPercentage >= 50 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${questionPercentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-executive-dark mb-4">
                      Khuyến nghị tiếp theo
                    </h3>
                    {score.percentage >= 80 ? (
                      <p className="text-executive-medium">
                        Xuất sắc! Bạn đã sẵn sàng cho hành trình AI-First. Hãy bắt đầu triển khai 
                        dự án thí điểm đầu tiên và chia sẻ kinh nghiệm với đội ngũ.
                      </p>
                    ) : score.percentage >= 60 ? (
                      <p className="text-executive-medium">
                        Bạn đang trên đúng hướng! Tập trung vào những lĩnh vực có điểm thấp để 
                        hoàn thiện khả năng sẵn sàng AI trước khi mở rộng quy mô.
                      </p>
                    ) : (
                      <p className="text-executive-medium">
                        Cần đầu tư thêm thời gian để chuẩn bị. Hãy bắt đầu với việc học hiểu AI 
                        và xây dựng đội ngũ có kiến thức cơ bản trước khi triển khai.
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={resetAssessment}
                      className="btn-secondary"
                    >
                      Đánh giá lại
                    </button>
                    <button className="btn-primary">
                      Tải báo cáo chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )
    }

    const question = ceoQuestions[currentQuestion]
    const questionAnswers = answers[question.id] || {}

    return (
      <section id="ceo-mandate" className="py-20 bg-slate-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-executive-medium">
                  Câu hỏi {currentQuestion + 1} / {ceoQuestions.length}
                </span>
                <span className="text-sm text-executive-medium">
                  {Math.round(((currentQuestion + 1) / ceoQuestions.length) * 100)}% hoàn thành
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-vietnam-red h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / ceoQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="card-executive"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-vietnam-red text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {currentQuestion + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-executive-dark mb-3">
                      {question.question}
                    </h3>
                    <p className="text-executive-medium leading-relaxed">
                      {question.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-executive-dark">
                    Đánh giá các tiêu chí sau:
                  </h4>
                  {question.assessment.criteria.map((criteria, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        questionAnswers[index] 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => handleAnswerChange(question.id, index, !questionAnswers[index])}
                    >
                      <div className="flex items-center space-x-3">
                        {questionAnswers[index] ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <Circle className="w-6 h-6 text-slate-400" />
                        )}
                        <span className="text-executive-dark font-medium">
                          {criteria}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                      currentQuestion === 0
                        ? 'text-slate-400 cursor-not-allowed'
                        : 'text-executive-dark hover:bg-slate-100'
                    }`}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Quay lại</span>
                  </button>

                  <button
                    onClick={nextQuestion}
                    className="flex items-center space-x-2 btn-primary"
                  >
                    <span>
                      {currentQuestion === ceoQuestions.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="ceo-mandate" className="py-20 bg-slate-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-executive-dark mb-6">
            Nhiệm vụ của{' '}
            <span className="text-gradient">CEO</span>
          </h2>
          <p className="text-xl text-executive-medium max-w-4xl mx-auto leading-relaxed">
            Bốn câu hỏi thiết yếu để dẫn dắt chương trình nghị sự AI-First
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ceoQuestions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-executive group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-vietnam-red text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-executive-dark mb-2">
                    {question.question}
                  </h3>
                  <p className="text-executive-medium text-sm mb-4">
                    {question.description}
                  </p>
                  <div className="space-y-2">
                    {question.keyPoints.slice(0, 2).map((point, idx) => (
                      <div key={idx} className="flex items-start text-xs text-executive-medium">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {point}
                      </div>
                    ))}
                    {question.keyPoints.length > 2 && (
                      <div className="text-xs text-slate-400">
                        +{question.keyPoints.length - 2} tiêu chí khác...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Assessment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-vietnam-red to-red-700 text-white p-8 rounded-2xl">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">
              Đánh giá mức độ sẵn sàng AI của bạn
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Trả lời 4 câu hỏi chiến lược để nhận được báo cáo cá nhân về khả năng 
              sẵn sàng AI-First của tổ chức bạn
            </p>
            <button
              onClick={() => setShowAssessment(true)}
              className="bg-white text-vietnam-red px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Bắt đầu đánh giá</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm opacity-75 mt-4">
              ⏱️ Chỉ mất 3-5 phút • 📊 Nhận kết quả ngay lập tức
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}