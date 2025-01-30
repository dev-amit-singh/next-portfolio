'use client'

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(()=>{
      const initAOS=async()=>{
        await import ("aos");
        AOS.init({
          duration: 1000,
          easing: 'ease',
          once: true,
          anchorPlacement:"top-bottom"
        });
      };
      initAOS();
    },[])

  return (
    <div>
     <Hero />
     <About />
     <Services />
      <Projects />
      <Contact/>
      {/* <Footer/> */}


    </div>
  )
}

export default HomePage