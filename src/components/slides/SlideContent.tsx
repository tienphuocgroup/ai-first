'use client'

import React from 'react'
import { Slide } from '@/data/slides'
import TitleSlide from './TitleSlide'
import ContentSlide from './ContentSlide'
import ComparisonSlide from './ComparisonSlide'
import QuoteSlide from './QuoteSlide'
import CodeSlide from './CodeSlide'
import DemoSlide from './DemoSlide'
import InteractiveSlide from './InteractiveSlide'

interface SlideContentProps {
  slide: Slide
}

export default function SlideContent({ slide }: SlideContentProps) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />
    case 'content':
      return <ContentSlide slide={slide} />
    case 'comparison':
      return <ComparisonSlide slide={slide} />
    case 'quote':
      return <QuoteSlide slide={slide} />
    case 'code':
      return <CodeSlide slide={slide} />
    case 'demo':
      return <DemoSlide slide={slide} />
    case 'interactive':
      return <InteractiveSlide slide={slide} />
    default:
      return <ContentSlide slide={slide} />
  }
}