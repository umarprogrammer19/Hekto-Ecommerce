import React from 'react'

const Heading = ({ heading }: { heading: string }) => {
    return (
        <div className='w-full bg-[#F6F5FF] md:py-20 py-10'>
            <h2 className='md:text-3xl text-2xl font-bold text-start ml-4 md:ml-24'>{heading}</h2>
        </div>
    )
}

export default Heading