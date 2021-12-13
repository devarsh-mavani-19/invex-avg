import React from 'react'
import {
  Cell,
  LabelList,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer
} from 'recharts'

const data01 = [
  {
    name: 'Group A',
    value: 400
  },
  {
    name: 'Group B',
    value: 300
  },
  {
    name: 'Group C',
    value: 300
  },
  {
    name: 'Group D',
    value: 200
  },
  {
    name: 'Group E',
    value: 278
  },
  {
    name: 'Group F',
    value: 189
  }
]

const colors = [
  '#3f158c',
  '#de7430',
  '#198fe2',
  '#dddfdd',
  '#a44daa',
  '#7b90af',
  '#1cac44',
  '#1aab40',
  '#a798a6'
]

function MarketCapChart () {
  return (
    <div class='mt-5 mb-5'>
      <h6 class='mb-4'>
        <strong>Market Cap (billions) by Industrial Sector</strong>
      </h6>
      <ResponsiveContainer width='100%' aspect={2}>
        <PieChart margin={{ top: -600, right: 0, left: 0, bottom: -600 }}>
          <Pie
            data={data01}
            dataKey='value'
            nameKey='name'
            cx='50%'
            legendType={'line'}
            label={value => {
              return value.value + ' (' + value.percent.toFixed(2) * 100 + '%)'
            }}
            labelLine={true}
            cy='50%'
            innerRadius={'30%'}
            outerRadius={'50%'}
            fill='#8884d8'
            animationDuration={10}
          >
            {/* <LabelList
              dataKey='name'
              formatter={value => {
                return value + ' ' + '%'
              }}
            /> */}
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend
            margin={{ top: -600, right: 0, left: 0, bottom: -600 }}
            layout={'vertical'}
            align={'right'}
            verticalAlign={'middle'}
            iconType={'circle'}
          />
          {/* <Pie
          data={data02}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          innerRadius={60}
          outerRadius={80}
          fill='#82ca9d'
          label
        /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MarketCapChart
