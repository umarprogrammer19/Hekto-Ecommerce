'use client'
import { client } from '@/sanity/client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings';
const query = `*[_type == 'newProducts']{
    _id,
    name,
    "image":image.asset->url,
    price,
    description,
    category
}[0...4]`

interface Product {
    _id: string;
    name: string;
    image: string;
    price: string;
    description: string;
    category: string;
    weight: string;
}

const RelatedProducts = () => {
    const [data, setData] = useState<Product[]>([])
    useEffect(() => {
        const getData = async () => {
            const fetchedData = await client.fetch(query);
            setData(fetchedData);
        }
        getData();
    }, []);
    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Featured Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
                    {data.map((item: Product, index) => (
                        <div className='col-span-1 flex items-start flex-col gap-2' key={index}>
                            <div className='w-[200px] h-[200px]'>
                                <Image src={item.image} width={200} height={200} alt='image' className='w-full object-cover h-full' />
                            </div>
                            <div className='flex justify-between items-center gap-2'>
                                <h3 className='line-clamp-1'>{item.name}</h3>
                                <StarRatings
                                    starRatedColor="orange"
                                    numberOfStars={4}
                                    rating={3}
                                    starDimension='10px'
                                    starSpacing='2px'
                                    name='rating'
                                />
                            </div>
                            <span className='text-sm'>{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts