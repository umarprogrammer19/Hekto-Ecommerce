import Heading from '@/components/Heading'
import Logos from '@/components/Logos'
import React from 'react'
import Order from './Order'

function page() {
  return (
    <div>
        <Heading heading='Order Completed' path1='Home' path2='Pages' path3='Order Completed'/>
        <Order/>
        <Logos />
    </div>
  )
}

export default page