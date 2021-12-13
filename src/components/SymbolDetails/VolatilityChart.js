import React from 'react'
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

function VolatilityChart () {
  return (
    <div class='mb-5'>
      <h6 class='mb-4'>
        <strong>Option Analysis: Volatility chart (1Y)</strong>
      </h6>
      <ResponsiveContainer width={'100%'} aspect={1} maxHeight={300}>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Legend />
          <Line type='monotone' dataKey='pv' stroke='#3751FF' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VolatilityChart
