'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff } from 'lucide-react'
import { generateTodaysPassword, getFormattedDate, validatePassword } from '@/lib/auth'

interface PasswordProtectionProps {
  children: React.ReactNode
  onAuthenticated: () => void
}

export default function PasswordProtection({ children, onAuthenticated }: PasswordProtectionProps) {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Use utility function for password generation

  useEffect(() => {
    // Check if user is already authenticated (stored in sessionStorage)
    const authStatus = sessionStorage.getItem('ai-first-authenticated')
    const authDate = sessionStorage.getItem('ai-first-auth-date')
    const today = new Date().toDateString()

    if (authStatus === 'true' && authDate === today) {
      setIsAuthenticated(true)
      onAuthenticated()
    }
    setIsLoading(false)
  }, [onAuthenticated])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validatePassword(password)) {
      setIsAuthenticated(true)
      setError('')
      // Store authentication in sessionStorage (expires when browser closes)
      sessionStorage.setItem('ai-first-authenticated', 'true')
      sessionStorage.setItem('ai-first-auth-date', new Date().toDateString())
      onAuthenticated()
    } else {
      setError('Mật khẩu không đúng. Vui lòng thử lại.')
      setPassword('')
    }
  }

  const getDateHint = () => `Ngày ${getFormattedDate()}`

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            AI-First Vietnam Strategy
          </h1>
          <p className="text-slate-600">
            Nội dung được bảo vệ - Vui lòng nhập mật khẩu
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Mật khẩu truy cập
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                placeholder="Nhập mật khẩu..."
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 hover:shadow-lg"
          >
            Truy cập
          </button>
        </form>


        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-400">
          Phiên đăng nhập hết hạn khi đóng trình duyệt
        </div>
      </motion.div>
    </div>
  )
}