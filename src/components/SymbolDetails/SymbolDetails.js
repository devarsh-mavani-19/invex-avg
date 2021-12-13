import React from 'react'
import MainContent from './MainContent'
import SidebarLeft from './SidebarLeft'
import './styles.css'
function SymbolDetails () {
  return (
    <div className='main'>
      <section className='company_details'>
        <div className='container'>
          <div className='row'>
            <SidebarLeft />
            <MainContent />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SymbolDetails
