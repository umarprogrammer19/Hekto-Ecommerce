
// import { Label } from '@radix-ui/react-dropdown-menu';
// import React from 'react'

// const Login = () => {
//     return (
//         <section className='my-20'>
//             <div className='md:max-w-[70%] mx-auto flex justify-center items-center'>
//                 <div className='shadow-2xl flex flex-col gap-4'>
//                     <div className="w-full p-4 md:px-28  shadow-input">
//                         <h2 className="text-3xl text-center my-4 text-neutral-800 dark:text-neutral-200 font-bold">Login</h2>
//                         <p className='text-sm text-center'>Please login using account detail bellow.</p>
//                         <form className="my-12">
//                             <LabelInputContainer className="mb-8">
//                                 <Label htmlFor="email">Email Address</Label>
//                                 <Input id="email" placeholder="projectmayhem@fc.com" type="email" name='email' />
//                             </LabelInputContainer>
//                             <LabelInputContainer className="mb-8 relative">
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input id="password" placeholder="••••••••" type={'password'} name='password' />
//                             </LabelInputContainer>
//                             <h6 className=' text-sm my-2'><Link href='/forgot-password'>forgotPassword</Link></h6>
//                             <Button
//                                 className='w-full'
//                                 type="submit"
//                                 size={"lg"}
//                                 variant={"secondary"}
//                             >
//                                 Login &rarr;
//                                 <BottomGradient />
//                             </Button>
//                             <h2 className='text-center mt-4'>Don’t have an Account? Create account <Link className="text-blue-500 cursor-pointer" href="/signup">Sign Up</Link></h2>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// const BottomGradient = () => {
//     return (
//         <>
//             <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//             <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//         </>
//     );
// };

// const LabelInputContainer = ({
//     children,
//     className,
// }: {
//     children: React.ReactNode;
//     className?: string;
// }) => {
//     return (
//         <div className={cn("flex flex-col space-y-2 w-full", className)}>
//             {children}
//         </div>
//     );
// };

// export default Login
