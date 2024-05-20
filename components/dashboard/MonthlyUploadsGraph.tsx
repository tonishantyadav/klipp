'use client'

import { monthlyUploads } from '@/data/MonthlyUploads'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const MonthlyUploadsGraph = () => {
  const data = monthlyUploads()

  return (
    <ResponsiveContainer className="my-5" width="100%" height={350}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uploads" stroke="#2563eb" />
      </LineChart>
    </ResponsiveContainer>
  )
}
