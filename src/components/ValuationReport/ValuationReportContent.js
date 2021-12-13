import React from 'react'
import AnalystNotes from './AnalystNotes'
import NotesForProfessionals from './NotesForProfessionals'
import PredictionTable from './PredictionTable'
import ValuationStats from './ValuationStats'

function ValuationReportContent () {
  return (
    <div class='col-lg-8'>
      <div class='row'>
        <div class='col-lg-12 mb-5'>
          <div class='card mb-5'>
            <div class='card-body bg-base d-lg-flex d-md-flex d-block align-items-center rounded-3 p-4'>
              <h5 class='m-0 pe-3'>Valuation Report</h5>
              <small>Stock Forecast, Predictions & Price Target</small>
            </div>
            <AnalystNotes />
            <PredictionTable />
            <ValuationStats />
            <NotesForProfessionals />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValuationReportContent
