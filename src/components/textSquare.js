import React from 'react'

const Square = (props) => {
    return (
        <span className='flex items-center '>
            <div className='border w-12 h-12 bg-red-500'></div>
            <p className='text-3xl p-1'>{props.text}</p>
        </span>
    )
}

export default Square