
import Heading from '@/components/Heading'
import Logos from '@/components/Logos'
import Shop from '@/components/Shop'

import React from 'react'

const ShopPage = () => {
    return (
        <main>
            <Heading heading='Shop Grid Default' path1='Home' path2='Pages' path3='Shop Grid Default'/>
            <Shop />
            <Logos/>
        </main>
    )
}

export default ShopPage
