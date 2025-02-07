'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import { client } from '@/sanity/client';
import axios from 'axios';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [islogin, setIslogin] = useState<boolean | undefined>(undefined)
    console.log(islogin)
    const query = (term: string) => `*[_type == 'newProducts' && name match '${term}*']{
        _id,
        name,
        "image": image.asset->url,
        price
    }[0...4]`;
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            setIsLoading(true);
            const fetchData = async () => {
                const data = await client.fetch(query(searchTerm));
                setData(data);
                setIsLoading(false);
            };
            fetchData();
        } else {
            setData([]);
        }
    }, [searchTerm]);
    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get('/api/users/profile')
            setIslogin(res.data.user?.isLogin)
        }
        getUser()
    }, [islogin])
    const logout = async () => {
        try {
            await axios.post('/api/users/logout')
            setIslogin(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <header className='relative z-10'>
            <div className='lg:block hidden py-2 bg-[#7E33E0]'>
                <div className='flex max-w-[84%] mx-auto justify-between items-center'>
                    <div className='flex justify-center gap-6 text-white items-center'>
                        <span>ammarshaikh50099@gmail.com</span>
                        <span>03162324240</span>
                    </div>
                    <div className='text-white flex gap-4 items-center'>
                        <Select>
                            <SelectTrigger className="w-24">
                                <SelectValue placeholder="English" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Urdu</SelectItem>
                                <SelectItem value="dark">Hindi</SelectItem>
                                <SelectItem value="system">Chinese</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-24">
                                <SelectValue placeholder="USD" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">PKR</SelectItem>
                            </SelectContent>
                        </Select>
                        {
                            islogin ? <p className='cursor-pointer' onClick={logout}>Logout</p> : <Link href='/login'>
                                <p className='cursor-pointer'>Login</p>
                            </Link>
                        }
                        <p>WishList</p>
                        <Link href='/cart' className='cursor-pointer'>
                            <ShoppingCartIcon />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='max-w-[84%] mx-auto py-4 lg:block hidden'>
                <div className='flex justify-between items-center text-black'>
                    <div>
                        <span className='font-bold text-2xl'>Hekto</span>
                    </div>
                    <div>
                        <ul className='flex items-center gap-8'>
                            <Link href='/'><li className='text-base'>Home</li></Link>
                            <Link href='/about'><li className='text-base'>About</li></Link>
                            <Link href='/blog'><li className='text-base'>Blog</li></Link>
                            <Link href='/shop'><li className='text-base'>Shop</li></Link>
                            <Link href='/contact'><li className='text-base'>Contact</li></Link>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center gap-6'>
                        <div className='relative'>
                            <input
                                type="text"
                                className='py-2 px-4 border border-gray-300 w-[250px]'
                                placeholder='Search'
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <div
                                className='bg-[#FB2E86] absolute right-0 top-0 flex justify-center items-center text-white h-full w-[50px] cursor-pointer'
                            >
                                <SearchIcon />
                            </div>
                            {searchTerm && (
                                <div className="absolute bg-white w-full mt-1 border border-gray-300 shadow-lg max-h-60 overflow-y-auto">
                                    {isLoading ? (
                                        <div>Loading...</div>
                                    ) : (
                                        data.length > 0 ? (
                                            data.map((product: { _id: string; name: string; image: string; price: number }) => (
                                                <Link href={`/shop/${product._id}`} key={product._id} onClick={() => setSearchTerm('')}>
                                                    <div className="flex items-center gap-4 p-2 hover:bg-gray-100 cursor-pointer justify-between w-full">
                                                        <div className='w-[60%]'>
                                                            <Image src={product.image} alt={product.name} className="object-contain" width={100} height={100} />
                                                        </div>
                                                        <p className='w-[100%] line-clamp-2 text-sm'>{product.name}</p>
                                                    </div>
                                                </Link>
                                            ))
                                        ) : (
                                            <div>No products found</div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile header */}
            <div className='lg:hidden block py-4 max-w-[88%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='font-bold text-2xl'>Hekto</span>
                    </div>
                    <div>
                        {
                            open ? <CloseIcon onClick={() => setOpen(!open)} className='fixed z-10 right-5 top-5' /> : <MenuIcon onClick={() => setOpen(!open)} />
                        }
                        <div className={`h-screen w-full fixed top-0 right-0 transition-all ease-in-out duration-500  ${open ? 'translate-x-0' : 'translate-x-full'} `}>
                            {
                                open ? (
                                    <div className={`h-full w-full absolute top-0 bg-[#7E33E0]`}>
                                        <div className='flex justify-between items-start ml-8 flex-col gap-10 my-20 text-white'>
                                            <div>
                                                <span className='font-bold text-4xl'>Hekto</span>
                                            </div>
                                            <div>
                                                <ul className='flex items-start gap-6 flex-col'>
                                                    <Link href='/' onClick={() => setOpen(!open)}><li className='text-xl font-semibold'>Home</li></Link>
                                                    <Link href='/about' onClick={() => setOpen(!open)}><li className='text-xl font-semibold'>About</li></Link>
                                                    <Link href='/blog' onClick={() => setOpen(!open)}><li className='text-xl font-semibold'>Blog</li></Link>
                                                    <Link href='/shop' onClick={() => setOpen(!open)}><li className='text-xl font-semibold'>Shop</li></Link>
                                                    <Link href='/contact' onClick={() => setOpen(!open)}><li className='text-xl font-semibold'>Contact</li></Link>
                                                    <Link href='/login' onClick={() => setOpen(!open)}><li className='text-xl font-semibold'>Login</li></Link>
                                                    <Link href='/cart' onClick={() => setOpen(!open)}><li className='text-xl font-semibold'>Cart</li></Link>
                                                </ul>
                                            </div>
                                            <div className='flex justify-between items-center gap-6 flex-col'>
                                                <div className='relative'>
                                                    <input
                                                        type="text"
                                                        className='py-2 px-4 border border-gray-300 w-[250px]'
                                                        value={searchTerm}
                                                        onChange={handleInputChange}
                                                    />
                                                    <div
                                                        className='bg-[#FB2E86] absolute right-0 top-0 flex justify-center items-center text-white  h-full w-[50px] cursor-pointer'
                                                    >
                                                        <SearchIcon />
                                                    </div>
                                                </div>
                                                {searchTerm && (
                                                    <div className="absolute bg-white w-full mt-1 border border-gray-300 shadow-lg max-h-60 overflow-y-auto flex flex-col gap-4">
                                                        {isLoading ? (
                                                            <div>Loading...</div>
                                                        ) : (
                                                            data.length > 0 ? (
                                                                data.map((product: { _id: string; name: string; image: string; price: number }) => (
                                                                    <div key={product._id} className="flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer rounded-lg shadow-md transition-all duration-300 ease-in-out">
                                                                        <Image
                                                                            src={product.image}
                                                                            alt={product.name}
                                                                            width={50}
                                                                            height={50}
                                                                            className="rounded-full object-cover border border-gray-200 shadow-sm"
                                                                        />
                                                                        <div className="flex flex-col justify-center">
                                                                            <span className="text-sm font-semibold text-gray-800">{product.name}</span>
                                                                            <span className="text-xs text-gray-500">{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>

                                                                ))
                                                            ) : (
                                                                <div>No products found</div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
