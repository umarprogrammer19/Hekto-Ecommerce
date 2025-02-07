/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [button, setButton] = useState(false)
    const route = useRouter()
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true)
            if (userData.name.length === 0 || userData.email.length === 0 || userData.password.length === 0) {
                alert('Please fill in all the fields')
            }
            await axios.post('/api/users/signup', userData)
            route.push('/login')
        } catch (error: any) {
            alert(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (userData.name.length > 0 && userData.email.length > 0 && userData.password.length > 0) {
            setButton(true)
        } else {
            setButton(false)
        }
    }, [userData])

    return (
        <div className="w-full mx-auto h-full p-4 md:p-8 shadow-input relative">
            {
                loading ?
                    <div className="flex justify-center items-center">
                        <span>Wating for few seconds</span><Loader />
                    </div> :
                    <h2 className="text-3xl text-center my-4 text-neutral-800 dark:text-neutral-200 font-bold">Sign up to get started</h2>
            }
            <form className="my-8">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-8">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">Name</Label>
                        <Input id="name" placeholder="Tyler" type="text" value={userData.name} onChange={(e: any) => setUserData({ ...userData, name: e.target.value })} />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={userData.email} onChange={(e: any) => setUserData({ ...userData, email: e.target.value })} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8 relative">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type={showPassword ? "text" : "password"} value={userData.password} onChange={(e: any) => setUserData({ ...userData, password: e.target.value })} />
                    <div className="absolute top-6 right-0 pr-5 flex items-center">
                        {
                            showPassword ? <VisibilityIcon onClick={() => setShowPassword(!showPassword)} /> : <VisibilityOffIcon onClick={() => setShowPassword(!showPassword)} />
                        }
                    </div>
                </LabelInputContainer>
                {
                    button ?
                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Sign up &rarr;
                            <BottomGradient />
                        </button> :
                        null
                }
                <span className="text-center block mt-4">Already have an account? <a href="/login">Log in</a></span>
            </form>
        </div>
    )
}
const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default SignUp