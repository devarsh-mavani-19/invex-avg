import React from 'react'

function SidebarResources () {
  return (
    <div className='card companyviewblk resource_block mb-4'>
      <div className='card-body'>
        <h5 className='mb-4'>
          <strong>Resource</strong>
        </h5>
        <ul>
          <li>
            <a href='#'>
              <img src='./images/resource_1.png' alt='resource' />
              <span>Financial Statements</span>
              <i className='bi bi-box-arrow-up-right ms-auto'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='./images/resource_2.png' alt='resource' />
              <span>Industry Report</span>
              <i className='bi bi-box-arrow-up-right ms-auto'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='./images/resource_3.png' alt='resource' />
              <span>Financial Statistics</span>
              <i className='bi bi-box-arrow-up-right ms-auto'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='./images/resource_4.png' alt='resource' />
              <span>View SEC Filings</span>
              <i className='bi bi-box-arrow-up-right ms-auto'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarResources
