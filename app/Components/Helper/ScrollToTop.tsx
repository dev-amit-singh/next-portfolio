'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const[isVisible, setisVisible]=useState(false)
    useEffect(()=>{
        const togglevissible =()=>{
            if(window.scrollY > 300){
                setisVisible(true);
            }
            else{
                setisVisible(false);
            }
        };
        window.addEventListener("scroll", togglevissible);

        return()=>{
            window.removeEventListener("scroll", togglevissible);
        };        
    },[]);
     const scrollToTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
     };
  return ( 
    <div className='fixed bottom-4 animate-pulse right-4'>
        {isVisible && (
            <button onClick={scrollToTop} className='bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
            <FaArrowUp/>
            </button>)}
    </div>
  )
}

export default ScrollToTop