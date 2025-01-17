import Image from 'next/image'
import React from 'react'

const Logos = () => {
    return (
        <div className='md:max-w-[70%] mx-auto my-16 flex items-center justify-center'>
            <Image src='/group2.png' width={800} height={800} alt='image' />
        </div>
    )
}

export default Logos