import React from 'react'
import Recatangle from './greenRecatangleText'
import RedblueSquare from './redblueSquare'
import BigSquare from './bigSquare'
import Square20 from './Square20'
import GreenRecatangle from './greenRecatangle'


const Main = () => {
    return (
        <div className='w-3/4 flex flex-wrap justify-center mx-auto mt-12 lg:flex lg:w-3/4'>
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
            <div className='flex flex-wrap justify-center lg:w-2/3 lg:ml-5'>
                <div className='border-2 border-gray-300 flex-wrap justify-center w-full sm:w-full sm:flex sm:justify-between '>
                    <Square20 />
                    <Square20 />
                    <Square20 />
                </div>
                <div className='flex flex-wrap mt-6 justify-center sm:w-full sm:flex sm:justify-between'>
                    <RedblueSquare />
                    <RedblueSquare />
                </div>
                <div className='w-full items-center border-2 mt-6 md:flex md:justify-evenly md:items-center'>
                    <div className=' flex flex-col items-center justify-center'>
                        <GreenRecatangle />
                        <GreenRecatangle />
                        <GreenRecatangle />
                    </div>
                    <div className='grid grid-cols-2 m-2 justify-items-center gap-3 sm:grid-cols-3'>
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