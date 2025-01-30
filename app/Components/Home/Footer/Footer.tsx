import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-10 pb-10 bg-[#000000]'>
        <div>
            <Image src={"/images/logo.png"} alt='logo' className='mx-auto' width={180} height={180}/>
        </div>
        <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold'>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Projects</div>
            <div>contacts</div>
    
        </div>
        <p className='text-white text-opacity-60 mt-6 text-center'>@2025 All Right Reserved by Me</p>
    </div>
  )
}

export default Footer