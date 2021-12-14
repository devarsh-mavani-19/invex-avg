import React, { useEffect, useState, ReactPortal } from 'react'
import { createPortal } from 'react-dom'
import { Accordion, useAccordionButton } from 'react-bootstrap'
import './styles.css'
import { Link } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Slider } from '@mui/material'
import { makeStyles, ThemeProvider } from '@mui/styles'

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

function Index () {
  const [monthInput, setMonthInput] = useState(100)
  const [strikeInput, setStrikeInput] = useState(10)
  const [companies, setCompanies] = useState({})
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10))

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
    setCompanies(JSON.parse(json))
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
              <div class='col-12'>
                <Link
                  to={{
                    pathname: '/new'
                  }}
                >
                  <button class='btn btn-success'>Go to new dashboard</button>
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
                      <label
                        for='myinputRange'
                        class='form-label mx-2 my-0 mt-2'
                      >
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
              </div>
              {loading ? (
                <div class=' d-flex justify-content-center align-items-center'>
                  <div class='spinner-border text-primary' role='status'>
                    <span class='visually-hidden'>Loading...</span>
                  </div>
                </div>
              ) : (
                <Accordion defaultActiveKey='0'>
                  <table className='table my-3 '>
                    <thead>
                      <tr>
                        <th scope='col'>Company name</th>
                        <th scope='col'>Call IR</th>
                        <th scope='col'>Put IR</th>
                        <th scope='col'>CP Ratio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(companies).map(([key, value]) => {
                        return (
                          <React.Fragment>
                            <tr>
                              <td style={{ cursor: 'pointer' }}>
                                <CustomToggle eventKey={key}>
                                  {key}
                                </CustomToggle>
                              </td>
                              <td>
                                {value['total'][0]
                                  ? value['total'][0].toFixed(2)
                                  : '-'}
                              </td>
                              <td>
                                {value['total'][1]
                                  ? value['total'][1].toFixed(2)
                                  : '-'}
                              </td>
                              <td>
                                {value['total'][2]
                                  ? value['total'][2].toFixed(2)
                                  : '-'}
                              </td>
                            </tr>
                            <tr className='py-0 m-0 acc_row'>
                              <td className='py-0 m-0'>
                                <Accordion.Collapse eventKey={key}>
                                  <span>24</span>
                                </Accordion.Collapse>
                              </td>
                              <td className='py-0 m-0'>
                                <Accordion.Collapse eventKey={key}>
                                  <span>
                                    {value['24'][0]
                                      ? value['24'][0].toFixed(2)
                                      : '-'}
                                  </span>
                                </Accordion.Collapse>
                              </td>
                              <td className='py-0 m-0'>
                                <Accordion.Collapse eventKey={key}>
                                  <span>
                                    {value['24'][1]
                                      ? value['24'][1].toFixed(2)
                                      : '-'}
                                  </span>
                                </Accordion.Collapse>
                              </td>
                              <td className='py-0 m-0'>
                                <Accordion.Collapse eventKey={key}>
                                  <span>
                                    {value['24'][2]
                                      ? value['24'][2].toFixed(2)
                                      : '-'}
                                  </span>
                                </Accordion.Collapse>
                              </td>
                            </tr>
                            <tr className='py-0 m-0 acc_row'>
                              <td className='py-0 m-0'>
                                <Accordion.Collapse eventKey={key}>
                                  <span>59</span>
                                </Accordion.Collapse>
                              </td>
                              <td className='py-0 m-0'>
                                <Accordion.Collapse eventKey={key}>
                                  <span>
                                    {value['59'][0]
                                      ? value['59'][0].toFixed(2)
                                      : '-'}
                                  </span>
                                </Accordion.Collapse>
                              </td>
                              <td className='py-0 m-0'>
                                <Accordion.Collapse eventKey={key}>
                                  <span>
                                    {value['59'][1]
                                      ? value['59'][1].toFixed(2)
                                      : '-'}
                                  </span>
                                </Accordion.Collapse>
                              </td>
                              <td className='py-0 m-0'>
                                <Accordion.Collapse eventKey={key}>
                                  <span>
                                    {value['59'][2]
                                      ? value['59'][2].toFixed(2)
                                      : '-'}
                                  </span>
                                </Accordion.Collapse>
                              </td>
                            </tr>
                          </React.Fragment>
                        )
                      })}
                    </tbody>
                  </table>
                </Accordion>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
