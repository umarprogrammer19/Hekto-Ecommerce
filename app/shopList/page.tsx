import Heading from '@/components/Heading'
import React from 'react'
import ShopPage from './ShopPage'
import Image from 'next/image'

function page() {
  return (
    <div>
        <Heading heading='Shop List' path1='Home' path2='Pages' path3='ShopList'/>
        <ShopPage/>
        <div className="flex justify-center items-center my-9 ">
        <Image src={"/banner2.png"} alt={"banner"} width={1000} height={1000} />
      </div>
    
    </div>
  )
}

export default page