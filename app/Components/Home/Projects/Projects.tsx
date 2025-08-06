'use client'
import React from 'react'
import SectionHeading from '../About/SectionHeading'
import { projectData } from '../../../../Data/Data'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id='projects' className='pb-16 pt-16 bg-[#050709] '>
        <SectionHeading>My Projects</SectionHeading>
        <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center '>
            {projectData.map((project) => {
                return(
                    <div key={project.id} className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300'>
                       
                      <Image src={project.image} alt='project' width={300} height={200} className='w-full' />
                       
                     
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects