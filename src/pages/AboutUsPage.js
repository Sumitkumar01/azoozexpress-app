import React, { useEffect } from 'react'
import AboutUsHeader from '../features/about/AboutUsHeader'
import AboutTopSection from '../features/about/AboutTopSection'
import AboutUsCard from '../features/about/AboutUsCard'
import AboutUsValue from '../features/about/AboutUsValue'
import Excellence from '../features/about/Excellence'
import AboutUsWork from '../features/about/AboutUsWork'
import ContactUs from '../features/about/ContactUs'
import Footer from "../features/footer/Footer"
import WhatsApp from "../features/chat/WhatsApp"
import { useLocation } from 'react-router-dom'

function AboutUsPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/azooz-about-page") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return (
    <div>
        <AboutUsHeader/>
        <AboutTopSection />
        <AboutUsCard />
        <AboutUsValue />
        <Excellence/>
        <AboutUsWork/> 
        <ContactUs/>
        <Footer />
        <WhatsApp/>
    </div>
  )
}

export default AboutUsPage