import './App.css'
import Sectors from './components/Sectors/Sectors'
import SymbolDetails from './components/SymbolDetails/SymbolDetails'
import ValuationReport from './components/ValuationReport/ValuationReport'
import CallsAndPuts2 from './components/CallsAndPuts2/index'
import CallsAndPuts2New from './components/CallsAndPuts2/index2'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/new' element={<CallsAndPuts2New />} />
          <Route path='/' element={<CallsAndPuts2 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
