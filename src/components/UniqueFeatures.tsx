import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const UniqueFeatures = () => {
    return (
        <section className='md:py-10 py-6 bg-[#F1F0FF]'>
            <div className='max-w-[84%] mx-auto'>
                <div className='flex justify-center items-center md:flex-row flex-col  md:gap-10'>
                    <div>
                        <Image src='/sofa2.png' width={350} height={350} alt='image' />
                    </div>
                    <div className='flex flex-col gap-8 md:w-1/2 items-start'>
                        <h1 className='md:text-4xl text-3xl font-bold'>
                            Unique Features Of leatest &
                            Trending Poducts
                        </h1>
                        <ul className='flex flex-col gap-2 text-gray-400'>
                            <li className='text-sm'>All frames constructed with hardwood solids and laminates</li>
                            <li className='text-sm'>Reinforced with double wood dowels, glue, screw - nails corner
                                blocks and machine nails</li>
                            <li className='text-sm'>Arms, backs and seats are structurally reinforced</li>
                        </ul>
                        <div className='flex gap-6'>
                            <Button size={"lg"} variant={"secondary"} >Add To Cart</Button>
                            <div className='flex flex-col gap-1'>
                                <span className='text-xs text-start'>B&B Italian Sofa </span>
                                <span className='text-xs text-start'>$32.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UniqueFeatures