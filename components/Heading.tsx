import React from 'react'

const Heading = ({ heading, path1, path2, path3 }: { heading: string, path1?: string, path2?: string, path3?: string }) => {
    return (
        <div className='w-full bg-[#F6F5FF] md:py-20 py-10 '>
            <div className=' ml-4 md:ml-48 '>
                <h2 className='md:text-3xl text-2xl text-[#101750] font-bold text '>{heading}</h2>
                <div className='flex gap-x-2'>
                    {path1 && <span className='set_lato font-[500]'>{path1}.</span>}
                    {path2 && <span className=' font-[500]'>{path2}.</span>}
                    <span className='set_lato font-[500] text-[#FB2E86]'>{path3}</span>
                </div>
            </div>
        </div>
    )
}

export default Heading