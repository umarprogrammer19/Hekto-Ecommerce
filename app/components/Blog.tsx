import Image from 'next/image'
import React from 'react'
import { IoSearch } from "react-icons/io5";


const Blog = () => {
    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <div className='flex justify-between gap-10'>
                    <div className='md:w-[80%] flex flex-col gap-8'>
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className='w-full flex items-start gap-4 flex-col'>
                                    <Image src='/blog2.png' width={300} height={300} alt='image' className='w-full' />
                                    <div className='flex gap-4 items-center'>
                                        <span className='bg-[#FFE7F9] md:px-10 px-6 text-sm py-1'>Surf Auxion</span>
                                        <span className='bg-[#FFECE2] md:px-10 px-6 text-sm py-1'>Aug 09 2020</span>
                                    </div>
                                    <h3 className='md:text-3xl text-2xl font-bold text-[#151875]'>Mauris at orci non vulputate diam tincidunt nec.</h3>
                                    <p className='text-sm text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                    <span className='underline text-sm text-[#151875]'>Read More </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className='md:w-[20%] hidden md:flex flex-col gap-10'>
                        <div>
                            <span className='text-lg font-bold'>Search</span>
                            <div className='relative w-full mt-4'>
                                <input type="text" className='py-2 px-4 border placeholder:text-[#CBCBE0] border-[#CBCBE0] w-full' placeholder='Search For Posts' />
                                <div className='absolute right-2 top-2 '>
                                    <IoSearch className='text-[#CBCBE0]' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Categories</span>
                            <div className='mt-4'>
                                <ul className='grid text-[#3F509E] text-sm grid-cols-2 grid-rows-3 gap-8'>
                                    <li>Hobbies(14)</li>
                                    <li>Hobbies(14)</li>
                                    <li>Hobbies(14)</li>
                                    <li>Hobbies(14)</li>
                                    <li>Hobbies(14)</li>
                                    <li>Hobbies(14)</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Recent Post</span>
                            <div className='w-full flex flex-col gap-8 mt-4'>
                                {
                                    Array.from({ length: 4 }).map((_, index) => (
                                        <div className='flex gap-2 items-center' key={index}>
                                            <div className='bg-[#F5F6F8] px-2'>
                                                <Image src='/chair3.png' width={60} height={60} alt='image' />
                                            </div>
                                            <div className='flex flex-col gap-1 items-start'>
                                                <span className='text-sm'>Executive Seat chair</span>
                                                <span className='text-sm'>$32.00</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Sale Product</span>
                            <div className='w-full flex flex-col gap-8 mt-4'>
                                {
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <div className='flex gap-2 items-center' key={index}>
                                            <div className='bg-[#F5F6F8] px-2'>
                                                <Image src='/chair3.png' width={60} height={60} alt='image' />
                                            </div>
                                            <div className='flex flex-col gap-1 items-start'>
                                                <span className='text-sm'>Executive Seat chair</span>
                                                <span className='text-sm'>$32.00</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Offer product</span>
                            <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-4'>
                                {
                                    Array.from({ length: 4 }).map((_, index) => (
                                        <div className='flex col-span-1 gap-2 items-center flex-col text-center' key={index}>
                                            <Image src='/bag.png' width={200} height={200} alt='image' />
                                            <div className='flex flex-col gap-1'>
                                                <span className='text-xs'>Duis lectus est.</span>
                                                <span className='text-xs'>$12.00 - $15.00</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <span className='text-lg font-bold'>Follow</span>
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Categories</span>
                            <div className='mt-4'>
                                <ul className='grid text-[#3F509E] text-sm grid-cols-3 grid-rows-2 gap-4'>
                                    <li>General</li>
                                    <li>General</li>
                                    <li>General</li>
                                    <li>General</li>
                                    <li>General</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog