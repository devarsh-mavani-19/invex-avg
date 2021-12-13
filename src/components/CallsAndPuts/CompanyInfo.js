import React from 'react'

function CompanyInfo () {
  return (
    <div className='p-2 company_info card shadow d-flex flex-row justify-content-center align-items-center mx-2 mt-5'>
      <img
        className='mx-3'
        width='40px'
        src='data:image/png;base64,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'
      />
      <div className='d-flex flex-column mx-3 justify-content-center'>
        <h6 className='my-auto'>Apple Inc.</h6>
        <p className='my-auto'>APPL</p>
      </div>
      <h4 style={{ color: 'green' }}>$235.49 </h4>
      <p
        style={{ color: 'green' }}
        className='align-self-center justify-content-center mx-2 my-auto'
      >
        +3.10 (+1.3%)
      </p>
      <img src={'./images/top-graph.png'} className='mx-5' />
      <form className='d-flex mx-3'>
        <input
          className='form-control mx-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button className='btn btn-outline-success' type='submit'>
          Search
        </button>
      </form>
    </div>
  )
}

export default CompanyInfo
