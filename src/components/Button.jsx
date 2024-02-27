import React from 'react'

function Button({onClick,btnText}) {
  return (
    <button className='flex mt-4 items-center justify-center w-full h-10 mt-2 bg-indigo-600 rounded-md text-white' onClick={onClick}>{btnText}</button>
  )
}

export default Button