import React from 'react'
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const data = [
  {
    name: '0A',
    uv: 4000,
    pv: 2400,
    dv: 1000
  },
  {
    name: '0B',
    uv: 3000,
    pv: 1398
  },
  {
    name: '0C',
    uv: 2000,
    pv: 9800
  },
  {
    name: '0D',
    uv: 2780,
    pv: 3908
  },
  {
    name: '0E',
    uv: 2780,
    pv: 2900
  },
  {
    name: '0F',
    uv: 2780,
    pv: 2800
  },
  {
    name: '0G',
    uv: 2780,
    pv: 2600
  },
  {
    name: '0H',
    uv: 2780,
    pv: 2000
  },
  {
    name: '0I',
    uv: 2780,
    pv: 1050
  },
  {
    name: '0J',
    uv: 2780,
    pv: 1100
  },
  {
    name: '0K',
    uv: 2780,
    pv: 1000
  }
]

const barColors = ['#1f77b4', '#ff7f0e', '#2ca02c']

const DUMMY_CHART_DATA = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}

function RevenueCharts () {
  return (
    <ResponsiveContainer height={193} width={380}>
      <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey='name' tick={false} />
        <YAxis tick={false} axisLine={false} />
        {/* <Tooltip /> */}
        {/* <Legend wrapperStyle={{ bottom: -20, left: 25 }} /> */}
        <Bar dataKey='pv' fill='#3751FF'>
          {data.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                width={20}
                fill={
                  index == 0
                    ? '#0000ff'
                    : data[index]['pv'] > data[0]['pv']
                    ? '#00ff00'
                    : '#ff0000'
                }
              />
            )
          })}
        </Bar>
        {/* <Bar dataKey='uv' fill='#13A41B' /> */}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default RevenueCharts
