import React from 'react'
// import { Button } from './ui/button'
import Image from 'next/image'

const About = () => {
    return (
        <section className='my-16 relative'>
            <div className='max-w-[84%] mx-auto '>
                <div className='flex justify-center items-center md:flex-row flex-col gap-8 md:gap-10'>
                    <div className='border-l-[12px] rounded-md border-[#2B3CAB] border-b-[12px]'>
                        <Image src='/aboutbanner.png' width={500} height={500} alt='image' />
                    </div>
                    <div className='flex flex-col gap-8 md:w-1/2 items-start'>
                        <h1 className='md:text-4xl text-3xl font-bold'>
                            Know About Our Ecomerce
                            Business, History
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <div className='flex gap-6'>
                            {/* <Button size={"lg"} variant={"secondary"} >Contact us</Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About