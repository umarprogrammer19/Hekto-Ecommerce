"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function Shop() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const pro = await client.fetch(query);
        setProducts(pro)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])


  return (
    <section className="my-20">
      <div className="max-w-[84%] mx-auto">
        <div className="flex justify-between items-center gap-10 md:flex-row flex-col">
          <div className="flex flex-col gap-1">
            <h3 className="md:text-[22px] text-[#151875] font-bold">
              Ecommerce Accessories & Fashion Items
            </h3>
            <span className="text-sm text-[#8A8FB9] ">
              About 9,620 results (0.62 seconds)
            </span>
          </div>
          <div className="flex gap-4 items-center md:flex-row flex-col">
            <span className="text-sm text-[#3F509E]">per page:</span>
            <input
              type="number"
              className="bg-transparent border border-gray-200 w-16 p-1"
            />
            <span className="text-sm  text-[#3F509E]">Sort by:</span>
            <select name="sort" id="sort" className="text-sm">
              <option value="newest  text-[#3F509E]">Best Match</option>
              <option value="oldest  text-[#3F509E]">Oldest</option>
            </select>
            <span className="text-[20px]  text-[#3F509E]">View:</span>
            <input
              type="number"
              className="bg-transparent border border-gray-200 p-2"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-4   md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {products.map((product: {
            _id: string;
            name: string;
            imagePath: string;
            price: number;
          }) => (
            <Link key={product._id} href={`/products/${product._id}`}>
              <div
                className="col-span-1 hover:opacity-65 hover:blur-0  flex items-center flex-col gap-2"
                key={product._id}
              >
                <div className="bg-[#F6F7FB] w-full lg:w-[220px] h-[250px]  py-4 flex items-center justify-center">
                  <Image
                    className="hover:scale-110 transition-all duration-300 overflow-hidden  object-cover "
                    src={product.imagePath}
                    width={150}
                    height={150}
                    alt={product.name}
                  />
                </div>
                <h3 className=" text-center text-[#151875] font-[700] text-[18px]">{product.name}</h3>
                <div className="flex gap-x-3">
                  <span className="text-sm text-[#151875]">$26.00</span>
                  <span
                    style={{ textDecoration: "line-through" }}
                    className="text-sm text-[#FB2E86] "
                  >
                    {product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

