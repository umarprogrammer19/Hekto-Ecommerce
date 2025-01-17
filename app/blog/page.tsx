import Blog from '@/components/Blog'
import Heading from '@/components/Heading'
import Logos from '@/components/Logos'
import React from 'react'

const BlogPage = () => {
    return (
        <main>
            <Heading heading='Blog Page' />
            <Blog />
            <Logos />
        </main>
    )
}

export default BlogPage