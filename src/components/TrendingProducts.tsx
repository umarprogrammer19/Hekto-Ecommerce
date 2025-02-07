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
    }[17...21]`
const query2 = `*[_type == 'newProducts']{
    _id,
      name,
        "image":image.asset->url,
        price
    }[17...21]`
const TrendingProducts = () => {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const data = await client.fetch(query)
            setData(data)
        }
        getdata()
        const getdata2 = async () => {
            const data = await client.fetch(query2)
            setData2(data)
        }
        getdata2()
    }, [])
    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Trending Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                    {
                        data.map((item: { _id: string; name: string; image: string; price: number }, index) => (
                            <div className='col-span-1 shadow-2xl pb-6 flex items-center flex-col gap-2' key={index}>
                                <div className='bg-[#F6F7FB] w-full py-4 flex justify-center h-[200px]'>
                                    <Image src={item.image} width={200} height={200} alt='image' className='object-cover' />
                                </div>
                                <Link href={`/shop/${item._id}`}>
                                    <div className='p-3 flex flex-col gap-2 items-center'>
                                        <h3 className='text-xl text-[#FB2E86] line-clamp-1'>{item.name}</h3>
                                        <span className='text-sm'>{item.price + ' $'}</span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-between gap-6 items-center mt-10 md:flex-row flex-col'>
                    <div className='px-4 py-2 md:w-[35%] w-full md:max-h-[270px] bg-[#FFF6FB] flex flex-col gap-2 '>
                        <h4 className='text-xl font-bold'>23% off in all products</h4>
                        <span className='underline text-[#FB2E86]'>Shop Now</span>
                        <div className='flex justify-end items-center'>
                            <Image src='/clock.png' width={200} height={200} alt='image' />
                        </div>
                    </div>
                    <div className='px-4 py-2 md:w-[35%] w-full md:min-h-[270px] bg-[#FFF6FB] flex flex-col gap-10 '>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-xl font-bold'>23% off in all products</h4>
                            <span className='underline text-[#FB2E86]'>Shop Now</span>
                        </div>
                        <div className='flex justify-end items-center'>
                            <Image src='/draw.png' width={250} height={200} alt='image' />
                        </div>
                    </div>
                    <div className='md:w-[30%] w-full flex flex-col gap-6'>
                        {
                            data2.map((item: { _id: string; name: string; image: string; price: number }, index) => (
                                <div className='flex gap-2 items-center' key={index}>
                                    <div className='bg-[#F5F6F8] px-2 h-[60px]'>
                                        <Image src={item.image} width={60} height={60} alt='image' />
                                    </div>
                                    <Link href={`/shop/${item._id}`}>
                                        <div className='flex flex-col gap-1 items-start'>
                                            <span className='text-sm line-clamp-1'>{item.name}</span>
                                            <span className='text-sm'>{item.price + ' $'}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendingProducts