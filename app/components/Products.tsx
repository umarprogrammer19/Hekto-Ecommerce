'use client'
import Image from 'next/image'
import React from 'react'
import StarRatings from 'react-star-ratings'


const Products = () => {
    return (
        <section className='my-20'>
            <div className='max-w-[84%] mx-auto'>
                <div className='bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8'>
                    <div className='md:w-[15%] hidden md:flex flex-col gap-4 items-center'>
                        <Image src='/subbag.png' width={150} height={100} alt='image' />
                        <Image src='/subbag.png' width={150} height={100} alt='image' />
                        <Image src='/subbag.png' width={150} height={100} alt='image' />
                    </div>
                    <div className='md:w-[40%]'>
                        <Image src='/bag2.png' width={400} height={100} alt='image' />
                    </div>
                    <div className='md:w-[45%] flex items-start gap-4 flex-col'>
                        <h3 className='text-3xl font-bold'>Playwood arm chair</h3>
                        <StarRatings
                            starRatedColor="orange"
                            numberOfStars={5}
                            rating={4}
                            starDimension='20px'
                            starSpacing='2px'
                            name='rating'
                        />
                        <span className='text-sm'>$32.00</span>
                        <span className='text-sm'>Color</span>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        <span className='px-4 p-2'>Add To cart </span>
                        <span className='text-sm'>Categories</span>
                        <span className='text-sm'>Tags</span>
                        <span className='text-sm'>Share</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products