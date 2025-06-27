'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const skillGapData = [
  { skill: 'Big Data', demand: 85, supply: 35, gap: 50 },
  { skill: 'Deep Learning', demand: 80, supply: 25, gap: 55 },
  { skill: 'Computer Vision', demand: 70, supply: 30, gap: 40 },
  { skill: 'NLP', demand: 65, supply: 28, gap: 37 },
  { skill: 'MLOps', demand: 75, supply: 20, gap: 55 }
]

const talentReadinessData = [
  { name: 'Sẵn sàng làm việc', value: 40, color: '#10b981' },
  { name: 'Cần đào tạo thêm', value: 60, color: '#ef4444' }
]

export function SkillGapChart() {
  return (
    <div className="chart-container">
      <h4 className="text-xl font-bold text-executive-dark mb-6">
        Khoảng cách Kỹ năng AI tại Việt Nam
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={skillGapData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              `${value}%`, 
              name === 'demand' ? 'Nhu cầu' : name === 'supply' ? 'Cung cấp' : 'Khoảng cách'
            ]}
          />
          <Bar dataKey="demand" fill="#dc2626" name="demand" />
          <Bar dataKey="supply" fill="#2563eb" name="supply" />
          <Bar dataKey="gap" fill="#f59e0b" name="gap" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TalentReadinessChart() {
  return (
    <div className="chart-container">
      <h4 className="text-xl font-bold text-executive-dark mb-6">
        Mức độ Sẵn sàng của Sinh viên AI
      </h4>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={talentReadinessData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {talentReadinessData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, '']} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}