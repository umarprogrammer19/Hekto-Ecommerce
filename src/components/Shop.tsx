'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useCartContext } from './contextApi/AddToaCart';
import { client } from '@/sanity/client';
import Link from 'next/link';

const Shop = () => {
    const { addToCart } = useCartContext();
    const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
    const [showPopup, setShowPopup] = useState(false);
    interface Product {
        _id: string;
        name: string;
        image: string;
        price: number;
    }

    const [data, setData] = useState<Product[]>([])
    const query = `*[_type == 'newProducts']{
        _id,
          name,
            "image":image.asset->url,
            price
        }`
    useEffect(() => {
        const getdata = async () => {
            const data = await client.fetch(query)
            setData(data)
        }
        getdata()
    }, [query])
    const handleAddToCart = (index: number) => {
        setLikedItems((prev) => {
            const newLikedItems = new Set(prev);
            if (!newLikedItems.has(index)) {
                newLikedItems.add(index);
                addToCart({
                    id: data[index]._id,
                    name: data[index].name,
                    price: data[index].price,  // Ensure the price is a number
                    quantity: 1,
                    image: data[index].image
                });

                // Show the popup
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
            }
            return newLikedItems;
        });
    };

    return (
        <section className="my-20">
            <div className="max-w-[84%] mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
                    {data.map((item: { _id: string; name: string; image: string; price: number }, index) => (
                        <div
                            key={index}
                            className="col-span-1 flex items-center flex-col gap-2 group relative"
                        >
                            {/* Card */}
                            <div className="bg-[#F6F7FB] w-full py-4 flex justify-center relative group wf">
                                <div className='w-[200px] h-[200px]'>
                                    <Image
                                        src={item.image}  // Dynamically set the image source based on the index
                                        width={200}
                                        height={200}
                                        alt={`Product ${index + 1}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                {/* Heart Icon (Visible only on hover) */}
                                <div
                                    className={`absolute top-2 right-2 p-2 rounded-full cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100 ${likedItems.has(index)
                                        ? 'bg-red-500 text-white'
                                        : 'bg-transparent text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                        }`}
                                    onClick={() => handleAddToCart(index)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                            </div>
                            <Link href={`/shop/${item._id}`}>
                                {/* Product Info */}
                                <h3 className="text-xl line-clamp-1">{item.name}</h3>
                                <span className="text-sm text-[#FB2E86]">{item.price + ' $'}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup Notification */}
            {showPopup && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                    Item added to cart successfully!
                </div>
            )}
        </section>
    );
};

export default Shop;
