import React from 'react'
import Square from "../redSquare"

const Header = () => {
    return (
        <header className=' container w-2/3 flex mx-auto '>
            <div className='flex flex-1'>
                <Square text='TEXT'/>
            </div>
            <div className='flex flex-1 justify-end'>
                <Square />
                <Square />
            </div>
        </header>
    )
}

export default Header