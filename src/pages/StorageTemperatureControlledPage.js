import React, { useEffect } from 'react'
import STCHeader from '../features/storage-temperature-controlled/STCHeader'
import STCTopSection from '../features/storage-temperature-controlled/STCTopSection'
import STCSecondSection from '../features/storage-temperature-controlled/STCSecondSection'
import STCThredSection from '../features/storage-temperature-controlled/STCThredSection'
import STCTestimonials from '../features/storage-temperature-controlled/STCTestimonials'
import Footer from '../features/footer/Footer'
import WhatsApp from '../features/chat/WhatsApp'
import { useLocation } from 'react-router-dom'

function StorageTemperatureControlledPage() {

  
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/storage-temperature-controlled") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
    <STCHeader/>
    <STCTopSection/>
    <STCSecondSection/>
    <STCThredSection/>
    <STCTestimonials/>
    <Footer/>
    <WhatsApp/> 
    </>
  )
}

export default StorageTemperatureControlledPage