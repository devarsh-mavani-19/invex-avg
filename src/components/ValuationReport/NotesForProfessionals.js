import React from 'react'

function NotesForProfessionals () {
  return (
    <div class='mt-5 mb-5'>
      <h6 class='mb-4'>
        <strong>Notes For The Professionals</strong>
      </h6>
      <ul>
        <li>
          The above estimations are derived from the Free Cash Flow To Firm
          Valuation.
        </li>
        <li>
          We considered the Research & Development expenses as Capital Expense
          rather than operating expense. Hence, we capitalized the R&D,
          therefore the current operating margin shown by us may vary with the
          margin as reported by the company.
        </li>
        <li>
          The company’s Options outstanding(if any) has been taken into account
          in the valuation.
        </li>
        <li>
          Since we cannot estimate cash flows forever, we estimated cash flows
          for a “growth period” and then estimated a TERMINAL VALUE(not shown in
          cash flow), to capture the value at the end of the period.
        </li>
      </ul>
    </div>
  )
}

export default NotesForProfessionals
