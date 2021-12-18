import { Box, Slider } from '@mui/material'
import React, { useState } from 'react'

function Controls ({ handleSubmit }) {
  const [date, setDate] = useState(
    new Date('2021-12-13').toISOString().substring(0, 10)
  )
  const [monthInput, setMonthInput] = useState(100)
  const [strikeInput, setStrikeInput] = useState(20)
  const [callRange, setCallRange] = useState([0.5, 20])
  const [putRange, setputRange] = useState([0.5, 50])
  const [CPRange, setCPRange] = useState([0.5, 20])

  const handleExpiration = e => {
    setMonthInput(e.target.value)
  }

  const handleStrikeChange = e => {
    setStrikeInput(e.target.value)
  }

  const handleDateChange = e => {
    setDate(e.target.value)
  }

  const handleCallRangeChange = value => {
    setCallRange(value)
  }
  const handlePutRangeChange = value => {
    setputRange(value)
  }
  const handleCPRangeChange = value => {
    setCPRange(value)
  }

  return (
    <React.Fragment>
      <div
        className='card flex-wrap d-flex flex-row justify-content-between my-2'
        style={{ overflow: 'auto' }}
      >
        <div class=' card d-flex flex-row flex-wrap align-items-center justify-content-between w-100 p-4'>
          <p className='my-auto fw-bolder'>Expiration</p>
          <input
            type='number'
            value={monthInput}
            onChange={handleExpiration}
            className='mx-2 form-control my-auto '
            style={{ width: '100px' }}
          />
          <p className='my-auto mx-2 fw-bolder'>Strike</p>
          <div class='d-flex flex-column align-items-start p-3'>
            <label for='myinputRange' class='form-label mx-2 my-0 mt-2'>
              {strikeInput}
            </label>
            <Slider
              aria-label='Strike'
              value={strikeInput}
              onChange={handleStrikeChange}
              sx={{
                color: '#0f062b'
              }}
              min={0}
              max={100}
              id='myinputRange'
              style={{ width: '100px' }}
            />
          </div>
          <p className='my-auto mx-2 fw-bolder'>Data Date</p>
          <input
            type='date'
            className='mx-2 form-control my-auto w-auto'
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div
        className='flex-wrap d-flex flex-row justify-content-between my-2 card'
        style={{ overflow: 'auto' }}
      >
        <div class=' card d-flex flex-row flex-wrap align-items-center justify-content-between w-100 p-4'>
          <Box sx={{ width: 150 }} className='mx-2 '>
            <p className='mx-2 my-auto fw-bolder'>Call Range</p>
            <div class='d-flex flex-row my-1 justify-content-center'>
              <div class='d-flex flex-column  mx-1 '>
                <label>From</label>
                <input
                  type='number'
                  min={0}
                  step={0.5}
                  className='form-control '
                  value={callRange[0]}
                  onChange={e => {
                    handleCallRangeChange([e.target.value, callRange[1]])
                  }}
                />
              </div>
              <div class='d-flex flex-column  mx-1'>
                <label>To</label>
                <input
                  type='number'
                  min={0}
                  step={0.5}
                  className='form-control '
                  value={callRange[1]}
                  onChange={e => {
                    handleCallRangeChange([callRange[0], e.target.value])
                  }}
                />
              </div>
            </div>
          </Box>

          <Box sx={{ width: 150 }} className='mx-2'>
            <p className='my-auto mx-2 fw-bolder'>Put Range</p>
            <div class='d-flex flex-row my-1'>
              <div class='d-flex flex-column align-items-start mx-1 '>
                <label>From</label>
                <input
                  type='number'
                  min={0}
                  step={0.5}
                  className='form-control '
                  value={putRange[0]}
                  onChange={e => {
                    handlePutRangeChange([e.target.value, putRange[1]])
                  }}
                />
              </div>
              <div class='d-flex flex-column align-items-start mx-1'>
                <label>To</label>
                <input
                  type='number'
                  min={0}
                  step={0.5}
                  className='form-control '
                  value={putRange[1]}
                  onChange={e => {
                    handlePutRangeChange([putRange[0], e.target.value])
                  }}
                />
              </div>
            </div>
          </Box>

          <Box sx={{ width: 150 }} className='mx-2'>
            <p className='my-auto mx-2 fw-bolder'>CP Range</p>
            <div class='d-flex flex-row my-1'>
              <div class='d-flex flex-column align-items-start mx-1 '>
                <label>From</label>
                <input
                  type='number'
                  min={0}
                  step={0.5}
                  className='form-control '
                  value={CPRange[0]}
                  onChange={e => {
                    handleCPRangeChange([e.target.value, CPRange[1]])
                  }}
                />
              </div>
              <div class='d-flex flex-column align-items-start mx-1'>
                <label>To</label>
                <input
                  type='number'
                  min={0}
                  step={0.5}
                  className='form-control '
                  value={CPRange[1]}
                  onChange={e => {
                    handleCPRangeChange([CPRange[0], e.target.value])
                  }}
                />
              </div>
            </div>
          </Box>
          <button
            className='my_button my-auto w-auto'
            onClick={() => {
              handleSubmit(`
      {
        "month":"${monthInput}",
        "strike_percent":"${strikeInput}",
        "date":"${date}",
        "call_value":"${callRange[0]}_${callRange[1]}",
        "put_value":"${putRange[0]}_${putRange[1]}",
        "cp_value":"${CPRange[0]}_${CPRange[1]}"
    }`)
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Controls
