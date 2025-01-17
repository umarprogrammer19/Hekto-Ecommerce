'use client'
import Image from 'next/image'
import React from 'react'
import StarRatings from 'react-star-ratings';
const RelatedProducts = () => {
    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Featured Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div className='col-span-1 flex items-center flex-col gap-2' key={index}>
                                <Image src='/person.png' width={300} height={200} alt='image' />
                                <div className='flex justify-between items-center gap-4'>
                                    <h3 className=''>Mens Fashion Wear</h3>
                                    <StarRatings
                                        starRatedColor="orange"
                                        numberOfStars={5}
                                        rating={4}
                                        starDimension='10px'
                                        starSpacing='2px'
                                        name='rating'
                                    />
                                </div>
                                <span className='text-sm'>$42.00</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts