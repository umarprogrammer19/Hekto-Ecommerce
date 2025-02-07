import Image from 'next/image'
import React from 'react'

const AboutClientSay = () => {
    return (
        <section className='py-16 bg-[#FBFBFF] md:mb-40 mb-10'>
            <div className='flex justify-center items-center flex-col gap-4 md:max-w-[50%] max-w-[90%] mx-auto text-center'>
                <h2 className='md:text-3xl text-2xl font-bold'>Our Client Say!</h2>
                <div className='flex gap-2 items-center justify-between mt-4'>
                    <Image src='/client.png' width={50} height={20} alt='image' />
                    <Image src='/client.png' width={50} height={20} alt='image' className='-mt-4' />
                    <Image src='/client.png' width={50} height={20} alt='image' />
                </div>
                <h6 className='text-sm'>Selina Gomez</h6>
                <span className='text-xs'>Ceo At Webecy Digital</span>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>
        </section>
    )
}

export default AboutClientSay