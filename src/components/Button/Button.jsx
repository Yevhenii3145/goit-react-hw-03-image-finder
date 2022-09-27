import React from 'react'

export default function Button({text, onClick}) {
  return (
    <button className='loadButton' onClick={onClick}>{text}</button>
  )
}
