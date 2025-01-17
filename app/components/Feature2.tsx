import Image from "next/image"

interface Props {
  heading: string
}

const data = [
  {
    img: "/offers/delivery.png",
    label: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/offers/cashback.png",
    label: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/offers/quality.png",
    label: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/offers/hours.png",
    label: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
]

function Feature2({ heading }: Props) {
  return (
    <div className="max-w-[1920px] mx-auto my-20 lg:mx-44 xl:mx-80 px-4">
      <h1 className="text-[#151875] text-center text-[32px] sm:text-[36px] lg:text-[42px] py-2 font-[700]">
        {heading}
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-48">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="shadow-lg shadow-[#dcd9d9] text-center flex justify-center items-center gap-y-8 flex-col h-[320px] w-full sm:w-[270px] mx-auto"
            >
              <div>
                <Image
                  className="w-[65px] sm:w-[75px] lg:w-[85px]"
                  src={item.img}
                  alt={item.label}
                  width={1000}
                  height={1000}
                />
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] pb-4 text-[#151875] font-[600] leading-[25.78px]">
                  {item.label}
                </h2>
                <p className="leading-[25.6px] text-[#1A0B5B4D] font-[700] text-[14px] sm:text-[15px] lg:text-[16px]">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Feature2
