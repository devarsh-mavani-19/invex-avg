import React from 'react'
import './styles.css'
import ValuationReportContent from './ValuationReportContent'
import ValuationReportSidebar from './ValuationReportSidebar'

function ValuationReport () {
  return (
    <div class='main'>
      <section class='valuation_report_sec'>
        <div class='container'>
          <div class='row'>
            <ValuationReportContent />
            <ValuationReportSidebar />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ValuationReport
