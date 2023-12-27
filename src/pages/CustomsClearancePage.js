import React, { useEffect } from 'react'
import CCHeader from '../features/customs clearance/CCHeader'
import CCTopSection from '../features/customs clearance/CCTopSection'
import CCSecondSection from '../features/customs clearance/CCSecondSection'
import CCLoctions from '../features/customs clearance/CCLoctions'
import CCForthSection from '../features/customs clearance/CCForthSection'
import CCTestimonials from '../features/customs clearance/CCTestimonials'
import Footer from '../features/footer/Footer'
import WhatsApp from '../features/chat/WhatsApp'
import { useLocation } from 'react-router-dom'

function CustomsClearancePage() {

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/customs-clearance") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return (
    <div>
      <CCHeader/>
      <CCTopSection/>
      <CCSecondSection/>
      <CCLoctions/>
      <CCForthSection/> 
      <CCTestimonials/>
      <Footer/>
      <WhatsApp/>
    </div>
  )
}

export default CustomsClearancePage