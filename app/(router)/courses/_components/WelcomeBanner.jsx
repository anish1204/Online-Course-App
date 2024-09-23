import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    return (
        <div className='flex gap-5  p-5 items-center bg-white rounded-xl'>
            <Image src='/panda.png' alt='panda' width={100} height={100} />
            <div>
                <h1 className='font-bold text-[23px]' >Welcome to <span className='font-bold text-[30px] text-amber-600'>CodeBuzz</span></h1>
                <h2 className='text-gray-500'>Explore,Learn and Keep Coding</h2>
            </div>

        </div>

    )
}

export default WelcomeBanner