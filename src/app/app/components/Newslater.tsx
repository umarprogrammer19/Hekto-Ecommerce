'use client';
import Link from 'next/link';
import Image from 'next/image';

function Newslater() {
  return (
    <div className="w-full bg-white">
      {/* Newslater Section */}
      <div
        className="w-full bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#151875] mb-6">
            Get Latest Update By Subscribe Our Newsletter
          </h2>

          <Link href="/shoplist">
          <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-non text-lg font-medium">
            Shop Now
          </button>
          </Link>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full py-12">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Logos"
            width={800} // Adjust as per your design
            height={100} // Adjust as per your design
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Newslater;
