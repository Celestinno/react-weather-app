import React from 'react'
import '../CSS/container.css'


export default function Container({ rain, temperature, date, icon }) {


  return (
    <div className={rain || temperature || date || icon ? 'container' : 'container-start'}>
      <p className='temperature'>Temp: {temperature} ºC</p>
      <img className='icon' src={icon} />
      <p className='weather'>{rain}</p>
      <p className='date'>{date}</p>
    </div>
  )
}
