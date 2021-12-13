import React from 'react'

function AccordionItem ({ id, title, description, industries }) {
  return (
    <div class='in_acc_item'>
      <h2 class='in_acc_header' id={`acc_${id}`}>
        <button
          class='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#${id}`}
          aria-expanded='true'
          aria-controls={`${id}`}
        >
          <span class='d-block w-100'>
            {title}{' '}
            <a class='float-end me-3 pe-3 text-secondary'>{industries}</a>
          </span>
        </button>
      </h2>
      <div
        id={`${id}`}
        class='accordion-collapse collapse'
        aria-labelledby='acc_commu_serv'
        data-bs-parent='#acc_sidefilter'
      >
        <div class='in_acc_body'>{description}</div>
      </div>
    </div>
  )
}

export default AccordionItem
