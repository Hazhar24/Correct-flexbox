import React from 'react'
import Recatangle from './greenRecatangle'
import RedblueSquare from './redblueSquare'
import BigSquare from './bigSquare'
import Square20 from './Square20'


const Main = () => {
    return (
        <div className='w-2/3 flex flex-wrap justify-center mx-auto mt-12 md:flex md:w-2/3'>
            <div>
                <Recatangle text='TEXT' />
                <Recatangle text='TEXT' />
                <Recatangle text='TEXT' />
                <Recatangle text='TEXT' />
                <Recatangle text='TEXT' />
                <Recatangle text='TEXT' />
                <Recatangle text='TEXT' />
                <Recatangle text='TEXT' />
            </div>
            <div className='flex flex-wrap md:w-3/4 lg:ml-5 justify-center'>
                <div className='border-2 w-full border-gray-300 flex justify-between'>
                    <Square20 />
                    <Square20 />
                    <Square20 />
                </div>
                <div className='flex justify-between w-full mt-6'>
                    <RedblueSquare />
                    <RedblueSquare />
                </div>
                <div className='border-2 w-full md:w-full border-gray-300 flex justify-evenly items-center mt-6 h-56'>
                    <div>
                        <Recatangle />
                        <Recatangle />
                        <Recatangle />
                    </div>
                    <div className='grid grid-cols-3 gap-4 justify-between'>
                        <BigSquare />
                        <BigSquare />
                        <BigSquare />
                        <BigSquare />
                        <BigSquare />
                        <BigSquare />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main