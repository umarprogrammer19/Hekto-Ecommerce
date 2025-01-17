import React from 'react'
// import { Button } from './ui/button'
import Image from 'next/image'

const Banner2 = () => {
    return (
        <section className='pt-16 pb-6 bg-[#F2F0FF] relative' >
            <div className='max-w-[84%] mx-auto md:ml-[14%]'>
                <div className='flex justify-between items-center md:flex-row flex-col gap-10 md:gap-0'>
                    <div className='absolute md:block hidden top-0 -left-16'>
                        <Image src='/banner2.png' width={300} height={300} alt='image' />
                    </div>
                    <div className='flex flex-col gap-4 md:w-1/2 items-start'>
                        <span className='text-[#FB2E86] text-xs'>Best Furniture For Your Castle....</span>
                        <h1 className='md:text-5xl text-4xl font-bold'>
                            New Furniture Collection
                            Trends in 2020
                        </h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.</p>
                        {/* <Button size={"lg"} variant={"secondary"} >Shop Now</Button> */}
                    </div>
                    <div>
                        <Image src='/banner.png' width={500} height={500} alt='image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner2