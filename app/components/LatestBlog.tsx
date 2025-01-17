import Image from "next/image";
export default function LeatestBlog() {
  const blogPosts = [
    {
      id: 1,
      author: "SaberAli",
      date: "21 August,2020",
      title: "Top essential Trends in 2021",
      description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
      imgSrc: "/blog/blog1.png",
    },
    {
      id: 2,
      author: "Surfuxion",
      date: "21 August,2020",
      title: "Top essential Trends in 2021",
      description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
      imgSrc: "/blog/blog2.png",
    },
    {
      id: 3,
      author: "SaberAli",
      date: "21 August,2020",
      title: "Top essential Trends in 2021",
      description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
      imgSrc: "/blog/blog3.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-blue-900 mb-8">
        Latest Blog
      </h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <Image
              src={post.imgSrc}
              alt={post.title}
              className="h-48 sm:h-40 lg:h-56 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Author and Date */}
              <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 flex-grow">
                {post.description}
              </p>

              {/* Button */}
              <button className="text-blue-500 underline mt-4 self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
