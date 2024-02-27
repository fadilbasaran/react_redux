import React from 'react'

function Input({placeholder, type, id, name,onChange,value}) {
  return (
    <input value={value} className=' mt-2 h-10 w-full border rounded-md p-2' type={type} onChange={onChange} placeholder={placeholder} name={name} id={id} />
  )
}

export default Input