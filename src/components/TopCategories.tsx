'use client'
import { client } from '@/sanity/client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const query = `*[_type == 'newProducts']{
    _id,
    name,
    "image":image.asset->url,
    price
}[8...12]`
const TopCategories = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const data = await client.fetch(query)
            setData(data)
        }
        getdata()
    }, [])
    return (
        <section className='my-10 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Top Categories</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
                    {
                        data.map((item: { _id: string; name: string; image: string; price: number }, index) => (
                            <div className='col-span-1  flex items-center flex-col gap-4' key={index}>
                                <div className='bg-[#F6F7FB] md:w-full p-8 md:p-6 py-4 flex justify-center rounded-full h-[240px] w-[200px]'>
                                    <Image src={item.image} width={200} height={240} alt='image' className='object-cover' />
                                </div>
                                <Link href={`/shop/${item._id}`} className='flex flex-col gap-2'>
                                    <span className='text-sm line-clamp-1'>{item.name}</span>
                                    <span className='text-sm'>${item.price + ' $'}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TopCategories