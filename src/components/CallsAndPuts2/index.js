import React, { useEffect, useState } from 'react'
import { Accordion, useAccordionButton } from 'react-bootstrap'
import './styles.css'

function Index () {
  const [monthInput, setMonthInput] = useState(100)
  const [strikeInput, setStrikeInput] = useState(10)
  const [companies, setCompanies] = useState({})

  const getData = async () => {
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
                  <input
                    type='range'
                    id='myinput'
                    className='mx-2 form-range '
                    value={strikeInput}
                    onChange={handleStrikeChange}
                    min={1}
                    max={100}
                  />
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
                              <CustomToggle eventKey={key}>{key}</CustomToggle>
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
                    {/* <tr>
                      <td style={{ cursor: 'pointer' }}>
                        <CustomToggle eventKey='0'>ABEV</CustomToggle>
                      </td>
                      <td>7.85</td>
                      <td>9.55</td>
                      <td>0.25</td>
                    </tr>
                    <tr className='py-0 m-0 acc_row'>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>25 Jan 2020</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                    </tr>
                    <tr className='py-0 m-0 acc_row'>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>25 Jan 2020</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                    </tr>
                    <tr className='py-0 m-0 acc_row'>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>25 Jan 2020</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                      <td className='py-0 m-0'>
                        <Accordion.Collapse eventKey='0'>
                          <span>9.55</span>
                        </Accordion.Collapse>
                      </td>
                    </tr>
                    <tr>
                      <td>ABEV</td>
                      <td>7.85</td>
                      <td>9.55</td>
                      <td>0.25</td>
                    </tr>
                    <tr>
                      <td>ABEV</td>
                      <td>7.85</td>
                      <td>9.55</td>
                      <td>0.25</td>
                    </tr> */}
                  </tbody>
                </table>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
