import LoginPage from '@/components/Login'
import React from 'react'

const Login = () => {
  return (
    <section className='relative bg-[url("/stylebg.jpg")] bg-cover bg-center h-screen'>
      <div className='max-w-[100%] md:max-w-[40%] mx-auto flex justify-center items-center'>
        <LoginPage />
      </div>
    </section>
  )
}

export default Login