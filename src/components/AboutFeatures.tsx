import Image from 'next/image'
import React from 'react'

const AboutFeatures = () => {
  return (
    <section className='mb-20 relative'>
      <div className='max-w-[84%] mx-auto'>
        <h2 className='md:text-3xl text-2xl font-bold text-center'>
          Our Features
        </h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
          {
            Array.from({ length: 4 }).map((_, index) => (
              <div className='col-span-1 flex items-center flex-col gap-4 shadow-2xl px-6 py-16' key={index}>
                <Image src='/Group.png' width={50} height={80} alt='image' />
                <h3 className='text-sm'>24/7 Support</h3>
                <span className='text-xs text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AboutFeatures