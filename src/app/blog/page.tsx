"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define TypeScript types for blog
type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

// Mock blog data for illustration purposes
const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog Post 1",
    author: "Author 1",
    date: "December 9, 2024",
    category: "Design",
    excerpt: "This is a brief excerpt from the blog post.",
    image: "/images/blog1.png", // Updated file name
  },
  {
    id: 2,
    title: "Blog Post 2",
    author: "Author 2",
    date: "December 8, 2024",
    category: "Technology",
    excerpt: "This is another brief excerpt from the second blog post.",
    image: "/images/blog2.png", // Updated file name
  },
  {
    id: 3,
    title: "Blog Post 3",
    author: "Author 3",
    date: "December 7, 2024",
    category: "Travel",
    excerpt: "An excerpt from the third blog post about travel.",
    image: "/images/blog3.png", // Updated file name
  },
];

const BlogPage = () => {
  return (
    <>
    <Header />
    <div>
      {/* Header Section */}
      <div className="py-16 ml-8 lg:ml-36 space-y-2">
        <h1 className="text-4xl font-bold text-[#001F54]">Blog</h1> {/* Dark blue */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <span className="text-black mx-2">.</span>
          <span className="text-[#FB2E86]">Latest Blogs</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-center px-6 lg:px-20 py-10">
        {/* Blog Posts Section */}
        <div className="lg:w-1/2">
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-10">
              <Image
                src={blog.image}
                alt={blog.title}
                width={870}
                height={453}
                className="w-[35rem] h-80 object-cover rounded-md"
              />
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                  <span>{blog.category}</span>
                </div>
                <h2 className="text-xl font-bold mt-2 text-[#001F54]">
                  {blog.title}
                </h2> {/* Dark blue */}
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <a
                  href="#"
                  className="text-[#001F54] font-semibold mt-2 inline-block"
                >
                  Read More
                </a> {/* Dark blue */}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 lg:pl-10 mt-10 lg:mt-0">
          {/* Search */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#001F54] mb-2">Search</h3> {/* Dark blue */}
            <input
              type="text"
              placeholder="Search here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#001F54]"
            />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#001F54] mb-2">Categories</h3> {/* Dark blue */}
            <ul className="space-y-2 text-gray-600">
              <li>Women (21)</li>
              <li>Men (15)</li>
              <li>Kids (9)</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#001F54] mb-2">Recent Posts</h3> {/* Dark blue */}
            <ul className="space-y-2">
              {[
                { id: 4, image: "/images/blog4m.png", title: "Recent Blog 1", date: "December 6, 2024" },
                { id: 5, image: "/images/blog5m.png", title: "Recent Blog 2", date: "December 5, 2024" },
                { id: 6, image: "/images/blog6m.png", title: "Recent Blog 3", date: "December 4, 2024" },
              ].map((blog) => (
                <li key={blog.id} className="flex items-center space-x-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#001F54]">{blog.title}</h4> {/* Dark blue */}
                    <p className="text-sm text-gray-500">{blog.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-bold text-[#001F54] mb-2">Tags</h3> {/* Dark blue */}
            <div className="flex flex-wrap gap-2">
              {["Design", "Technology", "Travel", "Fashion", "Food"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-sm text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BlogPage;
