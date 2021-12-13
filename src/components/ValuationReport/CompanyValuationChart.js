import React from 'react'
import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts'

const data = [
  {
    name: '01',
    uv: 4000,
    pv: 1000,
    amt: 2400
  },
  {
    name: '02',
    uv: 3000,
    pv: 1100,
    amt: 2210
  },
  {
    name: '03',
    uv: 2000,
    pv: 800,
    amt: 2290
  },
  {
    name: '04',
    uv: 2780,
    pv: 1300,
    amt: 2000
  },
  {
    name: '05',
    uv: 1890,
    pv: 1200,
    amt: 2181
  },
  {
    name: '06',
    uv: 2390,
    pv: 1400,
    amt: 2500
  },
  {
    name: '07',
    uv: 3490,
    pv: 1500,
    amt: 2100
  }
]

function CompanyValuationChart () {
  return (
    <ResponsiveContainer width={200} height={100}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: -50, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' axisLine={false} tick={false} />
        <YAxis axisLine={false} tick={false} />
        <ReferenceLine y={0} strokeDasharray='3' stroke='black' />
        <Area
          type='monotone'
          dataKey='pv'
          stroke='#82ca9d'
          fillOpacity={1}
          fill='url(#colorPv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default CompanyValuationChart
