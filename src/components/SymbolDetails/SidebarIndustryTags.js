import React from 'react'

function SidebarIndustryTags () {
  return (
    <div className='card companyviewblk industrytags_block mb-4'>
      <div className='card-body'>
        <h5 className='mb-4'>
          <strong>Industry Tags</strong>
        </h5>
        <div className='sector_industry'>
          <span className='badge bg-light text-dark'>
            Electronic Technology
          </span>
          <span className='badge bg-light text-dark'>Manufacturing</span>
          <span className='badge bg-light text-dark'>
            Telecommunications Equipment
          </span>
          <span className='badge bg-light text-dark'>
            Electronic Computer Manufacturing
          </span>
        </div>
      </div>
    </div>
  )
}

export default SidebarIndustryTags
