import React from 'react'

const Btn = (props) => {
  return (
    <button onClick={() => props.click()} className="hover:bg-gray-100 w-8 h-8 flex justify-center items-center">
      {props.icon}
    </button>
  )
}

export default Btn
