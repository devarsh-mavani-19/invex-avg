import { makeStyles, ThemeProvider } from '@mui/styles'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import React, { useEffect, useState, ReactPortal } from 'react'
import { createPortal } from 'react-dom'
import { Accordion, useAccordionButton } from 'react-bootstrap'
import './styles.css'
import MUIDataTable from 'mui-datatables'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Slider, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { Box, Modal, Typography } from '@material-ui/core'
import MainTable from './MainTable'
import Controls from './Controls'
import MoreInfo from './MoreInfo'

const columns = [
  { name: 'company_name', label: 'Company name' },
  { name: 'call_ir', label: 'Call IR' },
  { name: 'put_ir', label: 'Put IR' },
  { name: 'cp_ratio', label: 'CP ratio' },
  { name: 'hvtf', label: 'HVTF' },
  { name: 'action', label: 'See More' }
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

function Index () {
  const [companies, setCompanies] = useState([])
  const [isDataLoaded, setDataLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showMoreDetails, setShowMoreDetails] = useState({
    show: false,
    data: {}
  })

  const handleShowMore = (key, value) => {
    setShowMoreDetails({ show: true, data: { key: key, value: { ...value } } })
  }

  const handleCloseModal = () => {
    setShowMoreDetails({
      show: false,
      data: {}
    })
  }

  const handleSubmit = body => {
    getData(body)
  }

  const getData = async body => {
    try {
      setLoading(true)
      setDataLoaded(true)

      const res = await fetch(`https://dharm.ga/hello/total`, {
        method: 'POST',
        body: body,

        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(body)
      let json = await res.text()
      json = json.replace(/\bNaN\b/g, null)
      json = json.replace(/\bInfinity\b/g, null)
      console.log('Output: ', json)
      let jsonOP = JSON.parse(json)
      let op = []
      Object.entries(jsonOP).map(([key, value]) => {
        let value2 = value['total']
        op.push({
          company_name: key,
          call_ir: value2[0] ? Number(value2[0].toFixed(2)) : '-',
          put_ir: value2[1] ? Number(value2[1].toFixed(2)) : '-',
          cp_ratio: value2[2] ? Number(value2[2].toFixed(2)) : '-',
          hvtf: value2[3] ? Number(value2[3].toFixed(2)) : '-',
          action: (
            <button
              class='btn btn-outline-success'
              onClick={() => {
                handleShowMore(key, value)
              }}
            >
              <i class='fa fa-arrow-right' aria-hidden='true'></i>
            </button>
          )
        })
        return ''
      })
      setCompanies(op)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='main'>
      <section className='company_details'>
        <div className='container'>
          <div className='row'>
            {showMoreDetails.show
              ? createPortal(
                  <MoreInfo
                    showMoreDetails={showMoreDetails}
                    handleCloseModal={handleCloseModal}
                  />,
                  document.getElementById('loading_modal')
                )
              : null}

            <div className='col-12'>
              <Controls handleSubmit={handleSubmit} />
              {loading ? (
                <div class='d-flex justify-content-center align-items-center'>
                  <div class='spinner-border text-primary' role='status'>
                    <span class='visually-hidden'>Loading...</span>
                  </div>
                </div>
              ) : isDataLoaded != 0 ? (
                <MainTable companies={companies} columns={columns} />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
