import React, { useEffect, useState } from 'react'
import InputBox from './inputbox/InputBox'
import DataBox from './databox/DataBox'
import './main.css'
import axios from 'axios'

const Main = () => {
  const [city, setCity] = useState('Tehran')
  const [cityWeather, setCityWeather] = useState({})

  const API_KEY = '10e500a2733b2361f1e74acf08b3cccc'

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=7`
      )
      setCityWeather(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [city])
  console.log(cityWeather)
  return (
    <div className='main'>
      <InputBox city={city} setCity={setCity} />
      <DataBox cityWeather={cityWeather} />
    </div>
  )
}

export default Main
