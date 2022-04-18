import React, { useState } from 'react'
import './inputbox.css'

const InputBox = ({ setCity, city }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    setCity(inputValue)
  }
  console.log(city)
  return (
    <div className='inputBox'>
      <div className='inputDiv'>
        <input
          type='text'
          placeholder='Enter city name'
          onChange={handleChange}
          value={inputValue}
        />
        <button className='searchBtn' onClick={handleClick}>
          Check weather
        </button>
      </div>
    </div>
  )
}

export default InputBox
