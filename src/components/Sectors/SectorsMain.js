import React from 'react'
import About from './About'
import MarketCapChart from './MarketCapChart'
import TopPerformanceTable from './TopPerformanceTable'

function SectorsMain () {
  return (
    <div class='col-lg-8'>
      <div class='row'>
        <div class='col-lg-12 mb-5'>
          <About />
          <MarketCapChart />
          <TopPerformanceTable />
        </div>
      </div>
    </div>
  )
}

export default SectorsMain
