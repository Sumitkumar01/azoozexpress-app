import React, { useEffect } from 'react'
import FFPHeader from '../features/fulfilmentpackaging/FFPHeader';
import FFPTopSection from '../features/fulfilmentpackaging/FFPTopSection'
import FFPSecondSection from "../features/fulfilmentpackaging/FFPSecondSection"
import FFPThredSection from '../features/fulfilmentpackaging/FFPThredSection'
import FFPTestimonials from '../features/fulfilmentpackaging/FFPTestimonials'
import Footer from '../features/footer/Footer';
import WhatsApp from '../features/chat/WhatsApp';
import { useLocation } from 'react-router-dom';




function FulfilmentPackagingPage() {
  
  
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/fulfilment-and-packaging") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <>
    <FFPHeader/>
    <FFPTopSection/>
    <FFPSecondSection/>
    <FFPThredSection/>
    <FFPTestimonials/>
    <Footer/>
    <WhatsApp/> 
    </>
  )
}

export default FulfilmentPackagingPage