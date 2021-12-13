import React, { Fragment } from 'react'
import './CustomRange.css'

function CustomRange () {
  return (
    <div className='custom-range'>
      <div className='d-flex justify-content-between align-items-center'>
        <span>$116.35</span>
        <span style={{ fontSize: '10px', color: 'gray' }}>1M Range</span>
        <span>$152.53</span>
      </div>
      <div className=''>
        <progress value={100} max={300}>
          test
        </progress>
      </div>
    </div>
  )
}

export default CustomRange
