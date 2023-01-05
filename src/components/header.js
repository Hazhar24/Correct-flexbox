import React from 'react'
import Square from "./redSquare"

const Header = () => {
    return (
        <header className='container w-2/3 flex mx-auto justify-between'>
            <div className='flex'>
                <Square text='TEXT' />
            </div>
            <div className='flex'>
                <Square />
                <Square />
            </div>
        </header>
    )
}

export default Header