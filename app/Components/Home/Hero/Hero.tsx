'use client'

import React from 'react'
import {FaDownload} from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full h-screen pt-[4vh] md:pt-[12vh] bg-[#0f0715] overflow-hidden relative'>
        <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

                {/* text  */}
                <div>
                    <h1 data-aos="fade-left" className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300'>
                        Hello, I&rsquo;m <span className='text-[#f5a623]'>Amit Singh</span>
                    </h1>
                    <h1 data-aos="fade-right" data-aos-delay="100" className='text-bg text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
                       Full Stack Web Developer
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="200" className='mt-6 text-sm md:text-base text-white text-opacity-70'>
                        {/* description */}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam consequuntur tempore suscipit dolorem voluptatem sequi non fuga eligendi? Ipsam, sunt.
                    </p>
                    <button data-aos="zoom-in" data-aos-delay="300" className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center'>
                       <a href="https://drive.google.com/file/d/1tvxnDoHwgvHprRIOMfHG6Lq-zi4mnWee/view?usp=drivesdk">Visit W3Schools.com!</a>
                        <FaDownload className='ml-[3px]'/>
                    </button>
                </div>

                {/* image */}
                <div data-aos="zoom-in" data-aos-delay="100" className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden'>
                <Image
              src='/images/hero_image.jpg' // Make sure this path is correct
              alt='Hero Image'
              objectFit='cover'
              className='rounded-lg'
              width={500}
              height={500}
            />
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero
