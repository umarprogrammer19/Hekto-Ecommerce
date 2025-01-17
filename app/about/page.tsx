import About from "@/components/About"
import AboutClientSay from "@/components/AboutClient"
import Feature2 from "@/components/Feature2"
import Heading from "@/components/Heading"


const AboutPage = () => {
    return (
        <main>
            <Heading heading={"About Us"} path1="Home" path2="Pages" path3="About US"  />
            <About />
            <Feature2 heading={"Our Features"} className1="max-w-[1920px]  px-5 sm:mx-10 lg:mx-32 xl:mx-auto my-20" />
            <AboutClientSay />
        </main>
    )
}

export default AboutPage