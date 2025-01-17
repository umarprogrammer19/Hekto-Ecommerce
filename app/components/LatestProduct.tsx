import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";

function LatestProduct() {
  return (
    <div className="max-w-[1920px] mx-5 sm:mx-10 lg:mx-32 xl:mx-72 my-20">
      {/* Header */}
      <div className="flex flex-col items-center justify-center my-5 text-center">
        <h1 className="text-[32px] sm:text-[36px] lg:text-[42px] font-[700] text-[#151875] leading-[40px] sm:leading-[45px] lg:leading-[49.22px]">
          Latest Products
        </h1>
        <div className="flex flex-wrap justify-center gap-4 py-3">
          <h2 className="text-[#FB4997] underline cursor-pointer">New Arrival</h2>
          <h2 className="text-[#151875] cursor-pointer">Best Seller</h2>
          <h2 className="text-[#151875] cursor-pointer">Special Offer</h2>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8 mx-auto">
        {/* Product Card */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[270px] mx-auto px-10 md:px-0 lg:w-[360px] flex flex-col justify-center items-center"
          >
            {/* Image Section */}
            <div className="w-full h-[200px] sm:h-[220px] lg:h-[270px] bg-[#F7F7F7] flex justify-center items-center relative">
              {index === 1 && (
                <div className="absolute top-4 left-4 bg-gray-200 rounded-full p-2">
                  <Image
                    src={"/features/sale.png"}
                    alt="sale"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              )}
              <Image
                src={`/features/chair${index + 5}.png`}
                width={2000}
                height={2000}
                alt={`chair-${index + 1}`}
                className="w-[150px] sm:w-[180px] lg:w-[220px] object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col items-center text-center py-4">
              <h3 className="text-[#151875] text-[16px] sm:text-[18px] font-medium">
                Comfort Handy Craft
              </h3>
              <div className="flex justify-center items-center gap-x-4 py-2">
                <p className="text-[#151875]">$42.00</p>
                <p className="text-[#FB2448] line-through">$65.00</p>
              </div>
              {index === 1 && (
                <div className="flex gap-4 py-2">
                  <BsCart2 size={20} className="text-[#2F1AC4] cursor-pointer" />
                  <FaRegHeart size={20} className="text-[#FB2448] cursor-pointer" />
                  <FaSearchPlus size={20} className="text-[#4A8BA0] cursor-pointer" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProduct;
