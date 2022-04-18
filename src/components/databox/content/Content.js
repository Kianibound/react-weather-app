import React from 'react'
import './content.css'
const Content = ({ cityWeather }) => {
  // console.log(cityWeather.list[2].main.feels_like)
  console.log(cityWeather)
  return (
    <div className='content'>
      {cityWeather?.list?.length > 0 && (
        <div className='content-item'>
          <div className='cityFirstLook'>
            <p>{cityWeather?.city?.country}</p>
            <h1>{cityWeather?.city?.name}</h1>
            <img
              src={`
http://openweathermap.org/img/wn/${cityWeather.list[0].weather[0].icon}@2x.png`}
              alt='test'
            />
          </div>
          <div className='OtherData'>
            <h4>Feels like:{cityWeather?.list[0]?.main?.feels_like}</h4>
            <h4>pressure : {cityWeather?.list[0]?.main?.pressure}</h4>
            <h4>Wind : {cityWeather?.list[0]?.wind?.speed}</h4>
            <h4>{cityWeather?.list[0]?.weather[0]?.main}</h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default Content
