 import React from 'react'

interface Prop{
    text:string
}

function Button({text}:Prop) {
  return (
    <>
        <button className='rounded w-[163px] h-[50px] bg-[#FB2E86] text-white'>
            {text}
        </button>
    </>
  )
}

export default Button