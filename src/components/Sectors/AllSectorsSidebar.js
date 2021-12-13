import React from 'react'
import AccordionItem from './AccordionItem'

const DUMMY = [
  {
    id: 'coll_commu_serv',
    title: 'Communication Services',
    industries: '5 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_consumer_discre',

    title: 'Consumer Discretionary',
    industries: '11 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_consumer_staples',

    title: 'Consumer Staples',
    industries: '11 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_energy',

    title: 'Energy',
    industries: '5 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_financials',

    title: 'Financials',
    industries: '2 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_healthcare',

    title: 'Health Care',
    industries: '6 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_info_tech',

    title: 'Information Technology',
    industries: '6 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_materials',

    title: 'Materials',
    industries: '5 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_realestate',

    title: 'Real Estate',
    industries: '2 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  },
  {
    id: 'coll_utilities',

    title: 'Utilities',
    industries: '5 Industries',
    description: `It is shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element.`
  }
]

function AllSectorsSidebar () {
  return (
    <div class='col-lg-4'>
      <div class='leftsidefilter'>
        <div class='new_scenr_btn'>
          <h4 class='m-0'>All Sectors</h4>
        </div>
        <div class='accordion' id='acc_sidefilter'>
          {DUMMY.map(item => (
            <AccordionItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              industries={item.industries}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllSectorsSidebar
