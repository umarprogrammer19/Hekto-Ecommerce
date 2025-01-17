
import Logos from '@/components/Logos'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <section>
            {/* <Heading heading='404 Not Found' /> */}
            <div className='max-w-[84%] mx-auto my-20 flex justify-center items-center flex-col gap-2'>
                <Image src='/error.png' width={800} height={800} alt='image' />
                <Link href='/'>
                    <Button size={"lg"} variant={"destructive"} >Back To Home</Button>
                </Link>
            </div>
            <Logos />
        </section>
    )
}

export default NotFound