
import Image from 'next/image'
import React from 'react'
// import { Button } from './ui/button'

const ContactInfo = () => {
    return (
        <section className='my-20'>
            <div className='max-w-[84%] mx-auto'>
                <div className='flex justify-between items-center gap-10 md:flex-row flex-col'>
                    <div className='md:w-1/2 flex flex-col gap-4'>
                        <h2 className='md:text-3xl text-2xl font-bold'>
                            Information About us
                        </h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    </div>
                </div>
                <div className='flex justify-between items-center md:gap-0 gap-4 mt-24 md:flex-row flex-col'>
                    <div className='flex flex-col gap-4 md:w-1/2'>
                        <h2 className='md:text-3xl text-2xl font-bold'>
                            Get In Touch
                        </h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        <div className="w-full mt-4">
                            <div className="flex items-center gap-6 lg:flex-row flex-col">
                                <input type="text" placeholder="Name" className="bg-transparent border border-gray-200 py-2 px-4 w-full" />
                                <input type="text" placeholder="Name" className="bg-transparent border border-gray-200 py-2 px-4 w-full" />
                            </div>
                            <input type="text" placeholder="Name" className="bg-transparent border mt-6 border-gray-200 py-2 px-4 w-full" />
                            <textarea placeholder="Message" className="bg-transparent border border-gray-200 py-2 h-[207px] px-4 w-full mt-6 resize-none" />
                            <div className=" mt-6">
                                {/* <Button size={'lg'} variant={'secondary'}>Send Message</Button> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src='/group3.png' width={500} height={500} alt='image' />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
