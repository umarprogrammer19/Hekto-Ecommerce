/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const UserProfile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
    })
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('/api/users/profile')
                setUser(res.data.user)
            } catch (error: any) {
                alert(error.response.data.message)
            }
        }
        getData()
    }, [])
    return (
        <section className='relative py-20'>
            <div className='max-w-[94%] mx-auto'>
                <div className='flex justify-start items-center gap-8'>
                    <div className='relative'>
                        <Image src='/author.png' alt='Image' width={200} height={200} className='rounded-full mb-4' />
                    </div>
                    <div>
                        <span className='text-lg'>Hello,</span>
                        <h3 className='text-3xl font-bold mt-1'>{user.name.toLocaleUpperCase()}</h3>
                    </div>
                </div>
                <Tabs defaultValue="account">
                    <div className='flex justify-center items-center mt-8 gap-12'>
                        <div className='w-[23%] bg-[#F6F6F6] p-8'>
                            <TabsList className='flex flex-col w-full items-start text-lg'>
                                <TabsTrigger value="dashboard">DashBoard</TabsTrigger>
                                <TabsTrigger value="my-profile">My Profile</TabsTrigger>
                                <TabsTrigger value="account">DashBoard</TabsTrigger>
                                <TabsTrigger value="account">DashBoard</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                        </div>
                        <div className='w-[77%]'>
                            <TabsContent value="dashboard">Make changes to your account here.</TabsContent>
                            <TabsContent value="my-profile">Change your password here.</TabsContent>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default UserProfile