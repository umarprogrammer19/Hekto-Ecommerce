'use client'
import { client } from '@/sanity/client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings';
import { useCartContext } from './contextApi/AddToaCart';  // Import the CartContext

const Products = (id: { id: string }) => {
    const query = `*[_type == 'newProducts' && _id == "${id.id}"]{
            _id,
            name,
            "image":image.asset->url,
            price,
            description,
            category
        }`

    const { addToCart } = useCartContext();  // Destructure addToCart from the context
    const [data, setData] = useState({
        _id: '',
        name: '',
        image: '',
        price: '',
        description: '',
        category: '',
        weight: ''
    })

    const [showPopup, setShowPopup] = useState(false);  // State to control the popup visibility

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await client.fetch(query);
            setData(fetchedData[0]);
        }
        getData();
    }, [query]);

    const handleAddToCart = () => {
        addToCart({
            id: data._id,
            name: data.name,
            price: parseFloat(data.price),  
            quantity: 1,
            image: data.image
        });

        // Show the success popup
        setShowPopup(true);

        // Hide the popup after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);
    }

    return (
        <section className='my-20'>
            <div className='max-w-[84%] mx-auto'>
                <div className='bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8'>
                    <div className='md:w-[15%] hidden md:flex flex-col gap-4 items-center'>
                        <Image src={data.image} width={150} height={100} alt='image' />
                        <Image src={data.image} width={150} height={100} alt='image' />
                        <Image src={data.image} width={150} height={100} alt='image' />
                    </div>
                    <div className='md:w-[40%]'>
                        <Image src={data.image} width={400} height={100} alt='image' />
                    </div>
                    <div className='md:w-[45%] flex items-start gap-4 flex-col'>
                        <h3 className='text-3xl font-bold'>{data.name}</h3>
                        <StarRatings
                            starRatedColor="orange"
                            numberOfStars={5}
                            rating={4}
                            starDimension='20px'
                            starSpacing='2px'
                            name='rating'
                        />
                        <span className='text-sm'>${data.price + ' $'}</span>
                        <span className='text-sm'>Color</span>
                        <p className='text-sm'>{data.description}</p>
                        <span
                            onClick={handleAddToCart}  // Call the handleAddToCart function when clicked
                            className='px-4 p-2 bg-red-500 text-white cursor-pointer'>
                            Add To Cart
                        </span>
                        <span className='text-sm'>Categories: {data.category}</span>
                        <span className='text-sm'>Weight: {data.weight}</span>
                        <span className='text-sm'>Share</span>
                    </div>
                </div>
            </div>

            {/* Popup Notification */}
            {showPopup && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                    Item added to cart successfully!
                </div>
            )}
        </section>
    )
}

export default Products;
