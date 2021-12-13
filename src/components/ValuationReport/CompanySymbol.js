import React, { useState } from 'react'
import CompanyValuationChart from './CompanyValuationChart'

function CompanySymbol () {
  const [showBookmark, setShowBookmark] = useState(true)
  const bookmarkToggleHandler = () => {
    setShowBookmark(state => !state)
  }

  const bookmarkClass = `upper ${showBookmark ? 'marked' : ''}`
  const imgSrc = `${
    showBookmark ? './images/marked_img.png' : './images/image4.png'
  }`

  return (
    <div class='card companyviewblk compny_left_detail brand_valuation mb-4'>
      <div class='saved-blk'>
        <a href='javascript:void(0);'>
          <img
            onClick={bookmarkToggleHandler}
            className={bookmarkClass}
            src={imgSrc}
            alt='bookmark'
          />
        </a>
      </div>
      <div class='card-body'>
        <div class='comp_brand'>
          <div class='img'>
            <img src='/images/image1.png' alt='image' />
          </div>
          <div class='title1'>
            <h5 class='card-title'>APPLE INC</h5>
            <p class='company m-0'>AAPL</p>
          </div>
        </div>
        <div class='marketviewblk'>
          <div class='chart-text'>
            <p class='market_price'>$235.49</p>
            <p class='market_profit up'>+3.10 (+1.3%)</p>
          </div>
          <div class='chart-img ms-auto'>
            <CompanyValuationChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanySymbol
