import React from 'react'

function ExpectedValuation () {
  return (
    <div class='mb-5'>
      <h6 class='mb-4'>
        <strong>Expected Company Valuation after 5 year</strong>
      </h6>
      <div class='row'>
        <div class='col-xl-3 col-lg-6 col-md-6'>
          <div class='scenario'>
            <span class='best_scena'>Best scenario</span>
            <div class='chart-text'>
              <p class='card-text up m-0'>$235.49</p>
              <p class='text up m-0 ms-2'>(+34%)</p>
            </div>
          </div>
        </div>
        <div class='col-xl-3 col-lg-6 col-md-6'>
          <div class='scenario'>
            <span class='base_scena'>Base scenario</span>
            <div class='chart-text'>
              <p class='card-text up m-0'>$235.49</p>
              <p class='text up m-0 ms-2'>(+34%)</p>
            </div>
          </div>
        </div>
        <div class='col-xl-3 col-lg-6 col-md-6'>
          <div class='scenario'>
            <span class='worst_scena'>Best scenario</span>
            <div class='chart-text'>
              <p class='card-text up m-0'>$235.49</p>
              <p class='text up m-0 ms-2'>(+34%)</p>
            </div>
          </div>
        </div>
        <div class='col-xl-3 col-lg-6 col-md-6'>
          <div class='scenario full_valuation_report'>
            <a
              href='javascript:void(0);'
              class='d-flex align-items-center justify-content-between'
            >
              <h6 class='m-0'>
                View Full <br />
                Valuation report
              </h6>
              <i class='bi bi-chevron-right'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpectedValuation
