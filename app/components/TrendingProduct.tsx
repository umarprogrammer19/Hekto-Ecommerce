import Image from "next/image";

function TrendingProduct() {
  return (
    <div className="max-w-[1920px] my-20 px-5 lg:px-10 xl:mx-44 2xl:mx-80">
      {/* Title */}
      <h1 className="text-center text-[28px] sm:text-[32px] lg:text-[42px] font-[600] py-3 leading-[1.2] text-[#1A0B5B]">
        Trending Products
      </h1>

      <div className="flex flex-col gap-y-10">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["img1", "img2", "img3", "img4"].map((img, index) => (
            <div
              key={index}
              className="w-full lg:w-[270px] shadow-lg shadow-gray-200 flex flex-col justify-center items-center"
            >
              <div className="w-full lg:w-[247px] h-[200px] md:h-[269.96px] mx-auto bg-[#F7F7F7]">
                <Image
                  src={`/trendingP/${img}.png`}
                  width={2000}
                  height={2000}
                  alt={"chair"}
                  className="w-full lg:w-[267px] h-full object-contain mx-auto"
                />
              </div>
              <p className="font-bold py-3 set_lato text-[#151875] text-center">
                Cantilever Chair
              </p>
              <div className="flex items-center gap-5">
                <p className="text-[12px]">$26.00</p>
                <p className="text-[12px] py-2 text-[#1518754D]">$42.00</p>
              </div>
            </div>
          ))}
        </div>

        {/* Discount Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Discount Item 1 */}
          <div className="p-5 flex flex-col lg:flex-row items-center w-full bg-[#FFF6FB] gap-5">
            <div className="flex-grow">
              <p className="text-[20px] sm:text-[24px] lg:text-[26px] font-[600] text-[#151875]">
                23% off in all products
              </p>
              <p className="text-[#FB2E86] underline py-2">Shop Now</p>
            </div>
            <Image
              src={"/trendingP/p1.png"}
              width={2000}
              height={2000}
              alt={"chair"}
              className="w-[150px] sm:w-[200px] lg:w-[213px] object-contain"
            />
          </div>

          {/* Discount Item 2 */}
          <div className="p-5 flex flex-col items-end w-full bg-[#FFF6FB] gap-5">
            <div className="flex-grow">
              <p className="text-[20px] sm:text-[24px] lg:text-[26px] font-[600] text-[#151875]">
                23% off in all products
              </p>
              <p className="text-[#FB2E86] underline py-2">View Collection</p>
            </div>
            <Image
              src={"/trendingP/p2.png"}
              width={2000}
              height={2000}
              alt={"chair"}
              className="w-[150px] sm:w-[250px] lg:w-[312px] object-contain"
            />
          </div>

          {/* Small Products */}
          <div className="flex flex-col gap-4">
            {["p3", "p4", "p5"].map((smallImg, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 w-full bg-[#F5F6F8] p-3"
              >
                <div className="w-[70px] sm:w-[100px]">
                  <Image
                    src={`/trendingP/${smallImg}.png`}
                    width={2000}
                    height={2000}
                    alt={"chair"}
                    className="w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-[#151875] font-[700]">Executive Seat Chair</p>
                  <p>$32.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
