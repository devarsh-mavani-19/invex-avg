import React, { useState } from 'react'

function SidebarCompanyStats () {
  const [showBookmark, setShowBookmark] = useState(false)

  const bookmarkToggleHandler = () => {
    setShowBookmark(state => !state)
  }

  const bookmarkClass = `upper ${showBookmark ? 'marked' : ''}`
  const imgSrc = `${
    showBookmark ? './images/marked_img.png' : './images/image4.png'
  }`

  return (
    <div className='card companyviewblk compny_left_detail mb-4'>
      <div className='saved-blk'>
        <a href='javascript:void(0);'>
          <img
            onClick={bookmarkToggleHandler}
            className={bookmarkClass}
            src={imgSrc}
            alt='bookmark'
          />
        </a>
      </div>
      <div className='card-body'>
        <div className='description-para'>
          <div className='logo'>
            <div className='img'>
              <img src='./images/image1.png' alt='image' />
            </div>
            <div className='title1'>
              <h5 className='card-title'>APPLE INC </h5>
              <p className='company'>AAPL</p>
            </div>
          </div>
          <div className='sector_industry'>
            <span className='badge bg-light text-dark'>
              Sector: Electronic Technology
            </span>
            <span className='badge bg-light text-dark'>
              Industry: Telecommunications Equipment
            </span>
          </div>
          <div className='chart mb-4 mt-2'>
            <div className='chart-text'>
              <p className='card-text up'>$235.49</p>
              <p className='text up'>+3.10 (+1.3%)</p>
            </div>
          </div>
          <div className='key_status'>
            <h6>
              <strong>Key Status</strong>
            </h6>
            <ul>
              <li>
                <a href='javascript:void(0)'>Market Cap</a> <span>$15B</span>
              </li>
              <li>
                <a href='javascript:void(0)'>Current Price</a>{' '}
                <span>$235.49</span>
              </li>
              <li>
                <a href='javascript:void(0)'>Volume</a> <span>179,620</span>
              </li>
              <li>
                <a href='javascript:void(0)'>Avg Vol</a> <span>579,498</span>
              </li>
              <li>
                <a href='javascript:void(0)'>P/E Ratio</a> <span>24.88</span>
              </li>
            </ul>
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

export default SidebarCompanyStats
