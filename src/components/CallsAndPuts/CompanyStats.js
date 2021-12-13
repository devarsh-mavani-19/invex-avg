import React, { useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables'

const data = {
  symbol_value: 'BAL',
  stepsize: 0.25,
  month: 300,
  Strike_percentage: 10,
  startdate: '2019-01-01',
  enddate: '2021-01-01',
  datadate: '2021-12-01'
}

function CompanyStats () {
  const [stepSize, setStepSize] = useState(1)
  const [strikes, setStrikes] = useState(25)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [tabData, setTabData] = useState(null)
  const [selectedTab, setSelectedTab] = useState(0)

  const stepSizeChangeHandler = e => {
    setStepSize(e.target.value)
  }

  const strikesChangeHandler = e => {
    setStrikes(e.target.value)
  }

  const handleTabChange = index => {
    setSelectedTab(index)
  }

  useEffect(async () => {
    try {
      const r = await fetch('http://dharm.ga/hello/calc', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({ 'Content-type': 'application/json' }),
        mode: 'cors'
      })

      const res = await r.json()
      setTabData(res)
    } catch (e) {
      console.log(e)
    }
  }, [])

  // const val = tabData ? tabData['rolling_value'][selectedTab] : 0

  // const cols = [
  //   {
  //     name: `Bid_call_${val}`,
  //     label: 'Bid',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Ask_call_${val}`,
  //     label: 'Ask',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Mid_call_${val}`,
  //     label: 'Mid',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Time_call_${val}`,
  //     label: 'Time',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `%Change_call_${val}`,
  //     label: '%Change',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Prob_Strike_call_${val}`,
  //     label: 'Prob Strike',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `HVTF_call_${val}`,
  //     label: 'HVTF',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Invex_Ratio_call_${val}`,
  //     label: 'Invex Ratio',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Strike_call_${val}`,
  //     label: 'Strike',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `space_${val}`,
  //     label: 'CP Ratio',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Bid_put_${val}`,
  //     label: 'Bid',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Ask_put_${val}`,
  //     label: 'Ask',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Mid_put_${val}`,
  //     label: 'Mid',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Time_put_${val}`,
  //     label: 'Time',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `%Change_put_${val}`,
  //     label: '%Change',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Prob_Strike_put_${val}`,
  //     label: 'Prob Strike',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `HVTF_put_${val}`,
  //     label: 'HVTF',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: `Invex_Ratio_put_${val}`,
  //     label: 'Invex Ratio',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   }
  // ]

  // console.log(cols.length)
  // let finalData = []

  // if (tabData) {
  //   let len = tabData[cols[0].name].length
  // }

  return (
    <React.Fragment>
      <div className='shadow card d-flex flex-row mx-2 mb-4 justify-content-center align-items-center'>
        <p className='my-auto mx-2'>Strategy</p>
        <div className='dropdown my-auto'>
          <a
            className='btn  dropdown-toggle'
            href='#'
            role='button'
            id='dropdownMenuLink'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Calls and puts
          </a>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
            <li>
              <a className='dropdown-item' href='#'>
                Action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Another action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <p className='my-auto mx-3'>Step Size</p>
        <input
          type='number'
          value={stepSize}
          onChange={stepSizeChangeHandler}
          className='form-control w-auto'
        />
        <p className='my-auto mx-3'>Strikes</p>
        <input
          type='range'
          className='form-range w-auto'
          min='0'
          max='100'
          value={strikes}
          onChange={strikesChangeHandler}
        />
        <p className='my-auto mx-3'>Start Date</p>
        <input type='date' className='form-control w-auto' />
        <p className='my-auto mx-3'>End Date</p>
        <input type='date' className='form-control w-auto' />
      </div>
      <div className='mx-2 my-3 d-flex flex-row align-items-center justify-content-evenly tabs'>
        <i
          style={{ backgroundColor: '#0f062b', color: 'white' }}
          className='rounded-3 p-2 fas fa-arrow-left'
        ></i>
        {tabData && tabData['Expiration']
          ? tabData['Expiration'].map((date, index) => {
              return (
                <p
                  onClick={() => {
                    handleTabChange(index)
                  }}
                  className={`my-auto ${
                    index == selectedTab ? 'active_tab p-2' : ''
                  }`}
                >
                  {date}
                </p>
              )
            })
          : null}
        {/* <p className='my-auto'>Nov 23(W)</p>
        <p className='my-auto'>Nov 23(W)</p>
        <p className='my-auto'>Nov 23(W)</p>
        <p className='my-auto'>Nov 23(W)</p>
        <p className='my-auto active_tab p-2'>Nov 23(W)</p>
        <p className='my-auto'>Nov 23(W)</p>
        <p className='my-auto'>Nov 23(W)</p> */}
        <i
          style={{ backgroundColor: '#0f062b', color: 'white' }}
          className='rounded-3 p-2 fas fa-arrow-right'
        ></i>
        <input type='date' className='form-control w-auto' />
        <button className='btn btn-outline-primary'>Reset</button>
      </div>
      <div className='mx-2 my-3 table-responsive text-center'>
        {/* {tabData ? (
          <MUIDataTable
            title={''}
            data={tabData}
            columns={cols}
            // options={options}
          />
        ) : null} */}

        <table className='table'>
          <tr>
            <td style={{ color: 'green' }} className='text-center' colSpan='8'>
              Calls
            </td>
            <td
              colSpan='2'
              style={{ fontWeight: 'bolder' }}
              className='text-center'
            >
              Nov 23
            </td>
            <td style={{ color: 'red' }} className='text-center' colSpan='8'>
              Puts
            </td>
          </tr>
          <tr>
            <td scope='col'>Bid</td>
            <td scope='col'>Ask</td>
            <td scope='col'>Mid</td>
            <td scope='col'>Time</td>
            <td scope='col'>%Change</td>
            <td scope='col'>Prob Strike</td>
            <td scope='col'>HVTF</td>
            <td scope='col'>Invex Ratio</td>
            <td scope='col'>Strike</td>
            <td scope='col'>Cp Ratio</td>
            <td scope='col'>Bid</td>
            <td scope='col'>Ask</td>
            <td scope='col'>Mid</td>
            <td scope='col'>Time</td>
            <td scope='col'>%Change</td>
            <td scope='col'>Prob Strike</td>
            <td scope='col'>HVTF</td>
            <td scope='col'>Invex Ratio</td>
          </tr>
          <tbody>
            <tr>
              <td scope='row'>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td scope='row'>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default CompanyStats
