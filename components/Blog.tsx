"use client";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/blog/blogs1.png",
      category: "Surf Auxion",
      date: "Aug 09 2020",
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: 2,
      image: "/blog/blogs2.png",
      category: "Lifestyle",
      date: "Sep 12 2020",
      title: "Nullam non nisi est sit amet facilisis magna.",
      description:
        "Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
      id: 3,
      image: "/blog/blogs3.png",
      category: "Travel",
      date: "Oct 15 2020",
      title: "Vestibulum ante ipsum primis in faucibus.",
      description:
        "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      image: "/blog/R1.png",
      title: "It is a long established fact",
      price: "$32.00",
    },
    { id: 2, image: "/blog/R2.png", title: "It is a long established fact", Date: "Aug 09 2020" },
    { id: 3, image: "/blog/R3.png", title: "It is a long established fact", Date: "Aug 09 2020" },
    { id: 4, image: "/blog/R4.png", title: "It is a long established fact", Date: "Aug 09 2020" },
  ];

  const saleProducts = [
    {
      id: 1,
      image: "/blog/S1.png",
      title: "It is a long established fact",
      price: "$32.00",
    },
    { id: 2, image: "/blog/S2.png", title: "It is a long established fact", Date: "Aug 09 2020" },
    { id: 3, image: "/blog/S3.png", title: "It is a long established fact", Date: "Aug 09 2020" },
  ];

  const offerProducts = [
    {
      id: 1,
      image: "/blog/P1.png",
      title: "Elit ornare in enim mauris.",
      Date: "Aug 09 2020",
    },
    {
      id: 2,
      image: "/blog/P2.png",
      title: "Elit ornare in enim mauris.",
      Date: "Aug 09 2020",
    },
    {
      id: 3,
      image: "/blog/P3.png",
      title: "Elit ornare in enim mauris.",
      Date: "Aug 09 2020",
    },
    {
      id: 4,
      image: "/blog/P4.png",
      title: "Elit ornare in enim mauris.",
      Date: "Aug 09 2020",
    },
  ];

  return (
    <section className="my-20 relative">
      <div className="max-w-[84%] mx-auto">
        <div className="flex justify-between flex-col md:flex-row gap-10">
          {/* Blog Section */}
          <div className="md:w-[80%] flex flex-col gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full flex items-start gap-4 flex-col"
              >
                <Image
                  src={blog.image}
                  width={8000}
                  height={8000}
                  alt={blog.title}
                  className="w-full"
                />
                <div className="flex gap-4 items-center">
                  <span className="bg-[#FFE7F9] md:px-10 px-6 text-sm py-1">
                    {blog.category}
                  </span>
                  <span className="bg-[#FFECE2] md:px-10 px-6 text-sm py-1">
                    {blog.date}
                  </span>
                </div>
                <h3 className="md:text-3xl text-2xl font-bold text-[#151875]">
                  {blog.title}
                </h3>
                <p className="text-sm text-[#8A8FB9]">{blog.description}</p>
                <span className="underline set_lato text-sm text-[#151875]">
                  Read More{" "}
                </span>
              </div>
            ))}
          </div>

          {/* Add more sections as needed */}

          <div className="md:w-[20%]  flex flex-col gap-10">
            <div>
              <span className="text-lg font-bold">Search</span>
              <div className="relative w-full mt-4">
                <input
                  type="text"
                  className="py-2 px-4 border placeholder:text-[#CBCBE0] border-[#CBCBE0] w-full"
                  placeholder="Search For Posts"
                />
                <div className="absolute right-2 top-2 ">
                  <IoSearch className="text-[#CBCBE0]" />
                </div>
              </div>
            </div>

            <div>
              <span className="text-[22px] text-[#151875] font-bold">Recent Post</span>
              <div className="w-full flex flex-col gap-8 mt-4">
                {recentPosts.map((post) => (
                  <div className="flex gap-2 items-center" key={post.id}>
                    <div className="bg-[#F5F6F8] px-2">
                      <Image
                        src={post.image}
                        width={100}
                        height={100}
                        alt={post.title}
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                      <span className="text-sm">{post.title}</span>
                      <span className="text-sm">{post.Date}</span>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[22px] text-[#151875] font-bold">Sale Product</span>
              <div className="w-full flex flex-col gap-8 mt-4">
                {saleProducts.map((product) => (
                  <div className="flex gap-2 items-center" key={product.id}>
                    <div className="bg-[#F5F6F8] px-2">
                      <Image
                        src={product.image}
                        width={60}
                        height={60}
                        alt={product.title}
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                      <span className="text-sm">{product.title}</span>
                      <span className="text-sm">{product.Date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[22px] text-[#151875] font-bold">Offer Product</span>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {offerProducts.map((product) => (
                  <div
                    className="flex flex-col text-center items-center gap-2"
                    key={product.id}
                  >
                    <Image
                      src={product.image}
                      width={200}
                      height={200}
                      alt={product.title}
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs">{product.title}</span>
                      <span className="text-xs">{product.Date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
