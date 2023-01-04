import React from 'react'
import Recatangle from '../greenRecatangle'
import RedblueSquare from '../redblueSquare'
import BigSquare from '../bigSquare'
import Square20 from '../Square20'


const Main = () => {
    return (
        <div className='container w-2/4 flex mx-auto mt-12'>
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
            <div className='mx-auto w-2/3'>
                <div className='border-2 border-gray-300 flex justify-between'>
                    <Square20 />
                    <Square20 />
                    <Square20 />
                </div>
                <div className='flex justify-between mt-6'>
                    <RedblueSquare />
                    <RedblueSquare />
                </div>
                <div className='border-2 border-gray-300 flex justify-evenly items-center mt-6 h-56'>
                    <div className=''>
                        <Recatangle />
                        <Recatangle />
                        <Recatangle />
                    </div>
                    <div className='flex mx-4'>
                        <div >
                            <BigSquare />
                            <BigSquare />
                        </div>

                        <div>
                            <BigSquare />
                            <BigSquare />
                        </div>
                        <div>
                            <BigSquare />
                            <BigSquare />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main