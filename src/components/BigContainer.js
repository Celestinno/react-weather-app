import React from 'react'
import Container from './Container'
import '../CSS/BigContainer.css'


export default function BigContainer({ days, rain, icon, temperature, date }) {
  return (
    <div className='bigContainer'>
      {
        [...Array(days)].map((item, idx) => (
          <Container rain={rain[idx]} icon={icon[idx]} temperature={temperature[idx]} date={date[idx]} />
        ))
      }

      {/* <Container rain={rain[0]} icon={icon[0]} temperature={temperature[0]} date={date[0]} />
      <Container rain={rain[1]} icon={icon[1]} temperature={temperature[1]} date={date[1]} />
      <Container rain={rain[2]} icon={icon[2]} temperature={temperature[2]} date={date[2]} /> */}
    </div>
  )
}
