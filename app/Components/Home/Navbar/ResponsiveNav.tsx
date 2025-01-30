'use client'

import React from 'react'
import MobileResponsive from './MobileResponsive'
import Nav from './Nav'

const ResponsiveNav = () => {
  const [showNav, setshowNav] = React.useState(false);
  const showNavHandler = ()=> setshowNav(true);
  const closeNavHandler = ()=> setshowNav(false);

  return (
    <>
    <Nav openNav={showNavHandler}/>
    <MobileResponsive showNav={showNav} closeNav={closeNavHandler}/>
    </>
  )
}

export default ResponsiveNav