"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "@/components/Heading";
import RelatedProducts from "@/components/RelatedProducts";
import ProductsDescriptions from "@/components/ProductsDescriptions";
import Logos from "@/components/Logos";
import StarRatings from "react-star-ratings";
import { client } from "@/sanity/lib/client";

interface Products {
  _id: string,
  imagePath: string;
  name: string;
  price: string;
  description: string;
  category: string;
}

function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Products>();

  const query = `*[_type == "product"]{
      _id,
      name,
      "imagePath": imagePath.asset->url,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
   }`;

  useEffect(() => {

    (async () => {
      const products = await client.fetch(query);
      const index = products.findIndex((item: { _id: string }) => params.id == item._id);
      const pro = products[index];
      setData(pro);
    })()
  }, [])
  const [selectedImage, setSelectedImage] = useState<string>(data?.imagePath || "");

  function handleImageClick(image: string): void {
    setSelectedImage(image);
  }
  console.log(data, selectedImage);


  return (
    <main>
      <Heading
        heading="Product Details"
        path1="Home"
        path2="Pages"
        path3="Product Details"
      />
      {data && <section className="my-20">
        <div className="max-w-[84%] mx-auto">
          <div className="bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8">
            <div className="flex flex-row gap-4 md:gap-9 items-center md:w-[50%]">
              <div className="">
                <Image
                  className="p-3 shadow-lg"
                  src={data.imagePath}
                  width={100}
                  height={100}
                  alt="image"
                />
                <Image
                  className="p-3 shadow-lg"
                  src={data.imagePath}
                  width={100}
                  height={100}
                  alt="image"
                />
                <Image
                  className="p-3 shadow-lg"
                  src={data.imagePath}
                  width={100}
                  height={100}
                  alt="image"
                />
              </div>
              <div className="  items-center shadow-xl">
                <Image
                  onClick={() => handleImageClick(data.imagePath)}
                  src={data.imagePath}
                  width={300}
                  height={300}
                  alt="image"
                  className="w-[300px] p-3 object-cover "
                />
              </div>
            </div>
            <div className="md:w-[45%] flex items-start gap-4 flex-col">
              <h3 className="text-3xl font-bold">{data?.name}r</h3>
              <div className="inline-flex gap-x-3 items-center">
                <StarRatings
                  starRatedColor="orange"
                  numberOfStars={5}
                  rating={4}
                  starDimension="20px"
                  starSpacing="2px"
                  name="rating"
                />
                <span>(22)</span>
              </div>
              <div className="inline-flex gap-x-5">
                <span className="text-sm text-[#151875] font-bold">$26.00</span>
                <span
                  style={{ textDecoration: "line-through" }}
                  className="text-sm  text-[#FB2E86]"
                >
                  {data?.price}
                </span>
              </div>
              <span className="text-sm">Color</span>
              <p className="text-sm text-[#A9ACC6]  leading-[20px]">
                {data?.description}
              </p>
              <span className="px-4 py-1 text-sm hover:bg-opacity-70 cursor-pointer bg-[#FB2E86] rounded-[6px] text-[#ffffff] font-bold">
                Add To cart{" "}
              </span>
              <span className="text-sm text-[#151875] font-bold">
                Categories: {data?.category}
              </span>
              <span className="text-sm text-[#151875] font-bold">Tags</span>
              <span className="text-sm text-[#151875] font-bold">Share</span>
            </div>
          </div>
        </div>
      </section>}
      <ProductsDescriptions />
      <RelatedProducts />
      <Logos />
    </main>
  );
}

export default Page;
