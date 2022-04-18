import React from 'react'
import './forecast.css'

const ForeCast = ({ cityWeather }) => {
  return (
    <>
      <div className='forecastWrapper'>
        {cityWeather?.list?.map((item, index) => (
          <div className='forecastItem' key={index}>
            <img
              src={`
              http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
              alt=''
            />
            <div className='forecastItem-date'>
              <p>
                {item.dt_txt.substring(0, 11)} {item.dt_txt.substring(12, 16)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ForeCast
