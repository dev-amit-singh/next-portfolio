'use client';
import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10 '>
        <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>
            Let's Work Together
        </h1>
        <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita minima odit nemo, temporibus cumque?</p>
        <form className='mt-8 block w-full overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 '>
                <input type="text" placeholder='First Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md b-[1.5px] border-opacity-15 outline-none w-full ' />
                <input type="text" placeholder='Last Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md b-[1.5px] border-opacity-15 outline-none w-full ' />
            </div>
            <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4 '>
                <input type="email" placeholder='Your Email Address' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md b-[1.5px] border-opacity-15 outline-none w-full ' />
                <input type="tel" placeholder='Mobile Nmuber' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md b-[1.5px] border-opacity-15 outline-none w-full ' />
            </div>
            <div className='bg-black mt-5 w-auto h-auto'>
                <select className='w-full bg-[#1e0e29] text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 opacity-15 outline-none'>
                    <option value="disabled selected">select an option</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Development</option>
                </select>
            </div>
            <textarea className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-800 opacity-70 outline-none' rows={7} placeholder='Massage'/>
            <div className='mt-4'>
                <button className='px-8 py-3.5  bg-[#7047df] text-white hover:bg-[#3f429d] transition-all duration-150 rounded-full'>Send Massage</button>
            </div>
            
        </form>
    </div>
  )
}

export default ContactForm
