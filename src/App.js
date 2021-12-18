import './App.css'
import Sectors from './components/Sectors/Sectors'
import SymbolDetails from './components/SymbolDetails/SymbolDetails'
import ValuationReport from './components/ValuationReport/ValuationReport'
import CallsAndPuts2 from './components/CallsAndPuts2/index'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<CallsAndPuts2 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
