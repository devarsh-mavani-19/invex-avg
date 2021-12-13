import React from 'react'

function SidebarCompanyInfo () {
  return (
    <div className='card companyviewblk compprofile_block mb-4'>
      <div className='card-body'>
        <div className='description-para'>
          <h5 className='mb-4'>
            <strong>Company Info</strong>
          </h5>
          <div className='key_status'>
            <ul>
              <li>
                <a href='javascript:void(0)'>Website</a>{' '}
                <span>www.apple.com</span>
              </li>
              <li>
                <a href='javascript:void(0)'>Employees</a> <span>154K</span>
              </li>
              <li>
                <a href='javascript:void(0)'>Country</a>{' '}
                <span>United Stated</span>
              </li>
              <li>
                <a href='javascript:void(0)'>CEO</a> <span>Timothy Cook</span>
              </li>
            </ul>
            <p>
              Apple, Inc. engages in the design, manufacture, and sale of
              smartphones, personal computers, tablets, wearables and
              accessories, and other variety of related services. It operates
              through the following geographical segments: Americas, Europe,
              Greater China, Japan, and Rest of Asia Pacific. The Americas
              segment includes North and South America. The Europe segment
              consists of European countries, as well as India, the Middle{' '}
            </p>
          </div>
        </div>
        <button className='text-primary readmore'>Read More </button>
        <button className='text-primary readless' style={{ display: 'none' }}>
          Read Less{' '}
        </button>
      </div>
    </div>
  )
}

export default SidebarCompanyInfo
