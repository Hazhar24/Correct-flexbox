import React from 'react'
import Square from "./textSquare"
import RedSquare from './redSquare'

const Header = () => {
    return (
        <header className='container w-2/3 flex mx-auto justify-between'>
            <div className='flex'>
                <Square text='TEXT' />
            </div>
            <div className='flex'>
                <RedSquare />
                <RedSquare />
            </div>
        </header>
    )
}

export default Header