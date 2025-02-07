import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Footer = () => {
    return (
        <footer className='pt-20 bg-[#EEEFFB]'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex justify-between items-start md:flex-row flex-col gap-6 md:gap-0'>
                    <div className='flex flex-col gap-4'>
                        <span className='font-bold text-2xl'>Hekto</span>
                        <div className='relative'>
                            <input type="text" className='py-2 px-4 border border-gray-300 w-full' />
                            <div className='bg-[#FB2E86] absolute right-0 top-0 flex justify-center items-center text-white  h-full w-[50px] '>
                                <SearchIcon className='' />
                            </div>
                        </div>
                        <span className='text-xs text-[#8A8FB9]'>Contact Info</span>
                        <span className='text-xs text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h6 className='font-bold'>Catagories</h6>
                        <ul className='flex flex-col gap-4 text-sm text-[#8A8FB9]'>
                            <li>Laptops & Computers</li>
                            <li>Cameras & Photography</li>
                            <li>Smart Phones & Tablets</li>
                            <li>Video Games & Consoles</li>
                            <li>Waterproof Headphones</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h6 className='font-bold'>Customer Care</h6>
                        <ul className='flex flex-col gap-4 text-sm text-[#8A8FB9]'>
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h6 className='font-bold'>Pages</h6>
                        <ul className='flex flex-col gap-4 text-sm text-[#8A8FB9]'>
                            <li>Blog</li>
                            <li>Browse the Shop</li>
                            <li>Category</li>
                            <li>Pre-Built Pages</li>
                            <li>Visual Composer Elements</li>
                            <li>WooCommerce Pages</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-10 py-3 w-full bg-[#E7E4F8]'>
                <div className='max-w-[80%] mx-auto flex justify-between items-center'>
                    <span className='text-xs text-[#9DA0AE]'>©Webecy - All Rights Reserved</span>
                    <div className='flex gap-2'>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer