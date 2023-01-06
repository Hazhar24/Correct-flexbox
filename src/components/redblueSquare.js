import React from 'react'
import BigSquare from './bigSquare'
import Square from './textSquare'

const RedblueSquare = () => {
    return (
        <div className='flex'>
            <div className='mt-5 md:mt-1'>
                <BigSquare />
            </div>
            <div className='p-1 mt-5 md:mt-1'>
                <p className='text-3xl pl-10 sm:pl-2 md:pl-2'>TEXT</p>
                <div className='pt-2 pl-10 sm:pl-2 md:pl-2'><Square text='TEXT' /></div>
            </div>
        </div>
    )
}

export default RedblueSquare
