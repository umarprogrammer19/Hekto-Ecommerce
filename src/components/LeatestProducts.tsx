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
    }[4...10]`
const LeatestProducts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const data = await client.fetch(query)
            setData(data)
        }
        getdata()
    }, [])
    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Leatest Products</h2>
                <div className='flex justify-center items-center gap-2 md:gap-16 md:mt-10 mt-6 text-sm md:flex-row flex-col'>
                    <span>New Arrival</span>
                    <span>Best Seller</span>
                    <span>Featured</span>
                    <span>Special Offer</span>
                </div>
                <div className='grid lg:grid-cols-3 grid-rows-2 md:grid-cols-2 grid-cols-1 gap-10 md:mt-16 mt-8'>
                    {
                        data.map((item: { _id: string, name: string, image: string, price: number }) => (
                            <Link key={item._id} href={`/shop/${item._id}`}>
                                <div className='col-span-1 flex flex-col gap-4'>
                                    <div className='bg-[#F6F7FB] w-[100%] h-[200px] py-4 flex justify-center'>
                                        <Image src={item.image} width={200} height={200} alt='image' className='object-cover' />
                                    </div>
                                    <div className='flex gap-2 items-start flex-col '>
                                        <h3 className='text-sm text-[#151875] line-clamp-1'>{item.name}</h3>
                                        <span className='text-xs text-[#FB2E86]'>{item.price + ' $'}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default LeatestProducts