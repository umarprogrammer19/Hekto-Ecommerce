import SignUp from '@/components/SignUp'
import React from 'react'

const signUp = () => {
  return (
    <section className='relative h-screen bg-[url("/stylebg.jpg")] bg-cover bg-center'>
      <div className='md:max-w-[70%] max-w-[96%] mx-auto'>
        <SignUp />
      </div>
    </section>
  )
}

export default signUp