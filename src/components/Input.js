import React, { useState } from 'react'
import '../CSS/input.css'








export default function Input({ setDays, placeholder, textInput, setTextInput, setSearchText }) {
  let str = '';
  let strInt = 0;
  const inputTextSetup = (event) => {
    const str = event.target.value.replace(/[^a-zA-Z\s+]/gi, '')
    event.target.value = str;
    setTextInput(str);
    console.log(str);
  }

  const onClickSetup = () => {
    setSearchText(textInput);
    if (strInt > 3) {
      strInt = 3;
      setDays(strInt);
    }
    else if (strInt <= 0) {
      strInt = 3;
      setDays(strInt);
    }
    else {
      setDays(strInt)
    }

  }

  const inputNumberSetup = (event) => {
    str = event.target.value.replace(/[^0-9\n]$/gi, '')
    event.target.value = str;
    strInt = parseInt(str);

  }


  return (
    <div className='input'>
      <input className='text' onChange={inputTextSetup} type='text' placeholder={placeholder} />
      <button onClick={onClickSetup}><i className="fa-solid fa-magnifying-glass"></i></button>
      <input onChange={inputNumberSetup} placeholder='3 days' className='number' type='text'></input>
    </div >
  )
}
