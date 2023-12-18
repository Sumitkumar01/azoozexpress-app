import React from 'react'
import CCHeader from '../features/customs clearance/CCHeader'
import CCTopSection from '../features/customs clearance/CCTopSection'
import CCSecondSection from '../features/customs clearance/CCSecondSection'
import CCLoctions from '../features/customs clearance/CCLoctions'
import CCForthSection from '../features/customs clearance/CCForthSection'
import CCTestimonials from '../features/customs clearance/CCTestimonials'
import Footer from '../features/footer/Footer'
// import WhatsApp from '../features/chat/WhatsApp'

function CustomsClearancePage() {
  return (
    <div>
      <CCHeader/>
      <CCTopSection/>
      <CCSecondSection/>
      <CCLoctions/>
      <CCForthSection/>
      <CCTestimonials/>
      <Footer/>
      {/* <WhatsApp/> */}
    </div>
  )
}

export default CustomsClearancePage