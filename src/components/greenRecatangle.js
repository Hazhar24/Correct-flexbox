import React from 'react'

const Recatangle = (props) => {
  return (
    <div className='flex mb-5'>
      <div className='border w-28  h-10 bg-green-600'></div>
      <p className='text-3xl pl-2'>{props.text}</p>
    </div>
  )
}

export default Recatangle