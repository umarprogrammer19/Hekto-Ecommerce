/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyleComp = ({heading}:any) => {
    return (
        <div className='flex flex-col justify-center items-center py-44 bg-[url("/stylebg.jpg")] bg-cover bg-center bg-no-repeat'>
            <h2 className='text-4xl font-semibold'>{heading}</h2>
            <div className='flex items-center mt-4'>
                <Link href='/'><span>Home</span></Link>
                <ChevronRightIcon />
                <span>{heading}</span>
            </div>
        </div>
    )
}

export default StyleComp