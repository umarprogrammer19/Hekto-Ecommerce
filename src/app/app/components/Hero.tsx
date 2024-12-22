'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  return (
    <div className="relative w-full bg-[#F3F3F3] overflow-hidden flex flex-col md:flex-row items-center justify-between">

      {/* Left Section for Mobile & Desktop */}
      <div className="w-full md:w-1/2 h-full flex flex-col md:flex-row items-center justify-start pl-6 md:pl-16 relative">

        {/* Bulb Image */}
<div className="relative md:absolute top-[-30px] left-[-30px] md:left-[-100px]">
  <Image src="/images/bulb.png" alt="Bulb" width={300} height={300} className="object-contain" />
</div>


        {/* Text Content - Aligning next to the bulb */}
        <div className="relative mt-6 md:mt-0 md:ml-6 text-center md:text-left">
          {/* Pink Text */}
          <p className="text-[#FB2E86] text-lg md:text-xl font-normal mb-2">
            Best Furniture For Your Castle...
          </p>

          {/* Bold Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-4">
            New Furniture Collection Trends in 2020
          </h1>

          {/* Description */}
          <p className="text-sm md:text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
            phasellus non in justo.
          </p>

          {/* Shop Now Button */}
          <Link href="/shoplist">
            <button className="px-6 py-2 bg-[#FB2E86] text-white font-text rounded-md shadow-md hover:bg-pink-600">
              Shop Now
            </button>
          </Link>
        </div>

      </div>

      {/* Right Section (Desktop, Mobile - Scrollable) */}
      <div className="w-full md:w-1/2 h-full relative flex flex-col items-center justify-start">

        {/* Pink Background Image */}
        <div
          className="absolute top-[60px] w-[380px] md:w-[450px] h-[380px] md:h-[450px] bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/images/pink.png)' }}
        ></div>

        {/* Sofa Image */}
        <div className="relative z-10 mt-[80px] mb-[20px]">
          <Image src="/images/sofa.png" alt="Sofa" width={350} height={250} className="object-contain" />
        </div>

        {/* Blue Discount Badge */}
        <div
          className="absolute top-[40px] right-[75px] bg-cover bg-center w-[80px] h-[80px] flex flex-col justify-center items-center z-20"
          style={{ backgroundImage: 'url(/images/discount.png)' }}
        >
          <span className="text-xl font-bold text-white">50%</span>
          <span className="text-sm font-semibold text-white">OFF</span>
        </div>
      </div>

    </div>
  );
}

export default Hero;
