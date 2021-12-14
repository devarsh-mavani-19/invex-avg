import { makeStyles, ThemeProvider } from '@mui/styles'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import React, { useEffect, useState, ReactPortal } from 'react'
import { createPortal } from 'react-dom'
import { Accordion, useAccordionButton } from 'react-bootstrap'
import './styles.css'
import MUIDataTable from 'mui-datatables'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Slider } from '@mui/material'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: 250
  },
  sliderColor: {
    color: 'red'
  }
})

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: 'yellow'
      },
      track: {
        color: 'red'
      },
      rail: {
        color: 'black'
      }
    }
  }
})

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
  const classes = useStyles()

  let theme = createTheme()
  theme = responsiveFontSizes(theme)
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10))

  console.log(date)
  const [monthInput, setMonthInput] = useState(100)
  const [strikeInput, setStrikeInput] = useState(10)
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getData = async () => {
    try {
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
          op.push({
            company_name: key + ' ' + key2,
            call_ir: value2[0] ? value2[0].toFixed(2) : '-',
            put_ir: value2[1] ? value2[1].toFixed(2) : '-',
            cp_ratio: value2[2] ? value2[2].toFixed(2) : '-'
          })
        })
      })
      setCompanies(op)
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
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
            <div class='col-12'>
              <Link
                to={{
                  pathname: '/'
                }}
              >
                <button class='btn btn-success'>Go to old dashboard</button>
              </Link>
            </div>
            <div className='col-12'>
              <div
                className='flex-wrap d-flex flex-row justify-content-between my-2'
                style={{ overflow: 'auto' }}
              >
                <div class=' card d-flex flex-row flex-wrap align-items-center justify-content-between w-100 p-4'>
                  {/* <div className='my-2 card d-flex flex-row justify-content-center align-items-center'> */}
                  <p className='my-auto fw-bolder'>Expiration</p>
                  <input
                    type='number'
                    value={monthInput}
                    onChange={handleExpiration}
                    className='mx-2 form-control my-auto '
                    style={{ width: '100px' }}
                  />
                  {/* </div> */}
                  {/* <div className='my-2 card d-flex flex-row mx-2 justify-content-between align-items-center'> */}
                  <p className='my-auto mx-2 fw-bolder'>Strike</p>
                  <div class='d-flex flex-column align-items-start p-3'>
                    <label for='myinputRange' class='form-label mx-2 my-0 mt-2'>
                      {strikeInput}
                    </label>
                    <MuiThemeProvider muiTheme={muiTheme}>
                      <Slider
                        aria-label='Strike'
                        sx={{
                          color: '#0f062b'
                        }}
                        value={strikeInput}
                        onChange={handleStrikeChange}
                        min={0}
                        max={100}
                        id='myinputRange'
                        style={{ width: '100px' }}
                      />
                    </MuiThemeProvider>
                    {/* <input
                      type='range'
                      id='myinputRange'
                      className='mx-2 form-range w-75'
                      value={strikeInput}
                      onChange={handleStrikeChange}
                      min={1}
                      max={100}
                    /> */}
                  </div>
                  {/* </div> */}
                  {/* <div className='my-2 card d-flex flex-row justify-content-between align-items-center mx-2'> */}
                  <p className='my-auto mx-2 fw-bolder'>Data Date</p>
                  <input
                    type='date'
                    className='mx-2 form-control my-auto w-auto'
                    value={date}
                  />
                  {/* </div> */}

                  {/* <div className='my-2 d-flex flex-row justify-content-between align-items-center mx-2'> */}
                  <button
                    className='my_button my-auto w-auto'
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                {/* </div> */}
              </div>
              {loading ? (
                <div class='d-flex justify-content-center align-items-center'>
                  <div class='spinner-border text-primary' role='status'>
                    <span class='visually-hidden'>Loading...</span>
                  </div>
                </div>
              ) : (
                <ThemeProvider theme={theme}>
                  <MUIDataTable
                    data={companies}
                    columns={columns}
                    options={{ selectableRows: false }}
                    className='my-2'
                  />
                </ThemeProvider>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index2
