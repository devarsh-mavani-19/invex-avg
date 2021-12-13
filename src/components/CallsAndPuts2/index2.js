import { ThemeProvider } from '@mui/styles'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import React, { useEffect, useState, ReactPortal } from 'react'
import { createPortal } from 'react-dom'
import { Accordion, useAccordionButton } from 'react-bootstrap'
import './styles.css'
import MUIDataTable from 'mui-datatables'

const columns = [
  { name: 'company_name', label: 'Company name' },
  { name: 'call_ir', label: 'Call IR' },
  { name: 'put_ir', label: 'Put IR' },
  { name: 'cp_ratio', label: 'CP ratio' }
]

// const data = [
//   ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
//   ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
//   ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
//   ['James Houston', 'Test Corp', 'Dallas', 'TX']
// ]

const options = {
  filterType: 'none'
}

function Index2 () {
  let theme = createTheme()
  theme = responsiveFontSizes(theme)
  const [monthInput, setMonthInput] = useState(100)
  const [strikeInput, setStrikeInput] = useState(10)
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getData = async () => {
    setLoading(true)
    const res = await fetch(`http://dharm.ga/hello/total`, {
      method: 'POST',
      body: `{
        "month":"${monthInput}",
        "strike_percent":"${strikeInput}",
        "date":"2021-11-23"
    }`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let json = await res.text()
    json = json.replace(/\bNaN\b/g, null)
    json = json.replace(/\bInfinity\b/g, null)
    console.log(json)
    let jsonOP = JSON.parse(json)
    let op = []
    Object.entries(jsonOP).map(([key, value]) => {
      return Object.entries(value).map(([key2, value2]) => {
        if (key2 == 'total') {
          op.push({
            company_name: key,
            call_ir: value2[0] ? value2[0].toFixed(2) : '-',
            put_ir: value2[1] ? value2[1].toFixed(2) : '-',
            cp_ratio: value2[2] ? value2[2].toFixed(2) : '-'
          })
        } else {
          op.push({
            company_name: key2,
            call_ir: value2[0] ? value2[0].toFixed(2) : '-',
            put_ir: value2[1] ? value2[1].toFixed(2) : '-',
            cp_ratio: value2[2] ? value2[2].toFixed(2) : '-'
          })
        }
      })
    })
    setCompanies(op)
    setLoading(false)
  }

  const handleExpiration = e => {
    setMonthInput(e.target.value)
  }

  const handleStrikeChange = e => {
    setStrikeInput(e.target.value)
  }

  const handleSubmit = () => {
    getData()
  }

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => {})

    return <span onClick={decoratedOnClick}>{children}</span>
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='main'>
      <section className='company_details'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {loading
                ? createPortal(
                    <div class='backdrop d-flex justify-content-center align-items-center'>
                      <div class='spinner-border text-primary' role='status'>
                        <span class='visually-hidden'>Loading...</span>
                      </div>
                    </div>,
                    document.getElementById('loading_modal')
                  )
                : null}
              <div className='d-flex flex-row justify-content-between'>
                <div className='card d-flex flex-row justify-content-between align-items-center'>
                  <p className='my-auto mx-2'>Expiration</p>
                  <input
                    type='number'
                    value={monthInput}
                    onChange={handleExpiration}
                    className='mx-2 form-control w-25'
                  />
                </div>
                <div className='card d-flex flex-row justify-content-between align-items-center'>
                  <p className='my-auto mx-2'>Strike</p>
                  <div class='d-flex flex-column align-items-start'>
                    <label for='myinputRange' class='form-label mx-2 my-0 mt-2'>
                      {strikeInput}
                    </label>
                    <input
                      type='range'
                      id='myinputRange'
                      className='mx-2 form-range '
                      value={strikeInput}
                      onChange={handleStrikeChange}
                      min={1}
                      max={100}
                    />
                  </div>
                </div>
                <div className='card d-flex flex-row justify-content-between align-items-center'>
                  <p className='my-auto mx-2'>Data Date</p>
                  <input type='date' className='mx-2 form-control ' />
                </div>

                <div className='card d-flex flex-row justify-content-between align-items-center'>
                  <button
                    className='btn btn-outline-primary'
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <ThemeProvider theme={theme}>
                <MUIDataTable
                  title={'Employee List'}
                  data={companies}
                  columns={columns}
                  options={{ selectableRows: false }}
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index2
