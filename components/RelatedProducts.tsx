'use client'
import Image from 'next/image'
import React from 'react'
import StarRatings from 'react-star-ratings';

const RelatedProducts = () => {
    const products = [
        {
            id: 1,
            title: 'Mens Classic Jacket',
            price: '$43.00',
            image: '/products/p1.png',
            rating: 4.5,
        },
        {
            id: 2,
            title: 'Womens Fashion',
            price: '$67.00',
            image: '/products/p2.png',
            rating: 4.8,
        },
        {
            id: 3,
            title: 'Wolx Dummy Fashion',
            price: '$67.00',
            image: '/products/p3.png',
            rating: 3,
        },
        {
            id: 4,
            title: 'Top Wall Digital Clock',
            price: '$51.00',
            image: '/products/p4.png',
            rating: 4.6,
        },
    ];

    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-start'>Featured Products</h2>
                <div className='grid lg:grid-cols-4 text-start md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                    {products.map((product) => (
                        <div
                            className='col-span-1  flex items-center flex-col gap-4 md:p-2 bg-white shadow-md rounded-md'
                            key={product.id}
                        >
                            <Image
                                src={product.image}
                                width={300}
                                height={200}
                                alt={product.title}
                                className='rounded'
                            />
                            <div className='flex gap-x-4'>
                                <div className='text-md font-semibold text-center'>
                                    {product.title}
                                    <div className='flex items-center justify-center gap-2'>
                                        <StarRatings
                                            starRatedColor='orange'
                                            numberOfStars={5}
                                            rating={product.rating}
                                            starDimension='16px'
                                            starSpacing='2px'
                                            name='rating'
                                        />
                                    </div>
                                </div>
                            </div>

                            <span className='text-sm  font-medium'>{product.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
