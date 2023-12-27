import React, { useEffect } from 'react'
import FForwadingHeader from '../features/freightforwading/FForwadingHeader'
import FFTopSection from '../features/freightforwading/FFTopSection'
import FFSecondSection from '../features/freightforwading/FFSecondSection'
import FFThridSection from '../features/freightforwading/FFThridSection'
import FFTestimonials from '../features/freightforwading/FFTestimonials'
import Footer from '../features/footer/Footer'
import WhatsApp from '../features/chat/WhatsApp'
import { useLocation } from 'react-router-dom'

function FreightForwadingPage() {

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/freight-forwading") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  

  
  return (
    <>
    <FForwadingHeader/>
    <FFTopSection/>
    <FFSecondSection/>
    <FFThridSection/>
    <FFTestimonials/>
    <Footer/>
    
    <WhatsApp/> 

    
    </>
  )
}

export default FreightForwadingPage