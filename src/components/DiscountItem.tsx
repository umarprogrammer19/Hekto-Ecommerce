import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const DiscountItem = () => {
    return (
        <section className='my-10 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Discount Item</h2>
                <div className='flex justify-center items-center gap-2 md:gap-16 md:mt-8 mt-6 text-sm md:flex-row flex-col'>
                    <span>Wood Chair</span>
                    <span>Plastic Chair</span>
                    <span>Sofa Colletion</span>
                </div>
                <div className='flex justify-center items-center md:flex-row flex-col mt-6 md:mt-0'>
                    <div className='flex flex-col gap-8 md:w-1/2'>
                        <h1 className='text-4xl font-bold'>
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
                    <div>
                        <Image src='/sofa3.png' width={500} height={500}  alt='image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscountItem