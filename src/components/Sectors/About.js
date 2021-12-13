import React from 'react'

function About () {
  return (
    <div class='card companyviewblk compprofile_block mb-5'>
      <div class='card-header'>
        <div class='d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0'>
          <h6 class='m-0'>
            <strong>Industrials: Aerospace & Defense</strong>
          </h6>
        </div>
      </div>
      <div class='card-body'>
        <div class='description-para'>
          <div class='key_status'>
            <p class='mb-4'>
              The aerospace & defense industry includes companies that
              manufacture aerospace and defense products, including aircraft and
              aircraft parts, tanks, guided missiles, space vehicles, ships and
              marine equipment, and other aerospace and defense components and
              systems, as well as companies supporting these products through
              repair and maintenance services.
            </p>
            <div class='d-flex align-items-center justify-content-between'>
              <a href='#' class='btn btn-light'>
                Read More
              </a>
              <a
                href='#'
                class='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#filtermodal'
              >
                Find Investnment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
