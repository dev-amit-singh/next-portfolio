'use client'

import React from 'react'
import Image from 'next/image'
import { navlinks } from '@/constant/constant'
import { GiHamburgerMenu } from "react-icons/gi"

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setnavbg] = React.useState(false);
  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setnavbg(true);
      }
      if (window.scrollY < 90) {
        setnavbg(false);
      }
    }
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    }
  }, []);
  return (
    <div className={`fixed ${navbg ? "bg-slate-800" : "fixed"} transition-all duration-200 w-full h-[10vh] z-[10]`}>
      <div className='flex justify-between items-center h-full w-[95%] sm:w-[90%] xl:[80%] mx-auto'>
        <Image src='/images/logo.png' width={80} height={80} className='ml-[1.5rem] sm:ml-0px' alt='Logo' />
        <div className='flex items-center space-x-10'>
          <div className='hidden lg:flex items-center space-x-8'>
          {navlinks.map((navlink) => {
            return (
              <a key={navlink.id} href={navlink.url} className='nav_link cursor-pointer'>
                  {navlink.lable}
                </a>
              );
            })}
          </div>
          <div className='flex items-center space-x-4'>
            <button className='md:px-10 md:py-3 px-8 py-3 text-slate-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>Hire me</button>
            <GiHamburgerMenu onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
