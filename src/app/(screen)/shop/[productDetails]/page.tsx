import Heading from '@/components/Heading'
import Logos from '@/components/Logos'
import Products from '@/components/Products'
import ProductsDescriptions from '@/components/ProductsDescriptions'
import RelatedProducts from '@/components/RelatedProducts'
import React from 'react'

const page = ({ params }: { params: { productDetails: string } }) => {
    return (
        <main>
            <Heading heading='Product Details' />
            <Products id={params.productDetails} />
            <ProductsDescriptions />
            <RelatedProducts />
            <Logos />
        </main>
    )
}

export default page