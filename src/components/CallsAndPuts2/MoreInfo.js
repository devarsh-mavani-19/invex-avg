import { Modal, Typography, Box } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import MUIDataTable from 'mui-datatables'
import { createTheme, responsiveFontSizes } from '@mui/material'

import React from 'react'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const columns = [
  { name: 'company_name', label: 'Company name' },
  { name: 'call_ir', label: 'Call IR' },
  { name: 'put_ir', label: 'Put IR' },
  { name: 'cp_ratio', label: 'CP ratio' },
  { name: 'hvtf', label: 'HVTF' },
  { name: 'action', label: 'See More' }
]

function MoreInfo ({ showMoreDetails, handleCloseModal }) {
  let theme = createTheme()
  theme = responsiveFontSizes(theme)
  return (
    <Modal
      open={showMoreDetails.show}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      style={{ overflow: 'scroll' }}
    >
      <div>
        <Box sx={{ ...style }}>
          <div class='text-end' style={{ cursor: 'pointer' }}>
            <i class='fas fa-times' onClick={handleCloseModal}></i>
          </div>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {`${showMoreDetails.data['key']}`}
          </Typography>
          <div class='table-responsive shadow-lg p-3 my-3'>
          <ThemeProvider theme={theme}>
      <MUIDataTable
        data={showMoreDetails.data['value']}
        columns={columns}
        options={{ selectableRows: false, rowsPerPage: 3000 }}
        className='my-2'
      />
    </ThemeProvider>
            {/* <table class='table'>
              <thead>
                <tr>
                  <td scope='col'>Date</td>
                  <td scope='col'>Call IR</td>
                  <td scope='col'>Put IR</td>
                  <td scope='col'>CP Ratio</td>
                </tr>
              </thead>
              <tbody>
                {Object.entries(showMoreDetails.data['value']).map(
                  ([key, value]) => {
                    return (
                      <tr>
                        <td>{key}</td>
                        <td>{value[0].toFixed(2)}</td>
                        <td>{value[1].toFixed(2)}</td>
                        <td>{value[2].toFixed(2)}</td>
                      </tr>
                    )
                  }
                )}
              </tbody>
            </table> */}
          </div>
          <div>
            <button onClick={handleCloseModal} class='btn btn-danger'>
              Close
            </button>
          </div>
        </Box>
      </div>
    </Modal>
  )
}

export default MoreInfo
