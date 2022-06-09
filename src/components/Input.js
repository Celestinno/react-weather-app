import React, { useState } from 'react'
import '../CSS/input.css'








export default function Input({ placeholder, textInput, setTextInput, setSearchText }) {
  const inputTextSetup = (event) => {
    const str = event.target.value.replace(/[^a-zA-Z]/gi, '')
    event.target.value = str;
    setTextInput(str);
    console.log(str);
  }
  const searchTextSetup = () => {
    setSearchText(textInput);
  }

  return (
    <div className='input'>
      <input onChange={inputTextSetup} type='text' placeholder={placeholder} />
      <button onClick={searchTextSetup}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}
