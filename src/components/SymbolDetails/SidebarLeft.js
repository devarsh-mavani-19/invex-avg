import React from 'react'
import SidebarCompanyInfo from './SidebarCompanyInfo'
import SidebarCompanyStats from './SidebarCompanyStats'
import SidebarResources from './SidebarResources'

function SidebarLeft () {
  return (
    <div className='col-lg-4'>
      <SidebarCompanyStats />
      <SidebarResources />
      <SidebarCompanyInfo />
    </div>
  )
}

export default SidebarLeft
