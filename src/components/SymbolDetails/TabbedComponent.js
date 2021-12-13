import React, { useState } from 'react'
import './TabbedComponent.css'

function TabbedComponent ({ tabs, onTabSelected }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const tabSelectHandler = tab => {
    setSelectedTab(tab)
    onTabSelected(tab)
  }

  return (
    <div class='tab'>
      {tabs.map(tab => {
        const mClass = `tab__item ${
          selectedTab && tab.id == selectedTab.id ? 'active' : ''
        }`
        return (
          <button
            key={tab.id}
            className={mClass}
            onClick={tabSelectHandler.bind(null, tab)}
          >
            {tab.name}
          </button>
        )
      })}
    </div>
  )
}

export default TabbedComponent
