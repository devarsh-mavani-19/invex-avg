import React from 'react'
import CompanyDetails from './CompanyDetails'
import CompanySymbol from './CompanySymbol'

function ValuationReportSidebar () {
  return (
    <div class='col-lg-4'>
      <CompanySymbol />
      <CompanyDetails />
    </div>
  )
}

export default ValuationReportSidebar
