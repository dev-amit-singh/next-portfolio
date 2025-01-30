import React from 'react'
import { navlinks } from '@/constant/constant'
import Link from 'next/link';
import { CgClose } from 'react-icons/cg'


type Props={
  showNav:boolean;
  closeNav:()=>void;
}

const MobileResponsive = ({closeNav,showNav}:Props) => {
const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div>
      <div className={`${navOpen} transform transition-all duration-500 fixed inset-0 z-[1000] bg-black opacity-80 w-full h-screen`}>

        <div className={` ${navOpen} transform transition-all duration-500 delay-300 text-white justify-center flex fixed flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z=[10000]`}>
          {navlinks.map((navlink) => {
            return (
              <Link key={navlink.id} href={navlink.url}>
                <p className='flex text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{navlink.lable}</p>
              </Link>
              );
          })}
          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white lg-hidden' />
          </div>
      </div>
    </div>
  )
}

export default MobileResponsive