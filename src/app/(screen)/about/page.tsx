import About from '@/components/About'
import AboutClientSay from '@/components/AboutClientSay'
import AboutFeatures from '@/components/AboutFeatures'
import Heading from '@/components/Heading'
import React from 'react'

const AboutPage = () => {
    return (
        <main>
            <Heading heading='About Us' />
            <About />
            <AboutFeatures />
            <AboutClientSay />
        </main>
    )
}

export default AboutPage