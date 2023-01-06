import React from 'react'
import Square from './textSquare'

const Square20 = () => {
    return (
        <div>
            <div className='p-2'>
                <Square text='TEXT' />
                <div className='flex justify-between'>
                    <p>TEXT</p>
                    <p>20$</p>
                </div>
            </div>
        </div>
    )
}

export default Square20