import React from 'react'
import ForeCast from './forecast/ForeCast'
import Content from './content/Content'
import './databox.css'

const DataBox = ({ cityWeather }) => {
  return (
    <div className='databox'>
      <Content cityWeather={cityWeather} />
      <ForeCast cityWeather={cityWeather} />
    </div>
  )
}

export default DataBox
