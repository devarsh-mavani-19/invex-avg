import React, { useState } from 'react'
import CompanyValuationChart from './CompanyValuationChart'
import RevenueCharts from './RevenueCharts'

function ValuationStats () {
  const [isBestCaseSelected, setBestCaseSelected] = useState(true)
  const [isBaseCaseSelected, setBaseCaseSelected] = useState(false)
  const [isWorstCaseSelected, setWorstCaseSelected] = useState(false)
  const [isManualSelected, setManualSelected] = useState(false)

  const handleBestCaseSelection = () => {
    setBestCaseSelected(true)
    setBaseCaseSelected(false)
    setWorstCaseSelected(false)
    setManualSelected(false)
  }

  const handleBaseCaseSelection = () => {
    setBestCaseSelected(false)
    setBaseCaseSelected(true)
    setWorstCaseSelected(false)
    setManualSelected(false)
  }

  const handleWorstCaseSelection = () => {
    setBestCaseSelected(false)
    setBaseCaseSelected(false)
    setWorstCaseSelected(true)
    setManualSelected(false)
  }

  const handleManualSelection = () => {
    setBestCaseSelected(false)
    setBaseCaseSelected(false)
    setWorstCaseSelected(false)
    setManualSelected(true)
  }

  return (
    <div class='card companyviewblk compprofile_block mt-5 mb-4'>
      <div class='card-header'>
        <div class='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
          <h6 class='m-0'>
            <strong>Industrials: Aerospace & Defense</strong>
          </h6>
        </div>
      </div>
      <div class='card-body'>
        <div class='top_button_panel mb-3'>
          <span class='pe-3 pb-3'>
            <small>
              <strong>Choose the case</strong>
            </small>
          </span>
          <button
            onClick={() => {
              handleBestCaseSelection()
            }}
            type='button'
            class={`btn ${isBestCaseSelected ? 'btn-info' : 'btn-light'}`}
          >
            Best case
          </button>
          <button
            onClick={() => {
              handleBaseCaseSelection()
            }}
            type='button'
            class={`btn ${isBaseCaseSelected ? 'btn-info' : 'btn-light'}`}
          >
            {' '}
            Base care
          </button>
          <button
            onClick={() => {
              handleWorstCaseSelection()
            }}
            type='button'
            class={`btn ${isWorstCaseSelected ? 'btn-info' : 'btn-light'}`}
          >
            {' '}
            Worst care
          </button>
          <button
            onClick={() => {
              handleManualSelection()
            }}
            type='button'
            class={`btn ${isManualSelected ? 'btn-info' : 'btn-light'}`}
          >
            {' '}
            Manual
          </button>
        </div>

        <div class='scenario justify-content-between'>
          <span class='best_scena'>Estimated value / share</span>
          <div class='chart-text'>
            <p class='card-text up m-0'>
              <strong>$235.49</strong>
            </p>
            <p class='text up m-0 ms-2'>(+34%)</p>
          </div>
          <div class='text-end'>
            <p class='m-0'>
              <small>Value of equity (Millions): $76,485.50</small>
            </p>
            <p class='m-0'>
              <small>Current price: $391.42</small>
            </p>
          </div>
        </div>

        <div class='mt-5'>
          <div class='row'>
            <div class='col-lg-3'>
              <h6 class='mb-3'>
                <strong>
                  Revenue <br />
                  (Future Expectation)
                </strong>
              </h6>
              <small>All values are in Billion</small>
            </div>
            <div class='col-lg-9'>
              <RevenueCharts />

              {/* <img
                src='assets/images/fin-chart.png'
                class='img-fluid'
                alt='chart'
              /> */}
            </div>
          </div>
        </div>
        <div class='mt-5'>
          <div class='row'>
            <div class='col-lg-3'>
              <h6 class='mb-3'>
                <strong>
                  Revenue <br />
                  (Future Expectation)
                </strong>
              </h6>
              <small>All values are in Billion</small>
            </div>
            <div class='col-lg-9'>
              <RevenueCharts />

              {/* <img
                src='assets/images/fin-chart.png'
                class='img-fluid'
                alt='chart'
              /> */}
            </div>
          </div>
        </div>
        <div class='mt-5'>
          <div class='row'>
            <div class='col-lg-3'>
              <h6 class='mb-3'>
                <strong>
                  Free cash flow to firm <br />
                  (Future Expectation)
                </strong>
              </h6>
              <small>All values are in Billion</small>
            </div>
            <div class='col-lg-9'>
              <RevenueCharts />
              {/* <img
                src='assets/images/fin-chart.png'
                class='img-fluid'
                alt='chart'
              /> */}
            </div>
          </div>
        </div>
        <div class='mt-5'>
          <div class='row'>
            <div class='col-lg-3'>
              <h6 class='mb-3'>
                <strong>
                  Price Target <br />
                  (Future Expectation)
                </strong>
              </h6>
              <small>All values are in Billion</small>
            </div>
            <div class='col-lg-9'>
              <RevenueCharts />

              {/* <img
                src='assets/images/fin-chart.png'
                class='img-fluid'
                alt='chart'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValuationStats
