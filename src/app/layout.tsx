import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Mô hình Vận hành AI-First - Chiến lược cho Doanh nghiệp Việt',
  description: 'Tái cấu trúc tổ chức và nguồn lực cho doanh nghiệp Việt Nam trong kỷ nguyên AI',
  keywords: 'AI-First, Vietnam, doanh nghiệp, chuyển đổi số, CEO, chiến lược',
  authors: [{ name: 'AI Strategy Vietnam' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-slate-50 text-executive-dark`}>
        {children}
      </body>
    </html>
  )
}