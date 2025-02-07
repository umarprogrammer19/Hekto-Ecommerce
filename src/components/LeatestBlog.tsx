import Image from 'next/image'
import React from 'react'

const LeatestBlog = () => {
    return (
        <section className='mb-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>
                    Leatest Blog
                </h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                            <div className='col-span-1 flex flex-col gap-4 text-start shadow-2xl rounded-md' key={index}>
                                <div className='w-full'>
                                    <Image src='/blog.png' width={320} height={320} alt='image' className='rounded-md w-full' />
                                </div>
                                <div className='px-4 pt-4 pb-8 flex flex-col gap-3 items-start'>
                                    <div className='flex gap-2'>
                                        <span className='text-xs'>SaberAli</span>
                                        <span className='text-xs'>SaberAli</span>
                                    </div>
                                    <h3 className='text-lg text-[#151875] font-semibold'>Top esssential Trends in 2021</h3>
                                    <span className='text-xs'>More off this less hello samlande lied much
                                        over tightly circa horse taped mightly</span>
                                    <button className='underline text-xs text-[#151875]'>Read More</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default LeatestBlog