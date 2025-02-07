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
}[0...4]`
const FeaturedProducts = () => {
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
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Featured Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                    {
                        data.map((item: { _id: string; name: string; price: number; image: string }) => {
                            return (
                                <Link key={item._id} href={`/shop/${item._id}`} >
                                    <div className='col-span-1 shadow-2xl h-[300px] flex items-center flex-col gap-2' >
                                        <div className='bg-[#F6F7FB] w-[100%] h-[200px] py-4 flex justify-center '>
                                            <Image src={item.image} width={200} height={200} alt='image' />
                                        </div>
                                        <h3 className='text-xl text-[#FB2E86] line-clamp-1'>{item.name}</h3>
                                        <span className='text-sm'>{item.price + ' $'}</span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts