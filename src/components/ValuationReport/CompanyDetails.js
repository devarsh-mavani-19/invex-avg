import React from 'react'

function CompanyDetails () {
  return (
    <React.Fragment>
      <div class='d-flex align-items-center justify-content-center bg-light p-3 border-bottom-0'>
        <h6 class='m-0'>
          <strong>View chart and details</strong>
        </h6>
      </div>
      <div class='col-lg-12 mt-3 mb-5'>
        <h6 class='mb-3'>
          <strong>Basic Company Facts </strong>
        </h6>
        <div class='key_status'>
          <ul>
            <li>
              <a href='javascript:void(0)'>Fiscal Year:</a> <span>2021 Q1</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Company Ticker:</a> <span>MRNA</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Country of Incorporation:</a>{' '}
              <span>United States</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Currency Of Valuation:</a>{' '}
              <span>USD</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Sector (US):</a>{' '}
              <span>Healthcare</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Industry (US):</a>{' '}
              <span>Drugs (Biotechnology)</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Current Market Cap(billions):</a>{' '}
              <span>$158.0</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Current Stock Price:</a>{' '}
              <span>$391.4</span>
            </li>
          </ul>
        </div>
      </div>
      <div class='col-lg-12 mt-3 mb-5'>
        <h6 class='mb-3'>
          <strong>Company's Current Financials(millions) </strong>
        </h6>
        <div class='key_status'>
          <ul>
            <li>
              <a href='javascript:void(0)'>Revenues</a> <span>$5,091.0</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Income Before Interest & Tax</a>{' '}
              <span>$2,420.9</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Shareholders Equity</a>{' '}
              <span>$6,704.0</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Total Debt</a> <span>$328.0</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Invested capital</a>{' '}
              <span>$1,031.9</span>
            </li>
          </ul>
        </div>
      </div>
      <div class='col-lg-12 mt-3 mb-5'>
        <h6 class='mb-3'>
          <strong>Current Fundamental Metrices </strong>
        </h6>
        <div class='key_status'>
          <ul>
            <li>
              <a href='javascript:void(0)'>Pre-tax operating margin</a>{' '}
              <span>62.76%</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Sales to capital ratio</a>{' '}
              <span>4.93</span>
            </li>
            <li>
              <a href='javascript:void(0)'>Return on invested capital</a>{' '}
              <span>226.02%</span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CompanyDetails
