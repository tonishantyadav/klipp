'use client'

import { monthlyUploads } from '@/data/MonthlyUploads'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const MonthlyUploadsGraph = () => {
  const data = monthlyUploads()

  return (
    <ResponsiveContainer className="my-5" width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uploads"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
