import React from 'react'
import SectionHeading from './SectionHeading'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='pt-16 pb-16 bg-black '>
        <SectionHeading>About Me</SectionHeading>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
            
            <div data-aos="fade-in" data-aos-anchor-placement="top-center">
                <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 '>
                  Beautiful and responsive website with passion and Precision 
                </h1>
                <p className='mt-6 text-base text-gray-200 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ea vero culpa ipsam fugit. Corporis quasi dolores consequuntur. Consequuntur, nemo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo!</p>
                <div className='mt-8'>
                    <div className='flex items-center space-x-2 mb-6'>
                        <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                            <FaCheck className='text-white'/>
                        </div>
                            <p className='text-white ml-3px'>Frontend Devlopment</p>
                    </div>
                    <div className='flex items-center space-x-2 mb-6'>
                        <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
                            <FaCheck className='text-white'/>
                        </div>
                            <p className='text-white ml-3px'>Backend Devlopment</p>
                    </div>
                    <div className='flex items-center space-x-2 mb-6'>
                        <div className='w-7 h-7 bg-yellow-800 flex flex-col items-center justify-center'>
                            <FaCheck className='text-white'/>
                        </div>
                            <p className='text-white ml-3px'>SEO Specialist</p>
                    </div>
                </div>
            

            </div>

            {/* stats content */}
            <div data-aos="zoom-in" data-aos-delay="150" data-aos-anchor-placement="top-center" className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
                <div>
                    <Image src='/images/work.jpg' width={90} height={90} alt='image' className='mx-auto'/>
                    <p className='mt-3 font-bold text-xl text-white text-center'>100%</p>
                    <p className='text-base sm:text-lg text-gray-400 text-center'>Customer Satisfied</p>
                </div>
                <div>
                    <Image src='/images/projects.png' width={90} height={90} alt='image' className='mx-auto'/>
                    <p className='mt-3 font-bold text-xl text-white text-center'>50+</p>
                    <p className='text-base sm:text-lg text-gray-400 text-center'>Dynamic Projects</p>
                </div>
                <div>
                    <Image src='/images/employe.png' width={90} height={90} alt='image' className='mx-auto'/>
                    <p className='mt-3 font-bold text-xl text-white text-center'>20+</p>
                    <p className='text-base sm:text-lg text-gray-400 text-center'>Working with Team</p>
                </div>
                <div>
                    <Image src='/images/experience.png' width={90} height={90} alt='image' className='mx-auto'/>
                    <p className='mt-3 font-bold text-xl text-white text-center'>1+</p>
                    <p className='text-base sm:text-lg text-gray-400 text-center'>Work Experience</p>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default About