export interface Statistic {
  id: string
  label: string
  value: string | number
  description?: string
  source?: string
  trend?: 'up' | 'down' | 'stable'
  trendValue?: string
}

export interface ComparisonRow {
  aspect: string
  aiSupported: string
  aiFirst: string
}

export interface SectorUseCase {
  id: string
  title: string
  description: string
  benefits: string[]
  implementation: string
  roi?: string
}

export interface Sector {
  id: string
  name: string
  icon: string
  description: string
  useCases: SectorUseCase[]
  statistics: Statistic[]
}

export interface CEOQuestion {
  id: string
  question: string
  description: string
  keyPoints: string[]
  assessment: {
    criteria: string[]
    scoring: 'yes-no' | 'scale' | 'checklist'
  }
  resources?: {
    title: string
    url: string
  }[]
}

export interface ContentSection {
  id: string
  title: string
  subtitle?: string
  content: string
  subsections?: ContentSection[]
  data?: any
  visualizations?: VisualizationType[]
}

export type VisualizationType = 
  | 'comparison-table'
  | 'statistics-dashboard' 
  | 'sector-cards'
  | 'process-flow'
  | 'skill-gap-chart'
  | 'timeline'
  | 'assessment-tool'

export interface NavigationItem {
  id: string
  title: string
  href: string
  children?: NavigationItem[]
}