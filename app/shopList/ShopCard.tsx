"use client"
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";
import StarRatings from "react-star-ratings";

interface Props {
  img: string;
  heading: string;
}

function ShopCard({ img, heading }: Props) {
  return (
    <div className="lg:w-[1141px] w-full lg:h-[254px] mx-auto   ">
      <div className="my-9">
         <div className="flex lg:justify-center lg:flex-row flex-col  lg:items-center gap-x-6">

        <div className="lg:w-[313.63px]">
          <Image src={img} width={1000} height={1000} alt={""} />
        </div>
        <div className="">
          <h1 className="text-[19.88px] py-2 text-[#111C85] font-bold">{heading}</h1>
          <div className="flex gap-x-6">
          <p className="text-[#111C85]">$26.00</p>
          <p className="text-[#FF2AAA]">$52.00</p>
          <StarRatings
              starRatedColor="orange"
              numberOfStars={5}
              rating={4}
              starDimension="15px"
              starSpacing="2px"
              name="rating"
            />
          </div>
          <p className="py-4 set_lato lg:w-[591.93px] text-[17.67px] text-[#9295AA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <div className="flex gap-x-8 items-center py-3 text-[#535399] ">
            <BsCart2 size={15}/>
            <HeartIcon size={15}/>
            <FaSearchPlus size={15}/>
          </div>
          
        </div>
        </div>
      </div>
     
      </div>
  );
}

export default ShopCard;
