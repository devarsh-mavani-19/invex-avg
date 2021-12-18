import { createTheme, responsiveFontSizes } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import MUIDataTable from 'mui-datatables'
import React from 'react'

function MainTable ({ companies, columns }) {
  let theme = createTheme()
  theme = responsiveFontSizes(theme)
  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        data={companies}
        columns={columns}
        options={{ selectableRows: false, rowsPerPage: 3000 }}
        className='my-2'
      />
    </ThemeProvider>
  )
}

export default MainTable
