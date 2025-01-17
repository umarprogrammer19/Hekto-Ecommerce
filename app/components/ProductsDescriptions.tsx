import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const ProductsDescriptions = () => {
    return (
        <section className='my-20 py-20 bg-[#F9F8FE]'>
            <div className='max-w-[84%] mx-auto'>
                <Tabs defaultValue="description" className="w-full">
                    <TabsList className='mb-6 ml-6'>
                        <TabsTrigger value="description">Description</TabsTrigger>
                        <TabsTrigger value="description">Reviews</TabsTrigger>
                        <TabsTrigger value="description">Details</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className='w-full flex flex-col gap-4'>
                        <span className='text-sm'>Varius tempor.</span>
                        <p className='text-sm'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        <span className='underline'>More details</span>
                        <ul className='flex flex-col gap-2 text-sm text-[#8A8FB9]'>
                            <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                            <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                            <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                            <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                        </ul>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default ProductsDescriptions