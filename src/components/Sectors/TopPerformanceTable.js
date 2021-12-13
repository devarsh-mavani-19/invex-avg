import React from 'react'

function TopPerformanceTable () {
  return (
    <div class='top_eta'>
      <div class='mb-5'>
        <div class='d-flex align-items-center justify-content-between border p-3 border-bottom-0'>
          <h6 class='m-0'>
            <strong>Top ETF Preformance</strong>
          </h6>
          <a href='javascript:void(0)' class='text-dark viewmore'>
            View More
          </a>
        </div>
        <div class='table-responsive'>
          <table class='table table-bordered m-0 most_tables'>
            <thead class='table-light'>
              <tr>
                <th scope='col'>Symbol</th>
                <th scope='col'>Market cap(B)</th>
                <th scope='col'>Current price</th>
                <th scope='col'>52 Week low</th>
                <th scope='col'>52 Week high</th>
                <th scope='col'>Under valued</th>
              </tr>
            </thead>
            <tbody class='border-top-0'>
              <tr>
                <td>PHM</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
              </tr>
              <tr>
                <td>LEN</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
              </tr>
              <tr>
                <td>PHM</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
              </tr>
              <tr>
                <td>LEN</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
              </tr>
              <tr>
                <td>PHM</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
              </tr>
              <tr>
                <td>LEN</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
                <td>13.25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TopPerformanceTable
