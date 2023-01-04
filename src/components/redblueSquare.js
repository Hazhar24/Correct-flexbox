import React from 'react'
import BigSquare from './bigSquare'
import Square from './redSquare'

const RedblueSquare = () => {
    return (
        <div className='flex'>
            <div>
                <BigSquare />
            </div>
            <div className='p-1'>
                <div><p className='text-3xl'>TEXT</p></div>
                <div className='pt-2'><Square text='TEXT' /></div>
            </div>
        </div>
    )
}

export default RedblueSquare
