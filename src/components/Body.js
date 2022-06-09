import React from 'react'
import Input from './Input'
import { useState } from "react";
import '../CSS/body.css'
import BigContainer from './BigContainer'

export default function Body({ setDays, days, icon, rain, temperature, date, placeholder, textInput, setTextInput, setSearchText }) {
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <Input setDays={setDays} placeholder={placeholder} textInput={textInput} setTextInput={setTextInput} setSearchText={setSearchText} />
      </div>
      <div className='bodyContainer' >
        <BigContainer days={days} rain={rain} icon={icon} temperature={temperature} date={date} />
      </div>

    </div>
  )
}
